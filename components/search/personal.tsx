"use client"

import * as z from "zod"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/input-phone"
import { ViewProps } from "@/components/search/types"
import { NextButton } from "@/components/search/next-button"
import { StepContext } from "@/components/search/step"

const PersonalSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
})
type PersonalData = z.infer<typeof PersonalSchema>

export function Personal(props: ViewProps) {
  const { data, setData } = props
  const { next } = useContext(StepContext)
  const [saving, setSaving] = useState(false)
  const form = useForm<PersonalData>({
    defaultValues: data,
    resolver: zodResolver(PersonalSchema),
  })

  async function nextHandler(values: PersonalData) {
    try {
      setSaving(true)
      setData((prev) => ({ ...prev, ...values }))
      next()
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
        <div className="text-center text-xs font-semibold uppercase text-blue-600">
          Personal Info
        </div>
        <div className="mb-2 text-center text-base">
          Tell us where to send your search results.
        </div>
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
        <NextButton disabled={saving} />
      </form>
    </Form>
  )
}
