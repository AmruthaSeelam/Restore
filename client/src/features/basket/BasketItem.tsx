import { Add, Close, Remove } from '@mui/icons-material';
import type { Item } from '../../app/models/Product'
import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import { useAddBasketMutation, useRemoveBasketMutation } from '../../store/basketApi';

export default function BasketItem(props: { item: Item }) {
  const { item } = props;
  const [addToBasket]=useAddBasketMutation();
  const [removeFromBasket]=useRemoveBasketMutation();
  return (
    <Paper sx={{ mb: 2, p: 1, borderRadius: 3, height: 140, display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
      <Box display={'flex'} gap={2}>
        <Box component='img' src={item.pictureUrl} sx={{
          width: 100,
          height: 100,
          objectFit: 'cover',
          borderRadius: '4px',
          ml: 3,
          mr: 3
        }} />
        <Box display={'flex'} flexDirection={'column'} gap={1}>
          <Typography variant='h6'>{item.name}</Typography>
          <Box display='flex' alignItems='center' gap={3}>
            <Typography sx={{ fontSize: '1.1rem' }}>
              ${(item.price / 100).toFixed(2)} x {item.quantity}
            </Typography>
            <Typography sx={{ fontSize: '1.1rem' }} color='primary'>
              ${((item.price * item.quantity) / 100).toFixed(2)}
            </Typography>
          </Box>
          <Grid container spacing={1} alignItems='center'>
            <IconButton
              onClick={() => removeFromBasket({productId: item.productId, quantity: 1})}
              color="error"
              size="small"
              sx={{ border: 1, borderRadius: 1, minWidth: 0 }}
            >
              <Remove />
            </IconButton>
            <Typography variant="h6">{item.quantity}</Typography>
            <IconButton
              onClick={() => addToBasket({product: item, quantity: 1})}
              color="success"
              size="small"
              sx={{ border: 1, borderRadius: 1, minWidth: 0 }}
            >
              <Add />
            </IconButton>
          </Grid>
        </Box>
      </Box>
      <IconButton
        onClick={() => removeFromBasket({productId: item.productId, quantity: item.quantity})}
        color='error'
        size="small"
        sx={{
          border: 1,
          borderRadius: 1,
          minWidth: 0,
          alignSelf: 'start',
        }}
      >
        <Close />
      </IconButton>
    </Paper>
  )
}
