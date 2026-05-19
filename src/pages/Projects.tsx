import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const categories = ["Все", "Веб-разработка", "Мобильные приложения", "UI/UX Дизайн"];

const projects = [
  {
    id: 1,
    title: "Финтех платформа",
    category: "Веб-разработка",
    description: "Платформа для управления инвестициями с аналитикой в реальном времени",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "LuxMarket",
    category: "Мобильные приложения",
    description: "Маркетплейс люксовых вещей с верификацией оригинальности и чатом с продавцами",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "Stripe", "AI-верификация"],
  },
  {
    id: 3,
    title: "HR-система",
    category: "UI/UX Дизайн",
    description: "Полный редизайн корпоративной HR-системы для крупного холдинга",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    tags: ["Figma", "Design System", "UX Research"],
  },
  {
    id: 4,
    title: "Логистическая платформа",
    category: "Веб-разработка",
    description: "Система управления доставкой с трекингом в реальном времени",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Python", "MongoDB"],
  },
  {
    id: 5,
    title: "Медицинское приложение",
    category: "Мобильные приложения",
    description: "Телемедицина и запись к врачам с видеоконсультациями",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["Flutter", "Node.js", "WebRTC"],
  },
  {
    id: 6,
    title: "Корпоративный портал",
    category: "UI/UX Дизайн",
    description: "Дизайн внутреннего портала для международной компании",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Figma", "Prototyping", "User Testing"],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredProjects = activeCategory === "Все"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
              Портфолио
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Наши проекты
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Избранные работы из нашего портфолио. Каждый проект — 
              результат глубокого погружения в задачи клиента.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-brand text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/projects/${project.id}`} className="block">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                        <ArrowUpRight className="h-5 w-5 text-foreground" />
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-primary font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;