"use client"

import { createContext, Dispatch, SetStateAction, useState } from "react"
import { useQueryState } from "next-usequerystate"

export interface Page {
  title: string
  body: React.ReactNode
}

export interface PageState {
  dirty: boolean
  completed: boolean
}

interface Context {
  step: number
  setStep: Dispatch<SetStateAction<number>>
  next: () => void
  states: PageState[]
  setStates: Dispatch<SetStateAction<PageState[]>>
}

export const StepContext = createContext<Context>({} as unknown as Context)

export const StepProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [query, setQuery] = useQueryState("step")
  const [step, setStep] = useState<Context["step"]>(0)
  const [states, setStates] = useState<Context["states"]>([])
  return (
    <StepContext.Provider
      value={{
        step,
        setStep,
        next: () => {
          setQuery(step + 1)
          setStep((prev) => prev + 1)
        },
        states,
        setStates,
      }}
    >
      {children}
    </StepContext.Provider>
  )
}
