"use client"

import React from "react"
import { useFormStatus } from "react-dom"

import { Button, ButtonProps } from "../../../../components/index"

export function SubmitButton(props: Omit<ButtonProps, "type">) {
  const { pending } = useFormStatus()

  return (
    <Button {...props} type="submit" isLoading={pending || props.isLoading} />
  )
}
