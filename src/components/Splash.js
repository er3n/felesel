import React from 'react'
import Loading from './Loading'
import { Image, StyleSheet, View } from 'react-native'

export default class Splash extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/img/logo.png')}/>
        <Loading/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
});