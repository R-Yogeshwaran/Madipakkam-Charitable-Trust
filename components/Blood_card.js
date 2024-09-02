import React, { Component } from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import Blood_group from '../screens/Blood_Group/Blood_group'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { Dimensions } from 'react-native';

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export class Blood_Card extends Component {
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
        <View style={Style.Page_Cards}>
          <View style={{width:100,justifyContent:"center"}}>
          <Text style={{textAlign:"center",fontSize:30,fontWeight:700,marginTop:9,color:"#007DFE",fontFamily:'Outfit_Bold'}}>{this.props.name}</Text>
          </View>
        </View>
        
      )
    }
  }
  
  const Style=StyleSheet.create({
    Page_Cards:{
        width:width*0.43,
        height:height*0.18,
        borderWidth:1,
        borderColor:"#E6E6E6",
        borderRadius:7,
        alignItems:"center",
        justifyContent:"center",
        flex:1,
      },
  })