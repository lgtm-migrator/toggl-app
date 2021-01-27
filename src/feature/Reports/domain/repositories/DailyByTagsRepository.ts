import TimedEntry from '../../data/model/TimedEntry'

interface DailyByTagsRepository {
  getReportsBetween(start: Date, end: Date): Promise<TimedEntry[]>
}

export default DailyByTagsRepository
