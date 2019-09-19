import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import {VIEW_HOME} from '@config';

class Other extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainWindow}>
        <Text style={styles.text}>Other</Text>
        <Text />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(VIEW_HOME);
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Return</Text>
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
)(Other);
