import { LeadForm } from "./lead-form";

export function LeadFormSection() {
  return (
    <section id="contact" className="bg-[#0d1b2e] py-24 lg:py-36">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center">
          <div className="mb-6 inline-block border border-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/50">
            Оставить заявку
          </div>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight text-white">
            Получите консультацию
          </h2>
          <p className="mt-5 text-base text-white/50">
            Оставьте контакты — мы свяжемся и поможем разобраться с покупкой
          </p>
        </div>

        <div
          className="reveal mt-14 border border-white/10 bg-white/5 p-8 lg:p-12"
          style={{ animationDelay: "0.1s" }}
        >
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
