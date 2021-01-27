import React, { useEffect, useState } from 'react'
import { H1 } from '../../../../core/components/Headers'
import DailyByTagsEntity from '../../domain/entities/DailyByTagsEntity'
import ReportsUseCaseFactory from '../adapters/ReportsUseCaseFactory'
import Week from '../components/Week'

interface Props {}

const Reports: React.FC<Props> = (props) => {
  const [report, setReport] = useState(new DailyByTagsEntity())

  useEffect(() => {
    const dailyByTagUsecase = new ReportsUseCaseFactory().dailyByTags()
    dailyByTagUsecase.execute().then((dailyByTagsEntity) => {
      setReport(dailyByTagsEntity)
    })
  }, [])

  return (
    <>
      <H1>Reports</H1>
      <Week title="This Week" week={report.thisWeek} />
      <Week title="Previous Week" week={report.previousWeek} />
    </>
  )
}

export default Reports
