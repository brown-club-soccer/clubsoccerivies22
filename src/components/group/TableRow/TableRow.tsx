import React from 'react'
import { Team } from '../../game/Game'
import { fixtures } from '../../matches/Matches'
import './TableRow.css'


export interface IRowProps {
    team: Team
}
export const TableRow = (props: IRowProps) => {
    const {team} = props
    let gp = 0
    let points = 0
    let wins = 0
    let losses = 0
    let draws = 0
    let gs = 0
    let gc = 0
    for (let i = 0; i < fixtures.length; i++) {
        const match = fixtures[i]
        const gameFinished:boolean = (match.scoreA !== undefined && match.scoreB !== undefined)
        if (!gameFinished || match.title) continue
        if (match.scoreA !== undefined && match.scoreB !== undefined){
        if (match.teamA === team){
            console.log(team)
            gp ++;
            gs += match.scoreA
            gc += match.scoreB
            if (match.scoreA > match.scoreB) {
                wins ++
                points += 3
            } else if (match.scoreA === match.scoreB) {
                draws ++
                points += 1
            } else {
                losses ++
            }
        } 
        if (match.teamB === team) {
            gp ++;
            gs += match.scoreB
            gc += match.scoreA
            if (match.scoreB > match.scoreA) {
                wins ++
                points += 3
            } else if (match.scoreA === match.scoreB) {
                draws ++
                points += 1
            } else {
                losses ++
            }
        }
        }
        
    }


    return (
        <div className="tableRow-container">
            <img className='icon' alt='img' src={'./' + team.toLocaleLowerCase() + '.png'}/>
            <div className='do-l'>{team}</div>
            <div>{gp}</div>
            <div>{wins}</div>
            <div>{draws}</div>
            <div>{losses}</div>
            <div className='do'>{gs}</div>
            <div className='do'>{gc}</div>
            <div className='do'>{gs - gc}</div>
            <div>{points}</div>
        </div>
    )
}