import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle, Image } from 'react-native'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import HamBurger from 'react-native-vector-icons/FontAwesome5'

interface ITransactions extends NavigationComponentProps {

}

export const TransactionsScreen: React.FC<ITransactions> = (props) => {
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
          onPress={() => Navigation.push(componentId, {
            component: {
              name: 'TransactionsScreen'
            }
          })}
          size={20}
        />
      </View>

      <View style={styles.titleWrapper}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Your Cards</Text>
          <Text style={styles.subTitle}>You have 3 active cards</Text>
        </View>
        <View style={styles.plusWrapper}>
          <Icon name="plus" size={18} color="#fff" />
        </View>
      </View>

      <View style={styles.cardWrapper}>
        <Icon name="newspaper-o" size={30} color="#fff" />
        <Text style={styles.idNumber}>4562 1122 4595 7852</Text>

        <View style={styles.detailWrapper}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Ghulam</Text>
            <Text style={styles.expiryText}>Expiry date</Text>
            <Text style={styles.expiryDateText}>24/2020</Text>
          </View>

          <View>
            <Image source={require('../assets/images/mastercard.png')} style={{ width: 100, height: 70 }} />
            <Text style={styles.mastercardText}>Master card</Text>
          </View>
        </View>
      </View>

      <Text style={styles.recentTransactionText}>Recent Transactions</Text>

      <View style={styles.transactionCard}>
        <HamBurger name="hamburger" size={25} />
        <View style={{ marginLeft: 40, flex: 1 }}>
          <Text style={styles.title}>KFC</Text>
          <Text style={styles.subTitle}>June 26</Text>
        </View>
        <Text style={styles.subTitle}>+$2000</Text>
      </View>

      <View style={styles.transactionCard}>
        <Icon name="car" size={25} />
        <View style={{ marginLeft: 40, flex: 1 }}>
          <Text style={styles.title}>Paypal</Text>
          <Text style={styles.subTitle}>June 28</Text>
        </View>
        <Text style={styles.subTitle}>+$5000</Text>
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
    height: 70,
    borderRadius: 25,
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

    elevation: 18,
  } as ViewStyle
})