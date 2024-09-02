import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import User_Detail from "../../components/user_detail_card";
import { Top_Navigation } from "../../components/cards";
import { Navigation } from "../../components/cards";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useNavigate } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext";

const Top = StatusBar.currentHeight;
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      user: [],
    };
  }
  static contextType = AuthContext;
  history = () => {
    useNavigate();
  };
  async componentDidMount() {
    await Font.loadAsync({
      Source_Semi: require("../../assets/fonts/SourceSansPro-SemiBold.ttf"),
    });
    this.setState({
      user: await JSON.parse(await AsyncStorage.getItem("user")),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    const { navigation } = this.props;

    const { fontsLoaded } = this.state;
    const { logout } = this.context;

    if (!fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <SafeAreaView style={Style.safearea}>
        {/* Top Navigation */}

        <View style={Style.top_navigation}>
          <Image
            style={{
              width: 38,
              height: 38,
              marginLeft: 19,
              marginTop: 13,
              marginBottom: 13,
            }}
            source={require("../../assets/logo.png")}
            alt="img"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: "auto", marginRight: 23.87 }}
          >
            <Image
              style={{ width: 29.5, height: 19.5 }}
              source={{
                uri: "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681131375/7747990_pinxhq.png",
              }}
            />
          </TouchableOpacity>
        </View>

        {/* User Details */}

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("profile2", {
              user: this.state.user[0],
            });
          }}
        >
          <User_Detail
            name={this.state.user[0].name}
            ph={"+91 " + this.state.user[0].mobile_number}
            prof={this.state.user[0].business}
            reg={this.state.user[0].region}
          />
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            height: 0,
            borderBottomWidth: 5,
            borderColor: "#D9D9D9",
            marginTop: 23,
          }}
        ></View>

        {/* Navigation Buttons */}

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
        <Navigation name={"Home Page"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Blood_group")}}>
        <Navigation name={"Blood Group"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Donate_Tree")}}>
        <Navigation name={"Donate Tree"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Upcoming_Events")}}>
        <Navigation name={"Upcoming Events"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Grievances")}}>
        <Navigation name={"Public Grievances"} />
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            height: 0,
            borderBottomWidth: 5,
            marginTop: 0,
            borderColor: "#D9D9D9",
          }}
        ></View>

        {/* Change Password */}

        <View style={Style.Navigation}>
          <View style={Style.Navigation_name}>
            <Text
              style={{
                marginRight: "auto",
                fontSize: 17,
                fontWeight: 600,
                fontFamily: "Source_Semi",
              }}
            >
              Change Password
            </Text>
          </View>
          <View style={Style.Navigation_Bottom_Bar}></View>
        </View>

        <View
          style={{
            width: "100%",
            height: 0,
            borderBottomWidth: 5,
            borderColor: "#D9D9D9",
          }}
        ></View>

        {/* Log_out */}
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem("user");
            logout()
          }}
        >
          <View style={Style.Navigation}>
            <View style={Style.Navigation_name}>
              <Text
                style={{
                  marginRight: "auto",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#EA4343",
                  fontFamily: "Source_Semi",
                }}
              >
                Log Out
              </Text>
            </View>
            <View style={Style.Navigation_Bottom_Bar}></View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const Style = StyleSheet.create({
  safearea: {
    marginTop: Top,
    height: "100%",
    backgroundColor: "white",
  },
  topbar: {
    width: "100%",
    height: 17,
    backgroundColor: "rgba(22,22,24,1)",
  },
  Navigation: {
    width: "100%",
    height: 59,
  },
  Navigation_name: {
    marginTop: 18,
    marginBottom: 18,
    marginLeft: 26,
    flexDirection: "row",
    alignItems: "center",
  },
  top_navigation: {
    width: "100%",
    height: 62,
    backgroundColor: "green",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "#E6E6E6",
    borderBottomColor: "#E6E6E6",
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
});
