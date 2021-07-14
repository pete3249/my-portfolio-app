import { HStack } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react'
import React from 'react';
import {FaFacebookF, FaGoogle, FaSpotify} from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaFacebookF} boxSize="50"></Icon>
            <Icon as={FaGoogle} boxSize="50"></Icon>
            <Icon as={FaSpotify} boxSize="50"></Icon>
        </HStack>
    )
}

export default Social;