import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query';

function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return (
        <Flex 
            direction={isNotSmallerScreen ? "row" : "column"}
            w="100%"
            maxWidth={{base: "100vh", md:"130vh", lg:"130vh", xl:"130vh"}}
        >
          <Box alignSelf="center" px="32" py="16">
              <Heading>7+</Heading>
              <Text fontSize="2xl" color="gray.400"> Years Experience</Text>
          </Box>
          <Box alignSelf="center" px="32" py="16">
              <Text fontWeight="bold" fontSize="2xl">Developer specializing in Ruby and JavScript</Text>

          </Box>

        </Flex>
    )
}

export default Profile;