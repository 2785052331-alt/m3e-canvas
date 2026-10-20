(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AiPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiPanel",
    ()=>AiPanel,
    "AiWriteBtn",
    ()=>AiWriteBtn,
    "aiErrorText",
    ()=>aiErrorText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function aiErrorText(e, lang) {
    const m = e instanceof Error ? e.message : String(e);
    if (m === "refusal") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiErrorRefusal", lang);
    if (m === "json" || m === "empty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiErrorJson", lang);
    if (m === "model") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiErrorModel", lang);
    if (m === "insecure") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiErrorInsecure", lang);
    if (/failed to fetch|networkerror|load failed/i.test(m)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiErrorNetwork", lang);
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiError", lang)}: ${m}`;
}
function AiWriteBtn({ p, busy, disabled, onClick, onCancel, label, title }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const shown = busy ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("cancel", lang) : title;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: busy ? onCancel : onClick,
        disabled: disabled,
        title: shown,
        "aria-label": shown,
        className: "m3-press",
        style: {
            height: 40,
            padding: "0 16px 0 12px",
            borderRadius: 20,
            border: "none",
            background: disabled ? p.surfaceContainerHighest : p.primary,
            color: disabled ? p.onSurfaceVariant : p.onPrimary,
            fontSize: 13,
            fontWeight: 600,
            cursor: disabled ? "default" : "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            flex: "0 0 auto",
            opacity: disabled ? 0.6 : 1,
            whiteSpace: "nowrap"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: busy ? "m3-spin" : undefined,
                style: {
                    display: "inline-flex"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: busy ? "progress_activity" : "auto_awesome",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/AiPanel.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AiPanel.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "grid"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            gridArea: "1 / 1",
                            visibility: busy ? "hidden" : "visible"
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/AiPanel.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            gridArea: "1 / 1",
                            visibility: busy ? "visible" : "hidden",
                            textAlign: "center"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("cancel", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/AiPanel.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AiPanel.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AiPanel.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(AiWriteBtn, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = AiWriteBtn;
const BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BASE_PATH ?? "";
const field = (p)=>({
        width: "100%",
        height: 44,
        padding: "0 14px",
        borderRadius: 22,
        border: `1px solid ${p.outlineVariant}`,
        background: p.surface,
        color: p.onSurface,
        fontSize: 13,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        outline: "none",
        boxSizing: "border-box"
    });
function Input({ value, onChange, placeholder, p, type = "text", label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        value: value,
        onChange: (e)=>onChange(e.target.value),
        placeholder: placeholder,
        "aria-label": label,
        spellCheck: false,
        autoComplete: "off",
        style: field(p)
    }, void 0, false, {
        fileName: "[project]/components/AiPanel.tsx",
        lineNumber: 80,
        columnNumber: 10
    }, this);
}
_c1 = Input;
const Label = ({ children, p, right })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "baseline",
            gap: 8,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 0.4,
            color: p.onSurfaceVariant,
            marginBottom: 6,
            padding: "0 4px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    flex: 1
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/AiPanel.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            right
        ]
    }, void 0, true, {
        fileName: "[project]/components/AiPanel.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = Label;
/** The providers as one connected button group; each segment shows the provider's mark in the button's color. */ function ProviderGroup({ value, onChange, p }) {
    _s1();
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROVIDERS"].length;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const move = (from, delta)=>{
        const to = (from + delta + n) % n;
        onChange(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROVIDERS"][to].key);
        ref.current?.children[to]?.focus();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "radiogroup",
        style: {
            display: "flex",
            gap: 3
        },
        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROVIDERS"].map((pr, i)=>{
            const on = pr.key === value;
            const outer = 22;
            const inner = 8;
            const l = i === 0 ? outer : inner;
            const r = i === n - 1 ? outer : inner;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                role: "radio",
                "aria-checked": on,
                tabIndex: on ? 0 : -1,
                title: pr.label,
                "aria-label": pr.label,
                onClick: ()=>onChange(pr.key),
                onKeyDown: (e)=>{
                    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                        e.preventDefault();
                        move(i, 1);
                    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                        e.preventDefault();
                        move(i, -1);
                    }
                },
                className: "m3-press",
                style: {
                    flex: 1,
                    height: 44,
                    border: "none",
                    borderRadius: `${l}px ${r}px ${r}px ${l}px`,
                    background: on ? p.primary : p.surfaceContainerHigh,
                    color: on ? p.onPrimary : p.onSurfaceVariant,
                    cursor: "pointer",
                    display: "grid",
                    placeItems: "center",
                    transition: "background 160ms, color 160ms"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    style: {
                        width: 22,
                        height: 22,
                        display: "block",
                        background: "currentColor",
                        WebkitMaskImage: `url(${BASE}/logos/${pr.key}.svg)`,
                        maskImage: `url(${BASE}/logos/${pr.key}.svg)`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/AiPanel.tsx",
                    lineNumber: 139,
                    columnNumber: 13
                }, this)
            }, pr.key, false, {
                fileName: "[project]/components/AiPanel.tsx",
                lineNumber: 108,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/AiPanel.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s1(ProviderGroup, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
_c3 = ProviderGroup;
function AiPanel({ p, settings, onSettings }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["providerSpec"])(settings.provider);
    const pick = (k)=>{
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["providerSpec"])(k);
        onSettings({
            ...settings,
            provider: k,
            baseUrl: s.baseUrl,
            model: s.model
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-scrollbar",
        style: {
            height: "100%",
            overflowY: "auto",
            padding: "12px 12px 20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.4,
                    color: p.onSurfaceVariant,
                    padding: "8px 6px 12px"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiSettings", lang)
            }, void 0, false, {
                fileName: "[project]/components/AiPanel.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "0 4px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 14
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    p: p,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiProvider", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/AiPanel.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderGroup, {
                                    value: settings.provider,
                                    onChange: pick,
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/AiPanel.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AiPanel.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    p: p,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiModel", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/AiPanel.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiModel", lang),
                                    value: settings.model,
                                    onChange: (model)=>onSettings({
                                            ...settings,
                                            model
                                        }),
                                    placeholder: spec.model || "model",
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/AiPanel.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AiPanel.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    p: p,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiBaseUrl", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/AiPanel.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiBaseUrl", lang),
                                    value: settings.baseUrl,
                                    onChange: (baseUrl)=>onSettings({
                                            ...settings,
                                            baseUrl
                                        }),
                                    placeholder: spec.baseUrl,
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/AiPanel.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AiPanel.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    p: p,
                                    right: spec.keysUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: spec.keysUrl,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        style: {
                                            fontSize: 12,
                                            fontWeight: 600,
                                            color: p.primary
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiGetKey", lang)
                                    }, void 0, false, {
                                        fileName: "[project]/components/AiPanel.tsx",
                                        lineNumber: 193,
                                        columnNumber: 19
                                    }, this),
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiKey", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/AiPanel.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiKey", lang),
                                    value: settings.key,
                                    onChange: (key)=>onSettings({
                                            ...settings,
                                            key
                                        }),
                                    placeholder: "sk-…",
                                    p: p,
                                    type: "password"
                                }, void 0, false, {
                                    fileName: "[project]/components/AiPanel.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        lineHeight: 1.5,
                                        color: p.onSurfaceVariant,
                                        marginTop: 8,
                                        padding: "0 4px"
                                    },
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiKeyHint", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/AiPanel.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AiPanel.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AiPanel.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AiPanel.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AiPanel.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s2(AiPanel, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = AiPanel;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "AiWriteBtn");
__turbopack_context__.k.register(_c1, "Input");
__turbopack_context__.k.register(_c2, "Label");
__turbopack_context__.k.register(_c3, "ProviderGroup");
__turbopack_context__.k.register(_c4, "AiPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ButtonInspector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonInspector",
    ()=>ButtonInspector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IconPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/IconPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TapStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TapStage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PartPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
/** the two shapes a FAB takes, as one connected run: the circle and the one with a label.
 *  Picking one turns the part into it, keeping what they share. */ function FabTypeRow({ value, onChange, p }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const words = {
        fab: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("fabPlain", lang),
        extendedFab: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("fabExtended", lang)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
        options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAB_KINDS"].map((k)=>({
                key: k,
                label: words[k],
                title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"][lang][k]?.noun ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][k].label
            })),
        value: value,
        onChange: onChange,
        p: p,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partType", lang)
    }, void 0, false, {
        fileName: "[project]/components/ButtonInspector.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(FabTypeRow, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = FabTypeRow;
/** a small mark at the start of a row that says which look the row edits: the normal one or the "on" one */ function StateMark({ on, p, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        title: title,
        "aria-label": title,
        style: {
            width: 24,
            flex: "0 0 auto",
            display: "grid",
            placeItems: "center",
            color: on ? p.primary : p.outline
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            name: on ? "check_circle" : "radio_button_unchecked",
            size: 20,
            fill: on
        }, void 0, false, {
            fileName: "[project]/components/ButtonInspector.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ButtonInspector.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c1 = StateMark;
/** the toggle button itself on a small stage: tapping it flips between its two looks, and the
 *  corner says which one is showing */ function ToggleStage({ item, shownOn, onPick, p, measured }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    /* the stage keeps the width the button was given; a button wider than the panel is drawn to scale */ const look = shownOn ? {
        ...item,
        label: item.toggle?.label ?? item.label,
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleIcon"])(item),
        variant: item.toggle?.variant ?? item.variant
    } : item;
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [avail, setAvail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToggleStage.useEffect": ()=>{
            const el = stage.current;
            if (!el) return;
            const ro = new ResizeObserver({
                "ToggleStage.useEffect": ()=>setAvail(el.clientWidth)
            }["ToggleStage.useEffect"]);
            ro.observe(el);
            setAvail(el.clientWidth);
            return ({
                "ToggleStage.useEffect": ()=>ro.disconnect()
            })["ToggleStage.useEffect"];
        }
    }["ToggleStage.useEffect"], []);
    /* a button wider than the stage is zoomed out until it fits, and stays centred either way */ const wide = item.size ?? measured;
    const k = wide && avail ? Math.min(1, (avail - 32) / wide) : 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: stage,
        style: {
            position: "relative",
            height: 132,
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: p.surfaceContainerLow,
            backgroundImage: `radial-gradient(${p.outlineVariant} 1px, transparent 1px)`,
            backgroundSize: "12px 12px",
            display: "grid",
            placeItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onPick(!shownOn),
                "aria-pressed": shownOn,
                title: shownOn ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("onState", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("normalState", lang),
                className: "m3-press",
                style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    border: "none",
                    background: "transparent",
                    padding: 0,
                    cursor: "pointer",
                    transform: `translate(-50%, -50%)${k < 1 ? ` scale(${k})` : ""}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M3Static"], {
                    item: look,
                    palette: p,
                    style: {
                        transition: "background 200ms, color 200ms"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ButtonInspector.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ButtonInspector.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                style: {
                    position: "absolute",
                    right: 10,
                    top: 10,
                    color: p.outline,
                    display: "inline-flex"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "touch_app",
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/components/ButtonInspector.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ButtonInspector.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ButtonInspector.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s1(ToggleStage, "snWahusNWIV3GF7lJSi9QOnxxZs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = ToggleStage;
function ButtonInspector({ ai, item, palette: p, frame, onChange, onDelete, onDuplicate, locked, onToggleLock, onPlace, measured, selfRect, allFrames, onShowOn, onShowMenu }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const spec = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][item.kind];
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("design");
    /** which entry of a FAB menu the trigger tab is setting */ const [slot, setSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("tab:0");
    /** which segment of a split button the trigger tab is setting */ const [seg, setSeg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("main");
    /** which icon slot the picker edits: the normal look or the "on" look */ const [picker, setPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    /** the canvas shows the "on" look while the on-row is being edited */ const [shownOn, setShownOnState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const setShownOn = (on)=>{
        setShownOnState(on);
        onShowOn?.(on);
    };
    /* the canvas draws the on look only while this panel asks for it, so another part being
   * picked takes the ask back with it */ const showOn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onShowOn);
    showOn.current = onShowOn;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ButtonInspector.useEffect": ()=>{
            setPicker("none");
            setShownOnState(false);
            showOn.current?.(false);
        }
    }["ButtonInspector.useEffect"], [
        item.id
    ]);
    /* the canvas shows the menu while this tab is open, and the button again when it is not. The
   * callback is read through a ref: a parent that hands over a new one each render must not
   * take the menu down and put it back up every time. */ const menuShown = tab === "behavior" && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasMenu"])(item) || item.kind === "splitButton" && seg === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"]);
    const showMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onShowMenu);
    showMenu.current = onShowMenu;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ButtonInspector.useEffect": ()=>{
            showMenu.current?.(menuShown);
            return ({
                "ButtonInspector.useEffect": ()=>showMenu.current?.(false)
            })["ButtonInspector.useEffect"];
        }
    }["ButtonInspector.useEffect"], [
        menuShown
    ]);
    const isIcon = item.kind === "iconButton";
    const fab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFab"])(item.kind);
    /* a chip is as wide as its label makes it, and carries a selected look of its own */ const chip = item.kind === "chip";
    /* a split button is two segments: the label carries the part's own action, and the arrow
   * beside it -- the one that opens the menu -- is sent somewhere of its own */ const split = item.kind === "splitButton";
    /* a FAB may be asked to open a menu: the entries are its, and each has its own destination */ const isMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasMenu"])(item);
    const isExtended = item.kind === "extendedFab";
    /* the parts with no words of their own: their text section is the icon alone */ const iconOnly = isIcon || item.kind === "fab";
    const isToggle = !!item.toggle;
    const isLink = item.action?.to === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"];
    const setToggle = (patch)=>onChange({
            toggle: {
                ...item.toggle ?? {},
                ...patch
            }
        });
    /** what a tap does: nothing, flip the button's own look, go back, or open one of the screens */ const actionValue = isToggle ? "toggle" : item.action?.to ?? "none";
    const actionOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionOptionsOf"])(item, frame, allFrames, lang);
    const pickAction = (k)=>{
        if (k === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MENU_TARGET"]) {
            onChange({
                toggle: undefined,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuPatch"])(item, true)
            });
            return;
        }
        if (isMenu) onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuPatch"])(item, false));
        if (k === "toggle") {
            /* the on look starts out filled, the usual M3 pair; a filled button turns tonal instead.
       * A toggle button stays on its screen, so a destination it had is dropped with it. */ onChange({
                toggle: {
                    variant: item.variant === "filled" ? "tonal" : "filled"
                },
                action: undefined
            });
            return;
        }
        setShownOn(false);
        setPicker("none");
        if (k === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"]) {
            /* a link leaves the sketch for the browser, so no screen transition plays with it */ onChange({
                toggle: undefined,
                action: {
                    to: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"],
                    transition: "none",
                    url: item.action?.url
                }
            });
            return;
        }
        const transition = item.action && item.action.to !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"] ? item.action.transition : "slide";
        onChange({
            toggle: undefined,
            action: k === "none" ? undefined : {
                to: k,
                transition
            }
        });
    };
    const frameW = frame ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).w : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"];
    const step = (spec.size ?? spec.size2)?.step ?? 4;
    /* what the slider shows is the width on the canvas, even while the text sets it */ const width = item.size ?? measured ?? spec.w;
    /* the one measure each shape is given: a circle's diameter, a label's height, a button's height */ const height = chip ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chipHeightOf"])(item) : isExtended ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendedFabHeight"])(item) : item.kind === "fab" ? item.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"].fab.w : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonHeightOf"])(item);
    /* a button is a circle at its narrowest, so how short it is says how narrow it can be */ const minW = Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonHeightOf"])(item), width);
    /* a circle's one measure is its width; a button's is its height, and a width the author set
   * that is now narrower than the button is tall grows with it */ const setHeight = (v)=>onChange(isIcon || item.kind === "fab" ? {
            size: v
        } : isExtended || chip || split ? {
            size2: v
        } : item.size && item.size < v ? {
            size2: v,
            size: v
        } : {
            size2: v
        });
    /** what the segment being set up is sent to: the label segment is the part's own action,
   *  the arrow segment one slot of its own */ const segAction = seg === "main" ? item.action : item.actions?.[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"]];
    const setSegAction = (a)=>{
        if (seg === "main") {
            onChange({
                action: a
            });
            return;
        }
        const actions = {
            ...item.actions ?? {}
        };
        if (a) actions[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"]] = a;
        else delete actions[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"]];
        onChange({
            actions: Object.keys(actions).length ? actions : undefined
        });
    };
    /* the panel is setting up a menu: a FAB asked to open one, or a split button's arrow */ const menuEditor = isMenu || split && seg === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"];
    const pickSegAction = (k)=>{
        if (k === "none") return setSegAction(undefined);
        if (k === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"]) return setSegAction({
            to: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"],
            transition: "none",
            url: segAction?.url
        });
        setSegAction({
            to: k,
            transition: segAction && segAction.to !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"] ? segAction.transition : "slide"
        });
    };
    const iconBtn = (icon, faint, open, title, onClick)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCell"], {
            icon: icon,
            faint: faint,
            open: open,
            title: title,
            onClick: onClick,
            p: p
        }, void 0, false, {
            fileName: "[project]/components/ButtonInspector.tsx",
            lineNumber: 283,
            columnNumber: 111
        }, this);
    const onIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleIcon"])(item);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelShell"], {
        p: p,
        locked: !!locked,
        onUnlock: onToggleLock,
        head: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartHeader"], {
            kind: item.kind,
            p: p,
            locked: !!locked,
            onDuplicate: onDuplicate,
            onToggleLock: onToggleLock,
            onDelete: onDelete
        }, void 0, false, {
            fileName: "[project]/components/ButtonInspector.tsx",
            lineNumber: 291,
            columnNumber: 13
        }, this),
        tabs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartTabs"], {
            value: tab,
            onChange: setTab,
            p: p
        }, void 0, false, {
            fileName: "[project]/components/ButtonInspector.tsx",
            lineNumber: 292,
            columnNumber: 13
        }, this),
        children: [
            tab === "design" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                id: "part-panel-design",
                "aria-labelledby": "part-tab-design",
                children: [
                    fab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "fab-type",
                        icon: "add_circle",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("partType", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FabTypeRow, {
                            value: item.kind,
                            onChange: (k)=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fabTypePatch"])(item, k)),
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/ButtonInspector.tsx",
                            lineNumber: 298,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ButtonInspector.tsx",
                        lineNumber: 297,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "btn-text",
                        icon: iconOnly ? "insert_emoticon" : "short_text",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(iconOnly ? "icon" : "text", lang),
                        p: p,
                        onToggle: (open)=>{
                            if (!open) setPicker("none");
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 8,
                                        alignItems: "center"
                                    },
                                    children: [
                                        isToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StateMark, {
                                            on: false,
                                            p: p,
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("normalState", lang)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 304,
                                            columnNumber: 30
                                        }, this),
                                        !iconOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0
                                            },
                                            onFocusCapture: ()=>setShownOn(false),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                value: item.label,
                                                onChange: (label)=>onChange({
                                                        label
                                                    }),
                                                placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("label", lang),
                                                p: p
                                            }, void 0, false, {
                                                fileName: "[project]/components/ButtonInspector.tsx",
                                                lineNumber: 307,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 306,
                                            columnNumber: 19
                                        }, this),
                                        iconBtn(item.icon, false, picker === "icon", (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("icon", lang), ()=>{
                                            setShownOn(false);
                                            setPicker(picker === "icon" ? "none" : "icon");
                                        }),
                                        iconOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                flex: 1
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 314,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this),
                                picker === "icon" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IconPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPicker"], {
                                    value: item.icon,
                                    onChange: (icon)=>onChange({
                                            icon
                                        }),
                                    onClose: ()=>setPicker("none"),
                                    palette: p
                                }, void 0, false, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 316,
                                    columnNumber: 37
                                }, this),
                                isToggle && /* the on look: an empty box keeps the normal text, shown faintly as the placeholder */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 8,
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StateMark, {
                                            on: true,
                                            p: p,
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("onState", lang)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 320,
                                            columnNumber: 19
                                        }, this),
                                        !iconOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0
                                            },
                                            onFocusCapture: ()=>setShownOn(true),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                value: item.toggle?.label ?? "",
                                                onChange: (label)=>setToggle({
                                                        label: label || undefined
                                                    }),
                                                placeholder: item.label || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("label", lang),
                                                p: p
                                            }, void 0, false, {
                                                fileName: "[project]/components/ButtonInspector.tsx",
                                                lineNumber: 323,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 322,
                                            columnNumber: 21
                                        }, this),
                                        iconBtn(onIcon, item.toggle?.icon === undefined, picker === "toggle", (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("icon", lang), ()=>{
                                            setShownOn(true);
                                            setPicker(picker === "toggle" ? "none" : "toggle");
                                        }),
                                        iconOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                flex: 1
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 330,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 319,
                                    columnNumber: 17
                                }, this),
                                picker === "toggle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IconPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPicker"], {
                                    value: onIcon,
                                    onChange: (icon)=>setToggle({
                                            icon
                                        }),
                                    onClose: ()=>setPicker("none"),
                                    palette: p
                                }, void 0, false, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 333,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ButtonInspector.tsx",
                            lineNumber: 302,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ButtonInspector.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "btn-style",
                        icon: "palette",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("style", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 8,
                                        alignItems: "center"
                                    },
                                    children: [
                                        isToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StateMark, {
                                            on: false,
                                            p: p,
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("normalState", lang)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 339,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyleRun"], {
                                                kind: item.kind,
                                                value: item.variant,
                                                onChange: (variant)=>{
                                                    setShownOn(false);
                                                    onChange({
                                                        variant
                                                    });
                                                },
                                                p: p
                                            }, void 0, false, {
                                                fileName: "[project]/components/ButtonInspector.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this),
                                isToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 8,
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StateMark, {
                                            on: true,
                                            p: p,
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("onState", lang)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 354,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyleRun"], {
                                                kind: item.kind,
                                                value: item.toggle?.variant ?? item.variant,
                                                onChange: (variant)=>{
                                                    setShownOn(true);
                                                    setToggle({
                                                        variant
                                                    });
                                                },
                                                p: p
                                            }, void 0, false, {
                                                fileName: "[project]/components/ButtonInspector.tsx",
                                                lineNumber: 356,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 355,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 353,
                                    columnNumber: 17
                                }, this),
                                chip && /* a chip is either plain or picked out; the picked look is a style, so it is set here */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                    on: !!item.checked,
                                    onChange: (checked)=>onChange({
                                            checked
                                        }),
                                    p: p,
                                    icon: "check_circle",
                                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("selected", lang),
                                    grow: true
                                }, void 0, false, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 370,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ButtonInspector.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ButtonInspector.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "btn-size",
                        icon: "straighten",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("size", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 20
                            },
                            children: [
                                !isIcon && !fab && !chip && !split && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                            icon: "width",
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("width", lang),
                                            value: width,
                                            min: minW,
                                            max: frameW,
                                            step: step,
                                            onChange: (v)=>onChange({
                                                    size: v
                                                }),
                                            p: p
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 381,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidthRun"], {
                                            value: item.size,
                                            onChange: (size)=>onChange({
                                                    size
                                                }),
                                            frameW: frameW,
                                            p: p
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 382,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 380,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                            /* a part with one measure is sized corner to corner, and says so */ icon: isIcon || fab ? "open_in_full" : "height",
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(isIcon || fab ? "size" : "height", lang),
                                            value: height,
                                            min: chip ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHIP_H_MIN"] : fab ? isExtended ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"].extendedFab.h : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAB_H_MIN"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUTTON_H_MIN"],
                                            max: chip ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHIP_H_MAX"] : fab ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAB_H_MAX"] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUTTON_H_MAX"],
                                            step: step,
                                            onChange: setHeight,
                                            p: p
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 386,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NamedSizes"], {
                                            steps: chip ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHIP_SIZES"].map((c)=>({
                                                    key: c.key,
                                                    value: c.h
                                                })) : fab ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAB_SIZES"].map((f)=>({
                                                    key: f.key,
                                                    value: isExtended ? f.h : f.d
                                                })) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUTTON_SIZES"].map((b)=>({
                                                    key: b.key,
                                                    value: b.h
                                                })),
                                            value: height,
                                            onChange: setHeight,
                                            p: p,
                                            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(isIcon || fab ? "size" : "height", lang)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 398,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ButtonInspector.tsx",
                            lineNumber: 378,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ButtonInspector.tsx",
                        lineNumber: 374,
                        columnNumber: 11
                    }, this),
                    onPlace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "btn-align",
                        icon: "grid_on",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("align", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlignBox"], {
                            onPlace: onPlace,
                            p: p
                        }, item.id, false, {
                            fileName: "[project]/components/ButtonInspector.tsx",
                            lineNumber: 416,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ButtonInspector.tsx",
                        lineNumber: 415,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ButtonInspector.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this),
            tab === "behavior" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                id: "part-panel-behavior",
                "aria-labelledby": "part-tab-behavior",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "btn-action",
                        icon: "ads_click",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("tapTo", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 10
                            },
                            children: [
                                split && /* which half of the button is being set up: the one with the words, or the arrow */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                                    options: [
                                        {
                                            key: "main",
                                            icon: item.icon ?? undefined,
                                            label: item.icon ? undefined : item.label || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("splitMain", lang),
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("splitMain", lang),
                                            dot: !!item.action
                                        },
                                        {
                                            key: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"],
                                            icon: "keyboard_arrow_down",
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("splitMenu", lang),
                                            dot: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionSlotsOf"])(item).some((sl)=>!!item.actions?.[sl.key])
                                        }
                                    ],
                                    value: seg,
                                    onChange: setSeg,
                                    p: p,
                                    height: 40
                                }, void 0, false, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 428,
                                    columnNumber: 15
                                }, this),
                                !(split && seg === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPLIT_MENU_SLOT"]) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    options: actionOptions,
                                    value: split ? segAction?.to ?? "none" : isMenu ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MENU_TARGET"] : actionValue,
                                    onChange: split ? pickSegAction : pickAction,
                                    p: p,
                                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("tapTo", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this),
                                menuEditor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntryList"], {
                                            item: item,
                                            onChange: onChange,
                                            p: p
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionSlotsOf"])(item).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                                                    options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionSlotsOf"])(item).map((sl)=>({
                                                            key: sl.key,
                                                            icon: sl.value ?? undefined,
                                                            label: sl.value ? undefined : sl.label,
                                                            title: sl.label,
                                                            dot: !!item.actions?.[sl.key]
                                                        })),
                                                    value: slot,
                                                    onChange: setSlot,
                                                    p: p,
                                                    height: 40
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ButtonInspector.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    options: actionOptions.filter((o)=>o.key !== "toggle"),
                                                    value: item.actions?.[slot]?.to ?? "none",
                                                    onChange: (k)=>{
                                                        const actions = {
                                                            ...item.actions ?? {}
                                                        };
                                                        if (k === "none") delete actions[slot];
                                                        else actions[slot] = {
                                                            to: k,
                                                            transition: k === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"] ? "none" : actions[slot]?.transition ?? "slide",
                                                            url: actions[slot]?.url
                                                        };
                                                        onChange({
                                                            actions: Object.keys(actions).length ? actions : undefined
                                                        });
                                                    },
                                                    p: p,
                                                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("tapTo", lang)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ButtonInspector.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 453,
                                            columnNumber: 53
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 450,
                                    columnNumber: 15
                                }, this),
                                split && seg === "main" ? segAction?.to === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TapStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkStage"], {
                                    self: frame,
                                    selfRect: selfRect,
                                    action: segAction,
                                    onChange: setSegAction,
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 478,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TapStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TapStage"], {
                                    frames: allFrames,
                                    self: frame,
                                    selfRect: selfRect,
                                    action: segAction,
                                    onChange: setSegAction,
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 480,
                                    columnNumber: 17
                                }, this) : menuEditor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actionSlotsOf"])(item).length === 0 ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TapStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TapStage"], {
                                    frames: allFrames,
                                    self: frame,
                                    selfRect: selfRect,
                                    action: item.actions?.[slot],
                                    onChange: (a)=>{
                                        const actions = {
                                            ...item.actions ?? {}
                                        };
                                        if (a) actions[slot] = a;
                                        else delete actions[slot];
                                        onChange({
                                            actions: Object.keys(actions).length ? actions : undefined
                                        });
                                    },
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this) : isToggle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleStage, {
                                            item: item,
                                            shownOn: shownOn,
                                            onPick: setShownOn,
                                            p: p,
                                            measured: measured
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 500,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                lineHeight: 1.5,
                                                color: p.onSurfaceVariant,
                                                padding: "0 4px"
                                            },
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("toggleLookHint", lang)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ButtonInspector.tsx",
                                            lineNumber: 501,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 499,
                                    columnNumber: 15
                                }, this) : isLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TapStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkStage"], {
                                    self: frame,
                                    selfRect: selfRect,
                                    action: item.action,
                                    onChange: (action)=>onChange({
                                            action
                                        }),
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 504,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TapStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TapStage"], {
                                    frames: allFrames,
                                    self: frame,
                                    selfRect: selfRect,
                                    action: item.action,
                                    onChange: (action)=>onChange({
                                            action
                                        }),
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/ButtonInspector.tsx",
                                    lineNumber: 506,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ButtonInspector.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ButtonInspector.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoteSection"], {
                        item: item,
                        ai: ai,
                        onChange: onChange,
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/ButtonInspector.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ButtonInspector.tsx",
                lineNumber: 423,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ButtonInspector.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
_s2(ButtonInspector, "v8u72brkdQTw3imB6xOloYDL3Y0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c3 = ButtonInspector;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FabTypeRow");
__turbopack_context__.k.register(_c1, "StateMark");
__turbopack_context__.k.register(_c2, "ToggleStage");
__turbopack_context__.k.register(_c3, "ButtonInspector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CardStage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardStage",
    ()=>CardStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* A card drawn small on a stage of its own, the way the trigger tab draws a screen, with the
 * things on it where they are on the card: the picture and the words. The picture is dragged to
 * the edge it should sit on, or into the middle to lie behind the words; its inner edge is pulled
 * to make it bigger or smaller; the words are dragged to any of nine places. Nothing on the stage
 * is named, because the drawing is the card -- but everything that can be moved says so under
 * the pointer: it lights up, wears a ring, and while it is held the places it can go are drawn. */ /** the tallest the drawing is; the widest is the stage it stands on */ const CARD_MAX_H = 120;
const CARD_MIN = 56;
/** the grip on the picture's inner edge */ const GRIP = 18;
const GRIP_THICK = 5;
/** the two lines the words are drawn as */ const LINES_H = 16;
/** how wide the stage is, so the drawing can be scaled to it */ function useWidth() {
    _s();
    const el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [w, setW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWidth.useEffect": ()=>{
            const node = el.current;
            if (!node) return;
            const ro = new ResizeObserver({
                "useWidth.useEffect": ()=>setW(node.clientWidth)
            }["useWidth.useEffect"]);
            ro.observe(node);
            setW(node.clientWidth);
            return ({
                "useWidth.useEffect": ()=>ro.disconnect()
            })["useWidth.useEffect"];
        }
    }["useWidth.useEffect"], []);
    return [
        el,
        w
    ];
}
_s(useWidth, "VMPE1xbJ3BUey20VE1m6BWOZ1rI=");
/** where a point inside the card asks the picture to go: the middle means behind the words,
 *  anywhere else the nearest edge */ function posAt(x, y, w, h) {
    const nx = x / w;
    const ny = y / h;
    if (nx > 0.3 && nx < 0.7 && ny > 0.3 && ny < 0.7) return "background";
    /* the nearest edge, each measured as a share of its own side so a wide card is not all top and bottom */ const d = {
        top: ny,
        bottom: 1 - ny,
        leading: nx,
        trailing: 1 - nx
    };
    return Object.keys(d).reduce((a, b)=>d[b] < d[a] ? b : a);
}
/** a share of a side, read as one of its three places */ const third = (n)=>n < 1 / 3 ? "start" : n > 2 / 3 ? "end" : "center";
/** a drag that follows the pointer until it is let go */ function follow(e, onMove, onEnd) {
    e.preventDefault();
    e.stopPropagation();
    const up = ()=>{
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", up);
        window.removeEventListener("pointercancel", up);
        onEnd();
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
}
function CardStage({ item, onChange, p }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [stage, avail] = useWidth();
    const card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** what the pointer is over, and what it is holding */ const [hot, setHot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [held, setHeld] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* a drag outlives the render it began in: the handlers read the item as it is now */ const live = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(item);
    live.current = item;
    const { w: dpW, h: dpH } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeOf"])(item, {});
    const maxW = Math.max(CARD_MIN, (avail || 220) - 16);
    const k = Math.min(maxW / Math.max(1, dpW), CARD_MAX_H / Math.max(1, dpH));
    const w = Math.max(CARD_MIN, Math.round(dpW * k));
    const h = Math.max(CARD_MIN, Math.round(dpH * k));
    const scale = w / Math.max(1, dpW);
    const px = (dp)=>Math.max(1, Math.round(dp * scale));
    const hasImage = !item.noImage;
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImagePosOf"])(item);
    const align = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardContentAlignOf"])(item);
    const across = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardTextAlignOf"])(item);
    const pad = px(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_PADDING"]);
    const gap = px(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_MEDIA_GAP"]);
    const size = px((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImageSizeOf"])(item));
    const radius = px(item.corners?.tl ?? item.radiusTop ?? 12);
    /* the picture's box inside the drawing, and the box the words have left */ const inner = {
        x: pad,
        y: pad,
        w: w - pad * 2,
        h: h - pad * 2
    };
    const picture = !hasImage ? {
        display: "none"
    } : pos === "background" ? {
        left: 0,
        top: 0,
        width: w,
        height: h,
        borderRadius: radius
    } : pos === "top" ? {
        left: inner.x,
        top: inner.y,
        width: inner.w,
        height: size
    } : pos === "bottom" ? {
        left: inner.x,
        top: inner.y + inner.h - size,
        width: inner.w,
        height: size
    } : pos === "leading" ? {
        left: inner.x,
        top: inner.y,
        width: size,
        height: inner.h
    } : {
        left: inner.x + inner.w - size,
        top: inner.y,
        width: size,
        height: inner.h
    };
    /* the box the words have left; a picture too big for the card leaves them a sliver at least */ const wordsOf = (it)=>{
        const p2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImagePosOf"])(it);
        const s2 = px((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImageSizeOf"])(it));
        const raw = it.noImage || p2 === "background" ? inner : p2 === "top" ? {
            x: inner.x,
            y: inner.y + s2 + gap,
            w: inner.w,
            h: inner.h - s2 - gap
        } : p2 === "bottom" ? {
            x: inner.x,
            y: inner.y,
            w: inner.w,
            h: inner.h - s2 - gap
        } : p2 === "leading" ? {
            x: inner.x + s2 + gap,
            y: inner.y,
            w: inner.w - s2 - gap,
            h: inner.h
        } : {
            x: inner.x,
            y: inner.y,
            w: inner.w - s2 - gap,
            h: inner.h
        };
        const wMin = 24;
        const hMin = LINES_H;
        return {
            x: Math.min(raw.x, inner.x + inner.w - wMin),
            y: Math.min(raw.y, inner.y + inner.h - hMin),
            w: Math.max(wMin, raw.w),
            h: Math.max(hMin, raw.h)
        };
    };
    const words = wordsOf(item);
    /* ---- the picture is dragged to where it should sit ---- */ const movePicture = (e)=>{
        setHeld("picture");
        follow(e, (ev)=>{
            const box = card.current?.getBoundingClientRect();
            if (!box) return;
            const next = posAt(ev.clientX - box.left, ev.clientY - box.top, box.width, box.height);
            if (next !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImagePosOf"])(live.current)) onChange({
                imagePos: next === "top" ? undefined : next
            });
        }, ()=>setHeld(null));
    };
    /* ---- its inner edge is pulled to size it ---- */ const sizePicture = (e)=>{
        setHeld("grip");
        follow(e, (ev)=>{
            const box = card.current?.getBoundingClientRect();
            if (!box) return;
            const from = pos === "top" ? ev.clientY - box.top - pad : pos === "bottom" ? box.bottom - ev.clientY - pad : pos === "leading" ? ev.clientX - box.left - pad : box.right - ev.clientX - pad;
            const dp = Math.round(from / scale);
            onChange({
                imageSize: Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_IMAGE_MIN"], Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImageMaxOf"])(live.current), dp))
            });
        }, ()=>setHeld(null));
    };
    /* ---- the words are dragged to one of nine places ---- */ const moveWords = (e)=>{
        setHeld("words");
        follow(e, (ev)=>{
            const box = card.current?.getBoundingClientRect();
            if (!box) return;
            const it = live.current;
            const area = wordsOf(it);
            const nextY = third((ev.clientY - box.top - area.y) / Math.max(1, area.h));
            const nextX = third((ev.clientX - box.left - area.x) / Math.max(1, area.w));
            const patch = {};
            if (nextY !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardContentAlignOf"])(it)) patch.contentAlign = nextY;
            if (nextX !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardTextAlignOf"])(it)) patch.textAlign = nextX === "start" ? undefined : nextX;
            if (Object.keys(patch).length) onChange(patch);
        }, ()=>setHeld(null));
    };
    /* the keyboard moves the same things: arrows put the picture on an edge, enter lays it behind;
   * arrows walk the words across their nine places */ const keyPicture = (e)=>{
        /* with shift, the arrows pull the picture's inner edge instead: 4dp a step, like the sliders */ if (e.shiftKey && pos !== "background" && (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight")) {
            const band = pos === "top" || pos === "bottom";
            const grow = band ? e.key === "ArrowDown" : e.key === "ArrowRight";
            const shrink = band ? e.key === "ArrowUp" : e.key === "ArrowLeft";
            if (!grow && !shrink) return;
            e.preventDefault();
            const d = (grow ? 4 : -4) * (pos === "bottom" || pos === "trailing" ? -1 : 1);
            onChange({
                imageSize: Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_IMAGE_MIN"], Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImageMaxOf"])(item), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImageSizeOf"])(item) + d))
            });
            return;
        }
        const next = e.key === "ArrowUp" ? "top" : e.key === "ArrowDown" ? "bottom" : e.key === "ArrowLeft" ? "leading" : e.key === "ArrowRight" ? "trailing" : e.key === "Enter" || e.key === " " ? "background" : undefined;
        if (!next) return;
        e.preventDefault();
        onChange({
            imagePos: next === "top" ? undefined : next
        });
    };
    /* what a screen reader hears: the thing, and where it is on the card now */ const placeText = {
        top: "imageTop",
        bottom: "imageBottom",
        leading: "imageLeading",
        trailing: "imageTrailing",
        background: "imageBehind"
    };
    const pictureName = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("image", lang)}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(placeText[pos], lang)}${pos === "background" ? "" : `, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("imageSize", lang)} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImageSizeOf"])(item)}dp`}`;
    const rowText = {
        start: "textTop",
        center: "textMiddle",
        end: "textBottom"
    };
    const colText = {
        start: "textStart",
        center: "textCenter",
        end: "textEnd"
    };
    const wordsName = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("text", lang)}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(rowText[align], lang)} / ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(colText[across], lang)}`;
    const keyWords = (e)=>{
        const order = [
            "start",
            "center",
            "end"
        ];
        const dy = e.key === "ArrowUp" ? -1 : e.key === "ArrowDown" ? 1 : 0;
        const dx = e.key === "ArrowLeft" ? -1 : e.key === "ArrowRight" ? 1 : 0;
        if (!dy && !dx) return;
        e.preventDefault();
        if (dy) onChange({
            contentAlign: order[Math.max(0, Math.min(2, order.indexOf(align) + dy))]
        });
        if (dx) {
            const next = order[Math.max(0, Math.min(2, order.indexOf(across) + dx))];
            onChange({
                textAlign: next === "start" ? undefined : next
            });
        }
    };
    /* the grip sits on the picture's inner edge, across the middle of it */ const grip = pos === "top" ? {
        left: "50%",
        bottom: -GRIP_THICK / 2 - 1,
        width: GRIP,
        height: GRIP_THICK,
        transform: "translateX(-50%)",
        cursor: "ns-resize"
    } : pos === "bottom" ? {
        left: "50%",
        top: -GRIP_THICK / 2 - 1,
        width: GRIP,
        height: GRIP_THICK,
        transform: "translateX(-50%)",
        cursor: "ns-resize"
    } : pos === "leading" ? {
        top: "50%",
        right: -GRIP_THICK / 2 - 1,
        width: GRIP_THICK,
        height: GRIP,
        transform: "translateY(-50%)",
        cursor: "ew-resize"
    } : {
        top: "50%",
        left: -GRIP_THICK / 2 - 1,
        width: GRIP_THICK,
        height: GRIP,
        transform: "translateY(-50%)",
        cursor: "ew-resize"
    };
    /* where in their box the two lines stand */ const lineTop = align === "start" ? 0 : align === "center" ? Math.max(0, (words.h - LINES_H) / 2) : Math.max(0, words.h - LINES_H);
    const lineSide = (share)=>across === "start" ? {
            left: 0
        } : across === "center" ? {
            left: `${(1 - share) * 50}%`
        } : {
            right: 0
        };
    const pictureHot = hot === "picture" || hot === "grip" || held === "picture";
    const wordsHot = hot === "words" || held === "words";
    /* while the picture is held, the five places it can go are drawn, the one under it lit */ const zones = [
        {
            key: "top",
            style: {
                left: 0,
                top: 0,
                width: w,
                height: h * 0.3
            }
        },
        {
            key: "bottom",
            style: {
                left: 0,
                top: h * 0.7,
                width: w,
                height: h * 0.3
            }
        },
        {
            key: "leading",
            style: {
                left: 0,
                top: h * 0.3,
                width: w * 0.3,
                height: h * 0.4
            }
        },
        {
            key: "trailing",
            style: {
                left: w * 0.7,
                top: h * 0.3,
                width: w * 0.3,
                height: h * 0.4
            }
        },
        {
            key: "background",
            style: {
                left: w * 0.3,
                top: h * 0.3,
                width: w * 0.4,
                height: h * 0.4
            }
        }
    ];
    const places = [
        "start",
        "center",
        "end"
    ];
    const at = (v)=>v === "start" ? "10%" : v === "center" ? "50%" : "90%";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: stage,
        role: "group",
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("cardLayout", lang),
        style: {
            flex: 1,
            minWidth: 0,
            background: p.surfaceContainerLow,
            borderRadius: 12,
            padding: 8,
            display: "grid",
            placeItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: card,
            style: {
                position: "relative",
                width: w,
                height: h,
                background: p.surfaceContainerHighest,
                border: `1.5px solid ${p.outline}`,
                boxSizing: "border-box",
                borderRadius: radius,
                overflow: "hidden",
                userSelect: "none"
            },
            children: [
                hasImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "button",
                    tabIndex: 0,
                    "aria-label": pictureName,
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("image", lang),
                    onPointerDown: movePicture,
                    onPointerEnter: ()=>setHot("picture"),
                    onPointerLeave: ()=>setHot(null),
                    onKeyDown: keyPicture,
                    style: {
                        position: "absolute",
                        ...picture,
                        borderRadius: pos === "background" ? radius : Math.min(6, radius),
                        background: p.primaryContainer,
                        opacity: pos === "background" ? 0.55 : 1,
                        boxSizing: "border-box",
                        /* the ring says it can be picked up; the pointer says whether it is */ outline: `2px solid ${pictureHot ? p.primary : "transparent"}`,
                        outlineOffset: -2,
                        cursor: held === "picture" ? "grabbing" : "grab",
                        touchAction: "none",
                        display: "grid",
                        placeItems: "center",
                        color: p.onPrimaryContainer,
                        transition: "outline-color 120ms"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: pictureHot ? "open_with" : "image",
                            size: Math.min(20, Math.max(12, Math.round(Math.min(Number(picture.width), Number(picture.height)) * 0.5)))
                        }, void 0, false, {
                            fileName: "[project]/components/CardStage.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this),
                        pos !== "background" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            onPointerDown: sizePicture,
                            onPointerEnter: ()=>setHot("grip"),
                            onPointerLeave: ()=>setHot("picture"),
                            style: {
                                position: "absolute",
                                ...grip,
                                borderRadius: 3,
                                background: p.primary,
                                border: `1px solid ${p.surface}`,
                                boxSizing: "content-box",
                                touchAction: "none",
                                /* the grip grows a little under the pointer, so it reads as a handle and not a mark */ transform: `${grip.transform} scale(${hot === "grip" || held === "grip" ? 1.4 : 1})`,
                                transition: "transform 120ms"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/CardStage.tsx",
                            lineNumber: 298,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CardStage.tsx",
                    lineNumber: 268,
                    columnNumber: 11
                }, this),
                wordsHot && words.w > 0 && words.h > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    style: {
                        position: "absolute",
                        left: words.x,
                        top: words.y,
                        width: words.w,
                        height: words.h,
                        borderRadius: 4,
                        outline: `1.5px dashed ${p.primary}`,
                        outlineOffset: 2,
                        pointerEvents: "none"
                    },
                    children: held === "words" && places.flatMap((row)=>places.map((col)=>{
                            const on = row === align && col === across;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    position: "absolute",
                                    left: at(col),
                                    top: at(row),
                                    width: on ? 8 : 4,
                                    height: on ? 8 : 4,
                                    borderRadius: 4,
                                    background: p.primary,
                                    opacity: on ? 1 : 0.35,
                                    transform: "translate(-50%, -50%)",
                                    transition: "width 120ms, height 120ms"
                                }
                            }, `${row}${col}`, false, {
                                fileName: "[project]/components/CardStage.tsx",
                                lineNumber: 327,
                                columnNumber: 21
                            }, this);
                        }))
                }, void 0, false, {
                    fileName: "[project]/components/CardStage.tsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "button",
                    tabIndex: 0,
                    "aria-label": wordsName,
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("text", lang),
                    onPointerDown: moveWords,
                    onPointerEnter: ()=>setHot("words"),
                    onPointerLeave: ()=>setHot(null),
                    onKeyDown: keyWords,
                    /* only the lines themselves take the pointer, so a picture lying behind them can still be grabbed */ style: {
                        position: "absolute",
                        left: words.x,
                        top: words.y + lineTop - 3,
                        width: Math.max(0, words.w),
                        height: LINES_H + 6,
                        cursor: held === "words" ? "grabbing" : "grab",
                        touchAction: "none",
                        overflow: "hidden"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            style: {
                                position: "absolute",
                                ...lineSide(0.62),
                                top: 3,
                                width: "62%",
                                height: 6,
                                borderRadius: 3,
                                background: wordsHot ? p.primary : p.onSurface,
                                opacity: 0.8,
                                transition: "background 120ms"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/CardStage.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            style: {
                                position: "absolute",
                                ...lineSide(0.4),
                                top: 14,
                                width: "40%",
                                height: 5,
                                borderRadius: 3,
                                background: wordsHot ? p.primary : p.onSurfaceVariant,
                                opacity: 0.6,
                                transition: "background 120ms"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/CardStage.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CardStage.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, this),
                held === "picture" && zones.map((z)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        style: {
                            position: "absolute",
                            ...z.style,
                            boxSizing: "border-box",
                            border: `1.5px dashed ${p.primary}`,
                            borderRadius: 6,
                            background: z.key === pos ? p.primary : "transparent",
                            opacity: z.key === pos ? 0.3 : 0.5,
                            pointerEvents: "none"
                        }
                    }, z.key, false, {
                        fileName: "[project]/components/CardStage.tsx",
                        lineNumber: 354,
                        columnNumber: 13
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/CardStage.tsx",
            lineNumber: 253,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CardStage.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
_s1(CardStage, "5Rrvo7nkXA3D/wdlhtdwxokBE5s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        useWidth
    ];
});
_c = CardStage;
var _c;
__turbopack_context__.k.register(_c, "CardStage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ColorPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorPanel",
    ()=>ColorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const TUNABLE = [
    {
        key: "primary",
        on: "onPrimary"
    },
    {
        key: "primaryContainer",
        on: "onPrimaryContainer"
    },
    {
        key: "secondaryContainer",
        on: "onSecondaryContainer"
    },
    {
        key: "tertiaryContainer",
        on: "onTertiaryContainer"
    },
    {
        key: "surfaceContainer"
    },
    {
        key: "surfaceContainerHigh"
    },
    {
        key: "inverseSurface",
        on: "inverseOnSurface"
    }
];
/** the palette's key colors as overlapping dots, right-aligned in the row */ function Swatches({ pal, p }) {
    const colors = [
        pal.primary,
        pal.primaryContainer,
        pal.secondaryContainer,
        pal.tertiaryContainer,
        pal.surfaceContainerHigh
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            flex: "0 0 auto",
            marginLeft: "auto",
            paddingLeft: 8
        },
        children: colors.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    background: c,
                    marginLeft: i === 0 ? 0 : -7,
                    boxShadow: `0 0 0 2px ${p.surfaceContainerLow}, inset 0 0 0 1px rgba(0,0,0,0.08)`,
                    zIndex: colors.length - i,
                    position: "relative"
                }
            }, i, false, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ColorPanel.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Swatches;
function ColorField({ value, onChange, p, label }) {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColorField.useEffect": ()=>setText(value)
    }["ColorField.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: 36
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "relative",
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    background: value,
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.12)",
                    flex: "0 0 auto",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "color",
                    value: value,
                    onChange: (e)=>onChange(e.target.value.toUpperCase()),
                    "aria-label": label,
                    style: {
                        position: "absolute",
                        inset: -8,
                        width: 44,
                        height: 44,
                        opacity: 0,
                        cursor: "pointer"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ColorPanel.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    flex: 1,
                    minWidth: 0,
                    fontSize: 12,
                    color: p.onSurface,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: text,
                onChange: (e)=>{
                    setText(e.target.value);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(e.target.value)) onChange(e.target.value.toUpperCase());
                },
                onBlur: ()=>setText(value),
                spellCheck: false,
                style: {
                    width: 76,
                    height: 28,
                    padding: "0 8px",
                    borderRadius: 8,
                    border: "none",
                    background: p.surfaceContainerHigh,
                    color: p.onSurface,
                    fontSize: 12,
                    fontFamily: "ui-monospace, monospace",
                    outline: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ColorPanel.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ColorField, "IKVtJHM2akjbAx+6GagMxy0f0zQ=");
_c1 = ColorField;
/** A settings row in the same shape as the palette rows: icon disc, label, and the
 *  value or switch at the trailing edge. The whole row is the control. */ function SettingRow({ p, icon, label, onClick, pressed, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        "aria-pressed": pressed,
        className: "m3-press",
        style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            height: 48,
            padding: "0 12px 0 10px",
            borderRadius: 16,
            border: "none",
            background: p.surfaceContainerLow,
            color: p.onSurface,
            cursor: "pointer",
            textAlign: "left",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    background: p.secondaryContainer,
                    color: p.onSecondaryContainer,
                    display: "grid",
                    placeItems: "center",
                    flex: "0 0 auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: icon,
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/components/ColorPanel.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    flex: 1,
                    minWidth: 0,
                    fontSize: 13,
                    fontWeight: 600,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ColorPanel.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c2 = SettingRow;
/** the switch of a settings row, drawn without its own button */ function Knob({ on, p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            fileName: "[project]/components/ColorPanel.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ColorPanel.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c3 = Knob;
function ColorPanel({ p, paletteKey, onPalette, custom, onCustom, dynamic, onDynamic, theme, onTheme }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const contrastLabel = (c)=>c === "high" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("contrastHigh", lang) : c === "medium" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("contrastMedium", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("contrastStandard", lang);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(paletteKey === "custom" ? "custom" : "templates");
    const [seed, setSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(custom?.seed ?? custom?.primary ?? "#6750A4");
    const applySeed = (hex)=>{
        setSeed(hex);
        onCustom((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemeFromSeed"])(hex));
        onPalette("custom");
    };
    const cur = custom ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemeFromSeed"])(seed);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-scrollbar",
        style: {
            height: "100%",
            overflowY: "auto",
            padding: "12px 12px 20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    marginBottom: 14
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingRow, {
                        p: p,
                        icon: theme.dark ? "dark_mode" : "light_mode",
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("brightness", lang),
                        onClick: ()=>onTheme({
                                dark: !theme.dark
                            }),
                        pressed: theme.dark,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 4,
                                fontSize: 13,
                                fontWeight: 600,
                                color: p.primary
                            },
                            children: [
                                theme.dark ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("dark", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("light", lang),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "swap_horiz",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/ColorPanel.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ColorPanel.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ColorPanel.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingRow, {
                        p: p,
                        icon: "routine",
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("bothModes", lang),
                        onClick: ()=>onTheme({
                                bothModes: !theme.bothModes
                            }),
                        pressed: theme.bothModes,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Knob, {
                            on: theme.bothModes,
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/ColorPanel.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ColorPanel.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingRow, {
                        p: p,
                        icon: "contrast",
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("contrast", lang),
                        onClick: ()=>{
                            const i = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRASTS"].findIndex((c)=>c.key === theme.contrast);
                            onTheme({
                                contrast: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRASTS"][(i + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRASTS"].length].key
                            });
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 4,
                                fontSize: 13,
                                fontWeight: 600,
                                color: p.primary
                            },
                            children: [
                                contrastLabel(theme.contrast),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "chevron_right",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/ColorPanel.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ColorPanel.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ColorPanel.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                options: [
                    {
                        key: "templates",
                        icon: "palette",
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("templates", lang)
                    },
                    {
                        key: "custom",
                        icon: "colorize",
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("customColor", lang)
                    }
                ],
                value: tab,
                onChange: setTab,
                p: p,
                height: 38
            }, void 0, false, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            tab === "templates" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    marginTop: 12
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTES"].map((pal)=>{
                    const on = pal.key === paletteKey;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onPalette(pal.key),
                        "aria-pressed": on,
                        className: "m3-press",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            height: 48,
                            padding: "0 12px 0 10px",
                            borderRadius: 16,
                            border: "none",
                            background: on ? p.secondaryContainer : p.surfaceContainerLow,
                            color: on ? p.onSecondaryContainer : p.onSurface,
                            cursor: "pointer",
                            textAlign: "left"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 28,
                                    height: 28,
                                    borderRadius: 14,
                                    background: `linear-gradient(135deg, ${pal.primary} 50%, ${pal.primaryContainer} 50%)`,
                                    flex: "0 0 auto"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ColorPanel.tsx",
                                lineNumber: 264,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13,
                                    fontWeight: 600,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    minWidth: 0
                                },
                                children: pal.label
                            }, void 0, false, {
                                fileName: "[project]/components/ColorPanel.tsx",
                                lineNumber: 265,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Swatches, {
                                pal: pal,
                                p: p
                            }, void 0, false, {
                                fileName: "[project]/components/ColorPanel.tsx",
                                lineNumber: 266,
                                columnNumber: 17
                            }, this)
                        ]
                    }, pal.key, true, {
                        fileName: "[project]/components/ColorPanel.tsx",
                        lineNumber: 245,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 241,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "flex-end",
                            gap: 8,
                            padding: 10,
                            borderRadius: 16,
                            background: paletteKey === "custom" ? p.secondaryContainer : p.surfaceContainerLow,
                            color: paletteKey === "custom" ? p.onSecondaryContainer : p.onSurface
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: "1 1 180px",
                                    minWidth: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorField, {
                                    value: seed,
                                    onChange: applySeed,
                                    p: p,
                                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("seedColor", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/ColorPanel.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ColorPanel.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            paletteKey !== "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>applySeed(seed),
                                className: "m3-press",
                                style: {
                                    height: 32,
                                    padding: "0 12px",
                                    borderRadius: 16,
                                    border: "none",
                                    background: p.primary,
                                    color: p.onPrimary,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    cursor: "pointer"
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("useThis", lang)
                            }, void 0, false, {
                                fileName: "[project]/components/ColorPanel.tsx",
                                lineNumber: 290,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ColorPanel.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            lineHeight: 1.5,
                            color: p.onSurfaceVariant,
                            padding: "0 4px"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("seedHint", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/ColorPanel.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 6,
                            flexWrap: "wrap",
                            padding: "0 2px"
                        },
                        children: [
                            "#6750A4",
                            "#0B57D0",
                            "#2E6A45",
                            "#984061",
                            "#8B5000",
                            "#00696E",
                            "#B3261E",
                            "#4A4459"
                        ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>applySeed(c),
                                title: c,
                                "aria-label": c,
                                className: "m3-press",
                                style: {
                                    width: 26,
                                    height: 26,
                                    borderRadius: 13,
                                    border: "none",
                                    padding: 0,
                                    background: c,
                                    cursor: "pointer",
                                    outline: seed === c ? `2px solid ${p.primary}` : "2px solid transparent",
                                    outlineOffset: 2
                                }
                            }, c, false, {
                                fileName: "[project]/components/ColorPanel.tsx",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ColorPanel.tsx",
                        lineNumber: 300,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "color-tune",
                        icon: "tune",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("fineTune", lang),
                        p: p,
                        defaultOpen: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 2
                            },
                            children: TUNABLE.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorField, {
                                    value: cur[r.key],
                                    label: r.key,
                                    p: p,
                                    onChange: (hex)=>{
                                        const next = {
                                            ...cur,
                                            [r.key]: hex
                                        };
                                        if (r.on) next[r.on] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onColorFor"])(hex);
                                        onCustom(next);
                                        onPalette("custom");
                                    }
                                }, r.key, false, {
                                    fileName: "[project]/components/ColorPanel.tsx",
                                    lineNumber: 315,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ColorPanel.tsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ColorPanel.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingRow, {
                        p: p,
                        icon: "wallpaper",
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("dynamicColor", lang),
                        onClick: ()=>onDynamic(!dynamic),
                        pressed: dynamic,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Knob, {
                            on: dynamic,
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/ColorPanel.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ColorPanel.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            lineHeight: 1.5,
                            color: p.onSurfaceVariant,
                            padding: "2px 4px 0"
                        },
                        children: dynamic ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("dynamicOnHint", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("dynamicOffHint", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/ColorPanel.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ColorPanel.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ColorPanel.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_s1(ColorPanel, "FyQZMiXv0XxB5L18jjX/mh4lbWk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = ColorPanel;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Swatches");
__turbopack_context__.k.register(_c1, "ColorField");
__turbopack_context__.k.register(_c2, "SettingRow");
__turbopack_context__.k.register(_c3, "Knob");
__turbopack_context__.k.register(_c4, "ColorPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FramePanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FrameInspector",
    ()=>FrameInspector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Inspector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PartPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tidy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tidy.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
/* The panel for a screen. It wears the same chrome a part's panel does -- the title row with
 * what can be done to the screen, then short sections -- and keeps to what a screen actually
 * has. The design tab holds its name and shape, its colour and how its body is laid out; the
 * trigger tab holds what it is for -- the same split a part's panel makes. What the prompt says about it lives in the prompt tab. */ /** quick picks for a screen's length: the device itself, and one and a half, two and three times it */ const lengthSteps = (deviceH)=>[
        1,
        1.5,
        2,
        3
    ].map((n)=>({
            key: `${n}×`,
            value: n === 1 ? deviceH : Math.round(deviceH * n / 4) * 4
        }));
/** the few colours a screen is painted in, offered the way a part's looks are */ const SCREEN_FILLS = [
    "surface",
    "surfaceContainerLow",
    "surfaceContainerHigh",
    "primaryContainer",
    "secondaryContainer"
];
/** the screen's colour as one connected run: each cell is the colour, and the one worn carries a check */ function ScreenFillRun({ value, onChange, p }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    /* a sketch painted in a role the run does not offer keeps it, as one more cell, until another is picked */ const fills = SCREEN_FILLS.includes(value) ? SCREEN_FILLS : [
        ...SCREEN_FILLS,
        value
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
        options: fills.map((tk)=>({
                key: tk,
                title: lang === "en" ? tk : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_TOKEN_TEXT"][lang][tk],
                node: tk === value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "check",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/FramePanel.tsx",
                    lineNumber: 70,
                    columnNumber: 30
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/components/FramePanel.tsx",
                    lineNumber: 70,
                    columnNumber: 64
                }, this),
                style: {
                    background: p[tk],
                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onToken"])(tk, p),
                    border: `1px solid ${p.outlineVariant}`,
                    minWidth: 0,
                    padding: 0
                }
            })),
        value: value,
        onChange: (bg)=>onChange(bg === "surface" ? undefined : bg),
        p: p,
        height: 44,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screenLook", lang),
        tight: true
    }, void 0, false, {
        fileName: "[project]/components/FramePanel.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(ScreenFillRun, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = ScreenFillRun;
/** the title row: what the screen is, and everything that can be done to it */ function FrameHeader({ frame, p, onPreview, onDuplicate, onDelete }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 4,
            marginBottom: 6,
            padding: "0 2px 0 6px",
            color: p.onSurfaceVariant
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPhoneFrame"])(frame) ? "smartphone" : "desktop_windows",
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/FramePanel.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 14,
                    fontWeight: 600,
                    flex: 1,
                    minWidth: 0,
                    color: p.onSurface,
                    marginLeft: 4,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                children: frame.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screen", lang)
            }, void 0, false, {
                fileName: "[project]/components/FramePanel.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                icon: "play_arrow",
                p: p,
                onClick: onPreview,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("previewFrom", lang),
                size: 36,
                fill: true
            }, void 0, false, {
                fileName: "[project]/components/FramePanel.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                icon: "content_copy",
                p: p,
                onClick: onDuplicate,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("duplicate", lang),
                size: 36
            }, void 0, false, {
                fileName: "[project]/components/FramePanel.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                icon: "delete",
                p: p,
                danger: true,
                onClick: onDelete,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("delete", lang),
                size: 36
            }, void 0, false, {
                fileName: "[project]/components/FramePanel.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FramePanel.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s1(FrameHeader, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = FrameHeader;
function FrameInspector({ frame, palette: p, onChange, onDelete, onDuplicate, onPreview, prompt, onSaveImage, tidy, onTidy, onPlace, minLength, onLength, ai, onSize }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("design");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FrameInspector.useEffect": ()=>{
            if (!copied) return;
            const id = setTimeout({
                "FrameInspector.useEffect.id": ()=>setCopied(false)
            }["FrameInspector.useEffect.id"], 1400);
            return ({
                "FrameInspector.useEffect": ()=>clearTimeout(id)
            })["FrameInspector.useEffect"];
        }
    }["FrameInspector.useEffect"], [
        copied
    ]);
    const actionBtn = (icon, label, onClick, busy)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            disabled: busy,
            className: "m3-press",
            style: {
                flex: 1,
                height: 44,
                borderRadius: 22,
                border: "none",
                background: p.secondaryContainer,
                color: p.onSecondaryContainer,
                fontSize: 13,
                fontWeight: 600,
                cursor: busy ? "default" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                opacity: busy ? 0.6 : 1
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: icon,
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/FramePanel.tsx",
                    lineNumber: 235,
                    columnNumber: 7
                }, this),
                label
            ]
        }, void 0, true, {
            fileName: "[project]/components/FramePanel.tsx",
            lineNumber: 214,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelShell"], {
        p: p,
        head: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FrameHeader, {
            frame: frame,
            p: p,
            onPreview: onPreview,
            onDuplicate: onDuplicate,
            onDelete: onDelete
        }, void 0, false, {
            fileName: "[project]/components/FramePanel.tsx",
            lineNumber: 243,
            columnNumber: 9
        }, this),
        tabs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartTabs"], {
            value: tab,
            onChange: setTab,
            p: p,
            idPrefix: "frame"
        }, void 0, false, {
            fileName: "[project]/components/FramePanel.tsx",
            lineNumber: 251,
            columnNumber: 13
        }, this),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                id: "frame-panel-design",
                "aria-labelledby": "frame-tab-design",
                hidden: tab !== "design",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "frame-name",
                        icon: "label",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("name", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrameSizePicker"], {
                                    frame: frame,
                                    palette: p,
                                    onChange: onSize,
                                    compact: true
                                }, void 0, false, {
                                    fileName: "[project]/components/FramePanel.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        minWidth: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        value: frame.name,
                                        onChange: (name)=>onChange({
                                                name
                                            }),
                                        placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screenName", lang),
                                        p: p
                                    }, void 0, false, {
                                        fileName: "[project]/components/FramePanel.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/FramePanel.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FramePanel.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FramePanel.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "frame-style",
                        icon: "palette",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("style", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScreenFillRun, {
                            value: frame.bg ?? "surface",
                            onChange: (bg)=>onChange({
                                    bg
                                }),
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/FramePanel.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FramePanel.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "frame-length",
                        icon: "swap_vert",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("scrolling", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                    icon: "height",
                                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screenLength", lang),
                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(frame),
                                    min: minLength,
                                    max: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tidy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxFrameLength"])(frame),
                                    step: 4,
                                    onChange: onLength,
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/FramePanel.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NamedSizes"], {
                                    steps: lengthSteps((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).h),
                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(frame),
                                    onChange: onLength,
                                    p: p,
                                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screenLength", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/FramePanel.tsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FramePanel.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FramePanel.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "frame-tidy",
                        icon: "align_space_even",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("tidy", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TidyButton"], {
                            state: tidy,
                            onClick: onTidy,
                            p: p,
                            place: frame.place,
                            onPlace: onPlace
                        }, void 0, false, {
                            fileName: "[project]/components/FramePanel.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FramePanel.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FramePanel.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                id: "frame-panel-behavior",
                "aria-labelledby": "frame-tab-behavior",
                hidden: tab !== "behavior",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                    id: "frame-note",
                    icon: "notes",
                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("description", lang),
                    p: p,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        value: frame.note ?? "",
                        onChange: (note)=>onChange({
                                note: note || undefined
                            }),
                        placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screenDescription", lang),
                        p: p,
                        multiline: true,
                        grow: true,
                        rows: 4,
                        maxHeight: 280,
                        aiBusy: ai.busy,
                        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiIconBtn"], {
                                    ai: ai,
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/FramePanel.tsx",
                                    lineNumber: 339,
                                    columnNumber: 17
                                }, this),
                                !!frame.noteHistory?.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                    icon: "undo",
                                    p: p,
                                    size: 40,
                                    on: true,
                                    onClick: ()=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popHistory"])(frame.note, frame.noteHistory, "note", "noteHistory")),
                                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiRestore", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/FramePanel.tsx",
                                    lineNumber: 342,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FramePanel.tsx",
                            lineNumber: 338,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FramePanel.tsx",
                        lineNumber: 327,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/FramePanel.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/FramePanel.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                id: "frame-export",
                icon: "ios_share",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("export", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonRun"], {
                    children: [
                        actionBtn(copied ? "check" : "content_copy", copied ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("copied", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("prompt", lang), async ()=>{
                            try {
                                await navigator.clipboard.writeText(prompt);
                                setCopied(true);
                            } catch  {}
                        }),
                        actionBtn("image", saving ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("saving", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("saveImage", lang), async ()=>{
                            setSaving(true);
                            try {
                                await onSaveImage();
                            } finally{
                                setSaving(false);
                            }
                        }, saving)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/FramePanel.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/FramePanel.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FramePanel.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_s2(FrameInspector, "eiFnfY3zUMkIzhr5BUZuf9blu2E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = FrameInspector;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScreenFillRun");
__turbopack_context__.k.register(_c1, "FrameHeader");
__turbopack_context__.k.register(_c2, "FrameInspector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/IconPicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconPicker",
    ()=>IconPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FONT = '24px "Material Symbols Rounded"';
/** module-level so validation survives re-mounts of the panel */ let cache = null;
/** what has been measured so far, by name; a panel reads it into state when it opens */ const glyphOk = new Map();
/** Candidates measured per pass. A real Material Symbols glyph is exactly 1em
 *  wide; a name with no glyph falls back to text and measures wider. Icon names
 *  can be as short as "tv"/"4k", so we compare against a known-good reference
 *  glyph rather than a width threshold. */ const BATCH = 400;
const SHOWN = 240;
function IconPicker({ value, onChange, onClose, palette, extras = [] }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [icons, setIcons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cache);
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fontReady, setFontReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* the measured names, as state, so what is shown follows each measuring pass */ const [known, setKnown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "IconPicker.useState": ()=>new Map(glyphOk)
    }["IconPicker.useState"]);
    /* the icon the arrow keys have reached in the grid */ const [cursor, setCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const probeEls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IconPicker.useEffect": ()=>{
            const key = {
                "IconPicker.useEffect.key": (e)=>{
                    if (e.key !== "Escape") return;
                    // Dismiss the picker without clearing the editor's selection.
                    e.stopPropagation();
                    onClose();
                }
            }["IconPicker.useEffect.key"];
            document.addEventListener("keydown", key, true);
            return ({
                "IconPicker.useEffect": ()=>document.removeEventListener("keydown", key, true)
            })["IconPicker.useEffect"];
        }
    }["IconPicker.useEffect"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IconPicker.useEffect": ()=>{
            if (cache) return;
            /* a panel closed mid-flight asks for nothing more; a list that failed to arrive is not kept,
     * so the next opening asks again */ const ctl = new AbortController();
            let alive = true;
            fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BASE_PATH ?? ""}/material-symbols.json`, {
                signal: ctl.signal
            }).then({
                "IconPicker.useEffect": (r)=>r.json()
            }["IconPicker.useEffect"]).then({
                "IconPicker.useEffect": (d)=>{
                    cache = d;
                    if (alive) setIcons(d);
                }
            }["IconPicker.useEffect"]).catch({
                "IconPicker.useEffect": ()=>{
                    if (alive) setIcons([]);
                }
            }["IconPicker.useEffect"]);
            return ({
                "IconPicker.useEffect": ()=>{
                    alive = false;
                    ctl.abort();
                }
            })["IconPicker.useEffect"];
        }
    }["IconPicker.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IconPicker.useEffect": ()=>{
            let alive = true;
            const done = {
                "IconPicker.useEffect.done": ()=>alive && setFontReady(true)
            }["IconPicker.useEffect.done"];
            if (document.fonts.check(FONT)) {
                done();
                return;
            }
            document.fonts.load(FONT, "search").then(done, done);
            return ({
                "IconPicker.useEffect": ()=>{
                    alive = false;
                }
            })["IconPicker.useEffect"];
        }
    }["IconPicker.useEffect"], []);
    const candidates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IconPicker.useMemo[candidates]": ()=>{
            if (!icons) return [];
            const s = q.trim().toLowerCase().replace(/\s+/g, "_");
            if (!s) return icons.slice(0, BATCH);
            const raw = q.trim().toLowerCase();
            const starts = [];
            const rest = [];
            for (const i of icons){
                if (i.n.startsWith(s)) starts.push(i);
                else if (i.n.includes(s) || i.t.includes(raw)) rest.push(i);
                if (starts.length + rest.length >= BATCH * 2) break;
            }
            return [
                ...starts,
                ...rest
            ].slice(0, BATCH);
        }
    }["IconPicker.useMemo[candidates]"], [
        icons,
        q
    ]);
    const unknown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IconPicker.useMemo[unknown]": ()=>candidates.filter({
                "IconPicker.useMemo[unknown]": (c)=>!known.has(c.n)
            }["IconPicker.useMemo[unknown]"])
    }["IconPicker.useMemo[unknown]"], [
        candidates,
        known
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "IconPicker.useLayoutEffect": ()=>{
            if (!fontReady || unknown.length === 0) return;
            const ref = refEl.current?.getBoundingClientRect().width ?? 0;
            if (ref <= 0) return;
            let learned = false;
            for (const c of unknown){
                const el = probeEls.current.get(c.n);
                if (!el) continue;
                const w = el.getBoundingClientRect().width;
                glyphOk.set(c.n, Math.abs(w - ref) < 0.75);
                learned = true;
            }
            if (learned) setKnown(new Map(glyphOk));
        }
    }["IconPicker.useLayoutEffect"], [
        fontReady,
        unknown
    ]);
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IconPicker.useMemo[visible]": ()=>candidates.filter({
                "IconPicker.useMemo[visible]": (c)=>known.get(c.n) === true
            }["IconPicker.useMemo[visible]"]).slice(0, SHOWN)
    }["IconPicker.useMemo[visible]"], [
        candidates,
        known
    ]);
    const at = Math.min(cursor, Math.max(0, visible.length - 1));
    /* the arrow keys walk the grid: a row at a time up and down, read off how many tiles share a line */ const onGridKey = (e)=>{
        const tiles = Array.from(grid.current?.querySelectorAll("[data-icon]") ?? []);
        if (!tiles.length) return;
        const top = tiles[0].offsetTop;
        const cols = Math.max(1, tiles.findIndex((el)=>el.offsetTop !== top)) || tiles.length;
        let next = -1;
        if (e.key === "ArrowRight") next = Math.min(at + 1, tiles.length - 1);
        else if (e.key === "ArrowLeft") next = Math.max(at - 1, 0);
        else if (e.key === "ArrowDown") next = Math.min(at + cols, tiles.length - 1);
        else if (e.key === "ArrowUp") next = Math.max(at - cols, 0);
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tiles.length - 1;
        if (next < 0) return;
        e.preventDefault();
        setCursor(next);
        tiles[next].focus();
    };
    const loading = !icons || !fontReady;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                style: {
                    position: "fixed",
                    left: -99999,
                    top: 0,
                    visibility: "hidden",
                    pointerEvents: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: refEl,
                        className: "msr",
                        style: {
                            fontSize: 24,
                            width: "auto"
                        },
                        children: "search"
                    }, void 0, false, {
                        fileName: "[project]/components/IconPicker.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    unknown.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            ref: (el)=>{
                                if (el) probeEls.current.set(c.n, el);
                                else probeEls.current.delete(c.n);
                            },
                            className: "msr",
                            style: {
                                fontSize: 24,
                                width: "auto"
                            },
                            children: c.n
                        }, c.n, false, {
                            fileName: "[project]/components/IconPicker.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/IconPicker.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "no-scrollbar",
                        style: {
                            height: 292,
                            overflowY: "auto",
                            overflowX: "hidden",
                            borderRadius: 16,
                            background: palette.surfaceContainerLow
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "sticky",
                                    top: 0,
                                    zIndex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    height: 44,
                                    padding: "0 14px",
                                    background: palette.surfaceContainerLow
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "aria-hidden": true,
                                        style: {
                                            position: "absolute",
                                            left: 0,
                                            right: 0,
                                            top: "100%",
                                            height: 20,
                                            background: `linear-gradient(to bottom, ${palette.surfaceContainerLow}, transparent)`,
                                            pointerEvents: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/IconPicker.tsx",
                                        lineNumber: 200,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("searchIcons", lang),
                                        autoFocus: true,
                                        value: q,
                                        onChange: (e)=>{
                                            setQ(e.target.value);
                                            setCursor(0);
                                        },
                                        placeholder: icons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("searchIcons", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("loading", lang),
                                        style: {
                                            flex: 1,
                                            minWidth: 0,
                                            height: 40,
                                            border: "none",
                                            background: "transparent",
                                            color: palette.onSurface,
                                            fontSize: 14,
                                            fontFamily: "inherit",
                                            outline: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/IconPicker.tsx",
                                        lineNumber: 212,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IconPicker.tsx",
                                lineNumber: 187,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: grid,
                                onKeyDown: onGridKey,
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(42px, 1fr))",
                                    gap: 4,
                                    padding: 6,
                                    alignContent: "start"
                                },
                                children: [
                                    !q && /* the first tile stands for "no icon"; it sits where the eye lands first */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("noIcon", lang),
                                        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("noIcon", lang),
                                        "aria-pressed": value === null,
                                        onClick: ()=>onChange(null),
                                        style: {
                                            aspectRatio: "1",
                                            minWidth: 0,
                                            display: "grid",
                                            placeItems: "center",
                                            borderRadius: 12,
                                            border: `1.5px dashed ${value === null ? "transparent" : palette.outline}`,
                                            background: value === null ? palette.primary : "transparent",
                                            color: value === null ? palette.onPrimary : palette.onSurfaceVariant,
                                            cursor: "pointer"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: 22,
                                            height: 22,
                                            viewBox: "0 0 22 22",
                                            "aria-hidden": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: 11,
                                                    cy: 11,
                                                    r: 8,
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: 1.6
                                                }, void 0, false, {
                                                    fileName: "[project]/components/IconPicker.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: 5.3,
                                                    y1: 5.3,
                                                    x2: 16.7,
                                                    y2: 16.7,
                                                    stroke: "currentColor",
                                                    strokeWidth: 1.6,
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/IconPicker.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/IconPicker.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/IconPicker.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    !q && extras.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            title: x.title,
                                            "aria-label": x.title,
                                            "aria-pressed": value === x.icon,
                                            onClick: ()=>onChange(x.icon),
                                            style: {
                                                aspectRatio: "1",
                                                minWidth: 0,
                                                display: "grid",
                                                placeItems: "center",
                                                borderRadius: 12,
                                                border: `1.5px dashed ${value === x.icon ? "transparent" : palette.outline}`,
                                                background: value === x.icon ? palette.primary : "transparent",
                                                color: value === x.icon ? palette.onPrimary : palette.onSurfaceVariant,
                                                cursor: "pointer"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "msr",
                                                style: {
                                                    fontSize: 22
                                                },
                                                children: x.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/IconPicker.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        }, x.icon, false, {
                                            fileName: "[project]/components/IconPicker.tsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this)),
                                    visible.map((i, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "data-icon": i.n,
                                            title: i.n,
                                            "aria-label": i.n,
                                            "aria-pressed": value === i.n,
                                            tabIndex: idx === at ? 0 : -1,
                                            onFocus: ()=>setCursor(idx),
                                            onClick: ()=>onChange(i.n),
                                            style: {
                                                aspectRatio: "1",
                                                minWidth: 0,
                                                display: "grid",
                                                placeItems: "center",
                                                borderRadius: 12,
                                                border: "none",
                                                background: value === i.n ? palette.primary : "transparent",
                                                color: value === i.n ? palette.onPrimary : palette.onSurfaceVariant,
                                                cursor: "pointer"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "msr",
                                                style: {
                                                    fontSize: 22
                                                },
                                                children: i.n
                                            }, void 0, false, {
                                                fileName: "[project]/components/IconPicker.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this)
                                        }, i.n, false, {
                                            fileName: "[project]/components/IconPicker.tsx",
                                            lineNumber: 297,
                                            columnNumber: 13
                                        }, this)),
                                    !loading && visible.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        role: "status",
                                        style: {
                                            gridColumn: "1 / -1",
                                            padding: 16,
                                            fontSize: 13,
                                            color: palette.outline,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "msr",
                                                "aria-hidden": true,
                                                style: {
                                                    fontSize: 24
                                                },
                                                children: "search_off"
                                            }, void 0, false, {
                                                fileName: "[project]/components/IconPicker.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("noIcons", lang)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/IconPicker.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        role: "status",
                                        style: {
                                            gridColumn: "1 / -1",
                                            padding: 16,
                                            fontSize: 13,
                                            color: palette.outline,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "msr",
                                                "aria-hidden": true,
                                                style: {
                                                    fontSize: 24
                                                },
                                                children: "hourglass_top"
                                            }, void 0, false, {
                                                fileName: "[project]/components/IconPicker.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("loading", lang)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/IconPicker.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IconPicker.tsx",
                                lineNumber: 234,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/IconPicker.tsx",
                        lineNumber: 177,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        style: {
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: 28,
                            borderRadius: "0 0 16px 16px",
                            background: `linear-gradient(to top, ${palette.surfaceContainerLow}, transparent)`,
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/IconPicker.tsx",
                        lineNumber: 338,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/IconPicker.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/IconPicker.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(IconPicker, "ha6BMb1EiBnGho08ACbNnt89plg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = IconPicker;
var _c;
__turbopack_context__.k.register(_c, "IconPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Inspector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionEditor",
    ()=>ActionEditor,
    "FrameSizePicker",
    ()=>FrameSizePicker,
    "Inspector",
    ()=>Inspector,
    "TransitionPicker",
    ()=>TransitionPicker,
    "VariantSwatch",
    ()=>VariantSwatch,
    "variantsOf",
    ()=>variantsOf,
    "widthPresetLabel",
    ()=>widthPresetLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ButtonInspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ButtonInspector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartInspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PartInspector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PartPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function variantsOf(kind) {
    const variants = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VARIANTS"].map((v)=>({
            ...v,
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(v.key)
        }));
    switch(kind){
        case "card":
            return [
                {
                    key: "tonal",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("filled")
                },
                {
                    key: "elevated",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("elevated")
                },
                {
                    key: "outlined",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("outlined")
                }
            ];
        case "textField":
        case "select":
            return [
                {
                    key: "outlined",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("outlined")
                },
                {
                    key: "filled",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("filled")
                }
            ];
        case "searchBar":
            return [
                {
                    key: "filled",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("filled")
                },
                {
                    key: "outlined",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("outlined")
                }
            ];
        case "chip":
            return [
                {
                    key: "outlined",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("outlined")
                },
                {
                    key: "tonal",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("elevated")
                }
            ];
        case "fab":
        case "extendedFab":
        case "fabMenu":
            return variants.filter((v)=>v.key !== "text" && v.key !== "elevated" && v.key !== "outlined");
        case "splitButton":
            return variants.filter((v)=>v.key !== "text");
        case "toolbar":
            return [
                {
                    key: "tonal",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("standard")
                },
                {
                    key: "filled",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("vibrant")
                }
            ];
        case "iconButton":
            return variants.filter((v)=>v.key !== "elevated" && v.key !== "text").concat({
                key: "text",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("standard")
            });
        default:
            return variants;
    }
}
function VariantSwatch({ v, label, p, on, onClick, small }) {
    const st = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantStyle"])(v, p);
    const h = small ? 32 : 40;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        title: label,
        "aria-label": label,
        "aria-pressed": on,
        className: "m3-press",
        style: {
            height: h,
            borderRadius: h / 2,
            cursor: "pointer",
            fontSize: small ? 11 : 12,
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            padding: small ? "0 10px" : "0 12px",
            ...st,
            boxShadow: v === "elevated" ? "0 1px 3px rgba(0,0,0,0.2)" : "none",
            outline: on ? `2px solid ${p.primary}` : "2px solid transparent",
            outlineOffset: 2
        },
        children: [
            on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: "check",
                size: small ? 14 : 16
            }, void 0, false, {
                fileName: "[project]/components/Inspector.tsx",
                lineNumber: 119,
                columnNumber: 14
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/components/Inspector.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c = VariantSwatch;
const widthPresetLabel = (v, frameWidth = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"])=>v === frameWidth ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screenWidth") : v === (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contentWidth"])(frameWidth) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("contentWidth") : v === (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["halfWidth"])(frameWidth) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("halfWidth") : frameWidth !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"] && v === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTENT_W"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("columnWidth") : undefined;
function FrameSizePicker({ frame, palette: p, onChange, compact }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
        options: [
            {
                key: "phone",
                icon: "smartphone",
                label: compact ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("phoneFrame", lang),
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("phoneFrame", lang)
            },
            {
                key: "desktop",
                icon: "desktop_windows",
                label: compact ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("desktopFrame", lang),
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("desktopFrame", lang)
            }
        ],
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["framePresetOf"])(frame),
        onChange: onChange,
        p: p,
        height: compact ? 36 : 40,
        grow: !compact
    }, void 0, false, {
        fileName: "[project]/components/Inspector.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(FrameSizePicker, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = FrameSizePicker;
function FrameChips({ frames, value, onChange, p, back, small }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const h = small ? 32 : 36;
    const chip = (id, label, icon)=>{
        const on = value === id;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>onChange(id),
            className: "m3-press",
            style: {
                height: h,
                padding: "0 12px 0 8px",
                borderRadius: h / 2,
                border: "none",
                background: on ? p.primary : p.surfaceContainerHigh,
                color: on ? p.onPrimary : p.onSurfaceVariant,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                maxWidth: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: icon,
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/components/Inspector.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    },
                    children: label
                }, void 0, false, {
                    fileName: "[project]/components/Inspector.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            ]
        }, id ?? "none", true, {
            fileName: "[project]/components/Inspector.tsx",
            lineNumber: 185,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 6
        },
        children: [
            chip(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("none", lang), "block"),
            back && chip(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACK_TARGET"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("goBack", lang), "arrow_back"),
            frames.map((f)=>chip(f.id, f.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screen", lang), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPhoneFrame"])(f) ? "smartphone" : "desktop_windows"))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Inspector.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s1(FrameChips, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = FrameChips;
function TransitionPicker({ value, onChange, p }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
        options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSITIONS"].map((tr)=>({
                key: tr.key,
                icon: tr.icon,
                title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSITION_TEXT"][lang][tr.key]
            })),
        value: value,
        onChange: onChange,
        p: p,
        height: 34
    }, void 0, false, {
        fileName: "[project]/components/Inspector.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_s2(TransitionPicker, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c3 = TransitionPicker;
function ActionEditor({ frames, action, onChange, p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FrameChips, {
                frames: frames,
                value: action?.to ?? null,
                onChange: (to)=>onChange(to ? {
                        to,
                        transition: action?.transition ?? "slide"
                    } : undefined),
                p: p,
                back: true
            }, void 0, false, {
                fileName: "[project]/components/Inspector.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            action && action.to !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACK_TARGET"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TransitionPicker, {
                value: action.transition,
                onChange: (transition)=>onChange({
                        ...action,
                        transition
                    }),
                p: p
            }, void 0, false, {
                fileName: "[project]/components/Inspector.tsx",
                lineNumber: 254,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Inspector.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_c4 = ActionEditor;
/** The panel for several parts at once, or for one hand-made group. It wears the chrome a
 *  part's panel does -- the title row with its menu, then short sections -- and holds only what
 *  a selection has: lining its parts up, and making or breaking the group. */ function GroupPanel({ p, count, grouped, locked, onToggleLock, onDuplicate, onDelete, onGroup, onUngroup, onPlace, selectionKey }) {
    _s3();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const title = grouped ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("group", lang) : lang === "en" ? `${count} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("selectedParts", lang)}` : `${count}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("selectedParts", lang)}`;
    const toggle = grouped ? onUngroup : onGroup;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelShell"], {
        p: p,
        locked: locked,
        onUnlock: onToggleLock,
        head: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6,
                padding: "0 2px 0 6px",
                color: p.onSurfaceVariant
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: grouped ? "group_work" : "select_all",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/Inspector.tsx",
                    lineNumber: 302,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 14,
                        fontWeight: 600,
                        flex: 1,
                        minWidth: 0,
                        color: p.onSurface
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/Inspector.tsx",
                    lineNumber: 303,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartMenu"], {
                    p: p,
                    locked: locked,
                    onDuplicate: onDuplicate,
                    onToggleLock: onToggleLock,
                    onDelete: onDelete,
                    deleteLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("deleteSelection", lang)
                }, void 0, false, {
                    fileName: "[project]/components/Inspector.tsx",
                    lineNumber: 304,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Inspector.tsx",
            lineNumber: 301,
            columnNumber: 9
        }, this),
        children: [
            onPlace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                id: "group-align",
                icon: "grid_on",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("align", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlignBox"], {
                    onPlace: onPlace,
                    p: p
                }, selectionKey, false, {
                    fileName: "[project]/components/Inspector.tsx",
                    lineNumber: 310,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Inspector.tsx",
                lineNumber: 309,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    padding: "0 4px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggle,
                        className: "m3-press",
                        style: {
                            height: 44,
                            borderRadius: 22,
                            border: "none",
                            background: p.secondaryContainer,
                            color: p.onSecondaryContainer,
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: grouped ? "ungroup" : "group_work",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/Inspector.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(grouped ? "ungroup" : "makeGroup", lang)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Inspector.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            lineHeight: 1.5,
                            color: p.onSurfaceVariant,
                            padding: "0 4px",
                            textWrap: "pretty"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(grouped ? "groupEditNote" : "groupHint", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/Inspector.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Inspector.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Inspector.tsx",
        lineNumber: 296,
        columnNumber: 5
    }, this);
}
_s3(GroupPanel, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c5 = GroupPanel;
function Inspector({ ai, item, palette: p, frames, frame, onChange, onDelete, onDuplicate, locked, onToggleLock, multi, grouped, selectionWhole, selectionKey, railStandalone = false, onGroup, onUngroup, widths, onPlace, selfRect, allFrames, onShowOn, onShowMenu }) {
    _s4();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    if (!item) {
        if (multi > 1) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GroupPanel, {
                p: p,
                count: multi,
                grouped: !!grouped,
                locked: !!locked,
                /* a loose selection locks only when that locks nothing more than it; a lock already on can always come off */ onToggleLock: locked || selectionWhole ? onToggleLock : undefined,
                onDuplicate: onDuplicate,
                onDelete: onDelete,
                onGroup: onGroup,
                onUngroup: onUngroup,
                onPlace: onPlace,
                selectionKey: selectionKey ?? ""
            }, void 0, false, {
                fileName: "[project]/components/Inspector.tsx",
                lineNumber: 410,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: "100%",
                display: "grid",
                placeItems: "center",
                color: p.outlineVariant,
                padding: 24,
                textAlign: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: "ads_click",
                size: 44
            }, void 0, false, {
                fileName: "[project]/components/Inspector.tsx",
                lineNumber: 437,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Inspector.tsx",
            lineNumber: 427,
            columnNumber: 7
        }, this);
    }
    /* the parts a tap sends somewhere and that fuse into a run are edited in the button's panel */ if (item.kind === "button" || item.kind === "iconButton" || item.kind === "chip" || item.kind === "splitButton" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFab"])(item.kind)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ButtonInspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonInspector"], {
            ai: ai,
            item: item,
            palette: p,
            frame: frame ?? null,
            onChange: onChange,
            onDelete: onDelete,
            onDuplicate: onDuplicate,
            locked: locked,
            onToggleLock: onToggleLock,
            onPlace: onPlace,
            measured: widths?.[item.id],
            selfRect: selfRect ?? null,
            allFrames: allFrames ?? frames,
            onShowOn: onShowOn,
            onShowMenu: onShowMenu
        }, void 0, false, {
            fileName: "[project]/components/Inspector.tsx",
            lineNumber: 444,
            columnNumber: 12
        }, this);
    }
    /* everything else shares one panel, built from the button's own */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PartInspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartInspector"], {
        ai: ai,
        item: item,
        palette: p,
        frame: frame ?? null,
        onChange: onChange,
        onDelete: onDelete,
        onDuplicate: onDuplicate,
        locked: locked,
        onToggleLock: onToggleLock,
        onPlace: onPlace,
        selfRect: selfRect ?? null,
        allFrames: allFrames ?? frames,
        measured: widths?.[item.id],
        railStandalone: railStandalone
    }, void 0, false, {
        fileName: "[project]/components/Inspector.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, this);
}
_s4(Inspector, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c6 = Inspector;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "VariantSwatch");
__turbopack_context__.k.register(_c1, "FrameSizePicker");
__turbopack_context__.k.register(_c2, "FrameChips");
__turbopack_context__.k.register(_c3, "TransitionPicker");
__turbopack_context__.k.register(_c4, "ActionEditor");
__turbopack_context__.k.register(_c5, "GroupPanel");
__turbopack_context__.k.register(_c6, "Inspector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Layers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayersPanel",
    ()=>LayersPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript) <export * as Reorder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* Rows never animate their size: opening a row only adds rows under it, so
 * nothing stretches. Only the drag itself moves.
 *
 * The panel is a tree with two kinds of level. A z level lists what is drawn on
 * top of what, front first: the runs of a screen, and the runs hidden inside a
 * free group. A run level lists the parts of one connected run in reading order
 * (left to right, top to bottom). Every level is reordered by dragging the
 * handle; the page turns the new order back into a group. */ function nameOf(it, lang) {
    const spec = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][it.kind];
    const noun = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"][lang][it.kind]?.noun ?? spec.label;
    return it.label.trim() || (it.kind === "iconButton" || it.kind === "fab" ? it.icon ?? noun : noun);
}
function runLabel(g, lang) {
    const first = g.items[0];
    const noun = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"][lang][first.kind]?.noun ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][first.kind].label;
    return g.free ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("group", lang)} × ${g.items.length}` : g.items.length > 1 ? `${noun} × ${g.items.length}` : nameOf(first, lang);
}
function Row({ id, p, depth, icon, label, on, onSelect, open, onToggle, locked, onLock, onDragging, children }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"])();
    const h = depth === 0 ? 40 : 36;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__["Reorder"].Item, {
        value: id,
        layout: "position",
        transition: {
            layout: {
                duration: 0
            }
        },
        dragListener: false,
        dragControls: controls,
        onDragStart: ()=>onDragging(true),
        onDragEnd: ()=>onDragging(false),
        style: {
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    height: h,
                    padding: "0 6px 0 2px",
                    marginLeft: depth * 14,
                    borderRadius: depth === 0 ? 14 : 12,
                    background: on ? p.secondaryContainer : depth === 0 ? p.surfaceContainerLow : p.surface,
                    color: on ? p.onSecondaryContainer : p.onSurface,
                    userSelect: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        onPointerDown: (e)=>{
                            e.preventDefault();
                            controls.start(e);
                        },
                        style: {
                            cursor: "grab",
                            color: p.outline,
                            display: "grid",
                            placeItems: "center",
                            width: depth === 0 ? 24 : 20,
                            height: h,
                            touchAction: "none"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "drag_indicator",
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/Layers.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Layers.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>onSelect(e.shiftKey),
                        style: {
                            flex: 1,
                            minWidth: 0,
                            height: h,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            border: "none",
                            background: "transparent",
                            color: "inherit",
                            cursor: "pointer",
                            padding: 0,
                            textAlign: "left"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-flex",
                                    gap: 2,
                                    color: on ? p.onSecondaryContainer : p.primary
                                },
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/components/Layers.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 12,
                                    fontWeight: depth === 0 ? 600 : 500,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/Layers.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Layers.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    onLock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLock,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(locked ? "unlock" : "lock", lang),
                        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(locked ? "unlock" : "lock", lang),
                        "aria-pressed": !!locked,
                        className: "m3-press",
                        style: {
                            width: 28,
                            height: 28,
                            borderRadius: 14,
                            border: "none",
                            background: "transparent",
                            color: locked ? on ? p.onSecondaryContainer : p.primary : p.outline,
                            cursor: "pointer",
                            padding: 0,
                            display: "grid",
                            placeItems: "center",
                            flex: "0 0 auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: locked ? "lock" : "lock_open",
                            size: 20,
                            fill: locked
                        }, void 0, false, {
                            fileName: "[project]/components/Layers.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Layers.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    onToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggle,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(open ? "hideParts" : "showParts", lang),
                        "aria-expanded": open,
                        className: "m3-press",
                        style: {
                            width: 28,
                            height: 28,
                            borderRadius: 14,
                            border: "none",
                            background: "transparent",
                            color: on ? p.onSecondaryContainer : p.onSurfaceVariant,
                            cursor: "pointer",
                            padding: 0,
                            display: "grid",
                            placeItems: "center",
                            flex: "0 0 auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: "inline-flex",
                                transform: open ? "rotate(90deg)" : "none",
                                transition: "transform 160ms"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "chevron_right",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/Layers.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Layers.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Layers.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Layers.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            open && children
        ]
    }, void 0, true, {
        fileName: "[project]/components/Layers.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(Row, "oqxk+pkDiUveY+xUY+GiaDixulA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"]
    ];
});
_c = Row;
/** One reorderable level: drag the handles; `values` is the shown order. */ function Level({ values, onReorder, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__["Reorder"].Group, {
        axis: "y",
        values: values,
        onReorder: onReorder,
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: 0,
            margin: 0
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Layers.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c1 = Level;
/** the parts of one connected run, in reading order */ function RunParts({ run, p, depth, sel, onSelect, onReorder, onDragging }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const ids = run.items.map((it)=>it.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Level, {
        values: ids,
        onReorder: onReorder,
        children: run.items.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                id: it.id,
                p: p,
                depth: depth,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][it.kind].paletteIcon,
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/components/Layers.tsx",
                    lineNumber: 180,
                    columnNumber: 17
                }, this),
                label: nameOf(it, lang),
                on: sel.has(it.id),
                onSelect: (add)=>onSelect([
                        it.id
                    ], add),
                onDragging: onDragging
            }, it.id, false, {
                fileName: "[project]/components/Layers.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Layers.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s1(RunParts, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = RunParts;
function LayersPanel({ p, frames, frameId, onFrame, groups, widths, selectedIds, onSelect, onReorder, onToggleLock, onReorderItems, onDragging }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const topFirst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LayersPanel.useMemo[topFirst]": ()=>[
                ...groups
            ].reverse()
    }["LayersPanel.useMemo[topFirst]"], [
        groups
    ]);
    const ids = topFirst.map((g)=>g.id);
    const sel = new Set(selectedIds);
    const [openIds, setOpenIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LayersPanel.useState": ()=>new Set()
    }["LayersPanel.useState"]);
    const toggle = (id)=>setOpenIds((cur)=>{
            const next = new Set(cur);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    /** the runs hidden in a free group, front first, and the flat back-to-front list they make */ const freeRuns = (g)=>[
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explodeGroup"])(g, widths)
        ].reverse();
    const flatten = (runsTopFirst)=>[
            ...runsTopFirst
        ].reverse().flatMap((r)=>r.items.map((it)=>it.id));
    const groupBody = (g, depth)=>{
        if (!g.free) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RunParts, {
                run: g,
                p: p,
                depth: depth,
                sel: sel,
                onSelect: onSelect,
                onReorder: (order)=>onReorderItems(g.id, order),
                onDragging: onDragging
            }, void 0, false, {
                fileName: "[project]/components/Layers.tsx",
                lineNumber: 245,
                columnNumber: 14
            }, this);
        }
        const runs = freeRuns(g);
        const runIds = runs.map((r)=>r.id);
        const byId = new Map(runs.map((r)=>[
                r.id,
                r
            ]));
        const reorderRuns = (next)=>onReorderItems(g.id, flatten(next.map((id)=>byId.get(id)).filter((r)=>!!r)));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Level, {
            values: runIds,
            onReorder: reorderRuns,
            children: runs.map((r)=>{
                const many = r.items.length > 1;
                const open = many && openIds.has(r.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                    id: r.id,
                    p: p,
                    depth: depth,
                    icon: r.items.slice(0, 3).map((it, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][it.kind].paletteIcon,
                            size: 16
                        }, k, false, {
                            fileName: "[project]/components/Layers.tsx",
                            lineNumber: 262,
                            columnNumber: 56
                        }, this)),
                    label: runLabel(r, lang),
                    on: r.items.some((it)=>sel.has(it.id)),
                    onSelect: (add)=>onSelect(r.items.map((it)=>it.id), add),
                    open: many ? open : undefined,
                    onToggle: many ? ()=>toggle(r.id) : undefined,
                    onDragging: onDragging,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RunParts, {
                        run: r,
                        p: p,
                        depth: depth + 1,
                        sel: sel,
                        onSelect: onSelect,
                        onDragging: onDragging,
                        onReorder: (order)=>{
                            /* the run's members take each other's places in the list; every other part keeps its own */ const members = new Set(r.items.map((it)=>it.id));
                            let k = 0;
                            onReorderItems(g.id, g.items.map((it)=>members.has(it.id) ? order[k++] : it.id));
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Layers.tsx",
                        lineNumber: 270,
                        columnNumber: 15
                    }, this)
                }, r.id, false, {
                    fileName: "[project]/components/Layers.tsx",
                    lineNumber: 257,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/Layers.tsx",
            lineNumber: 252,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100%"
        },
        children: [
            frames.length > 1 && /* the screen whose layers are listed, picked from a dropdown the way a tap's target is */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "12px 12px 4px",
                    flex: "0 0 auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    options: frames.map((f)=>({
                            key: f.id,
                            label: f.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screen", lang),
                            icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPhoneFrame"])(f) ? "smartphone" : "desktop_windows"
                        })),
                    value: frameId && frames.some((f)=>f.id === frameId) ? frameId : frames[0].id,
                    onChange: onFrame,
                    p: p,
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screens", lang)
                }, void 0, false, {
                    fileName: "[project]/components/Layers.tsx",
                    lineNumber: 299,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Layers.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-scrollbar",
                style: {
                    flex: 1,
                    overflowY: "auto",
                    padding: "8px 10px 12px"
                },
                children: topFirst.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: 24,
                        textAlign: "center",
                        color: p.outline,
                        fontSize: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "layers_clear",
                            size: 32
                        }, void 0, false, {
                            fileName: "[project]/components/Layers.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 8
                            },
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("noLayers", lang)
                        }, void 0, false, {
                            fileName: "[project]/components/Layers.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Layers.tsx",
                    lineNumber: 310,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Level, {
                    values: ids,
                    onReorder: onReorder,
                    children: topFirst.map((g)=>{
                        const canOpen = g.free || g.items.length > 1;
                        const open = canOpen && openIds.has(g.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            id: g.id,
                            p: p,
                            depth: 0,
                            icon: g.free ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "group_work",
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/Layers.tsx",
                                lineNumber: 325,
                                columnNumber: 34
                            }, this) : g.items.slice(0, 3).map((it, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][it.kind].paletteIcon,
                                    size: 18
                                }, k, false, {
                                    fileName: "[project]/components/Layers.tsx",
                                    lineNumber: 325,
                                    columnNumber: 108
                                }, this)),
                            label: runLabel(g, lang),
                            on: g.items.some((it)=>sel.has(it.id)),
                            onSelect: (add)=>onSelect(g.items.map((it)=>it.id), add),
                            open: canOpen ? open : undefined,
                            onToggle: canOpen ? ()=>toggle(g.id) : undefined,
                            locked: g.locked,
                            onLock: ()=>onToggleLock(g.id),
                            onDragging: onDragging,
                            children: groupBody(g, 1)
                        }, g.id, false, {
                            fileName: "[project]/components/Layers.tsx",
                            lineNumber: 320,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Layers.tsx",
                    lineNumber: 315,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Layers.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Layers.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_s2(LayersPanel, "j3qS1yx4XTwuqXjfbr2Inrlw2kM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c3 = LayersPanel;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Row");
__turbopack_context__.k.register(_c1, "Level");
__turbopack_context__.k.register(_c2, "RunParts");
__turbopack_context__.k.register(_c3, "LayersPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Loading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircularProgress",
    ()=>CircularProgress,
    "LinearProgress",
    ()=>LinearProgress,
    "LoadingIndicator",
    ()=>LoadingIndicator,
    "arcPath",
    ()=>arcPath,
    "wavePath",
    ()=>wavePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shapes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/shapes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
/* ---------- shared helpers ---------- */ /** Cubic bezier easing (same parametrisation as CSS / Compose CubicBezierEasing). */ function bezier(x1, y1, x2, y2) {
    const ax = 3 * x1 - 3 * x2 + 1;
    const bx = 3 * x2 - 6 * x1;
    const cx = 3 * x1;
    const ay = 3 * y1 - 3 * y2 + 1;
    const by = 3 * y2 - 6 * y1;
    const cy = 3 * y1;
    const sx = (t)=>((ax * t + bx) * t + cx) * t;
    const sy = (t)=>((ay * t + by) * t + cy) * t;
    return (x)=>{
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        let lo = 0;
        let hi = 1;
        let t = x;
        for(let i = 0; i < 24; i++){
            const v = sx(t);
            if (Math.abs(v - x) < 1e-4) break;
            if (v < x) lo = t;
            else hi = t;
            t = (lo + hi) / 2;
        }
        return sy(t);
    };
}
const seg = (t, from, to, ease)=>ease(Math.min(1, Math.max(0, (t - from) / (to - from))));
function useFrame(cb) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(cb);
    ref.current = cb;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFrame.useEffect": ()=>{
            let raf = 0;
            const loop = {
                "useFrame.useEffect.loop": (ts)=>{
                    ref.current(ts);
                    raf = requestAnimationFrame(loop);
                }
            }["useFrame.useEffect.loop"];
            raf = requestAnimationFrame(loop);
            return ({
                "useFrame.useEffect": ()=>cancelAnimationFrame(raf)
            })["useFrame.useEffect"];
        }
    }["useFrame.useEffect"], []);
}
_s(useFrame, "8uVE59eA/r6b92xF80p7sH8rXLk=");
function LoadingIndicator({ size, color, contained, containerColor }) {
    _s1();
    const pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const anim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!anim.current) anim.current = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shapes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingAnimator"]();
    const scale = size * 0.79 / 2;
    const c = size / 2;
    useFrame({
        "LoadingIndicator.useFrame": (ts)=>{
            const a = anim.current;
            a.update(ts);
            const pts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shapes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphedShape"])(a.morph);
            let d = "";
            for(let i = 0; i < pts.length; i++){
                d += (i === 0 ? "M" : "L") + (pts[i][0] * scale).toFixed(2) + " " + (pts[i][1] * scale).toFixed(2);
            }
            const el = pathRef.current;
            if (el) {
                el.setAttribute("d", d + "Z");
                el.setAttribute("transform", `translate(${c} ${c}) rotate(${a.rotation.toFixed(2)})`);
            }
        }
    }["LoadingIndicator.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        style: {
            display: "block"
        },
        children: [
            contained && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: c,
                cy: c,
                r: c,
                fill: containerColor ?? "rgba(0,0,0,0.08)"
            }, void 0, false, {
                fileName: "[project]/components/Loading.tsx",
                lineNumber: 89,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                ref: pathRef,
                fill: color
            }, void 0, false, {
                fileName: "[project]/components/Loading.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Loading.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s1(LoadingIndicator, "koEXB0QSiThRTx80vxPut0tEDzs=", false, function() {
    return [
        useFrame
    ];
});
_c = LoadingIndicator;
/* ---------- linear progress (flat / wavy) ---------- */ const LINEAR_CYCLE = 1800;
const l1Head = bezier(0.2, 0, 0.8, 1);
const l1Tail = bezier(0.4, 0, 1, 1);
const l2Head = bezier(0, 0, 0.65, 1);
const l2Tail = bezier(0.1, 0, 0.45, 1);
const TRACK_GAP = 4;
const LINEAR_WAVELENGTH = 40;
const LINEAR_AMPLITUDE = 3;
const WAVE_SPEED = 40; // px per second
function wavePath(x0, x1, mid, amp, phase, wl) {
    if (x1 - x0 < 0.5) return "";
    const step = amp > 0 ? 2 : Math.max(2, x1 - x0);
    let d = "";
    for(let x = x0;; x += step){
        const xx = Math.min(x, x1);
        const y = mid + amp * Math.sin(2 * Math.PI * xx / wl + phase);
        d += (d ? "L" : "M") + xx.toFixed(2) + " " + y.toFixed(2);
        if (xx >= x1) break;
    }
    return d;
}
function LinearProgress({ width, color, trackColor, wavy, value, trackThickness = 4 }) {
    _s2();
    const height = trackThickness + (wavy ? LINEAR_AMPLITUDE * 2 : 0) + 2;
    const mid = height / 2;
    const inset = trackThickness / 2;
    const w = width - trackThickness;
    // Preserve the original 4dp gaps; any other thickness accounts for both round caps.
    const gapInset = trackThickness === 4 ? trackThickness / 2 : trackThickness;
    // The stop indicator is as tall as the track, as Material draws it.
    const stop = trackThickness;
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const active2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    useFrame({
        "LinearProgress.useFrame": (ts)=>{
            if (!start.current) start.current = ts;
            const ms = ts - start.current;
            const phase = wavy ? -(ms / 1000) * WAVE_SPEED * 2 * Math.PI / LINEAR_WAVELENGTH : 0;
            const ampBase = wavy ? LINEAR_AMPLITUDE : 0;
            const a = activeRef.current;
            const b = active2Ref.current;
            const t = trackRef.current;
            if (!a || !b || !t) return;
            if (value !== undefined) {
                const v = Math.min(1, Math.max(0, value));
                const amp = v < 0.1 || v > 0.95 ? 0 : ampBase;
                const end = inset + w * v;
                a.setAttribute("d", wavePath(inset, end, mid, amp, phase, LINEAR_WAVELENGTH));
                b.setAttribute("d", "");
                // a stub of track always remains under the stop indicator
                const trackStart = Math.min(inset + w - stop, end + TRACK_GAP + gapInset);
                t.setAttribute("d", wavePath(v <= 0 ? inset : trackStart, inset + w, mid, 0, 0, 1));
                return;
            }
            const c = ms % LINEAR_CYCLE;
            const h1 = seg(c, 0, 750, l1Head);
            const t1 = seg(c, 333, 1183, l1Tail);
            const h2 = seg(c, 1000, 1567, l2Head);
            const t2 = seg(c, 1267, 1800, l2Tail);
            const s1 = [
                inset + w * t1,
                inset + w * h1
            ];
            const s2 = [
                inset + w * t2,
                inset + w * h2
            ];
            a.setAttribute("d", wavePath(s1[0], s1[1], mid, ampBase, phase, LINEAR_WAVELENGTH));
            b.setAttribute("d", wavePath(s2[0], s2[1], mid, ampBase, phase, LINEAR_WAVELENGTH));
            const segs = [
                s1,
                s2
            ].filter({
                "LinearProgress.useFrame.segs": (s)=>s[1] - s[0] > 0.5
            }["LinearProgress.useFrame.segs"]).sort({
                "LinearProgress.useFrame.segs": (p, q)=>p[0] - q[0]
            }["LinearProgress.useFrame.segs"]);
            let cursor = inset;
            let d = "";
            for (const s of segs){
                const to = s[0] - TRACK_GAP - gapInset;
                if (to - cursor > 0.5) d += wavePath(cursor, to, mid, 0, 0, 1);
                cursor = Math.max(cursor, s[1] + TRACK_GAP + gapInset);
            }
            if (inset + w - cursor > 0.5) d += wavePath(cursor, inset + w, mid, 0, 0, 1);
            t.setAttribute("d", d);
        }
    }["LinearProgress.useFrame"]);
    const stroke = {
        fill: "none",
        strokeWidth: trackThickness,
        strokeLinecap: "round"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: `0 0 ${width} ${height}`,
        style: {
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                ref: trackRef,
                stroke: trackColor,
                ...stroke
            }, void 0, false, {
                fileName: "[project]/components/Loading.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                ref: activeRef,
                stroke: color,
                ...stroke
            }, void 0, false, {
                fileName: "[project]/components/Loading.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                ref: active2Ref,
                stroke: color,
                ...stroke
            }, void 0, false, {
                fileName: "[project]/components/Loading.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            value !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: width - inset - stop / 2,
                cy: mid,
                r: stop / 2,
                fill: color
            }, void 0, false, {
                fileName: "[project]/components/Loading.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Loading.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
_s2(LinearProgress, "N0vAxweUkdysaEgscIWnogATFlQ=", false, function() {
    return [
        useFrame
    ];
});
_c1 = LinearProgress;
/* ---------- circular progress (flat / wavy) ---------- */ const ROTATION_MS = 1332;
const ROTATIONS_PER_CYCLE = 5;
const BASE_ROTATION = 286;
const JUMP_ROTATION = 290;
const ROTATION_OFFSET = (BASE_ROTATION + JUMP_ROTATION) % 360;
const circEase = bezier(0.4, 0, 0.2, 1);
const CIRC_WAVELENGTH = 20;
const CIRC_AMPLITUDE = 1.5;
function arcPath(cx, cy, r, a0, a1, amp, k, phase) {
    if (a1 - a0 < 0.05) return "";
    const step = amp > 0 ? 2 : 6;
    let d = "";
    for(let a = a0;; a += step){
        const aa = Math.min(a, a1);
        const rad = aa * Math.PI / 180;
        const rr = r + amp * Math.sin(k * rad + phase);
        d += (d ? "L" : "M") + (cx + rr * Math.cos(rad)).toFixed(2) + " " + (cy + rr * Math.sin(rad)).toFixed(2);
        if (aa >= a1) break;
    }
    return d;
}
function CircularProgress({ size, color, trackColor, wavy, value, trackThickness = 4 }) {
    _s3();
    const amp = wavy ? CIRC_AMPLITUDE : 0;
    const r = size / 2 - trackThickness / 2 - amp;
    const c = size / 2;
    const k = Math.max(3, Math.round(2 * Math.PI * r / CIRC_WAVELENGTH));
    const gapDeg = (TRACK_GAP + trackThickness) / (2 * Math.PI * r) * 360;
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    useFrame({
        "CircularProgress.useFrame": (ts)=>{
            if (!start.current) start.current = ts;
            const ms = ts - start.current;
            const phase = wavy ? -(ms / 1000) * 2 * Math.PI : 0;
            const a = activeRef.current;
            const t = trackRef.current;
            if (!a || !t) return;
            if (value !== undefined) {
                const v = Math.min(1, Math.max(0, value));
                const sweep = 360 * v;
                const useAmp = v < 0.05 || v > 0.95 ? 0 : amp;
                a.setAttribute("d", arcPath(c, c, r, -90, -90 + sweep, useAmp, k, phase));
                const trackFrom = -90 + sweep + (v > 0 ? gapDeg : 0);
                const trackTo = 270 - (v < 1 ? gapDeg : 0);
                t.setAttribute("d", v >= 1 ? "" : arcPath(c, c, r, trackFrom, trackTo, 0, k, 0));
                return;
            }
            const cycle = ROTATION_MS * ROTATIONS_PER_CYCLE;
            const inCycle = ms % cycle;
            const rotIndex = Math.floor(inCycle / ROTATION_MS);
            const inRot = inCycle % ROTATION_MS;
            const baseRotation = BASE_ROTATION * inCycle / cycle * ROTATIONS_PER_CYCLE;
            const head = seg(inRot, 0, 666, circEase) * JUMP_ROTATION;
            const tail = seg(inRot, 666, 1332, circEase) * JUMP_ROTATION;
            const offset = rotIndex * ROTATION_OFFSET % 360;
            const startAngle = tail + offset + baseRotation - 90;
            const sweep = Math.max(0.1, head - tail);
            a.setAttribute("d", arcPath(c, c, r, startAngle, startAngle + sweep, amp, k, phase));
            const trackFrom = startAngle + sweep + gapDeg;
            const trackTo = startAngle + 360 - gapDeg;
            t.setAttribute("d", trackTo - trackFrom > 1 ? arcPath(c, c, r, trackFrom, trackTo, 0, k, 0) : "");
        }
    }["CircularProgress.useFrame"]);
    const stroke = {
        fill: "none",
        strokeWidth: trackThickness,
        strokeLinecap: "round"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        style: {
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                ref: trackRef,
                stroke: trackColor,
                ...stroke
            }, void 0, false, {
                fileName: "[project]/components/Loading.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                ref: activeRef,
                stroke: color,
                ...stroke
            }, void 0, false, {
                fileName: "[project]/components/Loading.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Loading.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
_s3(CircularProgress, "9xqO+fTYVEqbaAY2C+7BOREpDYc=", false, function() {
    return [
        useFrame
    ];
});
_c2 = CircularProgress;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LoadingIndicator");
__turbopack_context__.k.register(_c1, "LinearProgress");
__turbopack_context__.k.register(_c2, "CircularProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Menus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangMenu",
    ()=>LangMenu,
    "Popover",
    ()=>Popover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
function Popover({ p, icon, title, side = "down", size = 40, children }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popover.useEffect": ()=>{
            if (!open) return;
            const onDown = {
                "Popover.useEffect.onDown": (e)=>{
                    if (!ref.current?.contains(e.target)) setOpen(false);
                }
            }["Popover.useEffect.onDown"];
            const onKey = {
                "Popover.useEffect.onKey": (e)=>e.key === "Escape" && setOpen(false)
            }["Popover.useEffect.onKey"];
            window.addEventListener("pointerdown", onDown);
            window.addEventListener("keydown", onKey);
            return ({
                "Popover.useEffect": ()=>{
                    window.removeEventListener("pointerdown", onDown);
                    window.removeEventListener("keydown", onKey);
                }
            })["Popover.useEffect"];
        }
    }["Popover.useEffect"], [
        open
    ]);
    const anchor = side === "down" ? {
        top: size + 8,
        right: 0,
        transformOrigin: "top right"
    } : {
        left: size + 8,
        bottom: 0,
        transformOrigin: "bottom left"
    };
    const hidden = side === "down" ? {
        opacity: 0,
        y: -6,
        scale: 0.96
    } : {
        opacity: 0,
        x: -6,
        scale: 0.96
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                icon: icon,
                p: p,
                on: open,
                onClick: ()=>setOpen((o)=>!o),
                title: title,
                size: size
            }, void 0, false, {
                fileName: "[project]/components/Menus.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    role: "menu",
                    initial: hidden,
                    animate: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1
                    },
                    exit: hidden,
                    transition: {
                        duration: 0.16,
                        ease: EASE
                    },
                    style: {
                        position: "absolute",
                        padding: 6,
                        borderRadius: 18,
                        background: p.surfaceContainerLow,
                        boxShadow: "0 6px 20px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.04)",
                        zIndex: 60,
                        ...anchor
                    },
                    children: children(()=>setOpen(false))
                }, void 0, false, {
                    fileName: "[project]/components/Menus.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Menus.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Menus.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Popover, "wl9VvfhnMVWQ+kCekFjcRPEi3/0=");
_c = Popover;
function LangMenu({ p, onLang, side, size }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Popover, {
        p: p,
        icon: "translate",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("language", lang),
        side: side,
        size: size,
        children: (close)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    minWidth: 140
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGS"].map((l)=>{
                    const on = l.key === lang;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "menuitemradio",
                        "aria-checked": on,
                        onClick: ()=>{
                            onLang(l.key);
                            close();
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
                            whiteSpace: "nowrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 18,
                                    display: "inline-flex"
                                },
                                children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "check",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/Menus.tsx",
                                    lineNumber: 111,
                                    columnNumber: 76
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Menus.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, this),
                            l.label
                        ]
                    }, l.key, true, {
                        fileName: "[project]/components/Menus.tsx",
                        lineNumber: 86,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/Menus.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
    }, void 0, false, {
        fileName: "[project]/components/Menus.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s1(LangMenu, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = LangMenu;
var _c, _c1;
__turbopack_context__.k.register(_c, "Popover");
__turbopack_context__.k.register(_c1, "LangMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Mobile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomSheet",
    ()=>BottomSheet,
    "MobileActionBar",
    ()=>MobileActionBar,
    "MobileInspector",
    ()=>MobileInspector,
    "MobileLang",
    ()=>MobileLang,
    "MobileSettings",
    ()=>MobileSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IconPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/IconPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Inspector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
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
function BottomSheet({ p, onClose, children }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            y: "100%"
        },
        animate: {
            y: 0
        },
        exit: {
            y: "100%"
        },
        transition: {
            type: "spring",
            stiffness: 420,
            damping: 38,
            mass: 0.8
        },
        drag: "y",
        dragListener: false,
        dragControls: controls,
        dragConstraints: {
            top: 0
        },
        dragElastic: {
            top: 0,
            bottom: 1
        },
        dragTransition: {
            bounceStiffness: 500,
            bounceDamping: 40
        },
        onDragEnd: (_, info)=>{
            if (info.offset.y > 90 || info.velocity.y > 600) onClose();
        },
        style: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            maxHeight: "72%",
            display: "flex",
            flexDirection: "column",
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            background: p.surfaceContainerLow,
            boxShadow: "0 -6px 24px rgba(0,0,0,0.16)",
            zIndex: 60,
            paddingBottom: "calc(var(--bottom-ui, 0px) + env(safe-area-inset-bottom))"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                onPointerDown: (e)=>controls.start(e),
                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("close", lang),
                style: {
                    height: 30,
                    border: "none",
                    background: "transparent",
                    display: "grid",
                    placeItems: "center",
                    cursor: "grab",
                    flex: "0 0 auto",
                    touchAction: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        width: 32,
                        height: 4,
                        borderRadius: 2,
                        background: p.outlineVariant
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-scrollbar",
                style: {
                    overflowY: "auto",
                    padding: "0 14px 16px",
                    minHeight: 0
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Mobile.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(BottomSheet, "oqxk+pkDiUveY+xUY+GiaDixulA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"]
    ];
});
_c = BottomSheet;
function Row({ icon, label, p, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 6,
                    color: p.onSurfaceVariant,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: icon,
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/Mobile.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c1 = Row;
function MobileInspector({ item, palette: p, onChange, onDelete, onDuplicate, onClose }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const spec = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][item.kind];
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconSlotsOf"])(item).filter((s)=>!s.key.startsWith("tab:"));
    const [slotKey, setSlotKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(slots[0]?.key ?? "icon");
    const [pickerOpen, setPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileInspector.useEffect": ()=>{
            setSlotKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconSlotsOf"])(item)[0]?.key ?? "icon");
            setPickerOpen(false);
            setTabSlot(null);
        }
    }["MobileInspector.useEffect"], [
        item.id,
        item.kind,
        item.tabs?.length
    ]);
    const activeSlot = slots.find((s)=>s.key === slotKey) ?? slots[0];
    const variants = spec.hasVariant ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantsOf"])(item.kind) : [];
    const tabs = item.tabs ?? [];
    const [tabSlot, setTabSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const setTabCount = (n)=>{
        const defaults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTabsFor"])(item.kind);
        const next = [];
        for(let i = 0; i < n; i++)next.push(tabs[i] ? {
            ...tabs[i]
        } : {
            ...defaults[i % defaults.length]
        });
        onChange({
            tabs: next,
            selected: item.selected !== undefined && item.selected >= n ? undefined : item.selected
        });
    };
    /* a dropdown's rows are options: no icons, and one of them may be the initial value */ const isSelect = item.kind === "select";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            background: p.secondaryContainer,
                            color: p.onSecondaryContainer,
                            display: "grid",
                            placeItems: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: spec.paletteIcon,
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/components/Mobile.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 16,
                            fontWeight: 700,
                            color: p.onSurface,
                            flex: 1
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"][lang][item.kind]?.noun ?? spec.label
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                        icon: "content_copy",
                        p: p,
                        onClick: onDuplicate,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("duplicate", lang),
                        size: 44
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                        icon: "delete",
                        p: p,
                        danger: true,
                        onClick: onDelete,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("delete", lang),
                        size: 44
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                        icon: "check",
                        p: p,
                        on: true,
                        onClick: onClose,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("done", lang),
                        size: 44
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            (spec.hasLabel || spec.hasSupporting) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "title",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("text", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 6
                    },
                    children: [
                        spec.hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 6,
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    value: item.label,
                                    onChange: (label)=>onChange({
                                            label
                                        }),
                                    placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("label", lang),
                                    p: p,
                                    icon: "short_text",
                                    height: 48
                                }, void 0, false, {
                                    fileName: "[project]/components/Mobile.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this),
                                item.kind === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                    icon: "format_bold",
                                    p: p,
                                    size: 48,
                                    on: !!item.bold,
                                    onClick: ()=>onChange({
                                            bold: !item.bold
                                        }),
                                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("bold", lang)
                                }, void 0, false, {
                                    fileName: "[project]/components/Mobile.tsx",
                                    lineNumber: 164,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Mobile.tsx",
                            lineNumber: 161,
                            columnNumber: 15
                        }, this),
                        spec.hasSupporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            value: item.supporting ?? "",
                            onChange: (supporting)=>onChange({
                                    supporting
                                }),
                            placeholder: item.kind === "snackbar" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("action", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("supporting", lang),
                            p: p,
                            icon: "notes",
                            height: 48
                        }, void 0, false, {
                            fileName: "[project]/components/Mobile.tsx",
                            lineNumber: 169,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            spec.hasTabs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: isSelect ? "list" : "view_column",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(isSelect ? "options" : "tabs", lang),
                p: p,
                children: [
                    !isSelect && item.kind !== "tabs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                        options: (item.kind === "toolbar" ? [
                            2,
                            3,
                            4,
                            5,
                            6
                        ] : [
                            2,
                            3,
                            4,
                            5
                        ]).map((n)=>({
                                key: String(n),
                                label: String(n)
                            })),
                        value: String(tabs.length),
                        onChange: (k)=>setTabCount(Number(k)),
                        p: p,
                        height: 44
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                            marginTop: 8
                        },
                        children: tabs.map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 6,
                                    alignItems: "center"
                                },
                                children: [
                                    isSelect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                        icon: item.selected === i ? "radio_button_checked" : "radio_button_unchecked",
                                        p: p,
                                        size: 48,
                                        on: item.selected === i,
                                        onClick: ()=>onChange({
                                                selected: item.selected === i ? undefined : i
                                            }),
                                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("selectedOption", lang)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Mobile.tsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, this),
                                    item.kind !== "tabs" && !isSelect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                        icon: tab.icon || "add",
                                        p: p,
                                        size: 48,
                                        on: tabSlot === i,
                                        onClick: ()=>{
                                            setTabSlot(tabSlot === i ? null : i);
                                            setPickerOpen(false);
                                        },
                                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("changeIcon", lang)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Mobile.tsx",
                                        lineNumber: 207,
                                        columnNumber: 19
                                    }, this),
                                    item.kind !== "toolbar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        value: tab.label,
                                        onChange: (label)=>onChange({
                                                tabs: tabs.map((x, j)=>j === i ? {
                                                        ...x,
                                                        label
                                                    } : x)
                                            }),
                                        placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("label", lang),
                                        p: p,
                                        height: 48
                                    }, void 0, false, {
                                        fileName: "[project]/components/Mobile.tsx",
                                        lineNumber: 210,
                                        columnNumber: 19
                                    }, this),
                                    isSelect && tabs.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                        icon: "close",
                                        p: p,
                                        size: 48,
                                        onClick: ()=>onChange({
                                                tabs: tabs.filter((_, j)=>j !== i),
                                                selected: item.selected === undefined ? undefined : item.selected === i ? undefined : item.selected > i ? item.selected - 1 : item.selected
                                            }),
                                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("removeOption", lang)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Mobile.tsx",
                                        lineNumber: 213,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Mobile.tsx",
                                lineNumber: 195,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    isSelect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange({
                                tabs: [
                                    ...tabs,
                                    {
                                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTabsFor"])(item.kind)[tabs.length % (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTabsFor"])(item.kind).length]
                                    }
                                ]
                            }),
                        className: "m3-press",
                        style: {
                            marginTop: 8,
                            height: 48,
                            width: "100%",
                            borderRadius: 24,
                            border: `1px solid ${p.outline}`,
                            background: "transparent",
                            color: p.primary,
                            fontSize: 14,
                            fontWeight: 600,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "add",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/Mobile.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("addOption", lang)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 225,
                        columnNumber: 13
                    }, this),
                    tabSlot !== null && tabs[tabSlot] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IconPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPicker"], {
                            value: tabs[tabSlot].icon || null,
                            onChange: (icon)=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIconSlot"])(item, `tab:${tabSlot}`, icon)),
                            onClose: ()=>setTabSlot(null),
                            palette: p
                        }, void 0, false, {
                            fileName: "[project]/components/Mobile.tsx",
                            lineNumber: 236,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 235,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this),
            slots.length > 0 && activeSlot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "emoji_symbols",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("icon", lang),
                p: p,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 6,
                            flexWrap: "wrap"
                        },
                        children: [
                            slots.map((s)=>{
                                const on = s.key === activeSlot.key && pickerOpen;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setTabSlot(null);
                                        setSlotKey(s.key);
                                        setPickerOpen(!(on && pickerOpen));
                                    },
                                    title: s.label,
                                    className: "m3-press",
                                    style: {
                                        height: 48,
                                        minWidth: 48,
                                        padding: slots.length > 1 ? "0 14px 0 10px" : 0,
                                        borderRadius: 24,
                                        border: "none",
                                        background: on ? p.primary : p.surfaceContainerHigh,
                                        color: on ? p.onPrimary : s.value ? p.onSurface : p.outline,
                                        cursor: "pointer",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 8,
                                        fontSize: 13,
                                        fontWeight: 600
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: s.value ?? "block",
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/components/Mobile.tsx",
                                            lineNumber: 274,
                                            columnNumber: 19
                                        }, this),
                                        slots.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: s.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Mobile.tsx",
                                            lineNumber: 275,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, s.key, true, {
                                    fileName: "[project]/components/Mobile.tsx",
                                    lineNumber: 248,
                                    columnNumber: 17
                                }, this);
                            }),
                            activeSlot.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIconSlot"])(item, activeSlot.key, null)),
                                className: "m3-press",
                                style: {
                                    height: 48,
                                    padding: "0 14px 0 10px",
                                    borderRadius: 24,
                                    border: `1px solid ${p.outline}`,
                                    background: "transparent",
                                    color: p.onSurfaceVariant,
                                    cursor: "pointer",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 6,
                                    fontSize: 13,
                                    fontWeight: 600
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "close",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/Mobile.tsx",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("noIcon", lang)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Mobile.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this),
                    pickerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IconPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPicker"], {
                            value: activeSlot.value,
                            onChange: (icon)=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIconSlot"])(item, activeSlot.key, icon)),
                            onClose: ()=>setPickerOpen(false),
                            palette: p
                        }, void 0, false, {
                            fileName: "[project]/components/Mobile.tsx",
                            lineNumber: 305,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 304,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 243,
                columnNumber: 9
            }, this),
            variants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "palette",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("style", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "no-scrollbar",
                    style: {
                        display: "flex",
                        gap: 6,
                        overflowX: "auto",
                        padding: "3px 3px 6px"
                    },
                    children: variants.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariantSwatch"], {
                            v: v.key,
                            label: v.label,
                            p: p,
                            on: item.variant === v.key,
                            onClick: ()=>onChange({
                                    variant: v.key
                                })
                        }, v.key, false, {
                            fileName: "[project]/components/Mobile.tsx",
                            lineNumber: 315,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 313,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, this),
            spec.hasChecked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "tune",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("state", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                    on: !!item.checked,
                    onChange: (checked)=>onChange({
                            checked
                        }),
                    p: p,
                    icon: item.kind === "chip" ? "check_circle" : item.kind === "box" ? "drag_handle" : "toggle_on",
                    label: item.kind === "chip" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("selected", lang) : item.kind === "box" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("handle", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("on", lang)
                }, void 0, false, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 323,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 322,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "bolt",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("behavior", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    value: item.note ?? "",
                    onChange: (note)=>onChange({
                            note
                        }),
                    placeholder: [
                        "button",
                        "fab",
                        "iconButton",
                        "extendedFab"
                    ].includes(item.kind) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("whenPressed", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("whatItDoes", lang),
                    p: p,
                    icon: "bolt",
                    height: 48
                }, void 0, false, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Mobile.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s1(MobileInspector, "fcOPCuUhaWksuf95mM5Kn0r+7Sc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = MobileInspector;
function MobileLang({ palette: p, lang, onLang }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
        icon: "translate",
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("language", lang),
        p: p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 4
            },
            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGS"].map((l)=>{
                const on = l.key === lang;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onLang(l.key),
                    "aria-pressed": on,
                    className: "m3-press",
                    style: {
                        height: 52,
                        padding: "0 16px 0 12px",
                        borderRadius: 16,
                        border: "none",
                        background: on ? p.secondaryContainer : p.surfaceContainerHigh,
                        color: on ? p.onSecondaryContainer : p.onSurface,
                        fontSize: 15,
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        textAlign: "left"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: 22,
                                display: "inline-flex"
                            },
                            children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check",
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/components/Mobile.tsx",
                                lineNumber: 369,
                                columnNumber: 74
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Mobile.tsx",
                            lineNumber: 369,
                            columnNumber: 15
                        }, this),
                        l.label
                    ]
                }, l.key, true, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 348,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/Mobile.tsx",
            lineNumber: 344,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Mobile.tsx",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
_c3 = MobileLang;
function MobileSettings({ palette: p, paletteKey, onPalette, theme, onTheme }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const shapeLabel = (k)=>k === "square" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shapeSquare", lang) : k === "full" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shapeFull", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shapeRounded", lang);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "brightness_6",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("brightness", lang),
                p: p,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                        options: [
                            {
                                key: "light",
                                icon: "light_mode",
                                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("light", lang)
                            },
                            {
                                key: "dark",
                                icon: "dark_mode",
                                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("dark", lang)
                            }
                        ],
                        value: theme.dark ? "dark" : "light",
                        onChange: (k)=>onTheme({
                                dark: k === "dark"
                            }),
                        p: p,
                        height: 44
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                            on: theme.bothModes,
                            onChange: (bothModes)=>onTheme({
                                    bothModes
                                }),
                            p: p,
                            icon: "routine",
                            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("bothModes", lang),
                            grow: true
                        }, void 0, false, {
                            fileName: "[project]/components/Mobile.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "contrast",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("contrast", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRASTS"].map((c)=>({
                            key: c.key,
                            label: c.key === "high" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("contrastHigh", lang) : c.key === "medium" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("contrastMedium", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("contrastStandard", lang)
                        })),
                    value: theme.contrast,
                    onChange: (contrast)=>onTheme({
                            contrast
                        }),
                    p: p,
                    height: 44
                }, void 0, false, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "palette",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("theme", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 10,
                        flexWrap: "wrap",
                        padding: "2px 0"
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTES"].map((pal)=>{
                        const on = pal.key === paletteKey;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onPalette(pal.key),
                            title: pal.label,
                            "aria-label": pal.label,
                            "aria-pressed": on,
                            className: "m3-press",
                            style: {
                                width: 48,
                                height: 48,
                                borderRadius: 24,
                                border: "none",
                                background: pal.primary,
                                color: pal.onPrimary,
                                cursor: "pointer",
                                display: "grid",
                                placeItems: "center",
                                outline: on ? `3px solid ${p.onSurface}` : "3px solid transparent",
                                outlineOffset: 3
                            },
                            children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check",
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Mobile.tsx",
                                lineNumber: 447,
                                columnNumber: 24
                            }, this)
                        }, pal.key, false, {
                            fileName: "[project]/components/Mobile.tsx",
                            lineNumber: 426,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 422,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "rounded_corner",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shape", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHAPES"].map((s)=>({
                            key: s.key,
                            icon: s.icon,
                            label: shapeLabel(s.key)
                        })),
                    value: theme.shape,
                    onChange: (shape)=>onTheme({
                            shape
                        }),
                    p: p,
                    height: 44
                }, void 0, false, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 453,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "text_fields",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("typography", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4
                    },
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONTS"].map((f)=>{
                            const on = theme.font === f.key;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureFontLoaded"])(f.key);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onTheme({
                                        font: f.key
                                    }),
                                "aria-pressed": on,
                                className: "m3-press",
                                style: {
                                    height: 48,
                                    padding: "0 16px 0 12px",
                                    borderRadius: 16,
                                    border: "none",
                                    background: on ? p.secondaryContainer : p.surfaceContainerHigh,
                                    color: on ? p.onSecondaryContainer : p.onSurface,
                                    fontSize: 15,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    textAlign: "left",
                                    fontFamily: f.family
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 22,
                                            display: "inline-flex"
                                        },
                                        children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "check",
                                            size: 22
                                        }, void 0, false, {
                                            fileName: "[project]/components/Mobile.tsx",
                                            lineNumber: 490,
                                            columnNumber: 76
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Mobile.tsx",
                                        lineNumber: 490,
                                        columnNumber: 17
                                    }, this),
                                    f.label
                                ]
                            }, f.key, true, {
                                fileName: "[project]/components/Mobile.tsx",
                                lineNumber: 468,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 4
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                on: theme.emphasized,
                                onChange: (emphasized)=>onTheme({
                                        emphasized
                                    }),
                                p: p,
                                icon: "format_bold",
                                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("emphasized", lang)
                            }, void 0, false, {
                                fileName: "[project]/components/Mobile.tsx",
                                lineNumber: 496,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Mobile.tsx",
                            lineNumber: 495,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 463,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                icon: "animation",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("motion", lang),
                p: p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                    options: [
                        {
                            key: "standard",
                            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("motionStandard", lang)
                        },
                        {
                            key: "expressive",
                            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("motionExpressive", lang)
                        }
                    ],
                    value: theme.motion,
                    onChange: (motion)=>onTheme({
                            motion
                        }),
                    p: p,
                    height: 44
                }, void 0, false, {
                    fileName: "[project]/components/Mobile.tsx",
                    lineNumber: 501,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Mobile.tsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
_s2(MobileSettings, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = MobileSettings;
function MobileActionBar({ p, onEdit, onDuplicate, onDelete }) {
    _s3();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            left: 14,
            bottom: "calc(16px + var(--bottom-ui, 0px) + env(safe-area-inset-bottom))",
            display: "flex",
            gap: 4,
            padding: 6,
            borderRadius: 32,
            background: p.surface,
            boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
            zIndex: 46
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onEdit,
                className: "m3-press",
                style: {
                    height: 52,
                    padding: "0 20px 0 16px",
                    borderRadius: 26,
                    border: "none",
                    background: p.primary,
                    color: p.onPrimary,
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "tune",
                        size: 22
                    }, void 0, false, {
                        fileName: "[project]/components/Mobile.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("edit", lang)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 544,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                icon: "content_copy",
                p: p,
                size: 52,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("duplicate", lang),
                onClick: onDuplicate
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                icon: "delete",
                p: p,
                size: 52,
                danger: true,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("delete", lang),
                onClick: onDelete
            }, void 0, false, {
                fileName: "[project]/components/Mobile.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Mobile.tsx",
        lineNumber: 530,
        columnNumber: 5
    }, this);
}
_s3(MobileActionBar, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c5 = MobileActionBar;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "BottomSheet");
__turbopack_context__.k.register(_c1, "Row");
__turbopack_context__.k.register(_c2, "MobileInspector");
__turbopack_context__.k.register(_c3, "MobileLang");
__turbopack_context__.k.register(_c4, "MobileSettings");
__turbopack_context__.k.register(_c5, "MobileActionBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PartPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiIconBtn",
    ()=>AiIconBtn,
    "AlignBox",
    ()=>AlignBox,
    "CornerRows",
    ()=>CornerRows,
    "EdgeCornerRows",
    ()=>EdgeCornerRows,
    "EntryList",
    ()=>EntryList,
    "FillRun",
    ()=>FillRun,
    "IconCell",
    ()=>IconCell,
    "IconRow",
    ()=>IconRow,
    "IconStrip",
    ()=>IconStrip,
    "ListStyleRun",
    ()=>ListStyleRun,
    "NoTriggerNote",
    ()=>NoTriggerNote,
    "NoteSection",
    ()=>NoteSection,
    "PartHeader",
    ()=>PartHeader,
    "PartMenu",
    ()=>PartMenu,
    "PartTabs",
    ()=>PartTabs,
    "StyleRun",
    ()=>StyleRun,
    "TABS_H",
    ()=>TABS_H,
    "TriggerSection",
    ()=>TriggerSection,
    "WidthRows",
    ()=>WidthRows,
    "WidthRun",
    ()=>WidthRun,
    "actionOptionsOf",
    ()=>actionOptionsOf,
    "hasTrigger",
    ()=>hasTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript) <export * as Reorder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IconPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/IconPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Inspector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TapStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TapStage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature(), _s17 = __turbopack_context__.k.signature(), _s18 = __turbopack_context__.k.signature(), _s19 = __turbopack_context__.k.signature(), _s20 = __turbopack_context__.k.signature(), _s21 = __turbopack_context__.k.signature();
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
const COL_KIND = [
    "left",
    "centerH",
    "right"
];
const ROW_KIND = [
    "top",
    "centerV",
    "bottom"
];
/** the glyph a cell turns into once picked: three short bars sitting where the part now sits */ function AlignGlyph({ c, r, color }) {
    const place = [
        "flex-start",
        "center",
        "flex-end"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
        style: {
            width: 22,
            height: 22,
            display: "flex",
            flexDirection: "column",
            justifyContent: place[r],
            alignItems: place[c]
        },
        children: [
            14,
            8,
            11
        ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: w,
                    height: 3,
                    borderRadius: 2,
                    background: color,
                    marginTop: i ? 2 : 0
                }
            }, i, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c = AlignGlyph;
const TABS_H = 48;
function PartTabs({ value, onChange, p, idPrefix = "part" }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const tabs = [
        {
            key: "design",
            icon: "palette",
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("design", lang)
        },
        {
            key: "behavior",
            icon: "bolt",
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("trigger", lang)
        }
    ];
    const walk = (e, d)=>{
        e.preventDefault();
        const at = tabs.findIndex((tab)=>tab.key === value);
        const next = tabs[(at + d + tabs.length) % tabs.length].key;
        onChange(next);
        e.currentTarget.parentElement?.querySelector(`#${idPrefix}-tab-${next}`)?.focus();
    };
    return(/* no rule under the row: the panel's own fade is what the two are told apart by, and the
       chosen tab keeps the line under its own label */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "tablist",
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("edit", lang),
        style: {
            display: "flex",
            height: TABS_H
        },
        children: tabs.map((tab)=>{
            const on = tab.key === value;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: `${idPrefix}-tab-${tab.key}`,
                role: "tab",
                "aria-selected": on,
                "aria-controls": `${idPrefix}-panel-${tab.key}`,
                tabIndex: on ? 0 : -1,
                onKeyDown: (e)=>{
                    if (e.key === "ArrowRight" || e.key === "ArrowDown") walk(e, 1);
                    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") walk(e, -1);
                },
                onClick: ()=>onChange(tab.key),
                className: "m3-press",
                style: {
                    flex: 1,
                    height: TABS_H,
                    border: "none",
                    background: "transparent",
                    color: on ? p.primary : p.onSurfaceVariant,
                    cursor: "pointer",
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    fontSize: 14,
                    fontWeight: 600
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: tab.icon,
                        size: 20,
                        fill: on
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 123,
                        columnNumber: 13
                    }, this),
                    tab.label,
                    on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        style: {
                            position: "absolute",
                            left: 16,
                            right: 16,
                            bottom: 0,
                            height: 3,
                            borderRadius: "3px 3px 0 0",
                            background: p.primary
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 125,
                        columnNumber: 20
                    }, this)
                ]
            }, tab.key, true, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 94,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this));
}
_s(PartTabs, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = PartTabs;
function AlignBox({ onPlace, p }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [pick, setPick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const colTitle = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("alignLeft", lang),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("alignCenterH", lang),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("alignRight", lang)
    ];
    const rowTitle = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("alignTop", lang),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("alignCenterV", lang),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("alignBottom", lang)
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("align", lang),
        style: {
            width: "100%",
            height: 108,
            borderRadius: 16,
            background: p.surfaceContainerHigh,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            padding: 4,
            boxSizing: "border-box"
        },
        children: [
            0,
            1,
            2
        ].flatMap((r)=>[
                0,
                1,
                2
            ].map((c)=>{
                const on = pick?.[0] === c && pick?.[1] === r;
                const title = `${colTitle[c]} / ${rowTitle[r]}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setPick([
                            c,
                            r
                        ]);
                        onPlace(COL_KIND[c], ROW_KIND[r]);
                    },
                    title: title,
                    "aria-label": title,
                    "aria-pressed": on,
                    className: "m3-press",
                    style: {
                        border: "none",
                        borderRadius: 12,
                        background: on ? p.primary : "transparent",
                        color: on ? p.onPrimary : p.outline,
                        cursor: "pointer",
                        display: "grid",
                        placeItems: "center",
                        padding: 0,
                        transition: "background 120ms"
                    },
                    children: on ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlignGlyph, {
                        c: c,
                        r: r,
                        color: p.onPrimary
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 182,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        style: {
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            background: p.outline
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 182,
                        columnNumber: 70
                    }, this)
                }, `${c}${r}`, false, {
                    fileName: "[project]/components/PartPanel.tsx",
                    lineNumber: 160,
                    columnNumber: 13
                }, this);
            }))
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s1(AlignBox, "nWkShKiAhNE836gxTBtTeueRx7Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = AlignBox;
function PartMenu({ p, locked, onDuplicate, onToggleLock, onDelete, deleteLabel }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* the menu closes back onto the button that opened it, so focus has somewhere to land */ const close = ()=>{
        setOpen(false);
        box.current?.querySelector("button")?.focus();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PartMenu.useEffect": ()=>{
            if (!open) return;
            menu.current?.querySelector('[role="menuitem"]')?.focus();
            const onDown = {
                "PartMenu.useEffect.onDown": (e)=>{
                    if (!box.current?.contains(e.target)) setOpen(false);
                }
            }["PartMenu.useEffect.onDown"];
            const onKey = {
                "PartMenu.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") {
                        e.stopPropagation();
                        setOpen(false);
                        box.current?.querySelector("button")?.focus();
                    }
                }
            }["PartMenu.useEffect.onKey"];
            window.addEventListener("pointerdown", onDown, true);
            window.addEventListener("keydown", onKey, true);
            return ({
                "PartMenu.useEffect": ()=>{
                    window.removeEventListener("pointerdown", onDown, true);
                    window.removeEventListener("keydown", onKey, true);
                }
            })["PartMenu.useEffect"];
        }
    }["PartMenu.useEffect"], [
        open
    ]);
    /* the arrow keys walk the entries, Home and End jump to either end */ const onMenuKey = (e)=>{
        const items = Array.from(menu.current?.querySelectorAll('[role="menuitem"]') ?? []);
        const at = items.indexOf(document.activeElement);
        let next = -1;
        if (e.key === "ArrowDown") next = (at + 1) % items.length;
        else if (e.key === "ArrowUp") next = (at - 1 + items.length) % items.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = items.length - 1;
        if (next < 0) return;
        e.preventDefault();
        items[next]?.focus();
    };
    const rows = [
        ...onDuplicate ? [
            {
                key: "duplicate",
                icon: "content_copy",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("duplicate", lang),
                onClick: onDuplicate
            }
        ] : [],
        ...onToggleLock ? [
            {
                key: "lock",
                icon: locked ? "lock_open" : "lock",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(locked ? "unlock" : "lock", lang),
                onClick: onToggleLock
            }
        ] : [],
        {
            key: "delete",
            icon: "delete",
            label: deleteLabel ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("delete", lang),
            danger: true,
            onClick: onDelete
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: box,
        style: {
            position: "relative",
            flex: "0 0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                icon: "more_vert",
                p: p,
                on: open,
                onClick: ()=>setOpen((o)=>!o),
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("more", lang),
                size: 32,
                hasPopup: "menu",
                expanded: open
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: menu,
                role: "menu",
                onKeyDown: onMenuKey,
                style: {
                    position: "absolute",
                    right: 0,
                    top: 38,
                    zIndex: 40,
                    minWidth: 168,
                    padding: 4,
                    borderRadius: 12,
                    background: p.surfaceContainerHigh,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)"
                },
                children: rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "menuitem",
                        tabIndex: -1,
                        onClick: ()=>{
                            close();
                            r.onClick();
                        },
                        className: "m3-press",
                        style: {
                            width: "100%",
                            height: 40,
                            padding: "0 10px",
                            border: "none",
                            borderRadius: 8,
                            background: "transparent",
                            color: r.danger ? p.error : p.onSurface,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            fontSize: 14,
                            fontWeight: 500,
                            textAlign: "left",
                            whiteSpace: "nowrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: r.icon,
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/PartPanel.tsx",
                                lineNumber: 303,
                                columnNumber: 15
                            }, this),
                            r.label
                        ]
                    }, r.key, true, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 276,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
_s2(PartMenu, "eDVFK7kIJRLdNltIZMPBQXdhO14=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c3 = PartMenu;
function AiIconBtn({ ai, p }) {
    _s3();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const live = ai.ready || ai.busy;
    const title = ai.busy ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("cancel", lang) : ai.ready ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiWrite", lang) : ai.reason ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiNoKey", lang);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ai.busy ? ai.onCancel : ai.onRun,
        disabled: !live,
        title: title,
        "aria-label": title,
        style: {
            width: 30,
            height: 30,
            borderRadius: 15,
            border: "none",
            background: "transparent",
            color: live ? p.onSurfaceVariant : p.outline,
            cursor: live ? "pointer" : "default",
            display: "grid",
            placeItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: ai.busy ? "m3-spin" : undefined,
            style: {
                display: "inline-flex"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: ai.busy ? "progress_activity" : "auto_awesome",
                size: 16
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 337,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/PartPanel.tsx",
            lineNumber: 336,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
_s3(AiIconBtn, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = AiIconBtn;
function PartHeader({ kind, p, locked, onDuplicate, onToggleLock, onDelete }) {
    _s4();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const spec = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][kind];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 6,
            padding: "0 2px 0 6px",
            color: p.onSurfaceVariant
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: spec.paletteIcon,
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 14,
                    fontWeight: 600,
                    flex: 1,
                    minWidth: 0,
                    color: p.onSurface
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"][lang][kind]?.noun ?? spec.label
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PartMenu, {
                p: p,
                locked: locked,
                onDuplicate: onDuplicate,
                onToggleLock: onToggleLock,
                onDelete: onDelete
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 363,
        columnNumber: 5
    }, this);
}
_s4(PartHeader, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c5 = PartHeader;
function actionOptionsOf(item, frame, frames, lang) {
    return [
        {
            key: "none",
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("none", lang),
            icon: "block"
        },
        /* a FAB opens a menu where another part would flip its own look */ ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFab"])(item.kind) ? [
            {
                key: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MENU_TARGET"],
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("fabMenuAction", lang),
                icon: "menu_open"
            }
        ] : [],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOGGLEABLE"].includes(item.kind) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFab"])(item.kind) ? [
            {
                key: "toggle",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("toggleTitle", lang),
                icon: "swap_horiz"
            }
        ] : [],
        {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACK_TARGET"],
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("back", lang),
            icon: "arrow_back"
        },
        {
            key: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"],
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("openLink", lang),
            icon: "open_in_new"
        },
        ...[
            ...frames
        ].sort((a, b)=>a.x - b.x || a.y - b.y).filter((f)=>f.id !== frame?.id).map((f)=>({
                key: f.id,
                label: f.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screen", lang),
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPhoneFrame"])(f) ? "smartphone" : "desktop_windows"
            }))
    ];
}
function TriggerSection({ item, frame, allFrames, selfRect, onChange, p, slot, head }) {
    _s5();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const action = slot ? item.actions?.[slot] : item.action;
    const set = (next)=>{
        if (!slot) {
            onChange({
                action: next
            });
            return;
        }
        const actions = {
            ...item.actions ?? {}
        };
        if (next) actions[slot] = next;
        else delete actions[slot];
        onChange({
            actions: Object.keys(actions).length ? actions : undefined
        });
    };
    const isLink = action?.to === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"];
    const pick = (k)=>{
        if (k === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"]) {
            set({
                to: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"],
                transition: "none",
                url: action?.url
            });
            return;
        }
        const transition = action && action.to !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"] ? action.transition : "slide";
        set(k === "none" ? undefined : {
            to: k,
            transition
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "part-action",
        icon: "ads_click",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("tapTo", lang),
        p: p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 10
            },
            children: [
                head,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    options: actionOptionsOf(item, frame, allFrames, lang),
                    value: action?.to ?? "none",
                    onChange: pick,
                    p: p,
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("tapTo", lang)
                }, void 0, false, {
                    fileName: "[project]/components/PartPanel.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this),
                isLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TapStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkStage"], {
                    self: frame,
                    selfRect: selfRect,
                    action: action,
                    onChange: set,
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartPanel.tsx",
                    lineNumber: 439,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TapStage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TapStage"], {
                    frames: allFrames,
                    self: frame,
                    selfRect: selfRect,
                    action: action,
                    onChange: set,
                    p: p
                }, void 0, false, {
                    fileName: "[project]/components/PartPanel.tsx",
                    lineNumber: 441,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PartPanel.tsx",
            lineNumber: 435,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 434,
        columnNumber: 5
    }, this);
}
_s5(TriggerSection, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c6 = TriggerSection;
function NoteSection({ item, ai, onChange, p }) {
    _s6();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "part-note",
        icon: "short_text",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(item.kind === "button" ? "noteDialog" : "partSpec", lang),
        p: p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
            value: item.note ?? "",
            onChange: (note)=>onChange({
                    note
                }),
            placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("whenPressedExample", lang),
            p: p,
            multiline: true,
            grow: true,
            rows: 2,
            maxHeight: 200,
            aiBusy: ai.busy,
            action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AiIconBtn, {
                ai: ai,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 463,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/PartPanel.tsx",
            lineNumber: 453,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 452,
        columnNumber: 5
    }, this);
}
_s6(NoteSection, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c7 = NoteSection;
/** the button family wears the button styles; every other part is painted the way the canvas
 *  paints it, so a cell in the panel is the very colour the part shows */ const BUTTON_STYLED = [
    "button",
    "iconButton",
    "fab",
    "extendedFab",
    "splitButton",
    "chip"
];
function StyleRun({ kind, value, onChange, p }) {
    _s7();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const variants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantsOf"])(kind);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
        options: variants.map((v)=>{
            const st = BUTTON_STYLED.includes(kind) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantStyle"])(v.key, p) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxStyle"])({
                ...BLANK,
                kind,
                variant: v.key
            }, p);
            return {
                key: v.key,
                title: v.label,
                node: v.key === value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "check",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/PartPanel.tsx",
                    lineNumber: 485,
                    columnNumber: 35
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/components/PartPanel.tsx",
                    lineNumber: 485,
                    columnNumber: 69
                }, this),
                style: {
                    ...st,
                    /* a text button paints nothing, so its cell gets a faint edge to be found by; a part
               painted in a surface role close to the panel's own gets one too */ border: st.border && st.border !== "none" ? st.border : v.key === "text" ? `1px dashed ${p.outlineVariant}` : BUTTON_STYLED.includes(kind) ? "none" : `1px solid ${p.outlineVariant}`,
                    boxShadow: v.key === "elevated" ? "0 1px 3px rgba(0,0,0,0.2)" : "none",
                    minWidth: 0,
                    padding: "0 4px"
                }
            };
        }),
        value: value,
        onChange: onChange,
        p: p,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("style", lang),
        tight: true
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 479,
        columnNumber: 5
    }, this);
}
_s7(StyleRun, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c8 = StyleRun;
/** the bare item a style cell is painted from: only the kind and the style matter to it */ const BLANK = {
    id: "",
    kind: "box",
    label: "",
    icon: null,
    variant: "filled"
};
function FillRun({ value, onChange, p }) {
    _s8();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const rows = [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_TOKENS"].slice(0, 5),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_TOKENS"].slice(5)
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 4
        },
        children: rows.map((row, r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                options: row.map((tk)=>({
                        key: tk.key,
                        title: lang === "en" ? tk.label : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_TOKEN_TEXT"][lang][tk.key],
                        node: tk.key === value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "check",
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/PartPanel.tsx",
                            lineNumber: 523,
                            columnNumber: 38
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/components/PartPanel.tsx",
                            lineNumber: 523,
                            columnNumber: 72
                        }, this),
                        style: {
                            background: p[tk.key],
                            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onToken"])(tk.key, p),
                            border: `1px solid ${p.outlineVariant}`,
                            minWidth: 0,
                            padding: 0
                        }
                    })),
                value: value,
                onChange: onChange,
                p: p,
                label: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("style", lang)} ${r + 1}/${rows.length}`,
                tight: true
            }, r, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 518,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 516,
        columnNumber: 5
    }, this);
}
_s8(FillRun, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c9 = FillRun;
function ListStyleRun({ item, onChange, p }) {
    _s9();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listStyleOf"])(item);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
        options: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIST_STYLES"].map((s)=>({
                key: s.key,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(s.text, lang),
                node: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    style: {
                        width: 26,
                        height: 26,
                        borderRadius: 13,
                        background: p[s.iconFill],
                        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onToken"])(s.iconFill, p),
                        display: "grid",
                        placeItems: "center"
                    },
                    children: s.key === value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "check",
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 550,
                        columnNumber: 33
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PartPanel.tsx",
                    lineNumber: 549,
                    columnNumber: 11
                }, this),
                style: {
                    background: p[s.fill],
                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onToken"])(s.fill, p),
                    border: `1px solid ${p.outlineVariant}`,
                    minWidth: 0,
                    padding: 0
                }
            })),
        /* colours set before the looks existed match none of them: no cell is checked until one is picked */ value: value ?? "",
        onChange: (k)=>k && onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listStylePatch"])(k)),
        p: p,
        height: 44,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("style", lang)
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 544,
        columnNumber: 5
    }, this);
}
_s9(ListStyleRun, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c10 = ListStyleRun;
function WidthRun({ value, onChange, frameW, p, auto = true }) {
    _s10();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const cells = [
        ...auto ? [
            {
                key: "auto",
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("autoWidth", lang)
            }
        ] : [],
        {
            key: "half",
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["halfWidth"])(frameW),
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("halfWidth", lang)
        },
        {
            key: "content",
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contentWidth"])(frameW),
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("contentWidth", lang)
        },
        {
            key: "screen",
            size: frameW,
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screenWidth", lang)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
        /* the cell carries the word; hovering says the dp it comes to on this screen */ options: cells.map((c)=>({
                key: c.key,
                label: c.label,
                title: c.size ? `${c.size}dp` : c.label,
                style: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RUN_CELL"]
            })),
        value: cells.find((c)=>c.size === value)?.key ?? "",
        onChange: (k)=>onChange(cells.find((c)=>c.key === k)?.size),
        p: p,
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("width", lang),
        tight: true
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 577,
        columnNumber: 5
    }, this);
}
_s10(WidthRun, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c11 = WidthRun;
function WidthRows({ value, min, max, step = 4, frameW, onChange, p, auto = false }) {
    _s11();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                icon: "width",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("width", lang),
                value: value,
                min: Math.min(min, value),
                max: Math.max(frameW, max),
                step: step,
                onChange: (v)=>onChange(v),
                p: p
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 594,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WidthRun, {
                value: value,
                onChange: onChange,
                frameW: frameW,
                p: p,
                auto: auto
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 593,
        columnNumber: 5
    }, this);
}
_s11(WidthRows, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c12 = WidthRows;
function IconCell({ icon, faint, open, title, onClick, p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        title: title,
        "aria-label": title,
        "aria-expanded": open,
        className: "m3-press",
        style: {
            width: 44,
            height: 44,
            flex: "0 0 auto",
            borderRadius: 22,
            border: icon || open ? "none" : `1.5px dashed ${p.outline}`,
            background: open ? p.primary : icon ? p.surfaceContainerHigh : "transparent",
            color: open ? p.onPrimary : icon ? faint ? p.outline : p.onSurface : p.outline,
            cursor: "pointer",
            display: "grid",
            placeItems: "center"
        },
        children: icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            name: icon,
            size: 22
        }, void 0, false, {
            fileName: "[project]/components/PartPanel.tsx",
            lineNumber: 622,
            columnNumber: 15
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            name: "add",
            size: 20
        }, void 0, false, {
            fileName: "[project]/components/PartPanel.tsx",
            lineNumber: 622,
            columnNumber: 48
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 603,
        columnNumber: 5
    }, this);
}
_c13 = IconCell;
function IconRow({ slots, onPick, children, p }) {
    _s12();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const picked = slots.find((s)=>s.key === open) ?? null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    alignItems: "center"
                },
                children: [
                    slots[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCell, {
                        icon: slots[0].value,
                        open: open === slots[0].key,
                        title: slots[0].title,
                        onClick: ()=>setOpen(open === slots[0].key ? null : slots[0].key),
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 635,
                        columnNumber: 22
                    }, this),
                    children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 636,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            flex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 636,
                        columnNumber: 78
                    }, this),
                    slots[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCell, {
                        icon: slots[1].value,
                        open: open === slots[1].key,
                        title: slots[1].title,
                        onClick: ()=>setOpen(open === slots[1].key ? null : slots[1].key),
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 637,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 634,
                columnNumber: 7
            }, this),
            picked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IconPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPicker"], {
                value: picked.value,
                onChange: (icon)=>onPick(picked.key, icon),
                onClose: ()=>setOpen(null),
                palette: p,
                extras: picked.extras
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 639,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 633,
        columnNumber: 5
    }, this);
}
_s12(IconRow, "3gHT60S3lHEhyYybFcB05ha95j4=");
_c14 = IconRow;
function EntryList({ item, onChange, p, icons = true, labels = true, selectable = false, clearable = false }) {
    _s13();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    /* the row whose icon is being picked, by the name the row keeps through a reorder */ const [pick, setPick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [overBin, setOverBin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const bin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabs = item.tabs ?? [];
    const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRY_BOUNDS"][item.kind] ?? {
        min: 1,
        max: 12
    };
    /* a name per row that survives a reorder, so the list knows which row moved where. Rows are
   * named as they appear, never during render, and a list that came back a different length
   * or from a different part starts its names over. */ const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        id: item.id,
        names: []
    });
    if (keys.current.id !== item.id) keys.current = {
        id: item.id,
        names: []
    };
    const named = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    while(keys.current.names.length < tabs.length)keys.current.names.push(`e${named.current++}`);
    if (keys.current.names.length > tabs.length) keys.current.names.length = tabs.length;
    const names = keys.current.names;
    const picked = pick === null ? -1 : names.indexOf(pick);
    const selected = !selectable ? -1 : clearable && item.selected === undefined ? -1 : Math.min(item.selected ?? 0, Math.max(0, tabs.length - 1));
    const set = (i, patch)=>onChange({
            tabs: tabs.map((t, j)=>j === i ? {
                    ...t,
                    ...patch
                } : t)
        });
    const onBin = (e)=>{
        const r = bin.current?.getBoundingClientRect();
        return !!r && e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top - 8 && e.clientY <= r.bottom + 8;
    };
    const canAdd = tabs.length < bounds.max;
    const canRemove = tabs.length > bounds.min;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 6
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__["Reorder"].Group, {
                axis: "y",
                values: names,
                onReorder: (next)=>{
                    const order = next.map((k)=>names.indexOf(k));
                    keys.current.names = next;
                    onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reorderTabsPatch"])(item, order));
                },
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    padding: 0,
                    margin: 0
                },
                children: tabs.map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntryRow, {
                        id: names[i],
                        tab: tab,
                        icons: icons,
                        labels: labels,
                        selected: selectable ? selected === i : undefined,
                        onSelect: selectable ? ()=>onChange({
                                selected: clearable && selected === i ? undefined : i
                            }) : undefined,
                        open: pick === names[i],
                        onPick: ()=>setPick(pick === names[i] ? null : names[i]),
                        onLabel: (label)=>set(i, {
                                label
                            }),
                        onDragStart: ()=>setDragging(i),
                        onDrag: (e)=>setOverBin(canRemove && onBin(e)),
                        onDragEnd: (e)=>{
                            const drop = canRemove && onBin(e);
                            setDragging(null);
                            setOverBin(false);
                            if (drop) {
                                if (pick === names[i]) setPick(null);
                                keys.current.names = names.filter((_, j)=>j !== i);
                                onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTabPatch"])(item, i));
                            }
                        },
                        p: p
                    }, names[i], false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 709,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 698,
                columnNumber: 7
            }, this),
            picked >= 0 && tabs[picked] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IconPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPicker"], {
                value: tabs[picked].icon || null,
                onChange: (icon)=>set(picked, {
                        icon: icon ?? ""
                    }),
                onClose: ()=>setPick(null),
                palette: p
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 737,
                columnNumber: 9
            }, this),
            (canAdd || dragging !== null) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: bin,
                disabled: !canAdd && dragging === null,
                onClick: ()=>{
                    if (!canAdd) return;
                    const spare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTabsFor"])(item.kind);
                    onChange({
                        tabs: [
                            ...tabs,
                            {
                                ...spare[tabs.length % spare.length]
                            }
                        ]
                    });
                },
                className: "m3-press",
                style: {
                    height: 44,
                    borderRadius: 22,
                    border: `1px ${dragging !== null ? "dashed" : "solid"} ${overBin ? p.error : dragging !== null ? canRemove ? p.error : p.outlineVariant : p.outline}`,
                    background: overBin ? p.errorContainer : "transparent",
                    color: dragging !== null ? canRemove ? p.error : p.outline : p.primary,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: dragging !== null ? "copy" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    transition: "background 120ms, color 120ms, border-color 120ms"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: dragging !== null ? "delete" : "add",
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 765,
                        columnNumber: 11
                    }, this),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(dragging !== null ? "dropToRemove" : item.kind === "select" ? "addOption" : "addTab", lang)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 740,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 697,
        columnNumber: 5
    }, this);
}
_s13(EntryList, "GPbno8bHaRW/AnQh0cRdtlshriQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c15 = EntryList;
/** the mark of the current entry: a radio glyph that fills when picked, on no plate of its own */ function EntryRadio({ on, onClick, p }) {
    _s14();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("selectedTab", lang),
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("selectedTab", lang),
        "aria-pressed": on,
        style: {
            width: 32,
            height: 32,
            border: "none",
            background: "transparent",
            padding: 0,
            color: on ? p.primary : p.onSurfaceVariant,
            cursor: "pointer",
            display: "grid",
            placeItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            name: on ? "radio_button_checked" : "radio_button_unchecked",
            size: 20,
            fill: on
        }, void 0, false, {
            fileName: "[project]/components/PartPanel.tsx",
            lineNumber: 784,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 777,
        columnNumber: 5
    }, this);
}
_s14(EntryRadio, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c16 = EntryRadio;
function IconStrip({ item, onChange, p }) {
    _s15();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [pick, setPick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [overBin, setOverBin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const bin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabs = item.tabs ?? [];
    const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTRY_BOUNDS"][item.kind] ?? {
        min: 1,
        max: 12
    };
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        id: item.id,
        names: []
    });
    if (keys.current.id !== item.id) keys.current = {
        id: item.id,
        names: []
    };
    const named = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    while(keys.current.names.length < tabs.length)keys.current.names.push(`i${named.current++}`);
    if (keys.current.names.length > tabs.length) keys.current.names.length = tabs.length;
    const names = keys.current.names;
    const picked = pick === null ? -1 : names.indexOf(pick);
    const onBin = (e)=>{
        const r = bin.current?.getBoundingClientRect();
        return !!r && e.clientX >= r.left - 8 && e.clientX <= r.right + 8 && e.clientY >= r.top - 8 && e.clientY <= r.bottom + 8;
    };
    const canAdd = tabs.length < bounds.max;
    const canRemove = tabs.length > bounds.min;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__["Reorder"].Group, {
                        axis: "x",
                        values: names,
                        onReorder: (next)=>{
                            const order = next.map((k)=>names.indexOf(k));
                            keys.current.names = next;
                            onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reorderTabsPatch"])(item, order));
                        },
                        style: {
                            display: "flex",
                            gap: 6,
                            padding: 0,
                            margin: 0
                        },
                        children: tabs.map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__["Reorder"].Item, {
                                value: names[i],
                                onDragStart: ()=>setDragging(i),
                                onDrag: (e)=>setOverBin(canRemove && onBin(e)),
                                onDragEnd: (e)=>{
                                    const drop = canRemove && onBin(e);
                                    setDragging(null);
                                    setOverBin(false);
                                    if (drop) {
                                        if (pick === names[i]) setPick(null);
                                        keys.current.names = names.filter((_, j)=>j !== i);
                                        onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTabPatch"])(item, i));
                                    }
                                },
                                style: {
                                    listStyle: "none",
                                    position: "relative",
                                    touchAction: "none",
                                    cursor: "grab"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCell, {
                                    icon: tab.icon || null,
                                    open: pick === names[i],
                                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("changeIcon", lang),
                                    onClick: ()=>setPick(pick === names[i] ? null : names[i]),
                                    p: p
                                }, void 0, false, {
                                    fileName: "[project]/components/PartPanel.tsx",
                                    lineNumber: 844,
                                    columnNumber: 15
                                }, this)
                            }, names[i], false, {
                                fileName: "[project]/components/PartPanel.tsx",
                                lineNumber: 827,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 816,
                        columnNumber: 9
                    }, this),
                    (canAdd || dragging !== null) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: bin,
                        disabled: !canAdd && dragging === null,
                        onClick: ()=>{
                            if (!canAdd) return;
                            const spare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTabsFor"])(item.kind);
                            onChange({
                                tabs: [
                                    ...tabs,
                                    {
                                        ...spare[tabs.length % spare.length]
                                    }
                                ]
                            });
                        },
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(dragging !== null ? "dropToRemove" : "addTab", lang),
                        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(dragging !== null ? "dropToRemove" : "addTab", lang),
                        className: "m3-press",
                        style: {
                            width: 44,
                            height: 44,
                            flex: "0 0 auto",
                            borderRadius: 22,
                            border: `1.5px dashed ${overBin ? p.error : dragging !== null ? canRemove ? p.error : p.outlineVariant : p.outline}`,
                            background: overBin ? p.errorContainer : "transparent",
                            color: dragging !== null ? canRemove ? p.error : p.outline : p.primary,
                            cursor: dragging !== null ? "copy" : "pointer",
                            display: "grid",
                            placeItems: "center",
                            transition: "background 120ms, color 120ms, border-color 120ms"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: dragging !== null ? "delete" : "add",
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/PartPanel.tsx",
                            lineNumber: 874,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 849,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 815,
                columnNumber: 7
            }, this),
            picked >= 0 && tabs[picked] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IconPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPicker"], {
                value: tabs[picked].icon || null,
                onChange: (icon)=>onChange({
                        tabs: tabs.map((t, j)=>j === picked ? {
                                ...t,
                                icon: icon ?? ""
                            } : t)
                    }),
                onClose: ()=>setPick(null),
                palette: p
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 879,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 814,
        columnNumber: 5
    }, this);
}
_s15(IconStrip, "GPbno8bHaRW/AnQh0cRdtlshriQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c17 = IconStrip;
/** one entry: the handle at the start of its words, the words, and the icon beside them */ function EntryRow({ id, tab, icons, labels, selected, onSelect, open, onPick, onLabel, onDragStart, onDrag, onDragEnd, p }) {
    _s16();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"])();
    const handle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        onPointerDown: (e)=>{
            e.preventDefault();
            controls.start(e);
        },
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("reorder", lang),
        style: {
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 38,
            cursor: "grab",
            touchAction: "none"
        }
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 918,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__["Reorder"].Item, {
        value: id,
        dragListener: false,
        dragControls: controls,
        onDragStart: onDragStart,
        onDrag: (e)=>onDrag(e),
        onDragEnd: (e)=>onDragEnd(e),
        style: {
            listStyle: "none",
            display: "flex",
            gap: 6,
            alignItems: "center",
            position: "relative"
        },
        children: [
            labels ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    flex: 1,
                    minWidth: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        value: tab.label,
                        onChange: onLabel,
                        placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("label", lang),
                        p: p,
                        icon: "drag_indicator",
                        height: 44,
                        leading: onSelect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntryRadio, {
                            on: !!selected,
                            onClick: onSelect,
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/PartPanel.tsx",
                            lineNumber: 941,
                            columnNumber: 147
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 941,
                        columnNumber: 11
                    }, this),
                    handle
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 938,
                columnNumber: 9
            }, this) : /* an entry with no words is dragged by the mark on its own */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    flex: 1,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 12,
                    color: p.onSurfaceVariant
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "drag_indicator",
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/PartPanel.tsx",
                        lineNumber: 948,
                        columnNumber: 11
                    }, this),
                    handle
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 947,
                columnNumber: 9
            }, this),
            icons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCell, {
                icon: tab.icon || null,
                open: open,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("changeIcon", lang),
                onClick: onPick,
                p: p
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 952,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 928,
        columnNumber: 5
    }, this);
}
_s16(EntryRow, "oqxk+pkDiUveY+xUY+GiaDixulA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"]
    ];
});
_c18 = EntryRow;
/** a whole number typed into a small box: it follows the field while the number is in range
 *  and settles when the field is left, the way the slider's own number does */ function Num({ value, min, max, title, onChange, p }) {
    _s17();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(value));
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Num.useEffect": ()=>{
            if (!editing) setText(String(value));
        }
    }["Num.useEffect"], [
        value,
        editing
    ]);
    const commit = ()=>{
        const n = Math.round(Number(text));
        if (Number.isFinite(n) && text.trim() !== "") onChange(Math.max(min, Math.min(max, n)));
        setEditing(false);
        setText(String(value));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "number",
        inputMode: "numeric",
        "aria-label": title,
        title: title,
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
            const n = Math.round(Number(e.target.value));
            if (e.target.value.trim() !== "" && Number.isFinite(n) && n >= min && n <= max) onChange(n);
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
            width: 48,
            height: 28,
            padding: "0 6px",
            borderRadius: 8,
            border: "none",
            background: p.surfaceContainerHigh,
            color: p.onSurface,
            fontSize: 12,
            fontWeight: 600,
            textAlign: "center",
            fontVariantNumeric: "tabular-nums",
            fontFamily: "inherit",
            outline: editing ? `2px solid ${p.primary}` : "none",
            outlineOffset: -1,
            boxSizing: "border-box"
        }
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 972,
        columnNumber: 5
    }, this);
}
_s17(Num, "/53imL5TWAmEfKxFql2IVW8oN8s=");
_c19 = Num;
const CORNER_KEYS = [
    "tl",
    "tr",
    "bl",
    "br"
];
const CORNER_TEXT = {
    tl: "cornerTl",
    tr: "cornerTr",
    bl: "cornerBl",
    br: "cornerBr"
};
/** the tallest the drawing of the part is; the widest is the stage it stands on */ const SHAPE_MAX_H = 104;
const SHAPE_MIN = 56;
const HANDLE = 14;
/** The part drawn small on a stage of its own, the way the trigger tab draws a screen, with each
 *  corner's number beside it and a handle on the corner itself. A handle sits where the corner's
 *  arc is centred, so pulling it in along the diagonal rounds the corner under the finger. */ function CornerStage({ item, corners, max, onChange, p }) {
    _s18();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [avail, setAvail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CornerStage.useEffect": ()=>{
            const el = stage.current;
            if (!el) return;
            const ro = new ResizeObserver({
                "CornerStage.useEffect": ()=>setAvail(el.clientWidth)
            }["CornerStage.useEffect"]);
            ro.observe(el);
            setAvail(el.clientWidth);
            return ({
                "CornerStage.useEffect": ()=>ro.disconnect()
            })["CornerStage.useEffect"];
        }
    }["CornerStage.useEffect"], []);
    /* the drawing keeps the part's own proportions, so a wide box reads as a wide box */ const { w: dpW, h: dpH } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeOf"])(item, {});
    const maxW = Math.max(SHAPE_MIN, (avail || 220) - 24);
    const k = Math.min(maxW / Math.max(1, dpW), SHAPE_MAX_H / Math.max(1, dpH));
    const w = Math.max(SHAPE_MIN, Math.round(dpW * k));
    const h = Math.max(SHAPE_MIN, Math.round(dpH * k));
    /* radii are scaled with the drawing, so the picture is the part, not a diagram of it */ const scale = w / Math.max(1, dpW);
    const px = (r)=>Math.round(r * scale);
    const set = (key, r)=>onChange({
            ...corners,
            [key]: Math.max(0, Math.min(max, Math.round(r)))
        });
    const drag = (key)=>(e)=>{
            const box = shape.current?.getBoundingClientRect();
            if (!box) return;
            e.preventDefault();
            e.currentTarget.setPointerCapture(e.pointerId);
            /* the corner the handle belongs to, and which way "in" is from it */ const cx = key === "tl" || key === "bl" ? box.left : box.right;
            const cy = key === "tl" || key === "tr" ? box.top : box.bottom;
            const sx = key === "tl" || key === "bl" ? 1 : -1;
            const sy = key === "tl" || key === "tr" ? 1 : -1;
            const move = (ev)=>{
                const inset = Math.min((ev.clientX - cx) * sx, (ev.clientY - cy) * sy);
                set(key, inset / scale);
            };
            const up = ()=>{
                window.removeEventListener("pointermove", move);
                window.removeEventListener("pointerup", up);
                window.removeEventListener("pointercancel", up);
            };
            window.addEventListener("pointermove", move);
            window.addEventListener("pointerup", up);
            window.addEventListener("pointercancel", up);
        };
    const num = (key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
            value: corners[key],
            min: 0,
            max: max,
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(CORNER_TEXT[key], lang),
            onChange: (v)=>set(key, v),
            p: p
        }, void 0, false, {
            fileName: "[project]/components/PartPanel.tsx",
            lineNumber: 1079,
            columnNumber: 35
        }, this);
    const handle = (key)=>{
        const r = px(corners[key]);
        const at = {
            left: key === "tl" || key === "bl" ? r - HANDLE / 2 : undefined,
            right: key === "tr" || key === "br" ? r - HANDLE / 2 : undefined,
            top: key === "tl" || key === "tr" ? r - HANDLE / 2 : undefined,
            bottom: key === "bl" || key === "br" ? r - HANDLE / 2 : undefined
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": true,
            onPointerDown: drag(key),
            style: {
                position: "absolute",
                ...at,
                width: HANDLE,
                height: HANDLE,
                borderRadius: HANDLE / 2,
                background: p.primary,
                border: `2px solid ${p.surface}`,
                boxSizing: "border-box",
                boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                cursor: key === "tl" || key === "br" ? "nwse-resize" : "nesw-resize",
                touchAction: "none"
            }
        }, key, false, {
            fileName: "[project]/components/PartPanel.tsx",
            lineNumber: 1089,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: stage,
        style: {
            flex: 1,
            minWidth: 0,
            background: p.surfaceContainerLow,
            borderRadius: 12,
            padding: "8px 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%"
                },
                children: [
                    num("tl"),
                    num("tr")
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 1112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: shape,
                style: {
                    position: "relative",
                    width: w,
                    height: h,
                    /* the part's own colour, drawn without the picture that may be on it */ background: p.surfaceContainerHighest,
                    border: `1.5px solid ${p.outline}`,
                    boxSizing: "border-box",
                    borderRadius: `${px(corners.tl)}px ${px(corners.tr)}px ${px(corners.br)}px ${px(corners.bl)}px`
                },
                children: CORNER_KEYS.map(handle)
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 1116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%"
                },
                children: [
                    num("bl"),
                    num("br")
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 1131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 1111,
        columnNumber: 5
    }, this);
}
_s18(CornerStage, "//Ang2iwMd6DA1JQx9nZ1BWwJ5s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c20 = CornerStage;
function CornerRows({ item, onChange, p, max = 48 }) {
    _s19();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const spec = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][item.kind];
    const isBox = item.kind === "box";
    const top = item.radiusTop ?? (isBox ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleR"])(spec.radius));
    const bottom = isBox ? item.radiusBottom ?? 0 : top;
    const corners = item.corners ?? (isBox && top !== bottom ? {
        tl: top,
        tr: top,
        bl: bottom,
        br: bottom
    } : undefined);
    const each = !!corners;
    const toggle = ()=>onChange(each ? {
            corners: undefined,
            radiusTop: corners.tl,
            radiusBottom: isBox ? corners.tl : undefined
        } : {
            corners: {
                tl: top,
                tr: top,
                bl: bottom,
                br: bottom
            }
        });
    const modeButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("cornersEach", lang),
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("cornersEach", lang),
        "aria-pressed": each,
        className: "m3-press",
        style: {
            width: 32,
            height: 32,
            flex: "0 0 auto",
            borderRadius: 16,
            border: "none",
            padding: 0,
            /* painted like the number box beside the slider, so it reads as a thing to tap and not a label */ background: each ? p.secondaryContainer : p.surfaceContainerHigh,
            color: each ? p.onSecondaryContainer : p.onSurfaceVariant,
            cursor: "pointer",
            display: "grid",
            placeItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            name: each ? "crop_free" : "rounded_corner",
            size: 20
        }, void 0, false, {
            fileName: "[project]/components/PartPanel.tsx",
            lineNumber: 1176,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 1154,
        columnNumber: 5
    }, this);
    if (!corners) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
            iconNode: modeButton,
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("cornerRadius", lang),
            value: top,
            min: 0,
            max: max,
            step: 1,
            onChange: (r)=>onChange(isBox ? {
                    radiusTop: r,
                    radiusBottom: r
                } : {
                    radiusTop: r
                }),
            p: p
        }, void 0, false, {
            fileName: "[project]/components/PartPanel.tsx",
            lineNumber: 1181,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10
        },
        children: [
            modeButton,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CornerStage, {
                item: item,
                corners: corners,
                max: max,
                onChange: (c)=>onChange({
                        corners: c
                    }),
                p: p
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 1196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 1194,
        columnNumber: 5
    }, this);
}
_s19(CornerRows, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c21 = CornerRows;
function EdgeCornerRows({ item, onChange, p }) {
    _s20();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const rail = item.kind === "navRail";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                iconNode: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CornerIcon"], {
                    side: rail ? "left" : "top"
                }, void 0, false, {
                    fileName: "[project]/components/PartPanel.tsx",
                    lineNumber: 1207,
                    columnNumber: 25
                }, this),
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(rail ? "cornerLeft" : "cornerTop", lang),
                value: item.radiusTop ?? 0,
                min: 0,
                max: 40,
                step: 1,
                onChange: (radiusTop)=>onChange({
                        radiusTop
                    }),
                p: p
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 1207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                iconNode: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CornerIcon"], {
                    side: rail ? "right" : "bottom"
                }, void 0, false, {
                    fileName: "[project]/components/PartPanel.tsx",
                    lineNumber: 1208,
                    columnNumber: 25
                }, this),
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(rail ? "cornerRight" : "cornerBottom", lang),
                value: item.radiusBottom ?? 0,
                min: 0,
                max: 40,
                step: 1,
                onChange: (radiusBottom)=>onChange({
                        radiusBottom
                    }),
                p: p
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 1208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 1206,
        columnNumber: 5
    }, this);
}
_s20(EdgeCornerRows, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c22 = EdgeCornerRows;
function NoTriggerNote({ p }) {
    _s21();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            lineHeight: 1.5,
            color: p.onSurfaceVariant,
            padding: "2px 6px 10px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: "block",
                size: 18
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 1218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("noTrigger", lang)
            }, void 0, false, {
                fileName: "[project]/components/PartPanel.tsx",
                lineNumber: 1219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartPanel.tsx",
        lineNumber: 1217,
        columnNumber: 5
    }, this);
}
_s21(NoTriggerNote, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c23 = NoTriggerNote;
const hasTrigger = (kind)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAPPABLE"].includes(kind);
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23;
__turbopack_context__.k.register(_c, "AlignGlyph");
__turbopack_context__.k.register(_c1, "PartTabs");
__turbopack_context__.k.register(_c2, "AlignBox");
__turbopack_context__.k.register(_c3, "PartMenu");
__turbopack_context__.k.register(_c4, "AiIconBtn");
__turbopack_context__.k.register(_c5, "PartHeader");
__turbopack_context__.k.register(_c6, "TriggerSection");
__turbopack_context__.k.register(_c7, "NoteSection");
__turbopack_context__.k.register(_c8, "StyleRun");
__turbopack_context__.k.register(_c9, "FillRun");
__turbopack_context__.k.register(_c10, "ListStyleRun");
__turbopack_context__.k.register(_c11, "WidthRun");
__turbopack_context__.k.register(_c12, "WidthRows");
__turbopack_context__.k.register(_c13, "IconCell");
__turbopack_context__.k.register(_c14, "IconRow");
__turbopack_context__.k.register(_c15, "EntryList");
__turbopack_context__.k.register(_c16, "EntryRadio");
__turbopack_context__.k.register(_c17, "IconStrip");
__turbopack_context__.k.register(_c18, "EntryRow");
__turbopack_context__.k.register(_c19, "Num");
__turbopack_context__.k.register(_c20, "CornerStage");
__turbopack_context__.k.register(_c21, "CornerRows");
__turbopack_context__.k.register(_c22, "EdgeCornerRows");
__turbopack_context__.k.register(_c23, "NoTriggerNote");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PartsPalette.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartsPalette",
    ()=>PartsPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CATEGORY_TEXT = {
    ja: {
        actions: "操作",
        navigation: "ナビゲーション",
        containment: "コンテナ",
        inputs: "入力",
        content: "コンテンツ",
        progress: "進捗"
    },
    zh: {
        actions: "操作",
        navigation: "导航",
        containment: "容器",
        inputs: "输入",
        content: "内容",
        progress: "进度"
    },
    ko: {
        actions: "동작",
        navigation: "내비게이션",
        containment: "컨테이너",
        inputs: "입력",
        content: "콘텐츠",
        progress: "진행 상태"
    }
};
function PartsPalette({ palette: p, favorites, onToggleFavorite, onPartPointerDown, onPartActivate }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const labelOf = (k)=>lang === "en" ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][k].label : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"][lang][k]?.noun ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][k].label;
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartsPalette.useMemo[filtered]": ()=>{
            const s = q.trim().toLowerCase();
            /* the shapes a part switches into in its own panel are not tiles of their own */ const listed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_ORDER"].filter({
                "PartsPalette.useMemo[filtered].listed": (k)=>!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE_HIDDEN"].includes(k)
            }["PartsPalette.useMemo[filtered].listed"]);
            if (!s) return listed;
            return listed.filter({
                "PartsPalette.useMemo[filtered]": (k)=>{
                    const sp = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][k];
                    return labelOf(k).toLowerCase().includes(s) || sp.label.toLowerCase().includes(s) || sp.noun.toLowerCase().includes(s) || k.toLowerCase().includes(s);
                }
            }["PartsPalette.useMemo[filtered]"]);
        }
    }["PartsPalette.useMemo[filtered]"], [
        q,
        lang
    ]);
    const tile = (k)=>{
        const s = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][k];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
            icon: s.paletteIcon,
            label: labelOf(k),
            p: p,
            onPointerDown: (e)=>onPartPointerDown(e, k),
            onClick: ()=>onPartActivate(k),
            starred: favorites.includes(k),
            onStar: ()=>onToggleFavorite(k)
        }, k, false, {
            fileName: "[project]/components/PartsPalette.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    };
    const grid = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(78px, 1fr))",
        gap: 6
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "12px 12px 8px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    value: q,
                    onChange: setQ,
                    placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("search", lang),
                    p: p,
                    icon: "search",
                    height: 40
                }, void 0, false, {
                    fileName: "[project]/components/PartsPalette.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PartsPalette.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-scrollbar",
                style: {
                    flex: 1,
                    overflowY: "auto",
                    overflowX: "hidden",
                    padding: "0 8px"
                },
                children: [
                    !q && favorites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                        id: "fav",
                        icon: "star",
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("favorites", lang),
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: grid,
                            children: favorites.filter((k)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][k] && !__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE_HIDDEN"].includes(k)).map(tile)
                        }, void 0, false, {
                            fileName: "[project]/components/PartsPalette.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PartsPalette.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    q ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...grid,
                            padding: "4px 4px 12px"
                        },
                        children: [
                            filtered.map(tile),
                            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "status",
                                style: {
                                    gridColumn: "1 / -1",
                                    color: p.outline,
                                    fontSize: 13,
                                    padding: 12,
                                    textAlign: "center",
                                    display: "grid",
                                    placeItems: "center",
                                    gap: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "search_off",
                                        size: 28
                                    }, void 0, false, {
                                        fileName: "[project]/components/PartsPalette.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("noMatch", lang)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PartsPalette.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PartsPalette.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PartsPalette.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                            id: `cat:${c.key}`,
                            icon: c.icon,
                            title: lang === "en" ? c.label : CATEGORY_TEXT[lang][c.key],
                            p: p,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: grid,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_ORDER"].filter((k)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"][k].category === c.key && !__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE_HIDDEN"].includes(k)).map(tile)
                            }, void 0, false, {
                                fileName: "[project]/components/PartsPalette.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        }, c.key, false, {
                            fileName: "[project]/components/PartsPalette.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/PartsPalette.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PartsPalette.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(PartsPalette, "B7G5bRWbUEFf9f5v37KD6a/N5J0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = PartsPalette;
var _c;
__turbopack_context__.k.register(_c, "PartsPalette");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Pickers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarouselBody",
    ()=>CarouselBody,
    "DatePickerBody",
    ()=>DatePickerBody,
    "TimePickerBody",
    ()=>TimePickerBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
/* The three parts drawn here are wide surfaces rather than controls: a carousel's row of
 * cards, a calendar, a clock. They take their whole box. A calendar shows today and a clock the
 * time it is now, the way the real pickers open, so the sketch never has a date to be set and
 * the prompt never names one. */ /** the moment a picker is drawn at: read once per render, so every piece of one picker agrees */ const now = ()=>new Date();
function CarouselBody({ item, p, scroll = 0 }) {
    const { w, h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeOf"])(item, {});
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselCardsOf"])(item);
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleR"])(16);
    /* where each card stands at this scroll: at rest it is the arrangement the layout names, and
   * part-way through a scroll each card is between two of its sizes */ const shapes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselShapes"])(item, w, scroll);
    /* Every picture is drawn at the widest a card ever is and cropped by the card it is on, so it
   * holds still while the card grows and shrinks. Sized to the card instead, a picture would be
   * zoomed and unzoomed the whole way through a scroll, which is the card's own movement fighting
   * what is on it. */ const picture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardWidths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselLayoutOf"])(item), w - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselInset"])(w), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselCountOf"])(item))[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            height: "100%",
            overflow: "hidden"
        },
        children: shapes.map(({ x, w: cw, lead }, i)=>{
            const card = cards[i];
            const src = card?.src;
            const words = card?.label?.trim() ?? "";
            if (cw < 1) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-card": i,
                style: {
                    position: "absolute",
                    left: x,
                    top: 0,
                    width: cw,
                    height: "100%",
                    borderRadius: r,
                    background: !src && i === 0 ? p.primaryContainer : p.surfaceContainerHighest,
                    color: i === 0 ? p.onPrimaryContainer : p.onSurfaceVariant,
                    display: "grid",
                    placeItems: "center",
                    overflow: "hidden"
                },
                children: [
                    src ? /* the picture fills its card, however the card is shaped */ // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: src,
                        alt: "",
                        draggable: false,
                        /* the card keeps the middle of it: what a narrow card loses, it loses off both sides */ style: {
                            position: "absolute",
                            top: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: picture,
                            maxWidth: "none",
                            height: "100%",
                            objectFit: "cover"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 70,
                        columnNumber: 15
                    }, this) : cw > 56 && !words && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "image",
                        size: Math.min(32, Math.round(Math.min(cw, h) * 0.28))
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 78,
                        columnNumber: 36
                    }, this),
                    src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardScrimOf"])("#ffffff", "end"),
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 84,
                        columnNumber: 21
                    }, this),
                    cw > 72 && words && lead > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: "absolute",
                            left: 14,
                            right: 14,
                            bottom: 12,
                            fontSize: 16,
                            fontWeight: 600,
                            lineHeight: 1.35,
                            /* what the author typed, line breaks and all */ whiteSpace: "pre-line",
                            overflow: "hidden",
                            color: src ? "#fff" : "inherit",
                            opacity: lead
                        },
                        children: words
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 87,
                        columnNumber: 15
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 50,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/Pickers.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = CarouselBody;
/** the run of text buttons a picker dialog ends with */ function PickerActions({ p }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            padding: "0 12px 12px"
        },
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("cancel", lang),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("ok", lang)
        ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    height: 40,
                    padding: "0 12px",
                    borderRadius: 20,
                    color: p.primary,
                    fontSize: 14,
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center"
                },
                children: label
            }, label, false, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Pickers.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(PickerActions, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = PickerActions;
/** the seven letters over a month's columns, in the language the sketch is written in */ const WEEKDAYS = {
    ja: [
        "日",
        "月",
        "火",
        "水",
        "木",
        "金",
        "土"
    ],
    en: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    zh: [
        "日",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六"
    ],
    ko: [
        "일",
        "월",
        "화",
        "수",
        "목",
        "금",
        "토"
    ]
};
/** this month as a grid: its days from the weekday it starts on, with today on a filled circle */ function Month({ at, p, cell }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const day = at.getDate();
    const days = new Date(at.getFullYear(), at.getMonth() + 1, 0).getDate();
    const offset = new Date(at.getFullYear(), at.getMonth(), 1).getDay();
    const cells = Array.from({
        length: 42
    }, (_, i)=>i < offset || i - offset >= days ? null : i - offset + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "0 24px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)"
            },
            children: [
                (WEEKDAYS[lang] ?? WEEKDAYS.en).map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            height: cell,
                            display: "grid",
                            placeItems: "center",
                            fontSize: 12,
                            fontWeight: 600,
                            color: p.onSurfaceVariant
                        },
                        children: d
                    }, i, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)),
                cells.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            height: cell,
                            display: "grid",
                            placeItems: "center"
                        },
                        children: d !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: cell - 4,
                                height: cell - 4,
                                borderRadius: (cell - 4) / 2,
                                display: "grid",
                                placeItems: "center",
                                fontSize: 13,
                                fontWeight: d === day ? 700 : 500,
                                background: d === day ? p.primary : "transparent",
                                color: d === day ? p.onPrimary : p.onSurface
                            },
                            children: d
                        }, void 0, false, {
                            fileName: "[project]/components/Pickers.tsx",
                            lineNumber: 153,
                            columnNumber: 15
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Pickers.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Pickers.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s1(Month, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = Month;
/** the field a date is typed into, with the calendar button at its end */ function DateField({ at, p }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 16
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 12,
                    color: p.onSurfaceVariant,
                    marginBottom: 6
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("dateLabel", lang)
            }, void 0, false, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 56,
                    borderRadius: 4,
                    border: `1px solid ${p.outline}`,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px 0 16px",
                    gap: 8,
                    color: p.onSurface,
                    fontSize: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateHeadline"])(lang, at)
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "calendar_month",
                        size: 22
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Pickers.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_s2(DateField, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c3 = DateField;
function DatePickerBody({ item, p }) {
    _s3();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateLayoutOf"])(item);
    const at = now();
    if (layout === "input") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DateField, {
        at: at,
        p: p
    }, void 0, false, {
        fileName: "[project]/components/Pickers.tsx",
        lineNumber: 208,
        columnNumber: 34
    }, this);
    const { w } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeOf"])(item, {});
    const cell = Math.round((w - 48) / 7);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100%"
        },
        children: [
            layout === "modal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "16px 24px 0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            color: p.onSurfaceVariant
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("selectDate", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 28,
                            fontWeight: 500,
                            color: p.onSurface,
                            marginTop: 8,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateHeadline"])(lang, at)
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: `${layout === "docked" ? 16 : 8}px 16px 0 24px`,
                    color: p.onSurfaceVariant
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 14,
                            fontWeight: 600,
                            color: p.onSurface,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4
                        },
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monthHeadline"])(lang, at),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "arrow_drop_down",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/Pickers.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "inline-flex",
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "chevron_left",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/Pickers.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "chevron_right",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/Pickers.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    paddingTop: 4
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Month, {
                    at: at,
                    p: p,
                    cell: cell
                }, void 0, false, {
                    fileName: "[project]/components/Pickers.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PickerActions, {
                p: p
            }, void 0, false, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Pickers.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_s3(DatePickerBody, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = DatePickerBody;
/** one of the two number plates a time is read off */ function TimeBox({ text, on, p, wide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            width: wide,
            height: 72,
            borderRadius: 8,
            display: "grid",
            placeItems: "center",
            background: on ? p.primaryContainer : p.surfaceContainerHighest,
            color: on ? p.onPrimaryContainer : p.onSurface,
            fontSize: 40,
            fontWeight: 400,
            border: on ? `2px solid ${p.primary}` : "none",
            boxSizing: "border-box"
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/components/Pickers.tsx",
        lineNumber: 243,
        columnNumber: 5
    }, this);
}
_c5 = TimeBox;
/** the clock face: the hours around it and a hand reaching the one it is now */ function Dial({ hour24, p, size }) {
    /* the hour on a twelve-hour face: twelve stands at the top, where a zero would */ const hour = hour24 % 12 || 12;
    const R = size / 2;
    const ring = R - 20;
    const angle = hour % 12 / 12 * Math.PI * 2 - Math.PI / 2;
    const hx = R + Math.cos(angle) * ring;
    const hy = R + Math.sin(angle) * ring;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: size,
            height: size,
            borderRadius: R,
            background: p.surfaceContainerHighest,
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                style: {
                    position: "absolute",
                    inset: 0
                },
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: R,
                        y1: R,
                        x2: hx,
                        y2: hy,
                        stroke: p.primary,
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: R,
                        cy: R,
                        r: 3,
                        fill: p.primary
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: hx,
                        cy: hy,
                        r: 20,
                        fill: p.primary
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            Array.from({
                length: 12
            }, (_, i)=>{
                const n = i + 1;
                const a = n / 12 * Math.PI * 2 - Math.PI / 2;
                const on = n === hour;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "absolute",
                        left: R + Math.cos(a) * ring - 20,
                        top: R + Math.sin(a) * ring - 20,
                        width: 40,
                        height: 40,
                        display: "grid",
                        placeItems: "center",
                        fontSize: 15,
                        fontWeight: on ? 700 : 500,
                        color: on ? p.onPrimary : p.onSurface
                    },
                    children: n
                }, n, false, {
                    fileName: "[project]/components/Pickers.tsx",
                    lineNumber: 284,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/Pickers.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_c6 = Dial;
function TimePickerBody({ item, p }) {
    _s4();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLayoutOf"])(item);
    const { w } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeOf"])(item, {});
    const at = now();
    const hour24 = at.getHours();
    const hh = String(hour24 % 12 || 12).padStart(2, "0");
    const mm = String(at.getMinutes()).padStart(2, "0");
    const pm = hour24 >= 12;
    const plate = Math.max(0, Math.min(96, Math.round((w - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_PADDING"] * 2 - 60) / 2)));
    const dial = Math.min(256, w - 48);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "16px 24px 0",
                    fontSize: 12,
                    color: p.onSurfaceVariant
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("selectTime", lang)
            }, void 0, false, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "12px 24px 0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeBox, {
                        text: hh,
                        on: true,
                        p: p,
                        wide: plate
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 32,
                            color: p.onSurface
                        },
                        children: ":"
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeBox, {
                        text: mm,
                        on: false,
                        p: p,
                        wide: plate
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: 48,
                            height: 72,
                            borderRadius: 8,
                            border: `1px solid ${p.outline}`,
                            overflow: "hidden"
                        },
                        children: [
                            "AM",
                            "PM"
                        ].map((s)=>{
                            const on = s === "PM" === pm;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flex: 1,
                                    display: "grid",
                                    placeItems: "center",
                                    fontSize: 12,
                                    fontWeight: 600,
                                    background: on ? p.tertiaryContainer : "transparent",
                                    color: on ? p.onTertiaryContainer : p.onSurfaceVariant
                                },
                                children: s
                            }, s, false, {
                                fileName: "[project]/components/Pickers.tsx",
                                lineNumber: 329,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            layout === "dial" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    display: "grid",
                    placeItems: "center",
                    padding: "12px 0"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dial, {
                    hour24: hour24,
                    p: p,
                    size: dial
                }, void 0, false, {
                    fileName: "[project]/components/Pickers.tsx",
                    lineNumber: 349,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 348,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "10px 24px",
                    gap: 8,
                    color: p.onSurfaceVariant,
                    fontSize: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: plate,
                            textAlign: "center"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("hourLabel", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 10
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: plate,
                            textAlign: "center"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("minuteLabel", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 352,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px 12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: layout === "dial" ? "keyboard" : "schedule",
                        size: 22
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            flex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PickerActions, {
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/Pickers.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Pickers.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Pickers.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
_s4(TimePickerBody, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c7 = TimePickerBody;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "CarouselBody");
__turbopack_context__.k.register(_c1, "PickerActions");
__turbopack_context__.k.register(_c2, "Month");
__turbopack_context__.k.register(_c3, "DateField");
__turbopack_context__.k.register(_c4, "DatePickerBody");
__turbopack_context__.k.register(_c5, "TimeBox");
__turbopack_context__.k.register(_c6, "Dial");
__turbopack_context__.k.register(_c7, "TimePickerBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PromptPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PromptPanel",
    ()=>PromptPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prompt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* The prompt tab: what the sketch says to a model, and the few things said about the app as a
 * whole. In the panel the prompt is read, not written: its box carries a pen that opens it full
 * screen, beside the button that copies it. Full screen, the text is edited with the room it
 * needs, an outline of its headings and screens stands beside it -- a tap lights that stretch
 * and scrolls to it -- and the app's name and its brief sit on the left. */ /** the text's own measures */ const FONT = 13;
const LINE = 1.75;
const PAD = 14;
/** how far the text's top edge fades into the box around it */ const FADE = 22;
/** the room the buttons in the box's corner need under the last line */ const FOOT = 60;
/** how long the full-screen cover takes to grow out of the panel, and to shrink back */ const COVER_MS = 320;
const COVER_EASE = "cubic-bezier(0.2, 0, 0, 1)";
/** the panel's own top padding: the target stands this far under the panel's top */ const PANEL_PAD_TOP = 28;
/** how long the reset button takes to fade before the box narrows on the way out */ const RESET_FADE_MS = 120;
/** where each line of the text begins, as offsets into it, with the text's end as the last */ function lineStartsOf(text) {
    const starts = [
        0
    ];
    for(let i = 0; i < text.length; i++)if (text[i] === "\n") starts.push(i + 1);
    starts.push(text.length + 1);
    return starts;
}
/** which stretch of the text a mark owns: from its line to the line before the next mark */ function rangeOf(starts, marks, i) {
    const start = starts[Math.min(marks[i].line, starts.length - 1)];
    const next = marks[i + 1]?.line ?? starts.length - 1;
    const end = starts[Math.min(next, starts.length - 1)] - 1;
    return [
        start,
        Math.max(start, end)
    ];
}
/** the mark whose stretch holds a place in the text, or -1 before the first */ function markAt(starts, marks, at) {
    let lo = 0;
    let hi = marks.length - 1;
    let hit = -1;
    while(lo <= hi){
        const mid = lo + hi >> 1;
        if (rangeOf(starts, marks, mid)[0] <= at) {
            hit = mid;
            lo = mid + 1;
        } else hi = mid - 1;
    }
    return hit;
}
/** the outline: the sections as rows, the screens indented under the layout section */ function Outline({ marks, current, onPick, p }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("outline", lang),
        className: "no-scrollbar",
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: "auto",
            minHeight: 0,
            margin: 0,
            padding: 0,
            listStyle: "none"
        },
        children: marks.map((m, i)=>{
            const on = i === current;
            const screen = m.kind === "screen";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                style: {
                    display: "flex"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onPick(i),
                    title: m.label,
                    className: "m3-press",
                    "aria-current": on ? "true" : undefined,
                    style: {
                        height: 36,
                        padding: `0 12px 0 ${screen ? 28 : 12}px`,
                        borderRadius: 18,
                        border: "none",
                        background: on ? p.secondaryContainer : "transparent",
                        color: on ? p.onSecondaryContainer : screen ? p.onSurface : p.onSurfaceVariant,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        flex: "0 0 auto",
                        maxWidth: "100%",
                        textAlign: "start",
                        transition: "background 160ms"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: screen ? "smartphone" : "tag",
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/PromptPanel.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            },
                            children: m.label
                        }, void 0, false, {
                            fileName: "[project]/components/PromptPanel.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PromptPanel.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 72,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/PromptPanel.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(Outline, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Outline;
/** the width the copy button keeps, in the panel and full screen alike */ const COPY_W = 200;
/** The copy button, in a slow drift of the theme's colours: the one thing here that leaves the
 *  editor. Tapped, it keeps its look and its width and shows only a check for a moment. */ function CopyButton({ copied, onClick, p }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "m3-press",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("copyPrompt", lang),
        style: {
            width: COPY_W,
            height: 44,
            borderRadius: 22,
            border: "none",
            backgroundImage: `linear-gradient(120deg, ${p.primary}, ${p.secondary}, ${p.primary}, ${p.secondary})`,
            backgroundSize: "300% 300%",
            animation: "m3e-drift 4s ease-in-out infinite",
            color: p.onPrimary,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            display: "grid",
            placeItems: "center",
            padding: 0,
            flex: "0 0 auto",
            whiteSpace: "nowrap"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    gridArea: "1 / 1",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    visibility: copied ? "hidden" : "visible"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "content_copy",
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/PromptPanel.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("copyPrompt", lang)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    gridArea: "1 / 1",
                    display: "inline-flex",
                    visibility: copied ? "visible" : "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "check",
                    size: 22
                }, void 0, false, {
                    fileName: "[project]/components/PromptPanel.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PromptPanel.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s1(CopyButton, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = CopyButton;
/** a few lines of text in a rounded box, fading at the top and the bottom as they scroll past */ function FadeArea({ value, onChange, placeholder, p, rows = 5 }) {
    const fade = (top)=>({
            position: "absolute",
            left: 0,
            right: 0,
            [top ? "top" : "bottom"]: 0,
            height: 18,
            background: `linear-gradient(to ${top ? "bottom" : "top"}, ${p.surfaceContainerHigh}, ${p.surfaceContainerHigh}00)`,
            pointerEvents: "none"
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            borderRadius: 18,
            background: p.surfaceContainerHigh,
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "no-scrollbar",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                "aria-label": placeholder,
                rows: rows,
                style: {
                    display: "block",
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    color: p.onSurface,
                    fontSize: 14,
                    lineHeight: 1.6,
                    fontFamily: "inherit",
                    padding: "14px 16px",
                    resize: "none",
                    outline: "none",
                    boxSizing: "border-box"
                }
            }, void 0, false, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: fade(true)
            }, void 0, false, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: fade(false)
            }, void 0, false, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PromptPanel.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_c2 = FadeArea;
/** The text in its box, with a fade at the top and the bottom so what scrolls past dissolves
 *  rather than being cut, and the buttons about it fixed in the corner under the text. Under
 *  the text lies a copy of it drawn in no colour, on which the stretch picked in the outline is
 *  painted: the text itself stays free to edit. Read-only, it is the same box with no caret. */ function PromptBox({ text, starts, marks, lit, jump, onText, onCaret, p, areaRef, corner, readOnly }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const under = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** the box drawn behind the lit stretch: from its first line's top to its last line's bottom */ const [box, setBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const measure = ()=>{
        const el = mark.current;
        const host = under.current;
        if (!el || !host || lit < 0) {
            setBox(null);
            return;
        }
        const rects = Array.from(el.getClientRects());
        if (!rects.length) {
            setBox(null);
            return;
        }
        const base = host.getBoundingClientRect().top - host.scrollTop;
        const top = Math.min(...rects.map((r)=>r.top)) - base;
        const bottom = Math.max(...rects.map((r)=>r.bottom)) - base;
        setBox({
            top: top - 4,
            height: bottom - top + 8
        });
    };
    /* the observer outlives every render, so it reads the measure of the render it fires in */ const measureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(measure);
    measureRef.current = measure;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(measure, [
        lit,
        text,
        marks
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptBox.useEffect": ()=>{
            const host = under.current;
            if (!host) return;
            const ro = new ResizeObserver({
                "PromptBox.useEffect": ()=>measureRef.current()
            }["PromptBox.useEffect"]);
            ro.observe(host);
            return ({
                "PromptBox.useEffect": ()=>ro.disconnect()
            })["PromptBox.useEffect"];
        }
    }["PromptBox.useEffect"], []);
    const sync = ()=>{
        if (under.current && areaRef.current) under.current.scrollTop = areaRef.current.scrollTop;
    };
    /* the lit stretch is scrolled to where it stands in the copy under the text, which knows how
   * the lines wrap; a little room is left above it so its heading is not under the fade */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptBox.useEffect": ()=>{
            const el = mark.current;
            const host = under.current;
            if (!jump || !el || !host || !areaRef.current) return;
            const rect = el.getClientRects()[0];
            if (!rect) return;
            const top = rect.top - host.getBoundingClientRect().top + host.scrollTop;
            areaRef.current.scrollTo({
                top: Math.max(0, top - FADE - 4),
                behavior: "smooth"
            });
        }
    }["PromptBox.useEffect"], [
        jump,
        areaRef
    ]);
    const caret = ()=>areaRef.current && onCaret(areaRef.current.selectionStart);
    const [a, b] = lit >= 0 && lit < marks.length ? rangeOf(starts, marks, lit) : [
        0,
        0
    ];
    /* both layers keep the room a scrollbar takes, so the copy wraps where the text does even
   * when only the text has a scrollbar to show */ const type = {
        fontSize: FONT,
        lineHeight: LINE,
        fontFamily: "inherit",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        padding: `${PAD}px ${PAD}px ${FOOT}px`,
        boxSizing: "border-box",
        scrollbarGutter: "stable"
    };
    const fade = (top)=>({
            position: "absolute",
            left: 0,
            right: 0,
            [top ? "top" : "bottom"]: 0,
            height: top ? FADE : FOOT,
            background: `linear-gradient(to ${top ? "bottom" : "top"}, ${p.surfaceContainerLow} ${top ? "0%" : "45%"}, ${p.surfaceContainerLow}00)`,
            pointerEvents: "none",
            zIndex: 2
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            flex: 1,
            minHeight: 0,
            borderRadius: 18,
            background: p.surfaceContainerLow,
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: under,
                "aria-hidden": true,
                className: "no-scrollbar",
                style: {
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    color: "transparent",
                    ...type
                },
                children: [
                    box && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: "absolute",
                            left: PAD - 6,
                            right: PAD - 6,
                            top: box.top,
                            height: box.height,
                            borderRadius: 10,
                            background: p.secondaryContainer,
                            transition: "top 160ms, height 160ms"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/PromptPanel.tsx",
                        lineNumber: 276,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            text.slice(0, a),
                            lit >= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: mark,
                                children: text.slice(a, b)
                            }, void 0, false, {
                                fileName: "[project]/components/PromptPanel.tsx",
                                lineNumber: 279,
                                columnNumber: 24
                            }, this),
                            text.slice(b),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PromptPanel.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: areaRef,
                className: "no-scrollbar",
                value: text,
                readOnly: readOnly,
                onChange: (e)=>onText(e.target.value),
                onScroll: sync,
                onSelect: caret,
                onKeyUp: caret,
                onClick: caret,
                spellCheck: false,
                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("prompt", lang),
                style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    background: "transparent",
                    color: p.onSurface,
                    resize: "none",
                    outline: "none",
                    cursor: readOnly ? "default" : undefined,
                    ...type
                }
            }, void 0, false, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: fade(true)
            }, void 0, false, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: fade(false)
            }, void 0, false, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: 8,
                    right: 8,
                    bottom: 8,
                    zIndex: 3,
                    display: "flex"
                },
                children: corner
            }, void 0, false, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PromptPanel.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_s2(PromptBox, "CcVDagbbQDfanRvn4MEMkbw034A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c3 = PromptBox;
function PromptPanel({ doc, widths, palette: p, onDoc, onCover }) {
    _s3();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PromptPanel.useMemo[generated]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPrompt"])(doc, widths, undefined, lang)
    }["PromptPanel.useMemo[generated]"], [
        doc,
        widths,
        lang
    ]);
    const edited = doc.promptEdit !== undefined;
    const text = edited ? doc.promptEdit : generated;
    const marks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PromptPanel.useMemo[marks]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promptMarks"])(text, doc.frame === "phone" ? doc.frames : [], lang)
    }["PromptPanel.useMemo[marks]"], [
        text,
        doc.frames,
        doc.frame,
        lang
    ]);
    const starts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PromptPanel.useMemo[starts]": ()=>lineStartsOf(text)
    }["PromptPanel.useMemo[starts]"], [
        text
    ]);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** the full-screen cover: gone, or up -- and whether it has grown to the whole window yet */ const [cover, setCover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("off");
    const [grown, setGrown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** on the way out, the text box takes the panel's width -- a beat after the reset has faded */ const [narrow, setNarrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** where the panel's box stands: the cover grows out of it and shrinks back into it */ const panel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const coverEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0
    });
    /** what had the focus before the cover took it, to be given it back */ const focusBefore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** the close's own timer and frame, cleared if the panel goes before they fire */ const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** the mark whose stretch is lit: the one tapped, or the one the caret is in */ const [lit, setLit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [jump, setJump] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const area = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wideArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptPanel.useEffect": ()=>{
            if (!copied) return;
            const id = setTimeout({
                "PromptPanel.useEffect.id": ()=>setCopied(false)
            }["PromptPanel.useEffect.id"], 1400);
            return ({
                "PromptPanel.useEffect": ()=>clearTimeout(id)
            })["PromptPanel.useEffect"];
        }
    }["PromptPanel.useEffect"], [
        copied
    ]);
    const open = ()=>{
        const r = panel.current?.getBoundingClientRect();
        if (r) setFrom({
            left: r.left,
            top: r.top,
            width: r.width
        });
        focusBefore.current = document.activeElement;
        setGrown(false);
        setNarrow(false);
        setCover("on");
    };
    /* once it is up and laid out at the panel's size, the cover is told to grow: the layout is
   * read first so the browser has the starting state, and the growth is a transition from it */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptPanel.useEffect": ()=>{
            if (cover !== "on" || grown) return;
            const id = requestAnimationFrame({
                "PromptPanel.useEffect.id": ()=>{
                    void coverEl.current?.offsetWidth;
                    setGrown(true);
                    onCover?.(true);
                    /* the text keeps the place the panel was reading, and takes the keyboard */ if (wideArea.current) {
                        wideArea.current.scrollTop = area.current?.scrollTop ?? 0;
                        wideArea.current.focus({
                            preventScroll: true
                        });
                    }
                }
            }["PromptPanel.useEffect.id"]);
            return ({
                "PromptPanel.useEffect": ()=>cancelAnimationFrame(id)
            })["PromptPanel.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["PromptPanel.useEffect"], [
        cover,
        grown
    ]);
    /* the panel may go while the cover is up: the band it hid is let go, and nothing fires late */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptPanel.useEffect": ()=>({
                "PromptPanel.useEffect": ()=>{
                    onCover?.(false);
                    if (closeTimer.current) {
                        window.clearTimeout(closeTimer.current.id);
                        cancelAnimationFrame(closeTimer.current.raf);
                    }
                }
            })["PromptPanel.useEffect"]
    }["PromptPanel.useEffect"], // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    /* Closing: the panel's place is read again, in case it moved, and the text box inside the
   * cover is first set to the panel's own width, so that when the surface has shrunk back the
   * words under it are already wrapped the way the panel wraps them. The panel's text is then
   * scrolled to where the cover's is, so nothing jumps at the hand-over. */ const close = ()=>{
        const r = panel.current?.getBoundingClientRect();
        if (r) setFrom({
            left: r.left,
            top: r.top,
            width: r.width
        });
        setGrown(false);
        setCover((c)=>c === "on" ? "closing" : c);
        onCover?.(false);
        focusBefore.current?.focus({
            preventScroll: true
        });
        focusBefore.current = null;
        const id = window.setTimeout(()=>{
            setNarrow(true);
            const raf = requestAnimationFrame(()=>{
                closeTimer.current = null;
                if (area.current && wideArea.current) area.current.scrollTop = wideArea.current.scrollTop;
            });
            closeTimer.current = {
                id,
                raf
            };
        }, RESET_FADE_MS);
        closeTimer.current = {
            id,
            raf: 0
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptPanel.useEffect": ()=>{
            if (cover !== "closing") return;
            const id = setTimeout({
                "PromptPanel.useEffect.id": ()=>setCover("off")
            }["PromptPanel.useEffect.id"], COVER_MS);
            return ({
                "PromptPanel.useEffect": ()=>clearTimeout(id)
            })["PromptPanel.useEffect"];
        }
    }["PromptPanel.useEffect"], [
        cover
    ]);
    /* the cover closes on Escape, the way every cover in the editor does */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptPanel.useEffect": ()=>{
            if (cover !== "on") return;
            const onKey = {
                "PromptPanel.useEffect.onKey": (e)=>{
                    if (e.key !== "Escape") return;
                    e.preventDefault();
                    e.stopPropagation();
                    close();
                }
            }["PromptPanel.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "PromptPanel.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["PromptPanel.useEffect"];
        }
    }["PromptPanel.useEffect"], [
        cover
    ]);
    const copy = async ()=>{
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
        } catch  {}
    };
    const caret = (at)=>setLit(markAt(starts, marks, at));
    const pick = (i)=>{
        setLit(i);
        setJump((n)=>n + 1);
    };
    const platform = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
        options: [
            {
                key: "android",
                icon: "android",
                label: "Android",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("targetAndroid", lang)
            },
            {
                key: "web",
                icon: "language",
                label: "Web",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("targetWeb", lang)
            }
        ],
        value: doc.platform ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPlatformOf"])(doc.frames, doc.frame),
        onChange: (platform)=>onDoc({
                platform
            }),
        p: p,
        height: 40
    }, void 0, false, {
        fileName: "[project]/components/PromptPanel.tsx",
        lineNumber: 439,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: panel,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: `${PANEL_PAD_TOP}px 12px 12px`,
                    gap: 10
                },
                children: [
                    platform,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptBox, {
                        text: text,
                        starts: starts,
                        marks: marks,
                        lit: -1,
                        jump: 0,
                        onText: ()=>{},
                        onCaret: ()=>{},
                        p: p,
                        areaRef: area,
                        readOnly: true,
                        corner: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "flex-end"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "m3-run",
                                style: {
                                    display: "flex",
                                    gap: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyButton, {
                                        copied: copied,
                                        onClick: copy,
                                        p: p
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPanel.tsx",
                                        lineNumber: 470,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                        icon: "open_in_full",
                                        p: p,
                                        size: 44,
                                        on: true,
                                        onClick: open,
                                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("fullscreen", lang)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPanel.tsx",
                                        lineNumber: 471,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromptPanel.tsx",
                                lineNumber: 469,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PromptPanel.tsx",
                            lineNumber: 468,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PromptPanel.tsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            cover !== "off" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: coverEl,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("prompt", lang),
                style: {
                    position: "fixed",
                    zIndex: 400,
                    /* the full height from the first frame, as wide as the panel at first, then the whole
               window: the surface slides open from the right edge rather than growing from a corner */ left: grown ? 0 : from.left,
                    /* it starts just under the panel's band, so the band can fade rather than be covered, and rises over it as it opens */ top: grown ? 0 : from.top,
                    width: grown ? "100%" : from.width,
                    bottom: 0,
                    borderRadius: grown ? 0 : "18px 0 0 18px",
                    background: p.surface,
                    overflow: "hidden",
                    transition: `left ${COVER_MS}ms ${COVER_EASE}, top ${COVER_MS}ms ${COVER_EASE}, width ${COVER_MS}ms ${COVER_EASE}, border-radius ${COVER_MS}ms ${COVER_EASE}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: grown ? 20 : 12,
                            width: grown ? 300 : from.width - 24,
                            top: grown ? 40 : PANEL_PAD_TOP,
                            transition: `left ${COVER_MS}ms ${COVER_EASE}, top ${COVER_MS}ms ${COVER_EASE}, width ${COVER_MS}ms ${COVER_EASE}`
                        },
                        children: platform
                    }, void 0, false, {
                        fileName: "[project]/components/PromptPanel.tsx",
                        lineNumber: 506,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "no-scrollbar",
                        style: {
                            position: "absolute",
                            left: 20,
                            width: 300,
                            top: grown ? 40 + 40 + 10 : PANEL_PAD_TOP + 40 + 10,
                            bottom: 12,
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            overflowY: "auto",
                            /* the rest fades in as the surface opens and fades out as it closes, so nothing
                 shows through the narrowing surface but the text box it came from */ opacity: grown ? 1 : 0,
                            transition: `top ${COVER_MS}ms ${COVER_EASE}, opacity ${grown ? COVER_MS : 140}ms ease`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                value: doc.title,
                                onChange: (title)=>onDoc({
                                        title
                                    }),
                                placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("appName", lang),
                                p: p,
                                icon: "smartphone"
                            }, void 0, false, {
                                fileName: "[project]/components/PromptPanel.tsx",
                                lineNumber: 535,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeArea, {
                                value: doc.brief,
                                onChange: (brief)=>onDoc({
                                        brief
                                    }),
                                placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("brief", lang),
                                p: p
                            }, void 0, false, {
                                fileName: "[project]/components/PromptPanel.tsx",
                                lineNumber: 536,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PromptPanel.tsx",
                        lineNumber: 517,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "no-scrollbar",
                        style: {
                            position: "absolute",
                            left: 340,
                            width: 220,
                            top: grown ? 40 : PANEL_PAD_TOP,
                            bottom: 12,
                            display: "flex",
                            flexDirection: "column",
                            opacity: grown ? 1 : 0,
                            transition: `top ${COVER_MS}ms ${COVER_EASE}, opacity ${grown ? COVER_MS : 140}ms ease`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Outline, {
                            marks: marks,
                            current: lit,
                            onPick: pick,
                            p: p
                        }, void 0, false, {
                            fileName: "[project]/components/PromptPanel.tsx",
                            lineNumber: 552,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PromptPanel.tsx",
                        lineNumber: 538,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            right: 12,
                            /* on the way out the box takes the panel's width at once, so its words wrap as the panel's do */ /* the box takes what the two columns leave, and keeps a readable width on a narrow window */ width: narrow ? from.width - 24 : "max(280px, calc(100% - 592px))",
                            top: grown ? 40 : PANEL_PAD_TOP + 40 + 10,
                            bottom: 12,
                            display: "flex",
                            flexDirection: "column",
                            transition: `top ${COVER_MS}ms ${COVER_EASE}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptBox, {
                            text: text,
                            starts: starts,
                            marks: marks,
                            lit: lit,
                            jump: jump,
                            onText: (v)=>onDoc({
                                    promptEdit: v
                                }),
                            onCaret: caret,
                            p: p,
                            areaRef: wideArea,
                            corner: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    width: "100%",
                                    alignItems: "center"
                                },
                                children: [
                                    edited && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "inline-flex",
                                            opacity: grown ? 1 : 0,
                                            transition: `opacity ${grown ? COVER_MS : RESET_FADE_MS}ms ease`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                            icon: "restart_alt",
                                            p: p,
                                            size: 44,
                                            on: true,
                                            onClick: ()=>onDoc({
                                                    promptEdit: undefined
                                                }),
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("promptReset", lang)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PromptPanel.tsx",
                                            lineNumber: 584,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPanel.tsx",
                                        lineNumber: 583,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            flex: 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromptPanel.tsx",
                                        lineNumber: 587,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "m3-run",
                                        style: {
                                            display: "flex",
                                            gap: 3
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyButton, {
                                                copied: copied,
                                                onClick: copy,
                                                p: p
                                            }, void 0, false, {
                                                fileName: "[project]/components/PromptPanel.tsx",
                                                lineNumber: 591,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                                icon: cover === "closing" ? "open_in_full" : "close_fullscreen",
                                                p: p,
                                                size: 44,
                                                on: true,
                                                onClick: close,
                                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(cover === "closing" ? "fullscreen" : "exitFullscreen", lang)
                                            }, void 0, false, {
                                                fileName: "[project]/components/PromptPanel.tsx",
                                                lineNumber: 592,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PromptPanel.tsx",
                                        lineNumber: 590,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromptPanel.tsx",
                                lineNumber: 579,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PromptPanel.tsx",
                            lineNumber: 568,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PromptPanel.tsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromptPanel.tsx",
                lineNumber: 478,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PromptPanel.tsx",
        lineNumber: 452,
        columnNumber: 5
    }, this);
}
_s3(PromptPanel, "/kR+I3skKrGIx+/dVdxIiq+BcZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = PromptPanel;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Outline");
__turbopack_context__.k.register(_c1, "CopyButton");
__turbopack_context__.k.register(_c2, "FadeArea");
__turbopack_context__.k.register(_c3, "PromptBox");
__turbopack_context__.k.register(_c4, "PromptPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ShareMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareButton",
    ()=>ShareButton,
    "ShareDialog",
    ()=>ShareDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$share$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/share.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BASE_PATH ?? "";
/** the app's own URL without any hash, and the agent guide beside it */ const appUrl = ()=>`${window.location.origin}${BASE}/`;
const guideUrl = ()=>`${appUrl()}agent.md`;
function ShareButton({ p, onClick, busy }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: busy,
        title: busy ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiGenerating", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiTitle", lang),
        className: "m3-press",
        style: {
            height: 40,
            padding: "0 8px 0 16px",
            borderRadius: 20,
            border: "none",
            background: "transparent",
            color: busy ? p.onSurfaceVariant : p.onSurface,
            fontSize: 13,
            fontWeight: 600,
            cursor: busy ? "default" : "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            whiteSpace: "nowrap"
        },
        children: [
            busy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: "hourglass_top",
                size: 18
            }, void 0, false, {
                fileName: "[project]/components/ShareMenu.tsx",
                lineNumber: 41,
                columnNumber: 16
            }, this),
            busy ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiGenerating", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAi", lang),
            !busy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Beta, {
                p: p
            }, void 0, false, {
                fileName: "[project]/components/ShareMenu.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ShareMenu.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ShareButton, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = ShareButton;
const Beta = ({ p })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: 10,
            fontWeight: 700,
            padding: "2px 7px",
            borderRadius: 8,
            background: p.tertiaryContainer,
            color: p.onTertiaryContainer,
            letterSpacing: 0.4
        },
        children: "BETA"
    }, void 0, false, {
        fileName: "[project]/components/ShareMenu.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Beta;
function ShareDialog({ p, doc, aiReady, idea, onIdea, open, onClose, onDraft, onSetupAi }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShareDialog.useEffect": ()=>{
            if (!copied) return;
            const id = setTimeout({
                "ShareDialog.useEffect.id": ()=>setCopied(null)
            }["ShareDialog.useEffect.id"], copied === "ask" ? 4000 : 1400);
            return ({
                "ShareDialog.useEffect": ()=>clearTimeout(id)
            })["ShareDialog.useEffect"];
        }
    }["ShareDialog.useEffect"], [
        copied
    ]);
    /* a fresh dialog starts without a "copied" mark; kept apart from the key handler, whose
     onClose changes identity on every render of the page */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShareDialog.useEffect": ()=>{
            if (open) setCopied(null);
        }
    }["ShareDialog.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShareDialog.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "ShareDialog.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") {
                        e.stopPropagation();
                        onClose();
                    }
                }
            }["ShareDialog.useEffect.onKey"];
            window.addEventListener("keydown", onKey, true);
            return ({
                "ShareDialog.useEffect": ()=>window.removeEventListener("keydown", onKey, true)
            })["ShareDialog.useEffect"];
        }
    }["ShareDialog.useEffect"], [
        open,
        onClose
    ]);
    const copyAsk = async ()=>{
        const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiText", lang).replace("{url}", guideUrl()).replace("{idea}", idea.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiIdeaFallback", lang));
        try {
            await navigator.clipboard.writeText(text);
            setCopied("ask");
        } catch  {}
    };
    const copyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$share$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shareLink"])(doc, appUrl()));
            setCopied("link");
        } catch  {}
    };
    /* a connected pair, the way the canvas draws connected buttons: outer corners round, inner ones tight */ const pill = (icon, label, onClick, opts)=>{
        const outer = 20;
        const inner = 8;
        const radius = opts?.corners === "left" ? `${outer}px ${inner}px ${inner}px ${outer}px` : opts?.corners === "right" ? `${inner}px ${outer}px ${outer}px ${inner}px` : outer;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            disabled: opts?.disabled,
            title: opts?.title,
            className: "m3-press",
            style: {
                height: 40,
                padding: "0 18px",
                borderRadius: radius,
                border: "none",
                background: opts?.primary ? p.primary : p.secondaryContainer,
                color: opts?.primary ? p.onPrimary : p.onSecondaryContainer,
                opacity: opts?.disabled ? 0.5 : 1,
                fontSize: 13,
                fontWeight: 600,
                cursor: opts?.disabled ? "default" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                flex: "0 0 auto",
                whiteSpace: "nowrap"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: icon,
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/components/ShareMenu.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                label
            ]
        }, void 0, true, {
            fileName: "[project]/components/ShareMenu.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
            onClick: onClose,
            style: {
                position: "fixed",
                inset: 0,
                zIndex: 600,
                background: "rgba(0,0,0,0.32)",
                display: "grid",
                placeItems: "center",
                padding: 24
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                role: "dialog",
                "aria-modal": true,
                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAi", lang),
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
                    width: "min(100%, 620px)",
                    padding: 24,
                    borderRadius: 28,
                    background: p.surfaceContainerHigh,
                    color: p.onSurface,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 22
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAi", lang)
                            }, void 0, false, {
                                fileName: "[project]/components/ShareMenu.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Beta, {
                                p: p
                            }, void 0, false, {
                                fileName: "[project]/components/ShareMenu.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flex: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ShareMenu.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this),
                            pill(copied === "link" ? "check" : "link", copied === "link" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("copied", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shareLinkCopy", lang), copyLink, {
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shareLinkHint", lang)
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ShareMenu.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            fontSize: 13,
                            lineHeight: 1.55,
                            color: p.onSurfaceVariant
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiHint", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/ShareMenu.tsx",
                        lineNumber: 191,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: idea,
                        onChange: (e)=>onIdea(e.target.value),
                        placeholder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiIdea", lang),
                        rows: 4,
                        autoFocus: true,
                        spellCheck: false,
                        style: {
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: 14,
                            border: "none",
                            background: p.surface,
                            color: p.onSurface,
                            font: "inherit",
                            fontSize: 14,
                            lineHeight: 1.45,
                            outline: "none",
                            boxSizing: "border-box",
                            resize: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ShareMenu.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 6,
                                    fontSize: 13,
                                    fontWeight: copied === "ask" ? 600 : 400,
                                    color: copied === "ask" ? p.primary : p.onSurfaceVariant
                                },
                                children: copied === "ask" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "content_paste_go",
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/ShareMenu.tsx",
                                            lineNumber: 219,
                                            columnNumber: 21
                                        }, this),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiPasted", lang)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ShareMenu.tsx",
                                    lineNumber: 218,
                                    columnNumber: 19
                                }, this) : !aiReady ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiSetupHint", lang) : null
                            }, void 0, false, {
                                fileName: "[project]/components/ShareMenu.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    gap: 3,
                                    flex: "0 0 auto"
                                },
                                children: [
                                    pill(copied === "ask" ? "check" : "content_copy", copied === "ask" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("copied", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiCopy", lang), copyAsk, {
                                        corners: "left",
                                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiCopyTitle", lang)
                                    }),
                                    aiReady ? pill("auto_awesome", (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiGenerate", lang), ()=>onDraft(idea), {
                                        primary: true,
                                        disabled: !idea.trim(),
                                        corners: "right",
                                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("askAiGenerateTitle", lang)
                                    }) : pill("key", (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiSetup", lang), onSetupAi, {
                                        primary: true,
                                        corners: "right",
                                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("aiSetupTitle", lang)
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ShareMenu.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ShareMenu.tsx",
                        lineNumber: 214,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("closeBtn", lang),
                            className: "m3-press",
                            style: {
                                height: 40,
                                padding: "0 16px",
                                borderRadius: 20,
                                border: "none",
                                background: "transparent",
                                color: p.primary,
                                fontSize: 14,
                                fontWeight: 600,
                                cursor: "pointer"
                            },
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("closeBtn", lang)
                        }, void 0, false, {
                            fileName: "[project]/components/ShareMenu.tsx",
                            lineNumber: 234,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ShareMenu.tsx",
                        lineNumber: 233,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ShareMenu.tsx",
                lineNumber: 164,
                columnNumber: 11
            }, this)
        }, "scrim", false, {
            fileName: "[project]/components/ShareMenu.tsx",
            lineNumber: 155,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ShareMenu.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s1(ShareDialog, "U9iIRLaIxajLVlVOds6lsI9WUMg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = ShareDialog;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ShareButton");
__turbopack_context__.k.register(_c1, "Beta");
__turbopack_context__.k.register(_c2, "ShareDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SizeHandles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CORNERS",
    ()=>CORNERS,
    "CORNER_GAIN",
    ()=>CORNER_GAIN,
    "SizeHandles",
    ()=>SizeHandles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CORNERS = [
    "tl",
    "tr",
    "bl",
    "br"
];
const CORNER_GAIN = 1 + Math.SQRT1_2;
const same = (a, c)=>a.l === c.l && a.t === c.t && a.r === c.r && a.b === c.b;
const ALL_SIDES = [
    "left",
    "right",
    "top",
    "bottom"
];
const mix = (a, c, k)=>({
        l: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(a.l, c.l, k),
        t: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(a.t, c.t, k),
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(a.r, c.r, k),
        b: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(a.b, c.b, k)
    });
function SizeHandles({ round, sides, box, z, instant, p, onDown, onNudge }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(box);
    const at = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(box);
    /* the box is read as its four edges, so a new box -- and only a new box -- starts the easing */ const { l, t: top, r, b } = box;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SizeHandles.useEffect": ()=>{
            const from = at.current;
            const next = {
                l,
                t: top,
                r,
                b
            };
            const land = {
                "SizeHandles.useEffect.land": ()=>{
                    at.current = next;
                    setShown(next);
                }
            }["SizeHandles.useEffect.land"];
            if (instant || same(from, next)) {
                land();
                return;
            }
            const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(0, 1, {
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SETTLE_MS"] / 1000,
                ease: [
                    0.2,
                    0,
                    0,
                    1
                ],
                onUpdate: {
                    "SizeHandles.useEffect.run": (k)=>{
                        const cur = mix(from, next, k);
                        at.current = cur;
                        setShown(cur);
                    }
                }["SizeHandles.useEffect.run"],
                onComplete: land
            });
            return ({
                "SizeHandles.useEffect": ()=>run.stop()
            })["SizeHandles.useEffect"];
        }
    }["SizeHandles.useEffect"], [
        l,
        top,
        r,
        b,
        instant
    ]);
    const w = shown.r - shown.l;
    const h = shown.b - shown.t;
    const cx = (shown.l + shown.r) / 2;
    const cy = (shown.t + shown.b) / 2;
    /* the handle follows the button's height on screen, within bounds: it must neither dwarf a
   * button zoomed far out nor vanish on one zoomed far in */ const hh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(h * 0.55, 12 / z, 32 / z);
    const hw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(hh * 0.22, 3 / z, 7 / z);
    /* the drawn handle keeps its size; what the finger may land on is a little wider all round */ const PAD = 7 / z;
    /* which key pulls a handle outward: the one pointing away from the part on the side it holds */ const outward = (side, key)=>{
        const right = side === "right" || side === "tr" || side === "br";
        const left = side === "left" || side === "tl" || side === "bl";
        const down = side === "bottom" || side === "bl" || side === "br";
        const up = side === "top" || side === "tl" || side === "tr";
        if (key === "ArrowRight") return right ? 1 : left ? -1 : 0;
        if (key === "ArrowLeft") return left ? 1 : right ? -1 : 0;
        if (key === "ArrowDown") return down ? 1 : up ? -1 : 0;
        if (key === "ArrowUp") return up ? 1 : down ? -1 : 0;
        return 0;
    };
    const handle = (side, x, y, dw, dh, cursor, title)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            /* the canvas behind the handle hears nothing of the press: the drag is the handle's own */ onPointerDown: (e)=>{
                e.stopPropagation();
                onDown(e, side);
            },
            onKeyDown: (e)=>{
                const dir = outward(side, e.key);
                if (!dir) return;
                e.preventDefault();
                e.stopPropagation();
                onNudge(side, dir);
            },
            title: title,
            "aria-label": title,
            style: {
                position: "absolute",
                left: x - dw / 2 - PAD,
                top: y - dh / 2 - PAD,
                width: dw + PAD * 2,
                height: dh + PAD * 2,
                padding: 0,
                border: "none",
                background: "transparent",
                display: "grid",
                placeItems: "center",
                cursor,
                zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIZE_HANDLE_Z"],
                touchAction: "none"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: dw,
                    height: dh,
                    borderRadius: Math.min(dw, dh),
                    background: p.primary,
                    border: `${1 / z}px solid ${p.surface}`,
                    boxSizing: "border-box"
                }
            }, void 0, false, {
                fileName: "[project]/components/SizeHandles.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        }, side, false, {
            fileName: "[project]/components/SizeHandles.tsx",
            lineNumber: 103,
            columnNumber: 5
        }, this);
    if (round) {
        /* each point sits where its diagonal crosses the corner it is nearest. On a circle that is
     * the circle itself; on a part longer than it is tall -- an extended FAB, a chip -- it is the
     * rounded end, which is the same arc, so the four points land on the outline either way. */ const rr = Math.min(w, h) / 2;
        const dot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(rr * 0.34, 5 / z, 11 / z);
        const inset = rr - rr / Math.SQRT2;
        const offX = w / 2 - inset;
        const offY = h / 2 - inset;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: CORNERS.map((side)=>handle(side, cx + (side === "tl" || side === "bl" ? -offX : offX), cy + (side === "tl" || side === "tr" ? -offY : offY), dot, dot, side === "tl" || side === "br" ? "nwse-resize" : "nesw-resize", (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("resizeSize", lang)))
        }, void 0, false, {
            fileName: "[project]/components/SizeHandles.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this);
    }
    /* the side handles keep the button's proportions; the top and bottom ones are the same pill
   * laid down, and never wider than the button they sit on */ const vw = Math.min(hh, w * 0.55);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: (sides ?? ALL_SIDES).map((side)=>{
            const vertical = side === "top" || side === "bottom";
            return handle(side, vertical ? cx : side === "left" ? shown.l : shown.r, vertical ? side === "top" ? shown.t : shown.b : cy, vertical ? vw : hw, vertical ? hw : hh, vertical ? "ns-resize" : "ew-resize", (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(vertical ? "resizeHeight" : "resizeWidth", lang));
        })
    }, void 0, false, {
        fileName: "[project]/components/SizeHandles.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(SizeHandles, "E8wreTV9io/3d72EZsvE8gpaWPo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = SizeHandles;
var _c;
__turbopack_context__.k.register(_c, "SizeHandles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TapStage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkStage",
    ()=>LinkStage,
    "TapStage",
    ()=>TapStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Inspector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const STAGE_H = 190;
const STAGE_PAD = 12;
/** room the screen name above a mini frame takes */ const LABEL_H = 18;
const ARROW_W = 28;
const GAP = 12;
/** where the box inside the arriving screen starts; it always ends in place */ function entryOf(tr, w, h) {
    switch(tr){
        case "slide":
            return {
                x: w,
                opacity: 0
            };
        case "slideLeft":
            return {
                x: -w,
                opacity: 0
            };
        case "slideUp":
            return {
                y: h * 0.7,
                opacity: 0
            };
        case "slideDown":
            return {
                y: -h * 0.7,
                opacity: 0
            };
        case "fade":
            return {
                opacity: 0
            };
        case "expand":
            return {
                scale: 0.5,
                opacity: 0
            };
        case "none":
            return {};
    }
}
const LOOP = {
    duration: 0.6,
    ease: [
        0.2,
        0,
        0,
        1
    ],
    repeat: Infinity,
    repeatDelay: 1.2
};
/** someone who asked for less motion sees the box land once, and then stay */ const ONCE = {
    duration: 0
};
/** how wide the stage is on screen, so both screens can be scaled down together to fit it */ function useAvailWidth() {
    _s();
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [avail, setAvail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAvailWidth.useEffect": ()=>{
            const el = stage.current;
            if (!el) return;
            const ro = new ResizeObserver({
                "useAvailWidth.useEffect": ()=>setAvail(el.clientWidth)
            }["useAvailWidth.useEffect"]);
            ro.observe(el);
            setAvail(el.clientWidth);
            return ({
                "useAvailWidth.useEffect": ()=>ro.disconnect()
            })["useAvailWidth.useEffect"];
        }
    }["useAvailWidth.useEffect"], []);
    return [
        stage,
        avail
    ];
}
_s(useAvailWidth, "/3puqn9ynhQsCI49CeAg0GT0pYw=");
/** the arrow between the screen a tap leaves and what it opens; decoration, so it says nothing */ function StageArrow({ p, flip }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": true,
        width: ARROW_W,
        height: 16,
        viewBox: "0 0 28 16",
        style: {
            flex: "0 0 auto",
            transform: flip ? "scaleX(-1)" : undefined,
            marginTop: LABEL_H
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2 8 H22 M16 2 L23 8 L16 14",
            fill: "none",
            stroke: p.primary,
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/components/TapStage.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TapStage.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = StageArrow;
/** a screen drawn small: a rounded outline with the screen name above it. The box inside stands
 *  for what the screen shows, and it is the box that moves when a transition plays. */ function MiniFrame({ name, p, on, dot, rect, dashed, box }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            flex: "0 0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    height: LABEL_H - 4,
                    fontSize: 11,
                    fontWeight: 600,
                    color: on ? p.primary : p.onSurfaceVariant,
                    maxWidth: rect.w + 24,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                children: name
            }, void 0, false, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: rect.w,
                    height: rect.h,
                    borderRadius: 8,
                    overflow: "hidden",
                    background: on ? p.primaryContainer : p.surface,
                    border: `${on ? 2 : 1}px ${dashed ? "dashed" : "solid"} ${on ? p.primary : p.outline}`,
                    boxSizing: "border-box"
                },
                children: [
                    box,
                    dot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        style: {
                            position: "absolute",
                            left: dot.x - 5,
                            top: dot.y - 5,
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            background: p.primary,
                            border: `2px solid ${p.surface}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/TapStage.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TapStage.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c1 = MiniFrame;
/** the moving box inside a mini frame: a sheet of content, inset so the frame stays visible around it */ function ContentBox({ rect, p, on, children }) {
    const inset = Math.max(4, Math.round(rect.w * 0.1));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            left: inset,
            right: inset,
            top: inset,
            bottom: inset,
            borderRadius: 6,
            background: on ? p.primary : p.outlineVariant,
            color: on ? p.onPrimary : p.onSurfaceVariant,
            display: "grid",
            placeItems: "center"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/TapStage.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_c2 = ContentBox;
function TapStage({ frames, self, selfRect, action, onChange, p }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const loop = reduced ? ONCE : LOOP;
    const to = action?.to ?? null;
    const target = to && to !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACK_TARGET"] ? frames.find((f)=>f.id === to) ?? null : null;
    const back = to === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACK_TARGET"];
    /* the stage scales both screens down together, so a desktop screen next to a phone one still fits */ const [stage, avail] = useAvailWidth();
    const selfSize = self ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(self) : {
        w: 412,
        h: 892
    };
    const otherSize = target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(target) : back ? selfSize : null;
    /* with no other screen to go to, the stage carries a line of help under the frame */ const hint = !target && !back && frames.filter((f)=>f.id !== self?.id).length === 0;
    const maxH = STAGE_H - STAGE_PAD * 2 - LABEL_H - (hint ? 34 : 0);
    const wBudget = Math.max(80, (avail || 260) - STAGE_PAD * 2 - (otherSize ? ARROW_W + GAP * 2 : 0));
    const dpW = Math.max(1, selfSize.w + (otherSize?.w ?? 0));
    const dpH = Math.max(1, selfSize.h, otherSize?.h ?? 0);
    const k = Math.min(maxH / dpH, wBudget / dpW);
    const rectOf = (s)=>({
            w: Math.round(s.w * k),
            h: Math.round(s.h * k)
        });
    const fromRect = rectOf(selfSize);
    const toRect = rectOf(otherSize ?? selfSize);
    const dot = selfRect && self ? {
        x: (selfRect.x + selfRect.w / 2 - self.x) * k,
        y: (selfRect.y + selfRect.h / 2 - self.y) * k
    } : null;
    const screen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screen", lang);
    const arrow = (flip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StageArrow, {
            p: p,
            flip: flip
        }, "arrow", false, {
            fileName: "[project]/components/TapStage.tsx",
            lineNumber: 192,
            columnNumber: 36
        }, this);
    /* the screen the button sits on; going back, its box is the one that leaves */ const fromFrame = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniFrame, {
        name: self ? self.name || screen : "",
        p: p,
        on: false,
        dot: dot,
        rect: fromRect,
        box: back ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: fromRect.w,
                opacity: 0
            },
            transition: loop,
            style: {
                position: "absolute",
                inset: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentBox, {
                rect: fromRect,
                p: p,
                on: false
            }, void 0, false, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 212,
                columnNumber: 13
            }, this)
        }, `out-${action?.transition}`, false, {
            fileName: "[project]/components/TapStage.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentBox, {
            rect: fromRect,
            p: p,
            on: false
        }, void 0, false, {
            fileName: "[project]/components/TapStage.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this)
    }, "from", false, {
        fileName: "[project]/components/TapStage.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
    /* the screen the tap opens; its box is the one that arrives */ const toFrame = (target || back) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniFrame, {
        name: target ? target.name || screen : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("back", lang),
        p: p,
        on: true,
        rect: toRect,
        dashed: back,
        box: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            initial: back ? {
                x: -toRect.w,
                opacity: 0
            } : entryOf(action?.transition ?? "slide", toRect.w, toRect.h),
            animate: {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1
            },
            transition: loop,
            style: {
                position: "absolute",
                inset: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentBox, {
                rect: toRect,
                p: p,
                on: true,
                children: back && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "arrow_back",
                    size: Math.max(14, Math.round(toRect.w * 0.3))
                }, void 0, false, {
                    fileName: "[project]/components/TapStage.tsx",
                    lineNumber: 239,
                    columnNumber: 22
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 238,
                columnNumber: 11
            }, this)
        }, `in-${action?.transition}-${to}`, false, {
            fileName: "[project]/components/TapStage.tsx",
            lineNumber: 231,
            columnNumber: 9
        }, this)
    }, "to", false, {
        fileName: "[project]/components/TapStage.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: stage,
                style: {
                    position: "relative",
                    height: STAGE_H,
                    borderRadius: 16,
                    overflow: "hidden",
                    backgroundColor: p.surfaceContainerLow,
                    backgroundImage: `radial-gradient(${p.outlineVariant} 1px, transparent 1px)`,
                    backgroundSize: "12px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: GAP,
                    padding: STAGE_PAD,
                    boxSizing: "border-box"
                },
                children: [
                    back ? [
                        toFrame,
                        arrow(true),
                        fromFrame
                    ] : [
                        fromFrame,
                        toFrame && arrow(false),
                        toFrame
                    ],
                    hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: 12,
                            right: 12,
                            bottom: 10,
                            fontSize: 12,
                            lineHeight: 1.5,
                            color: p.onSurfaceVariant,
                            textAlign: "center"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("addFrameHint", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/TapStage.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            target && action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionPicker"], {
                value: action.transition,
                onChange: (transition)=>onChange({
                        ...action,
                        transition
                    }),
                p: p
            }, void 0, false, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 272,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TapStage.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_s1(TapStage, "/sw3MN2upu4TzfBONOz9mRogRuM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        useAvailWidth
    ];
});
_c3 = TapStage;
/** the window the link opens in, drawn as small as a screen beside it: a title bar with its
 *  three dots and an address pill, and the host written across the page below */ function MiniBrowser({ host, rect, p }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const bar = Math.max(12, Math.round(rect.h * 0.26));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            flex: "0 0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    height: LABEL_H - 4,
                    fontSize: 11,
                    fontWeight: 600,
                    color: p.primary,
                    maxWidth: rect.w + 24,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("linkBrowser", lang)
            }, void 0, false, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: rect.w,
                    height: rect.h,
                    borderRadius: 8,
                    overflow: "hidden",
                    background: p.surface,
                    border: `2px ${host ? "solid" : "dashed"} ${p.primary}`,
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: bar,
                            flex: "0 0 auto",
                            background: p.primaryContainer,
                            display: "flex",
                            alignItems: "center",
                            gap: 3,
                            padding: "0 4px"
                        },
                        children: [
                            [
                                0,
                                1,
                                2
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    style: {
                                        width: 3,
                                        height: 3,
                                        borderRadius: 2,
                                        background: p.onPrimaryContainer,
                                        opacity: 0.6,
                                        flex: "0 0 auto"
                                    }
                                }, i, false, {
                                    fileName: "[project]/components/TapStage.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    height: Math.max(4, bar - 8),
                                    borderRadius: 3,
                                    background: p.surface
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/TapStage.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TapStage.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            display: "grid",
                            placeItems: "center",
                            padding: "0 6px",
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "language",
                                size: Math.max(14, Math.round(rect.w * 0.16))
                            }, void 0, false, {
                                fileName: "[project]/components/TapStage.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 9,
                                    fontWeight: 600,
                                    color: p.onSurfaceVariant,
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                },
                                children: host ?? "https://"
                            }, void 0, false, {
                                fileName: "[project]/components/TapStage.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TapStage.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TapStage.tsx",
        lineNumber: 283,
        columnNumber: 5
    }, this);
}
_s2(MiniBrowser, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = MiniBrowser;
function LinkStage({ self, selfRect, action, onChange, p }) {
    _s3();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [stage, avail] = useAvailWidth();
    const typed = action?.url ?? "";
    const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkHostOf"])(action);
    const bad = typed.trim().length > 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkUrlOf"])(action);
    const selfSize = self ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(self) : {
        w: 412,
        h: 892
    };
    /* the window is a landscape sheet beside the screen, sized in the same dp the stage scales */ const winSize = {
        w: Math.round(selfSize.w * 1.4),
        h: Math.round(selfSize.w * 0.95)
    };
    const maxH = STAGE_H - STAGE_PAD * 2 - LABEL_H;
    const wBudget = Math.max(80, (avail || 260) - STAGE_PAD * 2 - ARROW_W - GAP * 2);
    const k = Math.min(maxH / Math.max(1, selfSize.h, winSize.h), wBudget / Math.max(1, selfSize.w + winSize.w));
    const rectOf = (s)=>({
            w: Math.round(s.w * k),
            h: Math.round(s.h * k)
        });
    const fromRect = rectOf(selfSize);
    const dot = selfRect && self ? {
        x: (selfRect.x + selfRect.w / 2 - self.x) * k,
        y: (selfRect.y + selfRect.h / 2 - self.y) * k
    } : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: stage,
                style: {
                    position: "relative",
                    height: STAGE_H,
                    borderRadius: 16,
                    overflow: "hidden",
                    backgroundColor: p.surfaceContainerLow,
                    backgroundImage: `radial-gradient(${p.outlineVariant} 1px, transparent 1px)`,
                    backgroundSize: "12px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: GAP,
                    padding: STAGE_PAD,
                    boxSizing: "border-box"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniFrame, {
                        name: self ? self.name || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("screen", lang) : "",
                        p: p,
                        on: false,
                        dot: dot,
                        rect: fromRect,
                        box: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentBox, {
                            rect: fromRect,
                            p: p,
                            on: false
                        }, void 0, false, {
                            fileName: "[project]/components/TapStage.tsx",
                            lineNumber: 368,
                            columnNumber: 118
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TapStage.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StageArrow, {
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/TapStage.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniBrowser, {
                        host: host,
                        rect: rectOf(winSize),
                        p: p
                    }, void 0, false, {
                        fileName: "[project]/components/TapStage.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                value: typed,
                onChange: (url)=>onChange({
                        to: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"],
                        transition: action?.transition ?? "none",
                        url
                    }),
                placeholder: "https://example.com",
                icon: "link",
                p: p,
                invalid: bad,
                describedBy: bad ? "link-invalid" : undefined
            }, void 0, false, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            bad && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "link-invalid",
                role: "alert",
                style: {
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: p.error,
                    padding: "0 4px"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("linkInvalid", lang)
            }, void 0, false, {
                fileName: "[project]/components/TapStage.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TapStage.tsx",
        lineNumber: 349,
        columnNumber: 5
    }, this);
}
_s3(LinkStage, "0vZb7DLOc4Xo+jvqD6lYRLNpJ58=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        useAvailWidth
    ];
});
_c5 = LinkStage;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "StageArrow");
__turbopack_context__.k.register(_c1, "MiniFrame");
__turbopack_context__.k.register(_c2, "ContentBox");
__turbopack_context__.k.register(_c3, "TapStage");
__turbopack_context__.k.register(_c4, "MiniBrowser");
__turbopack_context__.k.register(_c5, "LinkStage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ThemePanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionPanel",
    ()=>MotionPanel,
    "ShapePanel",
    ()=>ShapePanel,
    "TypePanel",
    ()=>TypePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const shapeLabel = (k, lang)=>k === "square" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shapeSquare", lang) : k === "full" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shapeFull", lang) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shapeRounded", lang);
/** the corner radius a 28dp default becomes under each scale, for the option art */ const previewR = (k)=>k === "square" ? 6 : k === "full" ? 28 : 16;
function Hint({ p, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: 11,
            lineHeight: 1.5,
            color: p.onSurfaceVariant,
            padding: "0 4px"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ThemePanel.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c = Hint;
function OptionCard({ on, onClick, p, label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        "aria-pressed": on,
        className: "m3-press",
        style: {
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            padding: "12px 8px 10px",
            borderRadius: 16,
            border: "none",
            background: on ? p.secondaryContainer : p.surfaceContainerLow,
            color: on ? p.onSecondaryContainer : p.onSurface,
            cursor: "pointer",
            outline: on ? `2px solid ${p.primary}` : "2px solid transparent",
            outlineOffset: 1
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 12,
                    fontWeight: 600,
                    maxWidth: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemePanel.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = OptionCard;
function ShapePanel({ p, theme, onChange }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-scrollbar",
        style: {
            height: "100%",
            overflowY: "auto",
            padding: "12px 12px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 12,
                    fontWeight: 700,
                    color: p.onSurfaceVariant,
                    padding: "0 4px"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shapeScale", lang)
            }, void 0, false, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 6
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHAPES"].map((sh)=>{
                    const r = previewR(sh.key);
                    const on = theme.shape === sh.key;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange({
                                shape: sh.key
                            }),
                        "aria-pressed": on,
                        className: "m3-press",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 10,
                            padding: "12px 14px 14px",
                            borderRadius: 16,
                            border: "none",
                            background: on ? p.secondaryContainer : p.surfaceContainerLow,
                            color: on ? p.onSecondaryContainer : p.onSurface,
                            cursor: "pointer",
                            textAlign: "left"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0,
                                            fontSize: 14,
                                            fontWeight: 600,
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap"
                                        },
                                        children: shapeLabel(sh.key, lang)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ThemePanel.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "check",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/ThemePanel.tsx",
                                        lineNumber: 93,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ThemePanel.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 64,
                                            height: 26,
                                            borderRadius: r,
                                            background: p.primary
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ThemePanel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 26,
                                            height: 26,
                                            borderRadius: Math.round(r * 0.6),
                                            background: p.primaryContainer
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ThemePanel.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 40,
                                            height: 26,
                                            borderRadius: Math.round(r * 0.7),
                                            background: p.surfaceContainerHighest,
                                            border: `1px solid ${p.outlineVariant}`,
                                            boxSizing: "border-box"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ThemePanel.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ThemePanel.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this)
                        ]
                    }, sh.key, true, {
                        fileName: "[project]/components/ThemePanel.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hint, {
                p: p,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("shapeHint", lang)
            }, void 0, false, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemePanel.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(ShapePanel, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = ShapePanel;
function TypePanel({ p, theme, onChange }) {
    _s1();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-scrollbar",
        style: {
            height: "100%",
            overflowY: "auto",
            padding: "12px 12px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 12,
                    fontWeight: 700,
                    color: p.onSurfaceVariant,
                    padding: "0 4px"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("fontFamily", lang)
            }, void 0, false, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 6
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONTS"].map((f)=>{
                    const on = theme.font === f.key;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureFontLoaded"])(f.key);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange({
                                font: f.key
                            }),
                        "aria-pressed": on,
                        className: "m3-press",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            height: 52,
                            padding: "0 14px 0 12px",
                            borderRadius: 16,
                            border: "none",
                            background: on ? p.secondaryContainer : p.surfaceContainerLow,
                            color: on ? p.onSecondaryContainer : p.onSurface,
                            cursor: "pointer",
                            textAlign: "left",
                            fontFamily: f.family
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 24,
                                    fontWeight: 600,
                                    width: 36,
                                    flex: "0 0 auto"
                                },
                                children: "Aa"
                            }, void 0, false, {
                                fileName: "[project]/components/ThemePanel.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    fontSize: 14,
                                    fontWeight: 500,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                },
                                children: f.label
                            }, void 0, false, {
                                fileName: "[project]/components/ThemePanel.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this),
                            on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/ThemePanel.tsx",
                                lineNumber: 142,
                                columnNumber: 22
                            }, this)
                        ]
                    }, f.key, true, {
                        fileName: "[project]/components/ThemePanel.tsx",
                        lineNumber: 120,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 12,
                    borderRadius: 16,
                    background: p.surfaceContainerLow,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                        on: theme.emphasized,
                        onChange: (emphasized)=>onChange({
                                emphasized
                            }),
                        p: p,
                        icon: "format_bold",
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("emphasized", lang),
                        grow: true
                    }, void 0, false, {
                        fileName: "[project]/components/ThemePanel.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hint, {
                        p: p,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("emphasizedHint", lang)
                    }, void 0, false, {
                        fileName: "[project]/components/ThemePanel.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemePanel.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s1(TypePanel, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c3 = TypePanel;
function MotionPanel({ p, theme, onChange }) {
    _s2();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const expressive = theme.motion === "expressive";
    const transition = expressive ? {
        type: "spring",
        stiffness: 380,
        damping: 18,
        mass: 1
    } : {
        duration: 0.35,
        ease: [
            0.2,
            0,
            0,
            1
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-scrollbar",
        style: {
            height: "100%",
            overflowY: "auto",
            padding: "12px 12px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 12,
                    fontWeight: 700,
                    color: p.onSurfaceVariant,
                    padding: "0 4px"
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("motionScheme", lang)
            }, void 0, false, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionCard, {
                        on: !expressive,
                        onClick: ()=>{
                            onChange({
                                motion: "standard"
                            });
                            setTick((n)=>n + 1);
                        },
                        p: p,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("motionStandard", lang),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "64",
                            height: "36",
                            viewBox: "0 0 64 36",
                            "aria-hidden": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 32 C 24 32, 30 4, 60 4",
                                fill: "none",
                                stroke: p.primary,
                                strokeWidth: "3",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/ThemePanel.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ThemePanel.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ThemePanel.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionCard, {
                        on: expressive,
                        onClick: ()=>{
                            onChange({
                                motion: "expressive"
                            });
                            setTick((n)=>n + 1);
                        },
                        p: p,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("motionExpressive", lang),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "64",
                            height: "36",
                            viewBox: "0 0 64 36",
                            "aria-hidden": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 32 C 16 32, 20 -6, 32 6 S 48 10, 60 4",
                                fill: "none",
                                stroke: p.primary,
                                strokeWidth: "3",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/ThemePanel.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ThemePanel.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ThemePanel.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hint, {
                p: p,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("motionHint", lang)
            }, void 0, false, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setTick((n)=>n + 1),
                className: "m3-press",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("tryIt", lang),
                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("tryIt", lang),
                style: {
                    position: "relative",
                    height: 96,
                    borderRadius: 16,
                    border: "none",
                    background: p.surfaceContainerLow,
                    cursor: "pointer",
                    overflow: "hidden",
                    padding: 0,
                    display: "grid",
                    placeItems: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                    initial: {
                        x: -110,
                        scale: 0.8,
                        rotate: -20
                    },
                    animate: {
                        x: 0,
                        scale: 1,
                        rotate: 0
                    },
                    transition: transition,
                    style: {
                        width: 48,
                        height: 48,
                        borderRadius: expressive ? 14 : 24,
                        background: p.primary,
                        display: "grid",
                        placeItems: "center",
                        color: p.onPrimary
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "arrow_forward",
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/components/ThemePanel.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this)
                }, `${theme.motion}:${tick}`, false, {
                    fileName: "[project]/components/ThemePanel.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ThemePanel.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemePanel.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_s2(MotionPanel, "BUlYQUfctIn9ndvvGBC2ybdVYfQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c4 = MotionPanel;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Hint");
__turbopack_context__.k.register(_c1, "OptionCard");
__turbopack_context__.k.register(_c2, "ShapePanel");
__turbopack_context__.k.register(_c3, "TypePanel");
__turbopack_context__.k.register(_c4, "MotionPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Toolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GitHubLink",
    ()=>GitHubLink,
    "Toolbar",
    ()=>Toolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ShareMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/M3Node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Menus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Menus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const REPO_URL = "https://github.com/lnkiai/m3e-canvas";
function GitHubLink({ p, size = 40 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: REPO_URL,
        target: "_blank",
        rel: "noreferrer",
        title: "GitHub",
        "aria-label": "GitHub",
        className: "m3-press",
        style: {
            width: size,
            height: size,
            borderRadius: size / 2,
            display: "grid",
            placeItems: "center",
            color: p.onSurfaceVariant,
            textDecoration: "none",
            flex: "0 0 auto"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: Math.round(size * 0.55),
            height: Math.round(size * 0.55),
            viewBox: "0 0 16 16",
            fill: "currentColor",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            }, void 0, false, {
                fileName: "[project]/components/Toolbar.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Toolbar.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Toolbar.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = GitHubLink;
function Pill({ p, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: 6,
            borderRadius: 28,
            userSelect: "none",
            background: p.surfaceContainerLow,
            boxShadow: "0 2px 10px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)",
            pointerEvents: "auto"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Toolbar.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c1 = Pill;
function Toolbar({ p, mode, onMode, frame, zoom, onZoom, onFit, canUndo, canRedo, onUndo, onRedo, onClear, onAddFrame, onPreview, rightInset, mobile, onPrompt, onSettings, onLangSheet, tidy, onTidy, place, onPlace, note, onSaveProject, onOpenProject, onShare, shareState = "idle", onDraftKeep, onDraftUndo, onDraftSave, quickUndo }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    if (mobile) {
        const S = 42;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                left: 0,
                right: 0,
                top: 10,
                display: "flex",
                justifyContent: "center",
                pointerEvents: "none",
                zIndex: 40,
                padding: "0 8px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                p: p,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                        icon: "undo",
                        p: p,
                        onClick: onUndo,
                        disabled: !canUndo,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("undo", lang),
                        size: S
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                        icon: "redo",
                        p: p,
                        onClick: onRedo,
                        disabled: !canRedo,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("redo", lang),
                        size: S
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                        icon: "translate",
                        p: p,
                        onClick: onLangSheet,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("language", lang),
                        size: S
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                        icon: "palette",
                        p: p,
                        onClick: onSettings,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("settings", lang),
                        size: S
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubLink, {
                        p: p,
                        size: S
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onPrompt,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("copyPrompt", lang),
                        className: "m3-press",
                        style: {
                            height: S,
                            padding: "0 14px 0 10px",
                            borderRadius: S / 2,
                            border: "none",
                            background: p.primary,
                            color: p.onPrimary,
                            fontSize: 14,
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            whiteSpace: "nowrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "auto_awesome",
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("prompt", lang)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Toolbar.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Toolbar.tsx",
            lineNumber: 142,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 96,
                    display: "flex",
                    justifyContent: "center",
                    pointerEvents: "none",
                    zIndex: 40
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "status",
                    "aria-live": "polite",
                    style: {
                        display: "contents"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -8,
                                scale: 0.96
                            },
                            animate: {
                                opacity: 1,
                                x: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: -8,
                                scale: 0.96
                            },
                            transition: {
                                duration: 0.18,
                                ease: [
                                    0.2,
                                    0,
                                    0,
                                    1
                                ]
                            },
                            style: {
                                height: 40,
                                padding: "0 16px",
                                borderRadius: 20,
                                background: p.inverseSurface,
                                color: p.inverseOnSurface,
                                fontSize: 13,
                                fontWeight: 600,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                whiteSpace: "nowrap",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
                                pointerEvents: "none"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: note.icon,
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/Toolbar.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                note.text
                            ]
                        }, "note", true, {
                            fileName: "[project]/components/Toolbar.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Toolbar.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Toolbar.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    right: rightInset + 22,
                    bottom: 22,
                    zIndex: 40,
                    transition: "right 260ms cubic-bezier(0.2, 0, 0, 1)",
                    display: "flex",
                    gap: 10,
                    alignItems: "center"
                },
                children: [
                    tidy && onTidy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TidyButton"], {
                            state: tidy,
                            onClick: onTidy,
                            p: p,
                            pill: true,
                            place: place,
                            onPlace: onPlace
                        }, void 0, false, {
                            fileName: "[project]/components/Toolbar.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                        p: p,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                icon: "remove",
                                p: p,
                                onClick: ()=>onZoom(zoom / 1.2),
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("zoomOut", lang),
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onFit,
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("fit", lang),
                                className: "m3-press",
                                style: {
                                    height: 40,
                                    minWidth: 56,
                                    borderRadius: 20,
                                    border: "none",
                                    background: "transparent",
                                    color: p.onSurface,
                                    fontSize: 13,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontVariantNumeric: "tabular-nums"
                                },
                                children: [
                                    Math.round(zoom * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                icon: "add",
                                p: p,
                                onClick: ()=>onZoom(zoom * 1.2),
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("zoomIn", lang),
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                icon: "fit_screen",
                                p: p,
                                onClick: onFit,
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("fit", lang),
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Toolbar.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            onShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: 22,
                    bottom: 22,
                    zIndex: 40,
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                    p: p,
                    children: shareState === "review" && onDraftUndo && onDraftKeep ? /* the draft waits for a verdict: undo sits quietly, keep is the primary action */ [
                        {
                            icon: "undo",
                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("draftUndo", lang),
                            onClick: onDraftUndo,
                            primary: false
                        },
                        {
                            icon: "check",
                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("draftKeep", lang),
                            onClick: onDraftKeep,
                            primary: true
                        },
                        ...onDraftSave ? [
                            {
                                icon: "download",
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("saveProject", lang),
                                onClick: onDraftSave,
                                primary: false
                            }
                        ] : []
                    ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: b.onClick,
                            title: b.title,
                            "aria-label": b.title,
                            className: "m3-press",
                            style: {
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                border: "none",
                                background: b.primary ? p.primary : p.surfaceContainerHigh,
                                color: b.primary ? p.onPrimary : p.onSurfaceVariant,
                                cursor: "pointer",
                                display: "grid",
                                placeItems: "center"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$M3Node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: b.icon,
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 317,
                                columnNumber: 19
                            }, this)
                        }, b.icon, false, {
                            fileName: "[project]/components/Toolbar.tsx",
                            lineNumber: 299,
                            columnNumber: 17
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShareButton"], {
                                p: p,
                                onClick: onShare,
                                busy: shareState === "busy"
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 322,
                                columnNumber: 17
                            }, this),
                            quickUndo && canUndo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                icon: "undo",
                                p: p,
                                onClick: onUndo,
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("undo", lang),
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 323,
                                columnNumber: 42
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 321,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Toolbar.tsx",
                    lineNumber: 291,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Toolbar.tsx",
                lineNumber: 290,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 14,
                    display: "flex",
                    justifyContent: "center",
                    gap: 10,
                    pointerEvents: "none",
                    zIndex: 40,
                    flexWrap: "nowrap",
                    padding: "0 72px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                        p: p,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                            options: [
                                {
                                    key: "select",
                                    icon: "arrow_selector_tool",
                                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("select", lang)
                                },
                                {
                                    key: "hand",
                                    icon: "pan_tool",
                                    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("hand", lang)
                                }
                            ],
                            value: mode,
                            onChange: onMode,
                            p: p,
                            height: 40,
                            grow: false
                        }, void 0, false, {
                            fileName: "[project]/components/Toolbar.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                        p: p,
                        children: [
                            frame === "phone" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                icon: "add_to_photos",
                                p: p,
                                onClick: onAddFrame,
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("addFrame", lang),
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                icon: "play_arrow",
                                p: p,
                                onClick: onPreview,
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("preview", lang),
                                size: 40,
                                fill: true
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                        p: p,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                icon: "undo",
                                p: p,
                                onClick: onUndo,
                                disabled: !canUndo,
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("undo", lang),
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                icon: "redo",
                                p: p,
                                onClick: onRedo,
                                disabled: !canRedo,
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("redo", lang),
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                icon: "delete_sweep",
                                p: p,
                                onClick: onClear,
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("clearAll", lang),
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this),
                            onSaveProject && onOpenProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Menus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                p: p,
                                icon: "folder_open",
                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("project", lang),
                                size: 40,
                                children: (close)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                                icon: "download",
                                                p: p,
                                                size: 44,
                                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("saveProject", lang),
                                                onClick: ()=>{
                                                    close();
                                                    onSaveProject();
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 410,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBtn"], {
                                                icon: "upload",
                                                p: p,
                                                size: 44,
                                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("openProject", lang),
                                                onClick: ()=>{
                                                    close();
                                                    onOpenProject();
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Toolbar.tsx",
                                                lineNumber: 420,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Toolbar.tsx",
                                        lineNumber: 409,
                                        columnNumber: 17
                                    }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Toolbar.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Toolbar.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Toolbar.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Toolbar.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s(Toolbar, "MoBFwbq9XjicIYfqdARNkH0t0HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c2 = Toolbar;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "GitHubLink");
__turbopack_context__.k.register(_c1, "Pill");
__turbopack_context__.k.register(_c2, "Toolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_00xwy9x._.js.map