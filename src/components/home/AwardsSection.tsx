import { motion } from "framer-motion";

const awards = [
  { year: "2024", title: "Лучший веб-продукт", organization: "Tagline Awards" },
  { year: "2023", title: "Digital Agency of the Year", organization: "Рейтинг Рунета" },
  { year: "2023", title: "Best UX Design", organization: "Awwwards" },
  { year: "2022", title: "Золото в Mobile", organization: "CSS Design Awards" },
];

const clients = [
  "Сбербанк", "Яндекс", "Тинькофф", "МТС", "Ozon", "VK"
];

export function AwardsSection() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-mint text-sm font-medium mb-3 block">
              Достижения
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Награды и признание
            </h2>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between py-4 border-b border-background/10"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{award.title}</h3>
                    <p className="text-background/60 text-sm">{award.organization}</p>
                  </div>
                  <span className="text-mint font-medium">{award.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-mint text-sm font-medium mb-3 block">
              Клиенты
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Нам доверяют лидеры
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-center h-24 rounded-xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
                >
                  <span className="text-lg font-semibold text-background/80">
                    {client}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
