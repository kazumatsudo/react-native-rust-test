/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MobileAppBridge } from 'NativeModules';

async function displayHelloWorld (self) {
  try {
    const text = await MobileAppBridge.sayHelloWorld("Android");

    self.setState({
      hello: text
    })
  } catch (e) {
    console.error(e)
  }
}

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    displayHelloWorld(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          rust says: {this.state.hello}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
