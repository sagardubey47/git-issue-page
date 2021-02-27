import React from 'react'
import code from "../../src/img/code.png"
import issues from "../../src/img/issues.png"
import pullRequest from "../../src/img/pullRequest.png"
import action from "../../src/img/action.png"
import projects from "../../src/img/project.png"
import privacy from "../../src/img/privacy.png"
import settings from "../../src/img/settings.png"
import insights from "../../src/img/insights.png"
import wiki from "../../src/img/wiki.png"

export default function Menu() {
    return (
        <div id="menu" >
           <div> <img src={code} alt="" /> code</div>
           <div className="active" > <img src={issues} alt="" /> issues</div>
           <div > <img src={pullRequest} alt="" /> pull request</div>
           <div > <img src={action} alt="" /> actions</div>
           <div > <img src={projects} alt="" /> projects</div>
           <div > <img src={wiki} alt="" /> wiki</div>
           <div > <img src={privacy} alt="" /> security</div>
           <div > <img src={insights} alt="" />insights</div>
           <div > <img src={settings} alt="" /> settings</div>
        </div>
    )
}
