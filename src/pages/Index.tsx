import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      title: 'БПЛА Разведка',
      description: 'Современные беспилотные системы для воздушной разведки',
      icon: 'Plane',
    },
    {
      title: 'Комплексы РЭБ',
      description: 'Системы радиоэлектронной борьбы нового поколения',
      icon: 'Radio',
    },
    {
      title: 'Системы связи',
      description: 'Защищённые каналы передачи данных',
      icon: 'Antenna',
    },
    {
      title: 'Наземные станции',
      description: 'Мобильные комплексы управления',
      icon: 'Monitor',
    },
  ];

  const technologies = [
    {
      title: 'ИИ и автономность',
      description: 'Системы автоматического распознавания и принятия решений',
      icon: 'Cpu',
    },
    {
      title: 'Композитные материалы',
      description: 'Легкие и прочные конструкции нового поколения',
      icon: 'Shield',
    },
    {
      title: 'Энергоэффективность',
      description: 'Увеличенная продолжительность работы',
      icon: 'Battery',
    },
    {
      title: 'Защита данных',
      description: 'Шифрование и безопасность передачи информации',
      icon: 'Lock',
    },
  ];

  const news = [
    {
      date: '15 октября 2024',
      title: 'Новая линейка беспилотных систем',
      description: 'Представлены три новые модели БПЛА с увеличенным радиусом действия',
    },
    {
      date: '8 октября 2024',
      title: 'Партнёрство с ведущими НИИ',
      description: 'Подписано соглашение о совместной разработке систем РЭБ',
    },
    {
      date: '1 октября 2024',
      title: 'Расширение производства',
      description: 'Запуск второй производственной линии в Санкт-Петербурге',
    },
  ];

  const stats = [
    { value: '15+', label: 'Лет на рынке' },
    { value: '500+', label: 'Сотрудников' },
    { value: '200+', label: 'Разработок' },
    { value: '50+', label: 'Патентов' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={28} className="text-primary" />
            <span className="text-xl font-bold">TechAero</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('products')} className="text-sm hover:text-primary transition-colors">
              Продукция
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('technologies')} className="text-sm hover:text-primary transition-colors">
              Технологии
            </button>
            <button onClick={() => scrollToSection('news')} className="text-sm hover:text-primary transition-colors">
              Новости
            </button>
            <Button size="sm">Связаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Инновационные<br />
              <span className="text-primary">технологии</span><br />
              будущего
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Разработка и производство высокотехнологичных систем для обеспечения безопасности и развития технологий
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Узнать больше
                <Icon name="ArrowRight" size={20} />
              </Button>
              <Button size="lg" variant="outline">
                Каталог продукции
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Комплексные решения для различных задач в области высоких технологий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={product.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                TechAero — ведущий разработчик и производитель высокотехнологичного оборудования. 
                Мы создаём инновационные решения для промышленности и обороны.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша миссия — обеспечить технологическое лидерство через инновации, качество и надёжность.
              </p>
              <Button className="gap-2">
                Подробнее о компании
                <Icon name="ArrowRight" size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-8 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши технологии</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Передовые разработки и инновационные подходы к производству
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index}
                className="group hover:border-secondary transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon name={tech.icon as any} size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                  <CardDescription className="text-base">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Последние новости</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Следите за нашими достижениями и анонсами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card 
                key={index}
                className="group hover:border-primary transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="text-sm text-primary mb-2">{item.date}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors mb-3">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                    Читать далее
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
                <span className="text-lg font-bold">TechAero</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Инновационные технологии для будущего
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">БПЛА</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">РЭБ системы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Связь</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@techaero.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 TechAero. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
