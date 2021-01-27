import WeekEntity from './WeekEntity'

class DailyByTagsEntity {
  readonly thisWeek: Map<string, WeekEntity>
  readonly previousWeek: Map<string, WeekEntity>

  constructor() {
    this.thisWeek = new Map<string, WeekEntity>()
    this.previousWeek = new Map<string, WeekEntity>()
  }
}

export default DailyByTagsEntity
