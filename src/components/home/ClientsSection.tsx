import { motion } from "framer-motion";

const clients = [
  "LUXE",
  "NOVA",
  "AURUM",
  "ATLAS",
  "MONO",
  "PRIME",
  "VELVET",
  "ORBIT",
];

export function ClientsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/60">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-primary text-sm font-medium mb-3 block">
            Доверяют нам
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Наши клиенты
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group flex h-28 lg:h-32 items-center justify-center rounded-2xl border border-border bg-card/70 px-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-medium"
            >
              <span className="text-xl lg:text-2xl font-bold tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}