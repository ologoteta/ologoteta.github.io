(() => {
  "use strict";

  const STORAGE_KEY = "ol-lang";

  const dict = {
    it: {
      skip: "Salta al contenuto",
      menu: "Menu",
      menuAria: "Apri o chiudi il menu",
      navAbout: "Chi sono",
      navFocus: "Focus",
      navProjects: "Progetti",
      navBooks: "Libri",
      navContact: "Contatti",
      heroKicker: "Milano",
      heroLead:
        "CIO, operations, AI e app — e sì, anche i romanzi. Se serve farlo, lo faccio.",
      ctaContact: "Parliamone",
      ctaCv: "CV PDF",
      aboutEyebrow: "Chi sono",
      aboutTitle: "Nato a Milano, 1983",
      aboutAnswer:
        "Oscar Logoteta è un CIO e capo operations milanese: tecnologia, prodotto, persone e conti nello stesso tavolo. Costruisce con l’AI, scrive noir ambientati a Milano, è founder di mitcamper.",
      factRoleLabel: "Ruolo",
      factRole: "CIO e capo operations",
      factCityLabel: "Sede",
      factCity: "Milano, Italia",
      factBornLabel: "Nato",
      factBuildLabel: "Founder",
      faqEyebrow: "Risposte",
      faqTitle: "FAQ",
      faq1Q: "Chi è Oscar Logoteta?",
      faq1A:
        "Oscar Logoteta è un CIO e capo operations milanese, nato il 13 aprile 1983. Guida trasformazione digitale, costruisce prodotti con l’AI, e scrive noir ambientati a Milano. È founder di mitcamper e autore della saga del commissario Renato Negri.",
      faq2Q: "Cosa fa Oscar Logoteta come CIO?",
      faq2A:
        "Unisce tecnologia, prodotto, persone e conti: AI e automazioni con Cursor, operations e riduzione costi misurabile (fino al −45% dove processi e AI contano), HR e cultura, app costruite end-to-end.",
      faq3Q: "Quali libri ha scritto Oscar Logoteta?",
      faq3A:
        "A come Armatura (2014, La Memoria del Mondo); la saga del commissario Negri per Fratelli Frilli — Milano disillusa (2017), Milano sottozero (2018), Milano vertigo (2021); e il racconto Strano, il destino in Quattro volte Natale (Todaro, 2020).",
      faq4Q: "Cos’è mitcamper?",
      faq4A:
        'mitcamper è la piattaforma fondata e costruita da Oscar Logoteta da solo: matching tra famiglie in camper su 17 indici di affinità, mappa live, chat e MitNight per le aree di sosta. Oltre 400 famiglie, cinque lingue. Sito: <a href="https://www.mitcamper.com" target="_blank" rel="noopener">mitcamper.com</a>.',
      mcKicker: "Founder",
      mcFilmLead: "Famiglie in camper che si trovano per affinità, non per caso.",
      mcIntro:
        "L’ho disegnata e messa in produzione da solo: profilo, matching, mappa, chat, cinque lingue. Non un social. Un modo per trovare chi vive il viaggio come te — e poi scriversi, vedersi, scegliere la sosta.",
      mcCta: "Apri mitcamper",
      mcG1t: "Incontri veri",
      mcG1b:
        "Smettere di sperare nella famiglia giusta in campeggio. L’obiettivo è un’affinità, prima ancora di arrivare.",
      mcG2t: "Compatibilità, non vicinanza",
      mcG2b:
        "17 indici, tre dimensioni: vita familiare, visione del mondo, tempo libero. Uno score. Più è alto, più ha senso scriversi.",
      mcG3t: "Mappa e sosta",
      mcG3b:
        "Famiglie compatibili in tempo reale, e MitNight: aree, parcheggi, campeggi, servizi, foto, recensioni. Dove fermarsi e con chi.",
      mcCapRoad: "La strada",
      mcCapTable: "Dopo il match",
      mcScore: "indici, uno score",
      mcStat1l: "Famiglie",
      mcStat2l: "Indici di affinità",
      mcStat3l: "Lingue",
      mcStat4l: "Founder, end-to-end",
      faq5Q: "Dove si trova Oscar Logoteta?",
      faq5A:
        "Milano, Italia. Si può scrivere a oscarlogoteta@gmail.com o su LinkedIn.",
      aboutP1:
        "Laureato in Scienze della Comunicazione. Oggi sono CIO e capo operations: tecnologia, prodotto, persone e conti nello stesso tavolo. Oltre 15 anni a guidare trasformazione digitale tra media, education e piattaforme enterprise.",
      aboutP2:
        "Costruisco con AI e Cursor, faccio nascere app, organizzo HR e off-site, tengo insieme i team e — soprattutto — faccio risparmiare: efficienza operativa misurabile, fino al −45% sui costi dove l’AI e i processi contano davvero.",
      aboutP3:
        'Sono founder di <a href="https://www.mitcamper.com" target="_blank" rel="noopener">mitcamper</a>: l’ho costruita da solo, end-to-end. Se manca qualcosa, lo disegno, lo porto in produzione e lo faccio funzionare — senza PowerPoint come mestiere.',
      aboutCv: "Scarica il curriculum →",
      focusEyebrow: "Focus",
      focusTitle: "Cosa faccio",
      focus1Title: "AI & build",
      focus1Body:
        'Cursor, modelli, automazioni: costruisco app e tool che prima non esistevano. Come con <a href="https://www.mitcamper.com" target="_blank" rel="noopener">mitcamper</a> — founder, e l’ho fatta tutta da solo.',
      focus2Title: "Ops & risparmio",
      focus2Body:
        "Capo operations sul serio: processi, costi, priorità. L’obiettivo è far girare meglio l’azienda e far risparmiare — in modo misurabile.",
      focus3Title: "Persone & cultura",
      focus3Body:
        "HR, off-site, allineamento dei team: organizzo le persone quanto organizzo i sistemi. Senza cultura, la tech non tiene.",
      focus4Title: "Scrittura",
      focus4Body:
        "Romanzi e racconti ambientati a Milano: l’altra metà del cervello, quella che tiene insieme storie, ritmo e personaggi.",
      booksEyebrow: "Bibliografia",
      booksTitle: "Libri",
      booksLead: "Noir e storie milanesi — l’altra mia produzione.",
      booksHint: "Scorri →",
      contactEyebrow: "Contatti",
      contactTitle: "Scrivimi",
      contactLead:
        "Inquadra, salva, oppure lancia un prompt.",
      signalKicker: "Digital ID · Milano",
      signalRole: "CIO & Head of Operations",
      signalQrCaption: "Inquadra · apre la vCard",
      signalSave: "Salva contatto",
      signalPrompt: "Copia prompt AI",
      signalMail: "Email",
      signalShare: "Condividi",
      signalCopied: "Prompt copiato — incollalo in ChatGPT o Cursor",
      signalShared: "Condiviso",
      signalPromptText:
        "Voglio contattare Oscar Logoteta (CIO & Head of Operations a Milano: AI, ops, prodotto, persone; founder di mitcamper; autore noir). Scrivi un messaggio breve, chiaro e umano per chiedergli di [descrivi cosa ti serve sbloccare]. Tono diretto, zero corporate fluff.",
      footerCopy:
        "© 2026 Oscar Logoteta. Tutti i diritti riservati. Questo sito non usa cookie.",
      metaTitle: "Oscar Logoteta | CIO, operations, AI e autore a Milano",
      metaDescription:
        "Oscar Logoteta è CIO e capo operations a Milano: AI, app, persone e risparmio misurabile. Autore dei noir del commissario Negri. Founder di mitcamper.",
      ogLocale: "it_IT",
      cvHref: "media/cv_oscar_logoteta_2026_IT.pdf",
    },
    en: {
      skip: "Skip to content",
      menu: "Menu",
      menuAria: "Open or close menu",
      navAbout: "About",
      navFocus: "Focus",
      navProjects: "Projects",
      navBooks: "Books",
      navContact: "Contact",
      heroKicker: "Milan",
      heroLead:
        "CIO, operations, AI, and apps — and yes, the novels too. If it needs doing, I do it.",
      ctaContact: "Let’s talk",
      ctaCv: "CV PDF",
      aboutEyebrow: "About",
      aboutTitle: "Born in Milan, 1983",
      aboutAnswer:
        "Oscar Logoteta is a Milan-based CIO and head of operations: technology, product, people and the numbers at the same table. He builds with AI, writes Milan-set noir, and founded mitcamper.",
      factRoleLabel: "Role",
      factRole: "CIO and head of operations",
      factCityLabel: "Based",
      factCity: "Milan, Italy",
      factBornLabel: "Born",
      factBuildLabel: "Founder",
      faqEyebrow: "Answers",
      faqTitle: "FAQ",
      faq1Q: "Who is Oscar Logoteta?",
      faq1A:
        "Oscar Logoteta is a Milan-based CIO and head of operations, born 13 April 1983. He leads digital transformation, builds AI products, and writes Milan-set noir. He is the founder of mitcamper and author of the Commissioner Renato Negri saga.",
      faq2Q: "What does Oscar Logoteta do as a CIO?",
      faq2A:
        "He holds technology, product, people and the numbers together: AI and automations with Cursor, operations and measurable cost cuts (up to 45% where process and AI matter), HR and culture, apps built end-to-end.",
      faq3Q: "Which books has Oscar Logoteta written?",
      faq3A:
        "A come Armatura (2014, La Memoria del Mondo); the Commissioner Negri saga for Fratelli Frilli — Milano disillusa (2017), Milano sottozero (2018), Milano vertigo (2021); and the story Strano, il destino in Quattro volte Natale (Todaro, 2020).",
      faq4Q: "What is mitcamper?",
      faq4A:
        'mitcamper is the platform Oscar Logoteta founded and built alone: matching for camper families across 17 affinity indices, a live map, chat, and MitNight for stopovers. 400+ families, five languages. Site: <a href="https://www.mitcamper.com" target="_blank" rel="noopener">mitcamper.com</a>.',
      mcKicker: "Founder",
      mcFilmLead: "Camper families who find each other by affinity, not by chance.",
      mcIntro:
        "I designed it and shipped it alone: profiles, matching, map, chat, five languages. Not a social network. A way to find people who travel the way you do — then write, meet, and pick the stop.",
      mcCta: "Open mitcamper",
      mcG1t: "Real meetings",
      mcG1b:
        "Stop hoping the right family shows up at the campsite. The point is an affinity, before you even arrive.",
      mcG2t: "Compatibility, not proximity",
      mcG2b:
        "17 indices, three dimensions: family life, worldview, free time. A score. The higher it is, the more it makes sense to write.",
      mcG3t: "Map and stopover",
      mcG3b:
        "Compatible families in real time, plus MitNight: areas, parking, campsites, services, photos, reviews. Where to stop, and with whom.",
      mcCapRoad: "The road",
      mcCapTable: "After the match",
      mcScore: "indices, one score",
      mcStat1l: "Families",
      mcStat2l: "Affinity indices",
      mcStat3l: "Languages",
      mcStat4l: "Founder, end-to-end",
      faq5Q: "Where is Oscar Logoteta based?",
      faq5A:
        "Milan, Italy. Reach him at oscarlogoteta@gmail.com or on LinkedIn.",
      aboutP1:
        "Graduated in Communication Sciences. Today I’m CIO and head of operations: technology, product, people, and the numbers at the same table. 15+ years leading digital transformation across media, education, and platform businesses.",
      aboutP2:
        "I build with AI and Cursor, ship apps, run HR and off-sites, keep teams aligned — and most of all, I cut waste: measurable operational efficiency, up to 45% cost reduction where AI and process design actually matter.",
      aboutP3:
        'I’m the founder of <a href="https://www.mitcamper.com" target="_blank" rel="noopener">mitcamper</a>: I built it alone, end-to-end. If something’s missing, I design it, ship it, and make it work — PowerPoint is not the job.',
      aboutCv: "Download CV →",
      focusEyebrow: "Focus",
      focusTitle: "What I do",
      focus1Title: "AI & build",
      focus1Body:
        'Cursor, models, automation: I build apps and tools that didn’t exist before. Like <a href="https://www.mitcamper.com" target="_blank" rel="noopener">mitcamper</a> — founder, and I built the whole thing myself.',
      focus2Title: "Ops & savings",
      focus2Body:
        "Real head of operations: process, cost, priorities. The job is to make the company run better and spend less — measurably.",
      focus3Title: "People & culture",
      focus3Body:
        "HR, off-sites, team alignment: I organize people as carefully as systems. Without culture, tech doesn’t stick.",
      focus4Title: "Writing",
      focus4Body:
        "Novels and stories set in Milan: the other half of the brain — the one that holds plot, pace, and characters together.",
      booksEyebrow: "Bibliography",
      booksTitle: "Books",
      booksLead: "Noir and Milan stories — my other production line.",
      booksHint: "Scroll →",
      contactEyebrow: "Contact",
      contactTitle: "Say hello",
      contactLead:
        "Scan, save, or launch an AI prompt.",
      signalKicker: "Digital ID · Milan",
      signalRole: "CIO & Head of Operations",
      signalQrCaption: "Scan · opens the vCard",
      signalSave: "Save contact",
      signalPrompt: "Copy AI prompt",
      signalMail: "Email",
      signalShare: "Share",
      signalCopied: "Prompt copied — paste into ChatGPT or Cursor",
      signalShared: "Shared",
      signalPromptText:
        "I want to contact Oscar Logoteta (CIO & Head of Operations in Milan: AI, ops, product, people; founder of mitcamper; noir author). Write a short, clear, human message asking him to [describe what you need unblocked]. Direct tone, zero corporate fluff.",
      footerCopy:
        "© 2026 Oscar Logoteta. All rights reserved. This website doesn’t use cookies.",
      metaTitle: "Oscar Logoteta | CIO, operations, AI and author in Milan",
      metaDescription:
        "Oscar Logoteta is a Milan-based CIO and head of operations: AI, apps, people and measurable savings. Author of the Commissioner Negri noir novels. Founder of mitcamper.",
      ogLocale: "en_US",
      cvHref: "media/cv_oscar_logoteta_2026_EN.pdf",
    },
  };

  function detectLang() {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    if (queryLang === "it" || queryLang === "en") return queryLang;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "it" || stored === "en") return stored;
    return "it";
  }

  function setMeta(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute(attr, value);
  }

  function syncLangUrl(lang) {
    const url = new URL(window.location.href);
    if (lang === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    const next = url.pathname + url.search + url.hash;
    if (next !== window.location.pathname + window.location.search + window.location.hash) {
      history.replaceState({}, "", next);
    }
  }

  function applyLang(lang) {
    const strings = dict[lang] || dict.it;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (strings[key] != null) el.textContent = strings[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (strings[key] != null) el.innerHTML = strings[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (strings[key] != null) el.setAttribute("aria-label", strings[key]);
    });

    document.querySelectorAll(".cv-link").forEach((el) => {
      el.setAttribute("href", strings.cvHref);
    });

    document.title = strings.metaTitle;
    setMeta('meta[name="description"]', "content", strings.metaDescription);
    setMeta('meta[property="og:title"]', "content", strings.metaTitle);
    setMeta('meta[property="og:description"]', "content", strings.metaDescription);
    setMeta('meta[property="og:locale"]', "content", strings.ogLocale);
    setMeta('meta[name="twitter:title"]', "content", strings.metaTitle);
    setMeta('meta[name="twitter:description"]', "content", strings.metaDescription);
    syncLangUrl(lang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLang() {
    applyLang(detectLang());
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
    });
  }

  function initHeader() {
    const header = document.getElementById("site-header");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && nav) {
      const setMenu = (open) => {
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        nav.classList.toggle("is-open", open);
        header.classList.toggle("is-menu-open", open);
        document.body.classList.toggle("is-menu-open", open);
        document.body.style.overflow = open ? "hidden" : "";
      };

      toggle.addEventListener("click", () => {
        setMenu(toggle.getAttribute("aria-expanded") !== "true");
      });

      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenu(false));
      });
    }
  }

  function initReveal() {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((el) => io.observe(el));
  }

  function initHero() {
    const hero = document.querySelector(".hero");
    const media = document.querySelector("[data-parallax]");
    if (!hero) return;

    requestAnimationFrame(() => hero.classList.add("is-ready"));

    if (!media || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < window.innerHeight * 1.2) {
            media.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
          }
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  function initBooksRail() {
    const rail = document.querySelector(".books-rail");
    if (!rail) return;

    let dragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let pointerId = null;

    rail.addEventListener("pointerdown", (e) => {
      if (e.button != null && e.button !== 0) return;
      dragging = false;
      startX = e.clientX;
      scrollLeft = rail.scrollLeft;
      pointerId = e.pointerId;
    });

    rail.addEventListener("pointermove", (e) => {
      if (pointerId == null || e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      if (!dragging) {
        if (Math.abs(dx) < 12) return;
        dragging = true;
        try {
          rail.setPointerCapture(pointerId);
        } catch (_) {
          /* ignore */
        }
        rail.classList.add("is-dragging");
      }
      rail.scrollLeft = scrollLeft - dx;
    });

    const end = (e) => {
      if (pointerId == null || (e && e.pointerId !== pointerId)) return;
      if (dragging) {
        rail.classList.remove("is-dragging");
        // mark so the ensuing click is ignored
        rail.dataset.suppressClick = "1";
        window.setTimeout(() => {
          delete rail.dataset.suppressClick;
        }, 0);
      }
      dragging = false;
      pointerId = null;
    };

    rail.addEventListener("pointerup", end);
    rail.addEventListener("pointercancel", end);
    rail.addEventListener("pointerleave", (e) => {
      if (dragging) end(e);
    });

    rail.addEventListener(
      "click",
      (e) => {
        if (rail.dataset.suppressClick === "1") {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true
    );
  }

  function initEmail() {
    const link = document.getElementById("email-link");
    if (!link) return;
    const address = "oscarlogoteta@gmail.com";
    link.setAttribute("href", `mailto:${address}`);
  }

  function initSignalCard() {
    const toast = document.getElementById("signal-toast");
    const promptBtn = document.getElementById("signal-prompt");
    const shareBtn = document.getElementById("signal-share");

    const showToast = (msg) => {
      if (!toast || !msg) return;
      toast.textContent = msg;
      toast.hidden = false;
      window.clearTimeout(showToast._t);
      showToast._t = window.setTimeout(() => {
        toast.hidden = true;
      }, 2800);
    };

    const currentStrings = () => {
      const lang = document.documentElement.lang === "en" ? "en" : "it";
      return dict[lang] || dict.it;
    };

    if (promptBtn) {
      promptBtn.addEventListener("click", async () => {
        const strings = currentStrings();
        const text = strings.signalPromptText || "";
        try {
          await navigator.clipboard.writeText(text);
          showToast(strings.signalCopied);
        } catch (_) {
          const area = document.createElement("textarea");
          area.value = text;
          document.body.appendChild(area);
          area.select();
          document.execCommand("copy");
          area.remove();
          showToast(strings.signalCopied);
        }
      });
    }

    if (shareBtn && navigator.share) {
      shareBtn.hidden = false;
      shareBtn.addEventListener("click", async () => {
        const strings = currentStrings();
        try {
          await navigator.share({
            title: "Oscar Logoteta",
            text: strings.signalRole,
            url: "https://www.oscarlogoteta.it/oscar-logoteta.vcf",
          });
          showToast(strings.signalShared);
        } catch (_) {
          /* user cancelled */
        }
      });
    }
  }

  function initMitcamper() {
    const section = document.getElementById("mitcamper");
    if (!section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const media = section.querySelector(".mc-film-media");
    const copy = section.querySelector(".mc-film-copy");
    const veil = section.querySelector(".mc-film-veil");

    if (!reduce && media) {
      let ticking = false;
      const paint = () => {
        ticking = false;
        const rect = section.getBoundingClientRect();
        const view = window.innerHeight || 1;
        const p = Math.min(1, Math.max(0, -rect.top / (view * 0.92)));
        media.style.transform = `scale(${1.08 + p * 0.16}) translate3d(0, ${p * 7}%, 0)`;
        if (copy) {
          copy.style.transform = `translate3d(0, ${p * -56}px, 0)`;
          copy.style.opacity = String(Math.max(0, 1 - p * 1.35));
        }
        if (veil) veil.style.opacity = String(p * 0.62);
      };
      window.addEventListener(
        "scroll",
        () => {
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(paint);
        },
        { passive: true }
      );
      paint();
    }

    const nums = section.querySelectorAll("[data-count]");
    if (!nums.length || reduce) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = Number(el.getAttribute("data-count"));
          const suffix = el.getAttribute("data-suffix") || "";
          const delay = Number(el.getAttribute("data-delay") || 0);
          const startAt = performance.now() + delay;
          const dur = 1200;
          const tick = (now) => {
            const t = Math.min(1, Math.max(0, (now - startAt) / dur));
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    nums.forEach((el, i) => {
      el.setAttribute("data-delay", String(i * 90));
      io.observe(el);
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", window.location.pathname + window.location.search + id);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initHeader();
    initReveal();
    initHero();
    initMitcamper();
    initBooksRail();
    initEmail();
    initSignalCard();
    initSmoothAnchors();
  });
})();
