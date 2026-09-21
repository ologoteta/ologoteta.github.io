(() => {
  "use strict";

  const STORAGE_KEY = "ol-lang";

  const ui = {
    it: {
      close: "Chiudi",
      yearLabel: "Anno edizione",
      pagesLabel: "Pagine",
      footerCopy:
        "© 2026 Oscar Logoteta. Tutti i diritti riservati. Questo sito non usa cookie.",
    },
    en: {
      close: "Close",
      yearLabel: "Year",
      pagesLabel: "Pages",
      footerCopy:
        "© 2026 Oscar Logoteta. All rights reserved. This website doesn’t use cookies.",
    },
  };

  const books = {
    milanovertigo: {
      it: {
        p1: "Terza indagine del commissario Renato Negri, Milano vertigo (Fratelli Frilli Editori, 2021) riparte da una telefonata inaspettata: quella della cara mamèta. “Renato, devi indagare su un caso.” Tra tutte le persone che Negri poteva immaginarsi affidargli un’indagine per omicidio, la sua mamma era davvero l’ultima. Il caso riguarda Achille Bracchi, archiviato dal commissariato di Chiavari come suicidio — una versione che non convince affatto la signora Rosalba Maria Barbieri, vedova Negri.",
        quote: "Cosa c’entra la cara mamèta con il Bracchi?",
        p2: "Siamo nel torrido luglio del 1979. Bracchi sarebbe precipitato da quella che pensava la sua miniera d’oro: la Colonia Fara, edificio del Ventennio a strapiombo sul mare della riviera di Levante, intitolato al generale Gustavo Fara, commissionato dal PNF negli anni Trenta e inaugurato alla presenza di Mussolini. Durante la guerra fu anche ospedale militare. Chi era davvero Achille Bracchi? Perché quella struttura, e perché un “suicidio” che puzzava di altro?",
        p3: "Per questo caso Negri potrà contare sul vice Palamara e sull’ispettore Coviello, ma l’indagine lo trascinerà soprattutto a fare i conti con se stesso. È un giallo classico che racconta anche la storia e la politica italiana degli anni Settanta — un’Italia complicata, piena di misteri ancora aperti — con la sottile ironia che attraversa tutta la saga del commissario Negri.",
      },
      en: {
        p1: "The third investigation of Commissioner Renato Negri, Milano vertigo (Fratelli Frilli Editori, 2021) opens with an unexpected call — from dear mamèta. “Renato, you have to look into a case.” Of all the people Negri could imagine handing him a murder brief, his mother was the last. The case is Achille Bracchi, filed by Chiavari as a suicide — a version that does not convince Signora Rosalba Maria Barbieri, widow Negri, one bit.",
        quote: "What does dear mamèta have to do with Bracchi?",
        p2: "It is a scorching July in 1979. Bracchi is said to have fallen from what he thought would be his gold mine: Colonia Fara, a Fascist-era building hanging over the Ligurian Levante coast, named after General Gustavo Fara, commissioned by the PNF in the 1930s and inaugurated in Mussolini’s presence. In wartime it even served as a military hospital. Who was Achille Bracchi, really? Why that building — and why a “suicide” that smelled of something else?",
        p3: "Negri can lean on deputy Palamara and inspector Coviello, but the case forces him above all to settle accounts with himself. It is a classic mystery that also tells the story and politics of 1970s Italy — a tangled country still full of open secrets — with the wry irony that runs through the whole Negri saga.",
      },
    },
    milanosottozero: {
      it: {
        p1: "Dicembre 1978. Milano si prepara a chiudere l’anno più duro di un decennio che ha sepolto la leggerezza e trasformato la protesta in violenza. Pochi giorni prima di Natale, la domenica del commissario Negri viene spezzata dal ritrovamento di Anna: quattordici anni, alta borghesia meneghina, nipote di un senatore democristiano vicino a Cossiga, allora Ministro dell’Interno. La trovano impiccata nella sua cameretta.",
        quote: "A pochi giorni dal Natale un evento che sconvolge Milano",
        p2: "Le pressioni arrivano subito: archiviare in fretta, suicidio di un’adolescente. Ma qualcosa non torna. Negri, con il vice Palamara e l’ispettore Coviello, decide di scavare nella vita di Anna — divisa, all’apparenza, tra i collettivi studenteschi del Berchet e l’oratorio — in una storia che nasconde molto più di quanto la superficie lasci intendere.",
        p3: "Intorno a lui ruota la Milano d’altri tempi della saga: Frank e i suoi panini, il bar di Nino coi Negroni “alla Negri”, gli amici di sempre. Nella neve candida che si tinge di nero, niente è come sembra: i poteri forti entrano in gioco, la linea tra bene e male resta sotto traccia, e il commissario deve dare fondo a ogni capacità deduttiva. Seconda indagine dopo Milano disillusa, Milano sottozero (Fratelli Frilli, 2018) è un noir ispirato a una vicenda vera — senza svelarne il cuore.",
      },
      en: {
        p1: "December 1978. Milan is closing the hardest year of a decade that buried lightness and turned protest into violence. A few days before Christmas, Commissioner Negri’s quiet Sunday is shattered by the discovery of Anna: fourteen, from Milan’s upper bourgeoisie, niece of a Christian Democrat senator close to Cossiga, then Interior Minister. She is found hanged in her bedroom.",
        quote: "Days before Christmas, an event that shakes Milan",
        p2: "The pressure lands at once: close it fast, teenage suicide. But something does not sit right. With deputy Palamara and inspector Coviello, Negri digs into Anna’s life — split, on the surface, between Berchet school collectives and the parish youth club — a story that hides far more than appearances suggest.",
        p3: "Around him turns the familiar Milan of the saga: Frank’s sandwiches, Nino’s bar and Negroni “alla Negri,” lifelong friends. In white snow that turns black, nothing is what it seems: powerful interests enter the game, the line between good and evil stays buried, and Negri must use every ounce of skill. The second case after Milano disillusa, Milano sottozero (Fratelli Frilli, 2018) is a noir inspired by a true story — without giving away its heart.",
      },
    },
    milanodisillusa: {
      it: {
        p1: "16 marzo 1978. Mentre la tv dà la notizia del rapimento di Aldo Moro, a Milano il commissario Renato Negri viene chiamato d’urgenza al Piccolo Teatro. Lo spettacolo che lo aspetta è fuori da ogni copione: in un teatro silenzioso e buio, in una teca di vetro piena d’acqua, un uomo è immobile a testa in giù, occhi sbarrati, già senza vita. È Luigi Bernini, il grande illusionista. Prima indagine della saga (Fratelli Frilli Editori, 2017).",
        p2: "Chi può volere la morte di un mago? Bisogna capire se è davvero un omicidio, come è avvenuto, perché. Negri e il vice Palamara — poliziotto dai metodi spicci — scandagliano piste che sconfinano nell’esoterismo e nello spiritismo, in una Milano tra contestazione, terrorismo e dilagare dell’eroina. Sullo sfondo, tre giorni dopo, arriverà anche l’omicidio di Fausto e Iaio: un Paese che “non si capisce più”.",
        quote: "Milano è ormai disillusa",
        p3: "Il titolo ha un doppio senso: fine della magia, di fronte a un delitto che riporta prestigi e spiritismo a moventi tutt’altro che sovrannaturali; e fine delle utopie, perdita d’innocenza di una generazione. Negri annota tutto sul taccuino — indizi, osservazioni, spunti ironici — mentre intorno a lui ruotano Palamara, Coviello, l’amico di bevute Beppe detto l’africano, Frank coi panini salamella-maionese-tutto e Nino, che solo sa preparare il Negroni “alla Negri”. Di punti fermi, al commissario, ne restano pochi: la sua Milano, gli amici, il lavoro.",
        p4: "Un giallo insolito con un protagonista “normale”, uomo di legge ferito che non ha più molto da perdere e proprio per questo torna in gioco. La trama mescola mistero e surreale; il caso del grande Bernini si può risolvere. I misteri d’Italia, quelli, restano un’altra storia.",
      },
      en: {
        p1: "16 March 1978. As TV breaks the news of Aldo Moro’s kidnapping, Commissioner Renato Negri is rushed to Milan’s Piccolo Teatro. The scene waiting for him is off every script: in a silent, dark theatre, inside a glass tank full of water, a man hangs motionless upside down, eyes wide, already dead. He is Luigi Bernini, the great illusionist. First case in the saga (Fratelli Frilli Editori, 2017).",
        p2: "Who would want a magician dead? First: is it murder, how, why. Negri and deputy Palamara — a cop with blunt methods — chase leads into esotericism and spiritism, in a Milan of protest, terrorism and spreading heroin. Three days later, the murder of Fausto and Iaio will darken the city further: a country that “no longer makes sense.”",
        quote: "Milan is disillusioned now",
        p3: "The title cuts two ways: the end of magic, as a crime pulls prestidigitation and spiritism back to motives that are anything but supernatural; and the end of utopias, a generation’s loss of innocence. Negri notes everything in his notebook — clues, observations, wry asides — while around him turn Palamara, Coviello, drinking buddy Beppe “the African,” Frank’s salamella-mayo sandwiches and Nino, the only one who can make a Negroni “alla Negri.” Few certainties left: his Milan, his friends, the job.",
        p4: "An unusual mystery with a “normal” hero — a wounded man of the law with little left to lose, and therefore ready to play again. The plot blends mystery and the surreal; Bernini’s case can be solved. Italy’s deeper mysteries are another story.",
      },
    },
    quattrovoltenatale: {
      it: {
        quote: "Il commissario Miletta e la vigilia del Natale ’77",
        p1: "Quattro volte Natale. Piccoli omicidi a Milano (Todaro Editore, collana Impronte, 2020) raccoglie quattro racconti, quattro Natali, quattro decenni e quattro personaggi memorabili — firmati da sei autori che conoscono bene il capoluogo meneghino: Giorgio Maimone, Oscar Logoteta, Paola Varalli, Riccardo Besola, Andrea Ferrari e Francesco Gallone.",
        p2: "Marlon, il detective di Giorgio Maimone, si muove nella Milano dei ruggenti anni Sessanta, sfidato dall’Enigmista, serial killer amante dei giochi di parole. Il commissario Miletta, poliziotto del Sud nella città più buia degli anni di piombo, è il protagonista del racconto di Oscar Logoteta, Strano, il destino: vigilia di Natale 1977, atmosfere soffocanti, un omicidio misterioso e la Milano resa più grigia dall’ansia e dalla violenza.",
        p3: "Negli Ottanta della “Milano da bere”, Paola Varalli mette in scena il “gommista virile” che, con l’idraulico Pino e il barista Viliam, si improvvisa investigatore. Nell’ultimo Natale del millennio, il taxista Luigino finisce alle prese con una valigetta abbandonata dal sosia di Gian Maria Volontè, nelle atmosfere del Trio Besola–Ferrari–Gallone.",
        p4: "Le atmosfere natalizie milanesi lungo quarant’anni, e le diverse anime del giallo: l’ironia di Maimone, il noir di Logoteta, la milanesità di Varalli, il tono del Trio. Quattro piccoli omicidi, una sola città.",
      },
      en: {
        quote: "Commissioner Miletta and Christmas Eve ’77",
        p1: "Quattro volte Natale. Piccoli omicidi a Milano (Todaro Editore, Impronte series, 2020) gathers four stories, four Christmases, four decades and four unforgettable characters — by six writers who know Milan well: Giorgio Maimone, Oscar Logoteta, Paola Varalli, Riccardo Besola, Andrea Ferrari and Francesco Gallone.",
        p2: "Marlon, Giorgio Maimone’s detective, moves through roaring-sixties Milan, challenged by the Enigmatist, a serial killer who loves wordplay. Commissioner Miletta, a southern cop in the city’s darkest Years of Lead, leads Oscar Logoteta’s story Strano, il destino: Christmas Eve 1977, stifling atmosphere, a mysterious murder, and a Milan grey with fear and violence.",
        p3: "In the 1980s “Milano da bere,” Paola Varalli stages the “virile tyre man” who, with plumber Pino and barista Viliam, turns amateur investigator. On the last Christmas of the millennium, taxi driver Luigino deals with a briefcase left by Gian Maria Volontè’s lookalike, in the moods of the Besola–Ferrari–Gallone Trio.",
        p4: "Milanese Christmas atmospheres across forty years, and the many faces of crime fiction: Maimone’s irony, Logoteta’s noir, Varalli’s Milanese flavour, the Trio’s tone. Four small murders, one city.",
      },
    },
    acomearmatura: {
      it: {
        p1: "A come Armatura. Una storia degli anni ’70 (La Memoria del Mondo Editrice, 2014) è il romanzo d’esordio di Oscar Logoteta: la storia di una vita, la storia di Nino. Come in una canzone di De Gregori — “Nino non aver paura di tirare un calcio di rigore” — qui di rigori non se ne tirano, ma di paura se ne parla. La paura di sapere, di scegliere, di amare, di diventare grandi, di morire, di credere in qualcosa più grande di noi, o semplicemente di essere dalla parte giusta.",
        p2: "Antonino Laganà ha sedici anni nel ’77. Cresce a Milano tra il collettivo del liceo Berchet e il gruppo scout Agesci Borgolombardo 1. Attorno a lui ruotano Mimmo (Domenico Basile, amico d’infanzia), il padre Saverio — operaio all’Alfa, immigrato dal Sud negli anni Cinquanta — la madre, lo zio Carlo, professore a Reggio Calabria, e Giorgia, compagna di Noviziato. La sua vita cambia in un pomeriggio di maggio del 1977, in via De Amicis.",
        quote: "Gli anni 70, quando la Spada ha tagliato la testa a un’intera generazione",
        p3: "La suggestione del romanzo nasce da una foto: l’autonomo Giuseppe Memeo in via De Amicis il 14 maggio 1977, busto caricato in avanti, volto coperto, P38 impugnata a due mani. Accanto a lui e ad altri trecento autonomi — Senza Tregua, Rosso, Casoretto — c’era anche un ragazzo, Maurizio Azzollini, sedicenne e scout Agesci a Milano. Gli anni di piombo: stragi, lotte armate, attentati, troppi morti inutili. Nino viene accompagnato, quasi inconsapevole, in una delle pagine più violente e controverse della storia italiana.",
        p4: "Nel 2016, ispirata dal romanzo, nasce la graphic novel omonima: disegni di Toni Viceconti, scrittura di Francesco “IVE” Lombardo. Intorno al progetto cresce una soundtrack con artisti della scena hip-hop alternativa milanese — Mastino, Kabo, Kiave e altri. Dalla colonna sonora: “Maggio del ’74” di Mastino e il video “Valzer 77” di Kabo.",
        buy: "È possibile acquistare sia il romanzo che la graphic novel di A come Armatura direttamente sul sito della casa editrice, La Memoria del Mondo Editrice.",
      },
      en: {
        p1: "A come Armatura. Una storia degli anni ’70 (La Memoria del Mondo Editrice, 2014) is Oscar Logoteta’s debut novel: the story of a life, the story of Nino. Like a De Gregori song — “Nino, don’t be afraid to take a penalty” — there are no penalties here, but plenty of fear. Fear of knowing, choosing, loving, growing up, dying, believing in something larger than yourself — or simply of being on the right side.",
        p2: "Antonino Laganà is sixteen in ’77. He grows up in Milan between the Berchet high-school collective and the Agesci Borgolombardo 1 scout group. Around him turn Mimmo (Domenico Basile, a childhood friend), his father Saverio — an Alfa factory worker who emigrated from the South in the 1950s — his mother, uncle Carlo, a teacher in Reggio Calabria, and Giorgia, a fellow scout novice. His life changes on a May afternoon in 1977 on via De Amicis.",
        quote: "The 1970s, when the Sword cut the head off an entire generation",
        p3: "The novel’s spark is a photograph: autonomist Giuseppe Memeo on via De Amicis, 14 May 1977 — torso forward, face covered, P38 in both hands. Beside him and some three hundred autonomists — Senza Tregua, Rosso, Casoretto — there was also a boy, Maurizio Azzollini, sixteen and an Agesci scout in Milan. The Years of Lead: massacres, armed struggle, attacks, too many useless deaths. Almost unaware, Nino is drawn into one of the most violent and contested pages of Italian history.",
        p4: "In 2016, inspired by the novel, the graphic novel of the same name appeared — art by Toni Viceconti, writing by Francesco “IVE” Lombardo. Around the project grew a soundtrack with artists from Milan’s alternative hip-hop scene: Mastino, Kabo, Kiave and more. From that score: Mastino’s “Maggio del ’74” and Kabo’s video “Valzer 77.”",
        buy: "Both the novel and the graphic novel of A come Armatura can be bought on the publisher’s site, La Memoria del Mondo Editrice.",
      },
    },
  };

  const meta = {
    milanovertigo: {
      it: {
        title: "Milano vertigo | Oscar Logoteta — noir commissario Negri",
        description:
          "Milano vertigo (Fratelli Frilli, 2021) è la terza indagine del commissario Renato Negri. Luglio 1979, Colonia Fara: un suicidio che non convince la mamèta.",
      },
      en: {
        title: "Milano vertigo | Oscar Logoteta — Commissioner Negri noir",
        description:
          "Milano vertigo (Fratelli Frilli, 2021) is the third Commissioner Renato Negri investigation. July 1979, Colonia Fara: a suicide that does not convince his mother.",
      },
    },
    milanosottozero: {
      it: {
        title: "Milano sottozero | Oscar Logoteta — noir commissario Negri",
        description:
          "Milano sottozero (Fratelli Frilli, 2018) è la seconda indagine del commissario Negri. Dicembre 1978, Milano: una quattordicenne trovata morta a pochi giorni dal Natale.",
      },
      en: {
        title: "Milano sottozero | Oscar Logoteta — Commissioner Negri noir",
        description:
          "Milano sottozero (Fratelli Frilli, 2018) is the second Commissioner Negri investigation. December 1978, Milan: a fourteen-year-old found dead days before Christmas.",
      },
    },
    milanodisillusa: {
      it: {
        title: "Milano disillusa | Oscar Logoteta — noir commissario Negri",
        description:
          "Milano disillusa (Fratelli Frilli, 2017) è la prima indagine del commissario Renato Negri. 16 marzo 1978, Piccolo Teatro: la morte dell’illusionista Luigi Bernini.",
      },
      en: {
        title: "Milano disillusa | Oscar Logoteta — Commissioner Negri noir",
        description:
          "Milano disillusa (Fratelli Frilli, 2017) is the first Commissioner Renato Negri investigation. 16 March 1978, Piccolo Teatro: the death of illusionist Luigi Bernini.",
      },
    },
    quattrovoltenatale: {
      it: {
        title: "Quattro volte Natale | Oscar Logoteta — piccoli omicidi a Milano",
        description:
          "Quattro volte Natale (Todaro, 2020): quattro racconti, quattro Natali milanesi. Oscar Logoteta firma Strano, il destino, con il commissario Miletta nella vigilia del 1977.",
      },
      en: {
        title: "Quattro volte Natale | Oscar Logoteta — Christmas crime stories, Milan",
        description:
          "Quattro volte Natale (Todaro, 2020): four stories, four Milan Christmases. Oscar Logoteta’s Strano, il destino follows Commissioner Miletta on Christmas Eve 1977.",
      },
    },
    acomearmatura: {
      it: {
        title: "A come Armatura | Oscar Logoteta — romanzo anni di piombo",
        description:
          "A come Armatura (La Memoria del Mondo, 2014) è il romanzo d’esordio di Oscar Logoteta: Milano 1977, Antonino Laganà tra collettivo, scout e anni di piombo. ISBN 9788898414352.",
      },
      en: {
        title: "A come Armatura | Oscar Logoteta — Years of Lead novel",
        description:
          "A come Armatura (La Memoria del Mondo, 2014) is Oscar Logoteta’s debut novel: Milan 1977, Antonino Laganà between a school collective, scouts and the Years of Lead.",
      },
    },
  };

  function detectLang() {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    if (queryLang === "it" || queryLang === "en") return queryLang;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "it" || stored === "en") return stored;
    } catch (_) {
      /* ignore */
    }
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

  function applyBookLang(lang) {
    const L = lang === "en" ? "en" : "it";
    document.documentElement.lang = L;

    const uiStrings = ui[L];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (uiStrings[key] != null) el.textContent = uiStrings[key];
    });

    const close = document.querySelector(".book-home");
    if (close) {
      close.textContent = uiStrings.close;
      close.setAttribute("aria-label", uiStrings.close);
      close.setAttribute("title", uiStrings.close);
    }

    const bookId = document.body.getAttribute("data-book");
    const pack = bookId && books[bookId] ? books[bookId][L] : null;
    if (pack) {
      Object.keys(pack).forEach((key) => {
        const el = document.querySelector(`[data-book-i18n="${key}"]`);
        if (!el) return;
        if (key === "buy") {
          const link = el.querySelector("a");
          if (link && L === "it") {
            el.innerHTML =
              'È possibile acquistare sia il romanzo che la graphic novel di A come Armatura direttamente sul sito della casa editrice, <a target="_blank" rel="noopener" href="http://www.lamemoriadelmondo.it/">La Memoria del Mondo Editrice</a>.';
          } else if (link && L === "en") {
            el.innerHTML =
              'Both the novel and the graphic novel of A come Armatura can be bought on the publisher’s site, <a target="_blank" rel="noopener" href="http://www.lamemoriadelmondo.it/">La Memoria del Mondo Editrice</a>.';
          } else {
            el.textContent = pack[key];
          }
        } else {
          el.textContent = pack[key];
        }
      });
    }

    document.querySelectorAll(".book-lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === L;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    const seo = bookId && meta[bookId] ? meta[bookId][L] : null;
    if (seo) {
      document.title = seo.title;
      setMeta('meta[name="description"]', "content", seo.description);
      setMeta('meta[property="og:title"]', "content", seo.title);
      setMeta('meta[property="og:description"]', "content", seo.description);
      setMeta('meta[property="og:locale"]', "content", L === "en" ? "en_US" : "it_IT");
      setMeta('meta[name="twitter:title"]', "content", seo.title);
      setMeta('meta[name="twitter:description"]', "content", seo.description);
    }
    syncLangUrl(L);

    try {
      localStorage.setItem(STORAGE_KEY, L);
    } catch (_) {
      /* ignore */
    }
  }

  function ensureLangSwitch() {
    if (document.querySelector(".book-lang")) return;
    const wrap = document.createElement("div");
    wrap.className = "book-lang";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Language");
    wrap.innerHTML =
      '<button type="button" class="book-lang-btn" data-lang="it" aria-pressed="false">IT</button>' +
      '<button type="button" class="book-lang-btn" data-lang="en" aria-pressed="false">EN</button>';
    document.body.appendChild(wrap);
    wrap.querySelectorAll(".book-lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyBookLang(btn.getAttribute("data-lang")));
    });
  }

  window.OLBookI18n = {
    detectLang,
    applyBookLang,
    ensureLangSwitch,
    ui,
  };
})();
