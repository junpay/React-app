export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// Actionを返す関数（アクションクリエイター）を作成
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
