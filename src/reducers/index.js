// 全Reducerを一つのReducerに結合する。
// combineReducersがReducerを結合するメソッド
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })

// 複数のReducerを結合する場合
// export default combineReducers({ foo, bar, baz })