import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { Breadcrum } from '../Components/Breadcrums/Breadcrum'
import { Productdisplay } from '../Components/Productdisplay/Productdisplay'
import { DescriptionBox } from '../Components/descriptionBox/DescriptionBox'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'

export const Product = () => {
    const{all_product}=useContext(ShopContext)
    const {id}=useParams()
    const product=all_product.find((item)=>item.id===Number(id))
    console.log("productId:", id);
    console.log("all_product:", all_product);
  return (
    <div>
        <Breadcrum product={product}/>
        <Productdisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}
