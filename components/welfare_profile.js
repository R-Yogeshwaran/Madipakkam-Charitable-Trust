import React, { Component } from 'react'
import { StatusBar,View,Text,SafeAreaView,Image,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
const Top=StatusBar.currentHeight
import User_Detail from './user_detail_card'

export default class Welfare_profile_user extends Component {
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
        <ScrollView>
        <User_Detail name={this.props.name} reg={"Coimbatore"} ph={this.props.ph} prof={this.props.prof} />
    
            <View style={Style.Region_card}>
                <View style={{marginLeft:20,marginTop:20}}>
    
    {/* Personal Details */}
    
                    <Text style={Style.header}>Personal Details</Text>
    
                    <View style={{flexDirection:"row",marginTop:11.6}}>
                        <Image style={{width:14.4,height:19.2,marginRight:14.8}} source={require("../assets/maki_blood-bank.png")}/>
                        <Text style={{fontFamily:'Outfit_Regular',fontSize:14}}>{this.props.group}</Text>
                    </View>
    
                    <View style={{flexDirection:"row",marginTop:11.6,alignItems:"center"}}>
                        <Image style={{width:22,height:22.5,marginRight:10.5}} source={require("../assets/birthday.png")}/>
                        <Text style={{fontFamily:'Outfit_Regular',fontSize:14}}>{this.props.dob}</Text>
                    </View>
    
    {/* Profession Details  */}
    
                    <View style={{marginTop:27,width:"97%",flex:1,padding:10}}>
                        <Text style={Style.header}>Profession Details</Text>
                        <Text style={{marginTop:10,fontSize:14,fontWeight:400,fontFamily:'Outfit_Regular'}}>{this.props.prof_det}</Text>
                    </View>
    
    {/* Contact Details */}
                    <View style={{marginTop:26}}>
                        <Text style={Style.header}>Contact Details</Text>
    
                        <View style={{flexDirection:"row",marginTop:11.6}}>
                        <Image style={{width:18,height:18,marginRight:14.8}} source={require("../assets/call.png")}/>
                        <Text style={{fontFamily:'Outfit_Regular',fontSize:14}}>{this.props.ph}</Text>
                    </View>
    
                    <View style={{flexDirection:"row",marginTop:11.6,marginBottom:34}}>
                        <Image style={{width:20,height:16,marginRight:14.8}} source={require("../assets/mail.png")}/>
                        <Text style={{fontFamily:'Outfit_Regular',fontSize:14}}>{this.props.mail}</Text>
                    </View>
    
                    </View>
                </View>
                </View>
          
           
    
            </ScrollView>
    )
  }
}

const Style=StyleSheet.create({
    safeare:{
        marginTop:Top,
        height:"100%",
        backgroundColor:"white"
    },
    Region_card:{
        marginLeft:15,
        marginRight:15,
        backgroundColor:"blue",
        width:"91.5%",
        height:"73%",
        borderRadius:7,
        borderWidth:1,
        borderColor:"rgba(230, 230, 230, 1)",
        backgroundColor:"#FFFFFF",
        alignItems:"center",
        flexDirection:"row",
    },
    header:{
        fontSize:18,
        fontWeight:600,
        fontFamily:"Outfit_Semi"
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
    Regional_card:{
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