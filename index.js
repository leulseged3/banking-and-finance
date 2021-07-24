/**
 * @format
 */
import { Navigation } from 'react-native-navigation'

import { WelcomeScreen, ProfileScreen } from './src'

Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen)
Navigation.registerComponent('ProfileScreen', () => ProfileScreen)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'WelcomeScreen'
            }
          },
          {
            component: {
              name: 'ProfileScreen'
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
  }
})