"use client"

import * as z from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import * as Email from "@emailjs/browser"
import Airtable from "airtable"

import { ViewProps } from "@/components/search/types"
import { NextButton } from "@/components/search/next-button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const ReviewSchema = z.object({ search: z.string() })
type ReviewData = z.infer<typeof ReviewSchema>

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'patyTkCbOq1gUtioJ.713c9f05eb2aa44de38d6dd3e5b38b9b2751af80b0234345b11afdc290e202b2'
});

const base = Airtable.base('appdloVj67m4T5LHN');
const table = base("Searches")

export function Review(props: ViewProps) {
  const { data, setData } = props
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const form = useForm<ReviewData>({
    defaultValues: data,
    resolver: zodResolver(ReviewSchema),
  })

  async function nextHandler(values: ReviewData) {
    try {
      setSaving(true)
      setData((prev) => ({ ...prev, ...values }))
      const updated: any = { ...data, ...values }
      const results = await table.create([
        {
          "fields": {
            "Name": updated.name,
            "Email": updated.email,
            "Phone": updated.phone,
            "Bounty": updated.bounty,
            "Contacts": updated.contacts.join(", "),
            "Search": updated.search,
          }
        },
      ]);
      router.push("/search/success")
    } catch (err) {
      console.error(err)
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
          Review
        </div>
        <div className="mb-2 text-center text-base">
          Review your search before submitting.
        </div>
        <FormField
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>
                Do you want to add any details on who you are looking for?
              </FormLabel>
              <FormControl>
                <Textarea {...field} disabled={saving} />
              </FormControl>
              <FormDescription>
                We typically see higher success rates with more detailed
                descriptions.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <NextButton disabled={saving} text="Start Search" />
      </form>
    </Form>
  )
}
