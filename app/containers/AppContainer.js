import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { ActionCreators} from '../actions';

const {
  View,
  Text,
  TouchableHighlight,
} = ReactNative;

class AppContainer extends Component {

  addRecipe(){
    this.props.addRecipe();
  }

  render(){
    return(
      <View>
        <Text>
          This is the AppContainer Component! Recipe cont: {this.props.recipeCount}
        </Text>
        <TouchableHighlight onPress={() => {this.addRecipe()}}>
          <Text>
            Increase Count
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    recipeCount: state.recipeCount
  }
}, mapDispatchToProps)(AppContainer);
