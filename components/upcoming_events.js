import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

export default class Upcoming_Events_Card extends Component {
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
    return (
      <View style={Style.View}>

        <View style={Style.View1}>

        </View>
        <View style={Style.View2}>
            <Text style={{color:"rgba(0, 125, 254, 1)",fontSize:13,fontFamily:"Outfit_Regular"}}>{this.props.reg} Region</Text>
            <Text style={{fontSize:19,fontFamily:"Outfit_Semi"}}>{this.props.event}</Text>
            <Text style={{fontFamily:"Outfit_Light",fontSize:14}}>{this.props.date}</Text>
            <Text style={{fontFamily:"Outfit_Light",fontSize:14}}>{this.props.time}</Text>
        </View>

      </View>
    )
  }
}

const Style=StyleSheet.create({
    View:{
        borderWidth:1,
        borderColor:"rgba(230, 230, 230, 1)",
        width:"90%",
        // height:289,
        paddingBottom:15,
        marginTop:20,
        marginLeft:20,
        marginRight:20
    },
    View1:{
        backgroundColor:"#D9D9D9",
        height:160,
        width:"90%",
        marginTop:16,
        marginLeft:16
    },
    View2:{
        marginLeft:20,
        marginTop:15
    }
})
