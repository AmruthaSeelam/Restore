import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useFetchBasketQuery } from "../../store/basketApi";
import { Link } from "react-router-dom";

export default function OrderSummary() {
    const { data: basket } = useFetchBasketQuery();
    const subTotal = basket?.items?.reduce((sum, item) => sum += item.quantity * item.price, 0) ?? 0;
    const deliveryFee = subTotal / 100 > 100 ? 0 : 5;
    return (
        <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h4">Order Summary</Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                    Orders over $100 qualify for free delivery
                </Typography>
            </Box>

            <Box mb={3}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography color="textSecondary">Subtotal</Typography>
                    <Typography>${(subTotal / 100).toFixed(2)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography color="textSecondary">Discount</Typography>
                    <Typography>${"0.00"}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography color="textSecondary">Delivery</Typography>
                    <Typography>${deliveryFee.toFixed(2)}</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography color="textSecondary">Total</Typography>
                    <Typography>${((subTotal / 100) + deliveryFee).toFixed(2)}</Typography>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    fullWidth
                    component={Link}
                    to="/checkout"
                >
                    CheckOut
                </Button>
                <Button
                    color="primary"
                    size="large"
                    fullWidth
                    component={Link}
                    to="/catalog"
                >
                    Continue shopping
                </Button>
            </Box>
        </Paper>
    );
}
