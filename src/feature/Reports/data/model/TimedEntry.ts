interface TimedEntry {
  readonly name: string
  readonly start: Date
  readonly end: Date
  readonly duration: number
  readonly projectName: string
  readonly projectColor: string
  readonly tags: string[]
}

export default TimedEntry
