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
  FlatList
} from "react-native";
import { Plant_Details_cards } from "../../components/plant_detail";
import AppLoading from "expo-app-loading";
import axios from "axios";
import { baseURL } from "../../config";

const Top = StatusBar.currentHeight;

export default class Plant_Details_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: [],
    };
  }
  async componentDidMount() {
    const res = await axios.get(
      `${baseURL}/our_trees/${this.props.route.params.region}`
    );
    await this.setState({ data: res.data });
    this.setState({ loaded: true });
  }
  render() {
    if (!this.state.loaded) {
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
              Nature create by us!
            </Text>
          </View>
          {this.state.data.length == 0 ? <Text style={{textAlign:'center', marginTop:'60%', fontSize:16}}>No Resuts Found</Text> : ""}

          {/* ScrollView  */}

          {/* Cards  */}
          <View style={{ flex: 1, width: "100%" ,justifyContent:"center",alignItems:"center"}}>
  <FlatList
    data={this.state.data}
    keyExtractor={(tree) => tree.id.toString()}
    numColumns={2}
    renderItem={({ item }) => (
      <View style={Style.row}>
        <TouchableOpacity style={Style.option_card}>
          <Plant_Details_cards
            title={item.area}
            date={item.planted_on}
            uri={
              "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178286/tree_yfljtl.png"
            }
          />
        </TouchableOpacity>
      </View>
    )}
  />
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
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"center",
    alignItems:"center"
    
  },
  option_card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
