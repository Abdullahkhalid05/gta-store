"use client";

import { useState } from "react";

export default function RequestQuotePage() {
  const [form, setForm] = useState({
    businessName: "",
    contactPerson: "",
    phone: "",
    email: "",
    deliveryAddress: "",
    productsNeeded: "",
    quantity: "",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");

      setForm({
        businessName: "",
        contactPerson: "",
        phone: "",
        email: "",
        deliveryAddress: "",
        productsNeeded: "",
        quantity: "",
        notes: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="py-20 bg-brand-grey min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-text">
            Request a Quote
          </h1>
          <p className="text-muted-foreground mt-3">
            Fill out the form below and our team will get back to you with pricing.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-8 shadow-sm border border-border flex flex-col gap-5"
        >
          <div>
            <label className="text-sm font-medium text-brand-text">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-fresh"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-brand-text">
              Contact Person
            </label>
            <input
              type="text"
              name="contactPerson"
              value={form.contactPerson}
              onChange={handleChange}
              className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-fresh"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-brand-text">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-fresh"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-brand-text">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-fresh"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-brand-text">
              Delivery Address
            </label>
            <input
              type="text"
              name="deliveryAddress"
              value={form.deliveryAddress}
              onChange={handleChange}
              className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-fresh"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-brand-text">
              Products Needed
            </label>
            <textarea
              name="productsNeeded"
              rows={3}
              value={form.productsNeeded}
              onChange={handleChange}
              className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-fresh resize-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-brand-text">
              Quantity Required
            </label>
            <input
              type="text"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-fresh"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-brand-text">
              Additional Notes
            </label>
            <textarea
              name="notes"
              rows={3}
              value={form.notes}
              onChange={handleChange}
              className="w-full mt-1.5 px-4 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-fresh resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-brand-fresh hover:bg-green-600 disabled:opacity-60 text-white font-semibold py-3 rounded-md transition-colors duration-200"
          >
            {status === "loading"
              ? "Submitting..."
              : "Submit Quote Request"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm">
              Request submitted successfully.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}