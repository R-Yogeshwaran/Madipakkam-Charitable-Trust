import React, { Component } from 'react'
import { View,Text,Image,TouchableOpacity,StatusBar,StyleSheet,SafeAreaView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

const Top=StatusBar.currentHeight

export default class Email extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            fontsLoaded:false
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
          Outfit_Bold: require('../../assets/fonts/static/Outfit-Bold.ttf'),
          Outfit_Regular: require('../../assets/fonts/static/Outfit-Regular.ttf'),
          Outfit_Medium:require('../../assets/fonts/static/Outfit-Medium.ttf'),
          Outfit_Semi:require('../../assets/fonts/static/Outfit-SemiBold.ttf'),
          Outfit_Light:require('../../assets/fonts/static/Outfit-Light.ttf')
        });
         this.setState({ fontsLoaded: true });
      }

  render() {

    const { fontsLoaded } = this.state;

    if (!fontsLoaded) {
      return <AppLoading />;
    }
    return (
        <SafeAreaView style={Style.safearea}>

{/* LOGIN IMAGE  */}

        <View style={{alignItems:"center",justifyContent:"center", marginBottom:15}}>
            <Image style={{width:291,height:270}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178284/authImg_nagkut.png"}}/>
        </View>

{/* LOGIN CONTENT  */}

        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:25,marginTop:98,marginBottom:30,fontFamily:'Outfit_Bold'}}>Email sent!</Text>
            <Text style={{fontSize:18,fontWeight:400,marginTop:8,fontFamily:'Outfit_Regular'}}>We have sent you can E-mail containing a</Text>
            <Text style={{fontSize:18,fontWeight:400,fontFamily:'Outfit_Regular'}}> link for resetting your password</Text>
        </View>

{/* Sign In Button  */}
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Login")}}>
        <View style={Style.Button}>
        <Text style={{fontSize:18,fontWeight:600,color:"#FFFFFF",fontFamily:'Outfit_Semi'}}>Back to Login</Text>
        </View>
        </TouchableOpacity>
        </SafeAreaView>

            

    )
  }
}

const Style=StyleSheet.create({
    safearea:{
        marginTop:Top,
        height:"100%",
        backgroundColor:"white"
    },
    Input:{
        width:"90%",
        height:55,
        marginLeft:20,
        marginRight:20,
        borderWidth:1,
        borderColor:"#D6D6D6",
        borderRadius:10,
        paddingLeft:17
    },
    Button:{
        width:"90%",
        height:52,
        backgroundColor:"#007DFE",
        marginLeft:20,
        marginRight:20,
        marginTop:58,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
       
    }
})
