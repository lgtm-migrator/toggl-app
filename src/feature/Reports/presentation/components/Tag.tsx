import React from 'react'

interface Props {
  name: string
  durationByDay: Array<number>
}

const Tag: React.FC<Props> = (props) => {
  let sum = 0

  const days = props.durationByDay.map((duration) => {
    let hours = duration / 60.0 / 60.0
    sum += hours
    return <td>{roundHours(hours)}</td>
  })

  return (
    <tr>
      <td>{props.name}</td>
      {days}
      <td>{roundHours(sum)}</td>
    </tr>
  )
}

function roundHours(value: number): string {
  return value.toFixed(1)
}

export default Tag
