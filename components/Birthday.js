import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'


export class Birthday extends Component {
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
      <View style={Style.Birth}>
        <View style={Style.Birthdate}>
            <View style={Style.date}>
                <Text Style={{fontSize:20,color:"black",fontFamily:"Outfit_Bold"}}>{this.props.day}</Text>
                <Text style={{fontSize:10,color:"#9A9A9A",fontFamily:"Outfit_Medium"}}>{this.props.month}</Text>

            </View>

        </View>
        <View style={{padding:4,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:15,fontFamily:"Outfit_Semi"}}>{this.props.name}</Text>
            <Text style={{fontSize:11,color:"#9A9A9A",fontFamily:"Outfit_Medium"}}>{this.props.work}</Text>
        </View>
        
      </View>
    )
  }
}


const Style=StyleSheet.create({
    Birth:{
        borderWidth:1,
        borderColor:"#E6E6E6",
        width:167,
        height:194,
        borderRadius:10,
        marginBottom:10,
        marginTop:10,
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center"
    },
    Birthdate:{
        width:152,
        height:135,
        backgroundColor:"#D0D0D0",
        borderRadius:10,
       
    },
    date:{
        width:45,
        height:45,
        backgroundColor:"#FFFFFF",
        borderRadius:4,
        marginLeft:"auto",
        margin:"3%",
        justifyContent:"center",
        alignItems:"center"
    }

    
})

export default Birthday