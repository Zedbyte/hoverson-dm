export const GA_TRACKING_ID = 'G-8PDDZ885XE'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      send_page_view: true,
      debug_mode: false, // Force production mode
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, params?: Record<string, any>) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      ...params,
      send_to: GA_TRACKING_ID, // Explicitly specify target
    })
  }
}