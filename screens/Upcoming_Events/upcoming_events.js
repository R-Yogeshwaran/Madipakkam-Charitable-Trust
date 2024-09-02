import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Upcoming_Events_Card from "../../components/upcoming_events";
import axios from "axios";
import { baseURL } from "../../config/index";

const Top = StatusBar.currentHeight;

export default class Upcoming_Events extends Component {
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
    const res = await axios.get(`${baseURL}/upcoming_events`);
    await this.setState({ data: res.data });
    await this.setState({ fontsLoaded: true });
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

        {/* Header  */}

        <View style={{ marginLeft: 20, marginTop: 18 }}>
          <Text style={{ fontSize: 20, fontFamily: "Outfit_Semi" }}>
            Upcoming Events
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "Outfit_Regular" }}>
            Save the date!
          </Text>
        </View>
        <ScrollView style={{ marginBottom: "13%", marginTop: "1%" }}>

        {this.state.data.length == 0 ? <Text style={{textAlign:'center', marginTop:'60%', fontSize:'16'}}>Currently, there are no upcoming events.</Text> : ""}


          {/* CARDS  */}
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {this.state.data.map((event) => (
              <Upcoming_Events_Card
                reg={event.region}
                date={event.date}
                time={event.time}
                event={event.event_name}
              />
            ))}
          </View>
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
