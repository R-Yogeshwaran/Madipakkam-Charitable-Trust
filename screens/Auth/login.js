import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import Sp from "expo-splash-screen";
import * as Font from "expo-font";
import axios from "axios";
import { baseURL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext";

const Top = StatusBar.currentHeight;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      email: "",
      password: "",
      data: [],
      error: "",
      showPassword: false,
    };
  }
  static contextType = AuthContext;

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
    const { login } = this.context;
    if (!fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <SafeAreaView style={Style.safearea}>
        <View>
          <ScrollView>
            {/* LOGIN IMAGE  */}

            <View style={{ flexDirection: "column", flex: 1 }}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 15,
                }}
              >
                <Image
                  style={{ width: 291, height: 270, marginTop: 20 }}
                  source={{
                    uri: "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178284/authImg_nagkut.png",
                  }}
                />
              </View>

              {/* LOGIN CONTENT  */}

              <View style={{ alignItems: "center", marginTop: 45 }}>
                <Text style={{ fontSize: 25, fontFamily: "Outfit_Bold" }}>
                  User Login
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    marginTop: 8,
                    fontFamily: "Outfit_Regular",
                  }}
                >
                  Hey, enter your details to get sign in
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    fontFamily: "Outfit_Regular",
                  }}
                >
                  {" "}
                  to your account
                </Text>
              </View>

              {/* Input Fields */}
              <View style={{ height: "20%" }}>
                <View>
                  <TextInput
                    value={this.state.email}
                    onChangeText={(text) => {
                      this.setState({ email: text });
                    }}
                    placeholder="Enter Email"
                    style={[
                      Style.Input,
                      {
                        marginTop: 30,
                        fontFamily: "Outfit_Regular",
                        fontSize: 18,
                      },
                    ]}
                  ></TextInput>

                  <TextInput
                    secureTextEntry={!this.state.showPassword}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(text) => {
                      this.setState({ password: text });
                    }}
                    style={[
                      Style.Input,
                      {
                        marginTop: 18,
                        fontFamily: "Outfit_Regular",
                        fontSize: 18,
                      },
                    ]}
                  ></TextInput>
                 <TouchableOpacity onPress={() => {this.setState((prevState) => ({ showPassword: !prevState.showPassword })); }}>
                    <Image
                      style={{
                        width: 27,
                        height: 27,
                        marginLeft: "85%",
                        marginTop: -40,
                      }}
                      source={{
                        uri: "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681360562/Group254_uq1yhe.png",
                      }}
                    />
                  </TouchableOpacity>
                </View>

                {this.state.error && <Text>{this.state.error}</Text>}
                {/* forget Password  */}

                {/* <View style={{ marginLeft: 20, marginTop: "7%" }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("Forgot_Password");
                    }}
                  >
                    <Text style={{ fontSize: 16, fontFamily: "Outfit_Medium" }}>
                      Having Trouble Sign in?
                    </Text>
                  </TouchableOpacity>
                </View> */}

                {/* Sign In Button  */}

                <TouchableOpacity
                  onPress={async () => {
                    console.log("test");
                    const res = await axios.get(
                      `${baseURL}/welfare_associations/${this.state.email}`
                    );
                    await console.log(res);
                    await this.setState({ data: res.data });
                    const user = await res.data;
                    if (user.length == 0) {
                      this.setState({ error: "Invalid credentials" });
                    } else if (this.state.password !== user[0].password) {
                      this.setState({ error: "Invalid credentials" });
                    } else {
                      await AsyncStorage.setItem("user", JSON.stringify(user));
                      login(user);
                    }
                  }}
                  style={Style.Button}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#FFFFFF",
                      fontFamily: "Outfit_Semi",
                    }}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
