import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import AppNavigatorView from '@routes';
import {Provider} from 'react-redux';
import reduxStore from '@redux-store';

import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={reduxStore}>
        <View style={styles.mainWindow}>
          <AppNavigatorView />
          <StatusBar backgroundColor="#00AEEF" />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainWindow: {
    flex: 1,
  },
});

export default App;
