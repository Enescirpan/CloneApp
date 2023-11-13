import React from 'react'
import { Text,TouchableOpacity,View,Dimensions } from 'react-native'
import { connect } from 'react-redux' 
import * as actions from "../../redux/actions/cartActions"
import { Product } from '../../models'

const {width,height} = Dimensions.get('window')
type cartButtonType = {
  addItemToCart: (a:Product) => void;
  item:Product;
}

function index({item,addItemToCart}:cartButtonType) {
  return (
    <TouchableOpacity onPress={() =>  addItemToCart(item )} style={{justifyContent:'center',position:'absolute',bottom:0,width:'100%',height:height*0.12,backgroundColor:'white'}}>
        <View style={{backgroundColor:'#5D39C1',borderRadius:8,marginHorizontal:'5%',alignItems:'center',justifyContent:'center',height:height*0.07,width:'90%'}}>
        <Text style={{color:'white',fontWeight:'bold'}}>Sepete Ekle</Text>
        </View>
    </TouchableOpacity>
  )
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addItemToCart:(product:Product)=>
    dispatch(actions.addToCart({quantity:1,product}))

  }

}
export default connect(null,mapDispatchToProps )(index)