import React from 'react'
import gitIcon from "../../src/img/icons8-github.svg"
import bell from "../../src/img/bell.png"

function Header() {
    return (
        <div className="header">
         
            <div className="left-side">
              <img src={gitIcon} alt="github-icon"/>
              <input placeholder="search or jump to .." /> 
              <p >pull request</p>
              <p >issues</p>
              <p >pull request</p>
              <p >market place</p>
            </div>
             <div className="right-side">
                <img src={bell} alt="bell" />
                <p id="plus"> + </p>
                <img src={gitIcon} alt="avtar"/>
            </div>
        </div>
    )
}

export default Header
