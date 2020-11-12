import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";


function Feed() {
    return (
    <div className="Feed">
        <StoryReel />
        <MessageSender />
        <Post
            profilePic='https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=FQTs91cAAAAJ&citpid=1'
            message="Green Signal Go.. goo Head"
            timestamp="This is a timestamp"
            username="Soumen Santra"
            image='https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg'
        />
        <Post 
            profilePic='https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=FQTs91cAAAAJ&citpid=1'
            message="Green Signal Go.. goo Head"
            timestamp="This is a timestamp"
            username="Soumen Santra"
            image='https://scontent.fccu4-2.fna.fbcdn.net/v/t1.0-0/s526x395/118256151_328870118471136_3621898487515035118_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=gdo9sfR2tgcAX_eC7F2&_nc_ht=scontent.fccu4-2.fna&tp=7&oh=dd682c4ef999c8f5035e0f45f2fd15aa&oe=5FD23F6F'
               
        />
        <Post
            profilePic='https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=FQTs91cAAAAJ&citpid=1'
            message="Green Signal Go.. goo Head"
            timestamp="This is a timestamp"
            username="Soumen Santra"
            image='https://scontent.fccu4-2.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p526x296/120604445_23845993866930576_4868143588426649724_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7e83b1&_nc_ohc=kVYO3kbjBcYAX-X6RUF&_nc_ht=scontent.fccu4-2.fna&oh=6aeb3402b1ac0b7092f7c0f86160be38&oe=5FD30BFE'
        />
        
    </div>
    );
}

export default Feed;