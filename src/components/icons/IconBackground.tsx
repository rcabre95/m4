import React from 'react'

export default function IconBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
        {children}
    </div>
  )
}
