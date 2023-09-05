import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Index = ()=>{
    const [articles, setArticles] = useState([])
    
useEffect(()=>{
    
        fetch(
            `https://great-news.onrender.com/api/articles`
        )
        .then((data)=>{return data.json()})
        .then(datajson=>{
            console.log(datajson)
            setArticles(datajson.articles)
  })})

return (
    <>
    <ul>
    {articles.map(element=>{
        return (<Link to={`/${element.article_id}`}><li key={element.article_id}>{element.title} by {element.author}</li></Link>)
    })}</ul>
    </>
)
}

export default Index;