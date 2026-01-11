import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Users, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const projectsData: Record<string, {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  client: string;
  year: string;
  duration: string;
  team: string;
}> = {
  "1": {
    title: "Финтех платформа",
    category: "Веб-разработка",
    description: "Платформа для управления инвестициями с аналитикой в реальном времени",
    fullDescription: "Разработали современную платформу для управления инвестиционным портфелем. Система включает аналитику в реальном времени, автоматическое ребалансирование портфеля и интеграцию с основными биржами. Особое внимание уделили безопасности и производительности системы.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket", "Docker"],
    client: "FinVest Group",
    year: "2024",
    duration: "6 месяцев",
    team: "8 человек",
  },
  "2": {
    title: "E-commerce маркетплейс",
    category: "Мобильные приложения",
    description: "Мобильное приложение для маркетплейса с интеграцией платежей",
    fullDescription: "Создали кроссплатформенное мобильное приложение для маркетплейса с миллионами товаров. Реализовали удобный поиск, персонализированные рекомендации и бесшовную интеграцию с платёжными системами.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    ],
    tags: ["React Native", "Stripe", "Firebase", "Redux", "Node.js"],
    client: "ShopMart",
    year: "2024",
    duration: "4 месяца",
    team: "6 человек",
  },
  "3": {
    title: "HR-система",
    category: "UI/UX Дизайн",
    description: "Полный редизайн корпоративной HR-системы для крупного холдинга",
    fullDescription: "Провели полный редизайн корпоративной HR-системы. Начали с глубокого исследования пользователей, создали новую дизайн-систему и реализовали прототипы всех ключевых сценариев использования.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop",
    ],
    tags: ["Figma", "Design System", "UX Research", "Prototyping", "User Testing"],
    client: "TechCorp Holdings",
    year: "2023",
    duration: "3 месяца",
    team: "4 человека",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-12 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Проект не найден</h1>
          <Button asChild>
            <Link to="/projects">Вернуться к проектам</Link>
          </Button>
        </div>
      </Layout>
    );
  }

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
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Все проекты
            </Link>
            <span className="text-primary text-sm font-medium mb-3 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Клиент", value: project.client },
              { icon: Calendar, label: "Год", value: project.year },
              { icon: Clock, label: "Длительность", value: project.duration },
              { icon: Users, label: "Команда", value: project.team },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-xl bg-muted/50 border border-border"
              >
                <item.icon className="h-5 w-5 text-primary mb-3" />
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="rounded-xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Технологии
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Хотите похожий проект?
          </h2>
          <p className="text-muted-foreground mb-8">
            Расскажите о вашей задаче, и мы предложим решение
          </p>
          <Button variant="gradient" size="lg" asChild>
            <Link to="/contacts">
              Обсудить проект
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;