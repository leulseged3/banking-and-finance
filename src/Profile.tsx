import React from 'react'
import { StyleSheet, Text, View, Image, TextStyle, ViewStyle, ImageStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Slider from '@react-native-community/slider'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
interface IProfile extends NavigationComponentProps {

}

export const ProfileScreen: React.FC<IProfile> = (props) => {
  const { componentId } = props

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="navicon" style={styles.iconStyle}
          size={22}
          onPress={() => Navigation.push(componentId, {
            component: {
              name: 'TransactionsScreen'
            }
          })}
        />
        <Image source={require('../assets/images/avatar1.png')} style={styles.imageStyle} />
      </View>

      <Text style={styles.balanceStyle}>Your Balance</Text>
      {/* <View style={{ backgroundColor: '#f6f6f6' }}> */}
      <View style={styles.cardWrapper}>
        <Text style={styles.date}>June 14, 2020</Text>
        <View style={styles.moneyPercentWrapper}>
          <Text style={styles.money}>$27,802.05</Text>
          <Text style={styles.percent}>15%</Text>
          <Icon name="arrow-up" size={20} />
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 30, paddingHorizontal: 10 }}>
        <View style={styles.iconWrapper}>
          <Icon name="arrow-down" color="#EB1F9D" size={20} />
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="arrow-up" color="#35DC76" size={20} />
        </View>

        <View style={styles.iconWrapper}>
          <View style={{ width: 25, height: 25, borderWidth: 2, borderColor: '#D7B666', justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="dollar" color="#D7B666" size={15} />
          </View>
        </View>

        <View style={styles.iconWrapper}>
          <Icon name="cloud-upload" color="#6B77AA" size={20} />
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.activities}>
          Activities
        </Text>

        <View style={styles.thisWeek}>
          <Text style={styles.thisWeekText}>This Week</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
        <Text>Jan</Text>
        <Text>Feb</Text>
        <Text>Mar</Text>
        <Text>Apr</Text>
        <Text>May</Text>
        <Text>Jun</Text>
      </View>

      {/* <View style={{ transform: [ { rotate: "-90deg" } ] }}>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="transparent"
        />
      </View> */}
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
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 25
  } as ImageStyle,
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  } as ViewStyle,
  iconStyle: {
    flex: 1,
  } as ViewStyle,
  balanceStyle: {
    fontSize: 22,
    fontFamily: 'Gotham-Bold',
    marginTop: 10
  } as TextStyle,
  cardWrapper: {
    width: '100%',
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 25,
    justifyContent: 'center'
  } as ViewStyle,
  date: {
    fontFamily: 'Gotham-Medium',
  } as TextStyle,
  moneyPercentWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  } as ViewStyle,
  money: {
    fontSize: 22,
    fontFamily: 'Gotham-Bold',
    flexGrow: 1
  } as TextStyle,
  percent: {
    fontSize: 18,
    fontFamily: 'Gotham-Medium',
    marginRight: 10
  } as TextStyle,
  iconWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 2,
  } as ViewStyle,
  activities: {
    fontSize: 18,
    fontFamily: 'Gotham-Bold',
    flex: 1
  } as TextStyle,
  thisWeek: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25
  } as ViewStyle,
  thisWeekText: {
    fontFamily: 'Gotham-Medium'
  } as TextStyle
})