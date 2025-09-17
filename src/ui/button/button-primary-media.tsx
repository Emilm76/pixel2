"use client"
import { useMediaQuery } from "react-responsive"
import { ButtonPrimary, ButtonPrimaryProps } from "./button-primary"

export function ButtonPrimaryMedia({
  mobileText,
  ...props
}: { mobileText: string } & ButtonPrimaryProps) {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const displayText = mobileText && isMobile ? mobileText : props.text

  return <ButtonPrimary {...props} text={displayText} />
}
