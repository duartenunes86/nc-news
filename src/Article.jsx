import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"




const Article = () =>{
    const [article,setArticle]=useState({})
    const { article_id } = useParams();
    const [comments, setComments] = useState([])

useEffect(()=>{
    // const { article_id } = useParams();

    fetch(
        `https://great-news.onrender.com/api/articles/${article_id}`
    )
    .then((data)=>{return data.json()})
    .then(datajson=>{
        console.log(datajson)
        setArticle(datajson.article)
})
},[article_id])
useEffect(()=>{
    fetch(`https://great-news.onrender.com/api/articles/${article_id}/comments`).then((data)=>{return data.json()})
    .then(datajson=>{
        console.log(datajson)
        setComments(datajson.comments)
})},[article_id])
return (<>
<h2>{article.title}</h2>
<h3>{article.body}</h3>
<h5>by {article.author}</h5>
<h5>Votes:{article.votes}</h5>
<button onClick={()=>{
  axios.patch(`https://great-news.onrender.com/api/articles/${article.article_id}`, {
      "inc_votes": 1
    })
    setArticle((article)=>{
      return {...article, votes:article.votes+1}
    });}}>Like</button>
<h4>Comments</h4>

{comments.map(element=>{
    return (<><p>{element.body} by {element.author} votes:{element.votes}</p><button onClick={()=>{
        
        axios.patch(`https://great-news.onrender.com/api/comments/${element.comment_id}`, {
      "inc_votes": 1
    });
        
        setComments(comments.map((comment) => {
        
        
        if (comment.comment_id === element.comment_id) {
          comment.votes += 1;
        }
        return comment;
      }))
    }}>Like</button></>)
})}

</>)
}

export default Article