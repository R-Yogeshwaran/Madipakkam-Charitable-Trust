import React, { Component } from 'react'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { StatusBar,View,Text,SafeAreaView,Image,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'
import User_Detail from './user_detail_card'
const Top=StatusBar.currentHeight

export default class Business_profile_Card extends Component {
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
      <View>
<ScrollView>
<View style={{marginLeft:20,marginTop:10}}>
            <Text style={{fontSize:20,fontFamily:'Outfit_Semi'}}>Business Profile</Text>
            <Text style={{fontSize:16,fontFamily:'Outfit_Regular'}}>{this.props.reg}</Text>
        </View>


        <User_Detail name={this.props.name} ph={this.props.ph} reg={this.props.reg} prof={this.props.prof} />


{/* Profession Details  */}

        <View style={Style.Region_card}>
            <View style={{marginLeft:10,marginTop:10,padding:"5%"}}>


                <View style={{marginTop:27,width:"98%"}}>
                    <Text style={Style.header}>Business Details</Text>
                    <Text style={{marginTop:10,fontSize:14,fontWeight:400,fontFamily:'Outfit_Regular'}}>{this.props.bus_det}.</Text>
                </View>

{/* Website Details */}

                <View style={{marginTop:26}}>
                    <Text style={Style.header}>Business Website</Text>
                    <Text style={{marginTop:10,fontFamily:'Outfit_Regular',fontSize:14}}>{this.props.website}</Text>
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
        </View>

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
        height:"65%",
        borderRadius:7,
        borderWidth:1,
        borderColor:"rgba(230, 230, 230, 1)",
        backgroundColor:"#FFFFFF",
        alignItems:"center",
        flexDirection:"row"
    },
    header:{
        fontSize:18,
        fontWeight:600,
        fontFamily:'Outfit_Semi'
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
})