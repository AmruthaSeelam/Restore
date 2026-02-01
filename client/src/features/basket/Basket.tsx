import { Grid, Typography } from "@mui/material";
import { useFetchBasketQuery } from "../../store/basketApi"
import BasketItem from "./BasketItem";
import OrderSummary from "./OrderSummary";

export default function Basket() {
    const { data: basket, isLoading } = useFetchBasketQuery();

    if (isLoading) return <div>Loading...</div>

    if (!basket || basket?.items.length <= 0) return <Typography variant="h3">Basket is Empty</Typography>

    return (
      
            <Grid container spacing={2} >
                <Grid size={8}>
                {basket?.items.map((item) => <BasketItem item={item} />)}
                </Grid>
                <Grid size={4}>
                    <OrderSummary/>
                </Grid>
            </Grid>
    
    )
}
