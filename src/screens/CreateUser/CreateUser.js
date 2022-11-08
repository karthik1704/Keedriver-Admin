import React from 'react';
import {View} from 'react-native';
import {Box, Input, Button, Icon, Text} from 'native-base';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const searchShema = yup.object({
    firstName: yup.string().required('Phone number required'),
    lastName: yup.string(),
    phone: yup.string().required('Phone number required'),
    email: yup.string().email('Invalid E-mail'),
    address1: yup.string().required("Address1 required"),
    address2: yup.string(),
  });
const CreateUser = ({route:{params}, navigation}) => {


const {control, handleSubmit,formState:{errors} } = useForm({
    defaultValues:{

    },
    resolver: yupResolver(searchShema)
})


  return (
    <Box flex={1} flexDirection="column" safeArea safeAreaTop={8} mt={2}>
      <Text>Create Customer</Text>

      <Box mt={2} mb={1}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value,ref}}) => (
              <Input
                bg="#fff"
                size="lg"
                mx={3}
                width={'95%'}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Enter First Name"
                value={value}
                returnKeyType="next"
                max={10}
                inputRef={ref}
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text mx={3}>{errors.firstName.message}</Text>}
        </Box>
        <Box mt={2} mb={1}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value,ref}}) => (
              <Input
                bg="#fff"
                size="lg"
                mx={3}
                width={'95%'}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Enter Last Name"
                value={value}
                returnKeyType="next"
                max={10}
                inputRef={ref}
              />
            )}
            name="lastName"
          />
          {errors.lastName && <Text mx={3}>{errors.lastName.message}</Text>}
        </Box>
        <Box mt={2} mb={1}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value,ref}}) => (
              <Input
                bg="#fff"
                size="lg"
                mx={3}
                width={'95%'}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Enter Phone Number"
                value={value}
                returnKeyType="next"
                max={10}
                inputRef={ref}
              />
            )}
            name="phone"
          />
          {errors.phone && <Text mx={3}>{errors.phone.message}</Text>}
        </Box>
        <Box mt={2} mb={1}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value,ref}}) => (
              <Input
                bg="#fff"
                size="lg"
                mx={3}
                width={'95%'}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Enter email"
                value={value}
                returnKeyType="next"
                max={10}
                inputRef={ref}
              />
            )}
            name="email"
          />
          {errors.email && <Text mx={3}>{errors.email.message}</Text>}
        </Box>
        <Box mt={2} mb={1}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value,ref}}) => (
              <Input
                bg="#fff"
                size="lg"
                mx={3}
                width={'95%'}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Door no, Street name"
                value={value}
                returnKeyType="next"
                max={10}
                inputRef={ref}
              />
            )}
            name="address1"
          />
          {errors.address1 && <Text mx={3}>{errors.address1.message}</Text>}
        </Box>
        <Box mt={2} mb={1}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value,ref}}) => (
              <Input
                bg="#fff"
                size="lg"
                mx={3}
                width={'95%'}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Enter address2"
                value={value}
                returnKeyType="next"
                max={10}
                inputRef={ref}
              />
            )}
            name="address2"
          />
          {errors.address2 && <Text mx={3}>{errors.address2.message}</Text>}
        </Box>
        <Button mx={2} my={2} onPress={()=>navigation.navigate('CreateTrip')}>Create</Button>
    </Box>
  );
};

export default CreateUser;
