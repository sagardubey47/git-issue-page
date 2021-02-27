import React,{useState} from 'react'
import issues from "../../src/img/issues.png"
import IssueCount from "./IssueCount";

export default function IssuePage({data, url}) {
     console.log(data.has_issues);
     let array = [];
     for(let i=1; i<=data.open_issues_count; i++) {
            array.push(i);
        }

    function fillChild() {
        if(data.open_issues_count) {
           return <>

               <div className="block" id="upper">
                    <div>
                        <input type="checkbox" />
                         <img src={issues} alt="check" /> 
                         <p>{data.open_issues_count} open </p> 
                    </div>
                    <div className="selects">
                        <select><option>Athour</option></select>
                        <select><option>Label</option></select>
                        <select><option>Projects</option></select>
                        <select><option>Milestones</option></select>
                        <select><option>Assignee</option></select>
                        <select><option>Sort</option></select>
                    </div>
               </div>
              
                    {
                       array.map((count, index) => {
                          return <IssueCount key={index} count={count} url={url} />
                       }) 
                    }
               
           </>
        } else {
             return <>
                 <img src={issues} alt="issue-icon" />
                 <h2>Welcome to issues!</h2>
                 <p style={{padding:"20px 70px 50px"}}>Issues are used to track todos,
                  bugs, feature requests, and more.
                   As issues are created, they’ll appear 
                   here in a searchable and filterable list.
                    To get started, you should <span style={{color:"dodgerblue"}} >create an issue.</span></p>
             </>
        }
    }
    return (
        <div>
            <div className=" issuePage issuePage-default">
                <h5>Label issues and pull requests for new contributors</h5>
                <p>Now, GitHub will help potential first-time contributors discover issues labeled with good first issue <span>good first issue</span></p>
            </div>
            <div className="issuePage-filter-contain">
                <div className="issuePage-filter"> <select><option>Filter</option></select><input placeholder="is:issue is:open"/></div>
                <div >
                    <div className="tokens" id="label">Labels</div>
                    <div className="tokens" id="milestone">Milestones</div>
                </div>
                <div className="tokens" id="newIssue">New issue</div>
            </div>
            <div className="issuePage issuePage-main">
            {fillChild()}
            </div>
        </div>
    )
}
