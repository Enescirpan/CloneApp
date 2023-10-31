import { StyleSheet,Dimensions } from 'react-native'

const {height}= Dimensions.get('window')
const styles = StyleSheet.create({
    
    HeaderMain: {
        height: height * 0.064,
        backgroundColor: '#F7d102',
        
       },
    
       HeaderOne: {
        height: height * 0.064,
        width: '73%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '4%',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
       },

       HeaderOneView: {

        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        paddingLeft:10,
        borderLeftColor:'#F3F2FD',
        borderLeftWidth:2,

       },
    
       HeaderTwo:{

        height: height * 0.64,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 35,
    

       },
    
       Image: {

        width: 30,
        height:30,
    
       },
      
})
export default styles;


  
   