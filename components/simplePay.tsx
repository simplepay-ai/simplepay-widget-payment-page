// @ts-nocheck
"use client";
import "@simplepay-ai/widget";

export default function PaymentWidget({
  type,
  invoiceId,
}: {
  type?: "request" | "default";
  invoiceId?: string;
}) {
  return (
    <payment-app
      appId={process.env.NEXT_PUBLIC_APP_ID}
      invoiceId={invoiceId ?? ""}
      paymentType={type ?? "default"}
    />
  );
}
