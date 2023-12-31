import React,{useState} from 'react'
import { ScrollView,Text } from'react-native' 
import CategoryFiltering from '../../components/CategoryFiltering'
import TypeFiltering from '../../components/TypeFiltering'
import ProductContainer from '../../components/ProductsContainer'


function  index() {
 
    return (
    <ScrollView>
        <CategoryFiltering />
        <TypeFiltering />
        <ProductContainer />
        

       
        
    </ScrollView>
  )
}

export default  index 

/*Bu ekran, kullanıcıların kategoriler ve ürün türleri arasında gezinmelerine
 ve filtrelemelerine olanak tanır. Kategoriler ve ürün türleri,
 önceden tanımlanan veri (örneğin, CategoriesGetir içindeki veriler) kullanılarak
dinamik olarak görüntülenir. */




