import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = {
  navigation: [
    { href: "/projects", label: "Проекты" },
    { href: "/services", label: "Услуги" },
    { href: "/blog", label: "Блог" },
    { href: "/contacts", label: "Контакты" },
  ],
  services: [
    { href: "/services", label: "Веб-разработка" },
    { href: "/services", label: "Мобильные приложения" },
    { href: "/services", label: "UI/UX Дизайн" },
    { href: "/services", label: "Интеграции" },
  ],
  social: [
    { href: "#", label: "Telegram" },
    { href: "#", label: "LinkedIn" },
    { href: "#", label: "Behance" },
    { href: "#", label: "GitHub" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Tomorrow IT" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Создаём цифровые продукты, которые работают на бизнес. 
              Веб-разработка, мобильные приложения и дизайн.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tomorrow IT
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Навигация</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Связаться</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@tomorrow-it.com"
              className="text-sm font-medium text-primary hover:underline"
            >
              hello@tomorrow-it.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
