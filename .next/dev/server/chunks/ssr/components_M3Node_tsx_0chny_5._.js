module.exports = [
"[project]/components/M3Node.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonContent",
    ()=>ButtonContent,
    "Icon",
    ()=>Icon,
    "M3Node",
    ()=>M3Node,
    "M3Static",
    ()=>M3Static,
    "MeasuredContent",
    ()=>MeasuredContent,
    "RIPPLE_GROW",
    ()=>RIPPLE_GROW,
    "Ripples",
    ()=>Ripples,
    "boxStyle",
    ()=>boxStyle,
    "contentColor",
    ()=>contentColor,
    "menuShutMs",
    ()=>menuShutMs,
    "rippleSize",
    ()=>rippleSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Loading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pickers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Pickers.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/color.ts [app-ssr] (ecmascript)");
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
/** weight of a heading or label: heavier under the emphasized type setting */ const useWeight = ()=>{
    const emphasized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])().emphasized;
    return (normal, strong)=>emphasized ? strong : normal;
};
function Icon({ name, size = 24, color, fill, weight }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "msr",
        /* the ligature is a picture, not words: a screen reader should not spell out its name */ "aria-hidden": true,
        "data-fill": fill ? "1" : "0",
        style: {
            fontSize: size,
            color,
            fontVariationSettings: weight ? `"FILL" ${fill ? 1 : 0}, "wght" ${weight}, "GRAD" 0, "opsz" 24` : undefined
        },
        children: name
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
const RIPPLE_GROW = 0.42;
function rippleSize(r, x, y) {
    return 2 * Math.max(Math.hypot(x, y), Math.hypot(r.width - x, y), Math.hypot(x, r.height - y), Math.hypot(r.width - x, r.height - y));
}
function Ripples({ list, color }) {
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: list.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                "aria-hidden": true,
                initial: {
                    opacity: 0.16,
                    scale: r.from ?? 0
                },
                animate: {
                    opacity: 0.12,
                    scale: 1
                },
                exit: {
                    opacity: 0
                },
                transition: reducedMotion ? {
                    duration: 0
                } : {
                    scale: {
                        duration: r.dur ?? RIPPLE_GROW,
                        ease: MENU_EASE
                    },
                    opacity: {
                        duration: 0.3,
                        ease: MENU_EASE
                    }
                },
                style: {
                    position: "absolute",
                    left: r.x - r.d / 2,
                    top: r.y - r.d / 2,
                    width: r.d,
                    height: r.d,
                    borderRadius: "50%",
                    background: color,
                    pointerEvents: "none"
                }
            }, r.id, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
/** what a part being pressed is lighting up, for the shapes drawn deep inside it to read */ const RippleCtx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
/** the light of a press, inside one shape of a part: the shape clips it and keeps its corners */ function RippleShape({ part }) {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(RippleCtx);
    if (!ctx) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
        style: {
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            borderRadius: "inherit",
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Ripples, {
            list: ctx.list.filter((r)=>r.part === part),
            color: ctx.color
        }, void 0, false, {
            fileName: "[project]/components/M3Node.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
/** the touches a part is holding, and where each of them landed */ function useRipples(on) {
    const [list, setList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    /* the light stays for as long as the finger is down, wherever it travels: a part being dragged
   * across the canvas keeps it, and it fades once the finger is lifted rather than at the edge
   * of the part. The release is watched on the window, because that is where a drag ends. */ const waiting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const end = ()=>{
        waiting.current?.();
        setList((rs)=>rs.length ? [] : rs);
    };
    const add = (e)=>{
        if (!on) return;
        /* only the main button of a mouse is a press: a right or a middle click opens nothing here */ if (e.pointerType === "mouse" && e.button !== 0) return;
        /* a part made of more than one shape says which one was touched */ const seg = e.target?.closest?.("[data-part-shape]");
        const el = seg ?? e.currentTarget;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        setList((rs)=>[
                ...rs,
                {
                    id: ++next.current,
                    part: seg?.dataset.partShape ?? null,
                    x,
                    y,
                    d: rippleSize(r, x, y)
                }
            ]);
        waiting.current?.();
        const done = ()=>{
            waiting.current = null;
            window.removeEventListener("pointerup", done);
            window.removeEventListener("pointercancel", done);
            setList((rs)=>rs.length ? [] : rs);
        };
        waiting.current = done;
        window.addEventListener("pointerup", done);
        window.addEventListener("pointercancel", done);
    };
    /* a part taken off the canvas mid-press leaves no listener behind */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>waiting.current?.(), []);
    return {
        list,
        add,
        end
    };
}
const ellipsis = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
};
const NO_BOX = [
    "circularProgress",
    "linearProgress",
    "loadingIndicator",
    "switch",
    "checkbox",
    "radio",
    "slider",
    "text",
    "divider",
    "splitButton",
    "fabMenu",
    "carousel"
];
function ButtonContent({ item }) {
    const w = useWeight();
    const hasIcon = !!item.icon;
    const hasLabel = item.label.trim().length > 0;
    /* padding, gap, icon and label all come from the M3 size the height lands on;
   * with no label the icon is centred instead, which makes the button a circle */ const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonMetrics"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonHeightOf"])(item));
    const padX = hasLabel ? m.padX : Math.round((m.h - m.icon) / 2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "m3-size-ease",
        style: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: item.size ? "100%" : undefined,
            boxSizing: "border-box",
            gap: hasIcon && hasLabel ? m.gap : 0,
            paddingLeft: padX,
            paddingRight: padX,
            height: m.h,
            fontSize: m.font,
            fontWeight: w(500, 700),
            letterSpacing: 0.1,
            whiteSpace: "nowrap"
        },
        children: [
            hasIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                name: item.icon,
                size: m.icon,
                fill: item.variant === "filled"
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 272,
                columnNumber: 19
            }, this),
            hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: item.label
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 273,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
function ExtendedFabContent({ item }) {
    const w = useWeight();
    const hasIcon = !!item.icon;
    const hasLabel = item.label.trim().length > 0;
    /* the padding, the icon and the label are the ones the height it was given asks for */ const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedFabMetrics"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedFabHeight"])(item));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "m3-size-ease",
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: hasIcon && hasLabel ? m.gap : 0,
            paddingLeft: m.padX,
            paddingRight: m.padX,
            height: m.h,
            fontSize: m.font,
            fontWeight: w(500, 700),
            whiteSpace: "nowrap"
        },
        children: [
            hasIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                name: item.icon,
                size: m.icon
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 299,
                columnNumber: 19
            }, this),
            hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: item.label
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 300,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
function ChipContent({ item, p }) {
    const on = !!item.checked;
    const lead = on ? "check" : item.icon;
    /* the padding, the icon and the label are the ones the height it was given asks for */ const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chipMetrics"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chipHeightOf"])(item));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "m3-size-ease",
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: m.gap,
            paddingLeft: lead ? m.lead : m.padX,
            paddingRight: m.padX,
            height: m.h,
            fontSize: m.font,
            fontWeight: 500,
            whiteSpace: "nowrap",
            color: on ? p.onSecondaryContainer : undefined
        },
        children: [
            lead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                name: lead,
                size: m.icon
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 326,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: item.label
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 311,
        columnNumber: 5
    }, this);
}
function SwitchContent({ item, p }) {
    const hasLabel = item.label.trim().length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            height: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["H"] - 8,
            whiteSpace: "nowrap",
            width: item.size ? "100%" : undefined,
            justifyContent: item.size ? "space-between" : undefined
        },
        children: [
            hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 16,
                    color: p.onSurface,
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                children: item.label
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 336,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SwitchControl, {
                on: !!item.checked,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 335,
        columnNumber: 5
    }, this);
}
/** the M3 switch track and handle, 52 × 32 */ function SwitchControl({ on, p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            position: "relative",
            width: 52,
            height: 32,
            borderRadius: 16,
            background: on ? p.primary : p.surfaceContainerHighest,
            border: on ? "2px solid transparent" : `2px solid ${p.outline}`,
            boxSizing: "border-box",
            flex: "0 0 auto",
            transition: "background 160ms"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                position: "absolute",
                top: "50%",
                left: on ? 22 : 4,
                width: on ? 24 : 16,
                height: on ? 24 : 16,
                marginTop: on ? -12 : -8,
                borderRadius: 12,
                background: on ? p.onPrimary : p.outline,
                display: "grid",
                placeItems: "center",
                color: p.onPrimaryContainer,
                transition: "left 160ms, width 160ms, height 160ms"
            },
            children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                name: "check",
                size: 16,
                weight: 600
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 374,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/M3Node.tsx",
            lineNumber: 358,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
function CheckboxContent({ item, p }) {
    const on = !!item.checked;
    const hasLabel = item.label.trim().length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            height: 40,
            whiteSpace: "nowrap"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: 40,
                    height: 40,
                    display: "grid",
                    placeItems: "center",
                    flex: "0 0 auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        width: 18,
                        height: 18,
                        borderRadius: 3,
                        boxSizing: "border-box",
                        border: on ? "none" : `2px solid ${p.onSurfaceVariant}`,
                        background: on ? p.primary : "transparent",
                        color: p.onPrimary,
                        display: "grid",
                        placeItems: "center"
                    },
                    children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        name: "check",
                        size: 16,
                        weight: 700
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 399,
                        columnNumber: 18
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 16,
                    color: p.onSurface,
                    paddingRight: 8
                },
                children: item.label
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 402,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 384,
        columnNumber: 5
    }, this);
}
function TextContent({ item, p }) {
    const w = useWeight();
    const fs = item.size ?? 28;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-block",
            fontSize: fs,
            lineHeight: 1.3,
            fontWeight: item.bold ? w(700, 800) : w(400, fs >= 22 ? 600 : 500),
            letterSpacing: fs >= 28 ? -0.25 : 0,
            color: p.onSurface,
            whiteSpace: "nowrap",
            padding: "0 2px"
        },
        children: item.label || " "
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 411,
        columnNumber: 5
    }, this);
}
/** A split button: the labeled action and, after a hairline gap, the arrow that opens its menu.
 *  Both segments are read off the button scale the height lands on, and they keep their own
 *  corners, so the box around them stays plain. */ function SplitButtonContent({ item, p, open }) {
    const w = useWeight();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const st = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variantStyle"])(item.variant, p);
    const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonHeightOf"])(item);
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitMetrics"])(h);
    const outer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleR"])(h / 2);
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleR"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R_INNER"]);
    const hasLabel = item.label.trim().length > 0;
    /* with no label the icon is centred instead, the way a button with none is */ const padX = hasLabel ? m.padX : Math.round((m.h - m.icon) / 2);
    const shadow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variantShadow"])(item.variant);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "m3-size-ease",
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_GAP"],
            height: m.h
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "m3-size-ease",
                "data-part-shape": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MAIN_SLOT"],
                style: {
                    ...st,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: hasLabel && item.icon ? m.gap : 0,
                    height: m.h,
                    paddingLeft: padX,
                    paddingRight: padX,
                    borderTopLeftRadius: outer,
                    borderBottomLeftRadius: outer,
                    borderTopRightRadius: inner,
                    borderBottomRightRadius: inner,
                    fontSize: m.font,
                    fontWeight: w(500, 700),
                    whiteSpace: "nowrap",
                    boxSizing: "border-box",
                    boxShadow: shadow,
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        name: item.icon,
                        size: m.icon,
                        fill: item.variant === "filled"
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 469,
                        columnNumber: 23
                    }, this),
                    hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 470,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RippleShape, {
                        part: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MAIN_SLOT"]
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "m3-size-ease",
                "data-part-shape": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"],
                style: {
                    ...st,
                    display: "inline-grid",
                    placeItems: "center",
                    position: "relative",
                    overflow: "hidden",
                    /* the segment is as wide as its arrow with its own padding, so it eases like the other one */ height: m.h,
                    paddingLeft: m.trailPadX,
                    paddingRight: m.trailPadX,
                    /* opening the menu rounds this segment right off, the way M3 does it; the segment with
             the words keeps the shape it had */ borderTopLeftRadius: open ? outer : inner,
                    borderBottomLeftRadius: open ? outer : inner,
                    borderTopRightRadius: outer,
                    borderBottomRightRadius: outer,
                    boxSizing: "border-box",
                    boxShadow: shadow
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "inline-flex",
                            transform: open ? "rotate(180deg)" : "none",
                            transition: reducedMotion ? "none" : "transform 200ms cubic-bezier(0.2, 0, 0, 1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            name: "keyboard_arrow_down",
                            size: m.icon
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 498,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 497,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RippleShape, {
                        part: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"]
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 473,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 444,
        columnNumber: 5
    }, this);
}
/** Whether a menu is drawn open, on its way out, or not yet. The preview draws its screens
 *  inside an AnimatePresence that blocks animations on mount, so a menu is drawn shut for one
 *  frame and told to open on the next, where nothing blocks it. A menu that has never been open
 *  starts rolled up; one on its way out only gives way a little, because what carries it off is
 *  the fade. */ function useOpenPhase(shown) {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("shut");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!shown) {
            setPhase((was)=>was === "shut" ? "shut" : "closing");
            return;
        }
        const id = requestAnimationFrame(()=>setPhase("open"));
        return ()=>cancelAnimationFrame(id);
    }, [
        shown
    ]);
    return phase;
}
/** A split button with its menu open: the button where the author put it, and the sheet of
 *  entries beside it -- below the button where the screen has room, above it where it does not.
 *  The sheet grows out of the edge nearest the button, so the two read as one gesture. */ function SplitMenuContent({ item, p, shown = true }) {
    const w = useWeight();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const up = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuRises"])(item);
    const tabs = item.tabs ?? [];
    const phase = useOpenPhase(shown);
    const open = phase === "open";
    const sheet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: false,
        animate: {
            opacity: open ? 1 : 0,
            scaleY: open ? 1 : 0.7
        },
        transition: reducedMotion ? {
            duration: 0
        } : {
            duration: open ? MENU_ROLL : MENU_SHUT,
            ease: MENU_EASE
        },
        style: {
            /* it unrolls out of the edge the button is on */ transformOrigin: up ? "50% 100%" : "50% 0%",
            background: p.surfaceContainer,
            color: p.onSurface,
            borderRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleR"])(12),
            padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_PAD"]}px 0`,
            boxShadow: "0 8px 24px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)",
            boxSizing: "border-box",
            overflow: "hidden"
        },
        children: tabs.map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                initial: false,
                /* the entry nearest the button is read first, so it is the first to arrive */ animate: {
                    opacity: open ? 1 : 0
                },
                transition: reducedMotion ? {
                    duration: 0
                } : open ? {
                    duration: 0.12,
                    delay: (up ? tabs.length - 1 - i : i) * MENU_STAGGER
                } : {
                    duration: 0.06
                },
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    height: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_ITEM_H"],
                    padding: "0 12px",
                    fontSize: 14,
                    fontWeight: w(500, 700),
                    whiteSpace: "nowrap",
                    boxSizing: "border-box"
                },
                children: [
                    tab.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        name: tab.icon,
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 576,
                        columnNumber: 24
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: ellipsis,
                        children: tab.label
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 577,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 552,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 535,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: up ? "flex-end" : "flex-start",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_SHEET_GAP"],
            height: "100%"
        },
        children: [
            up && sheet,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    alignSelf: "flex-start"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SplitButtonContent, {
                    item: item,
                    p: p,
                    open: open
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 596,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this),
            !up && sheet
        ]
    }, void 0, true, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 583,
        columnNumber: 5
    }, this);
}
function RadioContent({ item, p }) {
    const on = !!item.checked;
    const hasLabel = item.label.trim().length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            height: 40,
            whiteSpace: "nowrap"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: 40,
                    height: 40,
                    display: "grid",
                    placeItems: "center",
                    flex: "0 0 auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        boxSizing: "border-box",
                        border: `2px solid ${on ? p.primary : p.onSurfaceVariant}`,
                        display: "grid",
                        placeItems: "center"
                    },
                    children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            background: p.primary
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 620,
                        columnNumber: 18
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 609,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 608,
                columnNumber: 7
            }, this),
            hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 16,
                    color: p.onSurface,
                    paddingRight: 8
                },
                children: item.label
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 623,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 607,
        columnNumber: 5
    }, this);
}
function MeasuredContent({ item, p }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuOpen"])(item)) return item.kind === "splitButton" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SplitMenuContent, {
        item: item,
        p: p
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 630,
        columnNumber: 60
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FabMenuContent, {
        item: item,
        p: p
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 630,
        columnNumber: 101
    }, this);
    switch(item.kind){
        case "button":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonContent, {
                item: item
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 633,
                columnNumber: 14
            }, this);
        case "extendedFab":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExtendedFabContent, {
                item: item
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 635,
                columnNumber: 14
            }, this);
        case "chip":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChipContent, {
                item: item,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 637,
                columnNumber: 14
            }, this);
        case "switch":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SwitchContent, {
                item: item,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 639,
                columnNumber: 14
            }, this);
        case "checkbox":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxContent, {
                item: item,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 641,
                columnNumber: 14
            }, this);
        case "text":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextContent, {
                item: item,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 643,
                columnNumber: 14
            }, this);
        case "splitButton":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SplitButtonContent, {
                item: item,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 645,
                columnNumber: 14
            }, this);
        case "radio":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioContent, {
                item: item,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 647,
                columnNumber: 14
            }, this);
        case "fabMenu":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FabMenuContent, {
                item: item,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 649,
                columnNumber: 14
            }, this);
        default:
            return null;
    }
}
/** how long one entry takes to unroll, and how far apart the entries start */ const MENU_ROLL = 0.28;
const MENU_STAGGER = 0.045;
/** how long the button takes to reach the M size. A FAB taller than that reaches up into the row
 *  the nearest entry stands in, so the two are never on screen together: opening, the entries wait
 *  for the button to come down to size; shutting, the button waits for the entries to go. */ const MENU_BUTTON_ROLL = 0.16;
/** shutting is not the unrolling backwards: the entries give way a little and fade, from the far
 *  end down, so the menu is gone long before a full reverse run would have finished */ const MENU_SHUT = 0.16;
/** the one frame the drawing is swapped on, held long enough for the box not to ease across it */ const MENU_SNAP_MS = 60;
const MENU_SHUT_FADE = 0.1;
const MENU_SHUT_STAGGER = 0.025;
const MENU_SHUT_SCALE = 0.72;
const MENU_BUTTON_SHUT = 0.16;
const MENU_EASE = [
    0.2,
    0,
    0,
    1
];
const menuShutMs = (it)=>{
    const entries = menuEntriesShut(it);
    return Math.round(Math.max(entries, menuButtonWait(it) + MENU_BUTTON_SHUT) * 1000);
};
/** how long every entry takes to fade away */ const menuEntriesShut = (it)=>MENU_SHUT_FADE + Math.max(0, (it.tabs?.length ?? 1) - 1) * MENU_SHUT_STAGGER;
/** a FAB that reaches above the close button takes its turn; one that does not never waits */ const overTall = (it)=>(it.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAB_MENU_CLOSE"]) > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAB_MENU_CLOSE"];
/** what the button waits for before growing back: every entry gone */ const menuButtonWait = (it)=>overTall(it) ? menuEntriesShut(it) : 0;
/** what the entries wait for before unrolling: the button down to the close size */ const menuEntriesWait = (it)=>overTall(it) ? MENU_BUTTON_ROLL : 0;
/** Whether the menu is drawn at all, and whether it is drawn open. The two part ways while the
 *  menu shuts: the node keeps its open shape, transparent and as tall as the entries, until they
 *  have rolled back into the button, and only then becomes the FAB again. */ function useMenuPhase(item) {
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuOpen"])(item);
    const [drawn, setDrawn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(open);
    /* read by the effect without restarting it: only the menu opening or closing may do that */ const drawnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(open);
    /** the frame the drawing is swapped on: the box must not ease its height across the swap */ const [snap, setSnap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const shutMs = menuShutMs(item);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            drawnRef.current = true;
            setDrawn(true);
            return;
        }
        if (!drawnRef.current) return;
        const id = setTimeout(()=>{
            drawnRef.current = false;
            setDrawn(false);
            setSnap(true);
        }, shutMs);
        return ()=>clearTimeout(id);
    }, [
        open,
        shutMs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!snap) return;
        const id = setTimeout(()=>setSnap(false), MENU_SNAP_MS);
        return ()=>clearTimeout(id);
    }, [
        snap
    ]);
    return {
        drawn,
        open,
        snap
    };
}
/** A FAB with its menu open: the entries it offers, and the button itself showing the close
 *  icon under them. The button stays where the author put it and grows or shrinks into the M-size
 *  close button; the entries unroll out of its right edge, the one nearest the button first.
 *  Nothing here changes the drawing's size, so the editor can measure it while it moves, and the
 *  menu is exactly as wide as its widest entry. */ function FabMenuContent({ item, p, shown = true }) {
    const w = useWeight();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const tabs = item.tabs ?? [];
    const filled = item.variant === "filled";
    const itemStyle = filled ? {
        background: p.primaryContainer,
        color: p.onPrimaryContainer
    } : {
        background: p.secondaryContainer,
        color: p.onSecondaryContainer
    };
    const extended = item.kind === "extendedFab";
    /* the close button is the M size: a small or a large FAB eases into it rather than jumping */ const grow = (item.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAB_MENU_CLOSE"]) / __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAB_MENU_CLOSE"];
    /* opening, the entry nearest the button leads; shutting, the run plays back from the far end */ const wait = menuEntriesWait(item);
    const after = (i)=>wait + (tabs.length - 1 - i) * MENU_STAGGER;
    const before = (i)=>i * MENU_SHUT_STAGGER;
    const phase = useOpenPhase(shown);
    const open = phase === "open";
    const closing = phase === "closing";
    const roll = (i)=>reducedMotion ? {
            duration: 0
        } : open ? {
            duration: MENU_ROLL,
            ease: MENU_EASE,
            delay: after(i)
        } : {
            duration: MENU_SHUT,
            ease: MENU_EASE,
            delay: before(i)
        };
    const fade = (i)=>reducedMotion ? {
            duration: 0
        } : open ? {
            duration: 0.12,
            delay: after(i) + MENU_ROLL * 0.55
        } : {
            duration: 0.06,
            delay: before(i)
        };
    /* an entry is not there at all until its own roll begins, so a menu waiting its turn shows no
     slivers stacked over the button; on the way out it is the fade that takes it */ const show = (i)=>reducedMotion ? {
            duration: 0
        } : open ? {
            duration: 0,
            delay: after(i)
        } : closing ? {
            duration: MENU_SHUT_FADE,
            ease: MENU_EASE,
            delay: before(i)
        } : {
            duration: 0
        };
    return /* the column hangs from the bottom: the button keeps its place while the box above it grows */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAB_MENU_GAP"],
            height: "100%"
        },
        children: [
            tabs.map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                    /* the entry arrives with its roll and leaves by fading, part way through a roll it
             never finishes */ initial: false,
                    animate: {
                        opacity: open ? 1 : 0
                    },
                    transition: show(i),
                    style: {
                        position: "relative",
                        color: itemStyle.color,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 12,
                        height: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAB_MENU_ITEM_H"],
                        padding: "0 24px 0 20px",
                        fontSize: 16,
                        fontWeight: w(500, 700),
                        whiteSpace: "nowrap",
                        maxWidth: "100%",
                        boxSizing: "border-box",
                        flex: "0 0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                            "aria-hidden": true,
                            initial: false,
                            animate: {
                                scaleX: open ? 1 : closing ? MENU_SHUT_SCALE : 0.06
                            },
                            transition: roll(i),
                            style: {
                                ...itemStyle,
                                position: "absolute",
                                inset: 0,
                                transformOrigin: "100% 50%",
                                borderRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleR"])(28),
                                boxShadow: "0 1px 3px rgba(0,0,0,0.16)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 794,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                            initial: false,
                            animate: {
                                opacity: open ? 1 : 0
                            },
                            transition: fade(i),
                            style: {
                                position: "relative",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 12,
                                minWidth: 0
                            },
                            children: [
                                tab.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: tab.icon,
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 815,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: ellipsis,
                                    children: tab.label
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 816,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 809,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 770,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                /* scaled rather than resized: the button, its icon and its corners all land on the M size
           together, and the drawing the editor measures never changes width */ initial: false,
                animate: extended ? undefined : {
                    scale: open ? 1 : grow
                },
                transition: reducedMotion ? {
                    duration: 0
                } : open ? {
                    duration: MENU_BUTTON_ROLL,
                    ease: MENU_EASE
                } : {
                    duration: MENU_BUTTON_SHUT,
                    ease: MENU_EASE,
                    delay: menuButtonWait(item)
                },
                style: {
                    /* the button the menu hangs off is the FAB itself, wearing the icon that shuts it */ ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variantStyle"])(item.variant, p),
                    transformOrigin: "100% 100%",
                    width: extended ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAB_MENU_CLOSE"],
                    height: extended ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedFabHeight"])(item) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAB_MENU_CLOSE"],
                    padding: extended ? "0 20px" : undefined,
                    gap: 12,
                    fontSize: 16,
                    fontWeight: w(500, 700),
                    whiteSpace: "nowrap",
                    borderRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleR"])(extended ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedFabMetrics"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedFabHeight"])(item)).radius : Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAB_MENU_CLOSE"] * 0.28)),
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.12)",
                    flex: "0 0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "grid",
                            placeItems: "center",
                            gridArea: "1 / 1"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                initial: false,
                                animate: {
                                    opacity: open ? 1 : 0
                                },
                                transition: reducedMotion ? {
                                    duration: 0
                                } : {
                                    duration: 0.1,
                                    delay: open ? 0.04 : 0
                                },
                                style: {
                                    gridArea: "1 / 1",
                                    display: "grid",
                                    placeItems: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: "close",
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 859,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 853,
                                columnNumber: 11
                            }, this),
                            item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                initial: false,
                                animate: {
                                    opacity: open ? 0 : 1
                                },
                                transition: reducedMotion ? {
                                    duration: 0
                                } : {
                                    duration: 0.1,
                                    delay: open ? 0 : menuButtonWait(item) + 0.04
                                },
                                style: {
                                    gridArea: "1 / 1",
                                    display: "grid",
                                    placeItems: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: item.icon,
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 868,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 862,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 852,
                        columnNumber: 9
                    }, this),
                    extended && item.label.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            gridArea: "1 / 2"
                        },
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 872,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 820,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 768,
        columnNumber: 5
    }, this);
}
function Body({ item, p, tabScroll, menuShown }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const w = useWeight();
    const hasLabel = item.label.trim().length > 0;
    const hasSupporting = !!item.supporting?.trim();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuOpen"])(item)) return item.kind === "splitButton" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SplitMenuContent, {
        item: item,
        p: p,
        shown: menuShown
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 884,
        columnNumber: 60
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FabMenuContent, {
        item: item,
        p: p,
        shown: menuShown
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 884,
        columnNumber: 119
    }, this);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MEASURED"].includes(item.kind)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MeasuredContent, {
        item: item,
        p: p
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 885,
        columnNumber: 44
    }, this);
    switch(item.kind){
        case "bottomSheet":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 32,
                        height: 4,
                        borderRadius: 2,
                        background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onToken"])(item.fill ?? "surfaceContainerLow", p),
                        opacity: 0.4
                    }
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 891,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 890,
                columnNumber: 9
            }, this);
        case "iconButton":
            /* the icon is the one the M3 size the circle lands on asks for */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    placeItems: "center",
                    height: "100%"
                },
                children: item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    name: item.icon,
                    size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonMetrics"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonHeightOf"])(item)).icon,
                    fill: item.variant === "filled"
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 907,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 906,
                columnNumber: 9
            }, this);
        case "fab":
            {
                const s = item.size ?? 56;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        placeItems: "center",
                        height: "100%"
                    },
                    children: item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        name: item.icon,
                        size: Math.round(s * 0.42)
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 915,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 914,
                    columnNumber: 9
                }, this);
            }
        case "topAppBar":
            {
                /* the small bar keeps its title between the icons; the medium and large ones let it down
         onto a line of its own at the foot, the way M3's flexible bars do */ const barH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topBarHeightOf"])(item);
                const tall = barH > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOP_BAR_SIZES"][0].h;
                const font = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topBarFontOf"])(item);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        /* the inset the bar has, if any (see sizeOf) */ padding: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeOf"])(item, {}).h - barH}px 0 0`,
                        height: "100%",
                        boxSizing: "border-box",
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                                padding: "0 4px",
                                height: 64,
                                flex: "0 0 auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 48,
                                        height: 48,
                                        display: "grid",
                                        placeItems: "center",
                                        flex: "0 0 auto"
                                    },
                                    children: item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        name: item.icon,
                                        size: 24,
                                        color: p.onSurface
                                    }, void 0, false, {
                                        fileName: "[project]/components/M3Node.tsx",
                                        lineNumber: 940,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 939,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "m3-size-ease",
                                    style: {
                                        flex: 1,
                                        minWidth: 0,
                                        fontSize: tall ? 0 : font,
                                        opacity: tall ? 0 : 1,
                                        fontWeight: w(400, 600),
                                        color: p.onSurface,
                                        transition: "opacity 200ms",
                                        ...ellipsis
                                    },
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 942,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 48,
                                        height: 48,
                                        display: "grid",
                                        placeItems: "center",
                                        flex: "0 0 auto"
                                    },
                                    children: item.icon2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        name: item.icon2,
                                        size: 24,
                                        color: p.onSurfaceVariant
                                    }, void 0, false, {
                                        fileName: "[project]/components/M3Node.tsx",
                                        lineNumber: 946,
                                        columnNumber: 30
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 945,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 938,
                            columnNumber: 11
                        }, this),
                        tall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "m3-size-ease",
                            style: {
                                flex: 1,
                                minWidth: 0,
                                display: "flex",
                                alignItems: "flex-end",
                                padding: "0 16px 24px",
                                fontSize: font,
                                lineHeight: 1.2,
                                fontWeight: w(400, 600),
                                color: p.onSurface,
                                ...ellipsis
                            },
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 950,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 927,
                    columnNumber: 9
                }, this);
            }
        case "searchBar":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "0 16px",
                    height: "100%"
                },
                children: [
                    item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        name: item.icon,
                        size: 24,
                        color: p.onSurface
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 961,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            fontSize: 16,
                            color: p.onSurfaceVariant,
                            ...ellipsis
                        },
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 962,
                        columnNumber: 11
                    }, this),
                    item.icon2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        name: item.icon2,
                        size: 24,
                        color: p.onSurfaceVariant
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 965,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 960,
                columnNumber: 9
            }, this);
        case "card":
            {
                const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardImagePosOf"])(item);
                const hasImage = !item.noImage;
                const padding = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_PADDING"];
                const align = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardContentAlignOf"])(item);
                const justifyContent = {
                    start: "flex-start",
                    center: "center",
                    end: "flex-end"
                }[align];
                const across = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardTextAlignOf"])(item);
                const alignItems = {
                    start: "flex-start",
                    center: "center",
                    end: "flex-end"
                }[across];
                const textAlign = {
                    start: "start",
                    center: "center",
                    end: "end"
                }[across];
                const ink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardTextColorOf"])(item, p);
                const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardBodyColorOf"])(item, p);
                const picture = item.src ? // eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: item.src,
                    alt: "",
                    draggable: false,
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 982,
                    columnNumber: 9
                }, this) : item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    name: item.icon,
                    size: 34
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 984,
                    columnNumber: 22
                }, this);
                const media = (style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleR"])(14),
                            background: p.primaryContainer,
                            color: p.onPrimaryContainer,
                            display: "grid",
                            placeItems: "center",
                            flex: "0 0 auto",
                            overflow: "hidden",
                            ...style
                        },
                        children: picture
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 987,
                        columnNumber: 9
                    }, this);
                const text = /* the column may shrink under a large picture: what does not fit is clipped, never pushed out of the card */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        minWidth: 0,
                        minHeight: 0,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_TEXT_GAP"],
                        justifyContent,
                        alignItems,
                        textAlign
                    },
                    children: [
                        hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 16,
                                fontWeight: w(600, 700),
                                color: ink,
                                maxWidth: "100%",
                                ...ellipsis
                            },
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1006,
                            columnNumber: 13
                        }, this),
                        hasSupporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 13,
                                lineHeight: 1.5,
                                color: body.color,
                                opacity: body.opacity,
                                overflow: "hidden"
                            },
                            children: item.supporting
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1009,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1004,
                    columnNumber: 9
                }, this);
                if (hasImage && pos === "background") {
                    /* Full-bleed media behind the text. A photo, or a chosen text color that the placeholder's
         * container may not carry, gets a scrim on the text's side: dark under light text, light under dark. */ const scrim = item.src || item.textColor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardScrimOf"])(ink, align) : undefined;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            height: "100%",
                            boxSizing: "border-box"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: p.primaryContainer,
                                    color: p.onPrimaryContainer,
                                    display: "grid",
                                    placeItems: "center"
                                },
                                children: picture
                            }, void 0, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1021,
                                columnNumber: 13
                            }, this),
                            scrim && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: scrim
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1024,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    height: "100%",
                                    boxSizing: "border-box",
                                    padding,
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: text
                            }, void 0, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1025,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 1020,
                        columnNumber: 11
                    }, this);
                }
                /* top / bottom: the image band above or under the text; leading / trailing: a full-height column beside it */ const side = hasImage && (pos === "leading" || pos === "trailing");
                const after = pos === "trailing" || pos === "bottom";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding,
                        height: "100%",
                        display: "flex",
                        flexDirection: side ? "row" : "column",
                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_MEDIA_GAP"],
                        boxSizing: "border-box",
                        overflow: "hidden"
                    },
                    children: [
                        hasImage && !after && media(side ? {
                            width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardImageSizeOf"])(item),
                            alignSelf: "stretch"
                        } : {
                            height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardImageSizeOf"])(item)
                        }),
                        text,
                        hasImage && after && media(side ? {
                            width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardImageSizeOf"])(item),
                            alignSelf: "stretch"
                        } : {
                            height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardImageSizeOf"])(item)
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1033,
                    columnNumber: 9
                }, this);
            }
        case "listItem":
            {
                const iconBg = item.iconFill === "none" ? null : item.iconFill ?? "primaryContainer";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: "0 16px",
                        height: "100%"
                    },
                    children: [
                        item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                background: iconBg ? p[iconBg] : "transparent",
                                color: iconBg ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onToken"])(iconBg, p) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onToken"])(item.fill ?? "surfaceContainerLow", p),
                                display: "grid",
                                placeItems: "center",
                                flex: "0 0 auto"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                name: item.icon,
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1068,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1056,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                minWidth: 0
                            },
                            children: [
                                hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 16,
                                        color: p.onSurface,
                                        ...ellipsis
                                    },
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1072,
                                    columnNumber: 26
                                }, this),
                                hasSupporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 13,
                                        color: p.onSurfaceVariant,
                                        ...ellipsis
                                    },
                                    children: item.supporting
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1074,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1071,
                            columnNumber: 11
                        }, this),
                        item.switch ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SwitchControl, {
                            on: !!item.checked,
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1077,
                            columnNumber: 26
                        }, this) : item.icon2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            name: item.icon2,
                            size: 22,
                            color: p.onSurfaceVariant
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1077,
                            columnNumber: 86
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1054,
                    columnNumber: 9
                }, this);
            }
        case "dialog":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 24,
                    height: "100%",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12
                },
                children: [
                    item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            color: p.primary
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            name: item.icon,
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1096,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 1095,
                        columnNumber: 13
                    }, this),
                    hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 24,
                            fontWeight: w(400, 600),
                            color: p.onSurface,
                            textAlign: item.icon ? "center" : "left",
                            ...ellipsis
                        },
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 1100,
                        columnNumber: 13
                    }, this),
                    hasSupporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 14,
                            lineHeight: 1.5,
                            color: p.onSurfaceVariant,
                            flex: 1,
                            overflow: "hidden"
                        },
                        children: item.supporting
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 1113,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: 8
                        },
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("cancel", lang),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("ok", lang)
                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    padding: "0 12px",
                                    height: 40,
                                    display: "inline-flex",
                                    alignItems: "center",
                                    color: p.primary,
                                    fontSize: 14,
                                    fontWeight: 500
                                },
                                children: t
                            }, t, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1119,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 1117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1084,
                columnNumber: 9
            }, this);
        case "snackbar":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "0 8px 0 16px",
                    height: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            fontSize: 14,
                            color: p.inverseOnSurface,
                            ...ellipsis
                        },
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 1141,
                        columnNumber: 11
                    }, this),
                    hasSupporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            padding: "0 12px",
                            height: 36,
                            display: "inline-flex",
                            alignItems: "center",
                            color: p.inversePrimary,
                            fontSize: 14,
                            fontWeight: 500,
                            whiteSpace: "nowrap"
                        },
                        children: item.supporting
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 1145,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1140,
                columnNumber: 9
            }, this);
        case "textField":
            {
                const filled = item.variant === "filled";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        height: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "0 16px",
                                height: "100%"
                            },
                            children: [
                                item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: item.icon,
                                    size: 24,
                                    color: p.onSurfaceVariant
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1168,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        flex: 1,
                                        minWidth: 0,
                                        fontSize: 16,
                                        color: p.onSurfaceVariant,
                                        ...ellipsis
                                    },
                                    children: filled ? "" : ""
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1169,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1167,
                            columnNumber: 11
                        }, this),
                        hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: "absolute",
                                left: item.icon ? 52 : 16,
                                top: filled ? 8 : -8,
                                fontSize: 12,
                                lineHeight: "16px",
                                color: p.primary,
                                background: filled ? "transparent" : p.surface,
                                padding: filled ? 0 : "0 4px",
                                marginLeft: filled ? 0 : -4
                            },
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1174,
                            columnNumber: 13
                        }, this),
                        filled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: 2,
                                background: p.primary
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1191,
                            columnNumber: 13
                        }, this),
                        hasSupporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: "absolute",
                                left: 16,
                                top: "100%",
                                marginTop: 4,
                                fontSize: 12,
                                color: p.onSurfaceVariant,
                                whiteSpace: "nowrap"
                            },
                            children: item.supporting
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1203,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1166,
                    columnNumber: 9
                }, this);
            }
        case "select":
            {
                /* a closed dropdown: the chosen option is the value and the label floats; with
       * nothing chosen the label sits in the field */ const filled = item.variant === "filled";
                const value = item.selected === undefined ? undefined : item.tabs?.[item.selected]?.label;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        height: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                padding: "0 12px 0 16px",
                                height: "100%"
                            },
                            children: [
                                item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: item.icon,
                                    size: 24,
                                    color: p.onSurfaceVariant
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1229,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        flex: 1,
                                        minWidth: 0,
                                        fontSize: 16,
                                        color: value ? p.onSurface : p.onSurfaceVariant,
                                        paddingTop: value && filled ? 16 : 0,
                                        ...ellipsis
                                    },
                                    children: value ?? item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    name: "arrow_drop_down",
                                    size: 24,
                                    color: p.onSurfaceVariant
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1233,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1228,
                            columnNumber: 11
                        }, this),
                        value && hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: "absolute",
                                left: item.icon ? 52 : 16,
                                top: filled ? 8 : -8,
                                fontSize: 12,
                                lineHeight: "16px",
                                color: p.onSurfaceVariant,
                                background: filled ? "transparent" : p.surface,
                                padding: filled ? 0 : "0 4px",
                                marginLeft: filled ? 0 : -4
                            },
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1236,
                            columnNumber: 13
                        }, this),
                        filled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: 1,
                                background: p.onSurfaceVariant
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1252,
                            columnNumber: 22
                        }, this),
                        hasSupporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: "absolute",
                                left: 16,
                                top: "100%",
                                marginTop: 4,
                                fontSize: 12,
                                color: p.onSurfaceVariant,
                                whiteSpace: "nowrap"
                            },
                            children: item.supporting
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1254,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1227,
                    columnNumber: 9
                }, this);
            }
        case "slider":
            {
                const v = Math.min(100, Math.max(0, item.value ?? 40)) / 100;
                const w = item.size ?? 280;
                const handleX = 2 + (w - 4) * v;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        height: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: 0,
                                width: Math.max(0, handleX - 8),
                                top: 14,
                                height: 16,
                                borderRadius: "8px 2px 2px 8px",
                                background: p.primary
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1268,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: handleX + 8,
                                right: 0,
                                top: 14,
                                height: 16,
                                borderRadius: "2px 8px 8px 2px",
                                background: p.secondaryContainer
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                right: 6,
                                top: 20,
                                width: 4,
                                height: 4,
                                borderRadius: 2,
                                background: p.onSecondaryContainer
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: handleX - 2,
                                top: 0,
                                width: 4,
                                height: 44,
                                borderRadius: 2,
                                background: p.primary
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1301,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1267,
                    columnNumber: 9
                }, this);
            }
        case "image":
            if (item.src) {
                return(// eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: item.src,
                    alt: "",
                    draggable: false,
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1320,
                    columnNumber: 11
                }, this));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    placeItems: "center",
                    height: "100%",
                    color: p.outline
                },
                children: item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    name: item.icon,
                    size: Math.min(48, Math.round((item.size ?? 200) * 0.3))
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1330,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1329,
                columnNumber: 9
            }, this);
        case "camera":
            /* a viewfinder: the live feed is dark, with focus brackets and a shutter row. The body
         paints the dark ground itself, on a layer of its own, so a box resized in a hurry never
         shows the screen through it while the clipped box behind it catches up. */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    height: "100%",
                    color: p.inverseOnSurface,
                    background: p.inverseSurface,
                    transform: "translateZ(0)"
                },
                children: [
                    [
                        "left",
                        "right"
                    ].map((side)=>[
                            "top",
                            "bottom"
                        ].map((edge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    [side]: 24,
                                    [edge]: 24,
                                    width: 28,
                                    height: 28,
                                    opacity: 0.7,
                                    [`border${side === "left" ? "Left" : "Right"}`]: `3px solid ${p.inverseOnSurface}`,
                                    [`border${edge === "top" ? "Top" : "Bottom"}`]: `3px solid ${p.inverseOnSurface}`,
                                    [`border${edge === "top" ? "Top" : "Bottom"}${side === "left" ? "Left" : "Right"}Radius`]: 6
                                }
                            }, `${side}-${edge}`, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1342,
                                columnNumber: 15
                            }, this))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            display: "grid",
                            placeItems: "center",
                            opacity: 0.5
                        },
                        children: item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            name: item.icon,
                            size: 40
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1359,
                            columnNumber: 27
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 1358,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: 20,
                            display: "grid",
                            placeItems: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 64,
                                height: 64,
                                borderRadius: 32,
                                border: `4px solid ${p.inverseOnSurface}`,
                                display: "grid",
                                placeItems: "center"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 48,
                                    height: 48,
                                    borderRadius: 24,
                                    background: p.inverseOnSurface
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1363,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1362,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/M3Node.tsx",
                        lineNumber: 1361,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1339,
                columnNumber: 9
            }, this);
        case "map":
            /* a stylised city: blocks on a light ground, two main roads and a river, one pin. Painted
         on its own layer, like the camera, so a quick resize never leaves it see-through. */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    height: "100%",
                    overflow: "hidden",
                    background: p.surfaceContainerLow,
                    transform: "translateZ(0)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 400 300",
                    preserveAspectRatio: "xMidYMid slice",
                    style: {
                        position: "absolute",
                        inset: 0
                    },
                    "aria-hidden": true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "400",
                            height: "300",
                            fill: p.surfaceContainerLow
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1375,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M-20 210 C 80 170, 140 260, 240 220 S 380 150, 430 190 L 430 240 C 380 200, 300 260, 240 250 S 120 230, -20 250 Z",
                            fill: p.primaryContainer,
                            opacity: 0.6
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1376,
                            columnNumber: 13
                        }, this),
                        [
                            [
                                20,
                                20,
                                90,
                                60
                            ],
                            [
                                130,
                                20,
                                110,
                                60
                            ],
                            [
                                260,
                                20,
                                120,
                                60
                            ],
                            [
                                20,
                                100,
                                90,
                                70
                            ],
                            [
                                130,
                                100,
                                60,
                                70
                            ],
                            [
                                210,
                                100,
                                170,
                                70
                            ],
                            [
                                20,
                                190,
                                60,
                                40
                            ],
                            [
                                300,
                                200,
                                80,
                                30
                            ]
                        ].map(([x, y, w, h], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: x,
                                y: y,
                                width: w,
                                height: h,
                                rx: 6,
                                fill: p.surfaceContainerHighest
                            }, i, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1382,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0 90 H400 M110 0 V300 M250 0 V300",
                            stroke: p.surface,
                            strokeWidth: 10,
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1384,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0 90 H400 M110 0 V300 M250 0 V300",
                            stroke: p.outlineVariant,
                            strokeWidth: 1,
                            fill: "none",
                            opacity: 0.6
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1385,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            transform: "translate(200 150)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0 24 C -14 6, -20 -2, -20 -12 A 20 20 0 0 1 20 -12 C 20 -2, 14 6, 0 24 Z",
                                    fill: p.primary
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1387,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "0",
                                    cy: "-12",
                                    r: "7",
                                    fill: p.onPrimary
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1388,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1386,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1374,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1373,
                columnNumber: 9
            }, this);
        case "divider":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    height: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "100%",
                        height: 1,
                        background: p.outlineVariant
                    }
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1397,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1396,
                columnNumber: 9
            }, this);
        case "carousel":
            /* the same measure a scrolling tab row is drawn at: how far the row has been carried */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pickers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselBody"], {
                item: item,
                p: p,
                scroll: tabScroll
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1403,
                columnNumber: 14
            }, this);
        case "datePicker":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pickers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DatePickerBody"], {
                item: item,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1405,
                columnNumber: 14
            }, this);
        case "timePicker":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pickers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimePickerBody"], {
                item: item,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1407,
                columnNumber: 14
            }, this);
        case "navRail":
            {
                const tabs = item.tabs ?? [];
                const wide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWideRail"])(item);
                const expanded = !!item.railExpanded;
                const rail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["railMetrics"])(item);
                if (wide) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        height: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "m3-rail-geometry",
                            style: {
                                position: "absolute",
                                left: rail.headerLeft,
                                top: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RAIL_TOP"],
                                width: 48,
                                height: 48,
                                display: "grid",
                                placeItems: "center",
                                color: p.onSurfaceVariant
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                name: expanded ? "menu_open" : "menu",
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1417,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1416,
                            columnNumber: 11
                        }, this),
                        tabs.map((tab, i)=>{
                            const on = i === Math.min(item.selected ?? 0, Math.max(0, tabs.length - 1));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "m3-rail-geometry",
                                style: {
                                    position: "absolute",
                                    left: rail.inset,
                                    top: rail.top + i * (rail.itemHeight + rail.gap),
                                    width: rail.width - rail.inset * 2,
                                    height: rail.itemHeight
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "m3-rail-geometry",
                                        style: {
                                            position: "absolute",
                                            left: expanded ? 0 : 8,
                                            top: 0,
                                            width: expanded ? rail.width - rail.inset * 2 : 56,
                                            height: expanded ? 56 : 32,
                                            borderRadius: expanded ? 28 : 16,
                                            background: on ? p.secondaryContainer : "transparent"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/M3Node.tsx",
                                        lineNumber: 1422,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "m3-rail-geometry",
                                        style: {
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            width: 24,
                                            height: 24,
                                            transform: `translate(${expanded ? 16 : 24}px, ${expanded ? 16 : 4}px)`,
                                            color: on ? p.onSecondaryContainer : p.onSurfaceVariant
                                        },
                                        children: tab.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            name: tab.icon,
                                            size: 24,
                                            fill: on
                                        }, void 0, false, {
                                            fileName: "[project]/components/M3Node.tsx",
                                            lineNumber: 1424,
                                            columnNumber: 30
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/M3Node.tsx",
                                        lineNumber: 1423,
                                        columnNumber: 15
                                    }, this),
                                    tab.label.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "m3-rail-geometry",
                                        style: {
                                            position: "absolute",
                                            left: expanded ? 48 : 0,
                                            top: expanded ? 18 : 36,
                                            width: expanded ? rail.width - 88 : 72,
                                            textAlign: expanded ? "left" : "center",
                                            fontSize: expanded ? 14 : 12,
                                            lineHeight: "20px",
                                            fontWeight: on ? w(600, 700) : w(400, 500),
                                            color: on ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["railSelectedLabelColor"])(p, expanded) : p.onSurfaceVariant,
                                            ...ellipsis
                                        },
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/M3Node.tsx",
                                        lineNumber: 1426,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1421,
                                columnNumber: 20
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1415,
                    columnNumber: 9
                }, this);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RAIL_GAP"],
                        height: "100%",
                        padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RAIL_TOP"]}px 0`,
                        boxSizing: "border-box",
                        position: "relative"
                    },
                    children: tabs.map((t, i)=>{
                        const on = i === Math.min(item.selected ?? 0, Math.max(0, tabs.length - 1));
                        const withLabel = t.label.trim().length > 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 4,
                                width: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RAIL_W"] - 12,
                                height: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RAIL_ITEM_H"],
                                flex: "0 0 auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 56,
                                        height: 32,
                                        borderRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleR"])(16),
                                        display: "grid",
                                        placeItems: "center",
                                        background: on ? p.secondaryContainer : "transparent",
                                        color: on ? p.onSecondaryContainer : p.onSurfaceVariant,
                                        transition: "background 160ms, color 160ms"
                                    },
                                    children: t.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        name: t.icon,
                                        size: 22,
                                        fill: on
                                    }, void 0, false, {
                                        fileName: "[project]/components/M3Node.tsx",
                                        lineNumber: 1472,
                                        columnNumber: 30
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1460,
                                    columnNumber: 17
                                }, this),
                                withLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 11,
                                        fontWeight: on ? w(600, 700) : w(400, 500),
                                        color: on ? p.onSurface : p.onSurfaceVariant,
                                        maxWidth: "100%",
                                        ...ellipsis
                                    },
                                    children: t.label
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1475,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1448,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1432,
                    columnNumber: 9
                }, this);
            }
        case "bottomNav":
            {
                const tabs = item.tabs ?? [];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        height: "100%",
                        padding: `0 4px ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_BAR_H"]}px`,
                        boxSizing: "border-box",
                        position: "relative"
                    },
                    children: tabs.map((t, i)=>{
                        const on = i === Math.min(item.selected ?? 0, Math.max(0, tabs.length - 1));
                        const withLabel = t.label.trim().length > 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 4,
                                flex: 1,
                                minWidth: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 56,
                                        height: 32,
                                        borderRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleR"])(16),
                                        display: "grid",
                                        placeItems: "center",
                                        background: on ? p.secondaryContainer : "transparent",
                                        color: on ? p.onSecondaryContainer : p.onSurfaceVariant,
                                        transition: "background 160ms, color 160ms"
                                    },
                                    children: t.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        name: t.icon,
                                        size: 22,
                                        fill: on
                                    }, void 0, false, {
                                        fileName: "[project]/components/M3Node.tsx",
                                        lineNumber: 1535,
                                        columnNumber: 30
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1523,
                                    columnNumber: 17
                                }, this),
                                withLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 11,
                                        fontWeight: on ? w(600, 700) : w(400, 500),
                                        color: on ? p.onSurface : p.onSurfaceVariant,
                                        maxWidth: "100%",
                                        ...ellipsis
                                    },
                                    children: t.label
                                }, void 0, false, {
                                    fileName: "[project]/components/M3Node.tsx",
                                    lineNumber: 1538,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1512,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1497,
                    columnNumber: 9
                }, this);
            }
        case "circularProgress":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircularProgress"], {
                size: item.size ?? 48,
                color: p.primary,
                trackColor: p.secondaryContainer,
                wavy: item.wavy,
                trackThickness: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["progressThickness"])(item),
                value: item.value === undefined ? undefined : item.value / 100
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1559,
                columnNumber: 9
            }, this);
        case "linearProgress":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    height: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearProgress"], {
                    width: item.size ?? 320,
                    color: p.primary,
                    trackColor: p.secondaryContainer,
                    wavy: item.wavy,
                    trackThickness: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["progressThickness"])(item),
                    value: item.value === undefined ? undefined : item.value / 100
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1572,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1571,
                columnNumber: 9
            }, this);
        case "fabMenu":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FabMenuContent, {
                item: item,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/M3Node.tsx",
                lineNumber: 1584,
                columnNumber: 14
            }, this);
        case "toolbar":
            {
                const tabs = item.tabs ?? [];
                const vibrant = item.variant === "filled";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "0 8px",
                        height: "100%",
                        boxSizing: "border-box"
                    },
                    children: tabs.map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: 48,
                                height: 48,
                                borderRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleR"])(24),
                                display: "grid",
                                placeItems: "center",
                                color: vibrant ? p.onPrimaryContainer : p.onSurfaceVariant,
                                flex: "0 0 auto"
                            },
                            children: tab.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                name: tab.icon,
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1604,
                                columnNumber: 28
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1592,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1590,
                    columnNumber: 9
                }, this);
            }
        case "tabs":
            {
                const tabs = item.tabs ?? [];
                const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isScrollableTabs"])(item);
                const offset = tabScroll ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tabScrollOffset"])(item, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeOf"])(item, {}).w);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "stretch",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden"
                    },
                    children: [
                        tabs.map((tab, i)=>{
                            const on = i === Math.min(item.selected ?? 0, Math.max(0, tabs.length - 1));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: scroll ? "none" : 1,
                                    width: scroll ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TAB_W"] : undefined,
                                    marginLeft: scroll && i === 0 ? -offset : undefined,
                                    minWidth: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    position: "relative",
                                    padding: "0 8px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 14,
                                            fontWeight: w(500, 700),
                                            color: on ? p.primary : p.onSurfaceVariant,
                                            padding: "0 4px 14px",
                                            maxWidth: "100%",
                                            ...ellipsis
                                        },
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/M3Node.tsx",
                                        lineNumber: 1635,
                                        columnNumber: 17
                                    }, this),
                                    on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            position: "absolute",
                                            left: "50%",
                                            bottom: 0,
                                            transform: "translateX(-50%)",
                                            width: `calc(100% - 24px)`,
                                            height: 3,
                                            borderTopLeftRadius: 3,
                                            borderTopRightRadius: 3,
                                            background: p.primary
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/M3Node.tsx",
                                        lineNumber: 1648,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/M3Node.tsx",
                                lineNumber: 1620,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: 1,
                                background: p.outlineVariant
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/M3Node.tsx",
                            lineNumber: 1665,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1616,
                    columnNumber: 9
                }, this);
            }
        case "loadingIndicator":
            {
                const s = item.size ?? 48;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingIndicator"], {
                    size: s,
                    color: item.contained ? p.onPrimaryContainer : p.primary,
                    contained: item.contained,
                    containerColor: p.primaryContainer
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1673,
                    columnNumber: 9
                }, this);
            }
    }
    return null;
}
function contentColor(item, p) {
    const c = item.kind === "splitButton" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variantStyle"])(item.variant, p).color : boxStyle(item, p).color;
    return typeof c === "string" ? c : p.onSurface;
}
function boxStyle(item, p) {
    if (NO_BOX.includes(item.kind) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuOpen"])(item)) return {
        background: "transparent",
        border: "none"
    };
    switch(item.kind){
        case "box":
        case "bottomSheet":
            {
                const t = item.fill ?? "surfaceContainerLow";
                return {
                    background: p[t],
                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onToken"])(t, p),
                    border: "none"
                };
            }
        case "button":
        case "iconButton":
        case "fab":
        case "extendedFab":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variantStyle"])(item.variant, p);
        case "chip":
            if (item.checked) return {
                background: p.secondaryContainer,
                color: p.onSecondaryContainer,
                border: "none"
            };
            return item.variant === "outlined" ? {
                background: "transparent",
                color: p.onSurfaceVariant,
                border: `1px solid ${p.outlineVariant}`
            } : {
                background: p.surfaceContainerLow,
                color: p.onSurfaceVariant,
                border: "none"
            };
        case "card":
            return {
                background: p[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardFillOf"])(item)],
                border: item.variant === "outlined" ? `1px solid ${p.outlineVariant}` : "none"
            };
        case "textField":
        case "select":
            return item.variant === "filled" ? {
                background: p.surfaceContainerHighest,
                border: "none",
                color: p.onSurface
            } : {
                background: p.surface,
                border: `1px solid ${p.outline}`,
                color: p.onSurface
            };
        case "topAppBar":
        case "bottomNav":
        case "navRail":
            return {
                background: p.surfaceContainer,
                border: "none",
                color: p.onSurface
            };
        case "toolbar":
            return item.variant === "filled" ? {
                background: p.primaryContainer,
                border: "none",
                color: p.onPrimaryContainer
            } : {
                background: p.surfaceContainer,
                border: "none",
                color: p.onSurfaceVariant
            };
        case "tabs":
            return {
                background: p.surface,
                border: "none",
                color: p.onSurface
            };
        case "searchBar":
            return item.variant === "outlined" ? {
                background: p.surface,
                border: `1px solid ${p.outline}`,
                color: p.onSurface
            } : {
                background: p.surfaceContainerHigh,
                border: "none",
                color: p.onSurface
            };
        case "dialog":
            return {
                background: p.surfaceContainerHigh,
                border: "none",
                color: p.onSurface
            };
        case "datePicker":
            /* typed in, a date is a field on the screen rather than a surface over it */ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateLayoutOf"])(item) === "input" ? {
                background: "transparent",
                border: "none",
                color: p.onSurface
            } : {
                background: p.surfaceContainerHigh,
                border: "none",
                color: p.onSurface
            };
        case "timePicker":
            return {
                background: p.surfaceContainerHigh,
                border: "none",
                color: p.onSurface
            };
        case "snackbar":
            return {
                background: p.inverseSurface,
                border: "none",
                color: p.inverseOnSurface
            };
        case "image":
        case "map":
            return {
                background: p.surfaceContainerHighest,
                border: "none"
            };
        case "camera":
            return {
                background: p.inverseSurface,
                border: "none",
                color: p.inverseOnSurface
            };
        case "listItem":
            {
                const t = item.fill ?? "surfaceContainerLow";
                return {
                    background: p[t],
                    border: "none",
                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onToken"])(t, p)
                };
            }
        default:
            return {
                background: p.surfaceContainerHigh,
                border: "none",
                color: p.onSurface
            };
    }
}
function shadowOf(item) {
    if (NO_BOX.includes(item.kind) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuOpen"])(item)) return "none";
    switch(item.kind){
        case "navRail":
            return item.railModal && item.railExpanded ? "0 2px 6px rgba(0,0,0,0.16), 0 1px 2px rgba(0,0,0,0.10)" : "none";
        case "button":
        case "iconButton":
        case "extendedFab":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variantShadow"])(item.variant);
        case "fab":
            return "0 3px 8px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.12)";
        case "card":
            return item.variant === "elevated" ? "0 1px 3px rgba(0,0,0,0.20), 0 2px 6px rgba(0,0,0,0.10)" : "none";
        case "dialog":
            return "0 8px 24px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)";
        case "timePicker":
            return "0 8px 24px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)";
        case "datePicker":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateLayoutOf"])(item) === "input" ? "none" : "0 8px 24px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)";
        case "snackbar":
            return "0 3px 8px rgba(0,0,0,0.18)";
        case "toolbar":
            return "0 2px 6px rgba(0,0,0,0.14), 0 1px 2px rgba(0,0,0,0.10)";
        default:
            return "none";
    }
}
/** Corner radii are driven continuously by the magnet; a stiff spring keeps them on the pointer. */ const RADIUS_TWEEN = {
    type: "spring",
    stiffness: 900,
    damping: 48,
    mass: 0.4
};
function M3Node({ item, palette, radii, widths, pressed, dragging, selected, inRun = false, interactive = true, onPointerDown, tabScroll, instant, ripple, lit }) {
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const instantRail = reducedMotion && item.kind === "navRail" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWideRail"])(item);
    const radiusTransition = instantRail ? {
        duration: 0
    } : RADIUS_TWEEN;
    /* a menu on its way out is still drawn open, so the part is measured and boxed as it looks */ const menu = useMenuPhase(item);
    const drawn = menu.drawn && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuOpen"])(item) ? {
        ...item,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fabOpen"]]: true
    } : item;
    const r = radii ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseRadii"])(item);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeOf"])(drawn, widths);
    const measured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMeasured"])(drawn);
    const clips = !NO_BOX.includes(item.kind) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuOpen"])(drawn) && item.kind !== "textField" && item.kind !== "select";
    /* only the button family lights up from inside; everything else is left as it was drawn */ const lights = !!ripple && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RIPPLE_KINDS"].includes(item.kind);
    const ripples = useRipples(lights);
    /* the light a part carries in from wherever it was dropped belongs to the same family: a bar
   * landing on a screen simply arrives, it does not light up */ const carried = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RIPPLE_KINDS"].includes(item.kind) ? lit : null;
    /* a given light belongs to the shape it was given inside: on a split button, the half the
   * finger is on */ const litPart = carried && item.kind === "splitButton" ? carried.x > size.w - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitMetrics"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonHeightOf"])(item)).trailW ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPLIT_MAIN_SLOT"] : null;
    /* how far the light had already spread where it came from: read once, when it arrives, so the
   * circle picks up where the other drawing left off and keeps going at the same pace. It is read
   * off the clock only when a new light arrives, never on a render that merely repeats. */ const litSpread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!carried) return null;
        const gone = carried.grown ? RIPPLE_GROW : carried.at ? Math.max(0, (performance.now() - carried.at) / 1000) : 0;
        return {
            from: Math.min(1, gone / RIPPLE_GROW),
            dur: Math.max(0, RIPPLE_GROW - gone)
        };
    }, [
        carried
    ]);
    const shown = carried ? [
        ...ripples.list,
        {
            id: 0,
            part: litPart,
            x: carried.x,
            y: carried.y,
            d: rippleSize({
                width: size.w,
                height: size.h
            }, carried.x, carried.y),
            from: litSpread?.from,
            dur: litSpread?.dur
        }
    ] : ripples.list;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        "data-node": item.id,
        "data-kind": item.kind,
        "data-wide-rail": item.kind === "navRail" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWideRail"])(item) ? "true" : undefined,
        onPointerDown: (e)=>{
            ripples.add(e);
            onPointerDown?.(e);
        },
        onPointerCancel: ripples.end,
        initial: false,
        animate: {
            borderTopLeftRadius: r.tl,
            borderBottomLeftRadius: r.bl,
            borderTopRightRadius: r.tr,
            borderBottomRightRadius: r.br,
            scale: pressed ? 0.97 : 1
        },
        transition: {
            borderTopLeftRadius: radiusTransition,
            borderBottomLeftRadius: radiusTransition,
            borderTopRightRadius: radiusTransition,
            borderBottomRightRadius: radiusTransition,
            scale: instantRail ? {
                duration: 0
            } : {
                type: "spring",
                stiffness: 700,
                damping: 30,
                mass: 0.5
            }
        },
        style: {
            ...boxStyle(drawn, palette),
            width: measured ? undefined : size.w,
            height: size.h,
            display: measured ? "inline-flex" : "block",
            alignItems: "center",
            overflow: clips ? "hidden" : "visible",
            /* the selection ring sticks out 5px (3px offset + 2px ring); in a run the next
           sibling sits 3px away and would overpaint that edge — lift the selected part.
           Runs never overlap, so the lift only beats the sibling that hides the ring.
           Lone parts in free groups may overlap by design: keep their layer order. */ position: selected && inRun ? "relative" : undefined,
            zIndex: selected && inRun ? 1 : undefined,
            cursor: !interactive ? "default" : dragging ? "grabbing" : "grab",
            userSelect: "none",
            touchAction: "none",
            boxSizing: "border-box",
            boxShadow: shadowOf(drawn),
            outline: selected ? `2px solid ${palette.primary}` : "2px solid transparent",
            outlineOffset: 3,
            /* a part that changes size with its screen, or with the size the author picked,
           eases the way the screen does; a measured part has no width of its own to ease */ transition: instant || menu.snap ? "outline-color 120ms" : `outline-color 120ms, height ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SETTLE_MS"]}ms cubic-bezier(0.2, 0, 0, 1)${measured ? "" : `, width ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SETTLE_MS"]}ms cubic-bezier(0.2, 0, 0, 1)`}`,
            flex: "0 0 auto"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RippleCtx.Provider, {
            value: {
                list: shown,
                color: contentColor(drawn, palette)
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Body, {
                    item: drawn,
                    p: palette,
                    tabScroll: tabScroll,
                    menuShown: menu.open
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1929,
                    columnNumber: 9
                }, this),
                (lights || !!carried) && item.kind !== "splitButton" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RippleShape, {
                    part: null
                }, void 0, false, {
                    fileName: "[project]/components/M3Node.tsx",
                    lineNumber: 1932,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/M3Node.tsx",
            lineNumber: 1928,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 1875,
        columnNumber: 5
    }, this);
}
function M3Static({ item, palette, radii, style }) {
    const r = radii ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseRadii"])(item);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeOf"])(item, {});
    const measured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMeasured"])(item);
    const clips = !NO_BOX.includes(item.kind) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuOpen"])(item) && item.kind !== "textField" && item.kind !== "select";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...boxStyle(item, palette),
            width: measured ? undefined : size.w,
            height: size.h,
            display: measured ? "inline-flex" : "block",
            alignItems: "center",
            overflow: clips ? "hidden" : "visible",
            boxSizing: "border-box",
            boxShadow: shadowOf(item),
            borderTopLeftRadius: r.tl,
            borderTopRightRadius: r.tr,
            borderBottomLeftRadius: r.bl,
            borderBottomRightRadius: r.br,
            flex: "0 0 auto",
            ...style
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Body, {
            item: item,
            p: palette
        }, void 0, false, {
            fileName: "[project]/components/M3Node.tsx",
            lineNumber: 1973,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/M3Node.tsx",
        lineNumber: 1955,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_M3Node_tsx_0chny_5._.js.map