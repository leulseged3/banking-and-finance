import React from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

interface IButton {
  /**
   *
   *
   * @type {ViewStyle}
   * @memberof IButton
   * this optional prop overrides the default style of the button
   */
  buttonStyle?: ViewStyle
  /**
   *
   *
   * @type {string}
   * @memberof IButton
   * The text of the button
   */
  text: string,
  /**
   *
   *
   * @type {TextStyle}
   * @memberof IButton
   * this optional prop overrides the default style of the button text
   */
  textStyle?: TextStyle,
  /**
   *
   *
   * @memberof IButton
   * when button is pressed this function will be executed
   */
  onPress: () => void
}

export const Button: React.FC<IButton> = (props) => {
  const { buttonStyle, text, textStyle, onPress } = props
  return (
    <TouchableOpacity
      style={[ styles.Wrapper, buttonStyle ]}
      onPress={onPress}
    >
      <Text style={[ styles.text, textStyle ]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Wrapper: {
    height: 50,
    backgroundColor: '#6729FF',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,

  text: {
    color: 'white',
    fontFamily: 'Gotham-Bold'
  } as TextStyle
})
