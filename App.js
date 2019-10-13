import React, {Component} from 'react';

import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';

export default class SwanStudioApp extends Component {
  render() {
    // let { height, width} = Dimensions.get('window');
    return (
      <ImageBackground
        source={require('./assets/swan.jpg')}
        style={styles.backgroundImage}>
        <ScrollView>
          <View style={{paddingTop: 20, paddingBottom: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{flex: 1, color: 'white'}}>logo</Text>
              <Text style={{flex: 1, textAlign: 'center', color: 'white'}}>
                Title
              </Text>
              <Text style={{flex: 1, textAlign: 'center', color: 'white'}}>
                Right
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch', // or 'stretch'
  },
});

