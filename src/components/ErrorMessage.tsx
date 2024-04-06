import { ReactNode } from "react"

type errorMessageProps = {
    children: ReactNode
}

export const ErrorMessage = ({children}: errorMessageProps) => {
  return (
    <p className=' bg-red-600 p-2 text-white font-bold text-sm text-center'>
        {children}
    </p>
  )
}
