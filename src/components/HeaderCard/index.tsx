import React, { FC } from 'react';
import { Box } from '../Spacing';
import { Text } from 'react-native-paper';
import Heart from '../Heart';

interface HeaderCardProps {
  title?: string;
}

const HeaderCard: FC<HeaderCardProps> = ({ title }) => {
  return (
    <>
      <Box
        height={50}
        backgroundColor="black"
        position="absolute"
        top={-265}
        borderTopLeftRadius={15}
        borderTopRightRadius={15}
        opacity={0.8}
      >
        <Box
          mt={10}
          ml={10}
        >
          <Box
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
            paddingRight={20}
            alignItems="center"
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 20,
              }}
            >
              {title}
            </Text>
            <Heart />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HeaderCard;