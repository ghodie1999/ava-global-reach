import { useSyncExternalStore } from "react";

export type QuoteContext = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  service?: string;
  message?: string;
};

let state: QuoteContext = {};
const listeners = new Set<() => void>();

export function setQuoteContext(patch: Partial<QuoteContext>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export function clearQuoteContext() {
  state = {};
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return state;
}

function getServerSnapshot() {
  return state;
}

export function useQuoteContext(): QuoteContext {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

const SERVICE_LABELS: Record<string, string> = {
  sourcing: "Supplier Sourcing",
  warehousing: "Warehousing",
  inspection: "Inspection Services",
  consolidation: "Shipment Consolidation",
  logistics: "International Logistics",
  multiple: "Multiple Services",
};

export function buildWhatsAppMessage(ctx: QuoteContext): string {
  const hasAny = Object.values(ctx).some((v) => v && String(v).trim().length > 0);
  if (!hasAny) {
    return "Hello AVA Logistics! I'm interested in your services and would like to learn more.";
  }

  const lines: string[] = ["Hello AVA Logistics! I'd like to request a quote."];
  if (ctx.service) {
    lines.push("", `Service: ${SERVICE_LABELS[ctx.service] ?? ctx.service}`);
  }
  if (ctx.name) lines.push(`Name: ${ctx.name}`);
  if (ctx.company) lines.push(`Company: ${ctx.company}`);
  if (ctx.email) lines.push(`Email: ${ctx.email}`);
  if (ctx.phone) lines.push(`Phone: ${ctx.phone}`);
  if (ctx.country) lines.push(`Country: ${ctx.country}`);
  if (ctx.message) lines.push("", `Details: ${ctx.message}`);

  return lines.join("\n");
}
