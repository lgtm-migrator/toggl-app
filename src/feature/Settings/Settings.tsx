import React, { useState } from 'react'
import TextInput from '../../core/components/TextInput'
import LocalStorageKeys from '../../util/LocalStorageKeys'

const Settings: React.FC<never> = () => {
  const [apiKey, setApiKey] = useState('')
  const [workspaceId, setWorkspaceId] = useState('')

  function saveApiKey(event: React.ChangeEvent<HTMLFormElement>) {
    localStorage.setItem(LocalStorageKeys.apiKey, apiKey)
    event.preventDefault()
  }

  function saveWorkspaceId(event: React.ChangeEvent<HTMLFormElement>) {
    localStorage.setItem(LocalStorageKeys.workspaceId, workspaceId)
    event.preventDefault()
  }

  return (
    <>
      <h1>Settings</h1>
      <form onSubmit={saveApiKey}>
        <TextInput
          name="apiKey"
          description="API key"
          value={apiKey}
          onChange={(event) => setApiKey(event.target.value)}
        />
      </form>
      <form onSubmit={saveWorkspaceId}>
        <TextInput
          name="workspaceId"
          description="Workspace ID"
          value={workspaceId}
          onChange={(event) => setWorkspaceId(event.target.value)}
        />
      </form>
    </>
  )
}

export default Settings
