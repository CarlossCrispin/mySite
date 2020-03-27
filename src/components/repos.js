import React, { useEffect, useState } from 'react';
// import repos from "../data/repos";
import Repo from "../components/repo";

//componentDidMount componentDidUpdate 

export default () => {

  const [repos, setRepos] = useState([]);
  const [reposCount, setReposCount] = useState([]);

  useEffect(() => {

    const data = sessionStorage.getItem("repos");
    let  myRepos;

    if(data){

      myRepos = JSON.parse(data);

      setReposCount(myRepos.length);
      /* reducir el tamaño */
      
      // console.log(reposCount);
      myRepos = myRepos.slice(1,10);
      return setRepos(myRepos);
    }

    async function fetchRepos(){
      const response = await fetch("https://api.github.com/users/carlosscrispin/repos");
      myRepos =  await response.json();
      // return myRepos;
      setReposCount(myRepos.length);

      
      sessionStorage.setItem("repos",JSON.stringify(myRepos));
      myRepos = myRepos.slice(1,10);
      setRepos(myRepos);
  }
    fetchRepos();
     
  },[]);

  return (
    <div className="max-w-4xl mx-auto mb-4 mt-12">
      <header className="text-center">
        <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
        <p>Colaboración y contribución de código. </p>

      </header>
      <ul className="repos-list mt-10">
        {
          repos.map((repo) => {
            return <Repo repo={repo} key={repo.id} />
          })
        }
      </ul>
        <div className="mt-8 text-center">
      <a href="https://github.com/CarlossCrispin" className="btn" target="_blank" rel="noopener noreferrer"> Ver más en en GitHub   ({reposCount})
      </a>
        </div>
    </div>
  );
};