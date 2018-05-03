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

  constructor(props){
    super(props);
    this.state = {recipeCount: 0};
  }

  incrementRecipeCount(){
    this.setState({recipeCount: this.state.recipeCount + 1})
  }

  render(){
    return(
      <View>
        <Text>
          This is the AppContainer Component! Reciüpe cont: {this.state.recipeCount}
        </Text>
        <TouchableHighlight onPress={() => {this.incrementRecipeCount()}}>
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

export default connect(() => {return {} }, mapDispatchToProps)(AppContainer);
