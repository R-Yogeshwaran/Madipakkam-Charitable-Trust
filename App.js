import { SafeAreaView, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// App Imports

import HomePage from "./screens/Menu/homepage";
import Profile from "./screens/Menu/profile";
import Login from "./screens/Auth/login";
import Forgot_Password from "./screens/Auth/forgot_password";
import Email from "./screens/Auth/email_sent";
import Main from "./screens/home";
import Welfare from "./screens/Welfare/welfare_Association";
import Region_Wise from "./screens/Welfare/Welfare_user_profile";
import Blood_group from "./screens/Blood_Group/Blood_group";
import User_Blood_group from "./screens/Blood_Group/user_blood_group";
import Business_Category from "./screens/Business/Business_Category";
import Business_Card from "./screens/Business//Business_card";
import Business_Profile from "./screens/Business/Business_Profile";
import Blood_Group_User from "./screens/Blood_Group/Blood_grp_user";
import Welfare_members from "./screens/Welfare/welfare_members";
import Welfare_user_profile from "./screens/Welfare/Welfare_user_profile";
import Buissness_Builder from "./screens/Business_Builder/Business_builder";
import Plant_Regions from "./screens/Our_Trees/plant_regions";
import Plant_Details_Page from "./screens/Our_Trees/plant_details";
import Upcoming_Events from "./screens/Upcoming_Events/upcoming_events";
import Donate_Tree from "./screens/Donate_Tree/donate_tree";
import Grievances from "./screens/Greivances/greivances";
import BusinessBuilderForm from "./screens/Business_Builder/BusinessBuilderForm";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
import AppStack from "./AppStack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <AppStack />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
