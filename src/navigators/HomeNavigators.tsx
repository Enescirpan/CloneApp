import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { Image , Text,Dimensions, View} from 'react-native';
import CategoryFilterScreen from "./../screens/CategoryFilterScreen"
import ProductDetailsScreen from "./../screens/ProductDetailsScreen"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation,getFocusedRouteNameFromRoute,Route } from '@react-navigation/native';
import { Foundation } from '@expo/vector-icons';
import CartScreen from "../screens/CartScreen"
import { connect } from 'react-redux';
import { Product } from '../models';
import * as actions from "../redux/actions/cartActions";



const {width,height} = Dimensions.get('window')
const Stack = createStackNavigator();

function MyStack({navigation,route,cartItems,clearCart}:{route:{cartItems:{product:Product,quantity:number}}[],clearCart:() => void}) { //clearCart işlemi sonucunda herhangi bir değer döndürmek istemediğim için void kullandım.
  const tabHiddenRoutes = ["ProductDetails","CartScreen"]
  const [totalPrice, setTotalPrice] = useState<number>(0)

  React.useLayoutEffect(()=>{
    const routeName =getFocusedRouteNameFromRoute(route);
    console.log("Route Name is",routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  
  }, [navigation,route]
  

  )
  const getProductPrice = () => {
    var total=0;

    cartItems.forEach(cartItems => {
      const price = (total += cartItems.product.fiyat);
      setTotalPrice(price.toFixed(2))
    })
     
  }
  useEffect(() =>{
    getProductPrice()
  },[cartItems,navigation])

  

  return (
    <Stack.Navigator> 
      <Stack.Screen // HomeScreen ekranı yığına eklenir.
        name='Home'
        component={HomeScreen} //Bu isimle eşleşen HomeScreen bileşeninin kullanılacağını belirtir.
        options={{ // Bu özellik ile ekranın gezme seçenekleri tanımlanır.
          headerStyle: { backgroundColor: '#5C3EBC' }, //Başlık çubuğunun stili belirlenir.
          headerTitle: () => (  // Başlık özelleştirilir.
            <Image

            source={require("../../assets/getirlogo.png")} //Başlığa getir logosu eklendi.
            style={{width:70,height:30}}
            />
          ),
          headerTitleAlign: 'center' //başlık ortalama
         
              
          
  
          
        }}
      />

<Stack.Screen
        name='CategoryDetails'
        component={CategoryFilterScreen}
        options={{
          headerTintColor:'white', //Başlık çubuğunun metin rengi
          headerStyle: { backgroundColor: '#5C3EBC' },
          headerTitle: () => (
           <Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>Ürünler</Text>
          ),
          headerTitleAlign: 'center', //başlık ortalama
          headerRight: () =>(
            <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={{width:width*0.22,height:33,backgroundColor:'white',
            marginRight:width*0.03,borderRadius:9,flexDirection:'row',alignItems:'center'}} >
             
            
            <Image style={{width:23,height:23,marginLeft:6}} source={require("../../assets/cart.png")}/>
            <View
                style={{ width: 5, height: 30, backgroundColor: "white" }}
              />
            <View style={{justifyContent:'center',alignItems:'center',flex:1,height:33,backgroundColor:'#F3EFFE',borderTopRightRadius:9,borderBottomRightRadius:9}} >
            <Text style={{color:'#5D3EBD',fontWeight:'bold',fontSize:12}}>
            <Text>{"\u20BA"}</Text>
            {totalPrice}
            </Text>
            </View>

  

            </TouchableOpacity>
          
             
          )
         
              
          
  
          
        }}
      />
<Stack.Screen  
       options={{
        headerBackTitleVisible:false,
        headerTintColor:'white',
          headerStyle: {backgroundColor:'#5C3EBC'},
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{paddingLeft:12}}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>

          ), 
            
          
          headerTitle: () =>(
            <Text style={{color:'white',fontWeight:'bold',fontSize:15,backgroundColor:'#5C3EBC'}}>
              Ürün Detayı
            </Text>
          ), 
          headerRight:()=>(
            <TouchableOpacity style={{paddingRight:10}}>
              <Foundation name="heart" size={24} color="#32177a" />

            </TouchableOpacity>

          ),
          headerTitleAlign: 'center' //başlık ortalama


      }}
      name='ProductDetails'
      component={ProductDetailsScreen}
      
      />
      <Stack.Screen 
      name='CartScreen'
      component={CartScreen}
      options={{
        headerTintColor:'white',
        headerBackTitleVisible:false,
        headerStyle:{backgroundColor:'#5C3EBC'},
        headerTitle:() => (
          <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>
             Sepetim 
          </Text>
          

        ),
        headerTitleAlign: 'center', //başlık ortalama
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft:8}} onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={26} color="white" />

          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={()=> clearCart()} style={{paddingRight:10}}>
            <Ionicons name="ios-trash" size={26} color="white" />
          </TouchableOpacity>
        )


      }}
      />
    </Stack.Navigator>
  )
  
  
}
const mapStateToProps = (state) => {
  const {cartItems} =state;
  return{
    cartItems:cartItems
  }


}
const mapDispatchToProps = (dispatch) => {
  return{
    clearCart: () => dispatch(actions.clearCart())
  }
} 

 function HomeNavigators({navigation,route,cartItems,clearCart}:{clearCart:() => void}) {
   return <MyStack navigation= {navigation} route={route} cartItems={cartItems} clearCart={clearCart }/>
} 

export default connect (mapStateToProps,mapDispatchToProps)(HomeNavigators) 
