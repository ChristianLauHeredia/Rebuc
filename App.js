import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';

import { Auditorias } from './src/components/auditorias/auditorias';
import { Login } from './src/components/login/login';
export default class FlexDirectionBasics extends Component {
  

  render() {
    return (

      <View>

        <Login/>
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  
})
