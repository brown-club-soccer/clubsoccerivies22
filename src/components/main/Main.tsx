import React, { useState } from 'react'
import { Group } from '../game/Game';
import { GroupTable } from '../group/GroupTable';
import { Matches } from '../matches/Matches';
import './Main.css'

export enum ContentType {
    Matches = 'games',
    Standings = 'standings',
    Stats = 'stats'
}

export const Main = () => {

    const [activeContent, setActiveContent] = useState<ContentType>(ContentType.Matches);

    const getContent = (active: ContentType) => {
        switch(active){
            case ContentType.Matches:
                return <Matches/>
            case ContentType.Standings:
                return <div className='standings-container'>
                    <div className='standings-content'>
                        <GroupTable group={Group.A}/>
                        <GroupTable group={Group.B}/>
                    </div>
                </div>
            case ContentType.Stats:
                return <div></div>
        }
    }

    return (
        <div className="container">
            <div className="header">
                <div className="title">
                    <div className="h1">Men's Club Soccer</div>
                    <div className="h2">Ivy League Spring Tournament 2022</div> 
                </div>
                <div className="tabs">
                    <div className={`tab ${activeContent === ContentType.Matches}`} onClick={() => setActiveContent(ContentType.Matches)}>
                        Matches
                    </div>
                    <div className={`tab ${activeContent === ContentType.Standings}`} onClick={() => setActiveContent(ContentType.Standings)}>
                        Standings
                    </div>
                    {/* <div className={`tab ${activeContent === ContentType.Stats}`} onClick={() => setActiveContent(ContentType.Stats)}>
                        Stats
                    </div> */}
                </div>
            </div>
            <div className="content">
                {getContent(activeContent)}
            </div>
        </div>
    )
}