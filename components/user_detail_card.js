import React, { Component } from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import Blood_group from '../screens/Blood_Group/Blood_group'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'


export default class User_Detail extends Component {
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
          <View style={Style.Region_card}>
          <View style={Style.User_Image}>
          </View>
          <View>
            <Text style={{color:"rgba(0, 125, 254, 1)",fontSize:13,fontWeight:400,fontFamily:'Outfit_Regular'}}>{this.props.reg} Region</Text>
            <Text style={{fontSize:19,fontWeight:600,fontFamily:'Outfit_Semi'}}>{this.props.name}</Text>
            <Text style={{fontSize:14,fontWeight:400,fontFamily:'Outfit_Regular'}}>{this.props.ph}</Text>
            <Text style={{fontSize:14,fontWeight:400,fontFamily:'Outfit_Regular'}}>{this.props.prof}</Text>
          </View>
      </View>
      )
    }
  }
  

const Style=StyleSheet.create({
    Region_card:{
        marginLeft:15,
        marginRight:15,
        backgroundColor:"blue",
        width:"91.5%",
        height:134,
        marginTop:18,
        borderRadius:7,
        borderWidth:1,
        borderColor:"rgba(230, 230, 230, 1)",
        backgroundColor:"#FFFFFF",
        alignItems:"center",
        flexDirection:"row"
    },
    User_Image:{
        width:100,
        height:100,
        backgroundColor:"#D9D9D9",
        marginLeft:15,
        margin:17,
        borderRadius:5
    },
})