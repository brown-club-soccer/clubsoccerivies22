import React from 'react'
import './Game.css'

export enum Team {
    Brown = 'Brown',
    Columbia = 'Columbia',
    Yale = 'Yale',
    Harvard = 'Harvard',
    Cornell = 'Cornell',
    Penn = 'Penn',
    Princeton = 'Princeton',
    Dartmouth = 'Dartmouth'
}

export enum Location {
    MK = 'Meister-Kavan',
    BFFw = 'Berylson Family Fields West'
}

export enum Group {
    A = 'Group A',
    B = 'Group B'
}

export interface IGameProps {
    teamA: Team | string,
    teamB: Team | string,
    kickOff: Date,
    location: Location,
    scoreA: number | undefined,
    scoreB: number | undefined,
    group: Group
    pens?: string
    title?: string
    isLive?: boolean
}


export const Game = (props: IGameProps) => {
    const {teamA, teamB, kickOff, location, scoreA, scoreB, group, title, isLive, pens} = props
    const day = kickOff.getDate()
    const year = kickOff.getFullYear()
    const month = 'February'
    // console.log(teamA, teamB)
    // console.log(scoreA, scoreB)
    const gameFinished:boolean = (scoreA !== undefined && scoreB !== undefined)
    return <div className='game-container'>
        <div className='info'>
            <div className='location'>
                {location}
            </div>
            •
            {!title && <div className='group'>
                {group}
            </div>}
            {title && <div className='group'>
                {title}
            </div>}
            {isLive && 
                <div className='live'>
                    LIVE
                </div>
            }
        </div>
        <div className='score'>
            <div className='team'>
                {teamA[teamA.length - 1] === ' ' ? <img className='image' alt={teamA} src={'placeholder.png'}/> 
                : <img className='image' alt={teamA} src={teamA.toLocaleLowerCase() + '.png'}/>}
                {teamA}
            </div>
            <div className='vs'>
                {gameFinished ? 
                <div className='score-box'>
                    <div className='score-container'>
                        <div className='score-num'>{scoreA}</div> 
                        -
                        <div className='score-num'>{scoreB}</div>
                    </div> 
                    {pens && <div className='pens'>
                        {pens}
                    </div>}
                </div>
                : 
                <div className='time'>
                    <div className='date'>
                        {day + ' ' + month + ' ' + year}
                    </div>
                    {'KO ' + kickOff.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                </div>}
            </div>
            <div className='team'>
                {teamB[teamB.length - 1] === ' ' ? <img className='image' alt={teamB} src={'placeholder.png'}/> 
                : <img className='image' alt={teamB} src={teamB.toLocaleLowerCase() + '.png'}/>}
                {teamB}
            </div>
        </div>
    </div>
}