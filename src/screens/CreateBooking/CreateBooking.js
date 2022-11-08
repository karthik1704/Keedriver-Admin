import React from 'react';
import {Box, Divider, Input, Heading, Pressable, Icon, Text} from 'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const customerShema = yup.object({
  firstName: yup.string().required('First name required'),
  lastName: yup.string().required('Last name required'),
  
});

const CreateBooking = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
    setFocus
  } = useForm({
    reValidateMode: 'onChange',

    defaultValues: {
      firstName: '',
    },
    resolver: yupResolver(customerShema),
  });

  const onSubmit = (data)=> console.log(data);

  return (
    <Box safeAreaTop={10} mt={3}>
      <Box>
        <Heading ml={1} size="sm">
          Customer Information
        </Heading>
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
            render={({field: {onChange, onBlur, value, ref}}) => (
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
                onSubmitEditing={handleSubmit(onSubmit)}
                max={10}
                inputRef={ref}
              />
            )}
            name="lastName"
          />
          {errors.lastName && <Text mx={3}>{errors.lastName.message}</Text>}
        </Box>
      </Box>
    </Box>
  );
};

export default CreateBooking;
