/**
 * @format
 */
import { Navigation } from 'react-native-navigation'

import { WelcomeScreen, ProfileScreen, TransactionsScreen } from './src'

Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen)
Navigation.registerComponent('ProfileScreen', () => ProfileScreen)
Navigation.registerComponent('TransactionsScreen', () => TransactionsScreen)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'TransactionsScreen'
            }
          },
          {
            component: {
              name: 'ProfileScreen'
            }
          },
          {
            component: {
              name: 'WelcomeScreen'
            }
          }
        ]
      }
    }
  })
})

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    height: 0
  },
  statusBar: {
    // drawBehind: true,
    backgroundColor: "#F3F9FE",
  }
})