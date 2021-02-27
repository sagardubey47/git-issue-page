import React,{useState} from "react";
import IssuePage from "./components/IssuePage"
import Header from "./components/Header"
import Menu from "./components/Menu"

import './App.css';

function App() {
  
  const [user, setUser] = useState({userName:"", repo: ""});
  const [isUser, setIsUser] = useState(false);
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);

  function handleChange(event) {
      let id = event.target.id;
      let value = event.target.value;

      if(id === "user") {
         setUser((prevUser) => {
           return {...prevUser ,userName: value};
         })   
      } else if(id === "repo") {
         setUser((prevUser) => {
           return {...prevUser ,repo: value};;
         })
      }
     // console.log(user);
  }

  function handleSubmit() {
      fetch(`https://api.github.com/repos/${user.userName}/${user.repo}`)
      .then((Response) => {
        if(Response.status >= 200 && Response.status <= 299) {
            return Response.json();
        } else {
          setIsError(true);
          setUser({userName:"", repo: ""});
          throw new Error(Response.statusText);
        }
      })
      .then((result) => {
       // console.log(result);
        setData(result);
        setIsUser(true);
      })
      .catch((e) => {
        console.log(e);
      })
  }

   function renderBody() {
     if(isUser) {
       return <>
                <Menu />
                <IssuePage data={data} url={`https://api.github.com/repos/${user.userName}/${user.repo}`}/>
              </>
     } else if(isError) {
         return <>
                    <div className="error">"something went wrong .. please try again with valid userName and repo"</div>
                    <div className="user-info">
                      <div><label> username:</label> <input id="user" value={user.userName} onChange={handleChange} /></div>
                      <div><label> repo:</label> <input id="repo" value={user.repo} onChange={handleChange} /></div>
                      <button type="submit" onClick={() => {handleSubmit(); setIsError(false);}}>submit</button>
                    </div>
                </>
     } else {
       return <div className="user-info">
          <div><label> username:</label> <input id="user" value={user.userName} onChange={handleChange} /></div>
          <div><label> repo:</label> <input id="repo" value={user.repo} onChange={handleChange} /></div>
          <button type="submit" onClick={handleSubmit}>submit</button>
       </div>
     }
   }

  return (
    <div>
      <Header />
      {renderBody()}

    </div>
  );
}

export default App;
