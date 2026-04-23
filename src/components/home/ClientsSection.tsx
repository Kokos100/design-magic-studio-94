import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import technopolisLogo from "@/assets/client-technopolis-moscow.png";
import nizhnyNovgorodGovLogo from "@/assets/client-nizhny-novgorod-gov.png";
import pharmaSoftLogo from "@/assets/client-pharma-soft.png";

const clients = [
  { name: "Технополис Москва", logo: technopolisLogo },
  { name: "Правительство Нижегородской области", logo: nizhnyNovgorodGovLogo },
  { name: "Фарма Софт", logo: pharmaSoftLogo },
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

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem key={client.name} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="group flex h-28 lg:h-32 items-center justify-center rounded-2xl border border-border bg-card/70 px-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-medium">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-16 lg:max-h-20 max-w-full object-contain transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}