export const siteConfig = {
  name: "Дикое Поле",
  tagline: "Конюшня и коневодческое хозяйство",
  description:
    "Продажа проверенных лошадей и услуги для всадников: подбор, обучение, пансион и сопровождение — в предгорьях, среди простора и тишины.",
  phone: "+7 (900) 123-45-67",
  phoneHref: "+79001234567",
  whatsapp: "https://wa.me/79001234567",
  telegram: "https://t.me/dikoe_pole",
  email: "info@dikoe-pole.ru",
  address: "Краснодарский край, ст. Убинская, конный двор «Дикое Поле»",
  workingHours: "Ежедневно, 8:00–20:00",
  ctaLabel: "Оставить заявку",
} as const;

export const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги и цены" },
  { href: "/about", label: "Обо мне" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
] as const;
