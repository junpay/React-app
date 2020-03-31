import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// Actionを返す関数（アクションクリエイター）を作成
// 純粋なオブジェクトを返さなければならない。
// redux thunkを使えばfunctionで返せる
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  // console.log(response)
  dispatch({type: READ_EVENTS, response})
}
