"use client"

import * as z from "zod"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { parsePhoneNumber } from "libphonenumber-js"

import { NextButton } from "@/components/search/next-button"
import { StepContext } from "@/components/search/step"
import { ViewProps } from "@/components/search/types"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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

const ContactSchema = z.object({ value: z.string() })
type ContactData = z.infer<typeof ContactSchema>

export function Network(props: ViewProps) {
  const { setData } = props
  const { next } = useContext(StepContext)
  const [contacts, setContacts] = useState<string[]>(props.data.contacts || [])
  const [saving, setSaving] = useState(false)
  const form = useForm<ContactData>({
    defaultValues: { value: "" },
    resolver: zodResolver(ContactSchema),
  })

  async function nextHandler({ value }: ContactData) {
    if (!value) return
    setContacts((prev) =>
      prev.includes(value) || prev.length >= 10 ? prev : [value, ...prev]
    )
    form.setValue("value", "")
  }

  function handler() {
    setSaving(true)
    setData((prev) => ({ ...prev, contacts }))
    next()
    setSaving(false)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={(evt) => {
            evt.preventDefault()
            return form.handleSubmit(nextHandler)(evt)
          }}
          className="grid gap-y-2"
        >
          <div className="text-center text-xs font-semibold uppercase text-blue-600">
            Network
          </div>
          <div className="mb-2 text-center text-base">
            Who are the people in your network that can best help you find this
            person?
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
                                (x, y) =>
                                  "0123456789".includes(y) ? x + y : x,
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
                  We suggest adding 5-10 contacts to start your search.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <AddedList
        contacts={contacts}
        remove={(c) => setContacts((prev) => prev.filter((id) => id !== c))}
      />
      <NextButton disabled={saving} onClick={handler} />
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
