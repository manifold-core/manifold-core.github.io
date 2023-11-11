"use client"

import Confetti from "react-confetti"

function ConfettiPage() {
  return (
    <Confetti
      width={2000}
      height={1000}
      numberOfPieces={1200}
      gravity={0.1}
      tweenDuration={10_000}
      recycle={false}
    />
  )
}

export { ConfettiPage as Confetti }
