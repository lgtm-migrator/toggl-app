import TimedEntry from '../model/TimedEntry'
import DailyByTagsRepository from '../../domain/repositories/DailyByTagsRepository'
import TogglApi from '../datasources/TogglApi'

class ReportsRepositoryImpl implements DailyByTagsRepository {
  private readonly toggleApi

  constructor(toggleApi: TogglApi) {
    this.toggleApi = toggleApi
  }

  getReportsBetween(start: Date, end: Date): Promise<TimedEntry[]> {
    return this.toggleApi.getReportsBetween(start, end)
  }
}

export default ReportsRepositoryImpl
