"use client"

import { useContext } from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { StepProvider, Page, StepContext } from "@/components/search/step"

interface Props {
  pages: Page[]
}

export function SearchLayout({ pages }: Props) {
  return (
    <StepProvider>
      {/*<Steps pages={pages} />*/}
      <div className="mt-4 md:mt-6">
        {pages.map((page, i) => (
          <Content key={page.title} step={i} total={pages.length}>
            {page.body}
          </Content>
        ))}
      </div>
    </StepProvider>
  )
}

function Content({
  step,
  total,
  children,
}: {
  step: number
  total: number
  children: React.ReactNode
}) {
  const { step: current } = useContext(StepContext)
  if (current !== step) return null
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <div className="text-center text-sm uppercase">
          Step <span className="font-semibold">{step + 1}</span> of{" "}
          <span className="font-semibold">{total}</span>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

function Steps({ pages }: { pages: Page[] }) {
  return (
    <div className="mt-6">
      <div className="sr-only">Steps</div>
      <ol className="flex justify-center gap-2 text-sm font-medium text-gray-500 sm:gap-4">
        {pages.map((p, i) => (
          <Step key={p.title} title={p.title} index={i} />
        ))}
      </ol>
    </div>
  )
}

interface StepProps {
  index: number
  title: string
}

function Step({ title, index }: StepProps) {
  const { step: current, setStep } = useContext(StepContext)
  let step: React.ReactNode
  const stepProps = { index, title, setStep, current: current === index }
  if (current > index) {
    step = <Success {...stepProps} />
  } else if (current === index) {
    step = <Current {...stepProps} />
  } else {
    step = <Future {...stepProps} />
  }
  return (
    <li
      className="flex cursor-pointer items-center gap-2"
      onClick={() => setStep(index)}
    >
      {step}
    </li>
  )
}

function Success({ title, current }: StepProps & { current: boolean }) {
  return (
    <>
      <span className="rounded bg-green-50 p-1.5 text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      {current ? (
        <span className="text-gray-400">{title}</span>
      ) : (
        <span className="hidden text-gray-400 md:inline">{title}</span>
      )}
    </>
  )
}

function Current({ index, title, current }: StepProps & { current: boolean }) {
  return (
    <>
      <span className="h-6 w-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold text-blue-600">
        {index + 1}
      </span>
      {current ? (
        <span className="text-blue-600">{title}</span>
      ) : (
        <span className="hidden text-blue-600 md:inline">{title}</span>
      )}
    </>
  )
}

function Future({ index, title, current }: StepProps & { current: boolean }) {
  return (
    <>
      <span className="h-6 w-6 rounded bg-gray-100 text-center text-[10px]/6 font-bold text-gray-600">
        {index + 1}
      </span>
      {current ? (
        <span className="text-gray-500">{title}</span>
      ) : (
        <span className="hidden text-gray-500 md:inline">{title}</span>
      )}
    </>
  )
}
