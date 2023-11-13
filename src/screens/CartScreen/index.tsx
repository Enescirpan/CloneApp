import React,{useEffect, useState} from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
import { ScrollView } from "react-native-gesture-handler";
import ProductItem from "../../components/ProductItem";
import { connect } from "react-redux";// Store içindeki state'e erişim için kullanılır.
import cartItem from "../../redux/reducers/cartitems";
import {Product} from "../../models"


const { width, height } = Dimensions.get("window");

function index({cartItems}:{cartItems:{product:Product, quantity:number }[]}) {
  const [totalPrice,setTotalPrice] = useState<number>(0)
  const getProductsPrice = () => {
    let total=0;
    cartItems.forEach(item => {
      total +=item.product.fiyat
      setTotalPrice(total)
  }) 
  cartItems.length  ? null : setTotalPrice(0); //trash'e basıldığında mevcut fiyatı sıfırlama
  }
  useEffect(() => {
    getProductsPrice()
  } )
  return (
    <View style={{flex:1}}>  
      <ScrollView style={{ flex: 1 }}> 
        <FlatList
          style={{}}
          data={cartItems} // cartItems içerisindeki verilerin kullanılması
          renderItem={({ item }) => <CartItem product={item.product} quantity={item.quantity} />} //renderItem, FlatList içerisindeki öğelerin nsaıl görüntüleneceğinin belirlenmesini sağlar.
        />
        <Text style={{ padding: 15, fontWeight: "bold", color: "#5D3EBD" }}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          horizontal={true} //yatay
          showsHorizontalScrollIndicator={false}
          bounces={true} 
        >
          {productsGetir.map((item, index) => ( //Bu ifade productsGetir dizisini döngüye almak için kullanılır.
            <ProductItem key={index} item={item} /> //index değeri kullanılarak her ürün için benzersiz bir 'key' oluşturulur.
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          backgroundColor: "#F8F8F8",
  
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: "#5D3EBD",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#5D3EBD",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            <Text>{"\u20BA"}</Text> 
            {totalPrice.toFixed(2)} 
          </Text> 
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = (state) => { //mapStateToProps adında bir fonksiyon tanımlanır ve bu fonksiyon Redux'tan gelen 'state' isimli bir parametre alır.
  const {cartItems} = state; //state içinden sadece cartItems özelliği değişkene atanır.
  return {
    cartItems:cartItems //Redux store'dan alınan veriyi, bileşenin prop'larına "cartItems" adıyla aktarmak için kullanılır.
  }
}
export default connect(mapStateToProps,null)(index); //Sdece mapStateToProps parametresini kullanacağım için ikinci parametreye null değeri atadım.
