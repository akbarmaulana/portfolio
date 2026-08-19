import { LanguageProvider } from './i18n/LanguageContext'
import { SideNav } from './components/layout/SideNav'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink text-text">
        <SideNav />
        <main className="pt-[52px] lg:pl-64 lg:pt-0">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
