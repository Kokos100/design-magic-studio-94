import { motion } from "framer-motion";
import { Eye, Heart, Share2, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const articles = [
  {
    id: 1,
    title: "Тренды веб-разработки 2024: что важно знать",
    excerpt: "Обзор ключевых технологий и подходов, которые определяют современную веб-разработку.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    category: "Разработка",
    date: "15 января 2024",
    views: 1250,
    likes: 89,
  },
  {
    id: 2,
    title: "Как провести UX-исследование для стартапа",
    excerpt: "Практические советы по проведению пользовательских исследований с ограниченным бюджетом.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
    category: "Дизайн",
    date: "10 января 2024",
    views: 980,
    likes: 67,
  },
  {
    id: 3,
    title: "Микросервисы vs монолит: что выбрать",
    excerpt: "Разбираем плюсы и минусы обоих подходов и помогаем определиться с архитектурой.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    category: "Архитектура",
    date: "5 января 2024",
    views: 1420,
    likes: 112,
  },
  {
    id: 4,
    title: "Оптимизация производительности React-приложений",
    excerpt: "Лучшие практики и инструменты для создания быстрых React-приложений.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    category: "Разработка",
    date: "28 декабря 2023",
    views: 2100,
    likes: 156,
  },
  {
    id: 5,
    title: "Создание дизайн-системы с нуля",
    excerpt: "Пошаговое руководство по созданию масштабируемой дизайн-системы для продукта.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "Дизайн",
    date: "20 декабря 2023",
    views: 1650,
    likes: 134,
  },
  {
    id: 6,
    title: "CI/CD для начинающих: полное руководство",
    excerpt: "Всё, что нужно знать о непрерывной интеграции и доставке для вашего проекта.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop",
    category: "DevOps",
    date: "15 декабря 2023",
    views: 890,
    likes: 45,
  },
];

const Blog = () => {
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
              Блог
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Статьи и новости
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Делимся опытом, разбираем кейсы и рассказываем о трендах 
              в мире разработки и дизайна.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${article.id}`} className="block">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {article.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {article.likes}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigator.share?.({ title: article.title, url: window.location.href });
                      }}
                      className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
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

export default Blog;