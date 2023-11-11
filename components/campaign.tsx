"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Logo from "@/public/images/logo.svg"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/input-phone"
import { DollarInput } from "@/components/ui/input-dollar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { parsePhoneNumber } from "libphonenumber-js"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { SearchForm } from "@/components/search/form"

const EMAILJS_SERVICE_ID = "service_t2oc63w" as const
const EMAILJS_TEMPLATE_ID = "template_tj4jqtb" as const
const EMAILJS_PUBLIC_API_KEY = "cAm4_BslKf4HuNSII" as const

enum View {
  Bounty = "BOUNTY",
  Contacts = "CONTACTS",
  Personal = "PERSONAL",
  Review = "REVIEW",
  Success = "SUCCESS",
}

export function Campaign(props: { search: string }) {
  const { search } = props
  const [view, setView] = useState(View.Personal)
  const [data, setData] = useState<object>({ search })
  const router = useRouter()

  useEffect(() => {
    setData((prev) => ({ ...prev, search }))
  }, [search])

  const handleSubmit = async (updated: any) => {
    // await Email.send(
    //   EMAILJS_SERVICE_ID,
    //   EMAILJS_TEMPLATE_ID,
    //   {
    //     ...updated,
    //     contacts: updated.contacts.join(", "),
    //   },
    //   EMAILJS_PUBLIC_API_KEY
    // )
    console.log({ ...updated, contacts: updated.contacts.join(", ") })
    await new Promise((res) => setTimeout(res, 4000))
  }

  const handleClose = () => {
    router.push("/search")
  }

  const viewProps = { data, setData, setView }
  let page: React.ReactNode
  switch (view) {
    case View.Personal:
      page = <Personal {...viewProps} />
      break
    case View.Bounty:
      page = <Bounty {...viewProps} />
      break
    case View.Contacts:
      page = <Contacts {...viewProps} />
      break
    case View.Review:
      page = <Review {...viewProps} onSubmit={handleSubmit} />
      break
    case View.Success:
      page = <Success {...viewProps} onClose={handleClose} />
      break
    default:
      page = null
  }
  return (
    <div>
      <Image
        src={Logo}
        alt="logo"
        className="mx-auto mb-5 h-10 w-10 md:h-12 md:w-12"
      />
      {page}
    </div>
  )
}

interface ViewProps {
  data: object
  setData: Dispatch<SetStateAction<object>>
  setView: Dispatch<SetStateAction<View>>
}

function Bounty(props: ViewProps) {
  const { setData, setView } = props
  const [saving, setSaving] = useState(false)
  const form = useForm<BountyData>({
    resolver: zodResolver(BountySchema),
  })

  async function nextHandler(values: BountyData) {
    try {
      setSaving(true)
      setData((prev) => ({ ...prev, ...values }))
      setView(View.Contacts)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Form {...form}>
      <form
        className="mb-2 grid gap-y-2"
        onSubmit={form.handleSubmit(nextHandler)}
      >
        <div className="mb-2 text-center text-base">
          How much do you want to pay for a warm introduction to the right
          person?
        </div>
        <FormField
          name="bounty"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Bounty Amount</FormLabel>
              <FormControl>
                <DollarInput
                  disabled={saving}
                  value={field.value}
                  onChange={(evt) => {
                    const value = evt.target.value
                    if (value.length === 0) {
                      field.onChange("")
                    } else {
                      const num = Number(evt.target.value)
                      if (isNaN(num)) {
                        const stripped = value.replace(/\D/g, "")
                        const num2 = Number(stripped)
                        field.onChange(isNaN(num2) ? stripped : num2)
                      } else {
                        field.onChange(num)
                      }
                    }
                  }}
                />
              </FormControl>
              <FormDescription>
                The bounty will be given to the people who successfully assist
                you in finding your person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="btn mt-2 w-full bg-zinc-900 text-zinc-100 shadow hover:bg-zinc-800"
          disabled={saving}
        >
          Next
        </button>
      </form>
    </Form>
  )
}

const ReviewSchema = z.object({ search: z.string() })
type ReviewData = z.infer<typeof ReviewSchema>

function Review(
  props: ViewProps & { onSubmit: (data: object) => Promise<void> }
) {
  const { data, setData, setView, onSubmit } = props
  const [saving, setSaving] = useState(false)
  const form = useForm<ReviewData>({
    defaultValues: {
      search: ((data as any) || {}).search || "",
    },
    resolver: zodResolver(ReviewSchema),
  })

  async function nextHandler(values: ReviewData) {
    try {
      setSaving(true)
      setData((prev) => ({ ...prev, ...values }))
      await onSubmit({ ...data, ...values })
      setView(View.Success)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Form {...form}>
      <form
        className="mb-2 grid gap-y-2"
        onSubmit={form.handleSubmit(nextHandler)}
      >
        <div className="mb-2 text-center text-base">
          Review your search before submitting.
        </div>
        <FormField
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Who are you looking for?</FormLabel>
              <FormControl>
                <Textarea {...field} disabled={saving} />
              </FormControl>
              <FormDescription>
                The more details you provide, the better your search results.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="btn mt-2 w-full bg-zinc-900 text-zinc-100 shadow hover:bg-zinc-800"
          disabled={saving}
        >
          Start Search
        </button>
      </form>
    </Form>
  )
}

function Success(props: ViewProps & { onClose: () => void }) {
  // CONFETTI page
  return (
    <div>
      Success
      <button
        className="btn mt-2 w-full bg-zinc-900 text-zinc-100 shadow hover:bg-zinc-800"
        onClick={props.onClose}
      >
        Start Another Search
      </button>
    </div>
  )
}

function AddedList(props: {
  contacts: string[]
  remove: (id: string) => void
}) {
  const { contacts } = props
  return (
    <div className="mt-4">
      <div className="mb-2 flex justify-between text-xs">
        <div className="uppercase">Network</div>
        <div>
          {contacts.length ? `${contacts.length} of ${contacts.length}` : null}
        </div>
      </div>
      {contacts.length ? (
        <div className="max-h-[300px] overflow-y-scroll">
          {contacts.map((c) => (
            <Contact key={c} contact={c} remove={() => props.remove(c)} />
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground text-sm">None</div>
      )}
    </div>
  )
}

function Contact(props: { contact: string; remove: () => void }) {
  return (
    <>
      <hr />
      <div className="my-2 flex items-center justify-between">
        <div className="flex items-center gap-x-2 text-sm">
          <Avatar className="h-6 w-6">
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          {parse(props.contact)}
        </div>
        <div className="cursor-pointer" onClick={() => props.remove()}>
          <XMarkIcon className="h-5 w-5" />
        </div>
      </div>
    </>
  )
}

function parse(contact: string) {
  if (isNumber(contact)) {
    const parsed = parsePhoneNumber(contact, "US")
    return parsed.isValid() ? parsed.formatInternational() : contact
  }
  return contact
}

function isNumber(val: string) {
  if ([0, 1].includes(val.length)) return false
  return !isNaN(Number(val[0])) && !isNaN(Number(val[1]))
}
