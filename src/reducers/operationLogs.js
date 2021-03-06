import { ADD_OPARATION_LOG, DELETE_ALL_OPARATION_LOGS } from '../actions'

const operationLogs = (state = [], action) => {
    switch (action.type) {
        case ADD_OPARATION_LOG:
            const operationLog = {
                discreption: action.discreption,
                operatedAt: action.operatedAt
            }
            return [operationLog, ...state]
        case DELETE_ALL_OPARATION_LOGS:
            return []
        default:
            return state
    }
}

export default operationLogs