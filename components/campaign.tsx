"use client"

import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Modal} from "@/components/modal";
import {XMarkIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {PhoneInput} from "@/components/ui/input-phone";
import {DollarInput} from "@/components/ui/input-dollar";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {parsePhoneNumber} from "libphonenumber-js";
import {Textarea} from "@/components/ui/textarea";

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

export function Campaign(props: {
  search: string
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  setSearch: Dispatch<SetStateAction<string>>
}) {
  const { search, show, setShow, setSearch } = props
  const [view, setView] = useState(View.Personal)
  const [data, setData] = useState<object>({ search })

  useEffect(() => {
    setData(prev => ({ ...prev, search }))
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
    await new Promise(res => setTimeout(res, 4000))
  };

  const handleClose = () => {
    setShow(false)
    setSearch("")
  }

  const viewProps = { data, setData, setView }
  let page: React.ReactNode
  switch(view) {
    case View.Personal:
      page = <Personal {...viewProps} />
      break;
    case View.Bounty:
      page = <Bounty {...viewProps} />
      break;
    case View.Contacts:
      page = <Contacts {...viewProps} />
      break;
    case View.Review:
      page = <Review {...viewProps} onSubmit={handleSubmit} />
      break;
    case View.Success:
      page = <Success {...viewProps} onClose={handleClose} />
      break;
    default:
      page = null
  }
  return (
    <Modal show={show} setShow={setShow}>
      <div className="-mr-4 flex justify-between md:-mr-6">
        <div />
        <div className="cursor-pointer" onClick={() => setShow(false)}>
          <XMarkIcon className="h-6 w-6" />
        </div>
      </div>
      <Image
        src={Logo}
        alt="logo"
        className="mx-auto mb-5 h-10 w-10 md:h-12 md:w-12"
      />
      {page}
    </Modal>
  )
}

interface ViewProps {
  data: object
  setData: Dispatch<SetStateAction<object>>
  setView: Dispatch<SetStateAction<View>>
}

const PersonalSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
})
type PersonalData = z.infer<typeof PersonalSchema>

function Personal(props: ViewProps) {
  const { setData, setView } = props
  const [saving, setSaving] = useState(false)
  const form = useForm<PersonalData>({
    resolver: zodResolver(PersonalSchema),
  })

  async function nextHandler(values: PersonalData) {
    try {
      setSaving(true)
      setData((prev) => ({ ...prev, ...values }))
      setView(View.Bounty)
    } finally {
      setSaving(false)
    }
  }
  return (
    <Form {...form}>
      <div className="mb-2 text-center text-base">
        Tell us where to send the search results.
      </div>
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

const BountySchema = z.object({ bounty: z.number().min(0) })
type BountyData = z.infer<typeof BountySchema>

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
      <form className="mb-2 grid gap-y-2" onSubmit={form.handleSubmit(nextHandler)}>
        <div className="mb-2 text-center text-base">
          How much do you want to pay for a warm introduction to the right person?
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
                The bounty will be given to the people who successfully assist you in
                finding your person.
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

function Contacts(props: ViewProps) {
  const { setData, setView } = props
  const [saving, setSaving] = useState(false)
  const [contacts, setContacts] = useState<string[]>([])

  async function nextHandler() {
    try {
      setSaving(true)
      setData((prev) => ({...prev, contacts}))
      setView(View.Review)
    } finally {
      setSaving(false)
    }
  }

  const form = useForm<ContactData>({
    defaultValues: { value: "" },
    resolver: zodResolver(ContactSchema),
  })

  function handler({ value }: ContactData) {
    if (!value) return
    setContacts((prev) =>
      prev.includes(value) || prev.length >= 10 ? prev : [value, ...prev]
    )
    form.setValue("value", "")
  }

  return (
    <Form {...form}>
      <form className="mb-2 grid gap-y-2" onSubmit={form.handleSubmit(handler)}>
        <div className="mb-2 text-center text-base">
          Who are the people in your network that can best help you find this person?
        </div>
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
                We suggest 5-10 contacts as a good foundation to start your search.
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
        onClick={() => nextHandler()}
      >
        Next
      </button>
    </Form>
  )
}

const ReviewSchema = z.object({ search: z.string() })
type ReviewData = z.infer<typeof ReviewSchema>

function Review(props: ViewProps & { onSubmit: (data: object) => Promise<void> }) {
  const { data, setData, setView, onSubmit } = props
  const [saving, setSaving] = useState(false)
  const form = useForm<ReviewData>({
    defaultValues: {
      search: (data as any || {}).search || ''
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

  return <Form {...form}>
    <form className="mb-2 grid gap-y-2" onSubmit={form.handleSubmit(nextHandler)}>
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
}

function Success(props: ViewProps & { onClose: () => void }) {
  // CONFETTI page
  return <div>
    Success
    <button
      className="btn mt-2 w-full bg-zinc-900 text-zinc-100 shadow hover:bg-zinc-800"
      onClick={props.onClose}
    >
      Start Another Search
    </button>
  </div>
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
