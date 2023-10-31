import React,{useState} from 'react'
import { View,Text,Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CategoriesGetir from '../../../assets/CategoriesGetir'
import { Category } from '../../models'  

const {height,width}= Dimensions.get('window')
const CategoryBox = ({item}:{item:Category}) => {
    return(
        <View style={{paddingHorizontal:9,flexDirection:'row',alignItems:'center', }}>
             <Text style={{fontSize:14,color:'white',fontWeight:'600'}}>{item.name} </Text>
           
        </View>
    ) 
} 
function index() {

    const [categories,setCategories] = useState<Category[]> (CategoriesGetir) //oluşturulan categories state değişkeni başlangıçta CategoriesGetir verileri ile dolduruldu.
    return(
        <ScrollView showsHorizontalScrollIndicator={false} bounces={true} horizontal={true} style={{width:'100%',backgroundColor:'#7849F7', height:height*0.065 }}> 
         {
            categories.map((item) => (
                <CategoryBox item={item}/>
            )) 
         }
        </ScrollView>
    )

}

export default  index 

//showsHorizontalScrollIndicator={false}: Yatay kaydırma çubuğu iptal etme 
//bounces={true}: Bounce(sıçrama) efektini aktif etme
//horizontal={true} ile yatay kaydırma etkinleştirme
//'categories.map' ile kategoriler tek tek "CategoryBox" bileşeni içinde görüntülenir.
