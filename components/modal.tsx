import React, { useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"

export function Modal({
  size = "md",
  show,
  setShow,
  children,
}: {
  size?: "sm" | "md" | "lg" | "xl"
  show: boolean
  setShow: (s: boolean) => void
  children: React.ReactNode
}) {
  const cancelRef = useRef(null)
  let maxWidth
  switch (size) {
    case "sm":
      maxWidth = "sm:max-w-md"
      break
    case "md":
      maxWidth = "sm:max-w-lg"
      break
    case "lg":
      maxWidth = "sm:max-w-2xl"
      break
    case "xl":
      maxWidth = "sm:max-w-4xl"
      break
    default:
      maxWidth = "sm:max-w-lg"
      break
  }

  return (
    <Transition.Root show={show} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelRef}
        onClose={() => setShow(false)}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative w-full overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 ${maxWidth}`}
              >
                <div className="bg-white p-4 sm:p-6">
                  <div className="px-4 sm:px-6">{children}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
