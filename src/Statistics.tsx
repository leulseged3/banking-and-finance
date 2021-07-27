import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle, Image } from 'react-native'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import ProgressCircle from 'react-native-progress-circle'

interface StatisticsProps extends NavigationComponentProps {

}

export const StatisticsScreen: React.FC<StatisticsProps> = (props) => {
  const { componentId } = props

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="chevron-left" style={styles.iconStyle}
          onPress={() => Navigation.pop(componentId)}
          size={20}
        />

        <Icon
          name="ellipsis-v"
          // onPress={() => Navigation.push(componentId, {
          //   component: {
          //     name: 'TransactionsScreen'
          //   }
          // })}
          size={20}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
        <ProgressCircle
          percent={85}
          radius={80}
          borderWidth={10}
          color="#753CFF"
          shadowColor="#F3F9FE"
          bgColor="#F3F9FE"
        >
          <ProgressCircle
            percent={75}
            radius={60}
            borderWidth={10}
            color="#1E1D1D"
            shadowColor="#F3F9FE"
            bgColor="#F3F9FE"
          >
            <Text style={{ fontSize: 22, fontFamily: 'Gotham-Bold' }}>{'75%'}</Text>
            <Text style={{ fontSize: 11, fontFamily: 'Gotham-Bold', color: '#848687' }}>Reviews</Text>
          </ProgressCircle>
        </ProgressCircle>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={styles.statisticsTitle}>Statistics</Text>

        <View style={styles.tab}>
          <View style={[ styles.tabActive, { backgroundColor: '#fff' } ]}>
            <Text style={{ fontFamily: 'Gotham-Bold' }}>Incomings</Text>
          </View>

          <View style={[ styles.tabActive ]}>
            <Text style={{ fontFamily: 'Gotham-Bold', color: '#fff' }}>Outgoings</Text>
          </View>
        </View>

        <Text style={{ textAlign: 'center', fontSize: 22, fontFamily: 'Gotham-Medium', marginTop: 40 }}>Saved in July</Text>
        <Text style={{ textAlign: 'center', fontSize: 30, fontFamily: 'Gotham-Bold', marginTop: 40 }}>$22,1245.50</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F9FE',
    paddingHorizontal: 20,
    paddingTop: 20
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  } as ViewStyle,
  iconStyle: {
    flex: 1,
  } as ViewStyle,
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25
  } as ViewStyle,
  title: {
    fontSize: 22,
    fontFamily: 'Gotham-Bold',
  } as TextStyle,
  subTitle: {
    fontFamily: 'Gotham-Medium',
  } as TextStyle,
  plusWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#FFD675',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  cardWrapper: {
    height: 200,
    width: '100%',
    backgroundColor: '#6729FF',
    borderRadius: 25,
    padding: 20
  } as ViewStyle,
  idNumber: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Gotham-Bold',
    paddingVertical: 10
  } as TextStyle,
  detailWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  } as ViewStyle,
  name: {
    color: '#fff',
    fontFamily: 'Gotham-Medium',
    paddingVertical: 10
  } as TextStyle,
  expiryText: {
    color: '#fff',
    fontFamily: 'Gotham-Medium',
    fontSize: 10
  } as TextStyle,
  expiryDateText: {
    color: '#fff',
    fontFamily: 'Gotham-Bold',
    paddingTop: 5
  } as TextStyle,
  mastercardText: {
    color: '#fff',
    fontFamily: 'Gotham-Bold',
  } as TextStyle,
  recentTransactionText: {
    fontSize: 20,
    fontFamily: 'Gotham-Bold',
    paddingTop: 20
  } as TextStyle,
  transactionCard: {
    width: '100%',
    height: 90,
    borderRadius: 40,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 24,
  } as ViewStyle,
  statisticsTitle: {
    fontSize: 22,
    fontFamily: 'Gotham-Bold',
  } as TextStyle,
  tab: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: '#6729FF',
    marginTop: 20,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle,
  tabActive: {
    height: 35,
    width: '45%',
    // backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle
})