'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import * as gtag from '@/lib/gtag'

function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      gtag.pageview(url)
    }
  }, [pathname, searchParams])

  return null
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  )
}