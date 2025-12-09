import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const sovietBikes = [
  {
    name: 'Иж Планета 5',
    year: '1987',
    power: '22 л.с.',
    weight: '158 кг',
    speed: '120 км/ч',
    price: '1800 руб.',
    priceEquiv: '~180 кг колбасы',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80'
  },
  {
    name: 'Днепр МТ-11',
    year: '1985',
    power: '32 л.с.',
    weight: '325 кг',
    speed: '105 км/ч',
    price: '2500 руб.',
    priceEquiv: '~250 кг колбасы',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80'
  },
  {
    name: 'Восход-3М',
    year: '1989',
    power: '14 л.с.',
    weight: '122 кг',
    speed: '100 км/ч',
    price: '900 руб.',
    priceEquiv: '~90 кг колбасы',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80'
  }
];

const modernBikes = [
  {
    name: 'Урал (2024)',
    year: '2024',
    power: '41 л.с.',
    weight: '345 кг',
    speed: '125 км/ч',
    price: '₽1 800 000',
    priceEquiv: '~12 зарплат',
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&q=80'
  },
  {
    name: 'Royal Enfield Himalayan',
    year: '2024',
    power: '24 л.с.',
    weight: '199 кг',
    speed: '140 км/ч',
    price: '₽450 000',
    priceEquiv: '~3 зарплаты',
    image: 'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=800&q=80'
  },
  {
    name: 'Honda CB650R',
    year: '2024',
    power: '95 л.с.',
    weight: '202 кг',
    speed: '220 км/ч',
    price: '₽950 000',
    priceEquiv: '~6 зарплат',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80'
  }
];

const stories = [
  {
    author: 'Владимир, 67 лет',
    bike: 'Иж Планета 3',
    era: 'СССР, 1978',
    text: 'Получил «Планету» по распределению на заводе. Три месяца ждал, а когда забрал — счастью не было предела. На ней в Крым съездил с друзьями, 2000 км туда-обратно. Ломалась часто, но починить мог на коленке с помощью плоскогубцев и отвертки.',
    icon: '🛠️'
  },
  {
    author: 'Алексей, 34 года',
    bike: 'BMW R 1250 GS',
    era: 'Россия, 2023',
    text: 'Купил GS для путешествий по России. За год объездил Байкал, Алтай, Кавказ. Электроника следит за всем: от давления в шинах до режима езды. Ни разу не сломался, только плановое ТО. Но если что — только в сервис, сам не полезешь.',
    icon: '⚙️'
  },
  {
    author: 'Игорь, 52 года',
    bike: 'Днепр МТ-10',
    era: 'СССР, 1985',
    text: 'Днепр был машиной престижа — с коляской, мощный, как танк. Возил в коляске жену и сына на дачу. Расход был конский, зато надежный. Помню, как всем двором чинили карбюратор — это был целый ритуал с чаем и анекдотами.',
    icon: '🏍️'
  }
];

const quizQuestions = [
  {
    question: 'Как вы относитесь к ремонту техники своими руками?',
    options: ['Обожаю копаться в железе', 'Только при крайней необходимости', 'Предпочитаю сервис']
  },
  {
    question: 'Что важнее: престиж или практичность?',
    options: ['Престиж — это всё', 'Баланс между ними', 'Практичность превыше всего']
  },
  {
    question: 'Как вы путешествуете?',
    options: ['С картой и без GPS', 'С навигатором, но готов к приключениям', 'Только по проверенным маршрутам с инфраструктурой']
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSoviet, setSelectedSoviet] = useState(0);
  const [selectedModern, setSelectedModern] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers, answerIndex];
    setQuizAnswers(newAnswers);
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const avgScore = newAnswers.reduce((a, b) => a + b, 0) / newAnswers.length;
      alert(avgScore < 1 ? 'Вы — истинный байкер СССР! Вам подойдет Иж Планета.' : avgScore < 2 ? 'Вы цените классику, но и технологии. Урал современный — ваш выбор!' : 'Вы современный райдер. BMW или Honda для вас!');
      setQuizStep(0);
      setQuizAnswers([]);
    }
  };

  return (
    <div className="min-h-screen bg-background vintage-texture">
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b-2 border-primary/20 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
              🏍️ МотоЭволюция
            </h1>
            <div className="flex gap-2 flex-wrap">
              {['home', 'compare', 'gallery', 'calculator', 'stories', 'contact'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'outline'}
                  onClick={() => setActiveSection(section)}
                  className="stamp-shadow"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'compare' && 'Сравнение'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'calculator' && 'Калькулятор'}
                  {section === 'stories' && 'Истории'}
                  {section === 'contact' && 'Контакты'}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <section className="text-center space-y-6 py-12">
              <Badge className="text-lg px-6 py-2 bg-accent text-accent-foreground">
                Путешествие сквозь время
              </Badge>
              <h2 className="text-6xl font-bold text-primary">
                Машина времени<br />для байкеров
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Сравните легендарные советские мотоциклы с их современными наследниками.
                Погрузитесь в историю, технологии и культуру мотопрома СССР и сегодняшнего дня.
              </p>
              <div className="flex gap-4 justify-center pt-6">
                <Button size="lg" onClick={() => setActiveSection('compare')} className="stamp-shadow">
                  <Icon name="GitCompare" className="mr-2" size={20} />
                  Начать сравнение
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('stories')}>
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Читать истории
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale stamp-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Icon name="Scale" size={28} />
                    Лицом к лицу
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Детальное сравнение технических характеристик, цен и культурного значения
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale stamp-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Icon name="Clock" size={28} />
                    Контекст эпох
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Истории владельцев, цены в эквиваленте колбасы и зарплат, дух времени
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale stamp-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Icon name="Wrench" size={28} />
                    Культура ремонта
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    От напильника и молотка до диагностики через OBD-порт
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'compare' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-primary">Лицом к лицу</h2>
              <p className="text-xl text-muted-foreground">
                Выберите пару мотоциклов для сравнения
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="stamp-shadow border-2 border-secondary">
                <CardHeader className="bg-secondary/10">
                  <CardTitle className="text-2xl text-center text-secondary">
                    🚩 СССР (1970-1990)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Tabs value={selectedSoviet.toString()} onValueChange={(v) => setSelectedSoviet(Number(v))}>
                    <TabsList className="grid w-full grid-cols-3">
                      {sovietBikes.map((_, idx) => (
                        <TabsTrigger key={idx} value={idx.toString()}>
                          Модель {idx + 1}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {sovietBikes.map((bike, idx) => (
                      <TabsContent key={idx} value={idx.toString()} className="space-y-4">
                        <img src={bike.image} alt={bike.name} className="w-full h-64 object-cover rounded-lg" />
                        <h3 className="text-3xl font-bold text-secondary">{bike.name}</h3>
                        <Badge variant="secondary">{bike.year}</Badge>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Мощность:</span>
                            <span className="font-semibold">{bike.power}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Вес:</span>
                            <span className="font-semibold">{bike.weight}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Макс. скорость:</span>
                            <span className="font-semibold">{bike.speed}</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="text-muted-foreground">Цена:</span>
                            <span className="font-bold text-accent">{bike.price}</span>
                          </div>
                          <div className="text-xs text-center bg-accent/10 p-2 rounded">
                            {bike.priceEquiv}
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              <Card className="stamp-shadow border-2 border-primary">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="text-2xl text-center text-primary">
                    🔧 Современность (2020+)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Tabs value={selectedModern.toString()} onValueChange={(v) => setSelectedModern(Number(v))}>
                    <TabsList className="grid w-full grid-cols-3">
                      {modernBikes.map((_, idx) => (
                        <TabsTrigger key={idx} value={idx.toString()}>
                          Модель {idx + 1}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {modernBikes.map((bike, idx) => (
                      <TabsContent key={idx} value={idx.toString()} className="space-y-4">
                        <img src={bike.image} alt={bike.name} className="w-full h-64 object-cover rounded-lg" />
                        <h3 className="text-3xl font-bold text-primary">{bike.name}</h3>
                        <Badge>{bike.year}</Badge>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Мощность:</span>
                            <span className="font-semibold">{bike.power}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Вес:</span>
                            <span className="font-semibold">{bike.weight}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Макс. скорость:</span>
                            <span className="font-semibold">{bike.speed}</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="text-muted-foreground">Цена:</span>
                            <span className="font-bold text-accent">{bike.price}</span>
                          </div>
                          <div className="text-xs text-center bg-accent/10 p-2 rounded">
                            {bike.priceEquiv}
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-primary">Галерея времени</h2>
              <p className="text-xl text-muted-foreground">
                Легендарные мотоциклы в историческом контексте
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[...sovietBikes, ...modernBikes].map((bike, idx) => (
                <Card key={idx} className="overflow-hidden hover-scale stamp-shadow">
                  <img src={bike.image} alt={bike.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">{bike.name}</h3>
                    <div className="flex justify-between items-center">
                      <Badge variant={idx < 3 ? 'secondary' : 'default'}>{bike.year}</Badge>
                      <span className="text-sm text-muted-foreground">{bike.power}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'calculator' && (
          <div className="space-y-8 animate-in fade-in duration-500 max-w-3xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-primary">Калькулятор ностальгии</h2>
              <p className="text-xl text-muted-foreground">
                Какой советский мотоцикл вам подходит?
              </p>
            </div>

            <Card className="stamp-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Вопрос {quizStep + 1} из {quizQuestions.length}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg font-medium">{quizQuestions[quizStep].question}</p>
                <div className="space-y-3">
                  {quizQuestions[quizStep].options.map((option, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="w-full text-left justify-start h-auto py-4 hover-scale"
                      onClick={() => handleQuizAnswer(idx)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'stories' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-primary">Истории владельцев</h2>
              <p className="text-xl text-muted-foreground">
                Реальные люди, реальные мотоциклы, разные эпохи
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story, idx) => (
                <Card key={idx} className="stamp-shadow hover-scale">
                  <CardHeader>
                    <div className="text-4xl mb-2">{story.icon}</div>
                    <CardTitle className="text-xl">{story.author}</CardTitle>
                    <div className="space-y-1">
                      <Badge variant="outline">{story.bike}</Badge>
                      <p className="text-sm text-muted-foreground">{story.era}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{story.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="space-y-8 animate-in fade-in duration-500 max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-primary">Контакты</h2>
              <p className="text-xl text-muted-foreground">
                Поделитесь своей историей или предложите улучшения
              </p>
            </div>

            <Card className="stamp-shadow">
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                  <Icon name="Mail" size={32} className="text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@motoevolution.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                  <Icon name="MessageCircle" size={32} className="text-primary" />
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p className="text-muted-foreground">@motoevolution</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                  <Icon name="Phone" size={32} className="text-primary" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (900) 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-20 py-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl font-bold">МотоЭволюция</h3>
          <p className="text-secondary-foreground/80">
            Сквозь время и железо — история советского и современного мотопрома
          </p>
          <p className="text-sm text-secondary-foreground/60">
            © 2024 МотоЭволюция. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
