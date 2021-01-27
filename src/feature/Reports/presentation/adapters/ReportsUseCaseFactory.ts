import LocalStorageKeys from '../../../../util/LocalStorageKeys'
import TogglApi from '../../data/datasources/TogglApi'
import ReportsRepositoryImpl from '../../data/repositories/ReportsRepositoryImpl'
import DailyByTagsUsecase from '../../domain/usecases/DailyByTags'

class ReportsUseCaseFactory {
  private readonly repo: ReportsRepositoryImpl

  constructor() {
    const apiKey = localStorage.getItem(LocalStorageKeys.apiKey)
    if (apiKey == null) {
      throw new Error('apiKey not set in local storage')
    }

    const workspaceId = localStorage.getItem(LocalStorageKeys.workspaceId)
    if (workspaceId == null) {
      throw new Error('workspaceId not set in local storage')
    }

    const togglApi = new TogglApi(apiKey, parseInt(workspaceId))

    this.repo = new ReportsRepositoryImpl(togglApi)
  }

  dailyByTags(): DailyByTagsUsecase {
    return new DailyByTagsUsecase(this.repo)
  }
}

export default ReportsUseCaseFactory
