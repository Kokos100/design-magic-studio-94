import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-violet-deep to-secondary opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Готовы создать нечто особенное?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Расскажите о вашем проекте, и мы поможем превратить идею 
            в работающий продукт
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              size="xl"
              className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90"
              asChild
            >
              <Link to="/contacts">
                Обсудить проект
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:border-primary-foreground"
              asChild
            >
              <Link to="/projects">Смотреть работы</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
