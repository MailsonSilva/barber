import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SvgUri } from 'react-native-svg'

export default class index extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <Text style={styles.red}> aqui </Text>

                <SvgUri height="50%" width="50%" 
                require('../../assets/barber.svg')
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    red: {
      color: 'red',
    },
  });
  

















