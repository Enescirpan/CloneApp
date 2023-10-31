import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { Image , Text} from 'react-native';
import CategoryFilterScreen from "./../screens/CategoryFilterScreen"

const Stack = createStackNavigator();

function HomeNavigators() {
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
          headerTitleAlign: 'center' //başlık ortalama
         
              
          
  
          
        }}
      />
    </Stack.Navigator>
  );
  
  
}

export default HomeNavigators;
