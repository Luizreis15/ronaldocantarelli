'use client'

import { useEffect, type ReactNode, type CSSProperties } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Globe,
  Heart,
  Mic,
  BookOpen,
  Camera,
  type LucideIcon,
} from 'lucide-react'
import styles from './LinksPage.module.css'

type Variant = 'solid' | 'outline'

interface LinkItem {
  title: string
  description: string
  href: string
  icon: LucideIcon
  variant: Variant
}

const whatsappAtendimento =
  'https://wa.me/5511988396576?text=Ol%C3%A1%2C%20Elaine!%20Vim%20pelo%20site%20do%20Ronaldo%20Cantarelli%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20individual.'

const whatsappPalestra = 'https://wa.link/5j49rx'

const whatsappPregacao =
  'https://wa.me/5511988396576?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20convite%20para%20o%20Ronaldo%20Cantarelli%20pregar.'

const linkItems: LinkItem[] = [
  {
    title: 'Agendar sessão individual',
    description: 'Psicanálise clínica · escuta com profundidade',
    href: whatsappAtendimento,
    icon: Heart,
    variant: 'solid',
  },
  {
    title: 'Site oficial',
    description: 'ronaldocantarelli.com.br',
    href: 'https://www.ronaldocantarelli.com.br',
    icon: Globe,
    variant: 'solid',
  },
  {
    title: 'Agendar palestra',
    description: 'Eventos, empresas e instituições',
    href: whatsappPalestra,
    icon: Mic,
    variant: 'outline',
  },
  {
    title: 'Convite para pregação',
    description: 'Igrejas, conferências e congressos',
    href: whatsappPregacao,
    icon: BookOpen,
    variant: 'outline',
  },
  {
    title: 'Instagram',
    description: '@ronaldocantarelli',
    href: 'https://instagram.com/ronaldocantarelli',
    icon: Camera,
    variant: 'outline',
  },
]

const floatingTags = ['Fé', 'Psicanálise', 'Família', 'Saúde Mental']

const stats = [
  { value: '17+ anos', label: 'Comunicação e cuidado de pessoas' },
  { value: 'Pastor', label: 'Lagoinha Morumbi' },
  { value: 'Psicanalista', label: 'Terapeuta cristão' },
  { value: 'Família', label: 'Pós-graduado em Terapia Familiar' },
]

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <div
      data-reveal-links="true"
      className={styles.reveal}
      style={{ ['--delay' as string]: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function LinksPage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal-links='true']")
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.visible)
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ronaldo/retrato.jpg"
            alt="Ronaldo Cantarelli"
            className={styles.heroImg}
          />
          <div className={styles.heroFadeTop} />
          <div className={styles.heroVignette} />
          <div className={styles.heroFadeBottom} />

          {floatingTags.map((tag, i) => {
            const positions: CSSProperties[] = [
              { top: '8%', right: '6%' },
              { top: '44%', left: '4%' },
              { top: '56%', right: '5%' },
              { top: '30%', right: '5%' },
            ]
            return (
              <span
                key={tag}
                className={styles.floatTag}
                style={{
                  ...positions[i],
                  animationDelay: `${0.6 + i * 0.2}s, ${0.9 + i * 0.25}s`,
                }}
              >
                {tag}
              </span>
            )
          })}

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span>Ronaldo Cantarelli</span>
            </h1>
            <span className={styles.heroKicker}>
              Psicanalista · Pastor · Terapeuta Cristão
            </span>
            <p className={styles.heroSubtitle}>Escuta técnica, fé e presença real.</p>
          </div>
        </section>

        {/* LINKS */}
        <section className={styles.linksSection}>
          <Reveal>
            <p className={styles.sectionLabel}>Escolha por onde começar</p>
          </Reveal>

          {linkItems.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={80 + i * 70}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.linkCard} ${styles[item.variant]}`}
                >
                  <div className={styles.linkIconWrap}>
                    <Icon size={22} />
                  </div>
                  <div className={styles.linkBody}>
                    <h3 className={styles.linkTitle}>{item.title}</h3>
                    <p className={styles.linkDesc}>{item.description}</p>
                  </div>
                  <ArrowRight size={20} className={styles.linkArrow} />
                </a>
              </Reveal>
            )
          })}
        </section>

        {/* QUEM É RONALDO */}
        <section className={styles.about}>
          <Reveal>
            <div className={styles.aboutMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ronaldo/atendimento.jpg"
                alt="Ronaldo em atendimento"
                className={styles.aboutImg}
              />
              <div className={styles.aboutMediaOverlay}>
                <h3 className={styles.aboutMediaTitle}>Ronaldo Cantarelli</h3>
                <p className={styles.aboutMediaSubtitle}>
                  Psicanalista Clínico · Pastor da Lagoinha Morumbi
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={styles.aboutBadge}>
              <span>Conheça o especialista</span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h2 className={styles.aboutTitle}>
              Quem é <em>Ronaldo Cantarelli</em>
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <p className={styles.aboutText}>
              Psicanalista clínico, pós-graduado em Terapia Familiar e pastor na Igreja
              Batista da Lagoinha Morumbi. Há mais de 17 anos atua em comunicação,
              liderança e cuidado de pessoas — unindo profundidade técnica, escuta
              responsável e maturidade espiritual para acompanhar adultos, casais e
              famílias em processos de elaboração emocional, fé e reconstrução interna.
            </p>
          </Reveal>

          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={260 + i * 70}>
                <div className={styles.statCard}>
                  <p className={styles.statValue}>{s.value}</p>
                  <p className={styles.statLabel}>{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={520}>
            <div className={styles.quoteCard}>
              <p className={styles.quoteText}>
                "Cuidar de pessoas exige preparo, escuta e responsabilidade clínica —
                sem superficialidade religiosa e sem negar a complexidade real do
                sofrimento humano."
              </p>
              <p className={styles.quoteAuthor}>— Ronaldo Cantarelli</p>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <a
              href="https://instagram.com/ronaldocantarelli"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkCard} ${styles.solid} ${styles.ctaInstagram}`}
            >
              <div className={styles.linkIconWrap}>
                <Camera size={22} />
              </div>
              <div className={styles.linkBody}>
                <h3 className={styles.linkTitle}>Conheça o Ronaldo</h3>
                <p className={styles.linkDesc}>@ronaldocantarelli no Instagram</p>
              </div>
              <ArrowRight size={20} className={styles.linkArrow} />
            </a>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            <Link href="/">Início</Link>
            <a href="/#servicos">Serviços</a>
            <a href="/#sobre">Sobre</a>
            <a href="/#faq">Dúvidas</a>
          </div>
          <p className={styles.copy}>© 2026 Ronaldo Cantarelli · Psicanalista Clínico</p>
        </footer>
      </div>
    </main>
  )
}
