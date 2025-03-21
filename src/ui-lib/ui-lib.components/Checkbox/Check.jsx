import React from 'react';
import {Stack, Box, Image} from '@chakra-ui/react';
import {CheckIcon} from '@chakra-ui/icons';

export const Checkbox = ({isChecked, onClick, children}) => {
  return (
    <Stack gap={'5px'} direction="row">
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        h={'23px !important'}
        w={'43px !important'}
        bgPosition={'center'}
        bgSize={'cover'}
        onClick={onClick}
        border={'0.5px solid'}
        borderColor={'primary'}
        borderRadius={'5px'}
        bg={isChecked ? 'primary' : null}
      >
        <CheckIcon color={isChecked ? 'text' : 'primary'} />
      </Box>
      {children}
    </Stack>
  );
};

export const Checkbox2 = ({isChecked, onClick, children, space_between = `8px`, ...rest}) => {
  return (
    <Stack gap={space_between || '8px'} direction="row">
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        h={'24px !important'}
        w={'24px !important'}
        minW={'24px !important'}
        bgPosition={'center'}
        bgSize={'cover'}
        onClick={onClick}
        border={'1px solid'}
        borderColor={isChecked ? 'primary' : 'matador_text.100'}
        borderRadius={'0px'}
        // bg={isChecked ? 'primary' : null}
        bg={isChecked ? 'primary' : `transparent`}
        cursor={`pointer`}
        {...rest}
      >
        {/* <CheckIcon color={isChecked ? 'text' : 'primary'} /> */}
        <CheckIcon color={isChecked ? '#ffffff' : 'transparent'} />
      </Box>
      {children}
    </Stack>
  );
};
export const Checkbox3 = ({isChecked, onClick, children, space_between = `8px`, ...rest}) => {
  return (
    <Stack gap={space_between || '8px'} direction="row">
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        h={'24px !important'}
        w={'24px !important'}
        minW={'24px !important'}
        bgPosition={'center'}
        bgSize={'cover'}
        onClick={onClick}
        border={'2px solid'}
        borderColor={isChecked ? 'primary' : 'matador_border_color.100'}
        borderRadius={'0px'}
        // bg={isChecked ? 'primary' : null}
        bg={`transparent`}
        cursor={`pointer`}
        color={`primary`}
        {...rest}
      >
        {/* <CheckIcon color={isChecked ? 'text' : 'primary'} /> */}
        <CheckIcon color={isChecked ? 'inherit' : 'transparent'} />
      </Box>
      {children}
    </Stack>
  );
};
