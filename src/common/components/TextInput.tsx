import React from 'react'

interface Props {
  id?: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<Props> = (props) => {
  return <input id={props.id} name={props.name} value={props.value} onChange={props.onChange} />
}

export default TextInput
