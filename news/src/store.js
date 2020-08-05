import {createStore} from 'redux'
import start from './reducers/start'

const store = createStore(start)

export default store