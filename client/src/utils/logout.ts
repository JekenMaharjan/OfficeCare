"use client"

import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { addLoginDetails } from "@/redux/reducerSlices/loginSlice"

export const useLogout = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.removeItem("user")            // clear session
    dispatch(addLoginDetails(null))            // reset redux state
    router.push("/login")                      // redirect
  }

  return { logout }
}
