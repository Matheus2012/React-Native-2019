import React from 'react'
import {createSwitchNavigator} from 'react-navigation'
import Auth from './screens/Auth'
// trocar para home ao logar

const MainRoutes = {
    Auth:{
        name:'Auth',
        screen:Auth,
    },
  
}
const MainNavigator = createSwitchNavigator(MainRoutes,{
    initialRouteName:'Auth',
})
export default MainNavigator