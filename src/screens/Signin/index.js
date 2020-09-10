import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Barber from '../../assets/barber.svg'

export default class index extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <Text style={styles.red}> aqui </Text>                

                <Barber height={100} width={100} />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
    },
    red: {
      color: 'red',
    },
  });
  

















