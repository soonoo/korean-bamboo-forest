import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import URL from './URL';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }

  async componentDidMount() {
    const a = await fetch(URL.MAIN);
    const b = await a.text();

    var HTMLParser = require('fast-html-parser');
    var root = HTMLParser.parse(b);

    console.log(root.querySelectorAll('.bl_body .bl_wrap'));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
