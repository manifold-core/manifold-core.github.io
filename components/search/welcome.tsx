import { NextButton } from "@/components/search/next-button"

export function Welcome() {
  return (
    <div className="mx-auto flex max-w-sm flex-col text-center">
      <div className="mb-2 text-center text-xs font-semibold uppercase text-blue-600">
        Bounty
      </div>
      <div className="mb-2 text-center text-2xl font-bold">Welcome!</div>
      <div className="text-md text-muted-foreground mb-4 text-center">
        Start your search after answering a few questions.
      </div>
      <div className="text-md mb-4">
        You are <span className="font-bold">2 minutes</span> away from growing
        your business with a <span className="font-bold">bounty</span>.
      </div>
      <NextButton transition />
    </div>
  )
}
