import React from 'react'
import { Text,View,Image } from 'react-native'
import styles from "./styles"
import { Header } from 'react-native/Libraries/NewAppScreen'
import {Entypo} from "@expo/vector-icons" //vector-icon import etme

function index  ()  {
  return (
    <View style={styles.HeaderMain}>
        <View style={styles.HeaderOne}>
            <Image style={styles.Image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}></Image>


        <View style={styles.HeaderOneView}>
            <Text style={{fontWeight:'600',fontSize:16 }}>Ev</Text>
            <Text style={{fontWeight:'600',fontSize:12,color:'#6E7480',marginLeft:10}}>Gökçek Mah. Talatpaşa Bul... </Text>
            <Entypo name="chevron-right" size={22} color="#5D3EBD" /> 

        </View>


        <View style={styles.HeaderTwo}>
           <Text style={{fontSize:10,fontWeight:'bold',color:'#5D3EBD'}}>TVS</Text>
           <Text style={{fontSize:20,fontWeight:'bold',color:'#5D3EBD'}}>13<Text style={{fontWeight:'bold',fontSize:16 }}>dk</Text></Text>


        </View>
       
        </View>

    </View>
  )
}
export default index;



