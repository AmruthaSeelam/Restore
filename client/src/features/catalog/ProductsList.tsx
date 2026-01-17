
import { Box } from '@mui/material'
import type { ProductsListProps } from './Catalog'
import ProductCard from './ProductCard'

export default function ProductsList({products}:ProductsListProps) {
  return (
   <Box sx={{display:"flex", flexWrap:"wrap", gap:3, justifyContent:"center"}}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product}/>
          </li>
        ))}
     </Box>
  )
}
