"use client"

import { StateContext } from "../context/StateContext"

export default function Providers({ children }) {
  return <StateContext>{children}</StateContext>
}
