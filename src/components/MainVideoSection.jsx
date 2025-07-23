import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { CustomEase } from "gsap/CustomEase"
import { SplitText } from "gsap/SplitText"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(CustomEase, SplitText, ScrambleTextPlugin)

const BACKGROUND_IMAGES = [
  { id: "default-bg", className: "default", url: "https://assets.codepen.io/7558/wave-bg-001.webp" },
  { id: "focus-bg", className: "focus", url: "https://assets.codepen.io/7558/wave-bg-002.webp" },
  { id: "presence-bg", className: "presence", url: "https://assets.codepen.io/7558/wave-bg-003.webp" },
  { id: "feel-bg", className: "feel", url: "https://assets.codepen.io/7558/wave-bg-004.webp" },
]

const BACKGROUND_TEXT_ITEMS = [
  { text: "BE", top: "5%", left: "8%" },
  { text: "PRESENT", top: "5%", left: "15%" },
  { text: "LISTEN", top: "5%", left: "28%" },
  { text: "DEEPLY", top: "5%", left: "42%" },
  { text: "OBSERVE", top: "5%", left: "55%" },
  { text: "&", top: "5%", left: "75%" },
  { text: "FEEL", top: "5%", left: "85%" },
  { text: "MAKE", top: "10%", left: "12%" },
  { text: "BETTER", top: "10%", left: "45%" },
  { text: "DECISIONS", top: "10%", right: "20%" },
  { text: "THE", top: "15%", left: "8%" },
  { text: "CREATIVE", top: "15%", left: "30%" },
  { text: "PROCESS", top: "15%", left: "55%" },
  { text: "IS", top: "15%", right: "20%" },
  { text: "MYSTERIOUS", top: "15%", right: "5%" },
  { text: "S", top: "25%", left: "5%" },
  { text: "I", top: "25%", left: "10%" },
  { text: "M", top: "25%", left: "15%" },
  { text: "P", top: "25%", left: "20%" },
  { text: "L", top: "25%", left: "25%" },
  { text: "I", top: "25%", left: "30%" },
  { text: "C", top: "25%", left: "35%" },
  { text: "I", top: "25%", left: "40%" },
  { text: "T", top: "25%", left: "45%" },
  { text: "Y", top: "25%", left: "50%" },
  { text: "IS THE KEY", top: "25%", right: "5%" },
  { text: "FIND YOUR VOICE", top: "35%", left: "25%" },
  { text: "TRUST INTUITION", top: "35%", left: "65%" },
  { text: "EMBRACE SILENCE", top: "50%", left: "5%" },
  { text: "QUESTION EVERYTHING", top: "50%", right: "5%" },
  { text: "TRUTH", top: "75%", left: "20%" },
  { text: "WISDOM", top: "75%", right: "20%" },
  { text: "FOCUS", top: "80%", left: "10%" },
  { text: "ATTENTION", top: "80%", left: "35%" },
  { text: "AWARENESS", top: "80%", left: "65%" },
  { text: "PRESENCE", top: "80%", right: "10%" },
  { text: "SIMPLIFY", top: "85%", left: "25%" },
  { text: "REFINE", top: "85%", right: "25%" },
]

const KINETIC_LINES = [
  "build build build",
  "precision precision precision",
  "trust trust trust",
  "strength strength strength",
  "quality quality quality",
  "design design design",
  "construct construct construct",
  "durability durability durability",
  "craft craft craft",
  "vision vision vision",
  "structure structure structure",
  "deliver deliver deliver",
]


export default function MainVideoSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    CustomEase.create("customEase", "0.86, 0, 0.07, 1")
    CustomEase.create("mouseEase", "0.25, 0.1, 0.25, 1")

    const state = {
      activeRowId: null,
      kineticAnimationActive: false,
      activeKineticAnimation: null,
      textRevealAnimation: null,
      transitionInProgress: false,
    }

    // For overlays *inside video section* only:
    const container = containerRef.current

    // Overlays selectors scoped inside container
    function qsa(sel) {
      return container.querySelectorAll(sel)
    }
    function qs(sel) {
      return container.querySelector(sel)
    }

    const backgroundImages = {}
    BACKGROUND_IMAGES.forEach(({ id }) => {
      backgroundImages[id] = qs(`#${id}`)
    })

    function switchBackgroundImage(id) {
      Object.values(backgroundImages).forEach((bg) =>
        gsap.to(bg, { opacity: 0, duration: 0.8, ease: "customEase" }),
      )
      if (backgroundImages[id]) {
        gsap.to(backgroundImages[id], {
          opacity: 1,
          duration: 0.8,
          ease: "customEase",
          delay: 0.2,
        })
      } else {
        gsap.to(backgroundImages.default, {
          opacity: 1,
          duration: 0.8,
          ease: "customEase",
          delay: 0.2,
        })
      }
    }

    const backgroundTextItems = qsa(".text-item")
    backgroundTextItems.forEach((item) => {
      item.dataset.originalText = item.textContent
      item.dataset.text = item.textContent
      gsap.set(item, { opacity: 1 })
    })

    const typeLines = qsa(".type-line")
    typeLines.forEach((line, index) => {
      if (index % 2 === 0) line.classList.add("odd")
      else line.classList.add("even")
    })
    const oddLines = qsa(".type-line.odd")
    const evenLines = qsa(".type-line.even")

    const alternativeTexts = {
      focus: { BE: "BECOME", PRESENT: "MINDFUL", LISTEN: "HEAR", DEEPLY: "INTENTLY",
        OBSERVE: "NOTICE", "&": "+", FEEL: "SENSE", MAKE: "CREATE", BETTER: "IMPROVED",
        DECISIONS: "CHOICES", THE: "YOUR", CREATIVE: "ARTISTIC", PROCESS: "JOURNEY",
        IS: "FEELS", MYSTERIOUS: "MAGICAL", S: "START", I: "INSPIRE", M: "MAKE",
        P: "PURE", L: "LIGHT", C: "CREATE", T: "TRANSFORM", Y: "YOURS", "IS THE KEY": "UNLOCKS ALL",
        "FIND YOUR VOICE": "SPEAK YOUR TRUTH", "TRUST INTUITION": "FOLLOW INSTINCT",
        "EMBRACE SILENCE": "WELCOME STILLNESS", "QUESTION EVERYTHING": "CHALLENGE NORMS",
        TRUTH: "HONESTY", WISDOM: "INSIGHT", FOCUS: "CONCENTRATE", ATTENTION: "AWARENESS",
        AWARENESS: "CONSCIOUSNESS", PRESENCE: "BEING", SIMPLIFY: "MINIMIZE", REFINE: "PERFECT" },
      presence: { BE: "EVOLVE", PRESENT: "ENGAGED", LISTEN: "ABSORB", DEEPLY: "FULLY",
        OBSERVE: "ANALYZE", "&": "→", FEEL: "EXPERIENCE", MAKE: "BUILD", BETTER: "STRONGER",
        DECISIONS: "SYSTEMS", THE: "EACH", CREATIVE: "ITERATIVE", PROCESS: "METHOD", IS: "BECOMES",
        MYSTERIOUS: "REVEALING", S: "STRUCTURE", I: "ITERATE", M: "METHOD", P: "PRACTICE",
        L: "LEARN", C: "CONSTRUCT", T: "TECHNIQUE", Y: "YIELD", "IS THE KEY": "DRIVES SUCCESS",
        "FIND YOUR VOICE": "DEVELOP YOUR STYLE", "TRUST INTUITION": "FOLLOW THE FLOW",
        "EMBRACE SILENCE": "VALUE PAUSES", "QUESTION EVERYTHING": "EXAMINE DETAILS",
        TRUTH: "CLARITY", WISDOM: "KNOWLEDGE", FOCUS: "DIRECTION", ATTENTION: "PRECISION",
        AWARENESS: "UNDERSTANDING", PRESENCE: "ENGAGEMENT", SIMPLIFY: "STREAMLINE",
        REFINE: "OPTIMIZE" },
      feel: { BE: "SEE", PRESENT: "FOCUSED", LISTEN: "UNDERSTAND", DEEPLY: "CLEARLY",
        OBSERVE: "PERCEIVE", "&": "=", FEEL: "KNOW", MAKE: "ACHIEVE", BETTER: "CLEARER",
        DECISIONS: "VISION", THE: "THIS", CREATIVE: "INSIGHTFUL", PROCESS: "THINKING",
        IS: "BRINGS", MYSTERIOUS: "ILLUMINATING", S: "SHARP", I: "INSIGHT", M: "MINDFUL",
        P: "PRECISE", L: "LUCID", C: "CLEAR", T: "TRANSPARENT", Y: "YES", "IS THE KEY": "REVEALS TRUTH",
        "FIND YOUR VOICE": "DISCOVER YOUR VISION", "TRUST INTUITION": "BELIEVE YOUR EYES",
        "EMBRACE SILENCE": "SEEK STILLNESS", "QUESTION EVERYTHING": "CLARIFY ASSUMPTIONS",
        TRUTH: "REALITY", WISDOM: "PERCEPTION", FOCUS: "CLARITY", ATTENTION: "OBSERVATION",
        AWARENESS: "RECOGNITION", PRESENCE: "ALERTNESS", SIMPLIFY: "DISTILL", REFINE: "SHARPEN" },
    }

    const textRows = qsa(".text-row")
    const splitTexts = {}
    textRows.forEach((row) => {
      const textElement = row.querySelector(".text-content")
      const rowId = row.dataset.rowId
      splitTexts[rowId] = new SplitText(textElement, {
        type: "chars",
        charsClass: "char",
        mask: true,
        reduceWhiteSpace: false,
        propIndex: true,
      })
      textElement.style.visibility = "visible"
    })

    function updateCharacterWidths() {
      const isMobile = window.innerWidth < 1024
      textRows.forEach((row) => {
        const rowId = row.dataset.rowId
        const textElement = row.querySelector(".text-content")
        const computedStyle = window.getComputedStyle(textElement)
        const currentFontSize = computedStyle.fontSize
        const chars = splitTexts[rowId].chars

        chars.forEach((char, i) => {
          const charText = char.textContent || (char.querySelector(".char-inner")?.textContent || "")
          if (!charText && i === 0) return
          let charWidth

          if (isMobile) {
            const fontSizeValue = parseFloat(currentFontSize)
            const standardCharWidth = fontSizeValue * 0.6
            charWidth = standardCharWidth
            if (!char.querySelector(".char-inner") && charText) {
              char.textContent = ""
              const innerSpan = document.createElement("span")
              innerSpan.className = "char-inner"
              innerSpan.textContent = charText
              char.appendChild(innerSpan)
              innerSpan.style.transform = "translate3d(0, 0, 0)"
            }
            char.style.width = `${charWidth}px`
            char.style.maxWidth = `${charWidth}px`
            char.dataset.charWidth = charWidth
            char.dataset.hoverWidth = charWidth
          } else {
            const tempSpan = document.createElement("span")
            tempSpan.style.position = "absolute"
            tempSpan.style.visibility = "hidden"
            tempSpan.style.fontSize = currentFontSize
            tempSpan.style.fontFamily = '"Longsile", sans-serif'
            tempSpan.textContent = charText
            document.body.appendChild(tempSpan)
            const actualWidth = tempSpan.offsetWidth
            document.body.removeChild(tempSpan)
            const fontSizeValue = parseFloat(currentFontSize)
            const fontSizeRatio = fontSizeValue / 160
            const padding = 10 * fontSizeRatio
            charWidth = Math.max(actualWidth + padding, 30 * fontSizeRatio)
            if (!char.querySelector(".char-inner") && charText) {
              char.textContent = ""
              const innerSpan = document.createElement("span")
              innerSpan.className = "char-inner"
              innerSpan.textContent = charText
              char.appendChild(innerSpan)
              innerSpan.style.transform = "translate3d(0, 0, 0)"
            }
            char.style.width = `${charWidth}px`
            char.style.maxWidth = `${charWidth}px`
            char.dataset.charWidth = charWidth
            const hoverWidth = Math.max(charWidth * 1.8, 85 * fontSizeRatio)
            char.dataset.hoverWidth = hoverWidth
          }
          char.style.setProperty("--char-index", i)
        })
      })
    }

    updateCharacterWidths()
    window.addEventListener("resize", () => {
      clearTimeout(window.resizeTimer)
      window.resizeTimer = setTimeout(() => {
        updateCharacterWidths()
      }, 250)
    })

    // Animate initial row reveals
    textRows.forEach((row, rowIndex) => {
      const rowId = row.dataset.rowId
      const chars = splitTexts[rowId].chars
      gsap.set(chars, { opacity: 0, filter: "blur(15px)" })
      gsap.to(chars, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.09,
        ease: "customEase",
        delay: 0.15 * rowIndex,
      })
    })

    function forceResetKineticAnimation() {
      if (state.activeKineticAnimation) {
        state.activeKineticAnimation.kill()
        state.activeKineticAnimation = null
      }
      const kineticType = qs("#kinetic-type")
      gsap.killTweensOf([kineticType, typeLines, oddLines, evenLines])
      gsap.set(kineticType, { display: "grid", scale: 1, rotation: 0, opacity: 1, visibility: "visible" })
      gsap.set(typeLines, { opacity: 0.015, x: "0%" })
      state.kineticAnimationActive = false
    }

    function startKineticAnimation(text) {
      forceResetKineticAnimation()
      const kineticType = qs("#kinetic-type")
      kineticType.style.display = "grid"
      kineticType.style.opacity = "1"
      kineticType.style.visibility = "visible"
      const repeatedText = `${text} ${text} ${text}`
      typeLines.forEach((line) => { line.textContent = repeatedText })
      setTimeout(() => {
        const timeline = gsap.timeline({
          onComplete: () => { state.kineticAnimationActive = false }
        })
        timeline.to(kineticType, { duration: 1.4, ease: "customEase", scale: 2.7, rotation: -90 })
        timeline.to(
          oddLines,
          { keyframes: [{ x: "20%", duration: 1, ease: "customEase" }, { x: "-200%", duration: 1.5, ease: "customEase" }], stagger: 0.08 }, 0)
        timeline.to(
          evenLines,
          { keyframes: [{ x: "-20%", duration: 1, ease: "customEase" }, { x: "200%", duration: 1.5, ease: "customEase" }], stagger: 0.08 }, 0)
        timeline.to(
          typeLines,
          { keyframes: [{ opacity: 1, duration: 1, ease: "customEase" }, { opacity: 0, duration: 1.5, ease: "customEase" }], stagger: 0.05 }, 0)
        state.kineticAnimationActive = true
        state.activeKineticAnimation = timeline
      }, 20)
    }

    function fadeOutKineticAnimation() {
      if (!state.kineticAnimationActive) return
      if (state.activeKineticAnimation) {
        state.activeKineticAnimation.kill()
        state.activeKineticAnimation = null
      }
      const kineticType = qs("#kinetic-type")
      const fadeOutTimeline = gsap.timeline({
        onComplete: () => {
          gsap.set(kineticType, { scale: 1, rotation: 0, opacity: 1 })
          gsap.set(typeLines, { opacity: 0.015, x: "0%" })
          state.kineticAnimationActive = false
        },
      })
      fadeOutTimeline.to(kineticType, { opacity: 0, scale: 0.8, duration: 0.5, ease: "customEase" })
    }

    function createTextRevealAnimation(rowId) {
      const timeline = gsap.timeline()
      timeline.to(backgroundTextItems, { opacity: 0.3, duration: 0.5, ease: "customEase" })
      timeline.call(() => { backgroundTextItems.forEach((item) => { item.classList.add("highlight") }) })
      timeline.call(() => { backgroundTextItems.forEach((item) => {
        const originalText = item.dataset.text
        if (alternativeTexts[rowId] && alternativeTexts[rowId][originalText]) {
          item.textContent = alternativeTexts[rowId][originalText]
        }
      }) }, null, "+=0.5")
      timeline.call(() => { backgroundTextItems.forEach((item) => { item.classList.remove("highlight"); item.classList.add("highlight-reverse") }) })
      timeline.call(() => { backgroundTextItems.forEach((item) => { item.classList.remove("highlight-reverse") }) }, null, "+=0.5")
      return timeline
    }

    function resetBackgroundTextWithAnimation() {
      const timeline = gsap.timeline()
      timeline.call(() => { backgroundTextItems.forEach((item) => { item.classList.add("highlight") }) })
      timeline.call(() => { backgroundTextItems.forEach((item) => { item.textContent = item.dataset.originalText }) }, null, "+=0.5")
      timeline.call(() => { backgroundTextItems.forEach((item) => { item.classList.remove("highlight"); item.classList.add("highlight-reverse") }) })
      timeline.call(() => { backgroundTextItems.forEach((item) => { item.classList.remove("highlight-reverse") }) }, null, "+=0.5")
      timeline.to(backgroundTextItems, { opacity: 1, duration: 0.5, ease: "customEase" })
      return timeline
    }

    function activateRow(row) {
      if (state.transitionInProgress) return
      const rowId = row.dataset.rowId
      if (state.activeRowId === rowId) return
      const activeRow = container.querySelector(".text-row.active")
      if (activeRow) {
        transitionBetweenRows(activeRow, row)
      } else {
        row.classList.add("active")
        state.activeRowId = rowId
        const text = row.querySelector(".text-content").dataset.text
        const chars = splitTexts[rowId].chars
        const innerSpans = row.querySelectorAll(".char-inner")
        switchBackgroundImage(rowId)
        startKineticAnimation(text)
        if (state.textRevealAnimation) state.textRevealAnimation.kill()
        state.textRevealAnimation = createTextRevealAnimation(rowId)
        const timeline = gsap.timeline()
        timeline.to(
          chars,
          { maxWidth: (i, target) => parseFloat(target.dataset.hoverWidth), duration: 0.64, stagger: 0.04, ease: "customEase" }, 0)
        timeline.to(
          innerSpans,
          { x: -35, duration: 0.64, stagger: 0.04, ease: "customEase" }, 0.05)
      }
    }
    function deactivateRow(row) {
      if (state.transitionInProgress) return
      const rowId = row.dataset.rowId
      if (state.activeRowId !== rowId) return
      state.activeRowId = null
      row.classList.remove("active")
      switchBackgroundImage("default")
      fadeOutKineticAnimation()
      if (state.textRevealAnimation) state.textRevealAnimation.kill()
      state.textRevealAnimation = resetBackgroundTextWithAnimation()
      const chars = splitTexts[rowId].chars
      const innerSpans = row.querySelectorAll(".char-inner")
      const timeline = gsap.timeline()
      timeline.to(
        innerSpans,
        { x: 0, duration: 0.64, stagger: 0.03, ease: "customEase" }, 0)
      timeline.to(
        chars,
        { maxWidth: (i, target) => parseFloat(target.dataset.charWidth), duration: 0.64, stagger: 0.03, ease: "customEase" }, 0.05)
    }
    function transitionBetweenRows(fromRow, toRow) {
      if (state.transitionInProgress) return
      state.transitionInProgress = true
      const fromRowId = fromRow.dataset.rowId
      const toRowId = toRow.dataset.rowId
      fromRow.classList.remove("active")
      const fromChars = splitTexts[fromRowId].chars
      const fromInners = fromRow.querySelectorAll(".char-inner")
      gsap.killTweensOf(fromChars)
      gsap.killTweensOf(fromInners)
      toRow.classList.add("active")
      state.activeRowId = toRowId
      const toText = toRow.querySelector(".text-content").dataset.text
      const toChars = splitTexts[toRowId].chars
      const toInners = toRow.querySelectorAll(".char-inner")
      forceResetKineticAnimation()
      switchBackgroundImage(toRowId)
      startKineticAnimation(toText)
      if (state.textRevealAnimation) state.textRevealAnimation.kill()
      state.textRevealAnimation = createTextRevealAnimation(toRowId)
      gsap.set(fromChars, { maxWidth: (i, target) => parseFloat(target.dataset.charWidth) })
      gsap.set(fromInners, { x: 0 })
      const timeline = gsap.timeline({ onComplete: () => { state.transitionInProgress = false } })
      timeline.to(
        toChars,
        { maxWidth: (i, target) => parseFloat(target.dataset.hoverWidth), duration: 0.64, stagger: 0.04, ease: "customEase" }, 0)
      timeline.to(
        toInners,
        { x: -35, duration: 0.64, stagger: 0.04, ease: "customEase" }, 0.05)
    }

    // Mouse parallax inside video overlay only
    const parallaxLayers = [0.02, 0.03, 0.04, 0.05]
    const backgroundElements = [
      ...qsa("[id$='-bg']"),
      ...qsa(".text-background"),
    ]
    backgroundElements.forEach((el, index) => {
      el.dataset.parallaxSpeed = parallaxLayers[index % parallaxLayers.length]
      gsap.set(el, { transformOrigin: "center center", force3D: true })
    })
    let lastParallaxTime = 0
    const throttleParallax = 20
    container.addEventListener("mousemove", (e) => {
      const now = Date.now()
      if (now - lastParallaxTime < throttleParallax) return
      lastParallaxTime = now
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const offsetX = (e.clientX - centerX) / (rect.width / 2)
      const offsetY = (e.clientY - centerY) / (rect.height / 2)
      backgroundElements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed)
        if (el.id && el.id.endsWith("-bg") && el.style.opacity === "0") return
        const moveX = offsetX * 100 * speed
        const moveY = offsetY * 50 * speed
        gsap.to(el, { x: moveX, y: moveY, duration: 1, ease: "mouseEase", overwrite: "auto" })
      })
    })
    container.addEventListener("mouseleave", () => {
      backgroundElements.forEach((el) =>
        gsap.to(el, { x: 0, y: 0, duration: 1.5, ease: "customEase" })
      )
    })
    backgroundElements.forEach((el, index) => {
      const delay = index * 0.2
      const floatAmount = 5 + ((index % 3) * 2)
      gsap.to(el, { y: `+=${floatAmount}`, duration: 3 + (index % 2), ease: "sine.inOut", repeat: -1, yoyo: true, delay, })
    })
    // Interactive events
    textRows.forEach((row) => {
      const interactiveArea = row.querySelector(".interactive-area")
      interactiveArea.addEventListener("mouseenter", () => activateRow(row))
      interactiveArea.addEventListener("mouseleave", () => {
        if (state.activeRowId === row.dataset.rowId) deactivateRow(row)
      })
      row.addEventListener("click", () => activateRow(row))
    })
    // Scramble single background text item
    function scrambleRandomText() {
      const randomIndex = Math.floor(Math.random() * backgroundTextItems.length)
      const randomItem = backgroundTextItems[randomIndex]
      const originalText = randomItem.dataset.text
      gsap.to(randomItem, {
        duration: 1,
        scrambleText: {
          text: originalText,
          chars: "■▪▌▐▬",
          revealDelay: 0.5,
          speed: 0.3,
        },
        ease: "none",
      })
      const delay = 0.5 + Math.random() * 2
      setTimeout(scrambleRandomText, delay * 1000)
    }
    setTimeout(scrambleRandomText, 1000)
    // Subtle blinking for all background text items
    backgroundTextItems.forEach((item, index) => {
      const delay = index * 0.1
      gsap.to(item, {
        opacity: 0.85,
        duration: 2 + (index % 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      })
    })

    // Patch: kinetic-type visible in overlay
    const style = document.createElement("style")
    style.textContent = `#kinetic-type { z-index: 400 !important; display: grid !important; visibility: visible !important; opacity: 1; pointer-events: none; }`
    document.head.appendChild(style)
  }, [])

  return (
    <>
      <div
        ref={containerRef}
        className="narrow-video-overlay"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          userSelect: "none",
          maxWidth: "100vw",
        }}
      >
        {/* Video at base */}
        <video
          className="video-element"
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Overlay layers, all absolute within the container */}
        {BACKGROUND_IMAGES.map(({ id, className, url }) => (
          <div
            key={id}
            id={id}
            className={`background-image ${className}`}
            style={{
              backgroundImage: `url(${url})`,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: id === "default-bg" ? 1 : 0,
              zIndex: 5,
              mixBlendMode: "multiply",
              transition: "opacity 0.8s ease",
              pointerEvents: "none",
            }}
          />
        ))}

        <div
          className="bottom-gradient"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "40vh",
            background:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div
          className="text-background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 15,
          }}
        >
          {BACKGROUND_TEXT_ITEMS.map(({ text, top, left, right }, i) => (
            <div
              key={i}
              className="text-item"
              data-text={text}
              style={{
                position: "absolute",
                top,
                left,
                right,
                color: "#ffcc00",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                fontFamily: '"TheGoodMonolith", monospace',
                opacity: 0.8,
                pointerEvents: "none",
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Overlay gradient for white top */}
        <div
          className="white-gradient-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 30,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 90%)"
          }}
        />

        {/* Main text content and interactivity */}
        <div
          className="main-content sliced-container"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "100vw",
            zIndex: 110,
            userSelect: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {["focus", "presence", "feel"].map((rowId) => (
            <div
              className="text-row"
              data-row-id={rowId}
              key={rowId}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "100vw",
                height: "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <div
                className="text-content"
                data-text={rowId.toUpperCase()}
                style={{
                  fontSize: "10rem",
                  color: "#ffcc00",
                  textTransform: "uppercase",
                  letterSpacing: "0",
                  visibility: "hidden",
                  willChange: "transform",
                  fontFamily: '"Longsile", sans-serif',
                  fontWeight: "normal",
                }}
              >
                {rowId.toUpperCase()}
              </div>
              <div
                className="interactive-area"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 30,
                }}
              />
            </div>
          ))}
        </div>

        {/* Kinetic animated text overlay (centered) */}
        <div
          className="type"
          id="kinetic-type"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vmax",
            height: "100vmax",
            display: "none",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
            marginTop: "-50vmax",
            marginLeft: "-50vmax",
            pointerEvents: "none",
            userSelect: "none",
            transformStyle: "preserve-3d",
            zIndex: 400,
            color: "#fff",
            fontFamily: '"PP Neue Montreal", sans-serif',
            fontWeight: "bold",
            fontSize: "clamp(7rem, 18.75vh, 15rem)",
            textTransform: "uppercase",
          }}
        >
          {KINETIC_LINES.map((line, i) => (
            <div
              key={i}
              className={`type-line ${i % 2 === 0 ? "odd" : "even"}`}
              style={{
                whiteSpace: "nowrap",
                opacity: 0.015,
                lineHeight: 0.75,
                position: "relative",
                userSelect: "none",
                fontFamily: '"PP Neue Montreal", sans-serif',
                color: "#fff",
                zIndex: i % 2 === 0 ? 50 : 150,
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
      {/* External font CSS and additional styles. For a real project, these belong in your global CSS. */}
      <style>{`
        @import url("https://fonts.cdnfonts.com/css/longsile");
        @import url("https://fonts.cdnfonts.com/css/thegoodmonolith");
        @import url("https://fonts.cdnfonts.com/css/pp-neue-montreal");
        .text-item::after {
          content: "";
          position: absolute;
          top: -2px;
          left: -4px;
          width: 0;
          height: calc(100% + 4px);
          background-color: #ffcc00;
          z-index: 1;
          transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .text-item.highlight::after { width: calc(100% + 8px); }
        .text-item.highlight-reverse::after { width: 0; right: -4px; left: auto; }
        .char {
          display: inline-block;
          position: relative;
          overflow: hidden;
          max-width: 80px;
          transition: max-width 0.64s cubic-bezier(0.86, 0, 0.07, 1);
          margin-right: 0px;
        }
        .text-row.active .char::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 80%;
          background-color: rgba(255, 204, 0, 0.2);
          opacity: 0;
          animation: fadeIn 0.3s forwards;
          animation-delay: calc(var(--char-index, 0) * 0.05s);
        }
        @keyframes fadeIn { to { opacity: 1; } }
        .char-inner {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 100%;
          will-change: transform;
          transform: translate3d(-20px, 0, 0);
        }
        .type-line {
          user-select: none;
          will-change: transform, opacity; }
        .type-line.odd { z-index: 50; }
        .type-line.even { z-index: 150; }
        /* Responsive for text size/shapes */
        @media screen and (max-width: 992px) {
          .text-content { font-size: 7rem !important; }
          .text-row { height: 110px !important; }
          .type { font-size: clamp(5rem, 12vh, 10rem) !important; }
        }
        @media screen and (max-width: 768px) {
          .text-content { font-size: 5rem !important; }
          .text-row { height: 80px !important; margin: 8px 0 !important; }
          .type { font-size: clamp(3.5rem, 8vh, 7rem) !important; }
          .text-item { font-size: 0.7rem !important; }
        }
        @media screen and (max-width: 480px) {
          .text-content { font-size: 3.5rem !important; }
          .text-row { height: 60px !important; margin: 6px 0 !important; }
          .type { font-size: clamp(2.5rem, 6vh, 5rem) !important; }
          .text-item { font-size: 0.6rem !important; }
        }
      `}</style>
    </>
  )
}
