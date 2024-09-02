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
import { User_Detail } from "../../components/user_detail_card";
import { Blood_Card } from "../../components/Blood_card";
import AppLoading from "expo-app-loading";
import SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

const Top = StatusBar.currentHeight;

export default class Blood_group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  componentDidMount() {
    SplashScreen.preventAutoHideAsync();
  }

  async _loadAssetsAsync() {
    // Load your app's assets here
  }

  componentDidMount() {
    this._loadAssetsAsync()
      .then(() => SplashScreen.hideAsync())
      .catch(() => {});
  }

  _loadAssetsAsync() {
    // Load your app's assets here and return a promise
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
            Blood Groups
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "Outfit_Regular" }}>
            Select the Blood Group
          </Text>
        </View>

        {/* Scroll View  Cards*/}
        <ScrollView>
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop:15
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("User_Blood_group", {
                    blood_group: "A+",
                  });
                }}
              >
                <Blood_Card name={"A+"} />
              </TouchableOpacity>

              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("User_Blood_group", {
                    blood_group: "A-",
                  });
                }}
              >
                <Blood_Card name={"A-"} />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", flex: 1 }}>
              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("User_Blood_group", {
                    blood_group: "B+",
                  });
                }}
              >
                <Blood_Card name={"B+"} />
              </TouchableOpacity>

              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("User_Blood_group", {
                    blood_group: "B-",
                  });
                }}
              >
                <Blood_Card name={"B-"} />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", flex: 1 }}>
              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("User_Blood_group", {
                    blood_group: "AB+",
                  });
                }}
              >
                <Blood_Card name={"AB+"} />
              </TouchableOpacity>

              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("User_Blood_group", {
                    blood_group: "AB-",
                  });
                }}
              >
                <Blood_Card name={"AB-"} />
              </TouchableOpacity>
            </View>
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
  option_card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
