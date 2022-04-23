import React from 'react'
import { Group, Team } from '../game/Game'
import './GroupTable.css'
import { TableRow } from './TableRow/TableRow'

export interface IGroupTableProps {
    group: Group
}


export const GroupTable = (props: IGroupTableProps) => {
    const rows: JSX.Element[] = []
    if (props.group === Group.A) {
        rows.push(<TableRow team={Team.Brown}/>)
        rows.push(<TableRow team={Team.Columbia}/>)
        rows.push(<TableRow team={Team.Cornell}/>)
        rows.push(<TableRow team={Team.Penn}/>)
    } else {
        rows.push(<TableRow team={Team.Yale}/>)
        rows.push(<TableRow team={Team.Princeton}/>)
        rows.push(<TableRow team={Team.Harvard}/>)
        rows.push(<TableRow team={Team.Dartmouth}/>)
    }

    return (<div className='table-container'>
        <div className='group-header'>{props.group}</div>
        <div className='table-headers'>
            <div className='l'>Club</div>
            <div></div>
            <div>MP</div>
            <div>W</div>
            <div>D</div>
            <div>L</div>
            <div className='do'>GF</div>
            <div className='do'>GA</div>
            <div className='do'>GD</div>
            <div>Pts</div>
        </div>
        {rows}
    </div>)
}