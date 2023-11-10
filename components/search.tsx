"use client"

import * as z from "zod"

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Badge } from "@/components/ui/badge"
import { useForm } from "react-hook-form"
import { Modal } from "@/components/modal"
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
import { DollarInput } from "@/components/ui/input-dollar"
import { PhoneInput } from "@/components/ui/input-phone"
import Image from "next/image"
import Logo from "@/public/images/logo.svg"
import { zodResolver } from "@hookform/resolvers/zod"
import Email from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { parsePhoneNumber } from "libphonenumber-js"

const EMAILJS_SERVICE_ID = "service_t2oc63w" as const
const EMAILJS_TEMPLATE_ID = "template_tj4jqtb" as const
const EMAILJS_PUBLIC_API_KEY = "cAm4_BslKf4HuNSII" as const

const prompts = [
  "a technical co-founder with experience",
  "a VP of Sales to scale my company from",
  "a founding engineer to help build",
  "a director at Netflix who can sign an LOI to pilot",
  "a VC interested in leading a seed round for",
]

export function Search() {
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState("")
  const ref = useRef<HTMLTextAreaElement>(null)
  const form = useForm()
  useAutosize(ref.current, search)

  function onSubmit() {
    setShow(true)
  }

  return (
    <div>
      <form className="relative" onSubmit={form.handleSubmit(onSubmit)}>
        <textarea
          rows={1}
          ref={ref}
          className="block w-full resize-none overflow-y-hidden rounded-[30px] border-gray-200 p-4 pl-12 pr-12 text-base drop-shadow-lg focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
          placeholder="Who are you looking for?"
          value={search}
          onChange={(evt) => setSearch(evt.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              form.handleSubmit(onSubmit)()
            }
          }}
        />
        <div
          // className="absolute end-14 top-4 cursor-pointer"
          className="absolute end-4 top-4 cursor-pointer"
          onClick={() => {
            setSearch("")
          }}
        >
          {search.length ? <XMarkIcon className="h-6" /> : null}
        </div>
        <div className="absolute start-2 top-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-50"
          >
            <MagnifyingGlassIcon className="h-5" />
          </button>
        </div>
        {/*<div className="absolute end-2 top-2">*/}
        {/*  <button*/}
        {/*    type="button"*/}
        {/*    className="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-sm font-semibold text-gray-500 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-50"*/}
        {/*  >*/}
        {/*    <svg*/}
        {/*      className="h-4 w-4 shrink-0"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width="24"*/}
        {/*      height="24"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      fill="none"*/}
        {/*      stroke="currentColor"*/}
        {/*      strokeWidth="2"*/}
        {/*      strokeLinecap="round"*/}
        {/*      strokeLinejoin="round"*/}
        {/*    >*/}
        {/*      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />*/}
        {/*      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />*/}
        {/*      <line x1="12" x2="12" y1="19" y2="22" />*/}
        {/*    </svg>*/}
        {/*  </button>*/}
        {/*</div>*/}
      </form>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {prompts.map((p) => (
          <Badge
            key={p}
            className="w-full cursor-pointer sm:w-auto"
            variant="secondary"
            onClick={() => {
              setSearch(`I'm looking for ${p} `)
              ref.current?.focus()
            }}
          >
            {p}
          </Badge>
        ))}
      </div>
      <Campaign
        search={search}
        show={show}
        setShow={setShow}
        setSearch={setSearch}
      />
    </div>
  )
}

const DataSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  bounty: z.number(),
  contacts: z.array(z.string()).min(1).optional(),
})
type FormData = z.infer<typeof DataSchema>

enum View {
  Personal = "PERSONAL",
  Contacts = "CONTACTS",
}

function Campaign(props: {
  search: string
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  setSearch: Dispatch<SetStateAction<string>>
}) {
  const { search, show, setShow, setSearch } = props
  const [view, setView] = useState(View.Personal)
  const [data, setData] = useState<object>({ search })

  useEffect(() => {
    const updated: any = { ...data, search }
    if (updated.contacts?.length) {
      ;(async () => {
        // await Email.send(
        //   EMAILJS_SERVICE_ID,
        //   EMAILJS_TEMPLATE_ID,
        //   {
        //     ...updated,
        //     contacts: updated.contacts.join(", "),
        //   },
        //   EMAILJS_PUBLIC_API_KEY
        // )
        setShow(false)
        setSearch("")
      })()
    }
  }, [data, search, setSearch, setShow])

  const viewProps = { setData, setView }
  return (
    <Modal show={show} setShow={setShow}>
      <div className="-mr-4 mb-2 flex justify-between md:-mr-6">
        <div />
        <div className="cursor-pointer" onClick={() => setShow(false)}>
          <XMarkIcon className="h-6 w-6" />
        </div>
      </div>
      <Image
        src={Logo}
        alt="logo"
        className="mx-auto mb-4 h-8 w-8 md:h-12 md:w-12"
      />
      <div className="text-muted-foreground mb-4 text-center text-sm">
        More information is required to start your search.
      </div>
      {view === View.Personal ? (
        <Personal {...viewProps} />
      ) : (
        <Contacts {...viewProps} />
      )}
    </Modal>
  )
}

function Personal({
  setData,
  setView,
}: {
  setData: Dispatch<SetStateAction<object>>
  setView: Dispatch<SetStateAction<View>>
}) {
  const [saving, setSaving] = useState(false)
  const form = useForm<FormData>({
    resolver: zodResolver(DataSchema),
  })

  async function nextHandler(values: FormData) {
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
        onSubmit={(evt) => {
          evt.preventDefault()
          return form.handleSubmit(nextHandler)(evt)
        }}
        className="grid gap-y-2"
      >
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Your Name</FormLabel>
              <FormControl>
                <Input disabled={saving} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Email</FormLabel>
              <FormControl>
                <Input type="email" disabled={saving} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <PhoneInput
                  {...field}
                  disabled={saving}
                  onAccept={(phone) => form.setValue("phone", phone)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="bounty"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Bounty</FormLabel>
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
                This amount will be distributed among the people who assisted in
                successfully finding your bounty target.
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

const ContactSchema = z.object({ value: z.string() })
type ContactData = z.infer<typeof ContactSchema>

function Contacts({ setData }: { setData: Dispatch<SetStateAction<object>> }) {
  const [saving, setSaving] = useState(false)
  const [contacts, setContacts] = useState<string[]>([])

  async function submitHandler() {
    try {
      setSaving(true)
      setData((prev) => ({ ...prev, contacts }))
    } finally {
      setSaving(false)
    }
  }

  const form = useForm<ContactData>({
    defaultValues: { value: "" },
    resolver: zodResolver(ContactSchema),
  })

  function handler({ value }: ContactData) {
    setContacts((prev) =>
      prev.includes(value) || prev.length >= 10 ? prev : [value, ...prev]
    )
    form.setValue("value", "")
  }

  return (
    <Form {...form}>
      <form className="mb-2 grid gap-y-2" onSubmit={form.handleSubmit(handler)}>
        <FormField
          name="value"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Email or Phone</FormLabel>
              <FormControl>
                <div className="flex gap-x-2">
                  <div className="relative grow">
                    {isNumber(field.value) ? (
                      <PhoneInput
                        className="pr-10"
                        autoFocus
                        value={field.value}
                        onAccept={(value) => {
                          form.setValue(
                            "value",
                            [...value.split("")].reduce(
                              (x, y) => ("0123456789".includes(y) ? x + y : x),
                              ""
                            )
                          )
                        }}
                      />
                    ) : (
                      <Input
                        type="email"
                        autoFocus
                        className="pr-10"
                        {...field}
                      />
                    )}
                    <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
                      {field.value ? (
                        <XMarkIcon
                          className="h-5 w-5"
                          onClick={() => field.onChange("")}
                        />
                      ) : null}
                    </div>
                  </div>
                  <Button type="submit">Add</Button>
                </div>
              </FormControl>
              <FormDescription>
                Invite your network to start your search.
              </FormDescription>
            </FormItem>
          )}
        />
      </form>
      <AddedList
        contacts={contacts}
        remove={(c) => setContacts((prev) => prev.filter((id) => id !== c))}
      />
      <button
        className="btn mt-4 w-full bg-zinc-900 text-zinc-100 shadow hover:bg-zinc-800"
        disabled={saving}
        onClick={() => submitHandler()}
      >
        Start Search
      </button>
    </Form>
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

function useAutosize(ref: HTMLTextAreaElement | null, value: string) {
  useEffect(() => {
    if (ref) {
      ref.style.height = "0px"
      const scrollHeight = ref.scrollHeight
      ref.style.height = scrollHeight + "px"
    }
  }, [ref, value])
}

function isNumber(val: string) {
  if ([0, 1].includes(val.length)) return false
  return !isNaN(Number(val[0])) && !isNaN(Number(val[1]))
}
