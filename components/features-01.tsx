"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import PlanetImage from "@/public/images/planet.png";

export default function Features01() {
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 md:py-20">
          <div
            className="text-md mb-4 font-bold uppercase tracking-normal text-[#6366F1]"
            data-aos="zoom-y-out"
          >
            solution
          </div>
          <h2 className="font-inter-tight mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">
            Turn your network into personal recruiters
          </h2>
          <p className="text-lg text-zinc-500">
            You place a bounty. Our system rewards your network when they help you find who you need.
          </p>
        </div>
        <Planet />
        {/*<div className="relative mx-auto flex max-w-6xl justify-center px-4 pb-12 before:absolute before:-top-12 before:-z-10 before:h-96 before:w-96 before:rounded-full before:bg-zinc-900 before:opacity-[.15] before:blur-3xl sm:px-6 md:pb-20">*/}
        {/*  <Image className="rounded-lg shadow-2xl" src={FeatureImage01} width={1104} height={620} alt="Hero" priority />*/}
        {/*</div>*/}
    </section>
  )
}

function Planet() {
  return (
    <div className="flex flex-col items-center pb-12 md:pb-16">
      <div className="relative">
        {/* Halo effect */}
        <svg
          className="pointer-events-none absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          width="800"
          height="800"
          viewBox="0 0 800 800"
          style={{ maxWidth: "200%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="fill-current text-gray-400 opacity-75">
            <circle className="pulse" cx="400" cy="400" r="200" />
            <circle className="pulse pulse-1" cx="400" cy="400" r="200" />
            <circle className="pulse pulse-2" cx="400" cy="400" r="200" />
          </g>
        </svg>
        {/* White box */}
        <svg
          className="absolute h-auto w-32 rounded-full shadow-xl"
          viewBox="0 0 128 48"
          style={{ width: "32%", top: "20%", right: "-16%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="fill-current text-white"
            width="128"
            height="48"
            rx="24"
          />
        </svg>
        {/* Globe image */}
        <Image
          className="relative rounded-full shadow-xl"
          src={PlanetImage}
          width={400}
          alt="Planet"
        />
        {/* Static dots */}
        <svg
          className="absolute top-0 h-auto w-full"
          viewBox="0 0 400 400"
          style={{ left: "12%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              x="-41.7%"
              y="-34.2%"
              width="183.3%"
              height="185.6%"
              filterUnits="objectBoundingBox"
              id="world-ill-a"
            >
              <feOffset
                dy="4"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              />
              <feGaussianBlur
                stdDeviation="6"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                in="shadowBlurOuter1"
              />
            </filter>
            <filter
              x="-83.3%"
              y="-68.5%"
              width="266.7%"
              height="271.2%"
              filterUnits="objectBoundingBox"
              id="world-ill-c"
            >
              <feOffset
                dy="4"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              />
              <feGaussianBlur
                stdDeviation="6"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                in="shadowBlurOuter1"
              />
            </filter>
            <filter
              x="-7.3%"
              y="-23.8%"
              width="114.5%"
              height="147.6%"
              filterUnits="objectBoundingBox"
              id="world-ill-e"
            >
              <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
            </filter>
            <ellipse
              id="world-ill-b"
              cx="51"
              cy="175.402"
              rx="24"
              ry="23.364"
            />
            <ellipse
              id="world-ill-d"
              cx="246"
              cy="256.201"
              rx="12"
              ry="11.682"
            />
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="world-ill-f"
            >
              <stop stopColor="#6366F1" stopOpacity="0" offset="0%" />
              <stop
                stopColor="#6366F1"
                stopOpacity=".64"
                offset="52.449%"
              />
              <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -.818)"
            fill="none"
            fillRule="evenodd"
          >
            <use
              fill="#000"
              filter="url(#world-ill-a)"
              xlinkHref="#world-ill-b"
            />
            <use fill="#6366F1" xlinkHref="#world-ill-b" />
            <use
              fill="#000"
              filter="url(#world-ill-c)"
              xlinkHref="#world-ill-d"
            />
            <use fill="#6366F1" xlinkHref="#world-ill-d" />
            <ellipse
              fillOpacity=".32"
              fill="#6366F1"
              cx="293"
              cy="142.303"
              rx="8"
              ry="7.788"
            />
            <ellipse
              fillOpacity=".64"
              fill="#6366F1"
              cx="250"
              cy="187.083"
              rx="6"
              ry="5.841"
            />
            <ellipse
              fillOpacity=".64"
              fill="#6366F1"
              cx="13"
              cy="233.811"
              rx="2"
              ry="1.947"
            />
            <ellipse
              fill="#6366F1"
              cx="29"
              cy="114.072"
              rx="2"
              ry="1.947"
            />
            <path
              d="M258 256.2l87-29.204"
              stroke="#666"
              strokeWidth="2"
              opacity=".16"
              filter="url(#world-ill-e)"
            />
            <path
              d="M258 251.333c111.333-40.237 141-75.282 89-105.136M136 103.364c66.667 4.543 104.667 32.45 114 83.72"
              stroke="url(#world-ill-f)"
              strokeWidth="2"
              strokeDasharray="2"
            />
          </g>
        </svg>
        {/* Dynamic dots */}
        <svg
          className="absolute max-w-full"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          style={{ width: "12%", top: "45%", left: "50%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="fill-current text-[#6366F1]">
            <circle
              className="pulse pulse-mini pulse-1"
              cx="24"
              cy="24"
              r="8"
            />
            <circle
              className="pulse pulse-mini pulse-2"
              cx="24"
              cy="24"
              r="8"
            />
            <circle cx="24" cy="24" r="8" />
          </g>
        </svg>
        <svg
          className="absolute max-w-full"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          style={{ width: "12%", top: "19%", left: "46%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="fill-current text-[#6366F1]">
            <circle className="pulse pulse-mini" cx="24" cy="24" r="8" />
            <circle
              className="pulse pulse-mini pulse-2"
              cx="24"
              cy="24"
              r="8"
            />
            <circle cx="24" cy="24" r="8" />
          </g>
        </svg>
        {/* White box */}
        <svg
          className="absolute h-auto w-32 rounded-full shadow-xl"
          viewBox="0 0 128 48"
          style={{ width: "32%", top: "35%", left: "-25%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="fill-current text-white"
            width="128"
            height="48"
            rx="24"
          />
        </svg>
        {/* Black icon */}
        <svg
          className="absolute h-auto w-16 max-w-full rounded-full shadow-xl"
          viewBox="0 0 64 64"
          style={{ width: "16%", bottom: "12%", left: "27%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="fill-current text-gray-800"
            cx="32"
            cy="32"
            r="32"
          />
          <g
              transform="translate(.582 .055)"
              fill="none"
              fillRule="evenodd"
          >
              <g transform="rotate(33 -6.35 52.885)">
            <path fill="#C7D2FE" d="M24.317 7.426a8.537 8.537 0 0 1-2.616 15.262 3.15 3.15 0 0 1-3.042-5.268l2.425-2.426a10.079 10.079 0 0 0 2.951-7.764c.088.064.186.128.282.196Z" />
            <path fill="#6366F1" d="M7.425 3.68a8.54 8.54 0 0 1 15.262 2.618 3.149 3.149 0 0 1-5.268 3.046L14.995 6.92a10.122 10.122 0 0 0-7.764-2.95c.062-.097.128-.195.194-.29Z" />
            <path fill="#C7D2FE" d="M3.68 20.572A8.54 8.54 0 0 1 6.296 5.31a3.148 3.148 0 0 1 3.05 5.268l-2.424 2.424a10.117 10.117 0 0 0-2.95 7.766c-.098-.064-.196-.128-.294-.196Z" />
            <path fill="#6366F1" d="M20.574 24.319A8.54 8.54 0 0 1 5.309 21.7a3.15 3.15 0 0 1 5.27-3.05l2.424 2.424a10.098 10.098 0 0 0 7.764 2.95 9.316 9.316 0 0 1-.193.295Z" />
              </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
