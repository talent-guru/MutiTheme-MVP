"use client"

import * as React from "react"
import { Button, Form, InputField, LocalizedLink } from "./index"
import { z } from "zod"

const newsletterFormSchema = z.object({
  email: z.string().min(3).email(),
})

export const NewsletterForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  return (
    <div className="mb-8">
      <h2 className="md:text-[84px] text-[56px]">
        Subscribe to get 10% off.
      </h2>
      {isSubmitted ? (
        <p className="max-md:text-xl text-xl">
          Thank you for subscribing to our newsletter!
        </p>
      ) : (
        <>
          <p className="max-md:text-xl text-xl mb-4">
            We will also send you our discount coupons!
          </p>
          <Form
            onSubmit={() => {
              setIsSubmitted(true)
            }}
            schema={newsletterFormSchema}
          >
            <div className="flex gap-2">
              <InputField
                inputProps={{
                  uiSize: "lg",
                  className: "rounded-xs",
                  autoComplete: "email",
                }}
                name="email"
                type="email"
                placeholder="Your email"
                className="mb-4 flex-1 md:text-xl"
              />
              <Button type="submit" size="lg" className="h-14 text-md">
                Subscribe
              </Button>
            </div>
          </Form>
          <p className="md:text-md text-sm">
            By subscribing you agree to with our{" "}
            <LocalizedLink
              href="/privacy-policy"
              variant="underline"
              className="!pb-0"
            >
              Privacy Policy
            </LocalizedLink>{" "}
            and provide consent to receive updates from our company.
          </p>
        </>
      )}
    </div>
  )
}
