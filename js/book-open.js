(() => {
  "use strict";

  const BOOK_ORDER = [
    { id: "milanovertigo", href: "milanovertigo.html", title: "Milano Vertigo" },
    { id: "quattrovoltenatale", href: "quattrovoltenatale.html", title: "Quattro volte Natale" },
    { id: "milanosottozero", href: "milanosottozero.html", title: "Milano sottozero" },
    { id: "milanodisillusa", href: "milanodisillusa.html", title: "Milano disillusa" },
    { id: "acomearmatura", href: "acomearmatura.html", title: "A come armatura" },
  ];

  const REDUCE = "(prefers-reduced-motion: reduce)";

  function markOpenedFromHome() {
    try {
      sessionStorage.setItem("ol-from-home", "1");
      sessionStorage.setItem("ol-return-y", String(window.scrollY || 0));
    } catch (_) {
      /* ignore */
    }
  }

  function keepFromHome() {
    try {
      sessionStorage.setItem("ol-from-home", "1");
    } catch (_) {
      /* ignore */
    }
  }

  function getNeighbors() {
    const bookId = document.body.getAttribute("data-book");
    const index = BOOK_ORDER.findIndex((b) => b.id === bookId);
    if (index < 0) return null;
    return {
      index,
      prev: BOOK_ORDER[(index - 1 + BOOK_ORDER.length) % BOOK_ORDER.length],
      next: BOOK_ORDER[(index + 1) % BOOK_ORDER.length],
    };
  }

  function goToBook(target, dir) {
    if (!target) return;
    keepFromHome();
    try {
      sessionStorage.setItem("ol-book-dir", dir);
    } catch (_) {
      /* ignore */
    }
    window.location.assign(target.href);
  }

  function initHomeBooks() {
    const links = document.querySelectorAll(".books-track .book-item a[href]");
    if (!links.length) return;

    try {
      if (sessionStorage.getItem("ol-book-close") === "1") {
        const raw = sessionStorage.getItem("ol-return-y");
        sessionStorage.removeItem("ol-book-close");
        sessionStorage.removeItem("ol-return-y");
        sessionStorage.removeItem("ol-from-home");

        let y = raw !== null && raw !== "" ? Number(raw) : NaN;
        if (!Number.isFinite(y)) {
          const books = document.getElementById("books");
          y = books
            ? books.getBoundingClientRect().top + window.scrollY - 72
            : 0;
        }

        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        if ("scrollRestoration" in history) history.scrollRestoration = "manual";
        if (location.hash) {
          history.replaceState(null, "", location.pathname + location.search);
        }
        window.scrollTo(0, y);
        requestAnimationFrame(() => {
          window.scrollTo(0, y);
          html.style.scrollBehavior = prev;
        });
      }
    } catch (_) {
      /* ignore */
    }

    links.forEach((link) => {
      link.addEventListener(
        "click",
        (e) => {
          const rail = link.closest(".books-rail");
          if (rail && rail.dataset.suppressClick === "1") {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          markOpenedFromHome();
        },
        true
      );
    });
  }

  function initBookNav() {
    const neighbors = getNeighbors();
    if (!neighbors) return;

    const { prev, next } = neighbors;

    const nav = document.createElement("div");
    nav.className = "book-switch";
    nav.setAttribute("role", "navigation");
    nav.setAttribute("aria-label", "Book navigation");
    nav.innerHTML =
      `<a class="book-switch-btn book-switch-prev" href="${prev.href}" aria-label="${prev.title}">` +
      `<span class="book-switch-chevron" aria-hidden="true"></span>` +
      `<span class="book-switch-label">${prev.title}</span></a>` +
      `<a class="book-switch-btn book-switch-next" href="${next.href}" aria-label="${next.title}">` +
      `<span class="book-switch-label">${next.title}</span>` +
      `<span class="book-switch-chevron" aria-hidden="true"></span></a>`;
    document.body.appendChild(nav);

    nav.querySelector(".book-switch-prev").addEventListener("click", (e) => {
      e.preventDefault();
      playExitAndGo(prev, "prev");
    });
    nav.querySelector(".book-switch-next").addEventListener("click", (e) => {
      e.preventDefault();
      playExitAndGo(next, "next");
    });

    window.addEventListener("keydown", (e) => {
      if (document.body.dataset.bookLeaving === "1") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target && e.target.tagName) || "";
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag) || e.target.isContentEditable) {
        return;
      }
      if (e.key === "ArrowLeft" || e.key === "Left") {
        e.preventDefault();
        playExitAndGo(prev, "prev");
      } else if (e.key === "ArrowRight" || e.key === "Right") {
        e.preventDefault();
        playExitAndGo(next, "next");
      }
    });
  }

  function playExitAndGo(target, dir) {
    if (document.body.dataset.bookLeaving === "1") return;
    document.body.dataset.bookLeaving = "1";

    if (window.matchMedia(REDUCE).matches) {
      goToBook(target, dir);
      return;
    }

    const underlay = document.querySelector(".book-swipe-underlay");
    if (underlay) underlay.style.opacity = "1";

    document.body.classList.add(
      dir === "next" ? "book-leave-next" : "book-leave-prev"
    );
    window.setTimeout(() => goToBook(target, dir), 420);
  }

  function initSwipe() {
    const neighbors = getNeighbors();
    if (!neighbors) return;
    if (window.matchMedia(REDUCE).matches) return;

    const sheet = document.querySelector(".main-content") || document.body;

    const underlay = document.createElement("div");
    underlay.className = "book-swipe-underlay";
    underlay.setAttribute("aria-hidden", "true");
    document.body.appendChild(underlay);

    const hint = document.createElement("div");
    hint.className = "book-swipe-hint";
    hint.innerHTML =
      `<span class="book-swipe-hint-prev">${neighbors.prev.title}</span>` +
      `<span class="book-swipe-hint-next">${neighbors.next.title}</span>`;
    document.body.appendChild(hint);

    const hintPrev = hint.querySelector(".book-swipe-hint-prev");
    const hintNext = hint.querySelector(".book-swipe-hint-next");

    let startX = 0;
    let startY = 0;
    let dx = 0;
    let active = false;
    let locked = false;
    let pointerId = null;

    const paintHints = (resist) => {
      const prevAmt = Math.max(0, resist);
      const nextAmt = Math.max(0, -resist);
      hintPrev.style.opacity = String(Math.min(1, prevAmt * 1.35));
      hintNext.style.opacity = String(Math.min(1, nextAmt * 1.35));
      hintPrev.style.transform = `translate3d(${(-28 + prevAmt * 28).toFixed(1)}px, -50%, 0)`;
      hintNext.style.transform = `translate3d(${(28 - nextAmt * 28).toFixed(1)}px, -50%, 0)`;
      underlay.style.opacity = String(Math.min(1, Math.abs(resist) * 0.95));
    };

    const resetDrag = () => {
      active = false;
      locked = false;
      pointerId = null;
      dx = 0;
      sheet.style.transition = "";
      sheet.style.transform = "";
      sheet.style.opacity = "";
      sheet.style.filter = "";
      document.body.classList.remove("is-swiping", "swipe-next", "swipe-prev");
      paintHints(0);
      underlay.style.opacity = "";
    };

    const onDown = (e) => {
      if (document.body.dataset.bookLeaving === "1") return;
      if (e.target.closest("a, button, video, audio, iframe, input, textarea")) {
        return;
      }
      if (e.pointerType === "mouse" && e.button !== 0) return;
      active = true;
      locked = false;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      dx = 0;
      sheet.style.transition = "none";
      underlay.style.transition = "none";
      try {
        sheet.setPointerCapture(e.pointerId);
      } catch (_) {
        /* ignore */
      }
    };

    const onMove = (e) => {
      if (!active || e.pointerId !== pointerId) return;
      const x = e.clientX - startX;
      const y = e.clientY - startY;

      if (!locked) {
        if (Math.abs(x) < 10 && Math.abs(y) < 10) return;
        if (Math.abs(y) > Math.abs(x)) {
          resetDrag();
          return;
        }
        locked = true;
        document.body.classList.add("is-swiping");
      }

      dx = x;
      const resist = Math.max(-1, Math.min(1, dx / (window.innerWidth * 0.58)));
      const offset = resist * window.innerWidth * 0.48;
      const rot = resist * -6.5;
      const scale = 1 - Math.abs(resist) * 0.06;
      sheet.style.transform =
        `translate3d(${offset}px, 0, 0) rotate(${rot}deg) scale(${scale})`;
      sheet.style.filter = `brightness(${1 - Math.abs(resist) * 0.08})`;
      paintHints(resist);
      document.body.classList.toggle("swipe-next", resist < -0.05);
      document.body.classList.toggle("swipe-prev", resist > 0.05);
      e.preventDefault();
    };

    const onUp = (e) => {
      if (!active || (pointerId != null && e.pointerId !== pointerId)) return;
      const width = window.innerWidth;
      const shouldGo = locked && Math.abs(dx) > Math.min(88, width * 0.16);

      if (shouldGo) {
        const dir = dx < 0 ? "next" : "prev";
        const target = dir === "next" ? neighbors.next : neighbors.prev;
        const exit = dir === "next" ? -1 : 1;
        sheet.style.transition =
          "transform 0.44s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.32s ease, filter 0.32s ease";
        sheet.style.transform =
          `translate3d(${exit * 112}vw, 0, 0) rotate(${exit * -9}deg) scale(0.9)`;
        sheet.style.opacity = "0";
        sheet.style.filter = "brightness(0.85)";
        underlay.style.transition = "opacity 0.3s ease";
        underlay.style.opacity = "1";
        paintHints(exit);
        document.body.classList.add(
          dir === "next" ? "book-leave-next" : "book-leave-prev"
        );
        document.body.dataset.bookLeaving = "1";
        window.setTimeout(() => goToBook(target, dir), 400);
        return;
      }

      sheet.style.transition =
        "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease, box-shadow 0.4s ease";
      sheet.style.transform = "";
      sheet.style.filter = "";
      underlay.style.transition = "opacity 0.35s ease";
      underlay.style.opacity = "0";
      paintHints(0);
      window.setTimeout(resetDrag, 500);
      active = false;
      locked = false;
      pointerId = null;
      document.body.classList.remove("is-swiping", "swipe-next", "swipe-prev");
    };

    sheet.addEventListener("pointerdown", onDown);
    sheet.addEventListener("pointermove", onMove, { passive: false });
    sheet.addEventListener("pointerup", onUp);
    sheet.addEventListener("pointercancel", () => {
      sheet.style.transition =
        "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease";
      sheet.style.transform = "";
      sheet.style.filter = "";
      underlay.style.opacity = "0";
      paintHints(0);
      window.setTimeout(resetDrag, 500);
    });
  }

  function initEnterDirection() {
    let dir = null;
    try {
      dir = sessionStorage.getItem("ol-book-dir");
      sessionStorage.removeItem("ol-book-dir");
    } catch (_) {
      /* ignore */
    }
    if (!dir || window.matchMedia(REDUCE).matches) return;
    document.body.classList.add(
      dir === "next" ? "book-enter-next" : "book-enter-prev"
    );
  }

  function initBookPage() {
    if (!document.body.classList.contains("book-page")) return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const oldNav = document.getElementById("main-nav-subpage");
    if (oldNav) oldNav.remove();

    const backTop = document.querySelector(".back-to-top");
    if (backTop) backTop.remove();

    let close = document.querySelector(".book-home");
    if (!close) {
      close = document.createElement("a");
      close.className = "book-home";
      document.body.prepend(close);
    }
    close.href = "index.html#books";

    close.addEventListener("click", (e) => {
      e.preventDefault();
      try {
        sessionStorage.setItem("ol-book-close", "1");
      } catch (_) {
        /* ignore */
      }
      window.location.assign("index.html");
    });

    initEnterDirection();
    initBookNav();
    initSwipe();

    if (window.OLBookI18n) {
      window.OLBookI18n.ensureLangSwitch();
      window.OLBookI18n.applyBookLang(window.OLBookI18n.detectLang());
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHomeBooks();
    initBookPage();
  });
})();
