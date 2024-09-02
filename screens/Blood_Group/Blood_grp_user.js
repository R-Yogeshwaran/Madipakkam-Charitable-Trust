import React, { Component } from "react";
import {
  StatusBar,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Top_Navigation } from "../../components/cards";
import { User_Blood_Detail } from "../../components/user_blood_detail";
import User_Detail from "../../components/user_detail_card";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const Top = StatusBar.currentHeight;

export default class Blood_Group_User extends Component {
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
      <SafeAreaView style={Style.safeare}>
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

        {/*  */}

        <ScrollView>
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontFamily: "Outfit_Semi" }}>
              {this.props.route.params.data.blood_group} Blood Group
            </Text>
            <Text style={{ fontSize: 16, fontFamily: "Outfit_Regular" }}>
              {this.props.route.params.data.region}
            </Text>
          </View>

          <User_Detail
            name={this.props.route.params.data.name}
            ph={"+91 " + this.props.route.params.data.mobile_number}
            prof={this.props.route.params.data.business}
            reg={this.props.route.params.data.region}
          />

          {/* Personal Details */}

          <View style={Style.Region_card}>
            <View style={{ marginLeft: "4%", marginTop: 20, padding: "2%" }}>
              <Text style={Style.header}>Personal Details</Text>

              <View style={{ flexDirection: "row", marginTop: 11.6 }}>
                <Image
                  style={{ width: 14.4, height: 19.2, marginRight: 14.8 }}
                  source={require("../../assets/maki_blood-bank.png")}
                />
                <Text style={{ fontFamily: "Outfit_Regular", fontSize: 14 }}>
                  {this.props.route.params.data.blood_group}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 11.6,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 22, height: 22.5, marginRight: 10.5 }}
                  source={require("../../assets/birthday.png")}
                />
                <Text style={{ fontFamily: "Outfit_Regular", fontSize: 14 }}>
                  {this.props.route.params.data.date_of_birth}
                </Text>
              </View>

              {/* Profession Details  */}

              <View style={{ marginTop: 27, width: "97%" }}>
                <Text style={Style.header}>Profession Details</Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: "Outfit_Regular",
                  }}
                >
                  {this.props.route.params.data.professional_details}
                </Text>
              </View>

              {/* Contact Details */}
              <View style={{ marginTop: 26 }}>
                <Text style={Style.header}>Contact Details</Text>

                <View style={{ flexDirection: "row", marginTop: 11.6 }}>
                  <Image
                    style={{ width: 18, height: 18, marginRight: 14.8 }}
                    source={require("../../assets/call.png")}
                  />
                  <Text style={{ fontFamily: "Outfit_Regular", fontSize: 14 }}>
                    +91 {this.props.route.params.data.mobile_number}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 11.6,
                    marginBottom: 34,
                  }}
                >
                  <Image
                    style={{ width: 20, height: 16, marginRight: 14.8 }}
                    source={require("../../assets/mail.png")}
                  />
                  <Text style={{ fontFamily: "Outfit_Regular", fontSize: 14 }}>
                    {this.props.route.params.data.email}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const Style = StyleSheet.create({
  safeare: {
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
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "rgba(230, 230, 230, 1)",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flexDirection: "row",
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
