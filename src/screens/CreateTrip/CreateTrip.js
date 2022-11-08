import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Box,
  Input,
  Button,
  Icon,
  Text,
  Radio,
  HStack,
  Pressable,
  Center
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import DateTimePicker from '@react-native-community/datetimepicker';

import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const searchShema = yup.object({
  firstName: yup.string().required('Phone number required'),
  lastName: yup.string(),
  phone: yup.string().required('Phone number required'),
  email: yup.string().email('Invalid E-mail'),
  address1: yup.string().required('Address1 required'),
  address2: yup.string(),
});

const CreateTrip = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [mode, setMode] = useState('date');

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm({});

  const onSubmit = data => console.log(data);

  return (
    <Box flex={1} flexDirection="column" safeArea safeAreaTop={8} mt={6}>
      
      <Box my={1}>
        <Radio.Group name="tripType" accessibilityLabel="favorite number">
          <HStack>
            <Radio value="incity" my={1} ml={2}>
              In City
            </Radio>
            <Radio value="outcity" my={1} ml={2}>
              out station
            </Radio>
          </HStack>
        </Radio.Group>
      </Box>
      <Box my={1}>
        <Radio.Group name="tripMode" accessibilityLabel="favorite number">
          <HStack>
            <Radio value="Drop" my={1} ml={2}>
              Drop
            </Radio>
            <Radio value="Round" my={1} ml={2}>
              Round
            </Radio>
          </HStack>
        </Radio.Group>
      </Box>
      <Box mt={2} mb={1}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <Input
              bg="#fff"
              size="lg"
              mx={3}
              width={'95%'}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Enter Pickup Location"
              value={value}
              returnKeyType="next"
              max={10}
              inputRef={ref}
            />
          )}
          name="pickup"
        />
        {errors.pickup && <Text mx={3}>{errors.pickup.message}</Text>}
      </Box>
      <Box mt={2} mb={1}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <Input
              bg="#fff"
              size="lg"
              mx={3}
              width={'95%'}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Enter Drop Location"
              value={value}
              returnKeyType="next"
              max={10}
              inputRef={ref}
            />
          )}
          name="drop"
        />
        {errors.drop && <Text mx={3}>{errors.drop.message}</Text>}
      </Box>
      <Box mt={2} mb={1}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <Input
              bg="#fff"
              size="lg"
              mx={3}
              width={'95%'}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Enter Pickup Date"
              value={value}
              returnKeyType="next"
              max={10}
              inputRef={ref}
              InputRightElement={
                <Pressable
                  onPress={() => {
                    setMode('time');
                    setShowCalendar(true);
                  }}>
                  <Icon as={<FontAwesome name="calendar" />} />
                </Pressable>
              }
            />
          )}
          name="pickupDate"
        />
        {errors.pickupDate && <Text mx={3}>{errors.pickupDate.message}</Text>}
      </Box>
      <Box mt={2} mb={1}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <Input
              bg="#fff"
              size="lg"
              mx={3}
              width={'95%'}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Enter Pickup Time"
              value={value}
              returnKeyType="next"
              max={10}
              inputRef={ref}
              InputRightElement={
                <Pressable
                  onPress={() => {
                    setMode('time');
                    setShowCalendar(true);
                  }}>
                  <Icon as={<FontAwesome name="clock-o" />} />
                </Pressable>
              }
            />
          )}
          name="pickupTime"
        />
        {errors.pickupTime && <Text mx={3}>{errors.pickupTime.message}</Text>}
      </Box>


      <Button mx={2} my={2} onPress={()=>navigation.navigate('CreateTrip')}>Create Trip</Button>


      {showCalendar && (
        <DateTimePicker
          value={new Date(Date.now())}
          mode={mode}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={false}
          onChange={()=>setShowCalendar(false)}
        />
      )}
    </Box>
  );
};

export default CreateTrip;
