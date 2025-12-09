import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
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
                onClick={() => onSectionChange(section)}
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
  );
}
