"use client";
import dynamic from "next/dynamic";

const PaymentWidget = dynamic(() => import("@/components/simplePay"), {
  ssr: false,
});

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ invoice_id: string }>;
}) {
  const id = (await params).invoice_id;
  return <PaymentWidget invoiceId={id} />;
}
