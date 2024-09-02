import React, { Component } from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Business_profile_Card from "../../components/business_profile";

const Top = StatusBar.currentHeight;

export default class Business_Profile extends Component {
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
        <Business_profile_Card
          name={this.props.route.params.data.name}
          prof={this.props.route.params.data.business}
          ph={"+91 " + this.props.route.params.data.mobile_number}
          reg={this.props.route.params.data.region}
          bus_det={this.props.route.params.data.business_details}
          website={this.props.route.params.data.business_website}
          mail={this.props.route.params.data.email}
        />

        {/*  */}
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
