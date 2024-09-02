import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Top_Navigation } from "../../components/cards";
import User_Detail from "../../components/cards";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Profile_Card from "../../components/profile";

const Top = StatusBar.currentHeight;

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Outfit_Bold: require("../../assets/fonts/static/Outfit-Bold.ttf"),
      Outfit_Regular: require("../../assets/fonts/static/Outfit-Regular.ttf"),
      Outfit_Medium: require("../../assets/fonts/static/Outfit-Medium.ttf"),
      Outfit_Semi: require("../../assets/fonts/static/Outfit-SemiBold.ttf"),
      Outfit_Light: require("../../assets/fonts/static/Outfit-Light.ttf"),
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
            onPress={() => {
              this.props.navigation.navigate("profile1");
            }}
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

        <Profile_Card
          name={this.props.route.params.user.name}
          reg={this.props.route.params.user.region}
          ph={"+91 " + this.props.route.params.user.mobile_number}
          prof={this.props.route.params.user.business}
          group={this.props.route.params.user.blood_group}
          dob={this.props.route.params.user.date_of_birth}
          prof_det={this.props.route.params.user.professional_details}
          mail={this.props.route.params.user.email}
        />
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
  Region_card: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "blue",
    width: "91.5%",
    height: "65%",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderWidth: 1,
    borderColor: "rgba(230, 230, 230, 1)",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flexDirection: "row",
  },
  Regional_card: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "blue",
    width: "91.5%",
    height: 134,
    marginTop: 18,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderWidth: 1,
    borderColor: "rgba(230, 230, 230, 1)",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flexDirection: "row",
  },
  User_Image: {
    width: 100,
    height: 100,
    backgroundColor: "#D9D9D9",
    marginLeft: 15,
    margin: 17,
    borderRadius: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: "Outfit_Semi",
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
