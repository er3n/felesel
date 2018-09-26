import React from 'react';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native'

export default class Loading extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../assets/lottie/welcome_animation')}
        style={{
          width: Dimensions.get('window').width,
          height: 100
        }}
      />
    );
  }
}