import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Business_build_card from "../../components/Business_build_card";
import axios from "axios";
import { baseURL } from "../../config";

const Top = StatusBar.currentHeight;

export default class Buissness_Builder extends Component {
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
    const res = await axios.get(`${baseURL}/business_builder/approved`);
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
        <View
          style={{
            marginLeft: "6%",
            marginTop: 18,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontFamily: "Outfit_Semi" }}>
              Business Builder
            </Text>
            <Text style={{ fontSize: 16, fontFamily: "Outfit_Regular" }}>
              Get what you want!
            </Text>
          </View>
          

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("BusinessBuilderForm");
            }}
          >
            <View
              style={{
                width: 35,
                height: 35,
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5%",
              }}
            >
              <Image
                style={{ width: 14, height: 14 }}
                source={{
                  uri: "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1683047618/plus_g2hgs1.png",
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        {this.state.data.length == 0 ? <Text style={{textAlign:'center', marginTop:'50%', fontSize:'16'}}>No Results Found</Text> : ""}

        {/* Business Builder Card  */}
        {this.state.data &&
          this.state.data.map((b) => (
            <View
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Business_build_card
                title={b.business_name}
                img={
                  "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681462292/image_2_iynwzv.png"
                }
                det={b.business_details}
                reg={b.region}
                cont={b.mobile_number}
              />
            </View>
          ))}
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
