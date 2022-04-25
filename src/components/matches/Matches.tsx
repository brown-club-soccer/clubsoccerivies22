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
        scoreA: 3,
        scoreB: 0,
        group: Group.A
    },
    {
        teamA: Team.Brown,
        teamB: Team.Dartmouth,
        kickOff: new Date('2022-04-24T08:00:00'),
        location: Location.MK,
        scoreA: 0,
        scoreB: 0,
        group: Group.A
    },
    {
        teamA: Team.Penn,
        teamB: Team.Cornell,
        kickOff: new Date('2022-04-24T11:00:00'),
        location: Location.MK,
        scoreA: 1,
        scoreB: 0,
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
        scoreA: 1,
        scoreB: 3,
        group: Group.B
    },
    {
        teamA: Team.Princeton,
        teamB: Team.Harvard,
        kickOff: new Date('2022-04-23T14:00:00'),
        location: Location.BFFw,
        scoreA: 0,
        scoreB: 4,
        group: Group.B
    },
    {
        teamA: Team.Princeton,
        teamB: Team.Yale,
        kickOff: new Date('2022-04-23T17:00:00'),
        location: Location.MK,
        scoreA: 0,
        scoreB: 0,
        group: Group.B
    },
    {
        teamA: Team.Columbia,
        teamB: Team.Harvard,
        kickOff: new Date('2022-04-23T17:00:00'),
        location: Location.MK,
        scoreA: 1,
        scoreB: 2,
        group: Group.B
    },
    {
        teamA: Team.Princeton,
        teamB: Team.Columbia,
        kickOff: new Date('2022-04-24T09:30:00'),
        location: Location.MK,
        scoreA: 6,
        scoreB: 0,
        group: Group.B
    },
    {
        teamA: Team.Harvard,
        teamB: Team.Brown,
        kickOff: new Date('2022-04-24T13:00:00'),
        location: Location.MK,
        title: 'Semi Final 1',
        scoreA: 2,
        scoreB: 2,
        pens: 'Brown win 4-2 in penalties',
        group: Group.B
    },
    {
        teamA: Team.Dartmouth,
        teamB: Team.Princeton,
        kickOff: new Date('2022-04-24T14:30:00'),
        location: Location.MK,
        title: 'Semi Final 2',
        isLive: true,
        scoreA: 0,
        scoreB: 0,
        group: Group.B
    },
    {
        teamA: Team.Brown,
        teamB: 'Winner SF2 ',
        kickOff: new Date('2022-04-24T17:00:00'),
        location: Location.MK,
        title: 'Final',
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