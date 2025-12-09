import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b-2 border-primary/20 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 
            className="text-3xl font-bold text-primary flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onSectionChange('home')}
          >
            🏍️ Мото-Эпохи
          </h1>
          
          {/* Кнопка бургер-меню */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Icon name="Menu" size={24} />
          </Button>

          {/* Навигация для десктопа */}
          <div className="hidden md:flex gap-2 flex-wrap">
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

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2 animate-in slide-in-from-top-5 duration-300">
            {['home', 'compare', 'gallery', 'calculator', 'stories', 'contact'].map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? 'default' : 'outline'}
                onClick={() => {
                  onSectionChange(section);
                  setIsMenuOpen(false);
                }}
                className="stamp-shadow w-full"
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
        )}
      </div>
    </nav>
  );
}