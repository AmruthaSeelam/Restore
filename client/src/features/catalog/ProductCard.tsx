import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { ProductCardProps } from "./Catalog";
import { Link } from "react-router";
import { useAddBasketMutation } from "../../store/basketApi";

export default function ProductCard({ product }: ProductCardProps) {

  const [addToBasket,{isLoading}]=useAddBasketMutation();

  return (
    <Card elevation={3} sx={{ width: 280 , borderRadius:2, display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      <CardMedia
        sx={{ height: 240, backgroundSize: "cover" }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle2"
          sx={{ textTransform: "uppercase" }}
        >
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small" disabled={isLoading} onClick={()=>addToBasket({product,quantity:1})}>Add to Cart</Button>
        <Button size="small" component={Link} to={`/catalog/${product.id}`}>View</Button>
      </CardActions>
    </Card>
  );
}
