import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import banner from "../assets/banner1.jpeg";
import { Top_Navigation } from "../components/cards";
import { Page_Cards } from "../components/main_page_card";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Dimensions } from "react-native";
import Birthday from "../components/Birthday";
import News from "../components/News";
import axios from "axios";
import { baseURL } from "../config";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const paddingVertical = screenHeight * 0.02;
const paddingHorizontal = screenWidth * 0.03;

const Top = StatusBar.currentHeight;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      users: [],
      news: [],
    };
  }
  getBirthdaysThisWeek(users) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentWeek = getWeekNumber(today);

    function getWeekNumber(date) {
      const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
      const daysOffset =
        firstDayOfYear.getDay() > 0 ? 7 - firstDayOfYear.getDay() : 0;
      const firstMonday = new Date(date.getFullYear(), 0, 1 + daysOffset);
      const pastDaysOfYear = (date - firstMonday) / 86400000;
      return Math.ceil((pastDaysOfYear + firstMonday.getDay() + 1) / 7);
    }

    function parseDate(dateString) {
      const parts = dateString.split("-");
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1; // Months are 0-based in JavaScript Date object
      return new Date(currentYear, month, day);
    }

    function isBirthdayThisWeek(date) {
      const birthdayWeek = getWeekNumber(date);
      return birthdayWeek === currentWeek;
    }

    const birthdaysThisWeek = users.filter((user) => {
      const birthDate = parseDate(user.date_of_birth);
      return isBirthdayThisWeek(birthDate);
    });

    return birthdaysThisWeek;
  }
  getMonthName(monthNumber) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (monthNumber < 1 || monthNumber > 12) {
      return "Invalid month number";
    }

    return months[monthNumber - 1];
  }
  async componentDidMount() {
    await Font.loadAsync({
      Outfit_Bold: require("../assets/fonts/static/Outfit-Bold.ttf"),
      Outfit_Regular: require("../assets/fonts/static/Outfit-Regular.ttf"),
      Outfit_Medium: require("../assets/fonts/static/Outfit-Medium.ttf"),
      Outfit_Semi: require("../assets/fonts/static/Outfit-SemiBold.ttf"),
      Outfit_Light: require("../assets/fonts/static/Outfit-Light.ttf"),
    });
    const res = await axios.get(`${baseURL}/welfare_associations/`);
    await this.setState({ users: this.getBirthdaysThisWeek(res.data) });
    const res1 = await axios.get(`${baseURL}/news/`);
    await this.setState({ news: res1.data });
    await this.setState({ fontsLoaded: true });
  }

  render() {
    const { fontsLoaded } = this.state;

    if (!fontsLoaded) {
      return <AppLoading />;
    }

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

        <ScrollView style={{ marginBottom: "10%" }}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            {/* Card  */}
            {/* top card  */}
            <View style={Style.card}>
              <Image
                style={{ width: '100%', height: '100%', borderRadius:5 }}
                // source={{banner}}
                source={require('../assets/banner1.jpeg')} 
              />
            </View>

            <ScrollView>
              {/* option cards  */}

              {/* <ScrollView style={{marginBottom:"70%"}}> */}
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={Style.row}>
                  <TouchableOpacity
                    style={Style.option_card}
                    onPress={() => {
                      this.props.navigation.navigate("Welfare");
                    }}
                  >
                    <Page_Cards
                      title={"Welfare Associations"}
                      uri={
                        "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178287/welfare_fdwpmu.png"
                      }
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Style.option_card}
                    onPress={() => {
                      this.props.navigation.navigate("Blood_group");
                    }}
                  >
                    <Page_Cards
                      title={"Blood Group"}
                      uri={
                        "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178283/bloodGroup_u8ufde.png"
                      }
                    />
                  </TouchableOpacity>
                </View>

                <View style={Style.row}>
                  <TouchableOpacity
                    style={Style.option_card}
                    onPress={() => {
                      this.props.navigation.navigate("Business_Category");
                    }}
                  >
                    <Page_Cards
                      title={"Business Category"}
                      uri={
                        "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178284/businessCategory_zugzdd.png"
                      }
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Style.option_card}
                    onPress={() => {
                      this.props.navigation.navigate("Buissness_Builder");
                    }}
                  >
                    <Page_Cards
                      title={"Business Builder"}
                      uri={
                        "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178283/BusinessBuilder_erp8jl.png"
                      }
                    />
                  </TouchableOpacity>
                </View>

                <View style={Style.row}>
                  <TouchableOpacity
                    style={Style.option_card}
                    onPress={() => {
                      this.props.navigation.navigate("Plant_Regions");
                    }}
                  >
                    <Page_Cards
                      title={"Our Trees"}
                      uri={
                        "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178286/tree_yfljtl.png"
                      }
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Style.option_card}
                    onPress={() => {
                      this.props.navigation.navigate("Upcoming_Events");
                    }}
                  >
                    <Page_Cards
                      title={"Upcoming Events"}
                      uri={
                        "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178287/upcomingEvents_znsnp5.png"
                      }
                    />
                  </TouchableOpacity>
                </View>

                <View style={Style.row}>
                  <TouchableOpacity
                    style={Style.option_card}
                    onPress={() => {
                      this.props.navigation.navigate("Donate_Tree");
                    }}
                  >
                    <Page_Cards
                      title={"Donate a Tree"}
                      uri={
                        "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178283/donate_ilu1uk.png"
                      }
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Style.option_card}
                    onPress={() => {
                      this.props.navigation.navigate("Grievances");
                    }}
                  >
                    <Page_Cards
                      title={"Public Grievances"}
                      uri={
                        "https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681178285/grievances_jl2wug.png"
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Birthday */}

              <View
                style={{
                  flexDirection: "column",
                  marginTop: "3%",
                  marginBottom: "3%",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    marginRight: 10,
                    fontSize: 20,
                    marginBottom: "3%",
                    fontFamily: "Outfit_Semi",
                  }}
                >
                  Upcoming Birthdays
                </Text>

                <ScrollView horizontal={true}>
                  {this.state.users &&
                    this.state.users.map((user) => (
                      <Birthday
                        day={user.date_of_birth.split("-")[0]}
                        month={this.getMonthName(
                          user.date_of_birth.split("-")[1]
                        )}
                        name={user.name}
                        work={user.professional_details}
                      />
                    ))}
                </ScrollView>
              </View>

              {/* NEWS  */}

              <View
                style={{
                  flexDirection: "column",
                  marginTop: "3%",
                  marginBottom: "3%",
                  marginLeft: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      marginRight: 10,
                      fontSize: 20,
                      marginBottom: "3%",
                      fontFamily: "Outfit_Semi",
                    }}
                  >
                    News
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("News", {
                        news: this.state.news,
                      });
                    }}
                  >
                    <Text
                      style={{
                        paddingHorizontal: 10,
                        marginRight: 10,
                        fontSize: 13,
                        marginBottom: "3%",
                        color: "#007DFE",
                      }}
                    >
                      View More
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ScrollView horizontal={true}>
                    {this.state.news &&
                      this.state.news.map((news) => (
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate("NewsDetails", {
                              news: news,
                            });
                          }}
                        >
                          <News date={news.date} title={news.title} />
                        </TouchableOpacity>
                      ))}
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
            {/* </ScrollView> */}
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
  card: {
    // backgroundColor: "#D9D9D9",
    height: 200,
    width: "90%",
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
