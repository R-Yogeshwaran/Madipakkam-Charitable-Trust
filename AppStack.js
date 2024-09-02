import { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

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
import Newsscreen from "./screens/News/Newsscreen";
import Newsdetails from "./screens/News/Newsdetails";


import { AuthContext } from "./context/AuthContext";

const Stack = createStackNavigator();

export default function AppStack() {
  const { user } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="Main"
            options={{ headerShown: false }}
            component={Main}
          />
          <Stack.Screen
            name="profile1"
            options={{ headerShown: false }}
            component={HomePage}
          />
          <Stack.Screen
            name="profile2"
            options={{ headerShown: false }}
            component={Profile}
          />
          <Stack.Screen
            name="Forgot_Password"
            options={{ headerShown: false }}
            component={Forgot_Password}
          />
          <Stack.Screen
            name="Email"
            options={{ headerShown: false }}
            component={Email}
          />

          <Stack.Screen
            name="Welfare"
            options={{ headerShown: false }}
            component={Welfare}
          />
          <Stack.Screen
            name="Region_Wise"
            options={{ headerShown: false }}
            component={Region_Wise}
          />
          <Stack.Screen
            name="Blood_group"
            options={{ headerShown: false }}
            component={Blood_group}
          />
          <Stack.Screen
            name="User_Blood_group"
            options={{ headerShown: false }}
            component={User_Blood_group}
          />
          <Stack.Screen
            name="Business_Category"
            options={{ headerShown: false }}
            component={Business_Category}
          />
          <Stack.Screen
            name="Business_Card"
            options={{ headerShown: false }}
            component={Business_Card}
          />
          <Stack.Screen
            name="Business_Profile"
            options={{ headerShown: false }}
            component={Business_Profile}
          />
          <Stack.Screen
            name="Blood_Group_User"
            options={{ headerShown: false }}
            component={Blood_Group_User}
          />
          <Stack.Screen
            name="Welfare_members"
            options={{ headerShown: false }}
            component={Welfare_members}
          />
          <Stack.Screen
            name="Welfare_user_profile"
            options={{ headerShown: false }}
            component={Welfare_user_profile}
          />
          <Stack.Screen
            name="Buissness_Builder"
            options={{ headerShown: false }}
            component={Buissness_Builder}
          />
          <Stack.Screen
            name="BusinessBuilderForm"
            options={{ headerShown: false }}
            component={BusinessBuilderForm}
          />
          <Stack.Screen
            name="Plant_Regions"
            options={{ headerShown: false }}
            component={Plant_Regions}
          />
          <Stack.Screen
            name="Plant_Details_Page"
            options={{ headerShown: false }}
            component={Plant_Details_Page}
          />
          <Stack.Screen
            name="Upcoming_Events"
            options={{ headerShown: false }}
            component={Upcoming_Events}
          />
          <Stack.Screen
            name="Donate_Tree"
            options={{ headerShown: false }}
            component={Donate_Tree}
          />
          <Stack.Screen
            name="Grievances"
            options={{ headerShown: false }}
            component={Grievances}
          />
          <Stack.Screen
            name="News"
            options={{ headerShown: false }}
            component={Newsscreen}
          />
          <Stack.Screen
            name="NewsDetails"
            options={{ headerShown: false }}
            component={Newsdetails}
          />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
      )}
    </Stack.Navigator>
  );
}
