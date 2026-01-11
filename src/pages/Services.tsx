import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Palette, Settings, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "web",
    icon: Code,
    title: "Веб-разработка",
    description: "Создаём современные веб-приложения любой сложности: от корпоративных сайтов до высоконагруженных сервисов.",
    features: [
      "React, Vue.js, Next.js",
      "Node.js, Python, Go",
      "PostgreSQL, MongoDB",
      "REST API, GraphQL",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Мобильные приложения",
    description: "Разрабатываем кроссплатформенные и нативные приложения для iOS и Android.",
    features: [
      "React Native, Flutter",
      "Swift, Kotlin",
      "Push-уведомления",
      "Интеграция с платежами",
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Дизайн",
    description: "Проектируем интерфейсы, которые нравятся пользователям и решают бизнес-задачи.",
    features: [
      "UX-исследования",
      "Прототипирование",
      "Дизайн-системы",
      "User Testing",
    ],
  },
  {
    id: "integration",
    icon: Settings,
    title: "Интеграции",
    description: "Связываем системы между собой: CRM, ERP, платёжные системы, внешние API.",
    features: [
      "API-интеграции",
      "1C, Битрикс24",
      "Stripe, PayPal",
      "Аналитика",
    ],
  },
  {
    id: "optimization",
    icon: Zap,
    title: "Оптимизация",
    description: "Ускоряем существующие приложения и оптимизируем инфраструктуру.",
    features: [
      "Performance audit",
      "Code refactoring",
      "Database optimization",
      "Caching strategies",
    ],
  },
  {
    id: "support",
    icon: Shield,
    title: "Поддержка",
    description: "Обеспечиваем бесперебойную работу ваших продуктов и оперативно решаем проблемы.",
    features: [
      "Мониторинг 24/7",
      "Резервное копирование",
      "Обновления безопасности",
      "Техническая поддержка",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-medium mb-3 block">
              Услуги
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Что мы делаем
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Полный цикл разработки цифровых продуктов: от исследования 
              и дизайна до запуска и поддержки.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent" asChild>
                  <Link to="/contacts">
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium mb-3 block">
              Процесс
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Как мы работаем
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Анализ", description: "Изучаем бизнес, аудиторию и конкурентов" },
              { step: "02", title: "Дизайн", description: "Проектируем интерфейсы и архитектуру" },
              { step: "03", title: "Разработка", description: "Пишем код и проводим тестирование" },
              { step: "04", title: "Запуск", description: "Деплоим и обеспечиваем поддержку" },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Расскажите о вашей задаче — мы подберём оптимальное решение
            </p>
            <Button variant="gradient" size="xl" asChild>
              <Link to="/contacts">
                Обсудить проект
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;