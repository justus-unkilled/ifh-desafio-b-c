'use client';
import {
  EventIdentity,
  LastEditionNote,
  MentorCredentials,
} from '@/components/design/event-identity';
import { TestimonialGallery } from '@/components/design/testimonial-gallery';

/* eslint-disable next/no-img-element -- Original optimized assets preserve image behavior. */
import { useSyncExternalStore } from 'react';
import { registrationUrl } from '@/lib/registration-url';
function subscribeLocation(callback: () => void) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}
import {
  ArrowUpRight,
  ArrowRight,
  CalendarDays,
  Video,
  Check,
  Clock3,
  Heart,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const lessons = [
  [
    '04 OUT',
    'DOMINGO',
    'O Oceano Azul da Medicina',
    'Entenda onde seu conhecimento médico encontra novas oportunidades.',
    'Conheça a atuação judicial e particular, quem contrata um perito e como começar a enxergar a perícia como uma possibilidade real para sua carreira.',
  ],
  [
    '05 OUT',
    'SEGUNDA',
    'Captação de Perícias Lucrativas',
    'Saiba como buscar suas primeiras oportunidades.',
    'Aprenda os primeiros passos para se posicionar e captar perícias particulares. Um caminho ativo para construir relações com clientes e advogados.',
  ],
  [
    '06 OUT',
    'TERÇA',
    'Multiplicando o Valor da Sua Hora Médica',
    'Pare de olhar apenas para o número de horas na agenda.',
    'Entenda as habilidades e a estratégia por trás de uma atuação valorizada. Aprenda a comunicar o valor do seu trabalho pericial.',
  ],
  [
    '07 OUT',
    'QUARTA',
    'O Canva da Perícia Médica Lucrativa',
    'Enxergue a estrutura de um negócio médico-pericial.',
    'Conecte captação, processos, organização e relacionamento com clientes em um plano de construção do seu negócio.',
  ],
  [
    '08 OUT',
    'QUINTA',
    'Perícias de Erro Médico',
    'Conheça uma frente de atuação que exige conhecimento técnico.',
    'Entenda o papel do médico na assistência técnica em processos de responsabilidade médica e as oportunidades dessa área de atuação.',
  ],
];
const questions = [
  [
    'Estou começando do zero. O Desafio é para mim?',
    'Sim. As aulas apresentam o mercado e os primeiros passos na perícia médica, incluindo a captação de perícias particulares. Você não precisa chegar sabendo fazer perícia. Precisa estar disposto a aprender e aplicar.',
  ],
  [
    'Preciso ter especialidade para participar?',
    'Para participar do Desafio, você precisa ser médico com CRM ativo, tendo ou não especialidade. A participação no evento não substitui a capacitação e os requisitos aplicáveis a cada trabalho pericial.',
  ],
  [
    'Vou precisar abandonar os meus plantões?',
    'A proposta é conhecer uma nova possibilidade de atuação e planejar seus próximos passos. Uma transição depende da sua realidade, da sua preparação e dos resultados que você construir.',
  ],
  [
    'Quando acontecem as aulas e quanto tempo duram?',
    'De 04 a 08 de outubro de 2026, sempre às 20h, no horário de Brasília, ao vivo no Zoom. As aulas têm duração prevista de 60 a 90 minutos.',
  ],
  [
    'Como recebo o acesso?',
    'Depois de concluir sua inscrição oficial, você recebe por e-mail as orientações de acesso ao canal de avisos no WhatsApp. Por lá, recebe os links e as informações do evento. A interação com os colegas acontece durante as aulas ao vivo.',
  ],
  [
    'O ingresso inclui a mentoria ZENIT?',
    'Não. O ingresso de R$ 97 é para o Desafio: cinco aulas ao vivo e os materiais descritos nesta página. O ZENIT é um programa de mentoria separado.',
  ],
  [
    'O Desafio garante renda com perícias?',
    'Não. Você vai aprender caminhos, habilidades e estratégias. Resultados dependem de capacitação, execução, experiência e condições de mercado. Os relatos de alunos são individuais e não representam garantia de resultado.',
  ],
];

export default function Home() {
  const search = useSyncExternalStore(
    subscribeLocation,
    () => window.location.search,
    () => '',
  );
  const checkout = registrationUrl(search);
  return (
    <main id="inicio" className="variant-b">
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <div className="announcement">
        <span className="live-dot" /> 04 A 08 DE OUTUBRO{' '}
        <span className="separator">/</span> 5 NOITES PARA REPENSAR SUA CARREIRA
      </div>
      <header className="header wrap">
        <a
          href="#inicio"
          className="brand"
          aria-label="Instituto Felipe Hurtado, início"
        >
          <strong>
            IFH<span>®</span>
          </strong>
          <span>
            INSTITUTO
            <br />
            FELIPE HURTADO
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#jornada">O que você vai aprender</a>
          <a href="#mentor">Seu mentor</a>
        </nav>
        <a className="nav-cta" href="#inscricao">
          Quero participar <ArrowUpRight size={17} />
        </a>
      </header>
      <section className="hero wrap" id="conteudo">
        <div className="hero-copy">
          <EventIdentity />
          <h1>
            Sua medicina
            <br />
            vale mais que
            <br />
            <em>
              um plantão
              <br className="desktop-break" /> atrás do outro.
            </em>
          </h1>
          <p className="hero-lead">
            Aprenda a construir uma nova fonte de renda com a{' '}
            <strong>perícia particular</strong> e abra espaço para a vida que
            sua agenda vem adiando.
          </p>
          <div className="event-line">
            <span>
              <CalendarDays size={17} /> 04–08 outubro · 20h
            </span>
            <span>
              <Video size={18} /> Ao vivo no Zoom
            </span>
          </div>
          <a className="button" href="#inscricao">
            Quero começar na perícia <ArrowUpRight size={21} />
          </a>
          <p className="micro">
            <Check size={14} /> Para médicos com CRM ativo · Ingresso R$ 97
          </p>
        </div>
        <div className="hero-art">
          <span className="vertical-label">
            CONHECIMENTO MÉDICO. NOVAS POSSIBILIDADES.
          </span>
          <div className="hero-arch" />
          <img
            className="hero-person"
            src="/felipe-hero.webp"
            alt="Felipe Hurtado, médico, perito e mentor"
            width="900"
            height="1339"
            fetchPriority="high"
          />
          <div className="mentor-label">
            <span className="small-line" />
            <p>
              <strong>Felipe Hurtado</strong>
              <span>Formado em Medicina e Direito.</span>
            </p>
            <ArrowUpRight size={22} />
          </div>
        </div>
      </section>
      <div className="trust wrap">
        <div>
          <strong>
            9.000<span>+</span>
          </strong>
          <p>
            alunos médicos
            <br />
            peritos empresários
          </p>
        </div>
        <div>
          <strong>5 noites</strong>
          <p>
            ao vivo para enxergar
            <br />
            um novo caminho
          </p>
        </div>
        <div>
          <strong className="degree-trust">
            Formado em
            <br />
            Medicina e Direito
          </strong>
          <p>
            conhecimento técnico
            <br />
            com visão de negócio
          </p>
        </div>
      </div>

      <section className="section wrap pain" id="para-quem">
        <div className="section-heading">
          <div>
            <p className="eyebrow">VOCÊ RECONHECE ESSA ROTINA?</p>
            <h2>
              A agenda está cheia.
              <br />
              <em>E a sua vida?</em>
            </h2>
          </div>
          <p>
            Você estudou anos para ser médico.
            <br />
            Mas ganhar mais ainda custa outra noite,
            <br />
            outro fim de semana, outra ausência.
          </p>
        </div>
        <div className="pain-grid">
          <article>
            <Clock3 />
            <span className="card-index">01</span>
            <h3>
              Se você para,
              <br />a renda para.
            </h3>
            <p>
              O próximo aumento depende de encaixar mais um plantão em uma
              semana que já não cabe em você.
            </p>
          </article>
          <article>
            <Heart />
            <span className="card-index">02</span>
            <h3>
              Você chega.
              <br />
              Eles já dormiram.
            </h3>
            <p>
              O tempo com a família vira o intervalo entre uma escala e outra. E
              o descanso fica sempre para depois.
            </p>
          </article>
          <article>
            <TrendingUp />
            <span className="card-index">03</span>
            <h3>
              Você quer mudar.
              <br />
              Mas começa por onde?
            </h3>
            <p>
              A perícia chama sua atenção. Só que ainda falta entender quem
              contrata, como captar e qual é o primeiro passo.
            </p>
          </article>
        </div>
        <p className="pain-close">
          O próximo passo é conhecer um modelo que valoriza{' '}
          <strong>o que você sabe.</strong>
        </p>
      </section>
      <section className="opportunity">
        <div className="wrap section opportunity-grid">
          <div>
            <p className="eyebrow">UMA NOVA POSSIBILIDADE PARA SUA MEDICINA</p>
            <h2>
              Seu conhecimento pode
              <br />
              ir além do consultório.
              <br />
              <em>E da escala.</em>
            </h2>
            <p>
              Na perícia particular, você coloca seu conhecimento médico a
              serviço de questões que precisam de análise técnica. Pode atuar
              como assistente técnico, elaborar pareceres periciais e apoiar
              clientes e advogados.
            </p>
            <p>
              O Desafio mostra como começar a construir essa atuação com
              estratégia: entender o mercado, captar oportunidades e organizar
              um negócio.
            </p>
            <a className="text-link" href="#jornada">
              Conheça o caminho das cinco aulas <ArrowRight size={19} />
            </a>
          </div>
          <div className="path">
            <div>
              <span>01</span>
              <p>
                <small>ENXERGAR</small>
                <strong>Entenda o mercado</strong>
                <span>Quem precisa do seu conhecimento e por quê.</span>
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <small>COMEÇAR</small>
                <strong>Aprenda a captar</strong>
                <span>Posicionamento e relações que geram oportunidades.</span>
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <small>CONSTRUIR</small>
                <strong>Pense como empresário</strong>
                <span>
                  Processos e estratégia para desenvolver sua atuação.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap section proof" id="historias">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HISTÓRIAS REAIS. CAMINHOS POSSÍVEIS.</p>
            <h2>
              Uma mudança de carreira
              <br />
              começa com <em>uma decisão.</em>
            </h2>
          </div>
          <p>
            Conheça médicos da comunidade IFH
            <br />
            que construíram novas possibilidades
            <br />
            com a perícia médica.
          </p>
        </div>
        <TestimonialGallery />
        <p className="disclaimer">
          Relatos individuais de alunos da comunidade IFH. Resultados variam e
          não são uma promessa de renda ou consequência garantida do Desafio.
        </p>
        <div className="community">
          <img
            src="/comunidade.webp"
            alt="Médicos reunidos em um encontro presencial da comunidade IFH"
            loading="lazy"
            width="1200"
            height="600"
          />
          <div>
            <span>VOCÊ NÃO PRECISA DESCOBRIR TUDO SOZINHO.</span>
            <strong>
              Conhecimento se compartilha.
              <br />
              Possibilidades se ampliam.
            </strong>
            <p>Mais de 9 mil alunos médicos peritos empresários.</p>
          </div>
        </div>
      </section>
      <section className="journey" id="jornada">
        <div className="wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SUA JORNADA NO DESAFIO</p>
              <h2>
                Cinco noites.
                <br />
                <em>Um próximo passo mais claro.</em>
              </h2>
            </div>
            <p>
              De 04 a 08 de outubro, às 20h.
              <br />
              Ao vivo no Zoom, com Felipe Hurtado.
              <br />
              Selecione uma aula para conhecer o conteúdo.
            </p>
          </div>
          <LastEditionNote />
          <Accordion className="lessons" defaultValue={[0]}>
            {lessons.map(([date, day, title, benefit, body], i) => (
              <AccordionItem value={i} key={title}>
                <AccordionTrigger className="lesson-trigger">
                  <span className="lesson-date">
                    <strong>{date}</strong>
                    <small>{day}</small>
                  </span>
                  <span className="lesson-name">
                    <small>AULA 0{i + 1}</small>
                    <strong>{title}</strong>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="lesson-body">
                  <h3>{benefit}</h3>
                  <p>{body}</p>
                  <span>
                    <Video size={15} /> 20h · Ao vivo no Zoom
                  </span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="wrap section mentor" id="mentor">
        <div className="mentor-photo">
          <img
            src="/felipe-mentor.webp"
            alt="Felipe Hurtado"
            loading="lazy"
            width="460"
            height="650"
          />
          <span>MÉDICO. PERITO. EMPRESÁRIO. MENTOR.</span>
        </div>
        <div>
          <p className="eyebrow">QUEM VAI CONDUZIR VOCÊ</p>
          <h2>
            Felipe Hurtado.
            <br />
            <em>
              Prática para ensinar.
              <br />
              Visão para ir além.
            </em>
          </h2>
          <MentorCredentials />
          <p className="mentor-note">
            Conhecimento de quem atua. Clareza de quem ensina.
          </p>
          <p className="signature">
            Tamo junto e vai dar perícia!
            <br />
            <span>— Felipe Hurtado</span>
          </p>
        </div>
      </section>
      <section className="offer-section" id="inscricao">
        <div className="wrap section offer-grid">
          <div>
            <p className="eyebrow">PARTICIPE DA ÚLTIMA EDIÇÃO</p>
            <h2>
              O próximo capítulo
              <br />
              da sua medicina
              <br />
              <em>pode começar aqui.</em>
            </h2>
            <p>
              Cinco noites para entender o mercado, enxergar novas
              possibilidades e planejar seus primeiros passos na perícia.
            </p>
            <ul className="included">
              {[
                '5 aulas ao vivo com Felipe Hurtado',
                'Área de membros exclusiva IFHFLIX',
                'Canal de avisos e links no WhatsApp',
                'Interação com outros médicos durante as aulas',
                'E-book sobre cadastro nos tribunais',
                'Materiais complementares das aulas',
              ].map((x) => (
                <li key={x}>
                  <Check size={17} />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="ticket">
            <div className="ticket-top">
              <span>ÚLTIMA EDIÇÃO</span>
              <ArrowUpRight size={23} />
            </div>
            <h3>
              Desafio Perícia
              <br />
              Médica Lucrativa
            </h3>
            <div className="ticket-event">
              <span>
                <CalendarDays size={17} /> 04–08 de outubro de 2026
              </span>
              <span>
                <Video size={17} /> 20h · Ao vivo no Zoom
              </span>
            </div>
            <div className="price">
              <span>R$</span>
              <strong>97</strong>
              <span>,00</span>
            </div>
            <p className="price-note">
              Ingresso para os cinco dias do Desafio.
            </p>
            <a className="button" href={checkout} data-checkout="official">
              Quero garantir meu ingresso <ArrowUpRight size={21} />
            </a>
            <p className="checkout-note">
              Continue sua inscrição no site oficial do IFH.
            </p>
            <div className="ticket-bottom">
              <ShieldCheck size={26} />
              <p>
                <strong>7 dias de garantia</strong>
                <span>Conforme as condições da inscrição oficial.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap section faq" id="duvidas">
        <div>
          <p className="eyebrow">ANTES DO SEU PRÓXIMO PASSO</p>
          <h2>
            Uma decisão melhor
            <br />
            começa com <em>clareza.</em>
          </h2>
          <p>Ficou com alguma dúvida?</p>
          <a
            className="text-link"
            href="https://api.whatsapp.com/send/?phone=5511969791566&text=Ol%C3%A1%2C+gostaria+de+falar+com+o+atendimento%2C+poderia+me+ajudar+por+favor%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com a equipe IFH <ArrowUpRight size={18} />
          </a>
        </div>
        <Accordion className="faq-list">
          {questions.map(([q, a], i) => (
            <AccordionItem key={q} value={i}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>
                <p>{a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <footer className="wrap footer">
        <p className="footer-love">
          <em>Mais presença na vida de quem ama.</em>
        </p>
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <strong>
            IFH<span>®</span>
          </strong>
          <span>
            INSTITUTO
            <br />
            FELIPE HURTADO
          </span>
        </a>
        <p>
          © 2026 Instituto Felipe Hurtado
          <br />
          Av. Paulista, 2073 · São Paulo, SP
        </p>
        <a
          href="https://institutofelipehurtado.com.br/politica-de-privacidade/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de privacidade ↗
        </a>
      </footer>
      <div className="mobile-cta">
        <p>
          5 noites ao vivo <strong>R$ 97</strong>
        </p>
        <a href="#inscricao">
          Quero participar <ArrowUpRight size={17} />
        </a>
      </div>
    </main>
  );
}
