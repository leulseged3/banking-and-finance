import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { Button } from './components'
export const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Text style={styles.subTitle}>
        Finance and banking app Please login to your acount For your check and balance
      </Text>

      <Button
        text="Login"
        buttonStyle={styles.buttonStyle}
        onPress={() => null}
      />

      <View style={styles.signUpWrapper}>

        <Text style={styles.signUpText}>
          Don't have an account?
        </Text>

        <Text style={styles.signUp}> Signup</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 34
  },

  title: {
    fontSize: 32,
    fontFamily: 'Gotham-Bold'
  },

  subTitle: {
    textAlign: 'center',
    fontFamily: 'Gotham-Medium',
    marginTop: 10
  },

  buttonStyle: {
    borderRadius: 25,
    marginTop: 40
  } as ViewStyle,

  signUp: {
    fontFamily: 'Gotham-Bold'
  },
  signUpText: {
    fontFamily: 'Gotham-Medium'
  } as TextStyle,

  signUpWrapper: {
    flexDirection: 'row',
    marginTop: 30
  } as ViewStyle

})