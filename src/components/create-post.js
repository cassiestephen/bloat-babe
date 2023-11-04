import React from "react";
import { useState, useEffect } from "react";

// function to add document to table in firestore 
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from "../firebase";
import { Box, Text, Center, Textarea, Input, Button } from "@chakra-ui/react";

function Post({isAuth}) {

    // immediately redirects you to login page if you are not logged in
    useEffect(() => {
        if (!isAuth) {
            window.location.pathname = "/login";
        }
    }, []);




    // user writing input changes these variables
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [notes, setNotes] = useState("");

    const [gluten_free, setGluten] = useState(false);
    const [dairy_free, setDairy] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [sesame, setSesame] = useState(false);
    const [nuts, setNuts] = useState(false);

    // send info to firebase
    const postsCollectionRef = collection(db, "posts"); // reference to collection posts in firebase
    const createPost = async () => {
        // adds post object (with title, text, author, id) to post collections
        await addDoc(postsCollectionRef, 
            {title: title, 
                ingredients: ingredients, 
                instructions: instructions,
                notes: notes,
                author_name: auth.currentUser.displayName,
                author_id: auth.currentUser.uid,

                sesame: sesame,
                nuts: nuts,
                vegan: vegan,
                dairy_free: dairy_free,
                gluten_free: gluten_free,

            });
            // redirect back to home 
            window.location.pathname = "/home";
    };

    const handleDairy = () => {
        setDairy(true);
      };

    const handleGluten = () => {
        setGluten(true);
    };

    const handleSesame = () => {
        setSesame(true);
      };
    
      const handleVegan = () => {
        setVegan(true);
      };

      const handleNuts = () => {
        setNuts(true);
      };

    return (
    <Center>
        <Box mt="7" p="2" minWidth={"600px"} borderRadius="lg" textAlign="left" backgroundColor={"blue.100"}>
            <Text mt="1">Recipe Title:</Text>
            <Input backgroundColor={"white"} mb="2" placeholder="Title..." onChange={(event) => {setTitle(event.target.value)}}/>
            <Text mt="2">Ingredients:</Text>
            <Textarea minHeight={"200px"} backgroundColor={"white"} mb="1" placeholder="1 tbsp of..." onChange={(event) => {setIngredients(event.target.value)}}/>
            <Text mt="2">Instructions:</Text>
            <Textarea minHeight={"200px"} backgroundColor={"white"} mb="1" placeholder="Start by..." onChange={(event) => {setInstructions(event.target.value)}}/>
            <Text mt="2">Notes:</Text>
            <Textarea minHeight={"50px"} backgroundColor={"white"} mb="1" onChange={(event) => {setNotes(event.target.value)}}/>
            
            <Text mt="2">Dairy Free?</Text>
            <Box>
                <Button onClick={handleDairy} backgroundColor={"white"}>yes</Button>
                <Button ml="2.5" backgroundColor={"white"}>no</Button>
            </Box>
            <Text mt="2">Gluten Free?</Text>
            <Box>
                <Button onClick={handleGluten} backgroundColor={"white"}>yes</Button>
                <Button ml="2.5" backgroundColor={"white"}>no</Button>
            </Box>            
            <Text mt="2">Contains Nuts?</Text>
            <Box>
                <Button onClick={handleNuts} backgroundColor={"white"}>yes</Button>
                <Button ml="2.5" backgroundColor={"white"} >no</Button>
            </Box>
            <Text mt="2">Contains Sesame?</Text>
            <Box>
                <Button onClick={handleSesame} backgroundColor={"white"}>yes</Button>
                <Button ml="2.5" backgroundColor={"white"}>no</Button>
            </Box>
            <Text mt="2">Vegan?</Text>
            <Box>
                <Button onClick={handleVegan} backgroundColor={"white"}>yes</Button>
                <Button ml="2.5" backgroundColor={"white"}>no</Button>
            </Box>
            <Center>
                <Button mt="1" backgroundColor={"white"} onClick={createPost}>Submit Recipe</Button>
            </Center>
        </Box>
    </Center>
    );
};

export default Post;


