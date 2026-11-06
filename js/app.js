console.clear();

console.log("Our Story");
console.log("Manga Reader Initialized");

/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
});

revealElements.forEach((el) => observer.observe(el));

/* =========================================================
   COVER GATE
========================================================= */

const begin2Reading = document.getElementById("begin-reading");
const cover = document.getElementById("cover");
const body = document.body;

if(begin2Reading){

    begin2Reading.addEventListener("click",()=>{

        /* Unlock scrolling */

        body.classList.remove("cover-locked");

        /* Smooth scroll */

        window.scrollTo({

            top: cover.offsetHeight,

            behavior:"smooth"

        });

    });

}

/* ==========================================================
   SMOOTH NAVIGATION
========================================================== */

document.querySelectorAll("nav a").forEach((link) => {

    link.addEventListener("click", (e) => {

        const target = link.getAttribute("href");

        if (!target.startsWith("#")) return;

        e.preventDefault();

        document.querySelector(target)?.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================================================
   CHAPTER THREE
   LETTER INTERACTION
========================================================== */

const letterModal = document.getElementById("letter-modal");
const openLetter = document.getElementById("open-letter");
const closeLetter = document.getElementById("close-letter");

/* Prevent errors if Chapter Three isn't on the page yet */

if (letterModal && openLetter && closeLetter) {

    const openModal = () => {

        letterModal.classList.add("active");
        letterModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    };

    const closeModal = () => {

        letterModal.classList.remove("active");
        letterModal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    };

    /* Open */

    openLetter.addEventListener("click", openModal);

    /* Continue Button */

    closeLetter.addEventListener("click", closeModal);

    /* Click Background */

    letterModal.addEventListener("click", (e) => {

        if (e.target.classList.contains("letter-overlay")) {

            closeModal();

        }

    });

    /* Escape Key */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape" && letterModal.classList.contains("active")) {

            closeModal();

        }

    });

    /* Keyboard accessibility */

    openLetter.addEventListener("keydown", (e) => {

        if (e.key === "Enter" || e.key === " ") {

            e.preventDefault();
            openModal();

        }

    });

}

/* ==========================================================
   CHAPTER FOUR
   MEMORY VIEWER
========================================================== */

const memoryModal = document.getElementById("memory-modal");
const memoryPreview = document.getElementById("memory-preview");
const closeMemory = document.getElementById("close-memory");

document.addEventListener("click", (e) => {

    const card = e.target.closest(".polaroid");

    if (!card) return;

    if (!memoryModal || !memoryPreview) return;

    const image = card.querySelector("img");

    if (!image) return;

    memoryPreview.src = image.src;
    memoryPreview.alt = image.alt;

    memoryModal.classList.add("active");
    document.body.classList.add("modal-open");

});

function closeViewer(){

    memoryModal?.classList.remove("active");
    document.body.classList.remove("modal-open");

}

closeMemory?.addEventListener("click", closeViewer);

memoryModal?.addEventListener("click",(e)=>{

    if(e.target.classList.contains("memory-overlay")){

        closeViewer();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeViewer();

    }

});

document.addEventListener("click", (e) => {
    console.log(e.target);
});


/* ==========================================================
   CHAPTER FIVE
   CINEMATIC ENGINE
========================================================== */

const chapterFive = document.querySelector("#chapter-five");

if (chapterFive) {

    const cinematicPanels = chapterFive.querySelectorAll(".manga-panel");

    const cinematicObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("cinematic-show");

        });

    },{

        threshold:.25

    });

    cinematicPanels.forEach(panel=>{

        cinematicObserver.observe(panel);

    });

}

/* ==========================================================
   TRANSFORMATION LIGHT
========================================================== */

const transition = document.querySelector(".transformation-transition");

if(transition){

    const transitionObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                transition.classList.add("light-active");

            }

        });

    },{

        threshold:.5

    });

    transitionObserver.observe(transition);

}

/* ==========================================================
   FLOATING PETALS
========================================================== */

const petalPanels = document.querySelectorAll(
    "#chapter-five .petal-panel"
);

petalPanels.forEach(panel => {

    for(let i = 0; i < 12; i++){

        const petal = document.createElement("span");

        petal.className = "petal";

        petal.style.left = Math.random() * 100 + "%";

        petal.style.animationDelay =
            Math.random() * 6 + "s";

        petal.style.animationDuration =
            5 + Math.random() * 4 + "s";

        panel.appendChild(petal);

    }

});

/* ==========================================================
   SUNRISE EFFECT
========================================================== */

const sunrisePanel=document.querySelectorAll(

"#chapter-five .panel-cinematic"

);

sunrisePanel.forEach(panel=>{

    panel.addEventListener("mouseenter",()=>{

        panel.classList.add("sunrise");

    });

    panel.addEventListener("mouseleave",()=>{

        panel.classList.remove("sunrise");

    });

});

/* ==========================================================
   TRANSFORMATION REVEAL
========================================================== */

const revealPanel=document.querySelector(

'#chapter-five img[src*="panel-07"]'

);

if(revealPanel){

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                revealPanel.classList.add(

                    "transformation-active"

                );

            }

        });

    },{

        threshold:.45

    });

    observer.observe(revealPanel);

}

/* ==========================================================
   BIRTHDAY TRANSITION
========================================================== */

const birthdayButton = document.getElementById("birthday-enter");

if (birthdayButton) {

    birthdayButton.addEventListener("click", () => {

        const birthdaySection = document.getElementById("birthday-page");

        if (!birthdaySection) return;

        birthdaySection.scrollIntoView({

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   FINAL CHAPTER
   GIFT REVEAL
========================================================== */

const giftBox = document.getElementById("gift-box");
const downloads = document.getElementById("gift-downloads");

if (giftBox && downloads) {

    let opened = false;

    giftBox.addEventListener("click", () => {

        if (opened) return;

        opened = true;

        giftBox.classList.add("opening");

        setTimeout(() => {

            giftBox.classList.add("opened");

            downloads.classList.add("active");

        }, 900);

    });

}

/* ==========================================================
   DOWNLOAD BUTTONS
========================================================== */

const downloadButtons = document.querySelectorAll(".download-button");

downloadButtons.forEach(button => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        button.classList.add("clicked");

        const originalText = button.textContent;

        button.textContent = "Preparing Download...";

        setTimeout(() => {

            button.textContent = "Ready!";

        }, 1200);

        setTimeout(() => {

            button.textContent = originalText;

            button.classList.remove("clicked");

        }, 2500);

    });

});

/* ==========================================================
   BIRTHDAY HEADER
========================================================== */

const birthdayHeader = document.querySelector(".birthday-header");

if (birthdayHeader) {

    const birthdayObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            birthdayHeader.classList.add("birthday-visible");

        });

    }, {

        threshold: 0.35

    });

    birthdayObserver.observe(birthdayHeader);

}

/* ==========================================================
   MESSAGE REVEAL
========================================================== */

const birthdayMessage = document.querySelector(".message-card");

if (birthdayMessage) {

    const messageObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            birthdayMessage.classList.add("message-visible");

        });

    }, {

        threshold: 0.4

    });

    messageObserver.observe(birthdayMessage);

}

/* ==========================================================
   FLOATING GIFT
========================================================== */

if (giftBox) {

    let time = 0;

    function floatGift() {

        if (!giftBox.classList.contains("opened")) {

            time += 0.02;

            const offset = Math.sin(time) * 6;

            giftBox.style.transform = `translateY(${offset}px)`;

        }

        requestAnimationFrame(floatGift);

    }

    floatGift();

}

/* ==========================================================
   BACKGROUND PARTICLES
========================================================== */

const birthdaySection = document.getElementById("birthday-page");

if (birthdaySection) {

    for (let i = 0; i < 18; i++) {

        const particle = document.createElement("span");

        particle.className = "birthday-particle";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDelay = Math.random() * 8 + "s";

        particle.style.animationDuration =

            (8 + Math.random() * 6) + "s";

        birthdaySection.appendChild(particle);

    }

}

/* ==========================================================
   EPILOGUE
   HERO PANEL
========================================================== */

const heroPanel = document.querySelector(".panel-hero");

if (heroPanel) {

    const heroObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            heroPanel.classList.add("hero-visible");

        });

    }, {

        threshold: 0.35

    });

    heroObserver.observe(heroPanel);

}

/* ==========================================================
   SKYLINE PARALLAX
========================================================== */

const skyline = document.querySelector("#epilogue .panel-cinematic");

window.addEventListener("scroll", () => {

    if (!skyline) return;

    const rect = skyline.getBoundingClientRect();

    const speed = rect.top * -0.05;

    skyline.style.transform =
        `translateY(${speed}px)`;

});

/* ==========================================================
   VOLUME TWO REVEAL
========================================================== */

const quote = document.querySelector(".epilogue-quote");
const seasonTwo = document.querySelector(".season-two");

if (quote && seasonTwo) {

    seasonTwo.style.opacity = "0";
    seasonTwo.style.transform = "translateY(50px)";

    const quoteObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            seasonTwo.style.transition =
                "all .9s ease";

            seasonTwo.style.opacity = "1";

            seasonTwo.style.transform =
                "translateY(0)";

        });

    }, {

        threshold: 0.65

    });

    quoteObserver.observe(quote);

}

/* ==========================================================
   ENDING SCREEN
========================================================== */

const continueBtn =
document.getElementById("continue-story");

const endingScreen =
document.getElementById("ending-screen");

if (continueBtn && endingScreen) {

    continueBtn.addEventListener("click", () => {

        endingScreen.classList.add("active");

        document.body.style.overflow = "hidden";

        setTimeout(() => {

            endingScreen.classList.remove("active");

            document.body.style.overflow = "";

        }, 3500);

    });

}

/* ==========================================================
   QUOTE ANIMATION
========================================================== */

const quoteText =
document.querySelector(".epilogue-quote");

if (quoteText) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            quoteText.classList.add("visible");

        });

    }, {

        threshold: 0.45

    });

    observer.observe(quoteText);

}


/* =========================================================
   COVER PAGE
========================================================= */

const coverPage = document.querySelector(".cover-page");
const coverImage = document.querySelector(".cover-image");
const coverContent = document.querySelector(".cover-content");
const beginReading = document.getElementById("begin-reading");
const openingPage = document.querySelector(".opening-page");

/* =========================================================
   BEGIN READING BUTTON
========================================================= */

if (beginReading && openingPage) {

    beginReading.addEventListener("click", () => {

        openingPage.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

}

/* =========================================================
   PARALLAX EFFECT
========================================================= */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reduceMotion.matches) {

    window.addEventListener("scroll", () => {

        if (!coverPage) return;

        const scroll = window.scrollY;

        const coverHeight = coverPage.offsetHeight;

        if (scroll <= coverHeight) {

            /* Background moves slower */

            if (coverImage) {

                coverImage.style.transform =
                    `translateY(${scroll * 0.18}px) scale(1.05)`;

            }

            /* Text moves even slower */

            if (coverContent) {

                coverContent.style.transform =
                    `translateY(${scroll * 0.08}px)`;

                coverContent.style.opacity =
                    Math.max(0, 1 - scroll / 450);

            }

        }

    });

}

/* =========================================================
   TITLE INTRO ANIMATION
========================================================= */

window.addEventListener("load", () => {

    if (!coverContent) return;

    coverContent.animate(

        [

            {
                opacity: 0,
                transform: "translateY(50px)"
            },

            {
                opacity: 1,
                transform: "translateY(0)"
            }

        ],

        {

            duration: 1400,
            easing: "cubic-bezier(.22,.61,.36,1)",
            fill: "forwards"

        }

    );

});

/* =========================================================
   BUTTON HOVER MICRO ANIMATION
========================================================= */

if (beginReading) {

    beginReading.addEventListener("mouseenter", () => {

        beginReading.animate(

            [

                { transform: "translateY(0)" },

                { transform: "translateY(-5px)" }

            ],

            {

                duration: 250,
                fill: "forwards"

            }

        );

    });

    beginReading.addEventListener("mouseleave", () => {

        beginReading.animate(

            [

                { transform: "translateY(-5px)" },

                { transform: "translateY(0)" }

            ],

            {

                duration: 250,
                fill: "forwards"

            }

        );

    });

}

/* =========================================================
   OPTIONAL:
   Reveal cover title again when returning to the top
========================================================= */

let coverAnimated = true;

window.addEventListener("scroll", () => {

    if (!coverContent) return;

    if (window.scrollY < 40 && !coverAnimated) {

        coverAnimated = true;

        coverContent.animate(

            [

                {

                    opacity: .7,
                    transform: "translateY(20px)"

                },

                {

                    opacity: 1,
                    transform: "translateY(0)"

                }

            ],

            {

                duration: 800,
                easing: "ease-out"

            }

        );

    }

    if (window.scrollY > 150) {

        coverAnimated = false;

    }

});

const continueSection = document.querySelector(".continue-story");
const continue2Btn = document.getElementById("birthday-enter");
const lockedContent = document.getElementById("locked-content");

let storyUnlocked = false;

function lockStoryScroll() {

    if (storyUnlocked) return;

    const trigger = continueSection.offsetTop;

    if (window.scrollY >= trigger - 150) {

        window.scrollTo({

            top: trigger - 150,

            behavior: "instant"

        });

    }

}

window.addEventListener("scroll", lockStoryScroll);

continue2Btn.addEventListener("click", () => {

    storyUnlocked = true;

    window.removeEventListener("scroll", lockStoryScroll);

    lockedContent.classList.add("show");

    lockedContent.scrollIntoView({

        behavior:"smooth"

    });

});