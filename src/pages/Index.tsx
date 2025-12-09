import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import ContentSections from '@/components/ContentSections';
import Footer from '@/components/Footer';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background vintage-texture">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && <HomeSection onSectionChange={setActiveSection} />}
        {activeSection !== 'home' && <ContentSections activeSection={activeSection} />}
      </main>

      <Footer />
    </div>
  );
}
