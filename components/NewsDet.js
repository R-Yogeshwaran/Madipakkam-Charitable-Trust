import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'


export class NewsDet extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            fontsLoaded:false
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
          Outfit_Bold: require('../assets/fonts/static/Outfit-Bold.ttf'),
          Outfit_Regular: require('../assets/fonts/static/Outfit-Regular.ttf'),
          Outfit_Medium:require('../assets/fonts/static/Outfit-Medium.ttf'),
          Outfit_Semi:require('../assets/fonts/static/Outfit-SemiBold.ttf'),
          Outfit_Light:require('../assets/fonts/static/Outfit-Light.ttf')
        });
         this.setState({ fontsLoaded: true });
      }
  
  render() {
  
    const { fontsLoaded } = this.state;
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
    return(
      <View style={Style.News}>
        <View style={{margin:"2%",justifyContent:"space-between"}}>
            <Text style={{fontSize:17,fontFamily:"Outfit_Semi", marginTop:15, width:320}}>{this.props.title}</Text>
            <Text style={{fontSize:13,marginTop:"3%",marginBottom:"2%",color:"#007DFE",fontFamily:"Outfit_Regular"}}>{this.props.date}</Text>
        </View>


        <View style={Style.news_cont}>

        </View>

        <View style={{justifyContent:"center",alignItems:"center",margin:"7.5%"}}>
            <Text style={{fontSize:14,fontFamily:"Outfit_Regular", width:310}}>{this.props.detail}</Text>
        </View>

        
      </View>
    )
  }
}



const Style=StyleSheet.create({
        News:{
            width:350,
            borderWidth:1,
            borderRadius:10,
            justifyContent:"center",
            alignItems:"center",
            marginBottom:10,
            marginTop:10,
            marginLeft:10,
            borderColor:"#E6E6E6"
        },
        news_cont:{
            width:320,
            height:200,
            backgroundColor:"#D9D9D9",
            borderRadius:5
        }

})


export default NewsDet