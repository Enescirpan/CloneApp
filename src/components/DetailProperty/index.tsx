import React,{useState} from 'react'
import { View,Text} from 'react-native'
import DetailProperty from "../../components/DetailProperty"
import { Feather } from '@expo/vector-icons';
import CardButton from "../../components/CardButton"


function index() {
    const [details ,setDetails]= useState<string[]> (
        ["Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti"
    ,"İçindekiler","Besin Değerleri","Kullanım","Ek Bilgiler"
]
    )
    const TextComponent= ({detail,index}:{detail:string,index:number}) => {
        return(
            <View style={{
                paddingVertical:12,
                borderBottomWidth:index== details.length -1 ? 0: 0.4,
                borderBottomColor:'lightgrey',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'

                
            }}>
                <Text style={{color:index==0 ? 'black':'#687482',
                fontSize:index==0 ? 12 : 15 ,fontWeight:index==0 ? "400":'500'}}>{detail} </Text>
                {index != 0 && <Feather name="chevron-down" size={24} color="black" />}
                
            </View>
        )

    }

      return (
        <View style={{backgroundColor:'white',paddingHorizontal:16,paddingVertical:8}}> 
            {details.map((item,index) =>(
                <TextComponent key={index} index={index} detail={item} />
            ))}
        </View>
    
  )
}

export default index