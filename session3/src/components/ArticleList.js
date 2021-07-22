import Article from "./Article";

function ArticleList ({ posts }) {
    return (
        <main>
            {posts.map((postObj) => {
                console.log(postObj)
                return <Article key = {postObj.id} post={postObj}/>
                }
            )}
        </main>)
}

export default ArticleList;