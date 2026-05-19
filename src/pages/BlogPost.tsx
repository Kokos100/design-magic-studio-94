import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, Heart, Share2, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
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
      <p>2024 год стал переломным для веб-разработки. Технологии, которые казались экспериментальными ещё год назад, теперь становятся стандартом индустрии. В этой статье мы разберём ключевые тренды, которые уже сейчас формируют будущее веба.</p>
      
      <h2>1. AI-Powered Development</h2>
      <p>Искусственный интеллект кардинально изменил подход к написанию кода. GitHub Copilot, ChatGPT и Claude стали неотъемлемыми помощниками разработчиков по всему миру. По данным исследований, использование AI-ассистентов повышает продуктивность на 30-50%.</p>
      <p>Но важно понимать: AI не заменяет разработчика, а усиливает его возможности. Критическое мышление, архитектурные решения и понимание бизнес-логики остаются за человеком.</p>
      
      <h2>2. Edge Computing</h2>
      <p>Выполнение кода на edge-серверах — уже не роскошь, а необходимость для конкурентоспособных приложений. Когда код исполняется в 50-100 мс от пользователя вместо 200-500 мс, разница ощутима.</p>
      <p>Vercel Edge Functions, Cloudflare Workers, Deno Deploy — все крупные платформы предлагают edge-решения. В 2024 году мы видим миграцию не только статики, но и бизнес-логики на edge.</p>
      
      <h2>3. React Server Components</h2>
      <p>RSC меняют парадигму React-разработки. Серверные компоненты позволяют:</p>
      <ul>
        <li>Уменьшить размер JavaScript-бандла на 40-60%</li>
        <li>Выполнять тяжёлые операции на сервере</li>
        <li>Напрямую обращаться к базе данных из компонентов</li>
        <li>Улучшить SEO без дополнительных усилий</li>
      </ul>
      
      <h2>4. TypeScript — новый стандарт</h2>
      <p>TypeScript окончательно победил. Согласно State of JS 2023, более 80% разработчиков используют TypeScript в продакшене. Новые проекты на чистом JavaScript — редкость.</p>
      
      <h2>5. Tailwind CSS и utility-first</h2>
      <p>Utility-first подход доказал свою эффективность. Tailwind стал де-факто стандартом для быстрой разработки интерфейсов, особенно в сочетании с компонентными библиотеками вроде shadcn/ui.</p>
      
      <h2>Заключение</h2>
      <p>Веб-разработка в 2024 году — это скорость, производительность и developer experience. Главное — не гнаться за каждым трендом, а выбирать технологии, которые решают реальные проблемы вашего проекта.</p>
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
      <p>«У нас нет бюджета на UX-исследования» — фраза, которую мы слышим от каждого второго стартапа. Но правда в том, что качественное исследование не требует миллионных инвестиций. Расскажу, как провести полноценное UX-исследование, имея только время и желание.</p>
      
      <h2>Почему исследования критически важны</h2>
      <p>По статистике CB Insights, 35% стартапов закрываются из-за отсутствия рыночной потребности. Простое исследование за 2-3 недели может сэкономить месяцы разработки ненужного продукта.</p>
      
      <h2>Шаг 1: Проблемные интервью</h2>
      <p>Начните с 5-10 глубинных интервью с потенциальными пользователями. Это самый ценный источник инсайтов.</p>
      <p><strong>Правила хорошего интервью:</strong></p>
      <ul>
        <li>Задавайте открытые вопросы: «Расскажите о последнем случае, когда...»</li>
        <li>Спрашивайте о прошлом опыте, а не о гипотетическом будущем</li>
        <li>Молчите и слушайте — 80% времени говорит респондент</li>
        <li>Записывайте интервью (с разрешения) для последующего анализа</li>
      </ul>
      
      <h2>Шаг 2: Конкурентный анализ</h2>
      <p>Изучите, как решают проблему конкуренты. Создайте таблицу с ключевыми функциями и оцените каждого игрока. Почитайте отзывы в App Store и Google Play — там золотая жила пользовательских болей.</p>
      
      <h2>Шаг 3: Быстрое прототипирование</h2>
      <p>Не тратьте недели на идеальный дизайн. Используйте Figma для создания кликабельного прототипа за 1-2 дня. Главное — проверить гипотезу, а не впечатлить красотой.</p>
      
      <h2>Шаг 4: Юзабилити-тестирование</h2>
      <p>Покажите прототип 5 реальным пользователям. Исследования Якоба Нильсена показывают: 5 респондентов выявляют 85% проблем с юзабилити.</p>
      <p><strong>Формат тестирования:</strong></p>
      <ul>
        <li>Дайте конкретное задание: «Найдите и закажите красные кроссовки 42 размера»</li>
        <li>Попросите думать вслух</li>
        <li>Не помогайте и не подсказывайте</li>
        <li>Фиксируйте, где пользователь «спотыкается»</li>
      </ul>
      
      <h2>Бесплатные инструменты</h2>
      <ul>
        <li><strong>Google Forms</strong> — для опросов и сбора контактов</li>
        <li><strong>Figma</strong> — бесплатный тариф для прототипов</li>
        <li><strong>Zoom/Google Meet</strong> — для удалённых интервью</li>
        <li><strong>Notion</strong> — для документирования инсайтов</li>
        <li><strong>Hotjar</strong> — бесплатный тариф для записи сессий</li>
      </ul>
      
      <h2>Заключение</h2>
      <p>UX-исследование — это не роскошь, а инвестиция с высоким ROI. Потратив 2-3 недели на исследования, вы сэкономите месяцы на разработку продукта, который действительно нужен рынку.</p>
    `,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop",
    category: "Дизайн",
    date: "10 января 2024",
    author: "Мария Петрова",
    views: 980,
    likes: 67,
  },
  "3": {
    title: "Микросервисы vs монолит: что выбрать",
    excerpt: "Разбираем плюсы и минусы обоих подходов и помогаем определиться с архитектурой.",
    content: `
      <p>Споры между сторонниками микросервисов и монолита не утихают годами. Одни говорят, что микросервисы — единственный путь к масштабированию, другие — что это unnecessary complexity. Давайте разберёмся без фанатизма.</p>
      
      <h2>Что такое монолит</h2>
      <p>Монолитная архитектура — это единое приложение, где вся бизнес-логика, UI и работа с данными находятся в одной кодовой базе и деплоятся как один артефакт.</p>
      <p><strong>Преимущества монолита:</strong></p>
      <ul>
        <li>Простота разработки и отладки</li>
        <li>Единая кодовая база — легче понять систему целиком</li>
        <li>Простой деплой — один артефакт, одна конфигурация</li>
        <li>Нет сетевых задержек между компонентами</li>
        <li>Транзакции «из коробки»</li>
      </ul>
      
      <h2>Что такое микросервисы</h2>
      <p>Микросервисная архитектура — это набор небольших независимых сервисов, каждый из которых отвечает за свою бизнес-функцию и общается с другими через API.</p>
      <p><strong>Преимущества микросервисов:</strong></p>
      <ul>
        <li>Независимый деплой каждого сервиса</li>
        <li>Разные технологии для разных задач</li>
        <li>Горизонтальное масштабирование отдельных компонентов</li>
        <li>Изоляция сбоев — падение одного сервиса не убивает всё</li>
        <li>Маленькие команды могут работать автономно</li>
      </ul>
      
      <h2>Когда выбрать монолит</h2>
      <ul>
        <li>Стартап на ранней стадии — вам нужна скорость итераций</li>
        <li>Маленькая команда (до 10 разработчиков)</li>
        <li>Неопределённые требования — границы сервисов ещё не ясны</li>
        <li>Простой домен без необходимости независимого масштабирования</li>
      </ul>
      
      <h2>Когда выбрать микросервисы</h2>
      <ul>
        <li>Большая организация с множеством команд</li>
        <li>Высокие требования к масштабированию отдельных частей</li>
        <li>Чёткие границы доменов (bounded contexts)</li>
        <li>Необходимость использовать разные технологии</li>
        <li>Система уже работает и требования стабильны</li>
      </ul>
      
      <h2>Скрытые издержки микросервисов</h2>
      <p>Прежде чем переходить на микросервисы, честно оцените готовность команды:</p>
      <ul>
        <li>Нужна инфраструктура: Kubernetes, service mesh, observability</li>
        <li>Распределённые транзакции — боль и сложность</li>
        <li>Сетевые вызовы медленнее локальных</li>
        <li>Debugging распределённых систем требует новых навыков</li>
        <li>Дублирование кода между сервисами</li>
      </ul>
      
      <h2>Золотая середина: модульный монолит</h2>
      <p>Часто лучшее решение — модульный монолит. Вы получаете простоту деплоя монолита с чёткими границами модулей, которые в будущем можно выделить в сервисы.</p>
      
      <h2>Заключение</h2>
      <p>Нет универсального ответа. Начинайте с монолита, следите за болевыми точками, и переходите на микросервисы только когда для этого есть реальные причины, а не потому что «так делает Netflix».</p>
    `,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    category: "Архитектура",
    date: "5 января 2024",
    author: "Дмитрий Козлов",
    views: 1420,
    likes: 112,
  },
  "4": {
    title: "Оптимизация производительности React-приложений",
    excerpt: "Лучшие практики и инструменты для создания быстрых React-приложений.",
    content: `
      <p>Производительность — не оптимизация «на потом», а фундамент хорошего UX. В этой статье разберём проверенные техники оптимизации React-приложений, от простых до продвинутых.</p>
      
      <h2>1. Измеряйте, прежде чем оптимизировать</h2>
      <p>Преждевременная оптимизация — корень всех зол. Используйте инструменты профилирования:</p>
      <ul>
        <li><strong>React DevTools Profiler</strong> — анализ ререндеров</li>
        <li><strong>Chrome Performance</strong> — общий профиль производительности</li>
        <li><strong>Lighthouse</strong> — комплексный аудит</li>
        <li><strong>Web Vitals</strong> — Core Web Vitals в реальном времени</li>
      </ul>
      
      <h2>2. Избегайте лишних ререндеров</h2>
      <p>Каждый ререндер — это работа. Минимизируйте их:</p>
      <p><strong>React.memo</strong> — мемоизация компонентов:</p>
      <pre><code>const ExpensiveComponent = React.memo(({ data }) => {
  // Рендерится только при изменении data
  return &lt;div&gt;{data}&lt;/div&gt;;
});</code></pre>
      
      <p><strong>useMemo</strong> — мемоизация вычислений:</p>
      <pre><code>const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.price - b.price);
}, [items]);</code></pre>
      
      <p><strong>useCallback</strong> — стабильные ссылки на функции:</p>
      <pre><code>const handleClick = useCallback((id) => {
  setSelected(id);
}, []);</code></pre>
      
      <h2>3. Ленивая загрузка компонентов</h2>
      <p>Не загружайте всё приложение сразу. Используйте React.lazy и Suspense:</p>
      <pre><code>const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  return (
    &lt;Suspense fallback={&lt;Loader /&gt;}&gt;
      &lt;Dashboard /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>
      
      <h2>4. Виртуализация длинных списков</h2>
      <p>Рендерить 10 000 элементов — плохая идея. Используйте виртуализацию:</p>
      <ul>
        <li><strong>react-window</strong> — легковесное решение</li>
        <li><strong>@tanstack/react-virtual</strong> — современная альтернатива</li>
      </ul>
      
      <h2>5. Оптимизация изображений</h2>
      <ul>
        <li>Используйте современные форматы: WebP, AVIF</li>
        <li>Lazy loading: loading="lazy"</li>
        <li>Правильные размеры: не грузите 4K для превью 200x200</li>
        <li>CDN с автоматической оптимизацией</li>
      </ul>
      
      <h2>6. Правильная работа со стейтом</h2>
      <ul>
        <li>Держите стейт как можно ниже в дереве</li>
        <li>Разделяйте контексты по частоте обновлений</li>
        <li>Используйте селекторы в Zustand/Redux</li>
      </ul>
      
      <h2>7. Bundle size</h2>
      <ul>
        <li>Анализируйте бандл: <code>npx vite-bundle-visualizer</code></li>
        <li>Tree shaking: импортируйте только нужное</li>
        <li>Динамические импорты для тяжёлых библиотек</li>
      </ul>
      
      <h2>Заключение</h2>
      <p>Оптимизация — итеративный процесс. Измеряйте, находите узкие места, оптимизируйте, снова измеряйте. И помните: лучшая оптимизация — та, которую не пришлось делать, потому что код изначально написан правильно.</p>
    `,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
    category: "Разработка",
    date: "28 декабря 2023",
    author: "Алексей Смирнов",
    views: 2100,
    likes: 156,
  },
  "5": {
    title: "Создание дизайн-системы с нуля",
    excerpt: "Пошаговое руководство по созданию масштабируемой дизайн-системы для продукта.",
    content: `
      <p>Дизайн-система — это не просто набор компонентов, а единый язык коммуникации между дизайнерами и разработчиками. Расскажу, как построить дизайн-систему, которая будет жить и развиваться вместе с продуктом.</p>
      
      <h2>Зачем нужна дизайн-система</h2>
      <ul>
        <li><strong>Консистентность</strong> — единый визуальный язык во всём продукте</li>
        <li><strong>Скорость</strong> — не изобретаем кнопку каждый раз заново</li>
        <li><strong>Масштабирование</strong> — новые фичи собираются из готовых блоков</li>
        <li><strong>Качество</strong> — компоненты протестированы и доступны</li>
      </ul>
      
      <h2>Шаг 1: Аудит существующего UI</h2>
      <p>Начните с инвентаризации. Соберите скриншоты всех экранов и выпишите:</p>
      <ul>
        <li>Сколько вариантов кнопок используется?</li>
        <li>Какие цвета применяются и где?</li>
        <li>Сколько типографических стилей?</li>
        <li>Какие паттерны повторяются?</li>
      </ul>
      <p>Цель — увидеть хаос, который нужно систематизировать.</p>
      
      <h2>Шаг 2: Определите токены</h2>
      <p>Токены — атомарные единицы дизайн-системы:</p>
      <p><strong>Цвета:</strong></p>
      <ul>
        <li>Primary, Secondary, Accent</li>
        <li>Нейтральные (gray scale)</li>
        <li>Семантические (success, warning, error)</li>
        <li>Фоновые и текстовые</li>
      </ul>
      <p><strong>Типографика:</strong></p>
      <ul>
        <li>Семейства шрифтов (1-2 максимум)</li>
        <li>Размеры (шкала, например 12, 14, 16, 18, 24, 32, 48)</li>
        <li>Начертания (regular, medium, bold)</li>
        <li>Line-height и letter-spacing</li>
      </ul>
      <p><strong>Отступы и сетка:</strong></p>
      <ul>
        <li>Базовая единица (4px или 8px)</li>
        <li>Шкала отступов (4, 8, 12, 16, 24, 32, 48, 64)</li>
        <li>Колоночная сетка</li>
      </ul>
      
      <h2>Шаг 3: Создайте базовые компоненты</h2>
      <p>Начните с атомов — минимальных элементов:</p>
      <ul>
        <li>Button (primary, secondary, ghost, destructive)</li>
        <li>Input (text, password, search)</li>
        <li>Checkbox, Radio, Switch</li>
        <li>Badge, Tag</li>
        <li>Avatar</li>
        <li>Icon set</li>
      </ul>
      
      <h2>Шаг 4: Документация</h2>
      <p>Компонент без документации — бесполезный компонент. Для каждого элемента опишите:</p>
      <ul>
        <li>Когда использовать (и когда НЕ использовать)</li>
        <li>Все варианты и состояния</li>
        <li>Примеры кода</li>
        <li>Accessibility guidelines</li>
      </ul>
      
      <h2>Шаг 5: Интеграция в код</h2>
      <p>Дизайн-система должна жить в коде. Рекомендую:</p>
      <ul>
        <li>CSS-переменные для токенов</li>
        <li>Tailwind CSS для utility-классов</li>
        <li>Headless-компоненты (Radix UI) + кастомные стили</li>
        <li>Storybook для документации и тестирования</li>
      </ul>
      
      <h2>Шаг 6: Governance</h2>
      <p>Дизайн-система — живой организм. Определите:</p>
      <ul>
        <li>Кто отвечает за систему (Design System Team)</li>
        <li>Процесс добавления новых компонентов</li>
        <li>Версионирование и changelog</li>
        <li>Регулярные review и обновления</li>
      </ul>
      
      <h2>Инструменты</h2>
      <ul>
        <li><strong>Figma</strong> — дизайн и документация</li>
        <li><strong>Storybook</strong> — разработка и тестирование компонентов</li>
        <li><strong>Chromatic</strong> — визуальное регрессионное тестирование</li>
        <li><strong>Style Dictionary</strong> — управление токенами</li>
      </ul>
      
      <h2>Заключение</h2>
      <p>Дизайн-система — это инвестиция. Первые месяцы будет казаться, что она замедляет работу. Но через полгода вы увидите, как команда собирает новые экраны за часы вместо дней.</p>
    `,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    category: "Дизайн",
    date: "20 декабря 2023",
    author: "Мария Петрова",
    views: 1650,
    likes: 134,
  },
  "6": {
    title: "CI/CD для начинающих: полное руководство",
    excerpt: "Всё, что нужно знать о непрерывной интеграции и доставке для вашего проекта.",
    content: `
      <p>CI/CD — это не магия, а набор практик и инструментов, которые делают релизы предсказуемыми и безопасными. В этом руководстве разберём основы от терминологии до первого пайплайна.</p>
      
      <h2>Что такое CI/CD</h2>
      <p><strong>Continuous Integration (CI)</strong> — практика частой интеграции изменений в общий репозиторий с автоматической проверкой (тесты, линтеры, сборка).</p>
      <p><strong>Continuous Delivery (CD)</strong> — автоматизация процесса доставки кода до production-ready состояния. Деплой происходит по кнопке.</p>
      <p><strong>Continuous Deployment</strong> — полная автоматизация: каждое изменение, прошедшее проверки, автоматически попадает в production.</p>
      
      <h2>Зачем это нужно</h2>
      <ul>
        <li><strong>Раннее обнаружение багов</strong> — проблемы видны сразу после коммита</li>
        <li><strong>Быстрая обратная связь</strong> — разработчик узнаёт о проблеме за минуты</li>
        <li><strong>Предсказуемые релизы</strong> — нет «релизного ада» по пятницам</li>
        <li><strong>Документирование процесса</strong> — пайплайн = документация</li>
      </ul>
      
      <h2>Анатомия пайплайна</h2>
      <p>Типичный CI/CD пайплайн состоит из этапов:</p>
      <ol>
        <li><strong>Checkout</strong> — получение кода из репозитория</li>
        <li><strong>Install</strong> — установка зависимостей</li>
        <li><strong>Lint</strong> — проверка code style</li>
        <li><strong>Test</strong> — запуск unit и integration тестов</li>
        <li><strong>Build</strong> — сборка приложения</li>
        <li><strong>Deploy</strong> — деплой на staging/production</li>
      </ol>
      
      <h2>GitHub Actions: быстрый старт</h2>
      <p>Создайте файл <code>.github/workflows/ci.yml</code>:</p>
      <pre><code>name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build</code></pre>
      
      <h2>Лучшие практики</h2>
      <p><strong>1. Быстрый feedback loop</strong></p>
      <p>Пайплайн должен завершаться за 5-10 минут. Если дольше — параллелизируйте задачи, кэшируйте зависимости.</p>
      
      <p><strong>2. Fail fast</strong></p>
      <p>Сначала быстрые проверки (lint), потом медленные (e2e тесты). Чем раньше упадём — тем быстрее узнаем.</p>
      
      <p><strong>3. Изолированные окружения</strong></p>
      <p>Каждый PR должен тестироваться в изолированном окружении. Preview deployments — must have.</p>
      
      <p><strong>4. Secrets management</strong></p>
      <p>Никогда не храните секреты в коде. Используйте GitHub Secrets, Vault, или аналоги.</p>
      
      <p><strong>5. Мониторинг пайплайнов</strong></p>
      <p>Отслеживайте время выполнения и success rate. Flaky тесты — враг продуктивности.</p>
      
      <h2>Популярные инструменты</h2>
      <ul>
        <li><strong>GitHub Actions</strong> — интеграция с GitHub, бесплатный тариф</li>
        <li><strong>GitLab CI</strong> — мощный встроенный CI для GitLab</li>
        <li><strong>CircleCI</strong> — быстрый и гибкий</li>
        <li><strong>Jenkins</strong> — self-hosted, максимальная кастомизация</li>
      </ul>
      
      <h2>Следующие шаги</h2>
      <p>После настройки базового CI/CD:</p>
      <ul>
        <li>Добавьте e2e тесты (Playwright, Cypress)</li>
        <li>Настройте preview deployments</li>
        <li>Внедрите semantic versioning и changelog</li>
        <li>Добавьте security scanning (Dependabot, Snyk)</li>
      </ul>
      
      <h2>Заключение</h2>
      <p>CI/CD — это культура, а не инструмент. Начните с малого: автоматические тесты на каждый PR. Постепенно добавляйте этапы. Через полгода вы не представите, как работали без этого.</p>
    `,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&h=600&fit=crop",
    category: "DevOps",
    date: "15 декабря 2023",
    author: "Дмитрий Козлов",
    views: 890,
    likes: 45,
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
      <SEO
        title={`${article.title} — Блог eloit`}
        description={article.excerpt}
        path={`/blog/${id}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          image: article.image,
          datePublished: article.date,
          author: { "@type": "Person", name: article.author },
        }}
      />
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