import React from 'react';
import {StatusBar} from 'react-native';
import {Box, HStack, Heading} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import MenuCard from '../../components/MenuCard/MenuCard';
import {useEffect} from 'react';
import {useLoginMutation} from '../../redux/userSlice/userSlice';

const Dashboard = ({navigation}) => {
  const [login, data] = useLoginMutation();

  useEffect(() => {
    const loginData = {
      username: 'admin',
      password: '1234',
    };
    login(loginData)
      .unwrap()
      .then(data => console.log(data))
      .catch(e => console.log(e));
  }, []);
  return (
    <>
      <StatusBar bg="#000" barStyle="light-content" />
      <Box
        flex={1}
        bg={{
          linearGradient: {
            colors: ['#e4e2fb', '#ededf4'],
            start: [0, 0],
            end: [0, 1],
          },
        }}>
        <HStack>
          <Heading p={2} size="md">
            Dashboard
          </Heading>
        </HStack>

        <HStack space={2} m={2} mt={10} warp>
          <MenuCard
            icon={<Icon size={45} name="drivers-license" />}
            name="Drivers"
            badge={100}
          />
          <MenuCard
            icon={<Icon size={45} name="users" />}
            name="Customers"
            badge={100}
          />
        </HStack>
        <HStack space={2} m={2} warp>
          <MenuCard
            icon={<Icon size={45} name="car" />}
            name="Trips"
            badge={100}
            onPress={() => navigation.navigate('CreateBooking')}
          />
          <MenuCard
            icon={<MaterialIcon size={45} name="book-plus-multiple" />}
            name="Booking"
            badge={100}
            onPress={() => navigation.navigate('Booking')}
          />
        </HStack>
      </Box>
    </>
  );
};

export default Dashboard;
