import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Business_build_card from "../../components/Business_build_card";
import { ScrollView } from "react-native";
import { NativeBaseProvider, Select, Center, CheckIcon } from "native-base";
import axios from "axios";
import { baseURL } from "../../config";

const Top = StatusBar.currentHeight;

export default class BusinessBuilderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      business_name: "",
      mobile_number: "",
      mail: "",
      region: "",
      business_details: "",
      success: false,
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
    this.setState({ success: false });
  }
  handleSubmit = async () => {
    const data = {
      business_name: this.state.business_name,
      mobile_number: this.state.mobile_number,
      mail: this.state.mail,
      region: this.state.region,
      business_details: this.state.business_details,
    };
    await axios.post(`${baseURL}/business_builder`, data);
    await this.setState({ success: true });
  };
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

        <ScrollView>
          <View
            style={{
              marginLeft: "6%",
              marginTop: 18,
              flexDirection: "row",
              justifyContent: "center",
              width: "85%",
            }}
          >
            <View style={{ justifyContent: "center"}}>
              <Text style={{ fontSize: 25, fontFamily: "Outfit_Semi", marginTop:20, textAlign:'left' }}>
                Business Builder Form
              </Text>
              <Text style={{ fontSize: 16, fontFamily: "Outfit_Regular", marginTop:5, marginBottom:10 }}>
                Enter your business details and send the request to get
                displayed in the Business Builder Page.
              </Text>
            </View>
          </View>

          <View>
            <TextInput
              placeholder="Enter Business Name"
              value={this.state.business_name}
              onChangeText={(text) => {
                this.setState({ business_name: text });
              }}
              style={[
                Style.Input,
                { marginTop: "5%", fontFamily: "Outfit_Regular", fontSize: 18 },
              ]}
            ></TextInput>
            <TextInput
              placeholder="Enter Mobile Number"
              value={this.state.mobile_number}
              onChangeText={(text) => {
                this.setState({ mobile_number: text });
              }}
              style={[
                Style.Input,
                { marginTop: "5%", fontFamily: "Outfit_Regular", fontSize: 18 },
              ]}
            ></TextInput>
            <TextInput
              placeholder="Enter Mail"
              value={this.state.mail}
              onChangeText={(text) => {
                this.setState({ mail: text });
              }}
              style={[
                Style.Input,
                { marginTop: "5%", fontFamily: "Outfit_Regular", fontSize: 18 },
              ]}
            ></TextInput>
            <NativeBaseProvider>
              <Center>
                <Select
                  selectedValue={this.state.region}
                  width="90%"
                  height="52"
                  marginTop="5%"
                  borderRadius="10"
                  accessibilityLabel="Choose Service"
                  placeholder="Select Region"
                  fontSize="18"
                  fontFamily="Outfit_Regular"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="3" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) =>
                    this.setState({ region: itemValue })
                  }
                >
                  <Select.Item label="Chennai" value="Chennai" />
                  <Select.Item label="Sivagangai" value="Sivagangai" />
                  <Select.Item label="Madurai" value="Madurai" />
                  <Select.Item label="Ramanathapuram" value="Ramanathapuran" />
                  <Select.Item label="Coimbatore" value="Coimbatore" />
                </Select>
              </Center>
            </NativeBaseProvider>
            <TextInput
              multiline={true}
              value={this.state.business_details}
              onChangeText={(text) => {
                this.setState({ business_details: text });
              }}
              placeholder="Enter your Business Details"
              style={[
                Style.Input,
                {
                  marginTop: "5%",
                  fontFamily: "Outfit_Regular",
                  fontSize: 18,
                  height: 97,
                  textAlign: "auto",
                },
              ]}
            ></TextInput>

            {/* SUBMIT BUTTON */}
            {this.state.success ? <Text>Form submitted successfully</Text> : ""}
            <TouchableOpacity onPress={this.handleSubmit} style={Style.Button}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  fontFamily: "Outfit_Semi",
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "#E6E6E6",
    borderBottomColor: "#E6E6E6",
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
  Input: {
    width: "90%",
    height: 55,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 10,
    paddingLeft: 17,
  },
  Button: {
    width: "90%",
    height: 52,
    backgroundColor: "#007DFE",
    marginLeft: 20,
    marginRight: 20,
    marginTop: "5%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
