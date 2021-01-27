class WeekEntity {
  readonly durationByDay: Array<number>

  constructor() {
    this.durationByDay = new Array<number>(7)
    this.durationByDay.fill(0, 0, 7)
  }
}

export default WeekEntity
