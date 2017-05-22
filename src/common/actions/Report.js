import { GET_REPORT } from './Types'
import Database from '../libs/Database'

const receiveReport = reportList => ({
  type: GET_REPORT,
  reportList,
})

const getReport = name => (
  new Database().getList(name)
  .then(result => receiveReport(result))
)

export { getReport }
