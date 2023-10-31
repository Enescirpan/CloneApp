import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Entypo,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
import HomeNavigators from './HomeNavigators';
import { TouchableOpacity } from 'react-native';

const Tab= createBottomTabNavigator() //Tab isimli alt gezinme çubuğu (Tab Navigator) oluşturuldu.
function RootNavigator() {
  const CustomTabBarButton = ({children}) => { //Bu düğme listeleme simgesini içerir.
    return(
      <TouchableOpacity
      style={{

         width:56,
         height:56,
         backgroundColor: '#5C3EBC',
         justifyContent: 'center',
         alignItems:'center',
         borderRadius:30,
         marginTop: -8,
         borderColor: 'white',
      }}
      >
        <Entypo name= 'list' size={32} color={'#FFD00C'}     />
      </TouchableOpacity>
    )

  }
  return (
    <Tab.Navigator

      initialRouteName = "Ana Sayfa" //Alt gezinme çubuğunun ismi Ana Sayfa olarak oluşturuldu.
      screenOptions={{
        tabBarHideOnKeyboard: true, //Klavye açıldığında Tab çubuğu gizlenir.
        tabBarShowLabel: false, //Tab düğmelerinin etiketlerini gizler.
        tabBarActiveTintColor: '#5C3EBC', //Etkin Tab düğmelerinin rengi ayarlanır.
        tabBarInactiveTintColor: '#959595', //Etkin olmayan Tab düğmelerinin rengi ayarlanır.
        headerShown: false, //Başlığı gizler.
        tabBarStyle:{

          height:80,
          
        },
      }}
      >
        <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigators}
        options={{
          tabBarIcon: ({color}) =>( //Tab düğmesinin ikonunun özelleştirilmesi
            <Entypo name="home" size={26} color={color} />
          )
      }}
          />
           
           <Tab.Screen
        name="Search"
        component={HomeNavigators}
        options={{
          tabBarIcon: ({color}) =>(
            <FontAwesome name="search" size={26} color={color} />
          )
      }}
          />
          <Tab.Screen
          name='list'
          component={HomeNavigators}
          options={{
            tabBarButton: (props) => <CustomTabBarButton {...props}/>
          }}

          
          
          />
          <Tab.Screen
        name="User"
        component={HomeNavigators}
        options={{
          tabBarIcon: ({color}) =>(
            <FontAwesome name="user" size={26} color={color} />
          )
      }}
          />
          <Tab.Screen
        name="Gift"
        component={HomeNavigators}
        options={{
          tabBarIcon: ({color}) =>(
            <MaterialCommunityIcons name='gift' size={26} color={color} />
          )
      }}
          />
      
    </Tab.Navigator>
  )
}
export default RootNavigator