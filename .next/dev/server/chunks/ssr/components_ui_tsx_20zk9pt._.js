module.exports = [
"[project]/components/ui.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonRun",
    ()=>ButtonRun,
    "ConfirmDialog",
    ()=>ConfirmDialog,
    "CornerIcon",
    ()=>CornerIcon,
    "Field",
    ()=>Field,
    "IconBtn",
    ()=>IconBtn,
    "ImageRow",
    ()=>ImageRow,
    "NamedSizes",
    ()=>NamedSizes,
    "PANEL_FADE_H",
    ()=>PANEL_FADE_H,
    "PanelShell",
    ()=>PanelShell,
    "RUN_CELL",
    ()=>RUN_CELL,
    "Section",
    ()=>Section,
    "Segmented",
    ()=>Segmented,
    "Select",
    ()=>Select,
    "SizePresets",
    ()=>SizePresets,
    "Slider",
    ()=>Slider,
    "TidyButton",
    ()=>TidyButton,
    "Tile",
    ()=>Tile,
    "Toggle",
    ()=>Toggle,
    "TokenChips",
    ()=>TokenChips,
    "UrlField",
    ()=>UrlField,
    "readImage",
    ()=>readImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/** the row of tabs and the clear gap under it, and the band a panel with no tabs fades its top with */ const PANEL_TABS_H = 48;
const PANEL_TABS_GAP = 16;
const PANEL_FADE_H = 28;
/** how the lock comes over the panel and goes away again: the blur first, then the switch and
 *  the line under it; on the way out the switch turns itself off before any of it fades */ const VEIL_IN = 0.22;
const BADGE_IN = 0.18;
const SWITCH_OFF = 0.26;
const LOCK_OUT_MS = Math.round((SWITCH_OFF + 0.2) * 1000) + 40;
/** a cover that has nothing to undo has only its own fade to wait for */ const AWAY_MS = 240;
function PanelShell({ p, locked, onUnlock, head, tabs, children }) {
    /* The cover leaves in one of two ways. Turned off at its own switch, it undoes itself in plain
     sight: the switch goes off first and the blur only then. Gone for any other reason -- the
     panel is showing another part now -- there is nothing to undo, so it simply fades, and the
     author is not told a lock came off when none did. */ const [drawn, setDrawn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!!locked);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(locked ? "on" : "away");
    const bySwitch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (locked) {
            bySwitch.current = false;
            setDrawn(true);
            setPhase("on");
            return;
        }
        if (!drawn || phase !== "on") return;
        const undone = bySwitch.current;
        bySwitch.current = false;
        setPhase(undone ? "off" : "away");
        const id = setTimeout(()=>setDrawn(false), undone ? LOCK_OUT_MS : AWAY_MS);
        return ()=>clearTimeout(id);
    }, [
        locked,
        drawn,
        phase
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "12px 12px 0",
                    flex: "0 0 auto"
                },
                children: head
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    flex: 1,
                    minHeight: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "no-scrollbar",
                        inert: locked || undefined,
                        /* under a row of tabs the content starts below them; with none, it starts under the fade's thick part */ style: {
                            padding: `${tabs ? PANEL_TABS_H + PANEL_TABS_GAP : PANEL_FADE_H / 2}px 12px 20px`,
                            overflowY: "auto",
                            height: "100%"
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            /* the panel's colour reaches exactly as far as the rule used to, and thins out
               across the two words on its way there */ height: tabs ? PANEL_TABS_H : PANEL_FADE_H,
                            /* the tabs ride above the lock's blur: they are what stays usable while it is on */ zIndex: tabs ? 4 : 2,
                            background: tabs ? `linear-gradient(to bottom, ${p.surface} 0%, ${p.surface} 24%, ${p.surface}00 100%)` : `linear-gradient(to bottom, ${p.surface}, ${p.surface}00)`,
                            pointerEvents: tabs ? undefined : "none"
                        },
                        children: tabs
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    drawn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LockedCover, {
                        p: p,
                        phase: phase,
                        onUnlock: onUnlock && (()=>{
                            bySwitch.current = true;
                            onUnlock();
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
/** what a locked part's panel is covered with: the blur, the lock on its switch, and a line saying
 *  what the switch is for */ function LockedCover({ p, phase, onUnlock }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const on = phase === "on";
    /* on its way out with the lock still on: the switch keeps its place and only the cover fades */ const away = phase === "away";
    const out = (d)=>reducedMotion ? {
            duration: 0
        } : {
            duration: d,
            ease: [
                0.2,
                0,
                0,
                1
            ],
            ...away ? {} : {
                delay: SWITCH_OFF
            }
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: on ? 1 : 0
        },
        transition: reducedMotion ? {
            duration: 0
        } : on ? {
            duration: VEIL_IN,
            ease: [
                0.2,
                0,
                0,
                1
            ]
        } : out(0.2),
        onPointerDown: (e)=>e.preventDefault(),
        style: {
            position: "absolute",
            inset: 0,
            zIndex: 3,
            display: "grid",
            placeItems: "center",
            padding: 24,
            pointerEvents: on ? undefined : "none",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            background: `color-mix(in srgb, ${p.surface} 55%, transparent)`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 6
            },
            animate: {
                opacity: on ? 1 : 0,
                y: on ? 0 : 6
            },
            transition: reducedMotion ? {
                duration: 0
            } : on ? {
                duration: 0.2,
                ease: [
                    0.2,
                    0,
                    0,
                    1
                ],
                delay: BADGE_IN
            } : out(0.18),
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LockSwitch, {
                    on: on || away,
                    p: p,
                    onOff: on ? onUnlock : undefined
                }, void 0, false, {
                    fileName: "[project]/components/ui.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 12,
                        lineHeight: 1.5,
                        color: p.onSurfaceVariant,
                        whiteSpace: "nowrap",
                        maxWidth: "100%"
                    },
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("lockedEdit", lang)
                }, void 0, false, {
                    fileName: "[project]/components/ui.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
/* the switch the lock sits on: on is locked, and the lock itself rides in the knob. It is turned
 * off by a tap or by dragging the knob back, the way a real one would be. */ const TRACK_W = 56;
const TRACK_H = 34;
const KNOB = 26;
const KNOB_INSET = 4;
const TRAVEL = TRACK_W - KNOB - KNOB_INSET * 2;
function LockSwitch({ on, p, onOff }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [drag, setDrag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const moved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const x = drag !== null ? drag : on ? TRAVEL : 0;
    const start = (e)=>{
        if (!onOff || !on) return;
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.setPointerCapture(e.pointerId);
        from.current = e.clientX;
        moved.current = 0;
        setDrag(TRAVEL);
    };
    const move = (e)=>{
        if (drag === null) return;
        const dx = e.clientX - from.current;
        moved.current = Math.max(moved.current, Math.abs(dx));
        setDrag((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(TRAVEL + dx, 0, TRAVEL));
    };
    const end = (e)=>{
        if (drag === null) return;
        if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
        /* a tap turns it off; so does a drag that has taken the knob most of the way back */ const off = moved.current < 4 || drag < TRAVEL / 2;
        setDrag(null);
        if (off) onOff?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        role: "switch",
        "aria-checked": on,
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(on ? "unlock" : "lock", lang),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(on ? "unlock" : "lock", lang),
        tabIndex: 0,
        onPointerDown: start,
        onPointerMove: move,
        onPointerUp: end,
        onPointerCancel: end,
        onKeyDown: (e)=>{
            if (e.key !== "Enter" && e.key !== " ") return;
            /* the key is the switch's own: the canvas shortcuts behind the panel do not hear it */ e.preventDefault();
            e.stopPropagation();
            if (on) onOff?.();
        },
        style: {
            position: "relative",
            width: TRACK_W,
            height: TRACK_H,
            borderRadius: TRACK_H / 2,
            boxSizing: "border-box",
            background: on ? p.primary : p.surfaceContainerHighest,
            border: on ? "2px solid transparent" : `2px solid ${p.outline}`,
            transition: "background 200ms, border-color 200ms",
            cursor: onOff ? "pointer" : "default",
            touchAction: "none",
            display: "block"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
            initial: {
                x: 0
            },
            animate: {
                x
            },
            transition: reducedMotion || drag !== null ? {
                duration: 0
            } : {
                type: "spring",
                stiffness: 480,
                damping: 36,
                mass: 0.6
            },
            style: {
                position: "absolute",
                left: KNOB_INSET - 2,
                top: KNOB_INSET - 2,
                width: KNOB,
                height: KNOB,
                borderRadius: KNOB / 2,
                display: "grid",
                placeItems: "center",
                background: on ? p.onPrimary : p.outline,
                color: on ? p.onPrimaryContainer : p.surfaceContainerHighest,
                transition: "background 200ms, color 200ms"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: on ? "lock" : "lock_open",
                size: 16
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 231,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
function IconBtn({ icon, on, onClick, title, size = 36, p, danger, disabled, fill, hasPopup, expanded }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-haspopup": hasPopup,
        "aria-expanded": expanded,
        onClick: onClick,
        title: title,
        "aria-label": title,
        disabled: disabled,
        className: "m3-press",
        style: {
            width: size,
            height: size,
            borderRadius: size / 2,
            border: "none",
            background: on ? danger ? p.errorContainer : p.secondaryContainer : "transparent",
            color: disabled ? p.outlineVariant : danger ? p.error : on ? p.onSecondaryContainer : p.onSurfaceVariant,
            cursor: disabled ? "default" : "pointer",
            display: "grid",
            placeItems: "center",
            flex: "0 0 auto"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
            name: icon,
            size: Math.round(size * 0.58),
            fill: fill ?? on
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 309,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
function Segmented({ options, value, onChange, p, height = 40, grow = true, tight = false, label }) {
    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const picked = Math.max(0, options.findIndex((o)=>o.key === value));
    const walk = (e, d)=>{
        e.preventDefault();
        const next = options[(picked + d + options.length) % options.length];
        onChange(next.key);
        group.current?.querySelector(`[data-key="${next.key}"]`)?.focus();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: group,
        role: "radiogroup",
        "aria-label": label,
        onKeyDown: (e)=>{
            if (e.key === "ArrowRight" || e.key === "ArrowDown") walk(e, 1);
            else if (e.key === "ArrowLeft" || e.key === "ArrowUp") walk(e, -1);
        },
        style: {
            display: "flex",
            gap: 3
        },
        children: options.map((o, i)=>{
            const on = o.key === value;
            const first = i === 0;
            const last = i === options.length - 1;
            const outer = height / 2;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "data-key": o.key,
                role: "radio",
                "aria-checked": on,
                tabIndex: i === picked ? 0 : -1,
                onClick: ()=>onChange(o.key),
                title: o.title ?? o.label,
                "aria-label": o.title ?? o.label,
                className: "m3-press",
                style: {
                    flex: o.grow ?? grow ? 1 : "0 0 auto",
                    minWidth: tight ? 0 : o.wide ? height * 1.4 : height,
                    height,
                    padding: o.label ? "0 14px" : 0,
                    border: "none",
                    cursor: "pointer",
                    borderTopLeftRadius: first ? outer : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"],
                    borderBottomLeftRadius: first ? outer : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"],
                    borderTopRightRadius: last ? outer : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"],
                    borderBottomRightRadius: last ? outer : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"],
                    background: on ? p.primary : p.surfaceContainerHigh,
                    color: on ? p.onPrimary : p.onSurfaceVariant,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: on ? 600 : 500,
                    transition: "background 120ms, color 120ms, border-radius 160ms",
                    position: "relative",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    ...o.style
                },
                children: [
                    o.node ?? (o.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                        name: o.icon,
                        size: Math.round(height * 0.5),
                        fill: on
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 416,
                        columnNumber: 35
                    }, this)),
                    o.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: o.label
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 417,
                        columnNumber: 25
                    }, this),
                    o.dot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        style: {
                            position: "absolute",
                            top: 5,
                            right: 7,
                            width: 6,
                            height: 6,
                            borderRadius: 3,
                            background: on ? p.onPrimary : p.primary
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 419,
                        columnNumber: 15
                    }, this)
                ]
            }, o.key, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 380,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 364,
        columnNumber: 5
    }, this);
}
function Select({ options, value, onChange, p, label }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const current = options.find((o)=>o.key === value) ?? options[0];
    /* the list closes back onto the button that opened it, so focus has somewhere to land */ const close = ()=>{
        setOpen(false);
        trigger.current?.focus();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        /* focus goes to the chosen entry, so the arrow keys start from where the list does */ list.current?.querySelector('[aria-selected="true"]')?.focus();
        const onDown = (e)=>{
            if (!box.current?.contains(e.target)) setOpen(false);
        };
        const onKey = (e)=>{
            if (e.key === "Escape") {
                e.stopPropagation();
                setOpen(false);
                trigger.current?.focus();
            }
        };
        window.addEventListener("pointerdown", onDown, true);
        window.addEventListener("keydown", onKey, true);
        return ()=>{
            window.removeEventListener("pointerdown", onDown, true);
            window.removeEventListener("keydown", onKey, true);
        };
    }, [
        open
    ]);
    /* the arrow keys walk the entries, Home and End jump to either end */ const onListKey = (e)=>{
        const items = Array.from(list.current?.querySelectorAll('[role="option"]') ?? []);
        if (!items.length) return;
        const at = items.indexOf(document.activeElement);
        let next = -1;
        if (e.key === "ArrowDown") next = (at + 1) % items.length;
        else if (e.key === "ArrowUp") next = (at - 1 + items.length) % items.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = items.length - 1;
        if (next < 0) return;
        e.preventDefault();
        items[next].focus();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: box,
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: trigger,
                onClick: ()=>setOpen((o)=>!o),
                onKeyDown: (e)=>{
                    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
                        e.preventDefault();
                        setOpen(true);
                    }
                },
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                "aria-label": label,
                className: "m3-press",
                style: {
                    width: "100%",
                    height: 48,
                    padding: "0 12px 0 14px",
                    borderRadius: open ? "12px 12px 4px 4px" : 12,
                    border: "none",
                    background: p.surfaceContainerHigh,
                    color: p.onSurface,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    textAlign: "left",
                    transition: "border-radius 120ms"
                },
                children: [
                    current?.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                        name: current.icon,
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 534,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        },
                        children: current?.label ?? ""
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                        name: open ? "expand_less" : "expand_more",
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: list,
                role: "listbox",
                "aria-label": label,
                onKeyDown: onListKey,
                className: "no-scrollbar",
                style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 52,
                    zIndex: 40,
                    maxHeight: 232,
                    overflowY: "auto",
                    overscrollBehavior: "contain",
                    padding: 4,
                    borderRadius: 12,
                    background: p.surfaceContainerHigh,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)"
                },
                children: options.map((o)=>{
                    const on = o.key === value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "option",
                        "aria-selected": on,
                        tabIndex: -1,
                        onClick: ()=>{
                            onChange(o.key);
                            close();
                        },
                        className: "m3-press",
                        style: {
                            width: "100%",
                            height: 44,
                            padding: "0 10px",
                            border: "none",
                            borderRadius: 8,
                            background: on ? p.secondaryContainer : "transparent",
                            color: on ? p.onSecondaryContainer : p.onSurface,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            fontSize: 14,
                            fontWeight: on ? 600 : 500,
                            textAlign: "left"
                        },
                        children: [
                            o.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: o.icon,
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 590,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                },
                                children: o.label
                            }, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 591,
                                columnNumber: 17
                            }, this),
                            on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check",
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 592,
                                columnNumber: 24
                            }, this)
                        ]
                    }, o.key, true, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 563,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 539,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 502,
        columnNumber: 5
    }, this);
}
/** how wide the band is that a field wears while a model writes into it */ const RING = 3;
/** the room a control standing inside a field takes */ const LEAD_W = 32;
function Field({ value, onChange, placeholder, p, icon, leading, multiline, rows = 3, grow, height = 44, action, maxHeight, aiBusy, invalid, describedBy }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const filled = value.length > 0;
    const areaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    /* the ring stays mounted through its own fade out, so the gradient leaves as quietly as it came */ const [ring, setRing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ringOn, setRingOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (aiBusy) {
            setRing(true);
            /* the second frame is the one that has the ring on screen at nothing: turning it up from
       * there is what the eye reads as a fade rather than a light being switched on */ let next = 0;
            const id = requestAnimationFrame(()=>{
                next = requestAnimationFrame(()=>setRingOn(true));
            });
            return ()=>{
                cancelAnimationFrame(id);
                cancelAnimationFrame(next);
            };
        }
        setRingOn(false);
        /* the ring is taken down once its fade has run; one that was never up simply stays down */ const id = setTimeout(()=>setRing(false), 320);
        return ()=>clearTimeout(id);
    }, [
        aiBusy
    ]);
    /* What the model wrote is already in the field, drawn exactly as the field will keep it.
   * Nothing is copied: the field is covered, grows to the height the text needs, and is then
   * uncovered word by word, so no letter ever moves. */ const [reveal, setReveal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /* the lines to uncover, measured off the field once the text is in it */ const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const wasAi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const easeHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const before = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (aiBusy) {
            wasAi.current = true;
            return;
        }
        /* the run is over: whatever text arrives with it is the model's, anything later is the author's */ const id = setTimeout(()=>wasAi.current = false, 400);
        return ()=>clearTimeout(id);
    }, [
        aiBusy
    ]);
    /* before the field is given its new height: the height is then eased into, not jumped to */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const was = before.current;
        before.current = value;
        if (!wasAi.current || value === was || !value) return;
        wasAi.current = false;
        if (!multiline) return;
        /* only a field that grows has a height to ease; a fixed one just uncovers its text */ easeHeight.current = !!grow;
        setReveal({
            phase: "grow",
            p: 0
        });
    }, [
        value,
        multiline,
        grow
    ]);
    const phase = reveal?.phase;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const el = areaRef.current;
        if (phase !== "wipe" || !el) return;
        const cs = getComputedStyle(el);
        const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.55;
        const top = parseFloat(cs.paddingTop);
        const left = parseFloat(cs.paddingLeft);
        const width = el.clientWidth - left - parseFloat(cs.paddingRight);
        const text = el.scrollHeight - top - parseFloat(cs.paddingBottom);
        setLines({
            n: Math.max(1, Math.round(text / lh)),
            top,
            left,
            width,
            height: lh
        });
    }, [
        phase,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!phase) return;
        if (reduced) {
            setReveal(null);
            return;
        }
        if (phase === "grow") {
            /* the box settles first; only then does the text come out from under the cover */ const id = setTimeout(()=>setReveal({
                    phase: "wipe",
                    p: 0
                }), __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SETTLE_MS"]);
            return ()=>clearTimeout(id);
        }
        const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(value.length * 10, 450, 900);
        const start = performance.now();
        let frame = requestAnimationFrame(function step() {
            const k = Math.min(1, (performance.now() - start) / span);
            setReveal((cur)=>cur?.phase === "wipe" ? {
                    phase: "wipe",
                    p: k
                } : cur);
            if (k < 1) frame = requestAnimationFrame(step);
            else setReveal(null);
        });
        return ()=>cancelAnimationFrame(frame);
    /* the sweep runs off its own clock: only a change of phase may start it over */ }, [
        phase,
        reduced,
        value.length
    ]);
    /* the cover: one soft band lying over the whole text, drawn off downwards. The band is deep
   * enough that the words fade up rather than being wiped away, the top ones a little ahead of
   * the ones below them. */ const cover = (()=>{
        if (!reveal) return null;
        const clear = "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))";
        if (reveal.phase === "grow" || !lines) return {
            WebkitMaskImage: clear,
            maskImage: clear
        };
        /* the soft edge is two thirds of the text's own height, so a short note fades in as one */ const soft = 0.66;
        const at = -soft + reveal.p * (1 + soft);
        const block = lines.n * lines.height;
        const image = `linear-gradient(to bottom, #000 ${(at * 100).toFixed(1)}%, rgba(0,0,0,0) ${((at + soft) * 100).toFixed(1)}%)`;
        const position = `${lines.left}px ${lines.top}px`;
        const size = `${lines.width}px ${block}px`;
        return {
            WebkitMaskImage: image,
            maskImage: image,
            WebkitMaskPosition: position,
            maskPosition: position,
            WebkitMaskSize: size,
            maskSize: size,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat"
        };
    })();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = areaRef.current;
        if (!el || !grow) return;
        /* the model's text arrives whole: the field takes its new height over the same time a part
     * on the canvas takes to settle, and reads its own height back without the easing in the way */ const ease = easeHeight.current && !reduced;
        easeHeight.current = false;
        const from = ease ? el.offsetHeight : 0;
        el.style.transition = "none";
        el.style.height = "auto";
        /* a growing field is never shorter than the lines it was asked for, so an empty one still
       offers the room its words will take */ const line = parseFloat(getComputedStyle(el).lineHeight) || 21;
        const least = Math.round(rows * line + 24);
        const full = Math.max(el.scrollHeight, least);
        const capped = maxHeight ? Math.min(full, maxHeight) : full;
        if (ease) {
            el.style.height = `${from}px`;
            void el.offsetHeight;
            el.style.transition = `height ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SETTLE_MS"]}ms cubic-bezier(0.2, 0, 0, 1)`;
        }
        el.style.height = `${capped}px`;
        el.style.overflowY = full > capped ? "auto" : "hidden";
        if (!ease) el.style.transition = "";
    }, [
        value,
        grow,
        maxHeight,
        rows,
        reduced
    ]);
    /* with a pinned run the text keeps the full width and passes under it; otherwise the clear
   * button takes a column of its own at the trailing edge */ const pinned = !!(multiline && action);
    const padRight = !pinned && filled ? 40 : 14;
    /* the words start after the mark, and after whatever stands beside it */ const padLeft = (icon ? 42 : 14) + (leading ? LEAD_W : 0);
    /* as tall as the fade, so the line being typed always sits clear of it */ const padBottom = pinned ? 40 : 12;
    /* one cell of the pinned run: a faint plate behind the button, rounded on the outer side only */ const run = (child, first, last)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                display: "inline-flex",
                overflow: "hidden",
                background: p.surfaceContainerHighest,
                borderTopLeftRadius: first ? 15 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"],
                borderBottomLeftRadius: first ? 15 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"],
                borderTopRightRadius: last ? 15 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"],
                borderBottomRightRadius: last ? 15 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"]
            },
            children: child
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 799,
            columnNumber: 5
        }, this);
    /* the one button that empties the field, wherever the field puts it */ const clearBtn = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onChange(""),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("clear", lang),
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("clear", lang),
        style: {
            width: 30,
            height: 30,
            borderRadius: 15,
            border: "none",
            background: "transparent",
            color: p.onSurfaceVariant,
            cursor: "pointer",
            display: "grid",
            placeItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
            name: "close",
            size: 16
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 831,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 815,
        columnNumber: 5
    }, this);
    const base = {
        /* a block: an inline field leaves a line box's descender under it, and a ring drawn around
     * that box would be thicker along the bottom than anywhere else */ display: "block",
        width: "100%",
        padding: multiline ? `12px ${padRight}px ${padBottom}px ${padLeft}px` : `0 ${padRight}px 0 ${padLeft}px`,
        borderRadius: multiline ? 18 : height / 2,
        border: "none",
        background: p.surfaceContainerHigh,
        color: p.onSurface,
        fontSize: 14,
        lineHeight: multiline ? 1.55 : undefined,
        outline: "none",
        boxSizing: "border-box",
        fontFamily: "inherit",
        resize: "none"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            width: "100%"
        },
        children: [
            ring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                style: {
                    position: "absolute",
                    inset: -RING,
                    borderRadius: (multiline ? 18 : height / 2) + RING,
                    backgroundImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["draftGradient"])(p),
                    backgroundSize: "300% 300%",
                    animation: "m3e-drift 3s ease-in-out infinite",
                    opacity: ringOn ? 1 : 0,
                    transition: "opacity 300ms ease",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 854,
                columnNumber: 9
            }, this),
            cover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: multiline ? 18 : height / 2,
                    background: p.surfaceContainerHigh,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 870,
                columnNumber: 9
            }, this),
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    left: 12,
                    top: multiline ? 12 : (height - 20) / 2,
                    color: p.onSurfaceVariant,
                    pointerEvents: "none",
                    lineHeight: 1,
                    /* the field itself is positioned, so the mark it carries sits above it */ zIndex: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                    name: icon,
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/ui.tsx",
                    lineNumber: 894,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 882,
                columnNumber: 9
            }, this),
            leading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    left: icon ? 36 : 6,
                    top: (height - LEAD_W) / 2,
                    width: LEAD_W,
                    height: LEAD_W,
                    display: "grid",
                    placeItems: "center",
                    zIndex: 1
                },
                children: leading
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 898,
                columnNumber: 9
            }, this),
            multiline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: areaRef,
                className: maxHeight ? "no-scrollbar" : undefined,
                value: value,
                rows: rows,
                onChange: (e)=>onChange(grow ? e.target.value.replace(/[\r\n]+/g, " ") : e.target.value),
                onKeyDown: grow ? (e)=>{
                    if (e.key === "Enter") e.preventDefault();
                } : undefined,
                placeholder: placeholder,
                "aria-invalid": invalid || undefined,
                "aria-describedby": describedBy,
                onFocus: ()=>{
                    setReveal(null);
                    setLines(null);
                },
                style: {
                    ...base,
                    ...grow ? {
                        overflow: "hidden"
                    } : null,
                    position: "relative",
                    /* the cover masks the whole field, so while it is on, the field's own colour is
             * painted by the plate behind it and the text is all that can be hidden */ ...cover ? {
                        background: "transparent",
                        caretColor: "transparent",
                        ...cover
                    } : null
                }
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 901,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                "aria-invalid": invalid || undefined,
                "aria-describedby": describedBy,
                style: {
                    ...base,
                    height,
                    position: "relative"
                }
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 925,
                columnNumber: 9
            }, this),
            pinned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        style: {
                            position: "absolute",
                            left: 2,
                            right: 2,
                            bottom: 2,
                            height: 40,
                            borderRadius: "0 0 16px 16px",
                            background: `linear-gradient(to top, ${p.surfaceContainerHigh}, transparent)`,
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 937,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            right: 6,
                            bottom: 6,
                            display: "flex",
                            gap: 2
                        },
                        children: [
                            filled && run(clearBtn, true, false),
                            run(action, !filled, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 950,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 935,
                columnNumber: 9
            }, this) : filled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    right: 6,
                    top: multiline ? 8 : (height - 30) / 2,
                    display: "inline-flex"
                },
                children: clearBtn
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 956,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 852,
        columnNumber: 5
    }, this);
}
function CornerIcon({ side, size = 20 }) {
    const PATHS = {
        top: "M4 17 V9 a5 5 0 0 1 5 -5 h6 a5 5 0 0 1 5 5 v8",
        bottom: "M4 3 v8 a5 5 0 0 0 5 5 h6 a5 5 0 0 0 5 -5 v-8",
        left: "M17 4 H9 a5 5 0 0 0 -5 5 v6 a5 5 0 0 0 5 5 h8",
        right: "M7 4 h8 a5 5 0 0 1 5 5 v6 a5 5 0 0 1 -5 5 h-8",
        tl: "M5 20 V11 a6 6 0 0 1 6 -6 H20",
        tr: "M4 5 H13 a6 6 0 0 1 6 6 V20",
        bl: "M5 4 V13 a6 6 0 0 0 6 6 H20",
        br: "M20 4 V13 a6 6 0 0 1 -6 6 H4"
    };
    const d = PATHS[side];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: d
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 980,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 979,
        columnNumber: 5
    }, this);
}
function Slider({ icon = "tune", iconNode, value, min, max, step, onChange, p, unit = "", title }) {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(String(value));
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!editing) setText(String(value));
    }, [
        value,
        editing
    ]);
    const commit = ()=>{
        const n = Math.round(Number(text));
        if (Number.isFinite(n) && text.trim() !== "") onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(n, min, max));
        setEditing(false);
        setText(String(value));
    };
    /* a value set from elsewhere — a preset, another control — travels to its new place over the
   * same time the part on the canvas takes to grow, so the knob and the part move together.
   * What the author does on the slider itself is followed exactly. */ const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    const shownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(value);
    const mine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    /* whether the knob is on its way: read at render, so it is state rather than a ref */ const [travelling, setTravelling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const travellingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const travel = (on)=>{
        travellingRef.current = on;
        setTravelling(on);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const from = shownRef.current;
        const land = ()=>{
            shownRef.current = value;
            setShown(value);
        };
        /* a value that keeps arriving is a part already on its way — a width that follows the text
     * inside it, say. Then the knob follows each value exactly instead of trailing its own easing. */ if (mine.current || reduced || travellingRef.current || from === value) {
            mine.current = false;
            travel(false);
            land();
            return;
        }
        travel(true);
        const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(from, value, {
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SETTLE_MS"] / 1000,
            ease: [
                0.2,
                0,
                0,
                1
            ],
            onUpdate: (v)=>{
                shownRef.current = v;
                setShown(v);
            },
            onComplete: ()=>{
                travel(false);
                land();
            }
        });
        return ()=>run.stop();
    }, [
        value,
        reduced
    ]);
    const emit = (v)=>{
        /* a value the part already has never comes back through the effect, so it is not waited for */ mine.current = v !== value;
        shownRef.current = v;
        setShown(v);
        onChange(v);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                title: title,
                style: {
                    color: p.onSurfaceVariant,
                    lineHeight: 1,
                    flex: "0 0 auto",
                    display: "inline-flex"
                },
                children: iconNode ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                    name: icon,
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/ui.tsx",
                    lineNumber: 1073,
                    columnNumber: 22
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1072,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                className: "m3-range",
                "aria-label": title,
                min: min,
                max: max,
                /* on its way the knob is free of the step, so it sweeps across instead of
           ticking from one stop to the next; the author's own drag keeps the step */ step: travelling ? "any" : step,
                value: shown,
                onChange: (e)=>emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(Math.round(Number(e.target.value) / step) * step, min, max)),
                style: {
                    "--track": p.secondaryContainer,
                    "--thumb": p.primary
                }
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1075,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "relative",
                    flex: "0 0 auto",
                    display: "inline-flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        inputMode: "numeric",
                        "aria-label": title,
                        min: min,
                        max: max,
                        value: editing ? text : String(value),
                        onFocus: (e)=>{
                            setEditing(true);
                            setText(String(value));
                            e.currentTarget.select();
                        },
                        onChange: (e)=>{
                            setText(e.target.value);
                            // apply as you type once the number is already in range, so the canvas follows
                            const n = Math.round(Number(e.target.value));
                            if (e.target.value.trim() !== "" && Number.isFinite(n) && n >= min && n <= max) emit(n);
                        },
                        onBlur: commit,
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") e.currentTarget.blur();
                            if (e.key === "Escape") {
                                setText(String(value));
                                e.currentTarget.blur();
                            }
                        },
                        className: "m3-number",
                        style: {
                            width: unit ? 56 : 52,
                            height: 30,
                            padding: unit ? "0 18px 0 6px" : "0 6px",
                            borderRadius: 8,
                            border: "none",
                            background: p.surfaceContainerHigh,
                            color: p.onSurface,
                            fontSize: 12,
                            fontWeight: 600,
                            textAlign: "right",
                            fontVariantNumeric: "tabular-nums",
                            fontFamily: "inherit",
                            outline: editing ? `2px solid ${p.primary}` : "none",
                            outlineOffset: -1,
                            boxSizing: "border-box"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1089,
                        columnNumber: 9
                    }, this),
                    unit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: "absolute",
                            right: 6,
                            fontSize: 11,
                            color: p.onSurfaceVariant,
                            pointerEvents: "none"
                        },
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1088,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1071,
        columnNumber: 5
    }, this);
}
const RUN_CELL = {
    minWidth: 0,
    padding: "0 4px",
    fontSize: 12,
    fontWeight: 600,
    textOverflow: "ellipsis"
};
function NamedSizes({ steps, value, onChange, p, label }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Segmented, {
        options: steps.map((s)=>({
                key: s.key,
                label: s.key.toUpperCase(),
                title: `${s.value}dp`,
                style: RUN_CELL
            })),
        value: steps.find((s)=>s.value === value)?.key ?? "",
        onChange: (k)=>onChange(steps.find((s)=>s.key === k).value),
        p: p,
        label: label ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("size", lang),
        tight: true
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1174,
        columnNumber: 5
    }, this);
}
function SizePresets({ values, value, min, max, onChange, p, labelOf }) {
    const shown = values.filter((v)=>v >= min && v <= max);
    if (shown.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            paddingLeft: 30
        },
        children: shown.map((v)=>{
            const on = v === value;
            const label = labelOf?.(v);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange(v),
                title: label,
                "aria-label": label ? `${label}: ${v}` : String(v),
                "aria-pressed": on,
                className: "m3-press",
                style: {
                    height: 28,
                    padding: "0 10px",
                    borderRadius: 14,
                    border: on ? "1px solid transparent" : `1px solid ${p.outlineVariant}`,
                    background: on ? p.secondaryContainer : "transparent",
                    color: on ? p.onSecondaryContainer : p.onSurfaceVariant,
                    fontSize: 12,
                    fontWeight: 600,
                    fontVariantNumeric: "tabular-nums",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4
                },
                children: v
            }, v, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1213,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1208,
        columnNumber: 5
    }, this);
}
/** the longest side a picked picture is kept at: enough for a sketch, small enough to save */ const MAX_IMAGE_PX = 1200;
function readImage(file) {
    return new Promise((resolve, reject)=>{
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = ()=>{
            const s = Math.min(1, MAX_IMAGE_PX / Math.max(img.width, img.height));
            const c = document.createElement("canvas");
            c.width = Math.max(1, Math.round(img.width * s));
            c.height = Math.max(1, Math.round(img.height * s));
            const ctx = c.getContext("2d");
            URL.revokeObjectURL(url);
            if (!ctx) {
                reject(new Error("canvas"));
                return;
            }
            ctx.drawImage(img, 0, 0, c.width, c.height);
            resolve(c.toDataURL("image/webp", 0.86));
        };
        img.onerror = ()=>{
            URL.revokeObjectURL(url);
            reject(new Error("image"));
        };
        img.src = url;
    });
}
function UrlField({ value, onChange, placeholder, p }) {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setText(value), [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            value: text,
            onChange: (v)=>{
                setText(v);
                const s = v.trim();
                /* an emptied box removes a URL; a picked file (which shows as an empty box) is left alone */ if (!s && value) onChange(undefined);
                else if (/^https?:\/\/\S+$/.test(s)) onChange(s);
            },
            placeholder: placeholder,
            p: p,
            icon: "link"
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 1280,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1279,
        columnNumber: 5
    }, this);
}
function ImageRow({ value, onChange, p }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* a file the browser could not read as a picture says so under the row, until the next pick */ const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 6
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 6,
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileRef,
                        type: "file",
                        accept: "image/*",
                        hidden: true,
                        onChange: async (e)=>{
                            const f = e.target.files?.[0];
                            e.target.value = "";
                            if (!f) return;
                            try {
                                onChange(await readImage(f));
                                setFailed(false);
                            } catch  {
                                setFailed(true);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1308,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UrlField, {
                            value: value && /^https?:\/\//.test(value) ? value : "",
                            onChange: onChange,
                            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("imageUrl", lang),
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/ui.tsx",
                            lineNumber: 1327,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1326,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBtn, {
                        icon: "upload",
                        p: p,
                        size: 44,
                        on: true,
                        onClick: ()=>fileRef.current?.click(),
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("pickImage", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1329,
                        columnNumber: 7
                    }, this),
                    value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBtn, {
                        icon: "close",
                        p: p,
                        size: 44,
                        onClick: ()=>onChange(undefined),
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("removeImage", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1330,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1307,
                columnNumber: 5
            }, this),
            failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                style: {
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: p.error,
                    padding: "0 6px"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("imageFailed", lang)
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1333,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1306,
        columnNumber: 5
    }, this);
}
function Toggle({ on, onChange, p, icon, label, grow }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onChange(!on),
        title: label,
        "aria-label": label,
        "aria-pressed": on,
        style: {
            display: grow ? "flex" : "inline-flex",
            width: grow ? "100%" : undefined,
            alignItems: "center",
            gap: 10,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: 0,
            color: p.onSurfaceVariant
        },
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: icon,
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1375,
                columnNumber: 16
            }, this),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 13,
                    color: p.onSurface,
                    flex: grow ? 1 : undefined,
                    textAlign: "left"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1376,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "relative",
                    width: 44,
                    height: 26,
                    borderRadius: 13,
                    background: on ? p.primary : p.surfaceContainerHighest,
                    border: on ? "2px solid transparent" : `2px solid ${p.outline}`,
                    boxSizing: "border-box",
                    transition: "background 160ms",
                    flex: "0 0 auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "absolute",
                        top: "50%",
                        left: on ? 20 : 3,
                        width: on ? 18 : 12,
                        height: on ? 18 : 12,
                        marginTop: on ? -9 : -6,
                        borderRadius: 9,
                        background: on ? p.onPrimary : p.outline,
                        transition: "left 160ms, width 160ms, height 160ms, margin 160ms"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ui.tsx",
                    lineNumber: 1390,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1377,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1358,
        columnNumber: 5
    }, this);
}
function Section({ id, icon, title, p, children, right, defaultOpen = true, onToggle }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const v = localStorage.getItem(`m3e:sec:${id}`);
            if (v !== null) setOpen(v === "1");
        } catch  {}
    }, [
        id
    ]);
    const toggle = ()=>{
        const next = !open;
        try {
            localStorage.setItem(`m3e:sec:${id}`, next ? "1" : "0");
        } catch  {}
        setOpen(next);
        onToggle?.(next);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    height: 36
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggle,
                        "aria-expanded": open,
                        style: {
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            height: 36,
                            padding: "0 6px",
                            border: "none",
                            background: "transparent",
                            color: p.onSurfaceVariant,
                            cursor: "pointer",
                            borderRadius: 12,
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: 0.4,
                            textAlign: "left"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: icon,
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 1468,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flex: 1
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 1469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: open ? "expand_less" : "expand_more",
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/ui.tsx",
                                lineNumber: 1470,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1447,
                        columnNumber: 9
                    }, this),
                    right
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1446,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "6px 4px 14px"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1474,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1445,
        columnNumber: 5
    }, this);
}
function Tile({ icon, label, p, onPointerDown, onClick, starred, onStar, active, compact }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "m3-tile",
        style: {
            position: "relative",
            display: "flex",
            borderRadius: 16
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "m3-tile-face",
                onPointerDown: onPointerDown,
                /* with a pointer handler the press itself does the work, so only a click that came
         * without a pointer (Enter, Space, a screen reader) reaches onClick */ onClick: (e)=>{
                    if (onClick && (!onPointerDown || e.detail === 0)) onClick();
                },
                /* a held Enter would click once per key repeat */ onKeyDown: (e)=>{
                    if (e.key === "Enter" && e.repeat) e.preventDefault();
                },
                title: label,
                style: {
                    flex: 1,
                    minWidth: 0,
                    margin: 0,
                    border: "none",
                    font: "inherit",
                    outlineColor: p.primary,
                    display: "flex",
                    flexDirection: compact ? "row" : "column",
                    alignItems: "center",
                    justifyContent: compact ? "flex-start" : "center",
                    gap: compact ? 10 : 6,
                    padding: compact ? "8px 12px" : "12px 6px 10px",
                    borderRadius: 16,
                    background: active ? p.secondaryContainer : p.surfaceContainerLow,
                    color: active ? p.onSecondaryContainer : p.onSurface,
                    cursor: onPointerDown ? "grab" : "pointer",
                    userSelect: "none",
                    touchAction: "none",
                    minHeight: compact ? 40 : 72,
                    boxSizing: "border-box"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                        name: icon,
                        size: compact ? 20 : 26,
                        color: active ? p.onSecondaryContainer : p.primary
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1540,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 11,
                            fontWeight: 500,
                            lineHeight: 1.2,
                            textAlign: "center",
                            color: active ? p.onSecondaryContainer : p.onSurfaceVariant,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: "100%"
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1541,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1503,
                columnNumber: 7
            }, this),
            onStar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "m3-star",
                onPointerDown: (e)=>e.stopPropagation(),
                onClick: (e)=>{
                    e.stopPropagation();
                    onStar();
                },
                title: starred ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("removeFavorite", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("addFavorite", lang),
                "aria-label": starred ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("removeFavorite", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("addFavorite", lang),
                style: {
                    position: "absolute",
                    top: 4,
                    right: 4,
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    border: "none",
                    background: "transparent",
                    color: starred ? p.primary : p.outline,
                    outlineColor: p.primary,
                    cursor: "pointer",
                    display: "grid",
                    placeItems: "center",
                    opacity: starred ? 1 : undefined
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "star",
                    size: 16,
                    fill: starred
                }, void 0, false, {
                    fileName: "[project]/components/ui.tsx",
                    lineNumber: 1585,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1558,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1502,
        columnNumber: 5
    }, this);
}
/** palette-role swatches; the dot shows the real color of the current theme */ /** One 30dp color disc; the selected one wears the primary ring */ function TokenDisc({ color, label, on, onClick, p, icon, iconColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        title: label,
        "aria-label": label,
        "aria-pressed": on,
        className: "m3-press",
        style: {
            width: 30,
            height: 30,
            borderRadius: 15,
            border: `1px solid ${p.outlineVariant}`,
            padding: 0,
            cursor: "pointer",
            background: color,
            color: iconColor,
            display: "grid",
            placeItems: "center",
            outline: on ? `2px solid ${p.primary}` : "2px solid transparent",
            outlineOffset: 2
        },
        children: icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
            name: icon,
            size: 16
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 1617,
            columnNumber: 16
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1596,
        columnNumber: 5
    }, this);
}
function TokenChips({ value, onChange, p, none, noneOn, onNone, noneColor, noneTextColor, noneIcon = "block", noneLabel }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 8
        },
        children: [
            none && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenDisc, {
                color: noneColor ?? "transparent",
                label: noneLabel ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("noBackground", lang),
                on: !!noneOn,
                onClick: ()=>onNone?.(),
                p: p,
                icon: noneIcon,
                iconColor: noneTextColor ?? p.onSurfaceVariant
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1651,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_TOKENS"].map((tk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenDisc, {
                    color: p[tk.key],
                    label: lang === "en" ? tk.label : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_TOKEN_TEXT"][lang][tk.key],
                    on: !noneOn && tk.key === value,
                    onClick: ()=>onChange(tk.key),
                    p: p
                }, tk.key, false, {
                    fileName: "[project]/components/ui.tsx",
                    lineNumber: 1654,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1649,
        columnNumber: 5
    }, this);
}
function ButtonRun({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "m3-run",
        style: {
            display: "flex",
            gap: 3
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1663,
        columnNumber: 10
    }, this);
}
function TidyButton({ state, onClick, p, pill, place, onPlace }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const done = state === "done";
    const label = state === "undo" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("tidyUndo", lang) : state === "done" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("tidyDone", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("tidy", lang);
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* the menu closes on a tap anywhere else or on Escape */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!menu) return;
        const away = (e)=>{
            if (!ref.current?.contains(e.target)) setMenu(false);
        };
        const key = (e)=>{
            if (e.key !== "Escape") return;
            /* the editor also clears its selection on Escape; closing the menu is enough here */ e.stopPropagation();
            setMenu(false);
        };
        document.addEventListener("pointerdown", away, true);
        document.addEventListener("keydown", key, true);
        return ()=>{
            document.removeEventListener("pointerdown", away, true);
            document.removeEventListener("keydown", key, true);
        };
    }, [
        menu
    ]);
    const split = !!onPlace;
    const current = place ?? "top";
    const placeLabel = (k)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(k === "top" ? "placeTop" : k === "center" ? "placeCenter" : k === "bottom" ? "placeBottom" : "placeSpread", lang);
    const h = pill ? 40 : 44;
    const bg = done ? "transparent" : state === "undo" ? p.tertiaryContainer : p.secondaryContainer;
    const fg = done ? p.onSurfaceVariant : state === "undo" ? p.onTertiaryContainer : p.onSecondaryContainer;
    const main = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: done,
        title: label,
        "aria-label": label,
        className: "m3-press",
        style: {
            width: pill ? done ? 40 : undefined : split ? undefined : "100%",
            flex: split && !pill ? 1 : undefined,
            height: h,
            padding: done ? 0 : pill ? "0 16px 0 12px" : "0 16px",
            borderRadius: split && !done ? `${h / 2}px ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"]}px ${h / 2}px` : h / 2,
            border: "none",
            background: bg,
            color: fg,
            fontSize: 13,
            fontWeight: 600,
            cursor: done ? "default" : "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            opacity: done ? 0.7 : 1,
            whiteSpace: "nowrap"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: state === "undo" ? "undo" : state === "done" ? "check" : "align_space_even",
                size: done ? 22 : 20
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1744,
                columnNumber: 7
            }, this),
            !done && label
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1718,
        columnNumber: 5
    }, this);
    if (!split) return main;
    /* a split button: tidy on the left, the placement menu behind the chevron, 3dp apart like a connected pair */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            position: "relative",
            display: "flex",
            gap: 3,
            alignItems: "center",
            width: pill ? undefined : "100%"
        },
        children: [
            main,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setMenu((m)=>!m),
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("placement", lang),
                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("placement", lang),
                "aria-expanded": menu,
                "aria-haspopup": "true",
                className: "m3-press",
                style: {
                    height: h,
                    width: h,
                    borderRadius: done ? h / 2 : `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"]}px ${h / 2}px ${h / 2}px ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"]}px`,
                    border: "none",
                    background: done ? "transparent" : bg,
                    color: done ? p.onSurfaceVariant : fg,
                    cursor: "pointer",
                    display: "grid",
                    placeItems: "center",
                    flex: "0 0 auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLACES"].find((o)=>o.key === current)?.icon ?? "vertical_align_top",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/ui.tsx",
                    lineNumber: 1773,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1753,
                columnNumber: 7
            }, this),
            menu && /* the placement choices as one compact row of icon buttons, floating off the chevron */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "group",
                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("placement", lang),
                style: {
                    position: "absolute",
                    ...pill ? {
                        bottom: "100%",
                        marginBottom: 8
                    } : {
                        top: "100%",
                        marginTop: 8
                    },
                    right: 0,
                    display: "flex",
                    gap: 3,
                    padding: 4,
                    borderRadius: 24,
                    background: p.surfaceContainer,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.12)",
                    zIndex: 30
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLACES"].map((o)=>{
                    const on = current === o.key;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-pressed": on,
                        title: placeLabel(o.key),
                        "aria-label": placeLabel(o.key),
                        onClick: ()=>{
                            setMenu(false);
                            onPlace(o.key);
                        },
                        className: "m3-press",
                        style: {
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            border: "none",
                            background: on ? p.secondaryContainer : "transparent",
                            color: on ? p.onSecondaryContainer : p.onSurfaceVariant,
                            cursor: "pointer",
                            display: "grid",
                            placeItems: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            name: o.icon,
                            size: 22,
                            fill: on
                        }, void 0, false, {
                            fileName: "[project]/components/ui.tsx",
                            lineNumber: 1818,
                            columnNumber: 17
                        }, this)
                    }, o.key, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1796,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1777,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1751,
        columnNumber: 5
    }, this);
}
function ConfirmDialog({ open, title, body, icon = "delete_sweep", p, onCancel, onConfirm }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const onKey = (e)=>{
            if (e.key === "Escape") {
                e.stopPropagation();
                onCancel();
            }
            if (e.key === "Enter") {
                e.stopPropagation();
                onConfirm();
            }
        };
        window.addEventListener("keydown", onKey, true);
        return ()=>window.removeEventListener("keydown", onKey, true);
    }, [
        open,
        onCancel,
        onConfirm
    ]);
    const btn = (label, primary, onClick)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "m3-press",
            style: {
                height: 40,
                padding: "0 16px",
                borderRadius: 20,
                border: "none",
                background: primary ? p.primary : "transparent",
                color: primary ? p.onPrimary : p.primary,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer"
            },
            children: label
        }, void 0, false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 1862,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
                duration: 0.16
            },
            onClick: onCancel,
            style: {
                position: "fixed",
                inset: 0,
                zIndex: 600,
                background: "rgba(0,0,0,0.32)",
                display: "grid",
                placeItems: "center",
                padding: 24
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                role: "alertdialog",
                "aria-modal": true,
                "aria-label": title,
                initial: {
                    scale: 0.92,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.96,
                    opacity: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 520,
                    damping: 34,
                    mass: 0.7
                },
                onClick: (e)=>e.stopPropagation(),
                style: {
                    width: "min(100%, 340px)",
                    padding: 24,
                    borderRadius: 28,
                    background: p.surfaceContainerHigh,
                    color: p.onSurface,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            color: p.error
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            name: icon,
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/components/ui.tsx",
                            lineNumber: 1922,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1921,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 22,
                            textAlign: "center"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1924,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 14,
                            lineHeight: 1.5,
                            color: p.onSurfaceVariant
                        },
                        children: body
                    }, void 0, false, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1925,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: 8
                        },
                        children: [
                            btn((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("cancel", lang), false, onCancel),
                            btn((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("ok", lang), true, onConfirm)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui.tsx",
                        lineNumber: 1926,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui.tsx",
                lineNumber: 1900,
                columnNumber: 11
            }, this)
        }, "scrim", false, {
            fileName: "[project]/components/ui.tsx",
            lineNumber: 1883,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.tsx",
        lineNumber: 1881,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_ui_tsx_20zk9pt._.js.map