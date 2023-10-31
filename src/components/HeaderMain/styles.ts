import { StyleSheet,Dimensions } from 'react-native'

const {height}= Dimensions.get('window') //Responsive
const styles = StyleSheet.create({
    
    HeaderMain: {
        height: height * 0.064,
        backgroundColor: '#F7d102',
        
       },
    
       HeaderOne: {
        height: height * 0.064,
        width: '73%',
        backgroundColor: 'white',
        flexDirection: 'row', //öğeleri yatayda sıralamak için kullanılır.
        alignItems: 'center', // yatayda  sıralanan öğelerin dikeyde merkeze hizalanmasını sağlar.
        paddingHorizontal: '4%', // sağda ve solda ekranın genişliğinin %4'ü kadar boşluk bırakır.
        borderTopRightRadius:25, // sağ üst köşe radius miktarı
        borderBottomRightRadius:25, // sol üst köşe radius miktarı
       },

       HeaderOneView: {

        flexDirection: 'row', 
        alignItems: 'center', 
        marginLeft: 10, // sol kenar boşluğu
        paddingLeft:10, // içerideki öğelerin sol kenar boşluğu
        borderLeftColor:'#F3F2FD', // sol kenar rengi
        borderLeftWidth:2, // sol kenar kalınlığı

       },
    
       HeaderTwo:{

        height: height * 0.64,
        justifyContent: 'center', //dikey eksende ortalama
        flexDirection: 'column', // dikey sıralama ş
        alignItems: 'center',
        paddingLeft: 35,
    

       },
    
       Image: {

        width: 30,
        height:30,
    
       },
      
})
export default styles;


  
   