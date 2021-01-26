import React, { useState } from 'react'
import TextInput from '../../common/components/TextInput'
import LocalStorageKeys from '../../util/LocalStorageKeys'

interface Props {}

const Settings: React.FC<Props> = (props) => {
  const [apiKey, setApiKey] = useState('')

  function onSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    localStorage.setItem(LocalStorageKeys.apiKey, apiKey)
    event.preventDefault()
  }

  return (
    <>
      <h1>Settings</h1>
      <form onSubmit={onSubmit}>
        <TextInput name="apiKey" value={apiKey} onChange={(event) => setApiKey(event.target.value)} />
      </form>
    </>
  )
}

export default Settings
