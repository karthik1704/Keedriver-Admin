import React from 'react';
import {FlatList, ScrollView, View, Platform} from 'react-native';
import {
  Box,
  Center,
  Input,
  Icon,
  Pressable,
  IconButton,
  Text,
  Heading,
  VStack,
  HStack,
  Spacer,
  Fab
} from 'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import DateTimePicker from '@react-native-community/datetimepicker';

const searchShema = yup.object({
  search: yup.string().required('Phone number required'),
});

const data = [
  {name: 'Karthik', timeStamp: '12:27am', recentText: 'Hi', id: 1},
  {name: 'Karthik', timeStamp: '12:27am', recentText: 'Hi', id: 2},
];

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Booking = ({navigation}) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    reValidateMode: 'onChange',

    defaultValues: {
      search: '',
    },
    resolver: yupResolver(searchShema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  const renderItem = ({item}) => (
    <Box
      pl={['0', '4']}
      pr={['0', '5']}
      py="2"
      shadow={2}
      rounded="md"
      bg="#fff"
      mx={2}
      my={1}>
      <HStack space={[2, 3]} justifyContent="space-between" p={1}>
        <VStack p={2}>
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            bold>
            {item.name}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            {item.recentText}
          </Text>
        </VStack>
        <Spacer />
        <Text
          fontSize="xs"
          _dark={{
            color: 'warmGray.50',
          }}
          color="coolGray.800"
          alignSelf="flex-start">
          {item.timeStamp}
        </Text>
      </HStack>
    </Box>
  );

  return (
    <Box safeArea safeAreaTop={12} mt={3}  flexDirection="column" flex={1} >
      <Box justifyContent="center">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              bg="#fff"
              keyboardType="number-pad"
              size="lg"
              mx={3}
              width={'95%'}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Enter Phone Number"
              value={value}
              InputRightElement={
                <Pressable onPress={handleSubmit(onSubmit)}>
                  <Icon
                    as={<IconFontAwesome name="search" />}
                    size={5}
                    mr={2}
                  />
                </Pressable>
              }
              returnKeyType="search"
              onSubmitEditing={handleSubmit(onSubmit)}
              max={10}
            />
          )}
          name="search"
        />
        {errors.search && <Text mx={3}>{errors.search.message}</Text>}
      </Box>
      <Box mt={5}>
       
        <Heading mb={2}>Recent Bookings</Heading>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Box>
     
     
        <Fab onPress={()=> navigation.navigate('CreateBooking')} renderInPortal={false} shadow={2} size="lg" right={5} bottom={20} icon={<Icon color="white" as={AntDesign} name="plus" size="md" />} />
      
  
    </Box>
  );
};

export default Booking;
