import type { ReactNode } from "react"

export interface Product {
  id: number
  name: string
  description: string
  price: number
  pictureUrl: string
  type: string
  brand: string
  quantityInStock: number
}

export interface NavBarProps
{
  setIsDarkMode:(isDarkMode:boolean)=>void
  isDarkMode:boolean
}

export interface Basket {
  basketId: string
  items: Item[]
}

export interface Item {
  id: ReactNode
  productId: number
  name: string
  price: number
  pictureUrl: string
  brand: string
  type: string
  quantity: number
}
