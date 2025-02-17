"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const PaymentWidget = dynamic(() => import("@/components/simplePay"), {
  ssr: false,
});

type InvoiceCreatedDetail = {
  invoiceId: string;
};

export default async function RequestPage() {
  const router = useRouter();

  const handleInvoice = useCallback(
    (e: Event) => {
      if (e instanceof CustomEvent) {
        const { invoiceId } = e.detail as InvoiceCreatedDetail;
        router.push(`/${invoiceId}`);
      }
    },
    [router]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("invoice-created", handleInvoice);

      return () => {
        window.removeEventListener("invoice-created", handleInvoice);
      };
    }
  }, [handleInvoice]);

  return <PaymentWidget type="request" />;
}
