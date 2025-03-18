export {};

declare global {
  interface Window {
    gtag: (command: "config" | "event", trackingId: string, params?: Record<string, unknown>) => void;
  }
}
