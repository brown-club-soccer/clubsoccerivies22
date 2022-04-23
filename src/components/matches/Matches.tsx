import React from 'react'
import './Matches.css'
import { IGameProps, Team, Group, Location, Game } from '../game/Game'


export const fixtures: IGameProps[] = [
    {
        teamA: Team.Cornell,
        teamB: Team.Brown,
        kickOff: new Date('2022-04-23T11:00:00'),
        location: Location.MK,
        scoreA: 2,
        scoreB: 3,
        group: Group.A
    },
    {
        teamA: Team.Penn,
        teamB: Team.Brown,
        kickOff: new Date('2022-04-23T14:00:00'),
        location: Location.MK,
        scoreA: 0,
        scoreB: 2,
        group: Group.A
    },
    {
        teamA: Team.Dartmouth,
        teamB: Team.Cornell,
        kickOff: new Date('2022-04-23T15:30:00'),
        location: Location.MK,
        scoreA: 3,
        scoreB: 1,
        group: Group.A
    },
    {
        teamA: Team.Dartmouth,
        teamB: Team.Penn,
        kickOff: new Date('2022-04-23T18:30:00'),
        location: Location.MK,
        scoreA: undefined,
        scoreB: undefined,
        group: Group.A
    },
    {
        teamA: Team.Brown,
        teamB: Team.Dartmouth,
        kickOff: new Date('2022-04-24T08:00:00'),
        location: Location.MK,
        scoreA: undefined,
        scoreB: undefined,
        group: Group.A
    },
    {
        teamA: Team.Penn,
        teamB: Team.Cornell,
        kickOff: new Date('2022-04-24T11:00:00'),
        location: Location.MK,
        scoreA: undefined,
        scoreB: undefined,
        group: Group.A
    },
    {
        teamA: Team.Harvard,
        teamB: Team.Yale,
        kickOff: new Date('2022-04-23T09:30:00'),
        location: Location.MK,
        scoreA: 2,
        scoreB: 1,
        group: Group.B
    },
    {
        teamA: Team.Columbia,
        teamB: Team.Yale,
        kickOff: new Date('2022-04-23T12:30:00'),
        location: Location.MK,
        scoreA: undefined,
        scoreB: undefined,
        group: Group.B
    },
    {
        teamA: Team.Princeton,
        teamB: Team.Harvard,
        kickOff: new Date('2022-04-23T14:00:00'),
        location: Location.BFFw,
        scoreA: undefined,
        scoreB: undefined,
        group: Group.B
    },
    {
        teamA: Team.Princeton,
        teamB: Team.Yale,
        kickOff: new Date('2022-04-23T17:00:00'),
        location: Location.MK,
        scoreA: undefined,
        scoreB: undefined,
        group: Group.B
    },
    {
        teamA: Team.Columbia,
        teamB: Team.Harvard,
        kickOff: new Date('2022-04-23T17:00:00'),
        location: Location.MK,
        scoreA: undefined,
        scoreB: undefined,
        group: Group.B
    },
    {
        teamA: Team.Princeton,
        teamB: Team.Columbia,
        kickOff: new Date('2022-04-24T09:30:00'),
        location: Location.MK,
        scoreA: undefined,
        scoreB: undefined,
        group: Group.B
    }
]

export const Matches = () => {

    const games: JSX.Element[] = []

    const sorted = fixtures.sort((a, b) => {
        return a.kickOff.getTime() - b.kickOff.getTime()
    })
    
    sorted.forEach((game) => {
        games.push(<Game {...game}/>)
    })

    return <div className='matches-container'>
        <div className='fixtures'>
            {games}
        </div>
    </div>
}