import TimedEntry from '../model/TimedEntry'

class TogglApi {
  private readonly apiKey: string
  private readonly workspaceId: number
  private readonly url: string = 'https://api.track.toggl.com/reports/api/v2/'
  private readonly headers: Headers = new Headers()

  constructor(apiKey: string, workspaceId: number) {
    this.apiKey = apiKey
    this.workspaceId = workspaceId

    this.headers.append(
      'Authorization',
      'Basic ' + btoa(`${this.apiKey}:api_token`)
    )
  }

  getReportsBetween(start: Date, end: Date): Promise<TimedEntry[]> {
    const parameters = new Map<string, any>([
      ['since', start.toISOString()],
      ['until', end.toISOString()],
    ])

    const promise = this.get('details', parameters)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw Error(
            `Error connecting to Toggl: ${response.status}\n${JSON.stringify(
              response.body
            )}`
          )
        }
      })
      .then((json) => jsonToTimedEntries(json))

    return promise
  }

  get(
    route: string,
    parameters: Map<string, any> = new Map<string, any>()
  ): Promise<Response> {
    parameters.set('user_agent', 'https://github.com/Senth/toggl-app')
    parameters.set('workspace_id', this.workspaceId)

    const fullUrl = this.url + route + createParameterString(parameters)

    return fetch(fullUrl, {
      headers: this.headers,
      method: 'GET',
    })
  }
}

function createParameterString(parameters: Map<string, any>): string {
  let out = '?'

  for (const [name, value] of parameters) {
    out += `${name}=${value}&`
  }

  // Remove last & character
  out = out.substr(0, out.length - 1)

  return out
}

function jsonToTimedEntries(json: any): TimedEntry[] {
  const entries: TimedEntry[] = []
  for (const object of json.data) {
    entries.push(createTimedEntry(object))
  }
  return entries
}

function createTimedEntry(json: any): TimedEntry {
  const entry: TimedEntry = {
    name: json.description,
    start: new Date(json.start),
    end: new Date(json.end),
    duration: Math.round(json.dur / 1000.0),
    projectName: json.project,
    projectColor: json.project_hex_color,
    tags: json.tags,
  }
  return entry
}

export default TogglApi
