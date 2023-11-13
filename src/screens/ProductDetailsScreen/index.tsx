import React,{useEffect, useState} from 'react'
import { View,Text,Image, ActivityIndicator,ScrollView } from 'react-native'
import { Product } from '../../models'
import ImageCarousel from "../../components/ImageCarousel"
import DetailBox from "../../components/DetailBox"
import DetailProperty from "../../components/DetailProperty"
import CardButton from "../../components/CardButton"


function index(props) {
    const [product, setProduct] = useState<Product>()
    useEffect(() => {
        setProduct(props.route.params.product) 

    },[])
    if(!product){
        return <ActivityIndicator color='#5D3EBD' /> 
    }
  return (
    <View style={{flex:1}}>
    <ScrollView>
         <ImageCarousel images={product.images} />
         <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
         <Text style={{paddingHorizontal:10,paddingVertical:14,color:'#808B99',fontWeight:'700'}}>Detaylar</Text>
         <DetailProperty />
       

         
    </ScrollView>
    <CardButton item={product} />
    </View>

  )
}

export default index

//
