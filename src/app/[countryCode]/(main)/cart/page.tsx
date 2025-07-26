import { Metadata } from "next"
import { CartTemplate } from "@modules/ThemeModules"

export const metadata: Metadata = {
  title: "Cart",
  description: "View your cart",
}
export default  function Cart() {

  return <CartTemplate  />
}
