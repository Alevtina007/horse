import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contacts/contact-form";
import { ContactInfo } from "@/components/contacts/contact-info";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с конюшней «Дикое Поле»: телефон, мессенджеры, адрес и форма заявки.",
};

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Давайте познакомимся"
        description="Позвоните, напишите или оставьте заявку — ответим в ближайшее время и подберём удобный день для визита."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <ContactInfo />
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
