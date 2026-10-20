module.exports = [
"[project]/components/PartInspector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartInspector",
    ()=>PartInspector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CardStage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CardStage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Loading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PartPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-ssr] (ecmascript)");
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
/** The four shapes an indicator can take, drawn small with the very geometry the part itself is
 *  drawn with: a straight track or one travelling in a wave, laid out or bent into a ring. A
 *  picture says which is which faster than the words "linear" and "wavy" ever did, and picking
 *  one sets both the shape and the wave in a single tap. */ const PROGRESS_LOOKS = [
    {
        key: "bar",
        kind: "linearProgress",
        wavy: false,
        label: "progressBar"
    },
    {
        key: "wavyBar",
        kind: "linearProgress",
        wavy: true,
        label: "progressWavyBar"
    },
    {
        key: "ring",
        kind: "circularProgress",
        wavy: false,
        label: "progressRing"
    },
    {
        key: "wavyRing",
        kind: "circularProgress",
        wavy: true,
        label: "progressWavyRing"
    }
];
/* the thumbnail is a part 44dp wide: the same wave, the same gap before the track, a quarter of
 * the size the real one is drawn at */ const THUMB_W = 44;
const THUMB_H = 28;
/** the wave is shortened for the picture, so a thumbnail this small still reads as a wave */ const THUMB_WAVELENGTH = 13;
function ProgressThumb({ look, on, p }) {
    const ink = on ? p.onPrimary : p.onSurfaceVariant;
    const track = on ? p.onPrimary : p.outlineVariant;
    const stroke = {
        fill: "none",
        strokeWidth: 2.8,
        strokeLinecap: "round"
    };
    const mid = THUMB_H / 2;
    const bar = look.kind === "linearProgress";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: THUMB_W,
        height: THUMB_H,
        viewBox: `0 0 ${THUMB_W} ${THUMB_H}`,
        "aria-hidden": true,
        children: bar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wavePath"])(4, 26, mid, look.wavy ? 3 : 0, 0, THUMB_WAVELENGTH),
                    stroke: ink,
                    ...stroke
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wavePath"])(31, 40, mid, 0, 0, 1),
                    stroke: track,
                    opacity: on ? 0.4 : 0.7,
                    ...stroke
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PartInspector.tsx",
            lineNumber: 93,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arcPath"])(THUMB_W / 2, mid, 10, -90, 150, look.wavy ? 0.7 : 0, 7, 0),
                    stroke: ink,
                    ...stroke
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arcPath"])(THUMB_W / 2, mid, 10, 180, 255, 0, 7, 0),
                    stroke: track,
                    opacity: on ? 0.4 : 0.7,
                    ...stroke
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PartInspector.tsx",
            lineNumber: 98,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
/** Those four as one connected run, each cell a picture of what it makes and nothing else: the
 *  drawing is the label. Picking one sets the shape and the wave together. */ function ProgressTypePicker({ item, onChange, p }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const current = PROGRESS_LOOKS.find((l)=>l.kind === item.kind && l.wavy === !!item.wavy) ?? PROGRESS_LOOKS[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
        options: PROGRESS_LOOKS.map((look)=>({
                key: look.key,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(look.label, lang),
                node: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressThumb, {
                    look: look,
                    on: look.key === current.key,
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 117,
                    columnNumber: 15
                }, this)
            })),
        value: current.key,
        onChange: (k)=>{
            const look = PROGRESS_LOOKS.find((l)=>l.key === k);
            onChange({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["progressTypePatch"])(item, look.kind),
                wavy: look.wavy || undefined
            });
        },
        p: p,
        height: 44,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("partType", lang)
    }, void 0, false, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
/** What the indicator is saying, as two icons standing on their own at the start of the row: the
 *  loop it circles in with no end in sight, or the share it counts up to -- and that share is the
 *  slider that fills the rest of the row, which is there only when there is a share to set. */ function ProgressValue({ item, onChange, p }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const pct = item.value !== undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
                options: [
                    {
                        key: "loop",
                        icon: "autorenew",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("progressLoop", lang)
                    },
                    {
                        key: "percent",
                        icon: "percent",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("progressPercent", lang)
                    }
                ],
                value: pct ? "percent" : "loop",
                onChange: (k)=>onChange({
                        value: k === "percent" ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRESS_DEFAULT_VALUE"] : undefined
                    }),
                p: p,
                grow: false,
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("state", lang)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            pct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minWidth: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                    iconNode: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 153,
                        columnNumber: 29
                    }, this),
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("progressState", lang),
                    value: item.value ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRESS_DEFAULT_VALUE"],
                    min: 0,
                    max: 100,
                    step: 1,
                    onChange: (value)=>onChange({
                            value
                        }),
                    p: p,
                    unit: "%"
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
/** A layout drawn as the row of cards it actually makes: the same widths the part is built from,
 *  read as shares of the row, so the picture in the cell is the arrangement itself. */ function CarouselThumb({ layout, on, p }) {
    const shares = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardWidths"])(layout, 100, 4);
    const ink = on ? p.onPrimary : p.onSurfaceVariant;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
        style: {
            display: "flex",
            gap: 1.5,
            width: 44,
            height: 22,
            overflow: "hidden"
        },
        children: shares.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: `${w}%`,
                    flex: "0 0 auto",
                    borderRadius: 3,
                    background: ink,
                    opacity: i === 0 ? 1 : 0.45
                }
            }, i, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
/** M3's four arrangements as one connected run of those pictures, with no words: the drawing
 *  says how the cards are laid out better than "multi-browse" ever could. */ function CarouselLayoutPicker({ item, onChange, p }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselLayoutOf"])(item);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
        options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAROUSEL_LAYOUTS"].map((l)=>({
                key: l.key,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(l.text, lang),
                node: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselThumb, {
                    layout: l.key,
                    on: l.key === current,
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 184,
                    columnNumber: 15
                }, this)
            })),
        value: current,
        onChange: (layout)=>onChange({
                layout
            }),
        p: p,
        height: 44,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("layout", lang)
    }, void 0, false, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
/** The cards themselves as one connected run: each cell shows the picture that card carries, or
 *  its number while it has none, and the one picked out is the card the controls under it -- and
 *  the trigger tab -- are about. A card a tap is sent from wears the run's own mark. */ function CardStrip({ item, selected, onSelect, p }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselCardsOf"])(item);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
        options: cards.map((card, i)=>({
                key: String(i),
                title: `${i + 1}`,
                dot: !!item.actions?.[`tab:${i}`],
                node: card.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    style: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        overflow: "hidden"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: card.src,
                            alt: "",
                            draggable: false,
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this),
                        i === selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: "absolute",
                                inset: 0,
                                borderRadius: "inherit",
                                border: `3px solid ${p.primary}`,
                                boxSizing: "border-box"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 212,
                            columnNumber: 32
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 12,
                        fontWeight: 700
                    },
                    children: i + 1
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this)
            })),
        value: String(selected),
        onChange: (k)=>onSelect(Number(k)),
        p: p,
        height: 44,
        tight: true,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("cards", lang)
    }, void 0, false, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
/** the places a bar can be tapped, as one connected run: the icons at its ends, or the entries
 *  along it, each cell the icon the place shows and a mark when a tap has been sent from it */ function SlotStrip({ item, selected, onSelect, p }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["actionSlotsOf"])(item);
    /* a tab's words are too long for a cell: the cell carries its number and the words are the hover text */ const numbered = item.kind === "tabs";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
        options: slots.map((s, i)=>({
                key: s.key,
                icon: s.value ?? undefined,
                label: s.value ? undefined : numbered ? `${i + 1}` : s.label,
                title: s.label,
                dot: !!item.actions?.[s.key]
            })),
        value: selected,
        onChange: onSelect,
        p: p,
        height: 40,
        tight: slots.length > 4,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("tapTo", lang)
    }, void 0, false, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
/** A choice's state, as the control itself drawn as an icon beside its words: one tap turns it
 *  on or off, and the icon is the whole of what changes -- a switch's icon slides across. */ function ChoiceToggle({ item, onChange, p }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const on = !!item.checked;
    const icon = item.kind === "switch" ? on ? "toggle_on" : "toggle_off" : item.kind === "checkbox" ? on ? "check_box" : "check_box_outline_blank" : on ? "radio_button_checked" : "radio_button_unchecked";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onChange({
                checked: !on
            }),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("on", lang),
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("on", lang),
        "aria-pressed": on,
        className: "m3-press",
        style: {
            width: 44,
            height: 44,
            flex: "0 0 auto",
            borderRadius: 22,
            border: "none",
            background: "transparent",
            padding: 0,
            color: on ? p.primary : p.onSurfaceVariant,
            cursor: "pointer",
            display: "grid",
            placeItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
            name: icon,
            size: item.kind === "switch" ? 30 : 24,
            fill: on
        }, void 0, false, {
            fileName: "[project]/components/PartInspector.tsx",
            lineNumber: 263,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
/** the words on a part: its label, and the second line it may carry under it */ function TextRows({ item, onChange, p, labelKey = "label", supportingKey = "supporting", paragraph = false, bold = false }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const spec = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KIND_SPEC"][item.kind];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 10
        },
        children: [
            spec.hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                            value: item.label,
                            onChange: (label)=>onChange({
                                    label
                                }),
                            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(labelKey, lang),
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isChoice"])(item.kind) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceToggle, {
                        item: item,
                        onChange: onChange,
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 279,
                        columnNumber: 35
                    }, this),
                    bold && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
                        options: [
                            {
                                key: "regular",
                                icon: "format_size",
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("regular", lang)
                            },
                            {
                                key: "bold",
                                icon: "format_bold",
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("bold", lang)
                            }
                        ],
                        value: item.bold ? "bold" : "regular",
                        onChange: (k)=>onChange({
                                bold: k === "bold" || undefined
                            }),
                        p: p,
                        grow: false,
                        height: 44,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("bold", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 281,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 275,
                columnNumber: 9
            }, this),
            spec.hasSupporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                value: item.supporting ?? "",
                onChange: (supporting)=>onChange({
                        supporting
                    }),
                placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(supportingKey, lang),
                p: p,
                multiline: paragraph,
                rows: paragraph ? 2 : undefined,
                grow: paragraph,
                maxHeight: paragraph ? 140 : undefined
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
/** the size of a line of text: the M3 type scale it stands on, and the sp between its steps */ function TextSizeRows({ item, onChange, p }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const spec = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KIND_SPEC"][item.kind];
    const size = item.size ?? spec.defSize ?? 28;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                icon: "format_size",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("fontSize", lang),
                value: size,
                min: spec.size.min,
                max: spec.size.max,
                step: 1,
                onChange: (v)=>onChange({
                        size: v
                    }),
                p: p,
                unit: "sp"
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
                options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT_SIZES"].map((s, i)=>({
                        key: s.key,
                        label: [
                            "S",
                            "M",
                            "L",
                            "XL"
                        ][i],
                        title: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(s.key === "body" ? "typeBody" : s.key === "title" ? "typeTitle" : s.key === "headline" ? "typeHeadline" : "typeDisplay", lang)} ${s.value}sp`,
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RUN_CELL"]
                    })),
                value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT_SIZES"].find((s)=>s.value === size)?.key ?? "",
                onChange: (k)=>onChange({
                        size: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT_SIZES"].find((s)=>s.key === k).value
                    }),
                p: p,
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("fontSize", lang),
                tight: true
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
}
/** a navigation rail's two states and where the expanded one goes: pictures of the rail itself */ function RailThumb({ expanded, modal, on, p }) {
    const ink = on ? p.onPrimary : p.onSurfaceVariant;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
        style: {
            display: "flex",
            width: 44,
            height: 26,
            borderRadius: 4,
            overflow: "hidden",
            border: `1.5px solid ${ink}`,
            boxSizing: "border-box",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: expanded ? 20 : 9,
                    height: "100%",
                    background: ink,
                    opacity: modal ? 0.55 : 1,
                    flex: "0 0 auto"
                }
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    left: 9,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    background: ink,
                    opacity: 0.15
                }
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 339,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
function RailRows({ item, onChange, p, standalone }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const wide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWideRail"])(item);
    const value = !wide ? "" : item.railExpanded ? item.railModal ? "modal" : "expanded" : "collapsed";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
        options: [
            {
                key: "collapsed",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("railCollapsed", lang),
                node: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RailThumb, {
                    expanded: false,
                    on: value === "collapsed",
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 351,
                    columnNumber: 68
                }, this)
            },
            {
                key: "expanded",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("railExpanded", lang),
                node: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RailThumb, {
                    expanded: true,
                    on: value === "expanded",
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 352,
                    columnNumber: 66
                }, this)
            },
            /* a rail that shares its group with other parts cannot overlay them, so the modal state waits until it stands alone */ ...standalone ? [
                {
                    key: "modal",
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("railModal", lang),
                    node: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RailThumb, {
                        expanded: true,
                        modal: true,
                        on: value === "modal",
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 354,
                        columnNumber: 78
                    }, this)
                }
            ] : []
        ],
        value: value,
        onChange: (k)=>onChange({
                railExpanded: k !== "collapsed",
                railModal: k === "modal" ? true : wide ? false : undefined
            }),
        p: p,
        height: 44,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("railState", lang)
    }, void 0, false, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 349,
        columnNumber: 5
    }, this);
}
function PartInspector({ ai, item, palette: p, frame, onChange, onDelete, onDuplicate, locked, onToggleLock, onPlace, selfRect, allFrames, measured, railStandalone = false }) {
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("design");
    const spec = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KIND_SPEC"][item.kind];
    const frameW = frame ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).w : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_W"];
    const frameH = frame ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).h : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_H"];
    const [picked, setCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    /** the place inside a bar the trigger tab is about */ const [slot, setSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    /* another part being picked starts the panel on its first card, and its first place, again */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCard(0);
        setSlot("");
    }, [
        item.id
    ]);
    /** the carousel card the panel is about: its picture, and where a tap on it goes. A row that
   *  has lost cards leaves the pick on the last one still there. */ const card = item.kind === "carousel" ? Math.max(0, Math.min(picked, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselCountOf"])(item) - 1)) : picked;
    /* a bar is measured across the screen; a ring is measured corner to corner */ const bar = item.kind === "linearProgress";
    const { w: width, h: height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeOf"])(item, measured ? {
        [item.id]: measured
    } : {});
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["actionSlotsOf"])(item);
    const slotKey = slots.some((s)=>s.key === slot) ? slot : slots[0]?.key ?? "";
    const kind = item.kind;
    /* a list item's trailing end may hold a switch instead of an icon: the picker offers the switch
   * off and on beside "no icon", and the cell shows whichever the part wears */ const trailing = kind === "listItem" && item.switch ? item.checked ? "toggle_on" : "toggle_off" : item.icon2 ?? null;
    const iconSlots = [
        {
            key: "icon",
            value: item.icon,
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(spec.hasIcon && (kind === "listItem" || kind === "topAppBar" || kind === "searchBar") ? "leading" : "icon", lang)
        },
        ...kind === "listItem" || kind === "topAppBar" || kind === "searchBar" ? [
            {
                key: "icon2",
                value: trailing,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("trailing", lang),
                extras: kind === "listItem" ? [
                    {
                        icon: "toggle_off",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("switchOff", lang)
                    },
                    {
                        icon: "toggle_on",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("switchOn", lang)
                    }
                ] : undefined
            }
        ] : []
    ];
    const pickIcon = (key, icon)=>{
        if (kind === "listItem" && key === "icon2") {
            if (icon === "toggle_on" || icon === "toggle_off") {
                onChange({
                    switch: true,
                    checked: icon === "toggle_on",
                    icon2: undefined
                });
                return;
            }
            onChange({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setIconSlot"])(item, key, icon),
                switch: undefined
            });
            return;
        }
        onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setIconSlot"])(item, key, icon));
    };
    const widthRows = (auto = false)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WidthRows"], {
            value: width,
            min: spec.size?.min ?? 40,
            max: spec.size?.max ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_W"],
            step: spec.size?.step ?? 4,
            frameW: frameW,
            onChange: (size)=>onChange({
                    size
                }),
            p: p,
            auto: auto
        }, void 0, false, {
            fileName: "[project]/components/PartInspector.tsx",
            lineNumber: 441,
            columnNumber: 5
        }, this);
    const heightRow = (presets)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 10
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                    icon: "height",
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("height", lang),
                    value: height,
                    min: spec.size2?.min ?? 24,
                    max: Math.max(spec.size2?.max === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_H"] ? frameH : spec.size2?.max ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHONE_H"], height),
                    step: spec.size2?.step ?? 4,
                    onChange: (size2)=>onChange({
                            size2
                        }),
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 445,
                    columnNumber: 7
                }, this),
                presets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NamedSizes"], {
                    steps: presets,
                    value: height,
                    onChange: (size2)=>onChange({
                            size2
                        }),
                    p: p,
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("height", lang)
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 446,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PartInspector.tsx",
            lineNumber: 444,
            columnNumber: 5
        }, this);
    const sizeSection = (children)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
            id: "part-size",
            icon: "straighten",
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("size", lang),
            p: p,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 20
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/PartInspector.tsx",
            lineNumber: 450,
            columnNumber: 5
        }, this);
    const design = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProgress"])(kind) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-type",
                icon: "progress_activity",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("partType", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressTypePicker, {
                    item: item,
                    onChange: onChange,
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 460,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 459,
                columnNumber: 9
            }, this),
            (kind === "topAppBar" || kind === "searchBar" || kind === "listItem") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-text",
                icon: "short_text",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("text", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconRow"], {
                            slots: iconSlots,
                            onPick: pickIcon,
                            p: p,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                value: item.label,
                                onChange: (label)=>onChange({
                                        label
                                    }),
                                placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(kind === "searchBar" ? "placeholder" : kind === "topAppBar" ? "title" : "label", lang),
                                p: p
                            }, void 0, false, {
                                fileName: "[project]/components/PartInspector.tsx",
                                lineNumber: 470,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 469,
                            columnNumber: 13
                        }, this),
                        spec.hasSupporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                            value: item.supporting ?? "",
                            onChange: (supporting)=>onChange({
                                    supporting
                                }),
                            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("supporting", lang),
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 472,
                            columnNumber: 36
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 467,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 466,
                columnNumber: 9
            }, this),
            (kind === "dialog" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isField"])(kind)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-text",
                icon: "short_text",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("text", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconRow"], {
                            slots: iconSlots,
                            onPick: (key, icon)=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setIconSlot"])(item, key, icon)),
                            p: p,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                value: item.label,
                                onChange: (label)=>onChange({
                                        label
                                    }),
                                placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(kind === "dialog" ? "title" : "label", lang),
                                p: p
                            }, void 0, false, {
                                fileName: "[project]/components/PartInspector.tsx",
                                lineNumber: 480,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 479,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                            value: item.supporting ?? "",
                            onChange: (supporting)=>onChange({
                                    supporting
                                }),
                            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(kind === "dialog" ? "body" : "supporting", lang),
                            p: p,
                            multiline: kind === "dialog",
                            rows: kind === "dialog" ? 2 : undefined,
                            grow: kind === "dialog",
                            maxHeight: 140
                        }, void 0, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 482,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 478,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 477,
                columnNumber: 9
            }, this),
            kind === "snackbar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-text",
                icon: "short_text",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("text", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextRows, {
                    item: item,
                    onChange: onChange,
                    p: p,
                    labelKey: "message",
                    supportingKey: "action"
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 497,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 496,
                columnNumber: 9
            }, this),
            kind === "card" && /* the words themselves; where they sit is set on the drawing of the card below */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-text",
                icon: "short_text",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("text", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextRows, {
                    item: item,
                    onChange: onChange,
                    p: p,
                    labelKey: "title",
                    supportingKey: "body",
                    paragraph: true
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 503,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 502,
                columnNumber: 9
            }, this),
            ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isChoice"])(kind) || kind === "text") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-text",
                icon: "short_text",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("text", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextRows, {
                    item: item,
                    onChange: onChange,
                    p: p,
                    bold: kind === "text"
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 508,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 507,
                columnNumber: 9
            }, this),
            (kind === "bottomNav" || kind === "navRail" || kind === "tabs" || kind === "select") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-entries",
                icon: kind === "select" ? "list" : "view_column",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(kind === "select" ? "options" : "tabs", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EntryList"], {
                    item: item,
                    onChange: onChange,
                    p: p,
                    icons: kind !== "tabs" && kind !== "select",
                    selectable: true,
                    clearable: kind === "select"
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 515,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 514,
                columnNumber: 9
            }, this),
            kind === "toolbar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-entries",
                icon: "view_column",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("tabs", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconStrip"], {
                    item: item,
                    onChange: onChange,
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 520,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 519,
                columnNumber: 9
            }, this),
            kind === "card" && /* The card drawn small, with its picture and its words where they are on it: the
           picture is dragged to an edge or into the middle and pulled bigger by its inner edge,
           the words are dragged up or down. The button at the start puts the picture on or off. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-image",
                icon: "image",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("cardLayout", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onChange({
                                            noImage: item.noImage ? undefined : true
                                        }),
                                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(item.noImage ? "image" : "noImageLayout", lang),
                                    "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("image", lang),
                                    "aria-pressed": !item.noImage,
                                    className: "m3-press",
                                    style: {
                                        width: 32,
                                        height: 32,
                                        flex: "0 0 auto",
                                        borderRadius: 16,
                                        border: "none",
                                        padding: 0,
                                        background: item.noImage ? p.surfaceContainerHigh : p.secondaryContainer,
                                        color: item.noImage ? p.onSurfaceVariant : p.onSecondaryContainer,
                                        cursor: "pointer",
                                        display: "grid",
                                        placeItems: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: item.noImage ? "hide_image" : "image",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/PartInspector.tsx",
                                        lineNumber: 553,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PartInspector.tsx",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CardStage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardStage"], {
                                    item: item,
                                    onChange: onChange,
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/PartInspector.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 531,
                            columnNumber: 13
                        }, this),
                        !item.noImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageRow"], {
                            value: item.src,
                            onChange: (src)=>onChange({
                                    src
                                }),
                            p: p
                        }, item.id, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 557,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 530,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 529,
                columnNumber: 9
            }, this),
            kind === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-image",
                icon: "image",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("image", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageRow"], {
                    value: item.src,
                    onChange: (src)=>onChange({
                            src
                        }),
                    p: p
                }, item.id, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 563,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 562,
                columnNumber: 9
            }, this),
            kind === "carousel" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                        id: "part-layout",
                        icon: "view_carousel",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("layout", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselLayoutPicker, {
                            item: item,
                            onChange: onChange,
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 569,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 568,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                        id: "part-cards",
                        icon: "photo_library",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("cards", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                                    icon: "view_column",
                                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("cards", lang),
                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselCountOf"])(item),
                                    min: 2,
                                    max: 8,
                                    step: 1,
                                    onChange: (count)=>onChange({
                                            count
                                        }),
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/PartInspector.tsx",
                                    lineNumber: 573,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardStrip, {
                                    item: item,
                                    selected: card,
                                    onSelect: setCard,
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/PartInspector.tsx",
                                    lineNumber: 574,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselCardsOf"])(item)[card]?.label ?? "",
                                    onChange: (label)=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselCardPatch"])(item, card, {
                                            label
                                        })),
                                    placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("label", lang),
                                    p: p,
                                    multiline: true,
                                    rows: 2,
                                    maxHeight: 140
                                }, void 0, false, {
                                    fileName: "[project]/components/PartInspector.tsx",
                                    lineNumber: 577,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageRow"], {
                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselCardsOf"])(item)[card]?.src,
                                    onChange: (src)=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselCardPatch"])(item, card, {
                                            src
                                        })),
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/PartInspector.tsx",
                                    lineNumber: 586,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 572,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 571,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 567,
                columnNumber: 9
            }, this),
            kind === "datePicker" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-layout",
                icon: "calendar_month",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("layout", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATE_LAYOUTS"].map((l)=>({
                            key: l.key,
                            icon: l.icon,
                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(l.text, lang)
                        })),
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateLayoutOf"])(item),
                    onChange: (layout)=>onChange({
                            layout
                        }),
                    p: p,
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("layout", lang)
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 596,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 595,
                columnNumber: 9
            }, this),
            kind === "timePicker" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-layout",
                icon: "schedule",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("layout", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIME_LAYOUTS"].map((l)=>({
                            key: l.key,
                            icon: l.icon,
                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(l.text, lang)
                        })),
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeLayoutOf"])(item),
                    onChange: (layout)=>onChange({
                            layout
                        }),
                    p: p,
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("layout", lang)
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 607,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 606,
                columnNumber: 9
            }, this),
            (kind === "card" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isField"])(kind) || kind === "toolbar" || kind === "searchBar") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-style",
                icon: "palette",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("style", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyleRun"], {
                    kind: kind,
                    value: item.variant,
                    onChange: (variant)=>onChange({
                            variant
                        }),
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 620,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 619,
                columnNumber: 9
            }, this),
            kind === "listItem" && /* a list item wears one of a few looks, the way a FAB does: the row's colour and the
           disc behind its icon are set together, so the icon always reads on the row */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-style",
                icon: "palette",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("style", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListStyleRun"], {
                    item: item,
                    onChange: onChange,
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 627,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 626,
                columnNumber: 9
            }, this),
            (kind === "box" || kind === "bottomSheet") && /* a box's style is the theme role it is painted in */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-style",
                icon: "palette",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("style", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FillRun"], {
                    value: item.fill ?? "surfaceContainerLow",
                    onChange: (fill)=>onChange({
                            fill
                        }),
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 633,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 632,
                columnNumber: 9
            }, this),
            kind === "navRail" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-rail",
                icon: "side_navigation",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("railState", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RailRows, {
                    item: item,
                    onChange: onChange,
                    p: p,
                    standalone: railStandalone
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 640,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 639,
                columnNumber: 9
            }, this),
            kind === "loadingIndicator" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-state",
                icon: "tune",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("state", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                    on: !!item.contained,
                    onChange: (contained)=>onChange({
                            contained
                        }),
                    p: p,
                    icon: "circle",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("container", lang),
                    grow: true
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 645,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 644,
                columnNumber: 9
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProgress"])(kind) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-state",
                icon: "tune",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("state", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressValue, {
                    item: item,
                    onChange: onChange,
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 650,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 649,
                columnNumber: 9
            }, this),
            kind === "slider" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-state",
                icon: "tune",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("state", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                    icon: "percent",
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("progressState", lang),
                    value: item.value ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SLIDER_DEFAULT_VALUE"],
                    min: 0,
                    max: 100,
                    step: 1,
                    onChange: (value)=>onChange({
                            value
                        }),
                    p: p,
                    unit: "%"
                }, void 0, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 655,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 654,
                columnNumber: 9
            }, this),
            kind === "text" && sizeSection(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextSizeRows, {
                item: item,
                onChange: onChange,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 660,
                columnNumber: 39
            }, this)),
            kind === "topAppBar" && sizeSection(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    widthRows(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NamedSizes"], {
                        steps: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOP_BAR_SIZES"].map((b)=>({
                                key: b.key,
                                value: b.h
                            })),
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topBarHeightOf"])(item),
                        onChange: (size2)=>onChange({
                                size2
                            }),
                        p: p,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("height", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 666,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgeCornerRows"], {
                        item: item,
                        onChange: onChange,
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 667,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 663,
                columnNumber: 11
            }, this)),
            (kind === "bottomNav" || kind === "tabs") && sizeSection(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    widthRows(),
                    kind === "bottomNav" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgeCornerRows"], {
                        item: item,
                        onChange: onChange,
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 674,
                        columnNumber: 38
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 672,
                columnNumber: 11
            }, this)),
            kind === "navRail" && sizeSection(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    heightRow([
                        {
                            key: "half",
                            value: Math.round(frameH / 2)
                        },
                        {
                            key: "full",
                            value: frameH
                        }
                    ]),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EdgeCornerRows"], {
                        item: item,
                        onChange: onChange,
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 684,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 679,
                columnNumber: 11
            }, this)),
            (kind === "searchBar" || kind === "listItem" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isField"])(kind) || kind === "divider") && sizeSection(widthRows()),
            kind === "switch" && sizeSection(widthRows(true)),
            kind === "card" && sizeSection(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    widthRows(),
                    heightRow(spec.size2.presets.map((v)=>({
                            key: v === 120 ? "s" : v === 188 ? "m" : "l",
                            value: v
                        }))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CornerRows"], {
                        item: item,
                        onChange: onChange,
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 694,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 691,
                columnNumber: 11
            }, this)),
            (kind === "box" || kind === "bottomSheet" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPicture"])(kind)) && sizeSection(/* a box, a sheet and a picture are measured down first, then across; a camera and a map
             keep the corners their kind gives them, and a sheet rounds only its top */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    heightRow(kind === "box" || kind === "bottomSheet" ? [
                        {
                            key: "half",
                            value: Math.round(frameH / 2)
                        },
                        {
                            key: "full",
                            value: frameH
                        }
                    ] : undefined),
                    widthRows(),
                    (kind === "box" || kind === "image") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CornerRows"], {
                        item: item,
                        onChange: onChange,
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 711,
                        columnNumber: 54
                    }, this),
                    kind === "bottomSheet" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                        icon: "rounded_corner",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("cornerTop", lang),
                        value: item.radiusTop ?? 28,
                        min: 0,
                        max: 48,
                        step: 1,
                        onChange: (radiusTop)=>onChange({
                                radiusTop
                            }),
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 713,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 701,
                columnNumber: 11
            }, this)),
            kind === "carousel" && sizeSection(/* a carousel runs the width of the screen it is on: its height is the one measure its author sets */ heightRow(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAROUSEL_HEIGHTS"])),
            (kind === "datePicker" || kind === "timePicker") && sizeSection(widthRows()),
            kind === "slider" && sizeSection(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                        icon: "width",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("width", lang),
                        value: item.size ?? spec.w,
                        min: Math.min(spec.size.min, item.size ?? spec.w),
                        max: Math.max(frameW, spec.size.max),
                        step: spec.size.step,
                        onChange: (size)=>onChange({
                                size
                            }),
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 726,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NamedSizes"], {
                        steps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barWidths"])(frameW),
                        value: item.size ?? spec.w,
                        onChange: (size)=>onChange({
                                size
                            }),
                        p: p,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("width", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 727,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 725,
                columnNumber: 11
            }, this)),
            kind === "loadingIndicator" && sizeSection(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                        icon: "open_in_full",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("size", lang),
                        value: item.size ?? spec.w,
                        min: spec.size.min,
                        max: spec.size.max,
                        step: spec.size.step,
                        onChange: (size)=>onChange({
                                size
                            }),
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 733,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NamedSizes"], {
                        steps: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOADING_SIZES"],
                        value: item.size ?? spec.w,
                        onChange: (size)=>onChange({
                                size
                            }),
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 734,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 732,
                columnNumber: 11
            }, this)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProgress"])(kind) && sizeSection(/* the two measures are each a slider over its named sizes, with room between them so
             the eye can tell which row belongs to which -- the same as a button's panel. How
             thick the track is comes first: a ring can only be so thick before its gap eats it. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                        icon: "line_weight",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("trackThickness", lang),
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["progressThickness"])(item),
                        min: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRACK_MIN"],
                        max: kind === "circularProgress" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxRingThickness"])(item.size ?? spec.w) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRACK_MAX"],
                        step: 1,
                        onChange: (v)=>onChange({
                                trackThickness: v === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRACK_DEFAULT"] ? undefined : v
                            }),
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 743,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                                icon: bar ? "width" : "open_in_full",
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(bar ? "width" : "size", lang),
                                value: item.size ?? spec.w,
                                min: Math.min(spec.size.min, item.size ?? spec.w),
                                max: bar ? Math.max(frameW, spec.size.max) : spec.size.max,
                                step: spec.size.step,
                                onChange: (size)=>onChange({
                                        size
                                    }),
                                p: p
                            }, void 0, false, {
                                fileName: "[project]/components/PartInspector.tsx",
                                lineNumber: 754,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NamedSizes"], {
                                steps: bar ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barWidths"])(frameW) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RING_SIZES"],
                                value: item.size ?? spec.w,
                                onChange: (size)=>onChange({
                                        size
                                    }),
                                p: p
                            }, void 0, false, {
                                fileName: "[project]/components/PartInspector.tsx",
                                lineNumber: 764,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 753,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 742,
                columnNumber: 11
            }, this)),
            onPlace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "part-align",
                icon: "grid_on",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])("align", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlignBox"], {
                    onPlace: onPlace,
                    p: p
                }, item.id, false, {
                    fileName: "[project]/components/PartInspector.tsx",
                    lineNumber: 771,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 770,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 456,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelShell"], {
        p: p,
        locked: !!locked,
        onUnlock: onToggleLock,
        head: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PartHeader"], {
            kind: item.kind,
            p: p,
            locked: !!locked,
            onDuplicate: onDuplicate,
            onToggleLock: onToggleLock,
            onDelete: onDelete
        }, void 0, false, {
            fileName: "[project]/components/PartInspector.tsx",
            lineNumber: 782,
            columnNumber: 13
        }, this),
        tabs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PartTabs"], {
            value: tab,
            onChange: setTab,
            p: p
        }, void 0, false, {
            fileName: "[project]/components/PartInspector.tsx",
            lineNumber: 783,
            columnNumber: 13
        }, this),
        children: [
            tab === "design" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                id: "part-panel-design",
                "aria-labelledby": "part-tab-design",
                children: design
            }, void 0, false, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 786,
                columnNumber: 9
            }, this),
            tab === "behavior" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                id: "part-panel-behavior",
                "aria-labelledby": "part-tab-behavior",
                children: [
                    kind === "carousel" ? /* every card is a place of its own to be sent from: the row picks which one */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TriggerSection"], {
                        item: item,
                        frame: frame,
                        allFrames: allFrames,
                        selfRect: selfRect,
                        onChange: onChange,
                        p: p,
                        slot: `tab:${card}`,
                        head: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardStrip, {
                            item: item,
                            selected: card,
                            onSelect: setCard,
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 794,
                            columnNumber: 150
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 794,
                        columnNumber: 13
                    }, this) : slots.length > 0 ? /* a bar is tapped at its icons or along its entries: the row picks which place */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TriggerSection"], {
                        item: item,
                        frame: frame,
                        allFrames: allFrames,
                        selfRect: selfRect,
                        onChange: onChange,
                        p: p,
                        slot: slotKey,
                        head: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SlotStrip, {
                            item: item,
                            selected: slotKey,
                            onSelect: setSlot,
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/PartInspector.tsx",
                            lineNumber: 797,
                            columnNumber: 144
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 797,
                        columnNumber: 13
                    }, this) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasTrigger"])(kind) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TriggerSection"], {
                        item: item,
                        frame: frame,
                        allFrames: allFrames,
                        selfRect: selfRect,
                        onChange: onChange,
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 799,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoTriggerNote"], {
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 801,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoteSection"], {
                        item: item,
                        ai: ai,
                        onChange: onChange,
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartInspector.tsx",
                        lineNumber: 803,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartInspector.tsx",
                lineNumber: 791,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartInspector.tsx",
        lineNumber: 778,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_PartInspector_tsx_0dgxe_2._.js.map