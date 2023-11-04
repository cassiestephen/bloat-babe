import React, { useEffect, useState } from "react";
// returns docs from a collection
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore"
import { auth, db } from "../firebase";
import Individ_Post from "../components/post.js"
import SearchBar from "../components/search-bar.js"

function Post_List({ isAuth }) {

    const [recipieList, setRecipieList] = useState([]);
    const recipieCollectionRef = collection(db, "posts");
    const [searchKeyword, setSearchKeyword] = useState("");


    // retrive posts
    useEffect(() => {
        const getRecipies = async () => {
            const data = await getDocs(recipieCollectionRef);
            setRecipieList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        getRecipies();
    });


    return  (
        <div className="homePage">
            <div className="search-bar">
                <SearchBar placeHolder={" Search Recipies"} isSearching={(event) => 
                {setSearchKeyword(event.target.value)}}/> 
            </div>
            {recipieList?.filter((post)=> {
        if (searchKeyword == "") {
          return post;
        } else if (post.title.toLowerCase().includes(searchKeyword.toLowerCase()) || 
        post.ingredients.toLowerCase().includes(searchKeyword.toLowerCase()) || 
        post.author_name.toLowerCase().includes(searchKeyword.toLowerCase())) {
            return post;
        }
        }).map((post) => 
                <Individ_Post post_id={post.id} isAuth={isAuth} post_title={post.title} 
                post_ingredients={post.ingredients} post_instructions={post.instructions} 
                post_user={post.author_name} post_notes={post.notes}
                nuts={post.nuts} sesame={post.sesame}
                vegan={post.vegan} dairy_free={post.dairy_free} gluten_free={post.gluten_free}
                ></Individ_Post>
            )}
       </div>
    );
}

export default Post_List;