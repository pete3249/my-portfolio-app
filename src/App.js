import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import React from 'react';

const App = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <VStack p={5}>
            <Flex w="100%">
                <Heading 
                    ml="8" size="md" fontWeight="semibold" color="cyan.400">
                        KP Page
                </Heading>    
                <Spacer></Spacer>
                <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode}></IconButton>
                <IconButton icon={<FaGithub />} isRound={true} onClick={toggleColorMode}></IconButton>
                <IconButton icon={<FaLinkedin/>} isRound={true} onClick={toggleColorMode}></IconButton>
            </Flex>
        </VStack>
    )
};

export default App;