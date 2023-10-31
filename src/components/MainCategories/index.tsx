import React,{useState} from 'react'
import { View,Image,Text,StyleSheet} from 'react-native'
import CategoriesGetir  from '../../../assets/CategoriesGetir'
import { Category } from '../../models'
import CategoryItem from '../../components/CategoryItem'
function index() { 
    const [categories,setCategories] =useState<Category[]> (CategoriesGetir)
  return (
    <View style={styles.listContainer}> 
        {

            categories.map((item) => ( // "categories" dizisinden her bir kategori için bir "CategoryItem" bileşeni oluşturulur.
        <CategoryItem key={item.id} item={item}/> // Her bir öğenin benzersiz olarak tanımlanmasını sağlar.

            ))
        }
   </View> 
  )
}
const styles= StyleSheet.create({
    listContainer: {
        flex:1, // Container'ın kullanılabilir tüm alanı kaplamasını sağlar.
        flexDirection:'row', // Öğeleri yatayda konumlandırır.
        alignItems:'flex-start', //Öğelerin dikeyde sıralandığını belirtir.
        flexWrap:'wrap', // Öğelerin sığdığı kadar ekrana sığmasına izin verir ve fazla öğeleri alt satıra kaydırır.
         
    }
})

export default index