import React, { Component } from 'react'
import { View,Text,Image,TouchableOpacity,StatusBar,StyleSheet,SafeAreaView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'


const Top=StatusBar.currentHeight

export default class Forgot_Password extends Component {
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
            <Text style={{fontSize:25,marginTop:15,fontFamily:'Outfit_Bold'}}>Forget Password</Text>
            <Text style={{fontSize:18,fontWeight:400,marginTop:8,fontFamily:'Outfit_Regular'}}>Don't worry! It happens. Please enter the</Text>
            <Text style={{fontSize:18,fontWeight:400,fontFamily:'Outfit_Regular'}}>address associated with your account.</Text>
        </View>

{/* Input Fields */}

        <View>
            <TextInput placeholder='Enter Email' style={[Style.Input,{marginTop:36,fontFamily:'Outfit_Regular',fontSize:16}]}></TextInput>
        </View>

{/* Get Link Button  */}
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Email")}}>
        <View style={Style.Button}>
        <Text style={{fontSize:18,fontWeight:600,color:"#FFFFFF",fontFamily:'Outfit_Semi'}}>Get Link</Text>
        </View>
        </TouchableOpacity>

{/* login button  */}

        <View style={{flexDirection:"row",textalign:"center",justifyContent:"center",marginTop:36}}>
        <Text style={{fontFamily:'Outfit_Light',fontSize:16}}>Get back to Login?</Text>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Login")}}>
        <Text style={{fontFamily:'Outfit_Bold',fontSize:16}}> Login</Text>
        </TouchableOpacity>

        
        </View>
        </SafeAreaView>
    )
  }
}

const Style=StyleSheet.create({
    safearea:{
        marginTop:Top,
        backgroundColor:"white",
        height:"100%"
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
        marginTop:52,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
       
    }
})
