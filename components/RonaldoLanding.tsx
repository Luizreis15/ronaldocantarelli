'use client'

import Image from 'next/image'
import { useEffect, useState, type ReactNode } from 'react'
import styles from './RonaldoLanding.module.css'

const whatsappAtendimento =
  'https://wa.me/5511988396576?text=Ol%C3%A1%2C%20Elaine!%20Vim%20pelo%20site%20do%20Ronaldo%20Cantarelli%20e%20gostaria%20de%20agendar%20um%20atendimento.'

const whatsappPalestra =
  'https://wa.me/5511988396576?text=Ol%C3%A1%2C%20Elaine!%20Vim%20pelo%20site%20do%20Ronaldo%20Cantarelli%20e%20gostaria%20de%20agendar%20uma%20palestra%20ou%20prega%C3%A7%C3%A3o%20com%20o%20Ronaldo.'

const heroMeta = ['Psicanálise Clínica', 'Terapia Familiar', 'Lagoinha Morumbi']

const pains = [
  'Ansiedade, angústia e sobrecarga emocional contínua',
  'Conflitos conjugais e familiares persistentes',
  'Feridas do passado que continuam afetando o presente',
  'Padrões repetitivos que sabotam escolhas e vínculos',
  'Desgaste espiritual associado a sofrimento psíquico',
  'Crise de identidade, propósito ou direção',
]

const stats = [
  {
    number: 'Adultos',
    label: 'Processos de escuta, elaboração emocional e reconstrução interna.',
  },
  {
    number: 'Casais',
    label: 'Conflitos relacionais, desgaste conjugal e revisão de padrões.',
  },
  {
    number: 'Famílias',
    label: 'Dinâmicas familiares, vínculos e impactos da história emocional.',
  },
]

const services = [
  {
    number: '01',
    title: 'Psicanálise Clínica',
    desc: 'Escuta aprofundada voltada à compreensão da história do sujeito, dos conflitos internos e dos padrões psíquicos que organizam o sofrimento.',
  },
  {
    number: '02',
    title: 'Terapia Familiar',
    desc: 'Acompanhamento especializado de dinâmicas familiares, conflitos intergeracionais e vínculos que impactam a saúde emocional.',
  },
  {
    number: '03',
    title: 'Terapia de Casal',
    desc: 'Análise dos padrões relacionais, desgaste conjugal e reconstrução dos vínculos com base na escuta clínica responsável.',
  },
  {
    number: '04',
    title: 'Saúde Mental Cristã',
    desc: 'Integração entre profundidade técnica e maturidade espiritual, sem superficialidade religiosa nem negligência terapêutica.',
  },
]

const credentials = [
  'Psicanalista Clínico',
  'Pós-Graduado em Terapia Familiar',
  'Pastor — Igreja Batista da Lagoinha Morumbi',
  'Professor Global de Teologia — Seminário Carisma',
  '17+ anos em comunicação e liderança',
]

const gallery = [
  {
    title: 'Ronaldo Cantarelli',
    src: '/images/ronaldo/retrato.jpg',
    alt: 'Retrato de Ronaldo Cantarelli',
    desc: 'Psicanalista clínico e terapeuta cristão — com formação técnica, experiência pastoral e escuta responsável para quem está carregando algo pesado por dentro.',
    position: 'center 18%',
  },
  {
    title: 'Família',
    src: '/images/ronaldo/familia.jpg',
    alt: 'Ronaldo com a família',
    desc: 'A família não é apenas contexto — é ponto de partida para compreender a história emocional e os padrões que atravessam as relações.',
    position: 'center 30%',
  },
  {
    title: 'Fé & Cuidado',
    src: '/images/ronaldo/pregacao.jpg',
    alt: 'Ronaldo em pregação',
    desc: 'Fé tratada com maturidade — sem superficialidade religiosa e sem negar a complexidade real do sofrimento humano.',
    position: 'center 24%',
  },
  {
    title: 'Ensino',
    src: '/images/ronaldo/palestra.jpg',
    alt: 'Ronaldo em palestra',
    desc: 'Uma trajetória construída com anos de comunicação, formação e presença pública — que sustenta a clareza do trabalho clínico.',
    position: 'center 22%',
  },
  {
    title: 'Clínica',
    src: '/images/ronaldo/atendimento.jpg',
    alt: 'Ronaldo em atendimento',
    desc: 'Um espaço de escuta real — com tempo, direção e responsabilidade clínica para tratar o que está por trás do sintoma, não apenas ao redor dele.',
    position: 'center 18%',
  },
  {
    title: 'Comunidade',
    src: '/images/ronaldo/comunidade.jpg',
    alt: 'Ronaldo em comunidade',
    desc: 'O cuidado se estende além da clínica — para a família, a igreja e os vínculos que formam, sustentam ou adoecem a vida emocional de cada pessoa.',
    position: 'center 20%',
  },
]

const steps = [
  {
    step: '01',
    title: 'Contato inicial',
    desc: 'Você entra em contato pelo WhatsApp e recebe o direcionamento inicial para o primeiro passo.',
  },
  {
    step: '02',
    title: 'Triagem e compreensão',
    desc: 'As necessidades são organizadas para avaliar formato, contexto, prioridade e direção adequada.',
  },
  {
    step: '03',
    title: 'Início do processo',
    desc: 'O acompanhamento começa com profundidade, clareza, escuta real e responsabilidade clínica.',
  },
]

const faqs = [
  {
    q: 'Esse atendimento é apenas para cristãos?',
    a: 'Não. O acompanhamento parte de fundamentos cristãos e pode acolher pessoas em diferentes momentos de fé, desde que exista abertura para esse contexto.',
  },
  {
    q: 'Esse trabalho é psicanalítico?',
    a: 'Sim. O processo parte de uma escuta clínica aprofundada, com atenção à história do sujeito, aos vínculos, aos conflitos internos e aos padrões emocionais que organizam o sofrimento.',
  },
  {
    q: 'Há atendimento para casal e família?',
    a: 'Sim. O acompanhamento também contempla conflitos conjugais e familiares, respeitando a complexidade de cada vínculo e de cada história.',
  },
  {
    q: 'Como funciona o primeiro contato?',
    a: 'Você pode iniciar pelo WhatsApp. A partir disso, acontece um direcionamento inicial para entender o contexto e orientar o próximo passo.',
  },
]

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  return (
    <div
      data-reveal="true"
      className={`${styles.reveal} ${className}`.trim()}
      style={{ ['--delay' as string]: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function Carousel({ items }: { items: typeof gallery }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length)
    }, 5000)
    return () => clearInterval(id)
  }, [paused, items.length])

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length)
  const next = () => setCurrent((c) => (c + 1) % items.length)

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`${styles.carouselSlide} ${i === current ? styles.carouselActive : ''}`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 760px) 100vw, (max-width: 1080px) 100vw, 1180px"
            className={styles.carouselImg}
            style={{ objectFit: 'cover', objectPosition: item.position }}
          />
          <div className={styles.carouselOverlay} />
          <div className={styles.carouselCaption}>
            <h3 className={styles.carouselTitle}>{item.title}</h3>
            <p className={styles.carouselDesc}>{item.desc}</p>
          </div>
        </div>
      ))}

      <div className={styles.carouselNav}>
        <button onClick={prev} className={styles.carouselArrow} aria-label="Anterior">
          {'‹'}
        </button>
        <div className={styles.carouselDots}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`${styles.carouselDot} ${i === current ? styles.carouselDotActive : ''}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} className={styles.carouselArrow} aria-label="Próximo">
          {'›'}
        </button>
      </div>

      <div key={current} className={styles.carouselBar} />
    </div>
  )
}

export default function RonaldoLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-reveal='true']"
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#topo" className={styles.brand}>
            Ronaldo Cantarelli
          </a>

          <nav className={styles.navLinks}>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#galeria">Galeria</a>
            <a href="#faq">Dúvidas</a>
          </nav>

          <a
            href={whatsappAtendimento}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navBtn}
          >
            Agendar
          </a>
        </div>
      </header>

      <section
        id="topo"
        className={`${styles.section} ${styles.dark} ${styles.hero}`}
      >
        <div className={`${styles.container} ${styles.heroGrid}`}>

          {/* 1 — Headline */}
          <Reveal className={styles.heroHeadline}>
            <p className={styles.heroKicker}>
              Psicanalista Clínico · Terapeuta Cristão
            </p>
            <h1 className={styles.heroTitle}>
              Quando a dor emocional
              <br />
              precisa de <em>escuta técnica</em>,
              <br />
              direção e presença real.
            </h1>
          </Reveal>

          {/* 2 — Imagem */}
          <Reveal delay={120} className={styles.heroVisual}>
            <div className={styles.heroFrame}>
              <Image
                src="/images/ronaldo/retrato.jpg"
                alt="Retrato de Ronaldo Cantarelli"
                fill
                priority
                sizes="(max-width: 760px) 100vw, (max-width: 1080px) 560px, 500px"
                className={styles.heroPortrait}
                style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
              />
              <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroFloat}>
              <strong>17+ anos</strong>
              Comunicação, liderança e cuidado de pessoas — formação técnica e presença pastoral.
            </div>
          </Reveal>

          {/* 3 — Subtítulo */}
          <Reveal delay={80} className={styles.heroSub}>
            <p className={styles.heroText}>
              Acompanhamento psicanalítico para adultos, casais e famílias que
              enfrentam sofrimento emocional, conflitos relacionais e padrões
              repetitivos que já estão afetando a vida por dentro e por fora.
            </p>
          </Reveal>

          {/* 4 — Botões */}
          <Reveal delay={160} className={styles.heroBottom}>
            <div className={styles.heroActions}>
              <a
                href={whatsappAtendimento}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Agendar atendimento
              </a>
              <a
                href={whatsappPalestra}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                Agendar palestra ou pregação
              </a>
            </div>
            <div className={styles.heroMeta}>
              {heroMeta.map((item) => (
                <div key={item} className={styles.metaCard}>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      <section className={`${styles.section} ${styles.light}`}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeader}>
            <p className={styles.label}>Para quem é</p>

            <h2 className={styles.title}>
              Nem sempre conhecer a verdade é
              <br />
              suficiente para viver em paz.
            </h2>

            <p className={styles.text}>
              Há pessoas que conhecem a Bíblia, servem a Deus, sustentam a
              família e seguem em frente — mas por dentro estão emocionalmente
              feridas e tentando manter de pé o que já começa a ruir.
            </p>
          </Reveal>

          <div className={styles.painGrid}>
            {pains.map((pain, index) => (
              <Reveal key={pain} delay={index * 70}>
                <div className={styles.painCard}>{pain}</div>
              </Reveal>
            ))}
          </div>

          <div className={styles.statsRow}>
            {stats.map((item) => (
              <Reveal key={item.number} delay={100}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>{item.number}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className={`${styles.section} ${styles.dark}`}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeader}>
            <p className={styles.label}>Especializações</p>

            <h2 className={styles.title}>
              Um trabalho que busca
              <br />a causa, não apenas o sintoma.
            </h2>

            <p className={styles.text}>
              A proposta aqui não é aliviar superficialmente o sofrimento, mas
              compreender o que o sustenta e conduzir um processo com mais
              profundidade, verdade e responsabilidade.
            </p>
          </Reveal>

          <div className={styles.cards2}>
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <article className={styles.cardDark}>
                  <span className={styles.cardNumber}>{service.number}</span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardText}>{service.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className={`${styles.section} ${styles.warm}`}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeader}>
            <p className={styles.label}>Sobre Ronaldo</p>

            <h2 className={styles.title}>
              Cuidar de pessoas exige
              <br />
              preparo, escuta e responsabilidade clínica.
            </h2>

            <p className={styles.text}>
              Ronaldo Cantarelli atua com psicanálise clínica e acompanhamento
              terapêutico, com foco na compreensão da dinâmica emocional,
              conflitos relacionais e processos subjetivos que impactam a vida
              psíquica e familiar. Sua trajetória reúne formação teológica,
              experiência pastoral e especialização em terapia familiar — com uma
              abordagem que une profundidade, firmeza e maturidade.
            </p>

            <div className={styles.quoteBox}>
              “A proposta não é oferecer respostas superficiais, mas conduzir um
              processo de escuta e elaboração que trate o sofrimento com
              seriedade, verdade e direção.”
            </div>
          </Reveal>

          <div className={styles.credentialList}>
            {credentials.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <div className={styles.credentialItem}>{item}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className={`${styles.section} ${styles.light}`}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeader}>
            <p className={styles.label}>Quem é Ronaldo</p>

            <h2 className={styles.title}>
              Técnica, fé e história
              <br />
              que sustentam o cuidado.
            </h2>

            <p className={styles.text}>
              Cada dimensão dessa trajetória — clínica, pastoral, familiar e comunitária — contribui diretamente para a profundidade do acompanhamento que ele oferece.
            </p>
          </Reveal>

          <Carousel items={gallery} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeader}>
            <p className={styles.label}>Como funciona</p>

            <h2 className={styles.title}>
              Um processo claro,
              <br />
              técnico e responsável.
            </h2>
          </Reveal>

          <div className={styles.processGrid}>
            {steps.map((step, index) => (
              <Reveal key={step.step} delay={index * 100}>
                <article className={styles.processCard}>
                  <span className={styles.processStep}>{step.step}</span>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={`${styles.section} ${styles.light}`}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeader}>
            <p className={styles.label}>Perguntas frequentes</p>

            <h2 className={styles.title}>
              Dúvidas respondidas
              <br />
              com clareza.
            </h2>
          </Reveal>

          <Reveal>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index

                return (
                  <div
                    key={faq.q}
                    className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
                  >
                    <button
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className={styles.faqIcon}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <div className={styles.faqAnswer}>{faq.a}</div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.cta}`}>
        <div className={styles.container}>
          <Reveal className={styles.ctaBox}>
            <div className={styles.ctaPanel}>
              <p className={styles.label}>Próximo passo</p>

              <h2 className={styles.title}>
                Você não precisa continuar
                <br />
                carregando sozinho o que já
                <br />
                está afetando tudo ao redor.
              </h2>

              <p className={styles.text}>
                Dê o primeiro passo para um processo de cuidado com profundidade
                técnica, escuta responsável e foco em elaboração real.
              </p>

              <div className={styles.ctaActions}>
                <a
                  href={whatsappAtendimento}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                >
                  Agendar atendimento
                </a>

                <a
                  href={whatsappPalestra}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSecondary}
                >
                  Agendar palestra ou pregação
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.brand}>Ronaldo Cantarelli</div>

          <div className={styles.footerLinks}>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#galeria">Galeria</a>
            <a href="#faq">Dúvidas</a>
          </div>

          <p>© 2026 Ronaldo Cantarelli · Psicanalista Clínico</p>
        </div>
      </footer>
    </main>
  )
}
