'use client';
import {
  EventIdentity,
  LastEditionNote,
  MentorCredentials,
} from '@/components/design/event-identity';
import { TestimonialGallery } from '@/components/design/testimonial-gallery';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Video,
  ShieldCheck,
  BookOpen,
  Users,
  MessageCircle,
} from 'lucide-react';
import { BlurFade } from '@/components/design/blur-fade';
import { InteractiveHoverLink } from '@/components/design/interactive-hover-link';
import { StickyProgram } from '@/components/design/sticky-program';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const CHECKOUT =
  'https://checkout.institutofelipehurtado.com.br/pay/desafio-pericia-medica-lucrativa';
const SUPPORT =
  'https://api.whatsapp.com/send/?phone=5511969791566&text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Desafio%20Per%C3%ADcia%20M%C3%A9dica.';
const lessons = [
  {
    day: '04',
    weekday: 'DOMINGO',
    title: 'Enxergue um novo caminho para a sua medicina.',
    label: 'O oceano azul da medicina',
    text: 'Entenda onde a perícia se encaixa na sua carreira, a diferença entre atuar para o juiz e como perito particular, e quais oportunidades fazem sentido para o seu momento.',
    takeaway:
      'Clareza sobre as possibilidades, antes de decidir seu próximo passo.',
  },
  {
    day: '05',
    weekday: 'SEGUNDA',
    title: 'Saiba por onde começar a captar perícias.',
    label: 'Captação de perícias lucrativas',
    text: 'Conheça os caminhos de entrada na perícia e como se apresentar a potenciais clientes. Entenda o papel do posicionamento e da captação ativa na construção de uma agenda pericial.',
    takeaway: 'Direção para começar sem depender apenas de uma nomeação.',
  },
  {
    day: '06',
    weekday: 'TERÇA',
    title: 'Aprenda a valorizar seu conhecimento médico.',
    label: 'Multiplicando o valor da sua hora médica',
    text: 'Veja como comunicar o valor da sua atuação, apresentar seus serviços e conduzir conversas comerciais com clareza. A perícia particular exige conhecimento técnico e habilidade para construir relações.',
    takeaway: 'Uma nova perspectiva sobre o valor que você entrega.',
  },
  {
    day: '07',
    weekday: 'QUARTA',
    title: 'Organize a perícia como um negócio.',
    label: 'O Canva da Perícia Médica Lucrativa',
    text: 'Conheça a estrutura de um negócio pericial: serviços, captação, atendimento e organização. Entenda o que priorizar no início e como planejar o crescimento sem tentar fazer tudo ao mesmo tempo.',
    takeaway: 'Prioridades mais claras para transformar intenção em ação.',
  },
  {
    day: '08',
    weekday: 'QUINTA',
    title: 'Conheça a atuação em processos de erro médico.',
    label: 'Escalando com perícias de erro médico',
    text: 'Entenda o papel do médico na análise técnica desses processos e como a assistência técnica integra o mercado pericial. Conheça essa frente de atuação e o preparo que ela exige.',
    takeaway:
      'Visão de uma área que conecta medicina, direito e análise técnica.',
  },
];
const faqs = [
  [
    'Nunca fiz uma perícia. O Desafio é para mim?',
    'Sim. O Desafio é voltado a médicos com CRM ativo, inclusive quem ainda não atua com perícias. Você vai conhecer o mercado, os caminhos de entrada e a estrutura de um negócio pericial. Não é preciso chegar sabendo por onde começar.',
  ],
  [
    'Preciso ter uma especialidade médica?',
    'Para participar do Desafio, você precisa ser médico com CRM ativo, com ou sem especialidade. Nas aulas, você vai conhecer diferentes possibilidades de atuação. A escolha de cada trabalho pericial depende do preparo técnico e dos requisitos aplicáveis ao caso.',
  ],
  [
    'Como encaixar as aulas na minha rotina?',
    'São cinco encontros de 04 a 08 de outubro de 2026, sempre às 20h, no horário de Brasília. As aulas são transmitidas pelo Zoom e têm duração prevista de 60 a 90 minutos. Reserve esse horário na agenda para acompanhar e enviar suas dúvidas.',
  ],
  [
    'Como recebo meu acesso depois da inscrição?',
    'Após a confirmação da compra, você recebe por e-mail as orientações de acesso ao canal de avisos no WhatsApp. Por lá, recebe os links e as informações do evento. A interação com os colegas acontece durante as aulas ao vivo.',
  ],
  [
    'O ingresso já inclui a mentoria ZENIT?',
    'Não. O ingresso de R$ 97 dá acesso ao Desafio e aos materiais apresentados nesta página. A mentoria ZENIT é um programa separado. Participar do Desafio não obriga você a contratar outra oferta.',
  ],
  [
    'Vou ter resultados financeiros em cinco dias?',
    'As cinco aulas são uma experiência de aprendizado e preparação. Não há promessa de renda, de contratação ou de resultado em um prazo determinado. Sua evolução depende de aplicação, preparo, experiência e contexto de atuação.',
  ],
  [
    'Como funciona a garantia de 7 dias?',
    'Se o Desafio não fizer sentido para você, solicite o reembolso em até 7 dias pelo e-mail contato@institutofelipehurtado.com.br. A garantia é incondicional, com devolução integral do valor do ingresso.',
  ],
];

function subscribeScroll(callback: () => void) {
  window.addEventListener('scroll', callback, { passive: true });
  window.addEventListener('resize', callback);
  return () => {
    window.removeEventListener('scroll', callback);
    window.removeEventListener('resize', callback);
  };
}
function stickySnapshot() {
  const offer = document.getElementById('inscricao')?.getBoundingClientRect();
  return (
    window.scrollY > 700 &&
    !(offer && offer.top < window.innerHeight && offer.bottom > 0)
  );
}
function subscribeLocation(callback: () => void) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}
export default function Home() {
  const query = useSyncExternalStore(
    subscribeLocation,
    () => window.location.search,
    () => '',
  );
  const showSticky = useSyncExternalStore(
    subscribeScroll,
    stickySnapshot,
    () => false,
  );
  const original = new URLSearchParams(query);
  const destination = new URL(CHECKOUT);
  [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
  ].forEach((key) => {
    const value = original.get(key);
    if (value) destination.searchParams.set(key, value.slice(0, 250));
  });
  const checkout = destination.toString();
  return (
    <div className="variant-c">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <div id="inicio" className="announcement">
        <span className="live-dot" /> A ÚLTIMA EDIÇÃO DO DESAFIO PERÍCIA MÉDICA
        LUCRATIVA <span className="announcement-divider">/</span>{' '}
        <span>04 a 08 de outubro · Sempre às 20h</span>
      </div>
      <div className="hero-shell">
        <header className="site-header wrap">
          <a
            href="#inicio"
            aria-label="Instituto Felipe Hurtado, início"
            className="brand"
          >
            <Image
              unoptimized
              src="/variant-c/logo-ifh.webp"
              width="147"
              height="50"
              alt="Instituto Felipe Hurtado"
            />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#programa">O que você vai aprender</a>
            <a href="#mentor">Seu mentor</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="nav-cta" href="#inscricao">
            Quero participar <ArrowUpRight size={17} />
          </a>
        </header>
        <section
          id="conteudo"
          className="hero wrap"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <EventIdentity />
            <BlurFade delay={0.08}>
              <h1 id="hero-title">
                <span>Sua agenda</span>
                <span>está cheia.</span>
                <span className="hero-question">
                  E a sua <em>vida?</em>
                </span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.18}>
              <p className="hero-description">
                Você não precisa de mais um plantão. Precisa conhecer um novo
                caminho para a sua medicina.
              </p>
              <p className="hero-support">
                Em 5 aulas ao vivo, entenda como começar na{' '}
                <strong>perícia particular</strong> e construir uma carreira com
                mais autonomia, reconhecimento e tempo para quem importa.
              </p>
              <div className="event-details">
                <span>
                  <CalendarDays size={18} /> 04–08 outubro · 20h
                </span>
                <span>
                  <Video size={19} /> Ao vivo no Zoom
                </span>
              </div>
              <InteractiveHoverLink href="#inscricao">
                Quero participar do Desafio
              </InteractiveHoverLink>
              <p className="hero-micro">
                <ShieldCheck size={15} /> Ingresso R$ 97 · Garantia de 7 dias
              </p>
            </BlurFade>
          </div>
          <div className="hero-portrait">
            <span className="portrait-word" aria-hidden="true">
              VIDA.
            </span>
            <div className="portrait-backdrop">
              <div className="backdrop-line" />
            </div>
            <div className="hero-date-card">
              <span>RESERVE NA SUA AGENDA</span>
              <strong>
                04<span>–</span>08
              </strong>
              <span>OUTUBRO · 20H · ZOOM</span>
            </div>
            <Image
              unoptimized
              className="hero-photo"
              src="/variant-c/felipe-hero.webp"
              width="900"
              height="1339"
              alt="Felipe Hurtado, médico, advogado e mentor em perícia médica"
              fetchPriority="high"
            />
            <div className="portrait-caption">
              <span className="caption-rule" />
              <div>
                <strong>Felipe Hurtado</strong>
                <span>Formado em Medicina e Direito.</span>
              </div>
            </div>
            <span className="portrait-side">
              CONHECIMENTO MÉDICO. NOVAS POSSIBILIDADES.
            </span>
          </div>
        </section>
        <div className="hero-bottom wrap">
          <p>
            <span className="small-cross">+</span>
            <strong>9.000</strong> alunos médicos peritos empresários
          </p>
          <p>
            Para médicos com CRM ativo
            <br />
            <span>Com ou sem experiência em perícia.</span>
          </p>
          <a href="#programa" aria-label="Explorar o programa">
            <ArrowDown size={23} />
          </a>
        </div>
      </div>
      <main>
        <section
          className="reality section-pad wrap"
          aria-labelledby="reality-title"
        >
          <div className="section-heading">
            <p className="eyebrow">VOCÊ SE RECONHECE AQUI?</p>
            <h2 id="reality-title">
              A medicina ocupa a sua agenda.
              <br />
              <em>Mas não deveria ocupar a sua vida inteira.</em>
            </h2>
          </div>
          <div className="reality-grid">
            <BlurFade inView className="pain-card">
              <article>
                <span className="index-number">01 /</span>
                <h3>
                  Você ganha.
                  <br />
                  Mas não tem tempo para viver.
                </h3>
                <p>
                  O plantão termina, o cansaço fica. E aquele jantar, a viagem
                  ou o tempo com os filhos acabam sempre para depois.
                </p>
              </article>
            </BlurFade>
            <BlurFade inView delay={0.08} className="pain-card">
              <article>
                <span className="index-number">02 /</span>
                <h3>
                  Para aumentar a renda,
                  <br />
                  só cabe trabalhar mais.
                </h3>
                <p>
                  Mais horas, mais atendimentos, mais uma escala. Seu
                  conhecimento cresceu, mas o jeito de ser remunerado continua o
                  mesmo.
                </p>
              </article>
            </BlurFade>
            <BlurFade inView delay={0.16} className="pain-card">
              <article>
                <span className="index-number">03 /</span>
                <h3>
                  Você quer mudar.
                  <br />
                  Só não sabe por onde começar.
                </h3>
                <p>
                  A perícia chama sua atenção. Mas faltam respostas: como
                  entrar, quem contrata e como dar o primeiro passo com direção.
                </p>
              </article>
            </BlurFade>
          </div>
          <div className="reality-footer">
            <ArrowUpRight size={28} />
            <p>
              Seu próximo passo pode começar com o que você já tem:
              <br />
              <strong>conhecimento médico e vontade de fazer diferente.</strong>
            </p>
            <a href="#programa" className="text-link">
              Conheça o caminho <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section
          className="program-section"
          id="programa"
          aria-labelledby="program-title"
        >
          <div className="wrap section-pad">
            <BlurFade inView className="program-heading">
              <div>
                <p className="eyebrow">O PROGRAMA · 5 ENCONTROS AO VIVO</p>
                <h2 id="program-title">
                  Você não precisa ter todas as respostas.
                  <br />
                  <em>Precisa começar pelas certas.</em>
                </h2>
              </div>
              <span className="program-duration">
                04–08 OUT
                <br />
                <strong>60 a 90 minutos por aula</strong>
                <span>20h · Horário de Brasília</span>
              </span>
            </BlurFade>
            <LastEditionNote />
            <StickyProgram lessons={lessons} />
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title">
          <div className="wrap proof-layout">
            <div>
              <p className="eyebrow light">
                CONHECIMENTO APLICADO, RESULTADO REAL
              </p>
              <h2 id="proof-title">
                Existe um caminho
                <br />
                além da próxima escala.
              </h2>
              <p>
                A trajetória de Rafael é um exemplo do potencial da perícia
                particular quando o conhecimento médico encontra aplicação e uma
                visão de negócio.
              </p>
              <p className="proof-context">Rafael · Médico e aluno do IFH</p>
            </div>
            <div className="proof-result">
              <span className="proof-overline">
                FATURAMENTO EM PERÍCIA PARTICULAR
              </span>
              <p>
                <span>R$</span> 800 <em>mil</em>
              </p>
              <strong>em 8 meses de atuação</strong>
              <span className="proof-disclaimer">
                Resultado individual. Faturamento não é lucro e não representa
                uma promessa de resultado para outros participantes.
              </span>
            </div>
          </div>
          <div className="wrap c-video-proof">
            <p className="eyebrow light">NA VOZ DE QUEM VIVEU</p>
            <TestimonialGallery />
            <p className="c-video-disclaimer">
              Relatos individuais de alunos. Resultados variam e não representam
              garantia de renda.
            </p>
          </div>
        </section>

        <section
          className="mentor-section section-pad wrap"
          id="mentor"
          aria-labelledby="mentor-title"
        >
          <div className="mentor-photo-wrap">
            <span className="mentor-image-label">
              QUEM VAI CAMINHAR COM VOCÊ
            </span>
            <Image
              unoptimized
              src="/variant-c/felipe-mentor.webp"
              alt="Felipe Hurtado, especialista em Medicina Legal e Perícia Médica"
              width="920"
              height="1157"
              loading="lazy"
            />
            <div className="mentor-seal">
              <strong>Formado em Medicina e Direito</strong>
              <span>Visão técnica. Visão de negócio.</span>
            </div>
          </div>
          <BlurFade inView className="mentor-copy">
            <p className="eyebrow">SEU MENTOR</p>
            <h2 id="mentor-title">
              Felipe
              <br />
              <em>Hurtado.</em>
            </h2>
            <p className="mentor-lead">Quem ensina também vive a perícia.</p>
            <MentorCredentials />
            <p className="signature">Tamo junto e vai dar perícia!</p>
            <span className="signature-name">Felipe Hurtado</span>
          </BlurFade>
        </section>

        <section
          className="offer-section"
          id="inscricao"
          aria-labelledby="offer-title"
        >
          <div className="wrap offer-layout section-pad">
            <div className="offer-copy">
              <p className="eyebrow">PARTICIPE DA ÚLTIMA EDIÇÃO</p>
              <h2 id="offer-title">
                A sua próxima decisão
                <br />
                não precisa ser
                <br />
                <em>mais um plantão.</em>
              </h2>
              <p>
                Reserve cinco noites para olhar para a sua carreira com outra
                perspectiva.
              </p>
              <ul className="offer-benefits">
                <li>
                  <Video size={20} />
                  <div>
                    <strong>5 aulas ao vivo com Felipe Hurtado</strong>
                    <span>
                      Conteúdo, exemplos, dúvidas e interação com os colegas.
                    </span>
                  </div>
                </li>
                <li>
                  <BookOpen size={20} />
                  <div>
                    <strong>Área de membros e materiais</strong>
                    <span>IFHFLIX, e-book e conteúdos complementares.</span>
                  </div>
                </li>
                <li>
                  <Users size={20} />
                  <div>
                    <strong>Avisos e links pelo WhatsApp</strong>
                    <span>
                      Receba os acessos e acompanhe as informações do evento.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ticket">
              <div className="ticket-top">
                <span>SEU INGRESSO</span>
                <span className="ticket-badge">ÚLTIMA EDIÇÃO</span>
              </div>
              <h3>
                Desafio Perícia
                <br />
                Médica Lucrativa
              </h3>
              <div className="ticket-schedule">
                <CalendarDays size={19} />
                <span>
                  04–08 outubro de 2026
                  <br />
                  <strong>Às 20h · Ao vivo no Zoom</strong>
                </span>
              </div>
              <div className="ticket-divider" />
              <span className="price-label">Acesso aos 5 dias por</span>
              <p className="price">
                <span>R$</span>97<span>,00</span>
              </p>
              <span className="price-detail">Pagamento único</span>
              <InteractiveHoverLink
                href={checkout}
                className="checkout-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quero participar do Desafio (checkout oficial em nova aba)"
              >
                Quero participar do Desafio
              </InteractiveHoverLink>
              <div className="ticket-assurance">
                <ShieldCheck size={16} />
                <span>Checkout oficial do Instituto Felipe Hurtado</span>
              </div>
              <div className="guarantee">
                <span className="guarantee-number">
                  7<small>DIAS</small>
                </span>
                <div>
                  <strong>Sua decisão, com tranquilidade.</strong>
                  <p>
                    Garantia incondicional de 7 dias.
                    <br />
                    Não fez sentido? Seu dinheiro de volta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="faq-section section-pad wrap"
          id="duvidas"
          aria-labelledby="faq-title"
        >
          <div className="faq-intro">
            <p className="eyebrow">ANTES DE DAR O PRÓXIMO PASSO</p>
            <h2 id="faq-title">
              Ficou alguma
              <br />
              <em>dúvida?</em>
            </h2>
            <p>
              Entenda como funciona.
              <br />
              E, se precisar, fale com a equipe.
            </p>
            <a
              href={SUPPORT}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <MessageCircle size={18} /> Falar com o atendimento{' '}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <Accordion className="faq-list">
            {faqs.map(([question, answer], index) => (
              <AccordionItem
                key={question}
                value={`faq-${index}`}
                className="faq-item"
              >
                <AccordionTrigger className="faq-trigger">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <a href="#inicio" aria-label="Voltar ao início">
              <Image
                unoptimized
                src="/variant-c/logo-ifh.webp"
                alt="Instituto Felipe Hurtado"
                width="147"
                height="50"
                loading="lazy"
              />
            </a>
            <p>
              Mais possibilidades para a sua medicina.
              <br />
              <span>Mais presença na vida de quem ama.</span>
            </p>
            <a href="#inicio" className="back-top" aria-label="Voltar ao topo">
              <ArrowUpRight size={22} />
            </a>
          </div>
          <div className="footer-bottom">
            <p>
              © 2026 Instituto Felipe Hurtado. Todos os direitos reservados.
            </p>
            <a
              href="https://institutofelipehurtado.com.br/politica-de-privacidade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de privacidade <ArrowUpRight size={12} />
            </a>
          </div>
          <p className="footer-address">
            Av. Paulista, 2073, 17º andar, Horsa II · São Paulo, SP
          </p>
        </div>
      </footer>
      <div
        className={`mobile-sticky ${showSticky ? 'is-visible' : ''}`}
        aria-hidden={!showSticky}
      >
        <div>
          <span>5 aulas ao vivo</span>
          <strong>
            R$ 97<small>,00</small>
          </strong>
        </div>
        <a href="#inscricao" tabIndex={showSticky ? 0 : -1}>
          Quero participar <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}
