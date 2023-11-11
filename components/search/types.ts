import { Dispatch, SetStateAction } from "react"

export interface ViewProps {
  data: object
  setData: Dispatch<SetStateAction<object>>
}
