import React, { Component } from 'react'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native'

export default class Business_build_card extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            fontsLoaded:false
        }
    }
    url=this.props.img
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
      <View style={Style.view}>
        <View style={Style.in_view}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Text style={{fontFamily:"Outfit_Bold",fontSize:18}}>{this.props.title}</Text>
        <Image style={{width:30,height:30,marginLeft:"auto"}} source={{uri:this.url}}/>
        </View>

        <View>
            <Text style={{marginTop:"3%",fontFamily:"Outfit_Regular", fontSize:15}}> {this.props.det}</Text>
        </View>


        <View style={{marginTop:"3%"}}>
            <Text style={{fontFamily:"Outfit_Regular",fontSize:14,color:"#007DFE"}}>
                {this.props.reg} Region
            </Text>

            <Text style={{fontFamily:"Outfit_Bold",fontSize:17,paddingTop:10}}>Contact - {this.props.cont}</Text>
        </View>
        </View>
      </View>
    )
  }
}

const Style=StyleSheet.create({
    view:{
        margin:21,
        borderWidth:1,
        borderColor:"rgba(230, 230, 230, 1)",
        width:"88%",
        // height:251,
        paddingBottom:5,
        borderRadius:7
    },
    in_view:{
        padding:20

    }
})