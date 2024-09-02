import React, { Component } from 'react'
import { Text,View,SafeAreaView,StyleSheet,StatusBar,Image,TouchableOpacity,TextInput } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { ScrollView } from 'react-native'

const Top=StatusBar.currentHeight

export default class Donate_Tree extends Component {
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
          Outfit_Semi: require("../../assets/fonts/static/Outfit-SemiBold.ttf"),
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


{/* Top Navigation  */}
      <View style={Style.top_navigation}>
                <Image style={{width:38,height:38,marginLeft:19,marginTop:13,marginBottom:13}} source={require("../../assets/logo.png")} alt='img'/>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("profile1")}} style={{marginLeft:"auto",marginRight:23.87}}>
                <Image style={{width:29.5,height:19.5}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681131375/7747990_pinxhq.png"}}/>
                </TouchableOpacity>
                </View>
        <ScrollView style={{marginBottom:"14%"}}>

{/* Top Image  */}
<ScrollView>

        <View style={{alignItems:"center"}}>
            <Image style={{height:260,width:"100%", marginTop:20, marginBottom:20}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178287/donateIllustrations_rkp7en.png"}}/>
            <Text style={{fontSize:25,fontFamily:"Outfit_Semi"}}>Donate a Tree</Text>
            <View style={{alignItems:"center",marginTop:"2%"}}>
            <Text style={{fontFamily:"Outfit_Regular",fontSize:17}}>Give the gift of nature. Donate a tree </Text>
            <Text style={{fontFamily:"Outfit_Regular",fontSize:17}}>Today and help us create a greener future</Text>
            </View>


{/* Input Fields  */}


        </View>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TextInput placeholder='Enter Name' style={[Style.Input,{marginTop:"5%", fontFamily:'Outfit_Regular',fontSize:18}]}></TextInput>
            <TextInput placeholder='Enter you Special Occasion' style={[Style.Input,{marginTop:"5%", fontFamily:'Outfit_Regular',fontSize:18}]}></TextInput>
            <TextInput placeholder='Enter Mobile Number' style={[Style.Input,{marginTop:"5%", fontFamily:'Outfit_Regular',fontSize:18}]}></TextInput>
            </View>
{/* AMOUNT */}

            <Text style={{textAlign:"right",marginTop:"3%",marginRight:"5%",color:"rgba(255, 81, 81, 1)",fontSize:17,fontFamily:"Outfit_Semi"}}>750 Rupees</Text>
        


{/* Donate Button  */}
<View style={{justifyContent:"center",alignItems:"center"}}>

            <View style={Style.Button}>
        <Text style={{fontSize:18,fontWeight:600,color:"#FFFFFF",fontFamily:'Outfit_Semi'}}>Donate</Text>
        </View>
        </View>
        </ScrollView>
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
    top_navigation:{
        width:"100%",
        height:62,
        backgroundColor:"green",
        borderBottomWidth:1,
        borderTopWidth:1,
        borderTopColor:"#E6E6E6",
        borderBottomColor:"#E6E6E6",
        backgroundColor:"#FFFFFF",
        borderStyle:"solid",
        flexDirection:"row",
        alignItems:"center"
    },
    Input:{
        width:"90%",
        height:55,
        // marginLeft:20,
        // marginRight:20,
        borderWidth:1,
        borderColor:"#D6D6D6",
        borderRadius:10,
        paddingLeft:17
    },
    Button:{
        width:"90%",
        height:52,
        backgroundColor:"#007DFE",
    
        marginTop:"3%",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        
    }
})