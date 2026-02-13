"use client";

import Link from "next/link";
import * as React from "react";
import emailjs from "@emailjs/browser";
import { contactLinks } from "@/constants/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function ContactSection() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const autoReplyTemplateId =
      process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage("Email service is not configured yet.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          message: formData.get("message"),
          to_email: "info@jatinpanghal.com",
        },
        publicKey
      );
      if (autoReplyTemplateId) {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          {
            from_name: formData.get("name"),
            from_email: formData.get("email"),
            message: formData.get("message"),
            to_email: formData.get("email"),
          },
          publicKey
        );
      }
      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 section-padding lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-6">
          <SectionHeader
            title="Contact"
            description="Let's build something ambitious together."
          />
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col gap-1 rounded-[var(--radius-lg)] border border-border/70 bg-card/70 p-4 text-sm text-muted-foreground transition hover:border-foreground hover:text-foreground"
              >
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">
              {link.label}
            </span>
            <span className="text-base font-semibold text-foreground">
              {link.value}
            </span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal className="rounded-[var(--radius-lg)] border border-border/70 bg-card/70 p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                  className="w-full rounded-[var(--radius-lg)] border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  name="email"
                  required
                  className="w-full rounded-[var(--radius-lg)] border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Project details
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about the product, timeline, and goals."
                name="message"
                required
                className="w-full rounded-[var(--radius-lg)] border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "sent" ? (
              <p className="text-sm text-foreground">
                Message sent successfully.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-muted-foreground">
                {errorMessage ?? "Unable to send message."}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
