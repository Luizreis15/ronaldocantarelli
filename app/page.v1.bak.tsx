'use client'

import { useEffect, useRef, useState } from 'react'

export default function RonaldoCantarelli() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const revealRefs = useRef<HTMLElement[]>([])

  const whatsappLink =
    'https://wa.me/5511988396576?text=Ol%C3%A1%2C%20Elaine!%20Vim%20pelo%20site%20do%20Ronaldo%20Cantarelli%20e%20gostaria%20de%20agendar%20um%20atendimento.'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('rc-visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const faqs = [
    {
      q: 'Esse atendimento é apenas para cristãos?',
      a: 'Não. O acompanhamento parte de fundamentos cristãos e pode acolher pessoas em diferentes momentos de fé, desde que exista abertura para esse contexto.',
    },
    {
      q: 'Esse atendimento é psicanalítico?',
      a: 'Sim. O trabalho parte de uma escuta clínica aprofundada, com atenção à história do sujeito, aos vínculos, aos conflitos internos e aos padrões emocionais que organizam o sofrimento.',
    },
    {
      q: 'O atendimento é indicado apenas para casos graves?',
      a: 'Não. Ele pode ser indicado para sofrimento emocional persistente, conflitos relacionais, repetições destrutivas e processos de autocompreensão mais profunda.',
    },
    {
      q: 'Há atendimento para casal e família?',
      a: 'Sim. O acompanhamento também contempla conflitos conjugais e familiares, respeitando a complexidade própria de cada vínculo.',
    },
    {
      q: 'Como funciona o primeiro contato?',
      a: 'Você pode iniciar pelo WhatsApp ou preencher o formulário. A partir disso, será feito o direcionamento inicial para o atendimento.',
    },
  ]

  const services = [
    {
      title: 'Psicanálise Clínica',
      desc: 'Escuta aprofundada voltada à compreensão da história do sujeito, dos conflitos internos e dos padrões psíquicos que organizam o sofrimento.',
    },
    {
      title: 'Terapia Familiar',
      desc: 'Acompanhamento especializado de dinâmicas familiares, conflitos intergeracionais e vínculos que impactam a saúde emocional.',
    },
    {
      title: 'Terapia de Casal',
      desc: 'Análise dos padrões relacionais, desgaste conjugal e reconstrução dos vínculos com base na escuta clínica responsável.',
    },
    {
      title: 'Saúde Mental Cristã',
      desc: 'Integração entre profundidade técnica e maturidade espiritual, sem superficialidade religiosa nem negligência terapêutica.',
    },
  ]

  const credentials = [
    { label: 'Psicanalista Clínico' },
    { label: 'Especialização em Terapia Familiar' },
    { label: 'Pastor — Igreja Batista da Lagoinha Morumbi' },
    { label: 'Professor Global de Teologia — Seminário Carisma' },
    { label: '17+ anos em comunicação e liderança' },
  ]

  const galleryCards = [
    {
      title: 'Escuta',
      desc: 'Acolhimento clínico com profundidade, responsabilidade e atenção real ao que está por trás do sintoma.',
    },
    {
      title: 'Família',
      desc: 'Compreensão dos vínculos, da história emocional e dos padrões relacionais que atravessam a vida psíquica.',
    },
    {
      title: 'Fé',
      desc: 'Espiritualidade tratada com maturidade, sem superficialidade religiosa e sem negar a complexidade do sofrimento.',
    },
    {
      title: 'Clínica',
      desc: 'Base técnica para conduzir processos terapêuticos com clareza, direção e compromisso com elaboração real.',
    },
    {
      title: 'Comunidade',
      desc: 'Visão de cuidado que reconhece o impacto do ambiente, da igreja, da família e das relações na saúde emocional.',
    },
    {
      title: 'Propósito',
      desc: 'Reconstrução de sentido, direção e identidade para quem sente que perdeu o centro da própria caminhada.',
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
          background: #0C0A06;
          color: #EDE8DC;
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          overflow-x: hidden;
          line-height: 1.7;
        }

        .rc-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.85s cubic-bezier(.22,1,.36,1), transform 0.85s cubic-bezier(.22,1,.36,1);
        }

        .rc-reveal.rc-visible {
          opacity: 1;
          transform: none;
        }

        .rc-d1 { transition-delay: 0.1s; }
        .rc-d2 { transition-delay: 0.2s; }
        .rc-d3 { transition-delay: 0.3s; }
        .rc-d4 { transition-delay: 0.45s; }

        .rc-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .rc-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #C9A96E;
          border-radius: 50%;
          opacity: 0;
          animation: float-particle linear infinite;
        }

        @keyframes float-particle {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0);
          }
          10% { opacity: 0.4; }
          90% { opacity: 0.15; }
          100% {
            opacity: 0;
            transform: translateY(-120px) translateX(20px);
          }
        }

        .rc-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 60px;
          transition: background 0.4s, padding 0.4s, backdrop-filter 0.4s;
        }

        .rc-nav.scrolled {
          background: rgba(12,10,6,0.92);
          backdrop-filter: blur(12px);
          padding: 18px 60px;
          border-bottom: 1px solid rgba(201,169,110,0.12);
        }

        .rc-nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 400;
          letter-spacing: 0.2em;
          color: #C9A96E;
          text-transform: uppercase;
        }

        .rc-nav-cta {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #0C0A06;
          background: #C9A96E;
          padding: 11px 28px;
          border: none;
          cursor: pointer;
          transition: background 0.25s;
          text-decoration: none;
          display: inline-block;
        }

        .rc-nav-cta:hover { background: #E8D5A3; }

        .rc-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 140px 40px 100px;
          position: relative;
          background:
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(58,40,10,0.55) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(40,28,8,0.3) 0%, transparent 60%),
            #0C0A06;
        }

        .rc-hero-divider {
          width: 1px;
          height: 64px;
          background: linear-gradient(to bottom, transparent, #C9A96E, transparent);
          margin: 0 auto 40px;
        }

        .rc-hero-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 32px;
        }

        .rc-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 7vw, 84px);
          font-weight: 300;
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: #EDE8DC;
          margin-bottom: 12px;
        }

        .rc-hero-title em {
          font-style: italic;
          color: #C9A96E;
        }

        .rc-hero-subtitle {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          font-weight: 300;
          letter-spacing: 0.05em;
          color: #B5A898;
          margin-bottom: 56px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .rc-hero-ctas {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .rc-btn-primary {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #0C0A06;
          background: #C9A96E;
          padding: 16px 40px;
          border: none;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          text-decoration: none;
          display: inline-block;
          border-radius: 2px;
        }

        .rc-btn-primary:hover {
          background: #E8D5A3;
          transform: translateY(-1px);
        }

        .rc-btn-secondary {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9A96E;
          background: transparent;
          padding: 16px 40px;
          border: 1px solid rgba(201,169,110,0.4);
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s, transform 0.2s;
          text-decoration: none;
          display: inline-block;
          border-radius: 2px;
        }

        .rc-btn-secondary:hover {
          border-color: #C9A96E;
          color: #E8D5A3;
          transform: translateY(-1px);
        }

        .rc-hero-badges {
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 80px;
          padding-top: 48px;
          border-top: 1px solid rgba(201,169,110,0.12);
        }

        .rc-badge {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #B5A898;
        }

        .rc-badge span {
          color: #C9A96E;
          display: block;
          font-size: 9px;
          margin-top: 4px;
        }

        .rc-section {
          padding: 120px 40px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .rc-label {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .rc-label::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #C9A96E;
        }

        .rc-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 300;
          line-height: 1.15;
          color: #EDE8DC;
          margin-bottom: 24px;
        }

        .rc-h2 em {
          font-style: italic;
          color: #C9A96E;
        }

        .rc-body {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: #B5A898;
          max-width: 600px;
        }

        .rc-ident {
          background: #0F0C07;
          border-top: 1px solid rgba(201,169,110,0.08);
          border-bottom: 1px solid rgba(201,169,110,0.08);
        }

        .rc-ident-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 120px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .rc-ident-pains {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 40px;
        }

        .rc-pain-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #B5A898;
          line-height: 1.6;
        }

        .rc-pain-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #C9A96E;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .rc-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          margin-top: 64px;
        }

        .rc-service-card {
          background: #0F0C07;
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
        }

        .rc-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: #C9A96E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(.22,1,.36,1);
        }

        .rc-service-card:hover::before { transform: scaleX(1); }
        .rc-service-card:hover { background: #130F08; }

        .rc-service-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          color: rgba(201,169,110,0.4);
          margin-bottom: 24px;
          letter-spacing: 0.1em;
        }

        .rc-service-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 400;
          color: #EDE8DC;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .rc-service-desc {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #B5A898;
          line-height: 1.8;
        }

        .rc-about {
          background: #0F0C07;
          border-top: 1px solid rgba(201,169,110,0.08);
        }

        .rc-about-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 120px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .rc-credentials {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-top: 48px;
        }

        .rc-credential {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(201,169,110,0.08);
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #B5A898;
          letter-spacing: 0.03em;
        }

        .rc-credential:first-child {
          border-top: 1px solid rgba(201,169,110,0.08);
        }

        .rc-credential-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #C9A96E;
          flex-shrink: 0;
        }

        .rc-about-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 300;
          font-style: italic;
          color: #EDE8DC;
          line-height: 1.3;
          margin-bottom: 32px;
        }

        .rc-about-quote em {
          color: #C9A96E;
          font-style: normal;
        }

        .rc-family {
          background: linear-gradient(135deg, #0F0C07 0%, #130F08 100%);
          border-top: 1px solid rgba(201,169,110,0.08);
          border-bottom: 1px solid rgba(201,169,110,0.08);
        }

        .rc-family-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 40px;
          text-align: center;
        }

        .rc-family-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 300;
          font-style: italic;
          color: #C9A96E;
          line-height: 1.5;
          margin: 40px 0;
        }

        .rc-gallery {
          background: #0C0A06;
        }

        .rc-gallery-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 120px 40px;
        }

        .rc-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 64px;
        }

        .rc-gallery-card {
          background: #0F0C07;
          padding: 36px 32px;
          min-height: 220px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(201,169,110,0.08);
          transition: transform 0.25s, border-color 0.25s, background 0.25s;
        }

        .rc-gallery-card:hover {
          transform: translateY(-4px);
          border-color: rgba(201,169,110,0.22);
          background: #130F08;
        }

        .rc-gallery-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #C9A96E, transparent);
        }

        .rc-gallery-kicker {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.65);
          margin-bottom: 20px;
        }

        .rc-gallery-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          font-weight: 400;
          color: #EDE8DC;
          margin-bottom: 14px;
        }

        .rc-gallery-desc {
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: #B5A898;
        }

        .rc-process {
          max-width: 900px;
          margin: 0 auto;
          padding: 120px 40px;
          text-align: center;
        }

        .rc-process-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 64px;
        }

        .rc-step {
          padding: 48px 32px;
          background: #0F0C07;
          text-align: left;
          position: relative;
        }

        .rc-step-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          color: rgba(201,169,110,0.15);
          line-height: 1;
          margin-bottom: 24px;
        }

        .rc-step-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          color: #C9A96E;
          margin-bottom: 12px;
        }

        .rc-step-desc {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #B5A898;
          line-height: 1.7;
        }

        .rc-step-connector {
          position: absolute;
          top: 50%;
          right: -1px;
          width: 2px;
          height: 40px;
          background: rgba(201,169,110,0.2);
          transform: translateY(-50%);
        }

        .rc-faq-wrap {
          max-width: 780px;
          margin: 64px auto 0;
        }

        .rc-faq-item {
          border-bottom: 1px solid rgba(201,169,110,0.12);
        }

        .rc-faq-q {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 0;
          text-align: left;
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #C5BBA8;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }

        .rc-faq-q:hover { color: #E8D5A3; }

        .rc-faq-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          border: 1px solid rgba(201,169,110,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #C9A96E;
          transition: transform 0.3s;
        }

        .rc-faq-icon.open { transform: rotate(45deg); }

        .rc-faq-a {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(.22,1,.36,1), opacity 0.3s;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #B5A898;
          line-height: 1.8;
          padding-bottom: 0;
        }

        .rc-faq-a.open { padding-bottom: 28px; }

        .rc-cta-section {
          text-align: center;
          padding: 140px 40px;
          background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(58,40,10,0.4) 0%, transparent 70%);
          position: relative;
        }

        .rc-cta-section .rc-h2 {
          max-width: 700px;
          margin: 0 auto 24px;
        }

        .rc-cta-body {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: #B5A898;
          line-height: 1.8;
          max-width: 500px;
          margin: 0 auto 56px;
        }

        .rc-footer {
          border-top: 1px solid rgba(201,169,110,0.1);
          padding: 60px 40px;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .rc-footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C9A96E;
        }

        .rc-footer-links {
          display: flex;
          gap: 32px;
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #4A4438;
          flex-wrap: wrap;
          justify-content: center;
        }

        .rc-footer-links a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
        }

        .rc-footer-links a:hover { color: #C9A96E; }

        .rc-footer-copy {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          color: #3A342C;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .rc-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .rc-nav { padding: 24px 24px; }
          .rc-nav.scrolled { padding: 16px 24px; }

          .rc-ident-inner,
          .rc-about-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .rc-services-grid,
          .rc-process-steps,
          .rc-gallery-grid {
            grid-template-columns: 1fr;
          }

          .rc-footer {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }

          .rc-section,
          .rc-gallery-inner,
          .rc-process,
          .rc-family-inner,
          .rc-cta-section {
            padding-left: 24px;
            padding-right: 24px;
          }

          .rc-section { padding-top: 80px; padding-bottom: 80px; }
          .rc-gallery-inner { padding-top: 80px; padding-bottom: 80px; }
          .rc-process { padding-top: 80px; padding-bottom: 80px; }
          .rc-family-inner { padding-top: 80px; padding-bottom: 80px; }
          .rc-cta-section { padding-top: 100px; padding-bottom: 100px; }

          .rc-hero-badges { gap: 24px; }
          .rc-nav-logo { font-size: 14px; }
          .rc-nav-cta { padding: 10px 18px; font-size: 9px; }
        }
      `}</style>

      <div className="rc-particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="rc-particle"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${60 + ((i * 13) % 40)}%`,
              animationDuration: `${6 + (i % 7)}s`,
              animationDelay: `${(i * 0.7) % 8}s`,
              width: i % 3 === 0 ? '3px' : '2px',
              height: i % 3 === 0 ? '3px' : '2px',
              opacity: 0,
            }}
          />
        ))}
      </div>

      <nav className={`rc-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="rc-nav-logo">Ronaldo Cantarelli</div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rc-nav-cta"
        >
          Agendar
        </a>
      </nav>

      <section className="rc-hero">
        <div className="rc-hero-divider rc-reveal" ref={addRef} />
        <p className="rc-hero-eyebrow rc-reveal rc-d1" ref={addRef}>
          Psicanalista Clínico · Terapeuta Cristão
        </p>
        <h1 className="rc-hero-title rc-reveal rc-d2" ref={addRef}>
          Quando a dor emocional
          <br />
          precisa de <em>escuta técnica</em>
          <br />e direção responsável.
        </h1>
        <p className="rc-hero-subtitle rc-reveal rc-d3" ref={addRef}>
          Acompanhamento psicanalítico para adultos, casais e famílias que
          enfrentam sofrimento emocional, conflitos relacionais e padrões
          psíquicos repetitivos.
        </p>
        <div className="rc-hero-ctas rc-reveal rc-d4" ref={addRef}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rc-btn-primary"
          >
            Agendar pelo WhatsApp
          </a>
          <a href="#servicos" className="rc-btn-secondary">
            Conhecer os serviços
          </a>
        </div>
        <div className="rc-hero-badges rc-reveal" ref={addRef}>
          {['Psicanálise Clínica', 'Terapia Familiar', 'Lagoinha Morumbi'].map(
            (badge) => (
              <div className="rc-badge" key={badge}>
                {badge}
              </div>
            )
          )}
        </div>
      </section>

      <div className="rc-ident">
        <div className="rc-ident-inner">
          <div>
            <p className="rc-label rc-reveal" ref={addRef}>
              Para quem é
            </p>
            <h2 className="rc-h2 rc-reveal rc-d1" ref={addRef}>
              Nem sempre conhecer a verdade é
              <br />
              <em>suficiente para viver em paz.</em>
            </h2>
            <p className="rc-body rc-reveal rc-d2" ref={addRef}>
              Há pessoas que conhecem a Bíblia, servem a Deus, sustentam a
              família e seguem em frente — mas por dentro estão emocionalmente
              feridas e tentando manter de pé o que já começa a ruir.
            </p>
          </div>
          <div>
            <div className="rc-ident-pains">
              {[
                'Ansiedade, angústia e sobrecarga emocional contínua',
                'Conflitos conjugais e familiares persistentes',
                'Feridas do passado que continuam afetando o presente',
                'Padrões repetitivos que sabotam escolhas e vínculos',
                'Desgaste espiritual associado a sofrimento psíquico',
                'Crise de identidade, propósito ou direção',
              ].map((pain, i) => (
                <div
                  className="rc-pain-item rc-reveal"
                  ref={addRef}
                  style={{ transitionDelay: `${i * 0.06}s` }}
                  key={i}
                >
                  <div className="rc-pain-dot" />
                  <span>{pain}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="servicos" style={{ background: '#0C0A06' }}>
        <div className="rc-section">
          <p className="rc-label rc-reveal" ref={addRef}>
            Especializações
          </p>
          <h2 className="rc-h2 rc-reveal rc-d1" ref={addRef}>
            Um trabalho que busca
            <br />
            <em>a causa</em>, não apenas o sintoma.
          </h2>
        </div>
        <div
          className="rc-services-grid"
          style={{ maxWidth: 1100, margin: '0 auto', paddingBottom: 120 }}
        >
          {services.map((service, i) => (
            <div
              className="rc-service-card rc-reveal"
              ref={addRef}
              style={{ transitionDelay: `${i * 0.1}s` }}
              key={service.title}
            >
              <div className="rc-service-num">0{i + 1}</div>
              <h3 className="rc-service-title">{service.title}</h3>
              <p className="rc-service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rc-about">
        <div className="rc-about-inner">
          <div>
            <p className="rc-label rc-reveal" ref={addRef}>
              Sobre
            </p>
            <blockquote className="rc-about-quote rc-reveal rc-d1" ref={addRef}>
              Cuidar de pessoas exige mais do que boa intenção. Exige{' '}
              <em>preparo, escuta e responsabilidade clínica.</em>
            </blockquote>
            <p className="rc-body rc-reveal rc-d2" ref={addRef}>
              Ronaldo Cantarelli atua com psicanálise clínica e acompanhamento
              terapêutico, com foco na compreensão da dinâmica emocional,
              conflitos relacionais e processos subjetivos que impactam a vida
              psíquica e familiar. Sua trajetória reúne formação teológica,
              experiência pastoral, estudos terapêuticos e especialização em
              terapia familiar.
            </p>
          </div>
          <div>
            <p className="rc-label rc-reveal" ref={addRef}>
              Formação & Atuação
            </p>
            <div className="rc-credentials">
              {credentials.map((credential, i) => (
                <div
                  className="rc-credential rc-reveal"
                  ref={addRef}
                  style={{ transitionDelay: `${i * 0.07}s` }}
                  key={credential.label}
                >
                  <div className="rc-credential-dot" />
                  {credential.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rc-family">
        <div className="rc-family-inner">
          <p
            className="rc-label rc-reveal"
            ref={addRef}
            style={{ justifyContent: 'center' }}
          >
            Identidade & Missão
          </p>
          <h2
            className="rc-h2 rc-reveal rc-d1"
            ref={addRef}
            style={{ textAlign: 'center' }}
          >
            A família não entra aqui como detalhe afetivo.
            <br />
            <em>Entra como estrutura.</em>
          </h2>
          <blockquote className="rc-family-quote rc-reveal rc-d2" ref={addRef}>
            "Compreender a história de alguém exige compreender também os
            vínculos que ajudaram a formar essa história."
          </blockquote>
          <p
            className="rc-body rc-reveal rc-d3"
            ref={addRef}
            style={{ margin: '0 auto', textAlign: 'center' }}
          >
            Grande parte dos conflitos psíquicos e relacionais não pode ser lida
            de maneira isolada. A família aparece como chave de leitura clínica,
            campo de conflito e espaço decisivo de sofrimento — e de
            reconstrução.
          </p>
        </div>
      </div>

      <div className="rc-gallery">
        <div className="rc-gallery-inner">
          <p className="rc-label rc-reveal" ref={addRef}>
            Galeria de valores
          </p>
          <h2 className="rc-h2 rc-reveal rc-d1" ref={addRef}>
            Seis pilares que sustentam
            <br />
            <em>essa abordagem de cuidado.</em>
          </h2>

          <div className="rc-gallery-grid">
            {galleryCards.map((card, i) => (
              <div
                className="rc-gallery-card rc-reveal"
                ref={addRef}
                style={{ transitionDelay: `${i * 0.08}s` }}
                key={card.title}
              >
                <div className="rc-gallery-kicker">Card 0{i + 1}</div>
                <h3 className="rc-gallery-title">{card.title}</h3>
                <p className="rc-gallery-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#0C0A06' }}>
        <div className="rc-process">
          <p
            className="rc-label rc-reveal"
            ref={addRef}
            style={{ justifyContent: 'center' }}
          >
            Como funciona
          </p>
          <h2 className="rc-h2 rc-reveal rc-d1" ref={addRef}>
            Um processo claro,
            <br />
            <em>técnico e responsável.</em>
          </h2>
          <div className="rc-process-steps">
            {[
              {
                n: '01',
                t: 'Contato inicial',
                d: 'Você entra em contato pelo WhatsApp ou preenche o formulário de atendimento.',
              },
              {
                n: '02',
                t: 'Triagem e direcionamento',
                d: 'As necessidades são compreendidas para avaliar o melhor formato e encaminhamento.',
              },
              {
                n: '03',
                t: 'Início do processo',
                d: 'O acompanhamento começa com escuta, análise e aprofundamento progressivo.',
              },
            ].map((step, i) => (
              <div
                className="rc-step rc-reveal"
                ref={addRef}
                style={{ transitionDelay: `${i * 0.12}s` }}
                key={step.n}
              >
                {i < 2 && <div className="rc-step-connector" />}
                <div className="rc-step-num">{step.n}</div>
                <div className="rc-step-title">{step.t}</div>
                <p className="rc-step-desc">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: '#0F0C07',
          borderTop: '1px solid rgba(201,169,110,0.08)',
        }}
      >
        <div className="rc-section" style={{ maxWidth: 900, margin: '0 auto' }}>
          <p className="rc-label rc-reveal" ref={addRef}>
            Perguntas frequentes
          </p>
          <h2 className="rc-h2 rc-reveal rc-d1" ref={addRef}>
            Dúvidas <em>respondidas.</em>
          </h2>
          <div className="rc-faq-wrap">
            {faqs.map((faq, i) => (
              <div
                className="rc-faq-item rc-reveal"
                ref={addRef}
                style={{ transitionDelay: `${i * 0.07}s` }}
                key={i}
              >
                <button
                  className="rc-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span
                    className={`rc-faq-icon${openFaq === i ? ' open' : ''}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`rc-faq-a${openFaq === i ? ' open' : ''}`}
                  style={{
                    maxHeight: openFaq === i ? 220 : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="cta" className="rc-cta-section">
        <div className="rc-particles" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="rc-particle"
              style={{
                left: `${10 + ((i * 9) % 80)}%`,
                top: `${(i * 11) % 100}%`,
                animationDuration: `${5 + (i % 6)}s`,
                animationDelay: `${(i * 0.5) % 5}s`,
              }}
            />
          ))}
        </div>

        <p
          className="rc-label rc-reveal"
          ref={addRef}
          style={{ justifyContent: 'center' }}
        >
          Próximo passo
        </p>
        <h2 className="rc-h2 rc-reveal rc-d1" ref={addRef}>
          Você não precisa continuar
          <br />
          carregando sozinho o que já
          <br />
          <em>está afetando tudo ao redor.</em>
        </h2>
        <p className="rc-cta-body rc-reveal rc-d2" ref={addRef}>
          Dê o primeiro passo para um processo de cuidado com profundidade
          técnica, escuta responsável e foco em elaboração real.
        </p>
        <div className="rc-hero-ctas rc-reveal rc-d3" ref={addRef}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rc-btn-primary"
          >
            Falar no WhatsApp
          </a>
          <a href="#servicos" className="rc-btn-secondary">
            Conhecer os serviços
          </a>
        </div>
      </section>

      <footer
        style={{
          background: '#0C0A06',
          borderTop: '1px solid rgba(201,169,110,0.08)',
        }}
      >
        <div className="rc-footer">
          <div className="rc-footer-logo">Ronaldo Cantarelli</div>
          <div className="rc-footer-links">
            <a href="#servicos">Serviços</a>
            <a href="#cta">Contato</a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="rc-footer-copy">
            © 2025 Ronaldo Cantarelli · Psicanalista Clínico
          </div>
        </div>
      </footer>
    </>
  )
}
