import { motion } from "framer-motion";
import { Users, Target, Zap, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Команда экспертов",
    description: "Разработчики, дизайнеры и аналитики с опытом работы в крупных проектах",
  },
  {
    icon: Target,
    title: "Фокус на результат",
    description: "Каждое решение направлено на достижение бизнес-целей клиента",
  },
  {
    icon: Zap,
    title: "Современные технологии",
    description: "Используем актуальный стек технологий для создания надёжных продуктов",
  },
  {
    icon: Award,
    title: "Качество кода",
    description: "Следуем best practices и поддерживаем высокие стандарты разработки",
  },
];

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium mb-3 block">
              О нас
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Создаём технологии{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                будущего
              </span>{" "}
              уже сегодня
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tomorrow IT — это команда профессионалов, которая помогает бизнесу 
              расти с помощью современных digital-решений. Мы работаем с компаниями 
              разного масштаба: от стартапов до крупных корпораций.
            </p>
            <p className="text-muted-foreground">
              Наш подход основан на глубоком понимании потребностей клиента, 
              использовании проверенных методологий и постоянном стремлении 
              к совершенству. Каждый проект для нас — это возможность создать 
              что-то значимое.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
