import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default class DocumentPickers extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            fontsLoaded:false,
            selectedFile: null
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
          Outfit_Bold: require('../assets/fonts/static/Outfit-Bold.ttf'),
          Outfit_Regular: require('../assets/fonts/static/Outfit-Regular.ttf'),
          Outfit_Medium:require('../assets/fonts/static/Outfit-Medium.ttf'),
          Outfit_Semi:require('../assets/fonts/static/Outfit-SemiBold.ttf'),
          Outfit_Light:require('../assets/fonts/static/Outfit-Light.ttf')
        });
         this.setState({ fontsLoaded: true });
      }

  // Function to handle file picking
  pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      // Update the selected file state
      this.setState({ selectedFile: result });
    } catch (err) {
      // Handle error
      console.error('Error picking document:', err);
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.pickDocument} style={[styles.input, { marginTop: "5%", fontFamily: 'Outfit_Regular', fontSize: 18, borderStyle: "dashed" }]}>
        <View>
            <Text style={{fontFamily:"Outfit_Light",fontSize:18,color:"#999999",marginTop:"5%"}} >Upload (If any pic or docs)</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 55,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 10,
    paddingLeft: 17
  },
});


