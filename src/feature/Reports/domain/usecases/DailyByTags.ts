import TimedEntry from '../../data/model/TimedEntry'
import DailyByTagsEntity from '../entities/DailyByTagsEntity'
import WeekEntity from '../entities/WeekEntity'
import DailyByTagsRepository from '../repositories/DailyByTagsRepository'

class DailyByTagsUsecase {
  repo: DailyByTagsRepository

  constructor(repo: DailyByTagsRepository) {
    this.repo = repo
  }

  execute(): Promise<DailyByTagsEntity> {
    const previousWeekDay = new Date()
    previousWeekDay.setDate(previousWeekDay.getDate() - 7)
    const startDate = calculateStartOfWeek(previousWeekDay)
    const endDate = new Date()

    const promise = this.repo
      .getReportsBetween(startDate, endDate)
      .then((timedEntries) => {
        return modelToEntity(timedEntries)
      })

    // Calculate
    return promise
  }
}

function modelToEntity(models: TimedEntry[]): DailyByTagsEntity {
  const out = new DailyByTagsEntity()
  for (const timedEntry of models) {
    // This or previous week?
    let week: Map<string, WeekEntity>
    if (isDateThisWeek(timedEntry.start)) {
      week = out.thisWeek
    } else {
      week = out.previousWeek
    }

    // Go through all tags in the entry
    for (const tag of timedEntry.tags) {
      let weekEntity = week.get(tag)
      if (!weekEntity) {
        weekEntity = new WeekEntity()
        week.set(tag, weekEntity)
      }

      // Add duration to day
      const weekday = getWeekDay(timedEntry.start)
      weekEntity.durationByDay[weekday] += timedEntry.duration
    }
  }

  return out
}

function calculateStartOfWeek(date: Date): Date {
  const startDate = date
  startDate.setHours(0)
  startDate.setMinutes(0)
  startDate.setSeconds(0)
  startDate.setMilliseconds(0)

  // Get
  const day = startDate.getDay()
  const decreaseByDays = () => {
    switch (day) {
      case 0:
        return 6
      case 1:
        return 0
      default:
        return day - 1
    }
  }
  startDate.setDate(startDate.getDate() - decreaseByDays())

  // Need to reset if date spanned daylight saving time
  startDate.setHours(0)
  startDate.setMinutes(0)
  startDate.setSeconds(0)
  startDate.setMilliseconds(0)

  return startDate
}

function isDateThisWeek(date: Date): boolean {
  const now = new Date()
  const startOfThisWeek = calculateStartOfWeek(now)
  return date >= startOfThisWeek
}

function getWeekDay(date: Date): number {
  // Start the week on Monday instead of Sunday
  let day = date.getDay() - 1
  if (day === -1) {
    day = 6
  }
  return day
}

export default DailyByTagsUsecase
