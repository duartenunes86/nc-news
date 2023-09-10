import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';




const Topic = () =>{
    const { topic } = useParams();
const [articles,setArticles] = useState([])
const [isLoading, setIsLoading] = useState("Loading...");
const [error,setError]=useState("Error 404 - The topic doesn't exist")
useEffect(() => {
   axios.get(`https://great-news.onrender.com/api/articles`)
        .then((response) => {
        console.log(response.data);
        setArticles(response.data.articles);
        setIsLoading("");
      });
  }, []);
  useEffect(()=>{
    {axios.get(`https://great-news.onrender.com/api/topics`).then((result)=>{
      console.log(result, "console")
      return result.data.topics.map((element)=>{
        if(element.slug===topic){
          setError("")

        }
      })
    }).then(()=>{console.log("test")})}
  },[])
return (
    <>
<div>{error}</div>    
<div>{isLoading}</div>
      <ul>
        {articles.map((article) => {
            if(article.topic===topic){
                return (
                    <Link to={`/articles/${article.article_id}`}>
                      <li key={"pt"+article.article_id}>
                        {article.title} by {article.author}
                      </li>
                    </Link>
                  );
            }
         
          })}
      </ul>
    </>
  );
};



export default Topic