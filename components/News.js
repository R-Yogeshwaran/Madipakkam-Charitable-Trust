import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

export class News extends Component {
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
        <View style={Style.news_cont}>

        </View>
        <View style={{margin:"2%",justifyContent:"space-between",marginTop:"3%"}}>
            <Text style={{fontSize:13,color:"#007DFE",fontFamily:"Outfit_Regular"}}>{this.props.date}</Text>
            <Text style={{fontSize:17,marginTop:"3%",fontFamily:"Outfit_Semi", width:320}}>{this.props.title}</Text>
        </View>

        
      </View>
    )
  }
}



const Style=StyleSheet.create({
        News:{
            width:350,
            height:285,
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
            height:161,
            backgroundColor:"#D9D9D9",
            borderRadius:5
        }

})


export default News