import type { Product } from "../../app/models/Product";

export interface CatalogProps
{
    products:Product[]
}

export interface ProductsListProps
{
     products:Product[]
}

export interface ProductCardProps
{
    product:Product
}