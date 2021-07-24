import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>
        Finance and banking app Please login to your acount For your check and balance
      </Text>
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
  }
})