import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import NewsDet from "../../components/NewsDet";

const Top = StatusBar.currentHeight;

export default class Newsdetails extends Component {
  render() {
    return (
      <SafeAreaView style={Style.safearea}>
        {/* Top_Navigation */}

        <View style={Style.top_navigation}>
          <Image
            style={{
              width: 38,
              height: 38,
              marginLeft: 19,
              marginTop: 13,
              marginBottom: 13,
            }}
            source={{
              uri: "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178285/logo_wgaj2l.png",
            }}
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
          <Text style={{ fontSize: 20, fontFamily: "Outfit_Semi" }}>News</Text>
          <Text style={{ fontSize: 16, fontFamily: "Outfit_Regular" }}>
            Keep up-to-date on latest news!
          </Text>
        </View>

        {/* ScrollView  */}

        <View
          style={{
            marginTop: "3%",
            marginBottom: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollView>
            <NewsDet
              title={this.props.route.params.news.title}
              date={this.props.route.params.news.title}
              detail={this.props.route.params.news.body}
            />
          </ScrollView>
        </View>
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
  card: {
    backgroundColor: "#D9D9D9",
    height: 152,
    width: "89.5%",
    borderRadius: 5,
    justifyContent: "center",
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
