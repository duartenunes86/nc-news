import  axios  from "axios";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState("Loading...");
  const [topics, setTopics] = useState([])
  const [sortOption, setSortOption] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    
    axios.get(`https://great-news.onrender.com/api/topics`)
    .then(
      (response) =>{console.log(response)
        return response.data}).then((datajson)=>{
        console.log("Fetched topics:", datajson.topics);
        setTopics(datajson.topics)
      }
      )
      
  
}, []);

  useEffect(() => {
    setSearchParams({ sortOption, sortOrder });
    axios.get(`https://great-news.onrender.com/api/articles`, {
      params: { sort: sortOption, order: sortOrder }})
      .then((response) => {
        return response.data
      })
      .then((datajson) => {
        console.log(datajson);
        let sortedArticles = datajson.articles;

        
        sortedArticles = sortedArticles.sort((a, b) => {
          const aValue = a[sortOption];
          const bValue = b[sortOption];
if(sortOption==="votes"){
  if (sortOrder === 'asc') {
    return a[sortOption] - b[sortOption];
  } else {
    return b[sortOption] - a[sortOption];
  }

}else{if (sortOrder === 'asc') {
  return aValue.localeCompare(bValue);
} else {
  return bValue.localeCompare(aValue);
}}
          
          
        });
        setArticles(sortedArticles);
        setIsLoading("");
      }).catch((err)=>{
        next(err)
      })
  }, [sortOption, sortOrder, setSearchParams]);
  useEffect(() => {
    
    const queryParams = new URLSearchParams(window.location.search);
    const sort = queryParams.get('sort');
    const order = queryParams.get('order');
    
    
    if (sort) setSortOption(sort);
    if (order) setSortOrder(order);
  }, []);
  return (
    <>
     {/* <div>{topics.map((element)=>{
      console.log("Mapping element:", element);
      return (<>{element.slug}  </>)


        
    })}</div> */}
        <div>
        <label>Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="created_at">Creation date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <label>Order:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div>{isLoading}</div>
      <ul>
        {articles.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
              <li key={"p"+article.article_id}>
                {article.title} by {article.author}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
