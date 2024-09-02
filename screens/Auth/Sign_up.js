import React, { Component } from 'react'
import { View,Text,Image,StatusBar,TouchableOpacity,Button,SafeAreaView,StyleSheet} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'


const Top=StatusBar.currentHeight

export default class Register extends Component {
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
<View>
        <View style={{alignItems:"center",justifyContent:"center", marginBottom:15}}>
            <Image style={{width:291,height:270}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178284/authImg_nagkut.png"}}/>
        </View>
</View>
        <ScrollView>
{/* LOGIN CONTENT  */}
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:25,marginTop:15,fontFamily:'Outfit_Bold'}}>User Sign up</Text>
            <Text style={{fontSize:18,fontWeight:400,marginTop:8,fontFamily:'Outfit_Regular'}}>Hey, enter your details to get sign in</Text>
            <Text style={{fontSize:18,fontWeight:400,fontFamily:'Outfit_Regular'}}> to your account</Text>
        </View>

{/* Input Fields */}

        <View>
            <TextInput placeholder='Enter Email' style={[Style.Input,{fontFamily:'Outfit_Regular',fontSize:18, marginTop:30}]}></TextInput>
        

            <TextInput secureTextEntry={true} placeholder='Password' style={[Style.Input,{marginTop:18,fontFamily:'Outfit_Regular',fontSize:18}]}></TextInput>
            <TouchableOpacity>
            <Image style={{width:26,height:26,marginLeft:"85%",marginTop:-40}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681360562/Group254_uq1yhe.png"}}/>
            </TouchableOpacity>
           
            
           
            <TextInput secureTextEntry={true} placeholder='Re-Enter Password' style={[Style.Input,{marginTop:18,fontFamily:'Outfit_Regular',fontSize:18}]}></TextInput>
            <TouchableOpacity>
            <Image style={{width:26,height:26,marginLeft:"85%",marginTop:-40}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681360562/Group254_uq1yhe.png"}}/>
            </TouchableOpacity>


        </View>

{/* Sign In Button  */}

        <View style={Style.Button}>
        <Text style={{fontSize:18,fontWeight:600,color:"#FFFFFF",fontFamily:'Outfit_Semi'}}>Sign up</Text>
        </View>
       
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"5%"}}>
        <Text style={{fontFamily:'Outfit_Light',fontSize:16}}>Already have an account?</Text>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Login")}}>
        <Text style={{fontFamily:'Outfit_Bold',fontSize:16}}> Login</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
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
        marginTop:18,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
       
    }
})