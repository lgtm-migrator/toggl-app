import React from 'react'
import styled from 'styled-components'
import { H2 } from '../../../../core/components/Headers'
import WeekEntity from '../../domain/entities/WeekEntity'
import Tag from './Tag'

interface Props {
  title: string
  week: Map<string, WeekEntity>
}

const WeekTable = styled.table`
  thead {
    font-weight: bold;
  }

  td:first-child,
  th:first-child {
    text-align: left;
    width: 120px;
  }

  td,
  th {
    text-align: right;
    padding: 5px;
    width: 80px;
  }

  tr:nth-child(even) {
    background-color: #263238;
  }

  tr:nth-child(odd) {
    background-color: #37474f;
  }

  thead tr:nth-child(odd) {
    background-color: #263238;
  }
`

const Week: React.FC<Props> = (props) => {
  const weekdays: Array<string> = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  let id = 0
  const tags = Array.from(props.week.entries()).map(([tag, weekEntity]) => (
    <Tag key={id++} name={tag} durationByDay={weekEntity.durationByDay} />
  ))

  return (
    <div>
      <H2>{props.title}</H2>
      <WeekTable>
        <thead>
          <tr>
            <th>Tag</th>
            {weekdays.map((day) => (
              <th key={day}>{day}</th>
            ))}
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>{tags}</tbody>
      </WeekTable>
    </div>
  )
}

export default Week
