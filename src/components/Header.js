import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Circle, Stack, Flex} from '@chakra-ui/layout';
import { Box, Text, Button, Image } from '@chakra-ui/react';

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
            <Flex 
                direction={isNotSmallerScreen? "row" : "column"}
                spacing="200px"
                p={isNotSmallerScreen? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen? "0" : "16"}>
                    <Text fontSize="5xl">Hi, I am </Text>
                    <Text 
                        fontSize="7xl" 
                        fontWeight="bold" 
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                        bgClip="text"
                    >
                        Kate Peterson 
                    </Text>
                    <Text color={isDark? "gray.200" : "gray.500"}>Software Engineer, Technical Coach, Teacher</Text>
                    <Button mt={8} colorScheme="blue" size="md" onClick={() => console.log('clicked button')}>Hire Me</Button>
                </Box>
                <Image
                    alignSelf="center"
                    mt={isNotSmallerScreen? "0": "12"}
                    boxShadow="lg"
                    borderRadius="full"
                    backgroundColor="transparent"
                    boxSize="300px"
                ></Image>
            </Flex>
        </Stack>
    )
}

export default Header;