import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

export default function HomeSection({ onSectionChange }: HomeSectionProps) {
  return (
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
          <Button size="lg" onClick={() => onSectionChange('compare')} className="stamp-shadow">
            <Icon name="GitCompare" className="mr-2" size={20} />
            Начать сравнение
          </Button>
          <Button size="lg" variant="outline" onClick={() => onSectionChange('stories')}>
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
  );
}
