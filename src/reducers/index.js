// 全Reducerを一つのReducerに結合する。
// combineReducersがReducerを結合するメソッド
import { combineReducers } from 'redux';
import count from './count'

export default combineReducers({ count })

// 複数のReducerを結合する場合
// export default combineReducers({ foo, bar, baz })