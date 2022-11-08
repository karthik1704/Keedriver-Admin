import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box, Text, IconButton} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Dashboard from '../screens/Dashboard/Dashboard';
import Booking from '../screens/Booking/Booking';
import CreateBooking from '../screens/CreateBooking/CreateBooking';
import CreateUser from '../screens/CreateUser/CreateUser';
import CreateTrip from '../screens/CreateTrip/CreateTrip';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="CreateBooking"
        component={CreateBooking}
        options={({navigation}) => ({
          headerTransparent: true,
          title: 'Create Booking',
          headerRight: () => (
            <IconButton
              onPress={() => navigation.navigate('CreateUser')}
              title="Info"
              color="#fff"
              icon={<FontAwesome name="user-plus" size={20} />}
              size={'md'}
            />
          ),
        })}
      />

      <Stack.Screen
        name="CreateUser"
        component={CreateUser}
        options={({navigation}) => ({
          headerTransparent: true,
          title: 'Create Customer',
        })}
      />
      <Stack.Screen
        name="CreateTrip"
        component={CreateTrip}
        options={({navigation}) => ({
          headerTransparent: true,
          title: 'Create Trip',
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
