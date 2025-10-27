import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    {
      title: 'ZALA 421-16E5',
      category: 'Разведывательный комплекс',
      description: 'Многофункциональный беспилотный комплекс вертикального взлёта',
      specs: ['Радиус: 25 км', 'Время: 2.5 часа', 'Масса: 10 кг'],
      image: 'drone-1'
    },
    {
      title: 'ZALA 421-08',
      category: 'Беспилотная система',
      description: 'Компактная разведывательная система для оперативных задач',
      specs: ['Радиус: 10 км', 'Время: 1 час', 'Масса: 5 кг'],
      image: 'drone-2'
    },
    {
      title: 'ZALA Ланцет',
      category: 'Барражирующий боеприпас',
      description: 'Высокоточный комплекс для поражения целей',
      specs: ['Радиус: 40 км', 'Время: 40 мин', 'Масса: 12 кг'],
      image: 'drone-3'
    },
    {
      title: 'ZALA Куб',
      category: 'Комплекс РЭБ',
      description: 'Система радиоэлектронной борьбы с БПЛА',
      specs: ['Радиус: 2 км', 'Частоты: GPS/ГЛОНАСС', 'Мобильность: Высокая'],
      image: 'reb-1'
    }
  ];

  const services = [
    {
      icon: 'Radar',
      title: 'Воздушный мониторинг',
      description: 'Наблюдение за объектами и территориями в режиме реального времени'
    },
    {
      icon: 'Camera',
      title: 'Аэрофотосъёмка',
      description: 'Высокоточная фото и видеосъёмка с беспилотных систем'
    },
    {
      icon: 'Scan',
      title: 'Лазерное сканирование',
      description: 'Создание 3D-моделей местности и объектов'
    },
    {
      icon: 'Map',
      title: 'Картографирование',
      description: 'Создание детальных карт и планов территорий'
    }
  ];

  const advantages = [
    { number: '20+', text: 'Лет опыта' },
    { number: '1000+', text: 'Комплексов поставлено' },
    { number: '50+', text: 'Патентов' },
    { number: '24/7', text: 'Техподдержка' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <Icon name="Plane" size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">ZALA AERO</div>
                <div className="text-xs text-muted-foreground">Беспилотные системы</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Продукция
              </a>
              <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                О компании
              </a>
              <a href="#contacts" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Связаться
              </Button>
            </nav>

            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                Ведущий разработчик БПЛА
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Беспилотные системы нового поколения
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Разработка и производство беспилотных летательных аппаратов, систем РЭБ и комплексного оборудования для военного и гражданского применения
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                  Каталог продукции
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Play" size={20} />
                  Смотреть видео
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Icon name="Plane" size={200} className="text-primary/30" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Комплексов поставлено</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Наша продукция
            </h2>
            <p className="text-lg text-muted-foreground">
              Полный спектр беспилотных систем для различных задач
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                  <Icon name="Plane" size={80} className="text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    {product.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((spec, i) => (
                      <span key={i} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Услуги
            </h2>
            <p className="text-lg text-muted-foreground">
              Полный комплекс услуг по применению беспилотных систем
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon as any} size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
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
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ZALA AERO — ведущий российский разработчик и производитель беспилотных авиационных систем. 
                Мы создаём технологичные решения для обороны и гражданского применения.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Наши беспилотные комплексы применяются для разведки, мониторинга, картографирования территорий 
                и решения специальных задач. Собственное производство и научная база позволяют нам оперативно 
                разрабатывать и внедрять инновационные технологии.
              </p>
              <Button size="lg" className="gap-2">
                Узнать больше
                <Icon name="ArrowRight" size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {advantages.map((item, index) => (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border hover:border-primary transition-colors">
                  <div className="text-5xl font-bold text-primary mb-3">{item.number}</div>
                  <div className="text-muted-foreground font-medium">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Свяжитесь с нами для консультации по выбору оптимального решения
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Icon name="Phone" size={20} />
                +7 (800) 555-35-35
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 gap-2">
                <Icon name="Mail" size={20} />
                info@zala-aero.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-card border-t border-border py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                  <Icon name="Plane" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">ZALA AERO</div>
                  <div className="text-xs text-muted-foreground">Беспилотные системы</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Инновационные технологии для безопасности и развития
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Продукция</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">БПЛА</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Системы РЭБ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Комплексы связи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Программное обеспечение</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  +7 (800) 555-35-35
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  info@zala-aero.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={14} />
                  г. Ижевск, Россия
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ZALA AERO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
