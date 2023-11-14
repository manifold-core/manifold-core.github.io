import Link from "next/link"
import { CheckIcon } from "@heroicons/react/24/outline"

import { Button } from "@/components/ui/button"
import { Confetti } from "@/components/confetti"
import { Background } from "@/components/background"
import { Card } from "@/components/ui/card"

export default function Success() {
  return (
    <Background>
      <Confetti />
      <div className="flex h-full flex-col items-center justify-center px-4">
        <Card className="max-w-md px-8 py-12">
          <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 sm:h-10 sm:w-10">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div className="mt-4 text-center text-2xl font-semibold">
            Search Started
          </div>
          <div className="mb-8 mt-2 text-center text-base text-gray-600">
            You will be notified if your bounty prospect has been found.
          </div>
          <div className="grid gap-y-2">
            <Link href="/">
              <Button variant="secondary" className="mx-auto block w-[250px]">
                Go Home
              </Button>
            </Link>
            <Link href="/search">
              <Button className="mx-auto block w-[250px]">+ Start Search</Button>
            </Link>
          </div>
        </Card>
      </div>
    </Background>
  )
}
