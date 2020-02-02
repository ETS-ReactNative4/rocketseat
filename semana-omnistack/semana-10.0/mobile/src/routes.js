import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../src/pages/Main';
import Profile from '../src/pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',

            }
        },
        Profile: {
            screen: Profile,
            navigationOptions:{
                title: 'Github Proifle'
            }
        },
    },{
        defaultNavigationOptions:{
            headerTintColor: '#FFFFFF',
            headerBackTitleVisible: null,
            headerStyle:{
                backgroundColor: '#7D40E7',
            },
            headerTitleAlign: 'center',
        }
    })
);

export default Routes;