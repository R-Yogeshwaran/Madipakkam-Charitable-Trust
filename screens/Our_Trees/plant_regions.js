import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Top_Navigation } from "../../components/cards";
import { Page_Cards } from "../../components/main_page_card";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const Top = StatusBar.currentHeight;

export default class Plant_Regions extends Component {
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

        {/* title  */}

        <ScrollView style={{ marginBottom: "20%" }}>
          <View style={{ marginLeft: 20, marginTop: 18 }}>
            <Text style={{ fontSize: 20, fontFamily: "Outfit_Semi" }}>
              Our Plants
            </Text>
            <Text style={{ fontSize: 16, fontFamily: "Outfit_Regular" }}>
              select the region
            </Text>
          </View>

          {/* Scroll View  */}

          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop:15
            }}
          >
            <View style={Style.row}>
              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("Plant_Details_Page", {
                    region: "Chennai",
                  });
                }}
              >
                <Page_Cards
                  title={"Chennai"}
                  uri={
                    "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178285/location_cp0huf.png"
                  }
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("Plant_Details_Page", {
                    region: "Coimbatore",
                  });
                }}
              >
                <Page_Cards
                  title={"Coimbatore"}
                  uri={
                    "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178285/location_cp0huf.png"
                  }
                />
              </TouchableOpacity>
            </View>

            <View style={Style.row}>
              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("Plant_Details_Page", {
                    region: "Erode",
                  });
                }}
              >
                <Page_Cards
                  title={"Erode"}
                  uri={
                    "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178285/location_cp0huf.png"
                  }
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("Plant_Details_Page", {
                    region: "Salem",
                  });
                }}
              >
                <Page_Cards
                  title={"Salem"}
                  uri={
                    "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178285/location_cp0huf.png"
                  }
                />
              </TouchableOpacity>
            </View>

            <View style={Style.row}>
              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("Plant_Details_Page", {
                    region: "Dharmapuri",
                  });
                }}
              >
                <Page_Cards
                  title={"Dharmapuri"}
                  uri={
                    "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178285/location_cp0huf.png"
                  }
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("Plant_Details_Page", {
                    region: "Namakkal",
                  });
                }}
              >
                <Page_Cards
                  title={"Namakkal"}
                  uri={
                    "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178285/location_cp0huf.png"
                  }
                />
              </TouchableOpacity>
            </View>

            <View style={Style.row}>
              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("Plant_Details_Page", {
                    region: "Thanjavur",
                  });
                }}
              >
                <Page_Cards
                  title={"Thanjavur"}
                  uri={
                    "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178285/location_cp0huf.png"
                  }
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={Style.option_card}
                onPress={() => {
                  this.props.navigation.navigate("Plant_Details_Page", {
                    region: "Sivagangai",
                  });
                }}
              >
                <Page_Cards
                  title={"Sivagangai"}
                  uri={
                    "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178285/location_cp0huf.png"
                  }
                />
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
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  option_card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
