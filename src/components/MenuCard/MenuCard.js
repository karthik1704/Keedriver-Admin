import React from 'react';
import {Box, HStack, Badge, Text, Pressable} from 'native-base';

const MenuCard = ({badge, name, icon, onPress}) => {
  return (
    <Box flex={2}>
      <Pressable onPress={onPress}>
        {({isHovered, isFocused, isPressed}) => (
          <Box
            px={4}
            py={2}
            rounded="md"
            shadow={3}
            bg={
              isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : '#fff'
            }
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}>
            <HStack justifyContent="flex-end">
              <Badge colorScheme="info" variant="solid" px={3} rounded="full">
                {badge}
              </Badge>
            </HStack>
            <HStack py={3} space={2} _text={{textAlign: 'center'}}>
              {icon}
              <Text fontSize={'lg'} fontWeight="bold">
                {name}
              </Text>
            </HStack>
          </Box>
        )}
      </Pressable>
    </Box>
  );
};

export default MenuCard;
