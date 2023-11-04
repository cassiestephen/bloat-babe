import React from "react";
import { db, auth } from "../firebase";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import veganPic from "./vegan.png";
import df from "./dairy-free.png";
import gf from "./gluten-free.png";
import nf from "./nut-free.png";
import sf from "./sesame-free.png";


function Individ_Post({ post_user, post_ingredients, post_instructions, post_title, post_notes, vegan, sesame, dairy_free, gluten_free, nuts }) {



    return (
        <div className="indiv-post">
            <div className="post-title">
                 <h1>{post_title}</h1>
            </div>
            <div className="image-row">
            {vegan && <img className="vegan-pic" src={veganPic} />} {dairy_free && <img className="df-pic" src={df} />}
            {!nuts && <img className="nf-pic" src={nf} />}
            {gluten_free && <img className="gf-pic" src={gf} />}
            {!sesame && <img className="sesame-pic" src={sf} />}
            
            </div>

            <div className="ingred-title">Ingredients:</div>
            <div className="post-ingred">{post_ingredients}</div>
            <div className="instruct-title">Instructions:</div>
            <div className="post-instruct"> {post_instructions}</div>
            <div className="instruct-title">Notes:</div>
            <div className="post-instruct"> {post_notes}</div>
            <div className="username">
            <h3>@{post_user}</h3>
          </div>
          </div>
          
    );
};

export default Individ_Post;