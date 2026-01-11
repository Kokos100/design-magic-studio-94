import { motion } from "framer-motion";

const technologies = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL"] },
  { category: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
];

export function TechStackSection() {
  return (
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
            Технологии
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            С чем мы работаем
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Используем современный стек технологий для создания надёжных 
            и масштабируемых решений
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4 pb-4 border-b border-border">
                {tech.category}
              </h3>
              <ul className="space-y-3">
                {tech.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
