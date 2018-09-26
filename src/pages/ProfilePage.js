import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ProfilePage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.myCustomText}>Home Page</Text>
        <Text style={styles.myCustomText2}>Home Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myCustomText: {
    fontFamily: 'gt-eesti-pro-display-light'

  },
  myCustomText2: {
    fontFamily: 'gt-eesti-pro-display-bold'

  },
})
