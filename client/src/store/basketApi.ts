import { createApi } from "@reduxjs/toolkit/query/react";
import type { Basket, Product, Item } from "../app/models/Product";
import { baseQueryWithErrorHandling } from "./baseApi";

export const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ["basket"],
  endpoints: (builder) => ({
    fetchBasket: builder.query<Basket, void>({
      query: () => ({ url: "basket" }),
      providesTags: ["basket"],
    }),
    addBasket: builder.mutation<
      Basket,
      { product: Product | Item; quantity: number }
    >({
      query: ({ product, quantity }) => {
        const productId = checkIfItem(product) ? product.productId : product.id;
        return {
          url: `basket?productId=${productId}&quantity=${quantity}`,
          method: "POST",
        };
      },
      onQueryStarted: async (
        { product, quantity },
        { dispatch, queryFulfilled },
      ) => {
        const productId = checkIfItem(product) ? product.productId : product.id;
        const patchResults = dispatch(
          basketApi.util.updateQueryData("fetchBasket", undefined, (draft) => {
            const existingItem = draft.items.find(
              (item) => item.productId === productId,
            );
            if (existingItem) existingItem.quantity += quantity;
            else
              draft.items.push({
                ...product,
                productId: productId,
                quantity,
              });
          }),
        );
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
          patchResults.undo();
        }
      },
    }),
    removeBasket: builder.mutation<
      Basket,
      { productId: number; quantity: number }
    >({
      query: ({ productId, quantity }) => {
        return {
          url: `basket?productId=${productId}&quantity=${quantity}`,
          method: "DELETE",
        };
      },
      onQueryStarted: async (
        { productId, quantity },
        { dispatch, queryFulfilled },
      ) => {
        const patchResults = dispatch(
          basketApi.util.updateQueryData("fetchBasket", undefined, (draft) => {
            const itemIndex = draft.items.findIndex(
              (item) => item.productId === productId,
            );
            if (itemIndex >= 0) {
              draft.items[itemIndex].quantity -= quantity;
              if (draft.items[itemIndex].quantity <= 0) {
                draft.items.splice(itemIndex, 1);
              }
            }
          }),
        );
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
          patchResults.undo();
        }
      },
    }),
  }),
});

export const { useFetchBasketQuery, useAddBasketMutation,useRemoveBasketMutation } = basketApi;

function checkIfItem(product: Product | Item): product is Item {
  return (product as Item).quantity !== undefined;
}
