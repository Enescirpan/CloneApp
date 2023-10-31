import React from 'react'
import { View,Text,TouchableOpacity,Image,Dimensions } from 'react-native'

const {width,height} = Dimensions.get('window')
function index() {
  return (
    <TouchableOpacity>
        <Image style={{width:'30%'}} source={{uri:"https://market-product-images-cdn.getirapi.com/product/871f146e-cfb4-4d06-b602-84b73c7cdf69.jpg"}}></Image>


    </TouchableOpacity>
  
  )
}

export default index