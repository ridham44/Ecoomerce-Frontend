import appleWatch from '../assets/images/cardimage/ap watch.jpg'
import chanelPurse from '../assets/images/cardimage/chenel purse.jpg'
import heels from '../assets/images/cardimage/female hills.avif'
import jordanShoes from '../assets/images/cardimage/jordan shoes.jpg'
import lvPurse from '../assets/images/cardimage/lv purse.jpg'
import patekWatch from '../assets/images/cardimage/Patek Philippe watch.webp'

export const flashSaleProducts = [
  {
    id: 'apple-watch',
    title: 'Apple Watch Series',
    image: appleWatch,
    discount: '-40%',
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
  },
  {
    id: 'chanel-purse',
    title: 'Chanel Classic Purse',
    image: chanelPurse,
    discount: '-35%',
    price: 960,
    oldPrice: 1160,
    rating: 5,
    reviews: 75,
  },
  {
    id: 'patek-watch',
    title: 'Patek Philippe Watch',
    image: patekWatch,
    discount: '-30%',
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
  },
  {
    id: 'jordan-shoes',
    title: 'Air Jordan Sneakers',
    image: jordanShoes,
    discount: '-25%',
    price: 375,
    oldPrice: 400,
    rating: 4,
    reviews: 99,
  },
  {
    id: 'lv-purse',
    title: 'Louis Vuitton Purse',
    image: lvPurse,
    discount: '-25%',
    price: 375,
    oldPrice: 400,
    rating: 4,
    reviews: 76,
  },
  {
    id: 'heels',
    title: 'Women High Heels',
    image: heels,
    discount: '-20%',
    price: 275,
    oldPrice: 320,
    rating: 5,
    reviews: 63,
  },
]

const products = [...flashSaleProducts]

export default products
