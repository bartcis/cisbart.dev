import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore } from "redux"
import rootReducer from "."

interface Props {
  element: any
}

const createStore = () => reduxCreateStore(rootReducer)

export default ({ element }: Props) => (
  <Provider store={createStore()}>{element}</Provider>
)
