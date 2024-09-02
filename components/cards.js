import React, { Component } from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import Blood_group from '../screens/Blood_Group/Blood_group'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

// User_Detail



// Top Navigation Bar

export class Top_Navigation extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
        <View style={Style.top_navigation}>
        <Image style={{width:38,height:38,marginLeft:19,marginTop:13,marginBottom:13}} source={require("../assets/logo.png")} alt='img'/>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("profile1")}} style={{marginLeft:"auto",marginRight:23.87}}>
        <Image style={{width:29.5,height:19.5}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681131375/7747990_pinxhq.png"}}/>
        </TouchableOpacity>
        </View>
    )
  }
}


// Navigation Buttons


export class Navigation extends Component {
  constructor(props)
  {
      super(props)
      this.state={
          fontsLoaded:false
      }
  }
  async componentDidMount() {
      await Font.loadAsync({
        Source_Semi: require('../assets/fonts/SourceSansPro-SemiBold.ttf'),
      });
       this.setState({ fontsLoaded: true });
    }

render() {

  const { fontsLoaded } = this.state;

  if (!fontsLoaded) {
    return <AppLoading />;
  }
 
    return (
        <View style={Style.Navigation}>
            <View style={Style.Navigation_name}>
            <Text style={{marginRight:"auto",fontSize:17,fontWeight:600,fontFamily:'Source_Semi'}} >{this.props.name}</Text>
            <Image style={{width:7,height:12,marginLeft:"auto",marginRight:32}} source={{uri: "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681129886/271228_vihsr5.png"}}/>
            </View>
            <View style={Style.Navigation_Bottom_Bar}></View>
        </View>
    )
  }
}


//Page Cards




// Blood_group


// User_Detail Blood Group




export class Welfare_member_detail_card extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      
      <View style={Style.Regional_card}>
            <View style={{marginLeft:20,marginTop:20}}>

{/* Personal Details */}

                <Text style={Style.headers}>Personal Details</Text>

                <View style={{flexDirection:"row",marginTop:11.6}}>
                    <Image style={{width:14.4,height:19.2,marginRight:14.8}} source={require("../assets/maki_blood-bank.png")}/>
                    <Text style={{fontFamily:'Outfit_Regular',fontSize:14}}>{this.props.blood_grp}</Text>
                </View>

                <View style={{flexDirection:"row",marginTop:11.6,alignItems:"center"}}>
                    <Image style={{width:22,height:22.5,marginRight:10.5}} source={require("../assets/birthday.png")}/>
                    <Text style={{fontFamily:'Outfit_Regular',fontSize:14}}>{this.props.dob}</Text>
                </View>

{/* Profession Details  */}

                <View style={{marginTop:27}}>
                    <Text style={Style.headers}>Profession Details</Text>
                    <Text style={{marginTop:10,fontSize:14,fontWeight:400,fontFamily:'Outfit_Regular'}}>{this.props.prof_det}</Text>
                </View>

{/* Contact Details */}
                <View style={{marginTop:26}}>
                    <Text style={Style.headers}>Contact Details</Text>

                    <View style={{flexDirection:"row",marginTop:11.6}}>
                    <Image style={{width:18,height:18,marginRight:14.8}} source={require("../assets/call.png")}/>
                    <Text style={{fontFamily:'Outfit_Regular',fontSize:14}}>{this.props.ph}</Text>
                </View>

                <View style={{flexDirection:"row",marginTop:11.6,marginBottom:34,alignItems:"center"}}>
                    <Image style={{width:20,height:16,marginRight:14.8}} source={require("../assets/mail.png")}/>
                    <Text style={{fontFamily:'Outfit_Regular',fontSize:14}}>{this.props.mail}</Text>
                </View>

                </View>
            </View>

        </View>
       
       
    )
  }
}




const Style=StyleSheet.create({

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
    
    Navigation:{
        width:"100%",
        height:59,
        top:0,
        bottom:0
    },
    Navigation_Bottom_Bar:{
        marginLeft:7,
        marginRight:7,
        width:"97%",
        borderBottomWidth:1,
        marginBottom:0,
        borderBottomColor:"rgba(217, 217, 217, 1)"
    },
    Navigation_name:{
        marginTop:18,
        marginBottom:18,
        marginLeft:26,
        flexDirection:"row",
        alignItems:"center"
    },
    
    Regional_card:{
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
  headers:{
      fontSize:18,
      fontWeight:600,
      fontFamily:"Outfit_Semi"
  },

})
