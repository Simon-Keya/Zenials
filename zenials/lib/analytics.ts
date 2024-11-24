export const initializeAnalytics = () => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
      page_path: window.location.pathname,
    });
  }
};

export const logEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
