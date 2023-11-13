import React from 'react'
import { View,Text,TouchableOpacity,Image,Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Product } from '../../models';
import { useNavigation } from '@react-navigation/native';
import { Connect, connect } from 'react-redux';
import * as actions from "../../redux/actions/cartActions"

const {width,height} = Dimensions.get('window')
type productItemType={ // Bu tür bileşen parametrelerinin türünü belirtir.
    item: Product
    addItemToCart:(a:Product) => void;
}
function index({item,addItemToCart}:productItemType ) {
    const navigation= useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{product:item})} style={{ 
        /*Bir dokunma işlemi algılandığında, ürünün ayrıntılarını göstermek için navigasyon kullanılır.
          Ürün resmi, ürünün ismi, fiyatı ve miktarı görüntülenir.
          Sepete ekle düğmesi eklenir ve tıklanınca belirtilen ürünü sepete ekler. */

        width:width*0.3,
        marginTop:12, 
        height:height*0.25,
        marginLeft:12,
        marginBottom:10,
    }}>
 
        <Image style={{width:'100%',height:width*0.28,borderRadius:12,borderWidth:0.1,borderColor:'gray',}} source={{uri:item.image}}></Image>
        <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
            <Text style={{fontSize:12 ,color:"#747990",textDecorationLine:'line-through'}}>
                <Text> {"\u20BA"}</Text>{item.fiyat}
                
                        
            </Text>
            <Text style={{
                color:'#5D3EBD',
                fontWeight:'bold',
                fontSize:13,
                marginLeft:5,//fiyatlar arasındaki boşluk 
            }}>
                <Text>{"\u20BA"}</Text>{item.fiyatIndırımlı}
    

            </Text>
 
        </View>
        <Text style={{fontSize:13,fontWeight:'600'}}>{item.name}</Text>
        <Text style={{marginTop:4,color:'#747990',fontWeight:'500'}}>{item.miktar}</Text>

        <TouchableOpacity onPress={() => {addItemToCart(item)}} style={{alignItems:'center',shadowRadius:3.8,shadowOpacity:0.05,justifyContent:'center',width:30,height:30,borderWidth:0.3,borderColor:'lightgrey',backgroundColor:'white',position:'absolute',right:-6,top:-4,borderRadius:6}}>
            <Entypo name='plus' size={22} color='#5D3EBD' />

        </TouchableOpacity>
       

    </TouchableOpacity>
  
  )
}
const mapDispatchToProps = (dispatch) => {
    return{
        addItemToCart : (product: Product) => 
        dispatch(actions.addToCart({quantity:1,product:product}))
        
    }
}

export default connect(null,mapDispatchToProps)(index)

// {"\u20BA"} : tl işareti(₺)
// textDecorationLine:'line-through': Textte yazılan yazının üstünü çizme




