import { useEffect } from "react";
import { ButtonLarge } from "../ui/button-large";
import { LINKS } from "../links";
import {
  TECH_ICONS,
  IconChat,
  IconCamera,
  IconNote,
} from "../components/icons";

/* ---------- 小型展示组件（仅本页使用） ---------- */

function SectionHeading(props: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="section-heading reveal">
      <span className="section-heading__eyebrow">{props.eyebrow}</span>
      <h2 className="section-heading__title">{props.title}</h2>
      {props.lead && <p className="section-heading__lead">{props.lead}</p>}
    </div>
  );
}

const TICKER_WORDS = [
  "Racing",
  "Shooters",
  "Platformers",
  "Tower defense",
  "Exploration",
  "Driving",
  "Puzzle",
  "Simulation",
  "Multiplayer arenas",
  "City builders",
];

function Ticker() {
  const run = (
    <span className="ticker__run" aria-hidden="true">
      {TICKER_WORDS.map((w) => (
        <span key={w} className="ticker__word">
          {w}
          <span className="ticker__dot">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="ticker" aria-label="Game genres you can build in Wanaka">
      <div className="ticker__track">
        {run}
        {run}
      </div>
    </div>
  );
}

/* ---------- 数据 ---------- */

const VALUES = [
  {
    title: "Creation belongs to everyone",
    body: "Making a 3D game used to take a team, a budget, and years of training. We believe imagination should be the only requirement. Wanaka turns ideas into playable worlds, whether or not you have ever written a line of code.",
  },
  {
    title: "Play is better together",
    body: "Every world in Wanaka is built to be shared. Invite friends into the games you make, remix what the community has built, and play together across browser and mobile.",
  },
  {
    title: "Built on frontier technology",
    body: "We pair modern AI with a real-time 3D engine running on WebGPU, so creators get professional-grade rendering, physics, and multiplayer without installing anything.",
  },
];

const TECH = [
  {
    title: "AI-assisted creation",
    body: "Describe the game you want in plain language. Wanaka's creation agent assembles scenes, gameplay logic, and assets with you, turn by turn — you stay the director the whole time.",
  },
  {
    title: "Real-time 3D on WebGPU",
    body: "A modern rendering pipeline with dynamic lighting, sky and weather systems, water, and post-processing effects — running at interactive frame rates directly in the browser.",
  },
  {
    title: "Full physics simulation",
    body: "Rigid bodies, vehicles, character controllers, ropes, and soft bodies powered by a production-grade physics engine. Things in Wanaka roll, crash, bounce, and drift like they should.",
  },
  {
    title: "Multiplayer by design",
    body: "Host-authoritative networking is built into the platform, so the worlds you create can be played with friends out of the box — no server setup required.",
  },
  {
    title: "Play anywhere",
    body: "Games made in Wanaka run in any modern browser and on iPhone through the Wanaka App. One creation, every screen.",
  },
  {
    title: "A living asset library",
    body: "Thousands of curated 3D models, materials, and sounds are ready to drop into your world, with new assets added continuously.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Imagine it",
    body: "Start from a sentence — a cozy island town, a kart race on Mars, a tower-defense stand against robot spiders. Tell Wanaka what you see in your head.",
  },
  {
    num: "02",
    title: "Build it together",
    body: "The creation agent drafts the world; you shape it. Refine terrain, tweak gameplay, swap models, and adjust rules in a full 3D editor, with AI handling the heavy lifting.",
  },
  {
    num: "03",
    title: "Play it with the world",
    body: "Publish in one click. Your game gets a link anyone can open in the browser or on the Wanaka App — then watch friends and strangers play what you made.",
  },
];

const FAQ = [
  {
    q: "What is Wanaka World?",
    a: "Wanaka World is a platform for creating and playing 3D games. It combines an AI creation agent with a real-time 3D engine in the browser, so anyone can build a playable world and share it instantly.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. You can build complete games by describing what you want and refining the result in the visual editor. Creators who do code can go deeper with scripted game logic.",
  },
  {
    q: "What kinds of games can I make?",
    a: "Racing, shooters, platformers, tower defense, exploration, simulations — the engine supports physics-driven vehicles, character controllers, combat, multiplayer, and more, so most genres are on the table.",
  },
  {
    q: "Where can I play Wanaka games?",
    a: "In any modern desktop browser at studio.wanaka.fun, or on iPhone with the Wanaka App from the App Store.",
  },
  {
    q: "How do I share what I've made?",
    a: "Every published game gets a shareable link. Send it to friends, post it to the community, or open it on mobile — no downloads or installs required for players on the web.",
  },
];

const SOCIALS = [
  {
    icon: IconChat,
    title: "Discord",
    body: "Talk to the team, get building help, share works in progress, and join community playtests.",
    cta: "Join the server →",
    href: LINKS.discord,
  },
  {
    icon: IconCamera,
    title: "Instagram",
    body: "Highlights from worlds the community is building, behind the scenes, and feature reveals.",
    cta: "Follow @wanaka_wow →",
    href: LINKS.instagram,
  },
  {
    icon: IconNote,
    title: "TikTok",
    body: "Clips of the wildest things people make in Wanaka — and how they made them.",
    cta: "Watch @wanaka_world →",
    href: LINKS.tiktok,
  },
];

/* ---------- 页面 ---------- */

export default function Home() {
  // 滚动渐显：进入视口的 .reveal 元素加 is-visible
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero__blocks" aria-hidden="true">
          <span className="hero__block hero__block--a" />
          <span className="hero__block hero__block--b" />
          <span className="hero__block hero__block--c" />
          <span className="hero__block hero__block--d" />
          <span className="hero__block hero__block--e" />
        </div>
        <div className="hero__inner">
          <span className="hero__eyebrow">Wanaka World</span>
          <h1 className="hero__title">
            Create with friends.
            <br />
            Play with the <span className="hero__title-accent">world</span>.
          </h1>
          <p className="hero__lead">
            Wanaka is a platform where anyone can build real 3D games — by
            describing them. Our AI creation agent and WebGPU engine turn your
            ideas into playable, shareable worlds, right in the browser.
          </p>
          <div className="hero__ctas">
            <a href={LINKS.studio} target="_blank" rel="noreferrer">
              <ButtonLarge variant="primary">
                Start creating — it’s in your browser
              </ButtonLarge>
            </a>
            <a href={LINKS.appStore} target="_blank" rel="noreferrer">
              <ButtonLarge variant="secondary">Download for iOS</ButtonLarge>
            </a>
          </div>
          <ul className="hero__caps" aria-label="Platform capabilities">
            <li>AI-assisted creation</li>
            <li>WebGPU rendering</li>
            <li>Real physics</li>
            <li>Multiplayer</li>
            <li>Browser &amp; iOS</li>
          </ul>
        </div>
      </section>

      <Ticker />

      {/* About */}
      <section id="about" className="section">
        <SectionHeading
          eyebrow="About us"
          title="A game studio that builds the studio"
          lead="Wanaka World is a technology company building the next generation of user-generated games. We make the tools, the engine, and the playground — our community makes the games."
        />
        <div className="about__grid reveal">
          <div className="about__story">
            <p>
              Game creation has always had a wall around it: engines that take
              months to learn, pipelines that need whole teams, and ideas that
              die in tutorials. Wanaka exists to take that wall down. We build
              an AI-native creation platform where the distance between “I have
              an idea” and “my friends are playing it” is measured in minutes,
              not months.
            </p>
            <p>
              Under the hood, Wanaka is serious engineering: a real-time 3D
              engine on WebGPU with full physics simulation, networking, and an
              asset pipeline — fronted by a creation agent that speaks human.
              On the surface, it feels like play. That contrast is the product.
            </p>
          </div>
          <blockquote className="about__quote">
            The distance between “I have an idea” and “my friends are playing
            it” should be measured in <em>minutes</em>.
          </blockquote>
        </div>
        <div className="card-grid card-grid--3 reveal">
          {VALUES.map((v, i) => (
            <article key={v.title} className="card">
              <span className="card__index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="card__title">{v.title}</h3>
              <p className="card__body">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Products — 满幅色带 */}
      <div className="band">
        <section id="products" className="section section--in-band">
          <SectionHeading
            eyebrow="Our products"
            title="Two ways into Wanaka"
            lead="Create on the web. Play everywhere."
          />
          <div className="card-grid card-grid--2 reveal">
            <article className="card card--product card--frame">
              <div className="card__chrome" aria-hidden="true">
                <span />
                <span />
                <span />
                <i>studio.wanaka.fun</i>
              </div>
              <span className="card__badge">Web</span>
              <h3 className="card__title card__title--lg">Wanaka Studio</h3>
              <p className="card__body">
                The creation platform. Chat with the agent to draft a world,
                then shape it in a full 3D editor — terrain, lighting, physics
                behaviors, game logic, and a deep asset library. Publish with
                one click and your game is live.
              </p>
              <ul className="card__list">
                <li>AI creation agent that builds scenes and gameplay with you</li>
                <li>Professional 3D editor running entirely in the browser</li>
                <li>Thousands of ready-to-use models, materials, and sounds</li>
                <li>One-click publishing with instantly shareable links</li>
              </ul>
              <a href={LINKS.studio} target="_blank" rel="noreferrer">
                <ButtonLarge variant="primary">
                  Explore Wanaka Studio
                </ButtonLarge>
              </a>
            </article>
            <article className="card card--product card--frame">
              <div className="card__chrome card__chrome--phone" aria-hidden="true">
                <i>Wanaka for iPhone</i>
              </div>
              <span className="card__badge">iOS · App Store</span>
              <h3 className="card__title card__title--lg">Wanaka App</h3>
              <p className="card__body">
                The player&apos;s home. Browse worlds made by the community,
                jump into games in seconds, and keep up with creators you
                follow — all from your iPhone.
              </p>
              <ul className="card__list">
                <li>Discover and play community-made 3D games on mobile</li>
                <li>Official game collection curated by the Wanaka team</li>
                <li>Touch controls tuned for every genre</li>
                <li>Free to download on the App Store</li>
              </ul>
              <a href={LINKS.appStore} target="_blank" rel="noreferrer">
                <ButtonLarge variant="secondary">
                  Download on the App Store
                </ButtonLarge>
              </a>
            </article>
          </div>
        </section>
      </div>

      {/* Technology */}
      <section id="technology" className="section">
        <SectionHeading
          eyebrow="Technology"
          title="A real engine, not a toy"
          lead="Everything you publish on Wanaka runs on our in-house platform: a WebGPU rendering pipeline, production-grade physics, and AI tooling, engineered to work in a browser tab."
        />
        <div className="card-grid card-grid--3 reveal">
          {TECH.map((t, i) => {
            const Icon = TECH_ICONS[i];
            return (
              <article key={t.title} className="card card--tech">
                <span className="card__icon">
                  <Icon />
                </span>
                <h3 className="card__title">{t.title}</h3>
                <p className="card__body">{t.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* How it works — 满幅色带 */}
      <div className="band">
        <section id="how" className="section section--in-band">
          <SectionHeading
            eyebrow="How it works"
            title="From idea to playable in three steps"
          />
          <div className="steps reveal">
            {STEPS.map((s) => (
              <article key={s.num} className="step">
                <span className="step__num">{s.num}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__body">{s.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Community */}
      <section id="community" className="section">
        <SectionHeading
          eyebrow="Community"
          title="Made with the world, not just for it"
          lead="Wanaka is shaped daily by the people who create and play in it. Join us where the community lives."
        />
        <div className="card-grid card-grid--3 reveal">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                className="card card--link"
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="card__icon">
                  <Icon />
                </span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
                <span className="card__cta">{s.cta}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="faq reveal">
          {FAQ.map((f) => (
            <details key={f.q} className="faq__item">
              <summary className="faq__q">{f.q}</summary>
              <p className="faq__a">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="cta-banner">
        <div className="cta-banner__panel reveal">
          <span className="cta-banner__glyph" aria-hidden="true">
            W
          </span>
          <h2 className="cta-banner__title">Let’s create and play in Wanaka</h2>
          <p className="cta-banner__lead">
            Your first world is one sentence away.
          </p>
          <a href={LINKS.studio} target="_blank" rel="noreferrer">
            <ButtonLarge variant="primary">Open Wanaka Studio</ButtonLarge>
          </a>
        </div>
      </section>
    </main>
  );
}
