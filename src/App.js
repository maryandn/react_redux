import React from "react";
import PostForm from "./components/PostForm";
import FetchedPost from "./components/FetchedPost";
import Posts from "./components/Posts";

function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Синхронные Посты</h2>
                    <Posts />
                </div>
                <div className="col">
                    <h2>Асинхронные посты</h2>
                    <FetchedPost />
                </div>
            </div>
        </div>
    );
}

export default App;
