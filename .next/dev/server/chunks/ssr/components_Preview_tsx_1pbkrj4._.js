module.exports = [
"[project]/components/Preview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Preview",
    ()=>Preview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rail.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tidy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tidy.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$railView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/railView.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const EASE = [
    0.2,
    0,
    0,
    1
];
const SLIDE_MS = 0.42;
/** room reserved for the wide preview controls: panel, right margin and breathing space */ const WIDE_CONTROL_SPACE = 220;
/** M3 Expressive spatial spring, with a visible overshoot */ const SPRING = {
    type: "spring",
    stiffness: 360,
    damping: 26,
    mass: 1
};
const pct = (v)=>`${v * 100}%`;
/** offset along one axis, as a percentage of the screen */ const off = (axis, v)=>axis === "x" ? {
        x: pct(v),
        y: 0
    } : {
        x: 0,
        y: pct(v)
    };
/** enter / leave poses for one screen change; the same spec drives forward and back */ function poses(c) {
    const zi = {
        zIndex: {
            duration: 0
        }
    };
    const s = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_SPEC"][c.t];
    if (s) {
        const tr = c.spring ? {
            ...SPRING,
            ...zi
        } : {
            duration: SLIDE_MS,
            ease: EASE,
            ...zi
        };
        return c.back ? {
            initial: {
                ...off(s.axis, s.exit),
                opacity: 0.6,
                scale: 1,
                zIndex: 1
            },
            animate: {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                zIndex: 1,
                transition: tr
            },
            exit: {
                ...off(s.axis, s.enter),
                opacity: 1,
                scale: 1,
                zIndex: 2,
                transition: tr
            }
        } : {
            initial: {
                ...off(s.axis, s.enter),
                opacity: 1,
                scale: 1,
                zIndex: 2
            },
            animate: {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                zIndex: 2,
                transition: tr
            },
            exit: {
                ...off(s.axis, s.exit),
                opacity: 0.6,
                scale: 1,
                zIndex: 1,
                transition: tr
            }
        };
    }
    if (c.t === "fade") {
        const tr = {
            duration: 0.3,
            ease: EASE,
            ...zi
        };
        return {
            initial: {
                x: 0,
                y: 0,
                opacity: 0,
                scale: 1,
                zIndex: 2
            },
            animate: {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                zIndex: 2,
                transition: tr
            },
            exit: {
                x: 0,
                y: 0,
                opacity: 0,
                scale: 1,
                zIndex: 1,
                transition: tr
            }
        };
    }
    if (c.t === "expand") {
        const tr = c.spring ? {
            ...SPRING,
            ...zi
        } : {
            duration: 0.36,
            ease: EASE,
            ...zi
        };
        return c.back ? {
            initial: {
                x: 0,
                y: 0,
                scale: 0.92,
                opacity: 0,
                zIndex: 1
            },
            animate: {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                zIndex: 1,
                transition: tr
            },
            exit: {
                x: 0,
                y: 0,
                scale: 1.06,
                opacity: 0,
                zIndex: 2,
                transition: tr
            }
        } : {
            initial: {
                x: 0,
                y: 0,
                scale: 0.92,
                opacity: 0,
                zIndex: 2
            },
            animate: {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                zIndex: 2,
                transition: tr
            },
            exit: {
                x: 0,
                y: 0,
                scale: 1.06,
                opacity: 0,
                zIndex: 1,
                transition: tr
            }
        };
    }
    const tr = {
        duration: 0,
        ...zi
    };
    return {
        initial: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            zIndex: 2
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            zIndex: 2,
            transition: tr
        },
        exit: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            zIndex: 1,
            transition: tr
        }
    };
}
const screenVariants = {
    initial: (c)=>poses(c).initial,
    animate: (c)=>poses(c).animate,
    exit: (c)=>poses(c).exit
};
/** kinds whose on/off state flips when tapped in the preview */ const TOGGLES = [
    "switch",
    "checkbox",
    "chip"
];
/** parts that change under a tap rather than going anywhere: a switch, a toggle button, and a
 *  FAB with a menu, which opens where it stands */ const flips = (it)=>TOGGLES.includes(it.kind) || !!it.toggle || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasMenu"])(it);
/** the look of a part after the visitor tapped it */ function flippedLook(it) {
    /* a FAB opens its menu in place: the entries rise out of the button */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["opensMenu"])(it)) return {
        ...it,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fabOpen"]]: true
    };
    if (TOGGLES.includes(it.kind)) return {
        ...it,
        checked: !it.checked
    };
    if (it.toggle) {
        return {
            ...it,
            label: it.toggle.label ?? it.label,
            icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleIcon"])(it),
            variant: it.toggle.variant ?? it.variant
        };
    }
    return it;
}
/** In the preview a press lights up what a finger is meant to press: the button family, and the
 *  controls whose whole purpose is being tapped -- a row in a list, a dropdown, a switch. An
 *  indicator, a slider, a picture is not something that is pressed, so it stays as it is drawn.
 *  A destination inside a bar has its own hit area, and lights up through that. */ const TAP_LIT = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RIPPLE_KINDS"],
    "listItem",
    "select",
    "checkbox",
    "radio",
    "switch"
];
/** about how long a browser's smooth scroll takes to come to rest */ const SMOOTH_SCROLL_MS = 420;
/** the same shapes, read off the same drawing: nothing to redraw */ function sameShapes(a, b) {
    if (a.length !== b.length) return false;
    return a.every((s, i)=>{
        const o = b[i];
        return s.key === o.key && s.style.left === o.style.left && s.style.top === o.style.top && s.style.width === o.style.width && s.style.height === o.style.height && s.style.borderRadius === o.style.borderRadius;
    });
}
/** A part in the preview: a ripple spreads out of the point touched while the pointer is on it,
 *  then it fires its action on release, like a real widget. */ function Tappable({ item, p, radii, widths, onTap, onSlot, onValue, onPick, menuOpen, onMenu, onRailToggle, railAnimating, panY }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const [pressed, setPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /* the touches still lighting the part up; each fades once the finger is off it */ const [ripples, setRipples] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const nextRipple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    /* each light goes out when its own pointer lifts, wherever that happens: on the part, off it,
   * or on a part that has gone; the listeners waiting for that are dropped with the part */ const lifts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>lifts.current.forEach((off)=>off()), []);
    const endRipple = (pointer)=>{
        lifts.current.get(pointer)?.();
        setRipples((rs)=>rs.some((r)=>r.pointer === pointer) ? rs.filter((r)=>r.pointer !== pointer) : rs);
    };
    const addRipple = (e, slot)=>{
        if (e.pointerType === "mouse" && e.button !== 0) return;
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const pointer = e.pointerId;
        setRipples((rs)=>[
                ...rs,
                {
                    id: ++nextRipple.current,
                    part: slot,
                    pointer,
                    x,
                    y,
                    d: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rippleSize"])(r, x, y)
                }
            ]);
        const lift = (ev)=>{
            if (ev.pointerId !== pointer) return;
            endRipple(pointer);
        };
        lifts.current.get(pointer)?.();
        const off = ()=>{
            lifts.current.delete(pointer);
            window.removeEventListener("pointerup", lift);
            window.removeEventListener("pointercancel", lift);
        };
        lifts.current.set(pointer, off);
        window.addEventListener("pointerup", lift);
        window.addEventListener("pointercancel", lift);
    };
    /** every light at once: a row that turned out to be a drag was never a tap */ const endRipples = ()=>{
        lifts.current.forEach((off)=>off());
        setRipples((rs)=>rs.length ? [] : rs);
    };
    const menu = !!menuOpen;
    /* a tab row with more tabs than fit scrolls: by wheel, touch, or dragging the row; a chosen tab is brought into view */ const scrollTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isScrollableTabs"])(item);
    const rowW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeOf"])(item, widths).w;
    /* a carousel whose cards run past its box is dragged sideways, the way M3's carousel is */ const scrollCards = item.kind === "carousel" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isScrollableCarousel"])(item, rowW);
    const scrollRow = scrollTabs || scrollCards;
    const [tabScroll, setTabScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tabScrollOffset"])(item, rowW));
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** the click that ends a drag of the row must not pick a tab */ const swallowClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const settled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const tabCount = item.tabs?.length ?? 0;
    const restOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tabScrollOffset"])(item, rowW);
    /* the row is brought to the chosen tab only when the choice or the row itself changes, not on every
     render of the screen, so a position the visitor scrolled to by hand stays */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = scrollRef.current;
        if (!scrollTabs || !el) return;
        el.scrollTo({
            left: restOffset,
            behavior: settled.current ? "smooth" : "auto"
        });
        settled.current = true;
    }, [
        scrollTabs,
        item.id,
        item.selected,
        tabCount,
        restOffset
    ]);
    /* A row of cards comes to rest with a whole card at its head: let go part-way, it travels the
   * rest of the way itself. The pull happens after the gesture, never during it, so what the
   * finger is doing is what the row is doing. */ const dragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const settling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const settleTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const settlingTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** the drag of the row in flight, so a part taken off the screen mid-drag lets go of the page */ const rowDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const settleRow = (el, from)=>{
        if (!scrollCards) return;
        const stops = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselStops"])(item, rowW);
        const nearest = (v)=>stops.reduce((a, b, i)=>Math.abs(b - v) < Math.abs(stops[a] - v) ? i : a, 0);
        let to = stops[nearest(el.scrollLeft)];
        /* A gesture that went a quarter of the way to the next card carries the row there, rather
     * than having to pass the half-way mark: a small deliberate push should move the row, not be
     * pushed back. What the hand did decides, so it reads the same in either direction. */ if (from !== undefined && Math.abs(el.scrollLeft - from) > 1) {
            const i = nearest(from);
            const dir = el.scrollLeft > from ? 1 : -1;
            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(i + dir, 0, stops.length - 1);
            const step = Math.abs(stops[next] - stops[i]);
            /* a long gesture lands where it took the row; a short one still gets it as far as the
       * next card, so a small deliberate push moves rather than being pushed back */ const least = step > 0 && Math.abs(el.scrollLeft - from) > step * 0.25 ? next : i;
            const here = nearest(el.scrollLeft);
            to = stops[dir > 0 ? Math.max(here, least) : Math.min(here, least)];
        }
        to = Math.min(to, el.scrollWidth - el.clientWidth);
        if (Math.abs(to - el.scrollLeft) < 1) return;
        settling.current = true;
        el.scrollTo({
            left: to,
            behavior: "smooth"
        });
        /* the browser's smooth scroll says nothing when it is done, so the row is taken to have
     * settled after about the time one takes; the wait is dropped with the part */ if (settlingTimer.current) clearTimeout(settlingTimer.current);
        settlingTimer.current = setTimeout(()=>settling.current = false, SMOOTH_SCROLL_MS);
    };
    /** the row has been let alone for a moment: it settles on the card nearest its head */ const restRow = (el)=>{
        if (!scrollCards || settling.current || dragging.current) return;
        if (settleTimer.current) clearTimeout(settleTimer.current);
        settleTimer.current = setTimeout(()=>settleRow(el), 140);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (settleTimer.current) clearTimeout(settleTimer.current);
            if (settlingTimer.current) clearTimeout(settlingTimer.current);
            rowDragEnd.current?.();
        }, []);
    /** a mouse or pen drags the row; touch pans it natively, so it is left to the browser */ const dragRow = (e)=>{
        swallowClick.current = false;
        if (e.pointerType === "touch" || e.button !== 0) return;
        dragging.current = true;
        const el = e.currentTarget;
        const x0 = e.clientX;
        const left0 = el.scrollLeft;
        let moved = false;
        /* while the row is being dragged nothing else may be: a pointer carried past the end of it
     * would otherwise start selecting the page, which reads as the cards being torn out */ const selectable = document.body.style.userSelect;
        document.body.style.userSelect = "none";
        const move = (ev)=>{
            const dx = ev.clientX - x0;
            if (Math.abs(dx) > 4) moved = true;
            if (moved) el.scrollLeft = left0 - dx;
        };
        const end = ()=>{
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", end);
            window.removeEventListener("pointercancel", end);
            rowDragEnd.current = null;
            dragging.current = false;
            document.body.style.userSelect = selectable;
            if (moved) window.getSelection()?.removeAllRanges();
            settleRow(el, left0);
            swallowClick.current = moved;
            /* a row the finger dragged was never a tap: the light it took goes out with the drag */ if (moved) endRipples();
        };
        rowDragEnd.current = end;
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", end);
        window.addEventListener("pointercancel", end);
    };
    const live = !!onTap || !!onPick || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TAPPABLE"].includes(item.kind) && item.kind !== "text";
    /* an open menu has no box of its own: a state layer over it would grey the whole corner of the
     screen the entries stand in, so the pills and the button are left to speak for themselves.
     The menu keeps that corner while it rolls back in, so the layer stays away until it is gone. */ const openMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuOpen"])(item);
    const [menuCorner, setMenuCorner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(openMenu);
    /* read by the effect without restarting it: only the menu opening or closing may do that */ const cornerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(openMenu);
    /* only a part with a menu on the way in or out has a close to wait for */ const shutMs = openMenu || menuCorner ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuShutMs"])(item) : 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (openMenu) {
            cornerRef.current = true;
            setMenuCorner(true);
            return;
        }
        if (!cornerRef.current) return;
        const id = setTimeout(()=>{
            cornerRef.current = false;
            setMenuCorner(false);
        }, shutMs);
        return ()=>clearTimeout(id);
    }, [
        openMenu,
        shutMs
    ]);
    /* the live reading leads the held one: the box widens to the menu on the very frame the tap
     lands, and a layer still cut to the old one would flash across the whole width of it */ const boxless = openMenu || menuCorner || item.kind === "fabMenu";
    /* a split button is two shapes with a gap between them: a layer over the whole of it would grey
     the gap, and the menu standing under it, so each half lights up inside its own shape instead */ const segmented = item.kind === "splitButton";
    /* the ripple takes the colour of whatever is written on the part: white over a filled button,
     the text's own colour over a pale one */ const rippleColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contentColor"])(item, p);
    const rippleNodes = (slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ripples"], {
            list: ripples.filter((r)=>r.part === slot),
            color: rippleColor
        }, void 0, false, {
            fileName: "[project]/components/Preview.tsx",
            lineNumber: 406,
            columnNumber: 48
        }, this);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* The shapes a part is drawn as, read off the drawing itself: a split button says where its two
     halves are, and they are given a hit area each. Offsets rather than client rects, so a screen
     drawn at a zoom still reports them in the part's own pixels. */ const [shapes, setShapes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const el = ref.current;
        const found = [];
        if (el && item.kind === "splitButton") {
            for (const seg of Array.from(el.querySelectorAll("[data-part-shape]"))){
                let x = 0;
                let y = 0;
                for(let node = seg; node && node !== el; node = node.offsetParent){
                    x += node.offsetLeft;
                    y += node.offsetTop;
                }
                const cs = getComputedStyle(seg);
                found.push({
                    key: seg.dataset.partShape,
                    style: {
                        left: x,
                        top: y,
                        width: seg.offsetWidth,
                        height: seg.offsetHeight,
                        borderRadius: `${cs.borderTopLeftRadius} ${cs.borderTopRightRadius} ${cs.borderBottomRightRadius} ${cs.borderBottomLeftRadius}`
                    }
                });
            }
        }
        setShapes((was)=>sameShapes(was, found) ? was : found);
    /* the shapes move only when what is drawn does: the part's own measures, or its menu */ }, [
        item.kind,
        item.variant,
        item.label,
        item.icon,
        item.size,
        item.size2,
        item.tabs?.length,
        openMenu
    ]);
    /* the open menu closes on a tap anywhere else or on Escape */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!menu || !onMenu) return;
        const away = (e)=>{
            if (!ref.current?.contains(e.target)) onMenu(false);
        };
        const key = (e)=>{
            if (e.key === "Escape") onMenu(false);
        };
        document.addEventListener("pointerdown", away, true);
        document.addEventListener("keydown", key, true);
        return ()=>{
            document.removeEventListener("pointerdown", away, true);
            document.removeEventListener("keydown", key, true);
        };
    }, [
        menu,
        onMenu
    ]);
    /* a wheel over a row that only runs sideways moves it sideways, whichever way it is turned,
   * and the page under it stays put whenever the row itself could move; the listener is the
   * element's own, so it may say so (React's wheel handler is passive). On a body that scrolls
   * the up-and-down turn is the body's, and only a sideways one is the row's. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = scrollRef.current;
        if (!el || !scrollRow) return;
        const onWheel = (e)=>{
            const sideways = Math.abs(e.deltaX) > Math.abs(e.deltaY);
            if (panY && !sideways) return;
            const d = sideways ? e.deltaX : e.deltaY;
            const canMove = d < 0 ? el.scrollLeft > 0 : el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
            if (canMove) e.preventDefault();
            el.scrollLeft += d;
        };
        el.addEventListener("wheel", onWheel, {
            passive: false
        });
        return ()=>el.removeEventListener("wheel", onWheel);
    }, [
        scrollRow,
        panY
    ]);
    const dragValue = (e)=>{
        const r = ref.current?.getBoundingClientRect();
        if (!r || !onValue) return;
        onValue(Math.round(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * 100));
    };
    /* a card is a place of its own to tap: the hit areas follow the very shapes the row is drawn
     with, so each one covers the card the finger is looking at however far it has been carried.
     They ride inside the scrolling layer, so their own scroll is added back. Worked out again
     only when the row moves, since it moves on every frame of a drag. */ const cardSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!onSlot || item.kind !== "carousel") return [];
        const out = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselShapes"])(item, rowW, tabScroll).forEach(({ x, w: cw }, i)=>{
            if (cw < 8) return;
            out.push({
                key: `tab:${i}`,
                style: {
                    left: tabScroll + x,
                    width: cw,
                    top: 0,
                    bottom: 0,
                    borderRadius: 16
                }
            });
        });
        return out;
    }, [
        onSlot,
        item,
        rowW,
        tabScroll
    ]);
    /** hit areas for the icons on a top app bar and the destinations on a navigation bar */ const slots = [];
    if (onSlot && item.kind === "topAppBar") {
        /* the icons sit below the status-bar inset only where the bar has one (see sizeOf) */ const inset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeOf"])(item, {}).h - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topBarHeightOf"])(item);
        if (item.icon) slots.push({
            key: "icon",
            style: {
                left: 4,
                top: inset + 8,
                width: 48,
                height: 48,
                borderRadius: 24
            }
        });
        if (item.icon2) slots.push({
            key: "icon2",
            style: {
                right: 4,
                top: inset + 8,
                width: 48,
                height: 48,
                borderRadius: 24
            }
        });
    }
    if (onSlot && item.kind === "searchBar") {
        /* the two icons at the ends of the bar, each under a round hit area the bar's height */ if (item.icon) slots.push({
            key: "icon",
            style: {
                left: 4,
                top: 4,
                width: 48,
                height: 48,
                borderRadius: 24
            }
        });
        if (item.icon2) slots.push({
            key: "icon2",
            style: {
                right: 4,
                top: 4,
                width: 48,
                height: 48,
                borderRadius: 24
            }
        });
    }
    if (onSlot && scrollTabs) {
        /* hit areas sit inside the scrolling layer, one per tab, so they move with the row */ const n = item.tabs?.length ?? 0;
        for(let i = 0; i < n; i++)slots.push({
            key: `tab:${i}`,
            style: {
                left: i * __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TAB_W"],
                width: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TAB_W"],
                top: 0,
                bottom: 0,
                borderRadius: 16
            }
        });
    } else if (onSlot && (item.kind === "bottomNav" || item.kind === "tabs")) {
        const n = item.tabs?.length ?? 0;
        for(let i = 0; i < n; i++)slots.push({
            key: `tab:${i}`,
            style: {
                left: `${i / n * 100}%`,
                width: `${100 / n}%`,
                top: 0,
                bottom: item.kind === "bottomNav" ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_BAR_H"] : 0,
                borderRadius: 16
            }
        });
    }
    if (onSlot && item.kind === "navRail") {
        const rail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["railMetrics"])(item);
        if (onRailToggle) slots.push({
            key: "railToggle",
            style: {
                left: rail.headerLeft,
                top: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RAIL_TOP"],
                width: 48,
                height: 48,
                borderRadius: 24
            }
        });
        const n = item.tabs?.length ?? 0;
        for(let i = 0; i < n; i++)slots.push({
            key: `tab:${i}`,
            style: {
                left: rail.inset,
                width: rail.width - 2 * rail.inset,
                top: rail.top + i * (rail.itemHeight + rail.gap),
                height: rail.itemHeight,
                borderRadius: item.railExpanded ? 28 : 16
            }
        });
    }
    if (onSlot && item.kind === "carousel") slots.push(...cardSlots);
    if (onSlot && item.kind === "toolbar") {
        const n = item.tabs?.length ?? 0;
        for(let i = 0; i < n; i++)slots.push({
            key: `tab:${i}`,
            style: {
                left: 8 + i * 52,
                width: 48,
                top: 8,
                height: 48,
                borderRadius: 24
            }
        });
    }
    if (onSlot && item.kind === "splitButton") {
        const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonHeightOf"])(item);
        const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuOpen"])(item);
        const rises = open && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuRises"])(item);
        /* each half is a target of its own, cut to the shape the part was drawn with, so the light of
       a press stays inside the half that was pressed however the button is sized */ for (const seg of shapes)slots.push(seg);
        if (open) {
            const first = (rises ? 0 : h + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_SHEET_GAP"]) + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_PAD"];
            (item.tabs ?? []).forEach((_, i)=>slots.push({
                    key: `tab:${i}`,
                    style: {
                        left: 0,
                        right: 0,
                        top: first + i * __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_ITEM_H"],
                        height: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_ITEM_H"]
                    }
                }));
        }
    }
    if (onSlot && item.kind === "fabMenu") {
        /* the pills hug their text on the right; the hit area covers the right part of the row */ const n = item.tabs?.length ?? 0;
        for(let i = 0; i < n; i++)slots.push({
            key: `tab:${i}`,
            style: {
                right: 0,
                width: "70%",
                top: i * 64,
                height: 56,
                borderRadius: 28
            }
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-rail-animate": railAnimating ? "item" : undefined,
        onPointerDown: (e)=>{
            if (onValue) {
                e.stopPropagation();
                e.currentTarget.setPointerCapture(e.pointerId);
                dragValue(e);
                setPressed(true);
                return;
            }
            if (live) {
                setPressed(true);
                if (!boxless && !segmented && TAP_LIT.includes(item.kind)) addRipple(e, null);
            }
        },
        onPointerMove: (e)=>{
            if (onValue && pressed) dragValue(e);
        },
        onPointerUp: (e)=>{
            setPressed(false);
            endRipple(e.pointerId);
        },
        onPointerCancel: (e)=>{
            setPressed(false);
            endRipple(e.pointerId);
        },
        onPointerLeave: (e)=>{
            if (!onValue) setPressed(false);
            endRipple(e.pointerId);
        },
        onClick: onPick ? ()=>onMenu?.(!menu) : onTap,
        style: {
            cursor: live || onValue ? "pointer" : "default",
            display: "flex",
            position: "relative",
            touchAction: scrollRow ? panY ? "pan-x pan-y" : "pan-x" : panY ? "pan-y" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["M3Node"], {
                item: item,
                palette: p,
                widths: widths,
                radii: radii,
                interactive: false,
                pressed: pressed && !onValue && !boxless,
                tabScroll: scrollRow ? tabScroll : undefined
            }, void 0, false, {
                fileName: "[project]/components/Preview.tsx",
                lineNumber: 584,
                columnNumber: 7
            }, this),
            live && !boxless && !segmented && TAP_LIT.includes(item.kind) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    overflow: "hidden",
                    color: rippleColor,
                    borderTopLeftRadius: radii.tl,
                    borderTopRightRadius: radii.tr,
                    borderBottomLeftRadius: radii.bl,
                    borderBottomRightRadius: radii.br
                },
                children: rippleNodes(null)
            }, void 0, false, {
                fileName: "[project]/components/Preview.tsx",
                lineNumber: 586,
                columnNumber: 9
            }, this),
            (()=>{
                const slotNodes = slots.map((s)=>{
                    /* a place a tap is sent from is a button: reachable from the keyboard, named for a reader */ const tab = s.key.startsWith("tab:") ? Number(s.key.slice(4)) : -1;
                    const name = s.key === "railToggle" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(item.railExpanded ? "collapseNavigation" : "expandNavigation", lang) : tab >= 0 ? item.tabs?.[tab]?.label || `${tab + 1}` : s.key === "icon" ? item.icon ?? s.key : s.key === "icon2" ? item.icon2 ?? s.key : s.key;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: onRailToggle ? "m3-rail-hit" : undefined,
                        "data-rail-toggle": s.key === "railToggle" ? item.id : undefined,
                        "aria-label": name,
                        "aria-expanded": s.key === "railToggle" ? !!item.railExpanded : undefined,
                        "aria-current": onRailToggle && s.key === `tab:${item.selected ?? 0}` ? "page" : undefined,
                        onPointerDown: (e)=>{
                            e.stopPropagation();
                            /* a destination lights up under the finger; a picture on a carousel card does not */ if (item.kind !== "carousel") addRipple(e, s.key);
                        },
                        onPointerUp: (e)=>endRipple(e.pointerId),
                        onPointerCancel: (e)=>endRipple(e.pointerId),
                        onPointerLeave: (e)=>endRipple(e.pointerId),
                        onClick: (e)=>{
                            e.stopPropagation();
                            if (s.key === "railToggle") onRailToggle?.(e.detail !== 0);
                            else onSlot(s.key, e.detail !== 0);
                        },
                        style: {
                            position: "absolute",
                            border: "none",
                            padding: 0,
                            /* the ripple is the colour of whatever is written on the part, so it reads on any fill */ color: rippleColor,
                            cursor: "pointer",
                            background: "transparent",
                            overflow: "hidden",
                            font: "inherit",
                            ...s.style
                        },
                        children: rippleNodes(s.key)
                    }, s.key, false, {
                        fileName: "[project]/components/Preview.tsx",
                        lineNumber: 617,
                        columnNumber: 16
                    }, this);
                });
                if (!scrollRow) return slotNodes;
                const n = item.tabs?.length ?? 0;
                const runW = scrollCards ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselTrack"])(item, rowW) : n * __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TAB_W"];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollRef,
                    className: "m3-hidden-scrollbar",
                    onScroll: (e)=>{
                        setTabScroll(e.currentTarget.scrollLeft);
                        restRow(e.currentTarget);
                    },
                    onPointerDownCapture: dragRow,
                    /* a card is a picture, but it is not one to be dragged out of the row */ onDragStart: (e)=>e.preventDefault(),
                    onClickCapture: (e)=>{
                        if (swallowClick.current) {
                            e.stopPropagation();
                            e.preventDefault();
                        }
                        swallowClick.current = false;
                    },
                    style: {
                        position: "absolute",
                        inset: 0,
                        overflowX: "auto",
                        overflowY: "hidden",
                        touchAction: panY ? "pan-x pan-y" : "pan-x",
                        cursor: "grab",
                        userSelect: "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: runW,
                            height: "100%"
                        },
                        children: slotNodes
                    }, void 0, false, {
                        fileName: "[project]/components/Preview.tsx",
                        lineNumber: 685,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Preview.tsx",
                    lineNumber: 658,
                    columnNumber: 9
                }, this);
            })(),
            onPick && menu && /* the dropdown's menu, under the field: surfaceContainer, 48dp items, the chosen one tinted */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onPointerDown: (e)=>e.stopPropagation(),
                style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "100%",
                    marginTop: 4,
                    padding: "8px 0",
                    maxHeight: 48 * 6 + 16,
                    overflowY: "auto",
                    borderRadius: 4,
                    background: p.surfaceContainer,
                    color: p.onSurface,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.12)",
                    zIndex: 2
                },
                children: (item.tabs ?? []).map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onPick(i);
                            onMenu?.(false);
                        },
                        style: {
                            height: 48,
                            display: "flex",
                            alignItems: "center",
                            padding: "0 12px",
                            fontSize: 16,
                            cursor: "pointer",
                            background: item.selected === i ? `color-mix(in srgb, ${p.onSurface} 12%, transparent)` : "transparent",
                            ...ellipsisText
                        },
                        children: opt.label
                    }, i, false, {
                        fileName: "[project]/components/Preview.tsx",
                        lineNumber: 710,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Preview.tsx",
                lineNumber: 691,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Preview.tsx",
        lineNumber: 550,
        columnNumber: 5
    }, this);
}
const ellipsisText = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
};
function Screen({ active = true, frame, groups, widths, p, onAction, flipped, onFlip, values, onValue }) {
    /* the dropdown whose menu is open, if any; its group is lifted above the rest */ const [menuId, setMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [railStates, setRailStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [railMotion, setRailMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const isPresent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsPresent"])();
    const interactive = active && isPresent;
    const interactiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(interactive);
    interactiveRef.current = interactive;
    const screenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shownGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Object.entries(railStates).reduce((current, [id, railExpanded])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateRail"])(current, [
                frame
            ], widths, id, {
                railExpanded
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constrainModalRails"])(groups)), [
        groups,
        frame,
        widths,
        railStates
    ]);
    const modalIds = new Set(shownGroups.flatMap((g)=>{
        const rail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modalRailOf"])(g);
        return rail ? [
            rail.id
        ] : [];
    }));
    /* A screen longer than the device scrolls its body under what stays put. Which end a part
   * stays with is the same rule a change of length goes by (`pinOf`): one at the head keeps its
   * place on the glass, one at the foot keeps its distance from the foot, so a navigation bar at
   * the bottom of the long screen sits at the bottom of the glass, and one left between the two
   * is part of the body and scrolls with it. A rail running the length is shown a screenful tall. */ const viewH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).h;
    const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameLengthOf"])(frame);
    const scrolls = length > viewH;
    const pins = new Map();
    if (scrolls) {
        for (const g of shownGroups){
            const pin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tidy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pinOf"])(g, frame, widths);
            if (pin) pins.set(g.id, pin === "head" ? 0 : length - viewH);
        }
    }
    const lift = (g)=>pins.get(g.id) ?? 0;
    const hasModal = modalIds.size > 0;
    const modalActive = interactive && hasModal;
    const changeRail = (id, railExpanded, animate)=>{
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateRail"])(shownGroups, [
            frame
        ], widths, id, {
            railExpanded
        });
        setRailMotion({
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$railView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["railMotionTargets"])(shownGroups, next, widths, id),
            animate: animate && !reducedMotion
        });
        setRailStates((prev)=>({
                ...prev,
                [id]: railExpanded
            }));
    };
    const closeRails = (animate = false)=>{
        if (!hasModal) return;
        const next = [
            ...modalIds
        ].reduce((current, id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateRail"])(current, [
                frame
            ], widths, id, {
                railExpanded: false
            }), shownGroups);
        setRailMotion({
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$railView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["railMotionTargets"])(shownGroups, next, widths, [
                ...modalIds
            ][0]),
            animate: animate && !reducedMotion
        });
        setRailStates((prev)=>({
                ...prev,
                ...Object.fromEntries([
                    ...modalIds
                ].map((id)=>[
                        id,
                        false
                    ]))
            }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!railMotion) return;
        if (!railMotion.animate) {
            // Keep transition suppression through the immediate geometry paint only.
            // Removing it in the same render would restore M3Node's inline transition.
            let nextFrame = 0;
            const firstFrame = requestAnimationFrame(()=>{
                nextFrame = requestAnimationFrame(()=>setRailMotion(null));
            });
            return ()=>{
                cancelAnimationFrame(firstFrame);
                cancelAnimationFrame(nextFrame);
            };
        }
        const timer = window.setTimeout(()=>setRailMotion(null), 260);
        return ()=>window.clearTimeout(timer);
    }, [
        railMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setRailMotion(null);
    }, [
        groups,
        frame,
        widths
    ]);
    /* The editor behind the preview is inert while it is up, so focus has nowhere else to
   * go: a screen that becomes the one on show takes it when nothing inside the preview
   * holds it, and a modal screen giving way to a plain one leaves the keyboard on the new
   * screen rather than on the body. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!interactive) return;
        const focused = document.activeElement;
        if (!focused || focused === document.body || focused.closest("[inert]")) screenRef.current?.focus();
    }, [
        interactive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!modalActive) return;
        const previous = document.activeElement;
        screenRef.current?.querySelector(`[data-rail-modal] [data-rail-toggle]`)?.focus();
        return ()=>{
            // An exiting screen must not take focus back from its replacement. On unmount the
            // ref is already detached, so both branches stand down and the preview's own
            // restore to its opener is the one that runs.
            if (!interactiveRef.current) return;
            /* only a control of this screen is worth returning to: anything else is the page
       * behind the preview or a screen that has since left */ if (previous?.isConnected && screenRef.current?.contains(previous) && !previous.closest("[inert]")) previous.focus();
            else screenRef.current?.focus();
        };
    }, [
        modalActive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        /* focus outside this screen, or inside it but off the modal, both belong on the toggle */ if (modalActive && (!screenRef.current?.contains(document.activeElement) || !document.activeElement?.closest("[data-rail-modal]"))) {
            screenRef.current?.querySelector("[data-rail-modal] [data-rail-toggle]")?.focus();
        }
    }, [
        shownGroups,
        modalActive
    ]);
    /* Registered on every render, in the capture phase: the preview's own Escape and
   * Backspace handler listens in the bubble phase, so registration order never matters. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!modalActive) return;
        const onKey = (e)=>{
            /* the preview's own controls, such as an open screen menu, keep their keys */ if (!screenRef.current?.contains(document.activeElement)) return;
            if (e.key === "Tab") {
                e.stopImmediatePropagation();
                const buttons = Array.from(screenRef.current?.querySelectorAll("[data-rail-modal] button") ?? []);
                const index = buttons.indexOf(document.activeElement);
                if (index < 0 || !e.shiftKey && index === buttons.length - 1 || e.shiftKey && index === 0) {
                    e.preventDefault();
                    buttons[e.shiftKey ? buttons.length - 1 : 0]?.focus();
                }
                return;
            }
            if (e.key !== "Escape") return;
            e.preventDefault();
            e.stopImmediatePropagation();
            closeRails();
        };
        window.addEventListener("keydown", onKey, true);
        return ()=>window.removeEventListener("keydown", onKey, true);
    });
    /* the body scrolls in a layer of its own, the length of the screen; what stays put is laid
   * over it, in the order the screen draws them */ const inBody = (nodes)=>scrolls ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-scroll-body": true,
                    className: "m3-hidden-scrollbar",
                    style: {
                        position: "absolute",
                        inset: 0,
                        overflowX: "hidden",
                        overflowY: "auto",
                        overscrollBehavior: "contain",
                        touchAction: "pan-y"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            height: length
                        },
                        children: nodes.filter((_, i)=>!pins.has(shownGroups[i].id))
                    }, void 0, false, {
                        fileName: "[project]/components/Preview.tsx",
                        lineNumber: 890,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Preview.tsx",
                    lineNumber: 885,
                    columnNumber: 9
                }, this),
                nodes.filter((_, i)=>pins.has(shownGroups[i].id))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Preview.tsx",
            lineNumber: 884,
            columnNumber: 7
        }, this) : nodes;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: screenRef,
        inert: !interactive,
        "aria-hidden": !interactive || undefined,
        "data-rail-motion": railMotion?.animate ? "true" : undefined,
        role: modalActive ? "dialog" : "group",
        "aria-modal": modalActive ? true : undefined,
        "aria-label": modalActive ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("railState", lang) : frame.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("screen", lang),
        tabIndex: -1,
        /* the scrim and the pointer guard follow the rail itself, so a peek shows the modal
       * state as authored; the root's inert keeps a non-interactive screen from acting on it */ onPointerDown: (e)=>{
            if (hasModal) e.stopPropagation();
        },
        style: {
            position: "absolute",
            inset: 0,
            background: p[frame.bg ?? "surface"],
            overflow: "hidden",
            outline: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: hasModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                    "data-rail-scrim": true,
                    "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("collapseNavigation", lang),
                    tabIndex: -1,
                    onClick: (e)=>closeRails(e.detail !== 0),
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: reducedMotion ? 0 : 0.18
                    },
                    style: {
                        position: "absolute",
                        inset: 0,
                        border: 0,
                        padding: 0,
                        background: "rgba(0,0,0,0.32)",
                        zIndex: 3
                    }
                }, "rail-scrim", false, {
                    fileName: "[project]/components/Preview.tsx",
                    lineNumber: 914,
                    columnNumber: 22
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Preview.tsx",
                lineNumber: 913,
                columnNumber: 7
            }, this),
            inBody(shownGroups.map((g)=>{
                /* a FAB opens its menu out of itself: the run hangs from the button's own bottom right,
         * so the entries rise above it and the button stays where the author put it */ const fabCorner = g.items.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasMenu"])(g.items[0]) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeOf"])({
                    ...g.items[0],
                    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fabOpen"]]: undefined
                }, widths) : null;
                /* a split button whose menu rises hangs from its own bottom edge, so the button itself
           stays where the author put it and the sheet grows into the room above */ const rising = g.items.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitOpens"])(g.items[0]) && flipped.has(g.items[0].id) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitMenuRisesAt"])(g.items[0], g.y, frame);
                const riseH = rising ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeOf"])({
                    ...g.items[0],
                    [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fabOpen"]]: undefined
                }, widths).h : 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m3-preview-group",
                    "data-preview-group": g.id,
                    "data-rail-animate": railMotion?.groups.has(g.id) ? "group" : undefined,
                    "data-rail-modal": g.items.some((it)=>modalIds.has(it.id)) ? "true" : undefined,
                    inert: hasModal && !g.items.some((it)=>modalIds.has(it.id)),
                    style: g.free ? {
                        position: "absolute",
                        left: g.x - frame.x,
                        top: g.y - frame.y - lift(g),
                        zIndex: g.items.some((it)=>modalIds.has(it.id)) ? 4 : g.items.some((it)=>it.id === menuId) ? 2 : undefined
                    } : {
                        position: "absolute",
                        left: g.x - frame.x + (fabCorner?.w ?? 0),
                        top: g.y - frame.y - lift(g) + (fabCorner?.h ?? riseH),
                        translate: fabCorner ? "-100% -100%" : rising ? "0 -100%" : undefined,
                        zIndex: g.items.some((it)=>modalIds.has(it.id)) ? 4 : fabCorner ? 3 : g.items.some((it)=>it.id === menuId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitOpens"])(it) && flipped.has(it.id)) ? 2 : undefined,
                        display: "flex",
                        flexDirection: g.axis === "x" ? "row" : "column",
                        alignItems: g.axis === "x" ? "center" : "stretch",
                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAP"]
                    },
                    children: ((corners)=>g.items.map((it, i)=>{
                            const conn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectSpecOf"])(it);
                            const n = g.free ? 1 : g.items.length;
                            const radii = g.free ? corners?.get(it.id) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseRadii"])(it) : conn && n > 1 ? g.axis === "x" ? {
                                tl: i === 0 ? conn.outer : conn.inner,
                                bl: i === 0 ? conn.outer : conn.inner,
                                tr: i === n - 1 ? conn.outer : conn.inner,
                                br: i === n - 1 ? conn.outer : conn.inner
                            } : {
                                tl: i === 0 ? conn.outer : conn.inner,
                                tr: i === 0 ? conn.outer : conn.inner,
                                bl: i === n - 1 ? conn.outer : conn.inner,
                                br: i === n - 1 ? conn.outer : conn.inner
                            } : conn ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniformRadii"])(conn.outer) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseRadii"])(it);
                            const act = it.action;
                            let shown = flipped.has(it.id) ? flippedLook(it) : it;
                            /* the menu drops below the button, or rises above it where the screen runs out */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitOpens"])(shown) && flipped.has(it.id)) shown = {
                                ...shown,
                                [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuUp"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitMenuRisesAt"])(it, g.y, frame)
                            };
                            if (it.kind === "navRail" && pins.has(g.id) && (shown.size2 ?? 0) > viewH) shown = {
                                ...shown,
                                size2: viewH
                            };
                            if (it.kind === "slider" && values[it.id] !== undefined) shown = {
                                ...shown,
                                value: values[it.id]
                            };
                            if (it.kind === "select" && values[it.id] !== undefined) shown = {
                                ...shown,
                                selected: values[it.id]
                            };
                            const navKind = it.kind === "bottomNav" || it.kind === "navRail" || it.kind === "tabs";
                            /* bars with the same destinations are one bar to the visitor: the choice follows them across screens */ const navKey = navKind ? `nav:${it.kind}:${(it.tabs ?? []).map((t)=>t.label).join("|")}` : "";
                            if (navKind && values[navKey] !== undefined && values[navKey] >= 0) shown = {
                                ...shown,
                                selected: values[navKey]
                            };
                            else if (navKind && it.selected === undefined && values[`${navKey}:opened:${frame.id}`] !== undefined) shown = {
                                ...shown,
                                selected: values[`${navKey}:opened:${frame.id}`]
                            };
                            const tap = act || flips(it) ? ()=>{
                                if (flips(it)) onFlip(it.id);
                                if (act) onAction(act);
                            } : undefined;
                            const slotActions = it.actions;
                            const node = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tappable, {
                                item: shown,
                                p: p,
                                radii: radii,
                                widths: widths,
                                railAnimating: railMotion?.items.has(it.id),
                                onTap: tap,
                                onSlot: slotActions || navKind || it.kind === "splitButton" ? (slot, animate)=>{
                                    /* the half with the words does what the button itself does, and a menu
                           standing open gives way to it */ if (it.kind === "splitButton" && slot === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MAIN_SLOT"]) {
                                        if (flipped.has(it.id)) onFlip(it.id);
                                        tap?.();
                                        return;
                                    }
                                    /* the arrow opens the menu where it stands, and an entry shuts it again */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitOpens"])(it) && slot === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"]) {
                                        onFlip(it.id);
                                        return;
                                    }
                                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitOpens"])(it) && flipped.has(it.id) && slot.startsWith("tab:")) onFlip(it.id);
                                    /* a tapped destination lights up where it opens nothing; where it opens a
                           screen, that screen's bar shows the destination its author chose, or the
                           tapped one when the author chose none */ const a = slotActions?.[slot];
                                    if (navKind && slot.startsWith("tab:")) {
                                        onValue(navKey, a ? -1 : Number(slot.slice(4)));
                                        if (a) onValue(`${navKey}:opened:${a.to}`, Number(slot.slice(4)));
                                    }
                                    if (modalIds.has(it.id)) closeRails(animate);
                                    if (a) onAction(a);
                                } : undefined,
                                onValue: it.kind === "slider" ? (v)=>onValue(it.id, v) : undefined,
                                onPick: it.kind === "select" ? (i)=>onValue(it.id, i) : undefined,
                                menuOpen: menuId === it.id,
                                onMenu: it.kind === "select" ? (open)=>setMenuId(open ? it.id : null) : undefined,
                                onRailToggle: it.kind === "navRail" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWideRail"])(it) ? (animate)=>changeRail(it.id, !it.railExpanded, animate) : undefined,
                                panY: scrolls && !pins.has(g.id)
                            }, it.id, false, {
                                fileName: "[project]/components/Preview.tsx",
                                lineNumber: 1001,
                                columnNumber: 15
                            }, this);
                            if (!g.free) return node;
                            const o = g.pos?.[it.id] ?? {
                                x: 0,
                                y: 0
                            };
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    left: o.x,
                                    top: o.y
                                },
                                children: node
                            }, it.id, false, {
                                fileName: "[project]/components/Preview.tsx",
                                lineNumber: 1049,
                                columnNumber: 15
                            }, this);
                        }))(g.free ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freeRadii"])(g, widths) : null)
                }, g.id, false, {
                    fileName: "[project]/components/Preview.tsx",
                    lineNumber: 934,
                    columnNumber: 9
                }, this);
            }))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Preview.tsx",
        lineNumber: 899,
        columnNumber: 5
    }, this);
}
function Preview({ doc, widths, palette: p, startId, onClose }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const frames = doc.frames;
    const [stack, setStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>[
            {
                id: startId ?? frames[0]?.id ?? "",
                t: "none"
            }
        ]);
    const [anim, setAnim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        t: "none",
        back: false
    });
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeTheme"])(doc.theme);
    const spring = theme.motion === "expressive";
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [flipped, setFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set());
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [peek, setPeek] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const stackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(stack);
    stackRef.current = stack;
    const peekRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(peek);
    peekRef.current = peek;
    const swiped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const flip = (id)=>setFlipped((s)=>{
            const n = new Set(s);
            if (n.has(id)) n.delete(id);
            else n.add(id);
            return n;
        });
    const top = stack[stack.length - 1];
    const current = frames.find((f)=>f.id === top?.id) ?? frames[0];
    const peekFrame = peek ? frames.find((f)=>f.id === peek.frameId) : undefined;
    const { w: frameW, h: frameH } = current ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameSizeOf"])(current) : {
        w: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_W"],
        h: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_H"]
    };
    const phone = current ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPhoneFrame"])(current) : true;
    /* every screen sits in the same bezel; only the corners tell a phone from a window */ const radius = current ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameRadius"])(current) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_R"];
    const outerW = frameW + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"] * 2;
    const outerH = frameH + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"] * 2;
    const targetFrame = peekFrame ?? current;
    const { w: targetFrameW, h: targetFrameH } = targetFrame ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameSizeOf"])(targetFrame) : {
        w: frameW,
        h: frameH
    };
    const targetRadius = targetFrame ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameRadius"])(targetFrame) : radius;
    const targetOuterW = targetFrameW + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"] * 2;
    const targetOuterH = targetFrameH + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"] * 2;
    /* The shell is the size of the screen on show. When the screen changes it eases to
   * the new size in step with the slide; a tracked swipe steers it toward the target
   * with the finger, so a phone and a desktop screen hand over without a snap. */ const prog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const shellW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(outerW);
    const shellH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(outerH);
    const screenRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(radius);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const opts = {
            duration: SLIDE_MS,
            ease: EASE
        };
        const runs = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(shellW, outerW, opts),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(shellH, outerH, opts),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(screenRadius, radius, opts)
        ];
        return ()=>runs.forEach((r)=>r.stop());
    }, [
        outerW,
        outerH,
        radius,
        shellW,
        shellH,
        screenRadius
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>prog.on("change", (v)=>{
            if (!peekRef.current) return;
            shellW.set(outerW + (targetOuterW - outerW) * v);
            shellH.set(outerH + (targetOuterH - outerH) * v);
            screenRadius.set(radius + (targetRadius - radius) * v);
        }), [
        prog,
        outerW,
        outerH,
        radius,
        targetOuterW,
        targetOuterH,
        targetRadius,
        shellW,
        shellH,
        screenRadius
    ]);
    const screenW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(shellW, (v)=>v - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"] * 2);
    const screenH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(shellH, (v)=>v - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"] * 2);
    const shellRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(screenRadius, (v)=>v + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"]);
    /* the stage is sized for the largest screen in the document, so the scale never
   * changes while a swipe crosses sizes or a screen is opened from the picker */ const maxOuterW = Math.max(outerW, ...frames.map((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameSizeOf"])(f).w + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"] * 2));
    const maxOuterH = Math.max(outerH, ...frames.map((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameSizeOf"])(f).h + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"] * 2));
    const shellLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(shellW, (v)=>(maxOuterW - v) * scale / 2);
    const shellTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(shellH, (v)=>(maxOuterH - v) * scale / 2);
    /* on a wide window the controls stand in a column at the right edge, clear of the phone;
   * on a phone they stay along the bottom, where the frame fills the width anyway */ const [wide, setWide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fit = ()=>{
            const isWide = window.innerWidth >= 720;
            setWide(isWide);
            setScale(Math.min(1.4, (window.innerHeight - 32) / maxOuterH, (window.innerWidth - (isWide ? WIDE_CONTROL_SPACE + 16 : 16)) / maxOuterW));
        };
        fit();
        window.addEventListener("resize", fit);
        return ()=>window.removeEventListener("resize", fit);
    }, [
        maxOuterH,
        maxOuterW
    ]);
    /* a slide between a phone and a desktop screen would drag one shape through the
   * other; screens of different sizes cross-fade while the shell changes size */ const sameSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((fromId, toId)=>{
        const a = frames.find((f)=>f.id === fromId);
        const b = frames.find((f)=>f.id === toId);
        if (!a || !b) return true;
        const sa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameSizeOf"])(a);
        const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameSizeOf"])(b);
        return sa.w === sb.w && sa.h === sb.h;
    }, [
        frames
    ]);
    const back = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const s = stackRef.current;
        if (s.length < 2 || peekRef.current) return;
        const from = s[s.length - 1];
        const to = s[s.length - 2];
        setAnim({
            t: sameSize(from.id, to.id) ? from.t : "fade",
            back: true,
            spring
        });
        setStack(s.slice(0, -1));
    }, [
        spring,
        sameSize
    ]);
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((a)=>{
        if (swiped.current) return;
        if (a.to === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BACK_TARGET"]) {
            back();
            return;
        }
        /* a link leaves the sketch: the page opens in a tab of its own, and the preview stays put */ if (a.to === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MENU_TARGET"]) return;
        if (a.to === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LINK_TARGET"]) {
            const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linkUrlOf"])(a);
            if (href) window.open(href, "_blank", "noopener,noreferrer");
            return;
        }
        if (!frames.some((f)=>f.id === a.to)) return;
        const s = stackRef.current;
        const t = sameSize(s[s.length - 1].id, a.to) ? a.transition : "fade";
        setAnim({
            t,
            back: false,
            spring
        });
        setStack((cur)=>[
                ...cur,
                {
                    id: a.to,
                    t
                }
            ]);
    }, [
        frames,
        back,
        spring,
        sameSize
    ]);
    const [picker, setPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (e)=>{
            if (e.key === "Escape") {
                /* an open menu is the thing Escape dismisses */ if (picker) setPicker(false);
                else onClose();
            }
            if (e.key === "Backspace" || e.key === "ArrowLeft") back();
        };
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, [
        back,
        onClose,
        picker
    ]);
    /* The control that opened the preview gets the keyboard back when it closes, whichever
   * screens were shown in between; a screen's own restore only covers its modal rail. Read
   * during the first render, before a screen's effect moves focus onto its rail. */ const [opener] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>typeof document === "undefined" ? null : document.activeElement);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (opener?.isConnected && !opener.closest("[inert]")) opener.focus();
        }, [
        opener
    ]);
    const groupsFor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupsInFrame"])(doc.groups, f, frames, widths), [
        doc.groups,
        frames,
        widths
    ]);
    const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>current ? groupsFor(current) : [], [
        current,
        groupsFor
    ]);
    const peekGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>peekFrame ? groupsFor(peekFrame) : [], [
        peekFrame,
        groupsFor
    ]);
    /* ---- finger-tracked swipes: only the swipes the author set on the frame ---- */ const axisMV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0); // 0 = x, 1 = y
    const enterMV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const exitMV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const curX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])([
        prog,
        axisMV,
        exitMV
    ], ([p, a, ex])=>a === 0 ? pct(ex * p) : "0%");
    const curY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])([
        prog,
        axisMV,
        exitMV
    ], ([p, a, ex])=>a === 1 ? pct(ex * p) : "0%");
    const curOp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(prog, (p)=>1 - 0.4 * p);
    const peekX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])([
        prog,
        axisMV,
        enterMV
    ], ([p, a, en])=>a === 0 ? pct(en * (1 - p)) : "0%");
    const peekY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])([
        prog,
        axisMV,
        enterMV
    ], ([p, a, en])=>a === 1 ? pct(en * (1 - p)) : "0%");
    const gesture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onScreenPointerDown = (e)=>{
        if (peekRef.current || e.button !== 0) return;
        gesture.current = {
            id: e.pointerId,
            x0: e.clientX,
            y0: e.clientY,
            phase: "idle",
            size: frameW,
            last: 0,
            lastT: e.timeStamp,
            vel: 0,
            body: e.pointerType !== "mouse" && !!e.target.closest("[data-scroll-body]")
        };
        swiped.current = false;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const move = (e)=>{
            const g = gesture.current;
            if (!g || g.id !== e.pointerId) return;
            const dx = (e.clientX - g.x0) / scale;
            const dy = (e.clientY - g.y0) / scale;
            if (g.phase === "none") return;
            if (g.phase === "idle") {
                if (Math.hypot(dx, dy) < 8) return;
                const dir = Math.abs(dx) > Math.abs(dy) ? dx > 0 ? "right" : "left" : dy > 0 ? "down" : "up";
                const s = stackRef.current;
                const cur = frames.find((f)=>f.id === s[s.length - 1]?.id);
                if (!cur) return;
                const to = cur.swipe?.[dir];
                const spec = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SWIPE_DIRS"].find((d)=>d.key === dir);
                /* only swipes the author set up move screens; nothing is inferred. A finger dragging up or
         * down a body that scrolls is scrolling it; a mouse scrolls with its wheel, so it still swipes */ let pk = null;
                const scrolling = g.body && (dir === "up" || dir === "down");
                if (to && !scrolling && frames.some((f)=>f.id === to)) pk = {
                    frameId: to,
                    t: spec.transition
                };
                if (!pk) {
                    g.phase = "none";
                    return;
                }
                const sl = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDE_SPEC"][pk.t];
                g.phase = "drag";
                g.dir = dir;
                const { w, h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameSizeOf"])(cur);
                g.size = sl.axis === "x" ? w : h;
                swiped.current = true;
                axisMV.set(sl.axis === "x" ? 0 : 1);
                enterMV.set(sl.enter);
                exitMV.set(sl.exit);
                prog.set(0);
                peekRef.current = pk;
                setPeek(pk);
            }
            const along = g.dir === "left" ? -dx : g.dir === "right" ? dx : g.dir === "up" ? -dy : dy;
            const pr = Math.max(0, Math.min(1, along / g.size));
            const dt = Math.max(1, e.timeStamp - g.lastT);
            g.vel = (pr - g.last) / dt;
            g.last = pr;
            g.lastT = e.timeStamp;
            prog.set(pr);
        };
        const up = (e)=>{
            const g = gesture.current;
            if (!g || g.id !== e.pointerId) return;
            gesture.current = null;
            if (g.phase !== "drag") return;
            const pk = peekRef.current;
            if (!pk) return;
            const commit = prog.get() > 0.25 || g.vel > 0.0012;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(prog, commit ? 1 : 0, {
                duration: 0.26,
                ease: EASE
            }).then(()=>{
                if (commit) {
                    setAnim({
                        t: "none",
                        back: false,
                        spring
                    });
                    setStack((s)=>[
                            ...s,
                            {
                                id: pk.frameId,
                                t: pk.t
                            }
                        ]);
                }
                peekRef.current = null;
                setPeek(null);
                enterMV.set(0);
                exitMV.set(0);
                prog.set(0);
                window.setTimeout(()=>{
                    swiped.current = false;
                }, 50);
            });
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
        window.addEventListener("pointercancel", up);
        return ()=>{
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
            window.removeEventListener("pointercancel", up);
        };
    }, [
        frames,
        scale,
        prog,
        axisMV,
        enterMV,
        exitMV
    ]);
    const pickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pickerButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* A menu hands focus back to its button when it closes; a chosen screen is then one Tab
   * away. The chosen item is still in the tree here because the menu animates out. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const focused = document.activeElement;
        if (!picker && focused !== pickerButton.current && pickerRef.current?.contains(focused)) pickerButton.current?.focus();
    }, [
        picker
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!picker) return;
        const onDown = (e)=>{
            if (!pickerRef.current?.contains(e.target)) setPicker(false);
        };
        window.addEventListener("pointerdown", onDown);
        return ()=>window.removeEventListener("pointerdown", onDown);
    }, [
        picker
    ]);
    if (!current) {
        return null;
    }
    const screenProps = {
        widths,
        p,
        onAction: go,
        flipped,
        onFlip: flip,
        values,
        onValue: (id, v)=>setValues((m)=>({
                    ...m,
                    [id]: v
                }))
    };
    const barBtn = {
        height: 40,
        padding: "0 14px 0 10px",
        borderRadius: 20,
        border: "none",
        background: "transparent",
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        whiteSpace: "nowrap",
        /* the column has a fixed width, so labels are cut with an ellipsis instead of widening it */ width: wide ? "100%" : undefined,
        minWidth: 0
    };
    const label = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        minWidth: 0
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.22,
            ease: EASE
        },
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 500,
            background: p.surfaceContainer,
            display: "grid",
            placeItems: "center",
            boxSizing: "border-box",
            paddingRight: wide ? WIDE_CONTROL_SPACE : 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: maxOuterW * scale,
                    height: maxOuterH * scale,
                    position: "relative",
                    marginBottom: wide ? 0 : 56
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    onPointerDown: onScreenPointerDown,
                    style: {
                        position: "absolute",
                        left: shellLeft,
                        top: shellTop,
                        width: shellW,
                        height: shellH,
                        transform: `scale(${scale})`,
                        touchAction: "none",
                        transformOrigin: "0 0",
                        borderRadius: shellRadius,
                        background: p.inverseSurface,
                        boxShadow: "0 30px 80px rgba(0,0,0,0.22)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        onClickCapture: (e)=>{
                            if (swiped.current) {
                                e.stopPropagation();
                                e.preventDefault();
                            }
                        },
                        style: {
                            position: "absolute",
                            left: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"],
                            top: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEZEL"],
                            width: screenW,
                            height: screenH,
                            borderRadius: screenRadius,
                            overflow: "hidden",
                            background: p[current.bg ?? "surface"],
                            fontFamily: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontFamilyOf"])(theme.font, lang),
                            touchAction: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    zIndex: 1,
                                    x: curX,
                                    y: curY,
                                    opacity: curOp
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    initial: false,
                                    mode: "popLayout",
                                    custom: anim,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                        custom: anim,
                                        variants: screenVariants,
                                        initial: "initial",
                                        animate: "animate",
                                        exit: "exit",
                                        style: {
                                            position: "absolute",
                                            inset: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Screen, {
                                            frame: current,
                                            groups: groups,
                                            ...screenProps
                                        }, void 0, false, {
                                            fileName: "[project]/components/Preview.tsx",
                                            lineNumber: 1472,
                                            columnNumber: 19
                                        }, this)
                                    }, current.id, false, {
                                        fileName: "[project]/components/Preview.tsx",
                                        lineNumber: 1463,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Preview.tsx",
                                    lineNumber: 1462,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Preview.tsx",
                                lineNumber: 1452,
                                columnNumber: 13
                            }, this),
                            peek && peekFrame && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    zIndex: 2,
                                    x: peekX,
                                    y: peekY,
                                    pointerEvents: "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Screen, {
                                    ...screenProps,
                                    active: false,
                                    frame: peekFrame,
                                    groups: peekGroups
                                }, void 0, false, {
                                    fileName: "[project]/components/Preview.tsx",
                                    lineNumber: 1487,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Preview.tsx",
                                lineNumber: 1477,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Preview.tsx",
                        lineNumber: 1432,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Preview.tsx",
                    lineNumber: 1416,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Preview.tsx",
                lineNumber: 1408,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: wide ? {
                    position: "absolute",
                    right: 20,
                    bottom: 20,
                    display: "flex",
                    alignItems: "flex-end",
                    pointerEvents: "none"
                } : {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 14,
                    display: "flex",
                    justifyContent: "center",
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: wide ? "column" : "row",
                        alignItems: wide ? "stretch" : "center",
                        gap: 4,
                        padding: 6,
                        borderRadius: 28,
                        background: p.surface,
                        boxShadow: "0 4px 18px rgba(0,0,0,0.14)",
                        pointerEvents: "auto",
                        width: wide ? 172 : undefined,
                        maxWidth: "calc(100vw - 24px)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: back,
                            disabled: stack.length < 2,
                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("back", lang),
                            className: "m3-press",
                            style: {
                                ...barBtn,
                                color: stack.length < 2 ? p.outlineVariant : p.onSurfaceVariant,
                                cursor: stack.length < 2 ? "default" : "pointer"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "arrow_back",
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/Preview.tsx",
                                    lineNumber: 1527,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: label,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("back", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/Preview.tsx",
                                    lineNumber: 1528,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Preview.tsx",
                            lineNumber: 1516,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: pickerRef,
                            style: {
                                position: "relative",
                                minWidth: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: pickerButton,
                                    onClick: ()=>setPicker((v)=>!v),
                                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("screens", lang),
                                    "aria-expanded": picker,
                                    className: "m3-press",
                                    style: {
                                        ...barBtn,
                                        background: p.secondaryContainer,
                                        color: p.onSecondaryContainer,
                                        maxWidth: wide ? undefined : 200
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: phone ? "smartphone" : "desktop_windows",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/Preview.tsx",
                                            lineNumber: 1544,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                ...label,
                                                flex: wide ? 1 : undefined,
                                                textAlign: "left"
                                            },
                                            children: current.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("screen", lang)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Preview.tsx",
                                            lineNumber: 1545,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: wide ? picker ? "chevron_right" : "chevron_left" : picker ? "expand_more" : "expand_less",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/Preview.tsx",
                                            lineNumber: 1546,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Preview.tsx",
                                    lineNumber: 1531,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: picker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                        role: "menu",
                                        initial: wide ? {
                                            opacity: 0,
                                            x: 6,
                                            scale: 0.96
                                        } : {
                                            opacity: 0,
                                            y: 6,
                                            scale: 0.96
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: wide ? 0 : "-50%",
                                            y: 0,
                                            scale: 1
                                        },
                                        exit: wide ? {
                                            opacity: 0,
                                            x: 6,
                                            scale: 0.96
                                        } : {
                                            opacity: 0,
                                            y: 6,
                                            scale: 0.96
                                        },
                                        transition: {
                                            duration: 0.16,
                                            ease: EASE
                                        },
                                        style: {
                                            position: "absolute",
                                            ...wide ? {
                                                right: "calc(100% + 14px)",
                                                bottom: 0
                                            } : {
                                                bottom: 48,
                                                left: "50%"
                                            },
                                            minWidth: 160,
                                            maxHeight: "50vh",
                                            overflowY: "auto",
                                            padding: 6,
                                            borderRadius: 18,
                                            background: p.surfaceContainerLow,
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.04)",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 2,
                                            transformOrigin: wide ? "bottom right" : "bottom center"
                                        },
                                        children: frames.map((f)=>{
                                            const on = f.id === current.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                role: "menuitemradio",
                                                "aria-checked": on,
                                                onClick: ()=>{
                                                    setPicker(false);
                                                    if (on) return;
                                                    setAnim({
                                                        t: "fade",
                                                        back: false,
                                                        spring
                                                    });
                                                    setStack([
                                                        {
                                                            id: f.id,
                                                            t: "fade"
                                                        }
                                                    ]);
                                                },
                                                className: "m3-press",
                                                style: {
                                                    height: 40,
                                                    padding: "0 14px 0 10px",
                                                    borderRadius: 12,
                                                    border: "none",
                                                    background: on ? p.secondaryContainer : "transparent",
                                                    color: on ? p.onSecondaryContainer : p.onSurface,
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 10,
                                                    whiteSpace: "nowrap",
                                                    textAlign: "left"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: 18,
                                                            display: "inline-flex"
                                                        },
                                                        children: on ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "check",
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Preview.tsx",
                                                            lineNumber: 1604,
                                                            columnNumber: 33
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPhoneFrame"])(f) ? "smartphone" : "desktop_windows",
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Preview.tsx",
                                                            lineNumber: 1604,
                                                            columnNumber: 67
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Preview.tsx",
                                                        lineNumber: 1603,
                                                        columnNumber: 25
                                                    }, this),
                                                    f.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("screen", lang)
                                                ]
                                            }, f.id, true, {
                                                fileName: "[project]/components/Preview.tsx",
                                                lineNumber: 1575,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/Preview.tsx",
                                        lineNumber: 1550,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Preview.tsx",
                                    lineNumber: 1548,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Preview.tsx",
                            lineNumber: 1530,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("close", lang),
                            className: "m3-press",
                            style: {
                                ...barBtn,
                                color: p.onSurfaceVariant
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "close",
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/Preview.tsx",
                                    lineNumber: 1615,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: label,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("closeBtn", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/Preview.tsx",
                                    lineNumber: 1616,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Preview.tsx",
                            lineNumber: 1614,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Preview.tsx",
                    lineNumber: 1501,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Preview.tsx",
                lineNumber: 1494,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Preview.tsx",
        lineNumber: 1392,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_Preview_tsx_1pbkrj4._.js.map