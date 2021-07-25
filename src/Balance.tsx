import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle, Image, TouchableOpacity, ImageStyle } from 'react-native'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import FingerPrint from 'react-native-vector-icons/FontAwesome5'

interface IBalance extends NavigationComponentProps {

}

export const BalanceScreen: React.FC<IBalance> = (props) => {
  const { componentId } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconWrapper}>
        <Icon name="close" size={20} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Image source={require('../assets/images/avatar1.png')} style={styles.imageStyle} />
        <Text style={styles.name}>Ghulam</Text>
        <Text style={styles.job}>UX UI Designer</Text>

        <View style={styles.setting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="calculator" size={30} style={{ marginRight: 25 }} color="#7C7E80" />
            <Text style={styles.settingText}>Corporate APP</Text>
          </View>
        </View>

        <View style={styles.setting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="user-secret" size={30} style={{ marginRight: 25 }} color="#7C7E80" />
            <Text style={styles.settingText}>Security Settings</Text>
          </View>
        </View>

        <View style={styles.setting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="shopping-cart" size={30} style={{ marginRight: 25 }} color="#7C7E80" />
            <Text style={styles.settingText}>Online Shopping</Text>
          </View>
        </View>

        <View style={styles.setting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="qq" size={30} style={{ marginRight: 25 }} color="#7C7E80" />
            <Text style={styles.settingText}>Groceries</Text>
          </View>
        </View>

        <View style={styles.setting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="wrench" size={30} style={{ marginRight: 25 }} color="#7C7E80" />
            <Text style={styles.settingText}>Utilities</Text>
          </View>
        </View>

        <View style={styles.setting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FingerPrint name="fingerprint" size={30} style={{ marginRight: 25 }} color="#7C7E80" />
            <Text style={styles.settingText}>Thumb Scanner</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F3F9FE'
  } as ViewStyle,
  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'flex-end'
  } as ViewStyle,
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25
  } as ImageStyle,
  name: {
    fontSize: 22,
    fontFamily: 'Gotham-Bold',
    paddingTop: 20
  } as TextStyle,
  job: {
    fontFamily: 'Gotham-Medium',
    paddingTop: 5
  } as TextStyle,
  content: {
    paddingLeft: 30
  } as ViewStyle,
  setting: {
    paddingTop: 30
  } as ViewStyle,
  settingText: {
    fontSize: 18,
    fontFamily: 'Gotham-Medium',
    color: '#7C7E80'
  }
})