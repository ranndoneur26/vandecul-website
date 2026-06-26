"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { translations, type Language } from "./translations";

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const [lang, setLang] = useState<Language>('ca');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isCookiesModalOpen, setIsCookiesModalOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const t = translations[lang];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Check for cookie consent
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        setShowCookieBanner(true);
      }
    }

    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add("bg-background/95");
        } else {
          header.classList.remove("bg-background/95");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SEO Update
  useEffect(() => {
    document.title = t.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t.description);
    }
  }, [lang, t.title, t.description]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nom = formData.get('nom') || 'Desconegut';
    const email = formData.get('email') || 'No facilitat';
    const genere = formData.get('genere') || 'No especificat';
    const pressupost = formData.get('pressupost') || 'No especificat';
    const objectiu = formData.get('objectiu') || '';
    const deadline = formData.get('deadline') || '';
    const telefon = formData.get('telefon') || '';

    let body = `${t.contacte.form.nom}: ${nom}\n` +
      `${t.contacte.form.email}: ${email}\n` +
      `${t.contacte.form.genere.label}: ${genere}\n` +
      `${t.contacte.form.pressupost.label}: ${pressupost}\n` +
      `${t.contacte.form.objectiu}: ${objectiu}\n` +
      `${t.contacte.form.deadline}: ${deadline}\n`;

    if (telefon) body += `${t.contacte.form.telefon}: ${telefon}\n`;

    window.location.href = `mailto:VandeCul.produccions@gmail.com?subject=${encodeURIComponent(t.nav.cta)} - ${encodeURIComponent(String(nom))}&body=${encodeURIComponent(body)}`;
    setFormSubmitted(true);
  };

  return (
    <>
      <div className="grain-overlay"></div>

      {/* ═══════════════ HEADER ═══════════════ */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-grid-line transition-colors duration-300"
      >
        <div className="flex justify-between items-center h-36 px-margin-page w-full mx-auto pb-1">
          {/* Logo — scroll top (now to home page) */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo_vandecul.png"
              alt="VandeCul Logo"
              width={80}
              height={20}
              className="w-[60px] md:w-[80px] h-auto object-contain cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-10 items-center">
            {[
              { id: "serveis", label: t.nav.serveis },
              { id: "projectes", label: t.nav.projectes },
              { id: "proces", label: t.nav.proces },
              { id: "contacte", label: t.nav.contacte },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(`#${s.id}`)}
                className="font-label-technical text-label-technical text-on-surface hover:text-technical-cyan transition-colors duration-300 hover:opacity-50 uppercase cursor-pointer"
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            {/* Language dropdown */}
            <select
              className="hidden lg:block font-label-technical text-label-technical text-muted-gray bg-transparent border border-grid-line px-3 py-1.5 focus:ring-0 focus:border-technical-cyan cursor-pointer appearance-auto"
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
            >
              <option value="ca" className="bg-background text-on-surface">CA</option>
              <option value="es" className="bg-background text-on-surface">ES</option>
              <option value="en" className="bg-background text-on-surface">EN</option>
            </select>

            {/* CTA header */}
            <button
              onClick={() => scrollTo("#contacte")}
              className="hidden sm:block bg-primary text-background px-6 py-3 font-headline-lg text-[14px] font-bold uppercase hover:bg-technical-cyan transition-all duration-200 active:scale-95 cursor-pointer"
            >
              {t.nav.cta}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-primary cursor-pointer"
              aria-label="Obrir menú"
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-grid-line bg-background/95 backdrop-blur-md px-margin-page py-6 flex flex-col gap-6 animate-fade-in">
            {[
              { id: "serveis", label: t.nav.serveis },
              { id: "projectes", label: t.nav.projectes },
              { id: "proces", label: t.nav.proces },
              { id: "contacte", label: t.nav.contacte },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(`#${item.id}`)}
                className="font-label-technical text-label-technical text-on-surface hover:text-technical-cyan transition-colors uppercase text-left cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacte")}
              className="bg-primary text-background px-6 py-3 font-headline-lg text-[14px] font-bold uppercase hover:bg-technical-cyan transition-all mt-2 cursor-pointer"
            >
              {t.nav.cta}
            </button>
          </nav>
        )}
      </header>

      <main className="relative pt-36" id="top">
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative min-h-[90vh] flex items-center px-margin-page border-b border-grid-line overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40"></div>
          <div className="grid grid-cols-1 md:grid-cols-12 w-full z-10 relative">
            <div className="md:col-span-8 flex flex-col gap-6">
              <span className="font-label-technical text-label-technical text-technical-cyan">
                {t.hero.label}
              </span>
              <h1 className="font-headline-xl text-headline-xl leading-none md:text-[100px]">
                {t.hero.h1[0]}<br />
                {t.hero.h1[1]}<br />
                {t.hero.h1[2]}
              </h1>

              {/* Proposta de valor */}
              <p className="font-body-md text-on-surface text-xl md:text-2xl max-w-3xl mt-2 leading-snug">
                {t.hero.valueProp}
              </p>

              {/* Paràgraf resumit */}
              <p className="max-w-2xl font-body-md text-on-surface-variant mt-2 text-base">
                {t.hero.summary}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => scrollTo("#contacte")}
                  className="bg-primary text-on-primary px-8 py-4 font-headline-lg text-[16px] uppercase hover:bg-technical-cyan transition-colors cursor-pointer"
                >
                  {t.hero.ctaPrimary}
                </button>

              </div>
              <button
                onClick={() => scrollTo("#serveis")}
                className="font-label-technical text-label-technical text-technical-cyan hover:text-primary transition-colors mt-2 flex items-center gap-2 cursor-pointer w-fit"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                {t.hero.ctaSecondary}
              </button>
            </div>

            <div className="hidden md:flex md:col-span-4 flex-col justify-end items-end pb-12">
              <div className="text-right border-l border-technical-cyan pl-6">
                <p className="font-label-technical text-technical-cyan mb-2">COORD_DATA</p>
                <p className="font-label-code text-muted-gray">41°23'19"N 2°10'11"E</p>
                <p className="font-label-code text-muted-gray">ESTABLISHED_2026</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-4 font-label-code text-technical-cyan opacity-50">[ + ]</div>
          <div className="absolute bottom-0 left-0 p-4 font-label-code text-technical-cyan opacity-50">[ + ]</div>
        </section>

        {/* ═══════════════ MARQUEE ═══════════════ */}
        <div className="border-b border-grid-line py-4 overflow-hidden bg-background">
          <div className="marquee-content whitespace-nowrap">
            <span className="font-headline-lg text-[24px] tracking-widest text-primary px-4">
              {t.marquee}
            </span>
            <span className="font-headline-lg text-[24px] tracking-widest text-primary px-4">
              {t.marquee}
            </span>
          </div>
        </div>

        {/* ═══════════════ SERVEIS ═══════════════ */}
        <section className="px-margin-page py-24 border-b border-grid-line" id="serveis">
          <div className="max-w-4xl mb-20">
            <span className="font-label-technical text-technical-cyan block mb-4">{t.serveis.header}</span>
            <h2 className="font-headline-lg text-headline-lg">
              {t.serveis.h2}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-grid-line">
            {t.serveis.cards.map((card, idx) => (
              <div key={idx} className="border-r border-b border-grid-line p-10 group hover:bg-surface-container transition-colors duration-500 hover:opacity-50">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-label-technical text-muted-gray">{`0${idx + 1}`}</span>
                  <span className="material-symbols-outlined text-technical-cyan">
                    {["videocam", "theater_comedy", "history_edu", "auto_awesome", "movie", "edit_note"][idx]}
                  </span>
                </div>
                <h3 className="font-headline-lg text-[24px] mb-4 group-hover:text-technical-cyan transition-colors">{card.title}</h3>
                <p className="font-body-md text-on-surface-variant text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
          {/* CTA serveis */}
          <div className="mt-16 flex flex-wrap gap-6 items-center">
            <button
              onClick={() => scrollTo("#contacte")}
              className="bg-primary text-background px-8 py-4 font-headline-lg text-[16px] uppercase hover:bg-technical-cyan transition-colors cursor-pointer"
            >
              {t.serveis.cta}
            </button>
          </div>
        </section>

        {/* ═══════════════ PROJECTES ═══════════════ */}
        <section className="py-24 border-b border-grid-line overflow-hidden" id="projectes">
          <div className="px-margin-page flex justify-between items-end mb-16">
            <div>
              <span className="font-label-technical text-technical-cyan block mb-4">{t.projectes.header}</span>
              <h2 className="font-headline-lg text-headline-lg">{t.projectes.h2}</h2>
            </div>
            <div className="hidden md:block font-label-code text-muted-gray text-right">
              {t.projectes.stats.records}: 04<br />
              {t.projectes.stats.year}: 2024-2026
            </div>
          </div>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-0 border-t border-grid-line scrollbar-hide">
            {[
              { n: "01", cat: lang === 'ca' ? "Curt Ficció" : lang === 'es' ? "Corto Ficción" : "Short Fiction", title: "MENÚ", meta: "DIR: A. VandeCul", year: "2025", img: "/img_cyclist.png" },
              { n: "02", cat: lang === 'ca' ? "Documental Ficcionat" : lang === 'es' ? "Documental Ficcionado" : "Docu-fiction", title: "El Sacerdote sónico", meta: "Doc.", year: "2026", img: "/img_stone.png" },
              { n: "03", cat: lang === 'ca' ? "Documental ficcionat" : lang === 'es' ? "Documental ficcionado" : "Docu-fiction", title: "Anna's archive", meta: "Doc. Investigació", year: "2026", img: "/img_silk.png" },
              { n: "04", cat: lang === 'ca' ? "Corporatiu" : lang === 'es' ? "Corporativo" : "Corporate", title: "LIQUID GLOW", meta: "ART INSTALLATION", year: "2026", img: "/img_liquid.png" },
            ].map((p) => (
              <div key={p.n} className="group relative border-r border-grid-line overflow-hidden aspect-[3/4] min-w-[80vw] md:min-w-[40vw] lg:min-w-[25vw] snap-start">
                <img
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  src={p.img}
                  alt={p.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="font-label-code text-technical-cyan block mb-2">
                    {p.n} / {p.cat}
                  </span>
                  <h4 className="font-headline-lg text-[28px]">{p.title}</h4>
                  <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-center font-label-code">
                    <span>{p.meta}</span>
                    <span>{p.year}</span>
                  </div>
                  {/* CTA per peça */}
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 font-label-technical text-label-technical text-technical-cyan hover:text-primary transition-colors opacity-0 group-hover:opacity-100 duration-500"
                  >
                    <span className="material-symbols-outlined text-[14px]">play_arrow</span>
                    {t.projectes.ctaTrailer}
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* CTA filmografia */}
          <div className="px-margin-page mt-12">
            <button className="font-label-technical text-label-technical text-technical-cyan hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              {t.projectes.ctaArchive}
            </button>
          </div>
        </section>

        {/* ═══════════════ PROCÉS ═══════════════ */}
        <section className="px-margin-page py-24 border-b border-grid-line bg-surface-container-lowest" id="proces">
          <div className="mb-20">
            <span className="font-label-technical text-technical-cyan block mb-4">{t.proces.header}</span>
            <h2 className="font-headline-lg text-headline-lg">{t.proces.h2}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.proces.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className={`h-px w-full relative ${idx === 0 ? "bg-technical-cyan" : "bg-muted-gray opacity-30"}`}>
                  {idx === 0 && <div className="absolute -top-1.5 left-0 w-3 h-3 bg-technical-cyan"></div>}
                </div>
                <span className={`font-headline-lg text-[40px] ${idx === 0 ? "text-technical-cyan" : "text-muted-gray"}`}>{`0${idx + 1}`}</span>
                <h3 className="font-headline-lg text-[20px] uppercase">{step.title}</h3>
                <p className="font-body-md text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
          {/* CTA workflow */}
          <div className="mt-16">
            <button
              onClick={() => scrollTo("#contacte")}
              className="border border-primary text-primary px-8 py-4 font-headline-lg text-[16px] uppercase hover:bg-primary hover:text-background transition-colors cursor-pointer"
            >
              {t.proces.cta}
            </button>
          </div>
        </section>

        {/* ═══════════════ CONFIANÇA ═══════════════ */}
        <section className="px-margin-page py-16 border-b border-grid-line bg-surface-container-lowest">
          <div className="mb-10">
            <span className="font-label-technical text-technical-cyan block mb-4">{t.clients.header}</span>
            <p className="font-label-technical text-muted-gray uppercase tracking-widest">{t.clients.title}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {["Ajuntament de Barcelona", "Fundació Miró", "Televisió de Catalunya", "Acció Cultural"].map((name) => (
              <div key={name} className="border border-grid-line p-6 flex items-center justify-center h-20">
                <span className="font-label-technical text-[10px] text-muted-gray uppercase text-center">{name}</span>
              </div>
            ))}
          </div>
          <blockquote className="border-l-2 border-technical-cyan pl-6 max-w-2xl">
            <p className="font-body-md text-on-surface-variant italic">
              &ldquo;{t.clients.testimonial}&rdquo;
            </p>
            <cite className="font-label-technical text-[10px] text-muted-gray mt-3 block not-italic uppercase">
              {t.clients.cite}
            </cite>
          </blockquote>
        </section>

        {/* ═══════════════ CONTACTE ═══════════════ */}
        <section className="px-margin-page py-24 border-b border-grid-line" id="contacte">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <span className="font-label-technical text-technical-cyan block mb-4">{t.contacte.header}</span>
              <h2 className="font-headline-lg text-headline-lg mb-4 leading-tight">
                {t.contacte.h2}
              </h2>
              {/* Micro-CTA */}
              <p className="font-label-technical text-technical-cyan flex items-center gap-2 mb-8">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                {t.contacte.microCta}
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                {t.contacte.labels.map((label, idx) => (
                  <span key={idx} className="bg-surface-container-high text-on-surface px-4 py-2 font-label-technical text-[10px] border border-grid-line">{label}</span>
                ))}
              </div>
              <div className="space-y-4 font-label-technical text-muted-gray">
                <p>Adreça: {t.contacte.address}</p>
                <p>EMAIL: VandeCul.produccions@gmail.com</p>
                <p>TEL: +34 622566385</p>
              </div>
            </div>

            {/* FORMULARI */}
            {!formSubmitted ? (
              <form className="space-y-10" onSubmit={handleSubmit}>
                {/* Nom */}
                <div className="relative">
                  <label className="font-label-technical text-[10px] text-technical-cyan uppercase block mb-2">{t.contacte.form.nom}</label>
                  <input
                    name="nom"
                    className="w-full bg-transparent border-0 border-b border-white py-4 focus:ring-0 focus:border-technical-cyan transition-colors font-headline-lg text-[24px] text-on-surface"
                    placeholder={t.contacte.form.placeholders.nom}
                    type="text"
                    required
                  />
                </div>
                {/* Email */}
                <div className="relative">
                  <label className="font-label-technical text-[10px] text-technical-cyan uppercase block mb-2">{t.contacte.form.email}</label>
                  <input
                    name="email"
                    className="w-full bg-transparent border-0 border-b border-white py-4 focus:ring-0 focus:border-technical-cyan transition-colors font-headline-lg text-[24px] text-on-surface"
                    placeholder={t.contacte.form.placeholders.email}
                    type="email"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Gènere dropdown */}
                  <div className="relative">
                    <label className="font-label-technical text-[10px] text-technical-cyan uppercase block mb-2">{t.contacte.form.genere.label}</label>
                    <select name="genere" className="w-full bg-transparent border-0 border-b border-white py-4 focus:ring-0 focus:border-technical-cyan transition-colors font-headline-lg text-[18px] text-on-surface appearance-auto cursor-pointer">
                      <option value="" className="bg-background">{t.contacte.form.genere.placeholder}</option>
                      {t.serveis.cards.map((card, idx) => (
                        <option key={idx} value={card.title.toLowerCase().replace(/\s+/g, '-')} className="bg-background">{card.title}</option>
                      ))}
                      <option value="altre" className="bg-background">{lang === 'ca' ? 'Altre' : lang === 'es' ? 'Otro' : 'Other'}</option>
                    </select>
                  </div>
                  {/* Pressupost dropdown */}
                  <div className="relative">
                    <label className="font-label-technical text-[10px] text-technical-cyan uppercase block mb-2">{t.contacte.form.pressupost.label}</label>
                    <select name="pressupost" className="w-full bg-transparent border-0 border-b border-white py-4 focus:ring-0 focus:border-technical-cyan transition-colors font-headline-lg text-[18px] text-on-surface appearance-auto cursor-pointer">
                      <option value="" className="bg-background">{t.contacte.form.pressupost.placeholder}</option>
                      <option value="low" className="bg-background">&lt; 5.000€</option>
                      <option value="mid" className="bg-background">5.000 – 15.000€</option>
                      <option value="high" className="bg-background">&gt; 15.000€</option>
                      <option value="unknown" className="bg-background">{lang === 'ca' ? 'Encara no ho sé' : lang === 'es' ? 'Aún no lo sé' : 'I don\'t know yet'}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Objectiu */}
                  <div className="relative">
                    <label className="font-label-technical text-[10px] text-technical-cyan uppercase block mb-2">{t.contacte.form.objectiu}</label>
                    <input
                      name="objectiu"
                      className="w-full bg-transparent border-0 border-b border-white py-4 focus:ring-0 focus:border-technical-cyan transition-colors font-headline-lg text-[18px] text-on-surface"
                      placeholder={t.contacte.form.placeholders.objectiu}
                      type="text"
                    />
                  </div>
                  {/* Deadline */}
                  <div className="relative">
                    <label className="font-label-technical text-[10px] text-technical-cyan uppercase block mb-2">{t.contacte.form.deadline}</label>
                    <input
                      name="deadline"
                      className="w-full bg-transparent border-0 border-b border-white py-4 focus:ring-0 focus:border-technical-cyan transition-colors font-headline-lg text-[18px] text-on-surface"
                      placeholder={t.contacte.form.placeholders.deadline}
                      type="text"
                    />
                  </div>
                </div>

                {/* Checkbox trucada */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={showPhone}
                      onChange={(e) => setShowPhone(e.target.checked)}
                      className="w-4 h-4 bg-transparent border border-white text-technical-cyan focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="font-label-technical text-[10px] text-on-surface-variant uppercase group-hover:text-primary transition-colors">
                      {t.contacte.form.trucada}
                    </span>
                  </label>
                  {showPhone && (
                    <div className="relative mt-4 animate-fade-in">
                      <label className="font-label-technical text-[10px] text-technical-cyan uppercase block mb-2">{t.contacte.form.telefon}</label>
                      <input
                        name="telefon"
                        className="w-full bg-transparent border-0 border-b border-white py-4 focus:ring-0 focus:border-technical-cyan transition-colors font-headline-lg text-[18px] text-on-surface"
                        placeholder={t.contacte.form.placeholders.telefon}
                        type="tel"
                      />
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-primary text-background font-headline-lg text-[18px] py-6 hover:bg-technical-cyan transition-all duration-300 uppercase tracking-widest active:scale-[0.98] cursor-pointer"
                  >
                    {t.contacte.form.submit}
                  </button>
                  <a
                    href="#"
                    className="flex-1 border border-primary text-primary font-headline-lg text-[18px] py-6 uppercase tracking-widest text-center hover:bg-primary hover:text-background transition-colors"
                  >
                    {t.contacte.form.dossier}
                  </a>
                </div>

                <p className="font-label-code text-muted-gray text-center">
                  {t.contacte.form.footer}
                </p>
              </form>
            ) : (
              /* Confirmació */
              <div className="flex flex-col items-center justify-center gap-6 text-center animate-fade-in py-20">
                <span className="material-symbols-outlined text-technical-cyan text-[64px]">check_circle</span>
                <h3 className="font-headline-lg text-[32px]">{t.contacte.success.h3}</h3>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  {t.contacte.success.p}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="font-label-technical text-label-technical text-technical-cyan hover:text-primary transition-colors mt-4 cursor-pointer"
                >
                  {t.contacte.success.cta}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="bg-background border-t border-grid-line">
        <div className="flex flex-col md:flex-row justify-between items-center py-stack-md px-margin-page gap-gutter">
          <button
            onClick={() => scrollTo("#top")}
            className="font-label-technical text-[15px] font-bold text-primary hover:text-technical-cyan transition-colors cursor-pointer"
          >
            VandeCul Produccions
          </button>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              {[
                { icon: "photo_camera", label: "Instagram" },
                { icon: "videocam", label: "Vimeo" },
                { icon: "smart_display", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  title={social.label}
                  className="text-muted-gray hover:text-technical-cyan transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">{social.icon}</span>
                </a>
              ))}
            </div>
            <nav className="flex gap-6">
              <button
                onClick={() => setIsLegalModalOpen(true)}
                className="font-label-technical text-muted-gray hover:text-primary transition-colors hover:opacity-50 duration-300 cursor-pointer"
              >
                {t.footer.legal[0]}
              </button>
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="font-label-technical text-muted-gray hover:text-primary transition-colors hover:opacity-50 duration-300 cursor-pointer"
              >
                {t.footer.legal[1]}
              </button>
              <button
                onClick={() => setIsCookiesModalOpen(true)}
                className="font-label-technical text-muted-gray hover:text-primary transition-colors hover:opacity-50 duration-300 cursor-pointer"
              >
                {t.footer.legal[2]}
              </button>
              {t.footer.legal.slice(3).map((link, idx) => (
                <a key={idx} className="font-label-technical text-muted-gray hover:text-primary transition-colors hover:opacity-50 duration-300" href="#">{link}</a>
              ))}
            </nav>
            <div className="font-label-technical text-muted-gray uppercase opacity-50">
              {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>
      {/* ═══════════════ MODAL AVÍS LEGAL ═══════════════ */}
      {isLegalModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            onClick={() => setIsLegalModalOpen(false)}
          ></div>
          <div className="relative bg-surface-container border border-grid-line w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in">
            {/* Header Modal */}
            <div className="p-6 border-b border-grid-line flex justify-between items-center bg-surface-container-highest">
              <h3 className="font-headline-lg text-[20px] tracking-tight">{t.footer.legalModal.title}</h3>
              <button
                onClick={() => setIsLegalModalOpen(false)}
                className="material-symbols-outlined text-muted-gray hover:text-primary transition-colors cursor-pointer"
              >
                close
              </button>
            </div>
            {/* Content Modal */}
            <div className="p-8 md:p-12 overflow-y-auto font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed space-y-6 scrollbar-hide">
              {t.footer.legalModal.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            {/* Footer Modal */}
            <div className="p-6 border-t border-grid-line flex justify-end bg-surface-container-lowest">
              <button
                onClick={() => setIsLegalModalOpen(false)}
                className="bg-primary text-background px-6 py-3 font-label-technical text-[12px] uppercase hover:bg-technical-cyan transition-colors cursor-pointer"
              >
                {t.footer.legalModal.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ MODAL POLÍTICA DE PRIVACITAT ═══════════════ */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            onClick={() => setIsPrivacyModalOpen(false)}
          ></div>
          <div className="relative bg-surface-container border border-grid-line w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in">
            {/* Header Modal */}
            <div className="p-6 border-b border-grid-line flex justify-between items-center bg-surface-container-highest">
              <h3 className="font-headline-lg text-[20px] tracking-tight">{t.footer.privacyModal.title}</h3>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="material-symbols-outlined text-muted-gray hover:text-primary transition-colors cursor-pointer"
              >
                close
              </button>
            </div>
            {/* Content Modal */}
            <div className="p-8 md:p-12 overflow-y-auto font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed space-y-6 scrollbar-hide">
              {t.footer.privacyModal.content.map((p, idx) => (
                <div key={idx} className="whitespace-pre-line">{p}</div>
              ))}
            </div>
            {/* Footer Modal */}
            <div className="p-6 border-t border-grid-line flex justify-end bg-surface-container-lowest">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="bg-primary text-background px-6 py-3 font-label-technical text-[12px] uppercase hover:bg-technical-cyan transition-colors cursor-pointer"
              >
                {t.footer.privacyModal.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ MODAL POLÍTICA DE COOKIES ═══════════════ */}
      {isCookiesModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            onClick={() => setIsCookiesModalOpen(false)}
          ></div>
          <div className="relative bg-surface-container border border-grid-line w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in">
            {/* Header Modal */}
            <div className="p-6 border-b border-grid-line flex justify-between items-center bg-surface-container-highest">
              <h3 className="font-headline-lg text-[20px] tracking-tight">{t.footer.cookiesModal.title}</h3>
              <button
                onClick={() => setIsCookiesModalOpen(false)}
                className="material-symbols-outlined text-muted-gray hover:text-primary transition-colors cursor-pointer"
              >
                close
              </button>
            </div>
            {/* Content Modal */}
            <div className="p-8 md:p-12 overflow-y-auto font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed space-y-6 scrollbar-hide">
              {t.footer.cookiesModal.content.map((p, idx) => (
                <div key={idx} className="whitespace-pre-line">{p}</div>
              ))}
            </div>
            {/* Footer Modal */}
            <div className="p-6 border-t border-grid-line flex justify-end bg-surface-container-lowest">
              <button
                onClick={() => setIsCookiesModalOpen(false)}
                className="bg-primary text-background px-6 py-3 font-label-technical text-[12px] uppercase hover:bg-technical-cyan transition-colors cursor-pointer"
              >
                {t.footer.cookiesModal.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ COOKIE CONSENT BANNER ═══════════════ */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[110] p-4 animate-slide-up">
          <div className="max-w-7xl mx-auto bg-surface-container-highest border border-grid-line shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl bg-background/90">
            <div className="flex-1">
              <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
                {t.footer.cookieBanner.message}
              </p>
              <button
                onClick={() => {
                  setIsCookiesModalOpen(true);
                }}
                className="text-primary hover:underline text-xs mt-2 underline-offset-4"
              >
                {t.footer.cookieBanner.moreInfo}
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={() => {
                  localStorage.setItem("cookieConsent", "basic");
                  setShowCookieBanner(false);
                }}
                className="px-6 py-3 border border-grid-line font-label-technical text-[11px] uppercase hover:bg-surface-container transition-colors text-center w-full sm:w-auto"
              >
                {t.footer.cookieBanner.acceptBasic}
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("cookieConsent", "all");
                  setShowCookieBanner(false);
                }}
                className="px-6 py-3 bg-primary text-background font-label-technical text-[11px] uppercase hover:bg-technical-cyan transition-colors text-center w-full sm:w-auto"
              >
                {t.footer.cookieBanner.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
