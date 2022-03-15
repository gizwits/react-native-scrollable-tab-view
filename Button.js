const React = require('react');
const ReactNative = require('react-native');
const {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Platform
} = ReactNative;

module.exports = Button;


const Button = (props) => {

  if (Platform.OS === 'Android') {
    return <TouchableNativeFeedback
        delayPressIn={0}
        background={TouchableNativeFeedback.SelectableBackground()} // eslint-disable-line new-cap
        {...props}
    >
        {props.children}
    </TouchableNativeFeedback>;
  }

  return <TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>;
};

module.exports = Button;