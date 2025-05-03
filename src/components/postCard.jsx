import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

const PostCard = ({img, iconColor = "text-pink-500", rotate = "rotate-0"}) => { 
    return (
        <div className={`bg-white p-2 shadow-lg transform ${rotate}`}>
            <img src={img} alt="post" className="w-64 h-auto object-cover"/>
            <div className={`flex space-x-4 px-2 py-1 text-xl`}>
                <AiFillHeart className={`${iconColor}`}  />
                <FaRegComment />
            </div>
        </div>
    );
};

export default PostCard;