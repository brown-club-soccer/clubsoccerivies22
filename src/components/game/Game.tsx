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
    teamA: Team,
    teamB: Team,
    kickOff: Date,
    location: Location,
    scoreA: number | undefined,
    scoreB: number | undefined,
    group: Group
    title?: string
}


export const Game = (props: IGameProps) => {
    const {teamA, teamB, kickOff, location, scoreA, scoreB, group, title} = props
    const day = kickOff.getDate()
    const year = kickOff.getFullYear()
    const month = 'February'
    return <div className='game-container'>
        <div className='info'>
            <div className='location'>
                {location}
            </div>
            •
            <div className='group'>
                {group}
            </div>
        </div>
        <div className='score'>
            <div className='team'>
                <img className='image' alt={teamA} src={teamA + '.png'}/>
                {teamA}
            </div>
            <div className='vs'>
                {scoreA && scoreB ? 
                <div className='score-container'>
                    <div className='score-num'>{scoreA}</div> 
                    -
                    <div className='score-num'>{scoreB}</div>
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
                <img className='image' alt={teamB} src={teamB + '.png'}/>
                {teamB}
            </div>
        </div>
    </div>
}