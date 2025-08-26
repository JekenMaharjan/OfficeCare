"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export const useAuth = () => {
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("user")

    if (!user) {
      router.push("/login")   // block access if not logged in
    }
  }, [router])
}
