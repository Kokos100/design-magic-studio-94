import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, Heart, Share2, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const articlesData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  views: number;
  likes: number;
}> = {
  "1": {
    title: "Тренды веб-разработки 2024: что важно знать",
    excerpt: "Обзор ключевых технологий и подходов, которые определяют современную веб-разработку.",
    content: `
      <p>2024 год обещает быть богатым на инновации в мире веб-разработки. Рассмотрим ключевые тренды, которые уже сейчас формируют будущее индустрии.</p>
      
      <h2>1. AI-Powered Development</h2>
      <p>Искусственный интеллект всё глубже проникает в процесс разработки. Инструменты вроде GitHub Copilot и ChatGPT значительно ускоряют написание кода и помогают решать сложные задачи.</p>
      
      <h2>2. Edge Computing</h2>
      <p>Выполнение кода на edge-серверах, ближе к пользователю, становится стандартом для высокопроизводительных приложений. Vercel Edge Functions, Cloudflare Workers — все крупные платформы инвестируют в это направление.</p>
      
      <h2>3. Server Components</h2>
      <p>React Server Components меняют подход к рендерингу. Серверные компоненты позволяют уменьшить размер bundle и улучшить производительность без усложнения архитектуры.</p>
      
      <h2>Заключение</h2>
      <p>Веб-разработка продолжает эволюционировать. Главное — следить за трендами и выбирать технологии, которые действительно решают проблемы вашего проекта.</p>
    `,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    category: "Разработка",
    date: "15 января 2024",
    author: "Алексей Смирнов",
    views: 1250,
    likes: 89,
  },
  "2": {
    title: "Как провести UX-исследование для стартапа",
    excerpt: "Практические советы по проведению пользовательских исследований с ограниченным бюджетом.",
    content: `
      <p>Проведение UX-исследований критически важно для успеха продукта, но часто кажется дорогим и сложным. Рассмотрим, как проводить качественные исследования с ограниченными ресурсами.</p>
      
      <h2>1. Начните с проблемных интервью</h2>
      <p>5-10 интервью с потенциальными пользователями могут дать больше инсайтов, чем любой опрос. Главное — задавать открытые вопросы и слушать.</p>
      
      <h2>2. Используйте бесплатные инструменты</h2>
      <p>Google Forms для опросов, Figma для прототипов, Zoom для удалённых интервью — качественное исследование не требует дорогих инструментов.</p>
      
      <h2>3. Тестируйте на реальных пользователях</h2>
      <p>Покажите прототип 5 пользователям — это выявит большинство проблем с юзабилити. Не нужны сотни респондентов для первых итераций.</p>
    `,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop",
    category: "Дизайн",
    date: "10 января 2024",
    author: "Мария Петрова",
    views: 980,
    likes: 67,
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const article = id ? articlesData[id] : null;

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-12 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Статья не найдена</h1>
          <Button asChild>
            <Link to="/blog">Вернуться к блогу</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 pb-8 lg:pt-32 lg:pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Все статьи
            </Link>
            
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {article.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {article.views} просмотров
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-video object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto prose prose-lg prose-gray dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Engagement */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto flex items-center justify-between py-6 border-t border-b border-border">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Heart className="h-5 w-5" />
                <span>{article.likes}</span>
              </button>
              <button
                onClick={() => {
                  navigator.share?.({ title: article.title, url: window.location.href });
                }}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Share2 className="h-5 w-5" />
                <span>Поделиться</span>
              </button>
            </div>
            <Button variant="gradient" asChild>
              <Link to="/blog">Читать ещё</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;