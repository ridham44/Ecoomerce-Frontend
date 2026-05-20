import appleWatch from '../assets/images/cardimage/ap watch.jpg'
import audemarsPiguetWatch from '../assets/images/watch/Audemars Piguet home page image.jpg'
import chanelPurse from '../assets/images/cardimage/chenel purse.jpg'
import heels from '../assets/images/cardimage/female hills.avif'
import sunglasses from '../assets/images/cardimage/sunglasses.jpg'
import falconLego from '../assets/images/cardimage/falcon lego.jpg'
import macMini from '../assets/images/cardimage/mac mini.jpg'
import koenigsegg from '../assets/images/cardimage/koenigsegg scale model.png'
import diorLipstick from '../assets/images/cardimage/dior lipstick.jpg'
import diorLipstickTwo from '../assets/images/cardimage/dior lipstick2.jpg'
import mercedesJacket from '../assets/images/cardimage/Mercedes jacket.jpg'
import mercedesJacketTwo from '../assets/images/cardimage/Mercedes jacket2.jpg'
import sonyCamera from '../assets/images/cardimage/sony camera.jpg'
import sonyCameraTwo from '../assets/images/cardimage/sony camera2.jpg'
import gamingController from '../assets/images/cardimage/gaming controller.webp'
import gamingControllerTwo from '../assets/images/cardimage/gaming controller2.jpg'
import jordanShoes from '../assets/images/cardimage/jordan shoes.jpg'
import lvPurse from '../assets/images/cardimage/lv purse.jpg'
import patekWatch from '../assets/images/cardimage/Patek Philippe watch.webp'

export const flashSaleProducts = [
  {
    id: 'audemars-piguet-royal-oak',
    title: 'Audemars Piguet Royal Oak',
    image: audemarsPiguetWatch,
    discount: '-40%',
    price: 93000,
    oldPrice: 116000,
    rating: 5,
    reviews: 88,
    detailPath: '/product/audemars-piguet-royal-oak',
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

export const bestSellingProducts = [
  {
    id: 'best-patek-watch',
    title: 'Patek Philippe Watch',
    image: patekWatch,
    price: 260,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: 'best-lv-purse',
    title: 'Louis Vuitton Purse',
    image: lvPurse,
    price: 960,
    oldPrice: 1160,
    rating: 5,
    reviews: 75,
  },
  {
    id: 'best-apple-watch',
    title: 'Apple Watch Series',
    image: appleWatch,
    price: 160,
    oldPrice: 200,
    rating: 4,
    reviews: 88,
  },
  {
    id: 'best-jordan-shoes',
    title: 'Air Jordan Sneakers',
    image: jordanShoes,
    price: 360,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
  },
]

export const exploreProducts = [
  {
    id: 'sunglasses',
    title: 'Designer Sunglasses',
    image: sunglasses,
    price: 100,
    rating: 3,
    reviews: 35,
  },
  {
    id: 'falcon-lego',
    title: 'Falcon Building Set',
    image: falconLego,
    price: 360,
    rating: 4,
    reviews: 95,
  },
  {
    id: 'mac-mini',
    title: 'Apple Mac Mini',
    image: macMini,
    price: 700,
    rating: 5,
    reviews: 325,
  },
  {
    id: 'koenigsegg',
    title: 'Koenigsegg Scale Model',
    image: koenigsegg,
    price: 500,
    rating: 4,
    reviews: 145,
  },
  {
    id: 'dior-lipstick',
    title: 'Dior Lipstick Set',
    badge: 'NEW',
    price: 960,
    rating: 5,
    reviews: 65,
    variants: [
      { color: '#000000', image: diorLipstick, label: 'Dior black option' },
      { color: '#8b8b8b', image: diorLipstickTwo, label: 'Dior grey option' },
    ],
  },
  {
    id: 'mercedes-jacket',
    title: 'Mercedes Satin Jacket',
    price: 1160,
    rating: 5,
    reviews: 35,
    variants: [
      { color: '#000000', image: mercedesJacket, label: 'Black Mercedes satin jacket' },
      { color: '#8b8b8b', image: mercedesJacketTwo, label: 'Grey Mercedes satin jacket' },
    ],
  },
  {
    id: 'sony-camera',
    title: 'Sony Compact Camera',
    badge: 'NEW',
    price: 660,
    rating: 4,
    reviews: 55,
    variants: [
      { color: '#000000', image: sonyCamera, label: 'Black Sony camera' },
      { color: '#8b8b8b', image: sonyCameraTwo, label: 'Grey Sony camera' },
    ],
  },
  {
    id: 'gaming-controller',
    title: 'Wireless Gaming Controller',
    price: 660,
    rating: 4,
    reviews: 55,
    variants: [
      { color: '#000000', image: gamingController, label: 'Black gaming controller' },
      { color: '#8b8b8b', image: gamingControllerTwo, label: 'Grey gaming controller' },
    ],
  },
]

const products = [...flashSaleProducts, ...bestSellingProducts, ...exploreProducts]

export default products
