import React,{useEffect, useState} from 'react'
import issues from "../../src/img/issues.png"

function IssueCount({url, count}) {
   
    const[issue, setIssue] = useState(undefined);

    useEffect(() => {
       fetch(url+`/issues/${count}`)
         .then((Response) => {
          if(Response.status >= 200 && Response.status <= 299) {
              return Response.json();
            } else {
              throw new Error(Response.statusText);
            }
           })
          .then((result) => {
            console.log(result);
            setIssue(result);
           })
          .catch((e) => {
            console.log(e);
            })

       
    }, [])
    
    function  getDate() {
        
        const date=issue.created_at.slice(0,10)
        const createDate=new Date(date);
        const d = new Date();
        // const year=d.getFullYear()
        // const month=d.getMonth()
        // const day=d.getDate()
        // const ans=`${year}-${month}-${day}`;
        // const curDate=new Date(ans);
        const Difference_In_Time =  createDate.getTime() - d.getTime();
        const Difference_In_Days = Math.abs(Math.ceil(Difference_In_Time / (1000 * 3600 * 24)));
         
        if(Difference_In_Days >= 1 ) {
            return `${Difference_In_Days} days ago`;
        }
        return `${Difference_In_Time} hour ago`;
    }
   
   
    return (
         <div className="block" id="lower">
            <div style={{display:"flex"}}>
            <div>
                <input type="checkbox" />
                <img src={issues} alt="check" /> 
            </div>
            
                <div style={{ marginLeft:"20px" ,textAlign:"left"}}>
                    {issue && (<><p >{issue.title}</p> 
                    <p style={{ display:"block"}}># {issue.number} opened {getDate()} by {issue.user.login}</p></>)}
                </div>
            </div>
         </div>    
    )
}

export default IssueCount
