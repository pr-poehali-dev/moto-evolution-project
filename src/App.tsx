import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [nostalgiaScore, setNostalgiaScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const sections = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'compare', label: 'Сравнение', icon: 'GitCompare' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'calculator', label: 'Калькулятор', icon: 'Calculator' },
    { id: 'stories', label: 'Истории', icon: 'BookOpen' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const motorcycles = [
    {
      id: 1,
      name: 'Иж Планета 5',
      year: '1987',
      power: '22 л.с.',
      weight: '145 кг',
      price: '1500 руб.',
      priceKolbasa: '~300 кг',
      image: '🏍️',
      era: 'soviet',
    },
    {
      id: 2,
      name: 'Урал М-72',
      year: '1955',
      power: '22 л.с.',
      weight: '330 кг',
      price: '5200 руб.',
      priceKolbasa: '~1040 кг',
      image: '🏍️',
      era: 'soviet',
    },
    {
      id: 3,
      name: 'Днепр МТ-11',
      year: '1985',
      power: '32 л.с.',
      weight: '325 кг',
      price: '2800 руб.',
      priceKolbasa: '~560 кг',
      image: '🏍️',
      era: 'soviet',
    },
    {
      id: 4,
      name: 'Royal Enfield Himalayan',
      year: '2024',
      power: '24 л.с.',
      weight: '199 кг',
      price: '~450 000 руб.',
      priceKolbasa: '~900 кг',
      image: '🏍️',
      era: 'modern',
    },
    {
      id: 5,
      name: 'BMW R 1250 GS',
      year: '2024',
      power: '136 л.с.',
      weight: '249 кг',
      price: '~2 500 000 руб.',
      priceKolbasa: '~5000 кг',
      image: '🏍️',
      era: 'modern',
    },
    {
      id: 6,
      name: 'Honda CB650R',
      year: '2024',
      power: '95 л.с.',
      weight: '202 кг',
      price: '~1 200 000 руб.',
      priceKolbasa: '~2400 кг',
      image: '🏍️',
      era: 'modern',
    },
  ];

  const stories = [
    {
      id: 1,
      author: 'Владимир С.',
      year: '1978',
      bike: 'Иж Планета 3',
      story: 'Помню, как доставал свою Планету через знакомых в райкоме. Простояли в очереди 2 года. Но какое это было счастье! Каждые выходные ездили с друзьями на Оку, палатки, костёр...',
      image: '👴',
    },
    {
      id: 2,
      author: 'Сергей М.',
      year: '1985',
      bike: 'Днепр МТ-10',
      story: 'Мой Днепр прошёл со мной всю страну. От Калининграда до Владивостока. Ремонтировал прямо в дороге, помогали местные. Такого братства сейчас не найдёшь.',
      image: '👨',
    },
    {
      id: 3,
      author: 'Анна К.',
      year: '2023',
      bike: 'Royal Enfield Classic',
      story: 'Купила Энфилд, вдохновившись историями отца про его Иж. Технологии другие, но романтика осталась. Каждая поездка — маленькое приключение.',
      image: '👩',
    },
  ];

  const questions = [
    {
      text: 'Готовы ли вы чинить мотоцикл каждые 500 км?',
      options: ['Конечно!', 'Ну если надо...', 'Только в сервисе'],
      scores: [10, 5, 0],
    },
    {
      text: 'Как вы относитесь к запчастям из напильника?',
      options: ['Умею сам!', 'Научусь', 'Нет, спасибо'],
      scores: [10, 5, 0],
    },
    {
      text: 'Сколько инструментов возьмете в поездку?',
      options: ['Полный ящик', 'Только ключи', 'Телефон с номером эвакуатора'],
      scores: [10, 5, 0],
    },
  ];

  const handleAnswer = (score: number) => {
    setNostalgiaScore(nostalgiaScore + score);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetCalculator = () => {
    setNostalgiaScore(0);
    setCurrentQuestion(0);
  };

  const getNostalgiaLevel = () => {
    if (nostalgiaScore >= 25) return { text: 'Вы готовы к советскому мотопрому!', color: 'text-primary' };
    if (nostalgiaScore >= 15) return { text: 'Вам подойдёт классика с комфортом', color: 'text-secondary' };
    return { text: 'Выбирайте современные технологии', color: 'text-muted-foreground' };
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 vintage-texture">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🏍️</span>
            <h1 className="text-2xl font-bold text-primary">МотоЭволюция</h1>
          </div>
          <div className="hidden md:flex gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === section.id
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={section.icon as any} size={20} />
                {section.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container py-8 space-y-16">
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fade-in">
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 p-12 md:p-20 vintage-texture">
              <div className="relative z-10 max-w-3xl space-y-6">
                <Badge className="text-sm">Сквозь время и железо</Badge>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Машина времени для байкеров
                </h1>
                <p className="text-xl text-muted-foreground">
                  Сравните легендарные советские мотоциклы с их современными наследниками. 
                  Погрузитесь в историю, технологии и культуру мотопрома.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" onClick={() => setActiveSection('compare')}>
                    <Icon name="GitCompare" className="mr-2" size={20} />
                    Начать сравнение
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setActiveSection('gallery')}>
                    <Icon name="Image" className="mr-2" size={20} />
                    Галерея
                  </Button>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 text-[300px] opacity-10">🏍️</div>
            </section>

            <section className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">Почему это интересно?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Это не просто каталог — это путешествие через эпохи мотоциклостроения
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover-scale">
                  <CardHeader>
                    <div className="text-5xl mb-4">⚙️</div>
                    <CardTitle>Эволюция технологий</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      От простых двухтактных моторов до современных систем впрыска и ABS
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardHeader>
                    <div className="text-5xl mb-4">📖</div>
                    <CardTitle>Истории людей</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Реальные воспоминания владельцев о путешествиях и приключениях
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale">
                  <CardHeader>
                    <div className="text-5xl mb-4">🔧</div>
                    <CardTitle>Культура ремонта</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      От кустарного ремонта напильником до компьютерной диагностики
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'compare' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Лицом к лицу</h2>
              <p className="text-xl text-muted-foreground">
                Сравните легенды прошлого с технологиями настоящего
              </p>
            </div>

            <Tabs defaultValue="soviet" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="soviet">Советские</TabsTrigger>
                <TabsTrigger value="modern">Современные</TabsTrigger>
              </TabsList>
              <TabsContent value="soviet" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {motorcycles
                    .filter((m) => m.era === 'soviet')
                    .map((bike) => (
                      <Card key={bike.id} className="hover-scale">
                        <CardHeader>
                          <div className="text-6xl mb-4 text-center">{bike.image}</div>
                          <CardTitle>{bike.name}</CardTitle>
                          <CardDescription>{bike.year} год</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Мощность:</span>
                              <span className="font-medium">{bike.power}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Вес:</span>
                              <span className="font-medium">{bike.weight}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Цена:</span>
                              <span className="font-medium">{bike.price}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">В колбасе:</span>
                              <span className="font-medium">{bike.priceKolbasa}</span>
                            </div>
                          </div>
                          <Button className="w-full" variant="outline">
                            Подробнее
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="modern" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {motorcycles
                    .filter((m) => m.era === 'modern')
                    .map((bike) => (
                      <Card key={bike.id} className="hover-scale">
                        <CardHeader>
                          <div className="text-6xl mb-4 text-center">{bike.image}</div>
                          <CardTitle>{bike.name}</CardTitle>
                          <CardDescription>{bike.year} год</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Мощность:</span>
                              <span className="font-medium">{bike.power}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Вес:</span>
                              <span className="font-medium">{bike.weight}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Цена:</span>
                              <span className="font-medium">{bike.price}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">В колбасе:</span>
                              <span className="font-medium">{bike.priceKolbasa}</span>
                            </div>
                          </div>
                          <Button className="w-full" variant="outline">
                            Подробнее
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Галерея легенд</h2>
              <p className="text-xl text-muted-foreground">
                Коллекция культовых мотоциклов советской эпохи
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {motorcycles.map((bike) => (
                <Card key={bike.id} className="overflow-hidden hover-scale">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-8xl vintage-texture">
                    {bike.image}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{bike.name}</CardTitle>
                      <Badge variant={bike.era === 'soviet' ? 'default' : 'secondary'}>
                        {bike.era === 'soviet' ? 'СССР' : 'Современный'}
                      </Badge>
                    </div>
                    <CardDescription>{bike.year} • {bike.power}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {bike.era === 'soviet' 
                        ? 'Легендарный советский мотоцикл, прошедший через десятилетия'
                        : 'Современные технологии и классический дизайн'}
                    </p>
                    <Button className="w-full" variant="outline">
                      <Icon name="Maximize2" className="mr-2" size={16} />
                      Рассмотреть
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'calculator' && (
          <div className="space-y-8 animate-fade-in max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Калькулятор ностальгии</h2>
              <p className="text-xl text-muted-foreground">
                Узнайте, насколько вы готовы к реалиям советского мотопрома
              </p>
            </div>

            <Card className="p-8">
              {currentQuestion < questions.length ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Вопрос {currentQuestion + 1} из {questions.length}</span>
                      <span>Очков: {nostalgiaScore}</span>
                    </div>
                    <Progress value={((currentQuestion + 1) / questions.length) * 100} />
                  </div>

                  <div className="space-y-6 py-8">
                    <h3 className="text-2xl font-semibold text-center">
                      {questions[currentQuestion].text}
                    </h3>
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, idx) => (
                        <Button
                          key={idx}
                          onClick={() => handleAnswer(questions[currentQuestion].scores[idx])}
                          variant="outline"
                          className="w-full h-auto py-4 text-lg"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 py-8 text-center">
                  <div className="text-6xl mb-4">
                    {nostalgiaScore >= 25 ? '🏆' : nostalgiaScore >= 15 ? '⚙️' : '🔧'}
                  </div>
                  <h3 className="text-3xl font-bold">Ваш результат: {nostalgiaScore} очков</h3>
                  <p className={`text-xl ${getNostalgiaLevel().color}`}>
                    {getNostalgiaLevel().text}
                  </p>
                  <div className="pt-4 space-y-4">
                    <p className="text-muted-foreground">
                      {nostalgiaScore >= 25 && 'Вы — настоящий мастер! Иж Планета или Днепр будут вам как родные.'}
                      {nostalgiaScore >= 15 && nostalgiaScore < 25 && 'Вам подойдёт Royal Enfield — классика с современным удобством.'}
                      {nostalgiaScore < 15 && 'BMW или Honda — ваш выбор. Надёжность превыше всего!'}
                    </p>
                    <Button onClick={resetCalculator} size="lg">
                      <Icon name="RotateCcw" className="mr-2" size={20} />
                      Пройти ещё раз
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        )}

        {activeSection === 'stories' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Из жизни</h2>
              <p className="text-xl text-muted-foreground">
                Истории реальных людей, для которых мотоцикл — больше чем транспорт
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <Card key={story.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-5xl">{story.image}</div>
                      <div>
                        <CardTitle className="text-lg">{story.author}</CardTitle>
                        <CardDescription>{story.bike}, {story.year}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      "{story.story}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold">Поделитесь своей историей</h3>
                <p className="text-muted-foreground">
                  У вас есть история о советском или классическом мотоцикле? Расскажите нам!
                </p>
                <Button size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить историю
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="space-y-8 animate-fade-in max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Контакты</h2>
              <p className="text-xl text-muted-foreground">
                Свяжитесь с нами для сотрудничества или предложений
              </p>
            </div>
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@motoevolution.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <Icon name="MessageCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telegram</h3>
                    <p className="text-muted-foreground">@motoevolution</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Москва, Россия</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t bg-card mt-20 vintage-texture">
        <div className="container py-12 space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏍️</span>
                <h3 className="text-xl font-bold">МотоЭволюция</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Машина времени для байкеров. Сравните советские легенды с современными мотоциклами.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Разделы</h4>
              <div className="space-y-2 text-sm">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className="block text-muted-foreground hover:text-foreground story-link"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Следите за нами</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <Separator />
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 МотоЭволюция. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
