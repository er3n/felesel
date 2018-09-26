import { createMaterialTopTabNavigator } from 'react-navigation'
import AuthenticationPage from './pages/AuthenticationPage'
import ProfilePage from './pages/ProfilePage'
import AttractionPage from './pages/AttractionPage'
import AttractionResults from './pages/AttractionResults'

export default createMaterialTopTabNavigator({
  authentication: AuthenticationPage,
  profile: ProfilePage,
  attraction: AttractionPage,
  results: AttractionResults
}, {
  initialRouteName: 'authentication'
});