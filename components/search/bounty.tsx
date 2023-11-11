"use client"

import * as z from "zod"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { ViewProps } from "@/components/search/types"
import { NextButton } from "@/components/search/next-button"
import { StepContext } from "@/components/search/step"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { DollarInput } from "@/components/ui/input-dollar"

const BountySchema = z.object({ bounty: z.number().min(0) })
type BountyData = z.infer<typeof BountySchema>

export function Bounty(props: ViewProps) {
  const { data, setData } = props
  const { next } = useContext(StepContext)
  const [saving, setSaving] = useState(false)
  const form = useForm<BountyData>({
    defaultValues: data,
    resolver: zodResolver(BountySchema),
  })

  async function nextHandler(values: BountyData) {
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
          Bounty
        </div>
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
        <NextButton disabled={saving} />
      </form>
    </Form>
  )
}
