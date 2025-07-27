import { LoginLink } from "../modules/header"
import { CartDrawer } from "./CartDrawer"

export const RightIcons = () => (
  <div className="fixed top-40 right-0 z-50 flex flex-col bg-primary">
    <LoginLink className="p-2 white hover:scale-125 transition-all duration-300" />
    <div className="border-b border-white" />
    <CartDrawer className="p-2 white hover:scale-125 transition-all duration-300" />
  </div>
)