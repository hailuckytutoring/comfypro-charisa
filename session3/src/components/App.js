import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList"

function App() {
  // Destructure blogData
  const {id,name, about, image, posts} = blogData;

  return (
    <div className="App">
     <Header name = {name}/>
     <About about = {about} image = {image}/>
     <ArticleList key = {id} posts = {posts}/>
    </div>
  );
}

export default App;
