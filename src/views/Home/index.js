import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import {VIEW_OTHER} from '@config';

class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainWindow}>
        <Text style={styles.text}>Home</Text>
        <Text />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(VIEW_OTHER);
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Try Navigation</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
