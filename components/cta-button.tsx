import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

type Props = Partial<{
  text: string
  query: object
}>

export default function CTAButton(props: Props) {
  const { text = "Start Search" } = props
  return (
    <Link href="#search">
      <button
        className="btn text-md group w-full bg-white font-semibold text-zinc-600 shadow hover:text-zinc-900"
        // className="btn group bg-blue-500 text-white hover:bg-blue-600"
        // className="btn text-md px-group w-full bg-zinc-800 font-semibold text-zinc-200 shadow hover:text-zinc-100"
      >
        {text}{" "}
        <ArrowRightIcon className="ml-1 h-3 stroke-2 tracking-normal text-zinc-600 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
      </button>
    </Link>
  )
}
