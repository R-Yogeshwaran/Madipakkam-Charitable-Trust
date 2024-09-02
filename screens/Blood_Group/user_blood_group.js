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
import { User_Blood_Detail } from "../../components/user_blood_detail";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import axios from "axios";
import { baseURL } from "../../config";
const Top = StatusBar.currentHeight;

export default class User_Blood_group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      data: [],
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
    const res = await axios.get(
      `${baseURL}/blood_group/${this.props.route.params.blood_group}`
    );
    await this.setState({ data: res.data });
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

        {/* Header */}

        <View style={{ marginLeft: 20, marginTop: 18 }}>
          <Text style={{ fontSize: 20, fontFamily: "Outfit_Semi" }}>
            {this.props.route.params.blood_group} Blood Group
          </Text>
        </View>

        {/* ScrollView cards  */}

        <ScrollView style={{ marginBottom: 137 }}>
          {this.state.data.length == 0 ? <Text>No Resuts Found</Text> : ""}
          {this.state.data.map((data) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Blood_Group_User", {
                    data: data,
                  });
                }}
              >
                <User_Blood_Detail
                  name={data.name}
                  ph={"+91 " + data.mobile_number}
                  prof={data.business}
                  reg={data.region + "    Region"}
                  blood_grp={data.blood_group}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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
