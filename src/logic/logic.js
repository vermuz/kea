import { createLogic } from './create'
import { combineReducerObjects } from './reducer'

export function initLogic (Klass) {
  return new Klass().init()
}

class Logic {
  path = () => []
  selector = (state) => state
  constants = () => ({})
  actions = () => ({})
  reducers = () => ({})
  reducer = ({ path, reducers }) => combineReducerObjects(path, reducers)
  selectors = ({ selectors }) => ({})

  init () {
    let object = {}
    return createLogic(this, object)
  }
}

Logic._isKeaLogicClass = true

export default Logic
