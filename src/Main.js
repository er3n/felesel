import React from 'react'
import { Platform, StyleSheet, View, StatusBar } from 'react-native'
import Route from './Route'
import Splash from './components/Splash'

export default class Main extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isReady: false
    }
  }

  componentDidMount () {
    this.initApp()
  }

  initApp () {
    setTimeout(() => this.setState({isReady: true}), 3000)
  }

  render () {
    return (
      <View style={styles.container}>
        {!this.state.isReady && <Splash/>}
        {this.state.isReady && <Route />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})