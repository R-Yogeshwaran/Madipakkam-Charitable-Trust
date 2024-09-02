import React, { Component } from "react";
import {
  Select,
  Center,
  Box,
  CheckIcon,
  useTheme,
  NativeBaseProvider,
} from "native-base";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      service: "",
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
      Outfit_Bold: require("../assets/fonts/static/Outfit-Bold.ttf"),
      Outfit_Regular: require("../assets/fonts/static/Outfit-Regular.ttf"),
      Outfit_Medium: require("../assets/fonts/static/Outfit-Medium.ttf"),
      Outfit_Semi: require("../assets/fonts/static/Outfit-SemiBold.ttf"),
      Outfit_Light: require("../assets/fonts/static/Outfit-Light.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    const { fontsLoaded } = this.state;

    if (!fontsLoaded) {
      return <AppLoading />;
    }
  }

  render() {
    const { service } = this.state;

    return (
      <NativeBaseProvider>
        <Center>
          <Select
            selectedValue={service}
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
            onValueChange={(itemValue) => this.setState({ service: itemValue })}
          >
            <Select.Item label="Chennai" value="Chennai" />
            <Select.Item label="Sivagangai" value="Sivagangai" />
            <Select.Item label="Madurai" value="Madurai" />
            <Select.Item label="Ramanathapuram" value="Ramanathapuran" />
            <Select.Item label="Coimbatore" value="Coimbatore" />
          </Select>
        </Center>
      </NativeBaseProvider>
    );
  }
}

export default Example;
