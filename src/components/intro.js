import { Box, Text, Center, Textarea, Input, Button, VStack, HStack, Badge } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import pic1intro from "./pic1intro.png";
import pic2intro from "./pic2intro.jpg";


function IntroPage() {
    return (
        
    <Center>
        <VStack>
        <HStack>
            <Box ml="-445" mt="-170">
            <img className="pic1intro" src={pic1intro} />
            </Box>
            <Box boxSize={"80px"}></Box>
            <VStack>
            <Text mt="-30" mr="-310" fontSize={"70px"}>recipies that won't</Text>
            <Text mr="-270" ml="50" fontSize={"70px"}>make your stomach</Text>
            <Text mr="-280" fontSize={"70px"}>hurt</Text>
            </VStack>
        </HStack>
        <HStack>
            <VStack>
                <Box ml="-530" mt="220" boxSize={"500"}>
                    <Text fontSize={"40px"}>created by people just like you, without gluten or dairy</Text>
                </Box>
            </VStack>
            <Box  mr="-605" mt="-115">
                <img className="pic2intro" src={pic2intro}  />
            </Box>
        </HStack>
        </VStack>
    </Center>
    );
};

export default IntroPage;