(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/ai.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_AI",
    ()=>DEFAULT_AI,
    "PROVIDERS",
    ()=>PROVIDERS,
    "complete",
    ()=>complete,
    "draftDesign",
    ()=>draftDesign,
    "hasKey",
    ()=>hasKey,
    "isSecureUrl",
    ()=>isSecureUrl,
    "loadAiSettings",
    ()=>loadAiSettings,
    "popHistory",
    ()=>popHistory,
    "proposeBehavior",
    ()=>proposeBehavior,
    "proposeDescription",
    ()=>proposeDescription,
    "providerSpec",
    ()=>providerSpec,
    "pushHistory",
    ()=>pushHistory,
    "saveAiSettings",
    ()=>saveAiSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prompt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/project.ts [app-client] (ecmascript)");
;
;
;
const PROVIDERS = [
    {
        key: "openai",
        label: "OpenAI",
        baseUrl: "https://api.openai.com/v1",
        model: "gpt-5.6-luna",
        keysUrl: "https://platform.openai.com/api-keys"
    },
    {
        key: "claude",
        label: "Claude",
        baseUrl: "https://api.anthropic.com",
        model: "claude-sonnet-5",
        keysUrl: "https://console.anthropic.com/settings/keys"
    },
    {
        key: "gemini",
        label: "Gemini",
        baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
        model: "gemini-3.8-flash",
        keysUrl: "https://aistudio.google.com/apikey"
    },
    {
        key: "deepseek",
        label: "DeepSeek",
        baseUrl: "https://api.deepseek.com/v1",
        model: "deepseek-v4-flash",
        keysUrl: "https://platform.deepseek.com/api_keys"
    }
];
const providerSpec = (k)=>PROVIDERS.find((p)=>p.key === k) ?? PROVIDERS[0];
const DEFAULT_AI = {
    provider: PROVIDERS[0].key,
    baseUrl: PROVIDERS[0].baseUrl,
    model: PROVIDERS[0].model,
    key: ""
};
const STORE_KEY = "m3e:ai";
function loadAiSettings() {
    const s = {
        ...DEFAULT_AI
    };
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) {
            const v = JSON.parse(raw);
            if (PROVIDERS.some((p)=>p.key === v.provider)) s.provider = v.provider;
            if (typeof v.baseUrl === "string") s.baseUrl = v.baseUrl;
            if (typeof v.model === "string") s.model = v.model;
            if (typeof v.key === "string") s.key = v.key;
        }
    } catch  {}
    return s;
}
function saveAiSettings(s) {
    try {
        localStorage.setItem(STORE_KEY, JSON.stringify(s));
    } catch  {}
}
const isLocal = (u)=>/^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:|\/|$)/i.test(u.trim());
const hasKey = (s)=>s.key.trim().length > 0 || isLocal(s.baseUrl);
const isSecureUrl = (u)=>/^https:\/\//i.test(u.trim()) || isLocal(u);
const trimSlash = (u)=>u.trim().replace(/\/+$/, "");
async function readError(res) {
    let detail = "";
    try {
        const j = await res.json();
        detail = j?.error?.message ?? j?.message ?? JSON.stringify(j);
    } catch  {
        try {
            detail = await res.text();
        } catch  {}
    }
    return `${res.status} ${res.statusText}${detail ? `: ${detail.slice(0, 300)}` : ""}`;
}
async function complete(s, system, user, signal, maxTokens = 4096) {
    const base = trimSlash(s.baseUrl);
    const model = s.model.trim();
    if (!model) throw new Error("model");
    if (!isSecureUrl(base)) throw new Error("insecure");
    if (s.provider === "claude") {
        const res = await fetch(`${base}/v1/messages`, {
            method: "POST",
            signal,
            headers: {
                "content-type": "application/json",
                "x-api-key": s.key.trim(),
                "anthropic-version": "2023-06-01",
                "anthropic-dangerous-direct-browser-access": "true"
            },
            body: JSON.stringify({
                model,
                max_tokens: Math.min(maxTokens, 8192),
                system,
                messages: [
                    {
                        role: "user",
                        content: user
                    }
                ]
            })
        });
        if (!res.ok) throw new Error(await readError(res));
        const j = await res.json();
        if (j.stop_reason === "refusal") throw new Error("refusal");
        if (j.stop_reason === "max_tokens") throw new Error("long");
        return (j.content ?? []).filter((b)=>b.type === "text").map((b)=>b.text).join("");
    }
    const headers = {
        "content-type": "application/json"
    };
    if (s.key.trim()) headers.authorization = `Bearer ${s.key.trim()}`;
    const res = await fetch(`${base}/chat/completions`, {
        method: "POST",
        signal,
        headers,
        body: JSON.stringify({
            model,
            /* OpenAI's newer models refuse `max_tokens` and default generously, so they get no budget;
         the other compatible endpoints cap around 8k */ ...s.provider === "openai" ? {} : {
                max_tokens: Math.min(maxTokens, 8192)
            },
            messages: [
                {
                    role: "system",
                    content: system
                },
                {
                    role: "user",
                    content: user
                }
            ]
        })
    });
    if (!res.ok) throw new Error(await readError(res));
    const j = await res.json();
    if (j.choices?.[0]?.finish_reason === "length") throw new Error("long");
    const c = j.choices?.[0]?.message?.content;
    if (typeof c === "string") return c;
    if (Array.isArray(c)) return c.map((x)=>x.text ?? "").join("");
    throw new Error("empty");
}
/** the first JSON object in a reply, with any code fence stripped */ function parseJsonObject(text) {
    const cleaned = text.replace(/```(?:json)?/gi, "");
    const a = cleaned.indexOf("{");
    const b = cleaned.lastIndexOf("}");
    if (a < 0 || b <= a) throw new Error("json");
    const v = JSON.parse(cleaned.slice(a, b + 1));
    if (!v || typeof v !== "object" || Array.isArray(v)) throw new Error("json");
    return v;
}
/* ---------- actions ---------- */ const LANG_NAME = {
    ja: "Japanese",
    en: "English",
    zh: "Simplified Chinese",
    ko: "Korean"
};
const hasText = (v)=>!!v && v.trim().length > 0;
const itemsOnFrame = (doc, frame, widths)=>doc.groups.filter((g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(g, doc.frames, widths)?.id === frame.id).flatMap((g)=>g.items);
const describeItem = (it)=>{
    const bits = [
        `id=${it.id}`,
        `kind=${it.kind}`
    ];
    if (hasText(it.label)) bits.push(`label=${JSON.stringify(it.label)}`);
    if (hasText(it.supporting)) bits.push(`supporting=${JSON.stringify(it.supporting)}`);
    if (it.icon) bits.push(`icon=${it.icon}`);
    if (it.tabs?.length) bits.push(`items=${JSON.stringify(it.tabs.map((t)=>t.label || t.icon))}`);
    if (it.action) bits.push(`tap=${it.action.to}`);
    if (it.toggle) bits.push("toggle");
    if (hasText(it.note)) bits.push(`current_note=${JSON.stringify(it.note)}`);
    return bits.join(" ");
};
const context = (doc, widths, frame, lang)=>[
        "The author is sketching a Material 3 Expressive app. Below is the generated description of the whole design, then the screen to work on.",
        "",
        "=== Whole design ===",
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prompt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPrompt"])(doc, widths, undefined, lang),
        "",
        `=== Screen to work on: ${JSON.stringify(frame.name || "(unnamed)")} ===`
    ].join("\n");
const SYSTEM = "You help an app designer finish a sketch. Answer with a single JSON object and nothing else: no prose, no markdown fence.";
/** picks the strings the model returned for exactly the parts asked about */ function pickStrings(v, parts, max) {
    const map = v ?? {};
    const out = {};
    for (const it of parts){
        const s = map[it.id];
        if (typeof s === "string" && s.trim()) out[it.id] = s.trim().slice(0, max);
    }
    return out;
}
async function proposeBehavior(s, doc, widths, frame, lang, itemId, signal) {
    const parts = itemsOnFrame(doc, frame, widths).filter((it)=>it.id === itemId);
    if (!parts.length) return undefined;
    const user = [
        context(doc, widths, frame, lang),
        "",
        "For the part listed below, write what happens when the user interacts with it: what it does, where it leads, what it shows. One sentence, concrete, in the voice of a product spec (no 'should', no hedging). Infer from the labels, icons and the other screens; do not invent screens that do not exist.",
        "A part with a current_note already has the author's own wording: keep its intent and facts, and improve it (clearer, more specific, consistent with the rest of the screen). Do not contradict it.",
        `Write in ${LANG_NAME[lang]}.`,
        "",
        "Part:",
        describeItem(parts[0]),
        "",
        'Answer as {"notes": {"<id>": "<sentence>"}} using exactly the id above.'
    ].join("\n");
    const j = parseJsonObject(await complete(s, SYSTEM, user, signal));
    return pickStrings(j.notes, parts, 300)[itemId];
}
async function proposeDescription(s, doc, widths, frame, lang, signal) {
    const user = [
        context(doc, widths, frame, lang),
        "",
        "Describe this screen's purpose in one or two sentences: who opens it, what they see and what they can do here. Also propose a short screen name (one to three words).",
        hasText(frame.note) ? `The author's current description is ${JSON.stringify(frame.note)}: keep its intent and facts, and improve it.` : "",
        `Write in ${LANG_NAME[lang]}.`,
        "",
        'Answer as {"name": "<name>", "description": "<sentences>"}.'
    ].filter((l)=>l !== "").join("\n");
    const j = parseJsonObject(await complete(s, SYSTEM, user, signal));
    const note = typeof j.description === "string" ? j.description.trim().slice(0, 400) : "";
    if (!note) throw new Error("json");
    const name = typeof j.name === "string" ? j.name.trim().slice(0, 40) : "";
    return {
        name: !hasText(frame.name) && name ? name : undefined,
        note
    };
}
const pushHistory = (history, replaced)=>{
    const cur = (replaced ?? "").trim();
    return cur ? [
        cur
    ] : history?.length ? history : undefined;
};
function popHistory(current, history, valueKey, historyKey) {
    const [prev] = history ?? [];
    const cur = (current ?? "").trim();
    return {
        [valueKey]: prev ?? "",
        [historyKey]: cur ? [
            cur
        ] : undefined
    };
}
async function draftDesign(s, guide, idea, lang, signal) {
    const system = [
        "You draft M3E Canvas designs. Follow the guide below exactly.",
        "Reply with the JSON document only: no share link, no prose, no markdown fence, no explanation.",
        "",
        guide
    ].join("\n");
    const user = [
        `Sketch this app: ${idea.trim()}`,
        `Write every label, title and note in ${LANG_NAME[lang]}.`,
        "Three to five screens. Keep it simple."
    ].join("\n");
    const j = parseJsonObject(await complete(s, system, user, signal, 12000));
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProject"])(j)) throw new Error("json");
    return j;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/color.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A small Material-style scheme generator: one seed color becomes a light
 * color scheme by placing each role at a fixed tone (CIE L*) with the seed's
 * hue and a role-specific chroma, then clipping chroma into the sRGB gamut.
 * It follows the shape of Material's HCT tonal palettes without the full
 * CAM16 model, which is more than enough for a mockup palette.
 */ __turbopack_context__.s([
    "contrastRatio",
    ()=>contrastRatio,
    "hexToRgb",
    ()=>hexToRgb,
    "isHex",
    ()=>isHex,
    "isLightColor",
    ()=>isLightColor,
    "labToLch",
    ()=>labToLch,
    "luminance",
    ()=>luminance,
    "onColorFor",
    ()=>onColorFor,
    "railSelectedLabelColor",
    ()=>railSelectedLabelColor,
    "rgbToHex",
    ()=>rgbToHex,
    "rgbToLab",
    ()=>rgbToLab,
    "schemeFromSeed",
    ()=>schemeFromSeed,
    "tone",
    ()=>tone
]);
const clamp01 = (v)=>Math.min(1, Math.max(0, v));
function hexToRgb(hex) {
    const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
    if (!m) return null;
    const n = parseInt(m[1], 16);
    return [
        n >> 16 & 255,
        n >> 8 & 255,
        n & 255
    ];
}
const rgbToHex = (r, g, b)=>"#" + [
        r,
        g,
        b
    ].map((v)=>Math.round(clamp01(v / 255) * 255).toString(16).padStart(2, "0")).join("").toUpperCase();
const lin = (c)=>{
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};
const gam = (v)=>v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055;
const WHITE = [
    0.95047,
    1,
    1.08883
];
const f = (t)=>t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116;
const fInv = (t)=>t > 0.2069 ? t * t * t : (t - 16 / 116) / 7.787;
function rgbToLab(r, g, b) {
    const R = lin(r);
    const G = lin(g);
    const B = lin(b);
    const x = (R * 0.4124 + G * 0.3576 + B * 0.1805) / WHITE[0];
    const y = (R * 0.2126 + G * 0.7152 + B * 0.0722) / WHITE[1];
    const z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / WHITE[2];
    const fx = f(x);
    const fy = f(y);
    const fz = f(z);
    return {
        L: 116 * fy - 16,
        a: 500 * (fx - fy),
        b: 200 * (fy - fz)
    };
}
/** sRGB in 0..255, or null when the color is outside the gamut */ function labToRgb(lab) {
    const fy = (lab.L + 16) / 116;
    const fx = lab.a / 500 + fy;
    const fz = fy - lab.b / 200;
    const x = fInv(fx) * WHITE[0];
    const y = fInv(fy) * WHITE[1];
    const z = fInv(fz) * WHITE[2];
    const R = x * 3.2406 + y * -1.5372 + z * -0.4986;
    const G = x * -0.9689 + y * 1.8758 + z * 0.0415;
    const B = x * 0.0557 + y * -0.204 + z * 1.057;
    const out = [
        R,
        G,
        B
    ].map(gam);
    if (out.some((v)=>v < -0.002 || v > 1.002)) return null;
    return out.map((v)=>clamp01(v) * 255);
}
function labToLch(lab) {
    const C = Math.hypot(lab.a, lab.b);
    let h = Math.atan2(lab.b, lab.a) * 180 / Math.PI;
    if (h < 0) h += 360;
    return {
        L: lab.L,
        C,
        h
    };
}
function tone(L, C, h) {
    const rad = h * Math.PI / 180;
    let c = C;
    for(let i = 0; i < 40; i++){
        const rgb = labToRgb({
            L,
            a: c * Math.cos(rad),
            b: c * Math.sin(rad)
        });
        if (rgb) return rgbToHex(rgb[0], rgb[1], rgb[2]);
        c *= 0.88;
    }
    const rgb = labToRgb({
        L,
        a: 0,
        b: 0
    }) ?? [
        128,
        128,
        128
    ];
    return rgbToHex(rgb[0], rgb[1], rgb[2]);
}
const LIGHT = {
    primary: 40,
    onPrimary: 100,
    primaryContainer: 90,
    onPrimaryContainer: 10,
    inversePrimary: 80,
    secondary: 40,
    secondaryContainer: 90,
    onSecondaryContainer: 10,
    tertiaryContainer: 90,
    onTertiaryContainer: 10,
    surface: 98,
    surfaceContainerLow: 96,
    surfaceContainer: 94,
    surfaceContainerHigh: 92,
    surfaceContainerHighest: 90,
    onSurface: 10,
    onSurfaceVariant: 30,
    outline: 50,
    outlineVariant: 80,
    inverseSurface: 20,
    inverseOnSurface: 95
};
const DARK = {
    primary: 80,
    onPrimary: 20,
    primaryContainer: 30,
    onPrimaryContainer: 90,
    inversePrimary: 40,
    secondary: 80,
    secondaryContainer: 30,
    onSecondaryContainer: 90,
    tertiaryContainer: 30,
    onTertiaryContainer: 90,
    surface: 6,
    surfaceContainerLow: 10,
    surfaceContainer: 12,
    surfaceContainerHigh: 17,
    surfaceContainerHighest: 22,
    onSurface: 90,
    onSurfaceVariant: 80,
    outline: 60,
    outlineVariant: 30,
    inverseSurface: 90,
    inverseOnSurface: 20
};
function tonesFor(dark, contrast) {
    const t = {
        ...dark ? DARK : LIGHT
    };
    if (contrast === "medium") {
        t.secondary = dark ? 85 : 30;
        if (dark) Object.assign(t, {
            primary: 85,
            onPrimaryContainer: 95,
            onSecondaryContainer: 95,
            onTertiaryContainer: 95,
            onSurfaceVariant: 85,
            outline: 70,
            outlineVariant: 50
        });
        else Object.assign(t, {
            primary: 30,
            onPrimaryContainer: 20,
            onSecondaryContainer: 20,
            onTertiaryContainer: 20,
            onSurfaceVariant: 25,
            outline: 40,
            outlineVariant: 65
        });
    } else if (contrast === "high") {
        t.secondary = dark ? 95 : 20;
        if (dark) Object.assign(t, {
            primary: 95,
            onPrimary: 0,
            primaryContainer: 80,
            onPrimaryContainer: 0,
            secondaryContainer: 80,
            onSecondaryContainer: 0,
            tertiaryContainer: 80,
            onTertiaryContainer: 0,
            onSurface: 100,
            onSurfaceVariant: 95,
            outline: 90,
            outlineVariant: 90
        });
        else Object.assign(t, {
            primary: 20,
            primaryContainer: 30,
            onPrimaryContainer: 100,
            secondaryContainer: 30,
            onSecondaryContainer: 100,
            tertiaryContainer: 30,
            onTertiaryContainer: 100,
            onSurface: 0,
            onSurfaceVariant: 10,
            outline: 20,
            outlineVariant: 20
        });
    }
    return t;
}
const ERROR_LIGHT = {
    error: "#B3261E",
    onError: "#FFFFFF",
    errorContainer: "#F9DEDC",
    onErrorContainer: "#410E0B"
};
const ERROR_DARK = {
    error: "#F2B8B5",
    onError: "#601410",
    errorContainer: "#8C1D18",
    onErrorContainer: "#F9DEDC"
};
function schemeFromSeed(seedHex, label = "Custom", opts = {}) {
    const parsed = hexToRgb(seedHex);
    const rgb = parsed ?? [
        103,
        80,
        164
    ];
    const lch = labToLch(rgbToLab(rgb[0], rgb[1], rgb[2]));
    const h = lch.h;
    const primaryC = opts.keepChroma ? Math.min(lch.C, 60) : Math.max(36, Math.min(lch.C, 60));
    const secondaryC = primaryC / 3;
    const tertiaryH = (h + 60) % 360;
    const tertiaryC = primaryC / 2;
    const neutralC = 3;
    const neutralVarC = 7;
    const P = (L)=>tone(L, primaryC, h);
    const S = (L)=>tone(L, secondaryC, h);
    const T = (L)=>tone(L, tertiaryC, tertiaryH);
    const N = (L)=>tone(L, neutralC, h);
    const NV = (L)=>tone(L, neutralVarC, h);
    const dark = !!opts.dark;
    const k = tonesFor(dark, opts.contrast ?? "standard");
    return {
        key: "custom",
        label,
        seed: parsed ? rgbToHex(rgb[0], rgb[1], rgb[2]) : seedHex.toUpperCase(),
        primary: P(k.primary),
        onPrimary: P(k.onPrimary),
        primaryContainer: P(k.primaryContainer),
        onPrimaryContainer: P(k.onPrimaryContainer),
        inversePrimary: P(k.inversePrimary),
        secondary: S(k.secondary),
        secondaryContainer: S(k.secondaryContainer),
        onSecondaryContainer: S(k.onSecondaryContainer),
        tertiaryContainer: T(k.tertiaryContainer),
        onTertiaryContainer: T(k.onTertiaryContainer),
        surface: N(k.surface),
        surfaceContainerLow: N(k.surfaceContainerLow),
        surfaceContainer: N(k.surfaceContainer),
        surfaceContainerHigh: N(k.surfaceContainerHigh),
        surfaceContainerHighest: N(k.surfaceContainerHighest),
        onSurface: N(k.onSurface),
        onSurfaceVariant: NV(k.onSurfaceVariant),
        outline: NV(k.outline),
        outlineVariant: NV(k.outlineVariant),
        inverseSurface: N(k.inverseSurface),
        inverseOnSurface: N(k.inverseOnSurface),
        ...dark ? ERROR_DARK : ERROR_LIGHT
    };
}
function onColorFor(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return "#000000";
    const lch = labToLch(rgbToLab(rgb[0], rgb[1], rgb[2]));
    return lch.L > 60 ? tone(10, Math.min(lch.C, 30), lch.h) : tone(100, 0, lch.h);
}
const isHex = (v)=>/^#[0-9a-f]{6}$/i.test(v.trim());
function luminance(hex) {
    const [r, g, b] = (hexToRgb(hex) ?? [
        0,
        0,
        0
    ]).map(lin);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const isLightColor = (hex)=>luminance(hex) > 0.35;
function contrastRatio(a, b) {
    const x = luminance(a);
    const y = luminance(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
function railSelectedLabelColor(p, expanded) {
    const background = expanded ? p.secondaryContainer : p.surfaceContainer;
    return contrastRatio(p.secondary, background) >= 4.5 ? p.secondary : expanded ? p.onSecondaryContainer : p.onSurface;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/project.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProject",
    ()=>isProject,
    "projectFileName",
    ()=>projectFileName,
    "readProject",
    ()=>readProject,
    "saveProject",
    ()=>saveProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
;
/* A project file is the Doc as JSON, nothing more. Reading one back only checks
 * the shape the editor relies on; the same migrations that run on a saved
 * document then bring an older file up to date. */ const isRecord = (value)=>typeof value === "object" && value !== null;
const KINDS = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_ORDER"]);
const validTabs = (tabs)=>tabs === undefined || Array.isArray(tabs) && tabs.every((tab)=>isRecord(tab) && typeof tab.label === "string" && (typeof tab.icon === "string" || tab.icon === null || tab.icon === undefined) && (tab.src === undefined || typeof tab.src === "string"));
const validCorners = (c)=>c === undefined || isRecord(c) && [
        "tl",
        "tr",
        "bl",
        "br"
    ].every((k)=>Number.isFinite(c[k]));
/** the layouts a carousel and the two pickers may be saved with */ const LAYOUTS = new Set([
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL_LAYOUTS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATE_LAYOUTS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIME_LAYOUTS"]
].map((l)=>l.key));
const optionalNumber = (v)=>v === undefined || Number.isFinite(v);
const validItem = (item)=>isRecord(item) && validCorners(item.corners) && (item.railExpanded === undefined || typeof item.railExpanded === "boolean") && (item.railModal === undefined || typeof item.railModal === "boolean") && (item.trackThickness === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTrackThickness"])(item.trackThickness)) && (item.imagePos === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCardImagePos"])(item.imagePos)) && (item.imageSize === undefined || Number.isFinite(item.imageSize) && item.imageSize > 0) && (item.contentAlign === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCardAlign"])(item.contentAlign)) && (item.textAlign === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCardAlign"])(item.textAlign)) && (item.textColor === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextToken"])(item.textColor)) && typeof item.id === "string" && typeof item.kind === "string" && KINDS.has(item.kind) && typeof item.label === "string" && (typeof item.icon === "string" || item.icon === null) && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VARIANTS"].some((variant)=>variant.key === item.variant) && (item.supporting === undefined || typeof item.supporting === "string") && (item.selected === undefined || Number.isFinite(item.selected)) && (item.note === undefined || typeof item.note === "string") && (item.layout === undefined || typeof item.layout === "string" && LAYOUTS.has(item.layout)) && optionalNumber(item.count) && optionalNumber(item.size) && optionalNumber(item.size2) && optionalNumber(item.radiusTop) && optionalNumber(item.radiusBottom) && optionalNumber(item.value) && validTabs(item.tabs);
const validGroup = (group)=>isRecord(group) && typeof group.id === "string" && Number.isFinite(group.x) && Number.isFinite(group.y) && (group.axis === "x" || group.axis === "y") && (group.locked === undefined || typeof group.locked === "boolean") && Array.isArray(group.items) && group.items.length > 0 && group.items.every(validItem);
const validFrame = (frame)=>isRecord(frame) && typeof frame.id === "string" && typeof frame.name === "string" && Number.isFinite(frame.x) && Number.isFinite(frame.y) && (frame.w === undefined || Number.isFinite(frame.w) && frame.w > 0) && (frame.h === undefined || Number.isFinite(frame.h) && frame.h > 0) && (frame.note === undefined || typeof frame.note === "string") && (frame.place === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlace"])(frame.place)) && (frame.length === undefined || Number.isFinite(frame.length) && frame.length > 0);
const isProject = (value)=>isRecord(value) && Array.isArray(value.groups) && Array.isArray(value.frames) && value.groups.every(validGroup) && value.frames.every(validFrame) && (value.platform === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlatform"])(value.platform)) && (value.promptOptions === undefined || Array.isArray(value.promptOptions) && value.promptOptions.every((o)=>typeof o === "string"));
const projectFileName = (doc)=>{
    const name = doc.title.trim().replace(/[\\/:*?"<>|]+/g, " ").replace(/\s+/g, " ").trim();
    return name ? `m3e-canvas ${name}.json` : "m3e-canvas.json";
};
function saveProject(doc) {
    const url = URL.createObjectURL(new Blob([
        JSON.stringify(doc, null, 2)
    ], {
        type: "application/json"
    }));
    const a = document.createElement("a");
    a.href = url;
    a.download = projectFileName(doc);
    a.click();
    setTimeout(()=>URL.revokeObjectURL(url), 0);
}
async function readProject(file) {
    try {
        const next = JSON.parse(await file.text());
        return isProject(next) ? next : null;
    } catch  {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/prompt.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PROMPT_OPTIONS",
    ()=>DEFAULT_PROMPT_OPTIONS,
    "PROMPT_OPTIONS",
    ()=>PROMPT_OPTIONS,
    "PROMPT_OPTION_TEXT",
    ()=>PROMPT_OPTION_TEXT,
    "buildPrompt",
    ()=>buildPrompt,
    "effectivePrompt",
    ()=>effectivePrompt,
    "isPromptOption",
    ()=>isPromptOption,
    "promptMarks",
    ()=>promptMarks,
    "promptOptionsOf",
    ()=>promptOptionsOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rail.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
;
;
;
const VARIANT_TEXT = {
    ja: {
        filled: "塗りつぶし",
        tonal: "トーナル",
        elevated: "エレベーテッド",
        outlined: "アウトライン",
        text: "テキスト"
    },
    en: {
        filled: "filled",
        tonal: "tonal",
        elevated: "elevated",
        outlined: "outlined",
        text: "text"
    },
    zh: {
        filled: "填充",
        tonal: "色调",
        elevated: "浮起",
        outlined: "描边",
        text: "文字"
    },
    ko: {
        filled: "채움",
        tonal: "토널",
        elevated: "돌출",
        outlined: "윤곽선",
        text: "텍스트"
    }
};
const hasText = (s)=>!!s && s.trim().length > 0;
/** a card's image area in words: what fills it (a picture or the placeholder with its icon),
 *  where it sits (top, a full-height side column, or the whole background) and its stated size */ function cardImage(it, lang) {
    if (it.noImage) return "";
    const url = imageSrc(it);
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImagePosOf"])(it);
    const size = pos !== "background" && it.imageSize !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImageSizeOf"])(it) : undefined;
    if (lang === "ja") {
        const what = url ? ` ${url} の画像` : it.src ? "指定の画像" : `${it.icon ? `${it.icon} アイコンの` : ""}プレースホルダー画像`;
        const sized = size ? `（${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCardImageBand"])(pos) ? "高さ" : "幅"} ${size}dp）` : "";
        if (pos === "bottom") return `下部に${what}${sized}、`;
        if (pos === "leading") return `先頭側（全高）に${what}${sized}、`;
        if (pos === "trailing") return `末尾側（全高）に${what}${sized}、`;
        if (pos === "background") return `背景全面に${what}（テキストの背後にスクリム）、`;
        return `上部に${what}${sized}、`;
    }
    if (lang === "zh") {
        const what = url ? ` ${url} 的图片` : it.src ? "指定的图片" : `${it.icon ? `${it.icon} 图标的` : ""}占位图片`;
        const sized = size ? `（${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCardImageBand"])(pos) ? "高" : "宽"} ${size}dp）` : "";
        if (pos === "bottom") return `底部是${what}${sized}，`;
        if (pos === "leading") return `左侧（全高）是${what}${sized}，`;
        if (pos === "trailing") return `右侧（全高）是${what}${sized}，`;
        if (pos === "background") return `整张卡片的背景是${what}（文字后方加渐变遮罩），`;
        return `顶部是${what}${sized}，`;
    }
    if (lang === "ko") {
        const what = url ? `${url}의 이미지` : it.src ? "지정한 이미지" : `${it.icon ? `${it.icon} 아이콘의 ` : ""}자리표시자 이미지`;
        const sized = size ? `(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCardImageBand"])(pos) ? "높이" : "너비"} ${size}dp)` : "";
        if (pos === "bottom") return `아래쪽에 ${what}${sized}, `;
        if (pos === "leading") return `앞쪽(전체 높이)에 ${what}${sized}, `;
        if (pos === "trailing") return `뒤쪽(전체 높이)에 ${what}${sized}, `;
        if (pos === "background") return `배경 전체에 ${what}(텍스트 뒤에 스크림), `;
        return `위쪽에 ${what}${sized}, `;
    }
    const what = url ? `an image from ${url}` : it.src ? "the provided image" : `a placeholder image${it.icon ? ` (${it.icon} icon)` : ""}`;
    const sized = size ? ` (${size}dp ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCardImageBand"])(pos) ? "tall" : "wide"})` : "";
    if (pos === "bottom") return `with ${what}${sized} along the bottom, `;
    if (pos === "leading") return `with ${what}${sized} filling the leading side, `;
    if (pos === "trailing") return `with ${what}${sized} filling the trailing side, `;
    if (pos === "background") return `with ${what} as a full-bleed background behind a scrim under the text, `;
    return `with ${what}${sized} on top, `;
}
/** a card's text choices that differ from the automatic ones: where the block sits and its color role */ function cardText(it, lang) {
    const parts = [];
    const align = it.contentAlign;
    const auto = !it.noImage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardImagePosOf"])(it) === "background" ? "end" : "start";
    if (align && align !== auto) {
        const pos = lang === "ja" ? {
            start: "上",
            center: "中央",
            end: "下"
        } : lang === "zh" ? {
            start: "顶部",
            center: "垂直居中",
            end: "底部"
        } : lang === "ko" ? {
            start: "위",
            center: "가운데",
            end: "아래"
        } : {
            start: "top",
            center: "middle",
            end: "bottom"
        };
        parts.push(lang === "ja" ? `文字は${pos[align]}寄せ` : lang === "zh" ? `文字${pos[align]}对齐` : lang === "ko" ? `텍스트 ${pos[align]} 정렬` : `text aligned to the ${pos[align]}`);
    }
    const across = it.textAlign;
    if (across && across !== "start") {
        const word = lang === "ja" ? {
            center: "文字は中央揃え",
            end: "文字は右揃え"
        } : lang === "zh" ? {
            center: "文字居中",
            end: "文字右对齐"
        } : lang === "ko" ? {
            center: "텍스트 가운데 정렬",
            end: "텍스트 오른쪽 정렬"
        } : {
            center: "text centred",
            end: "text aligned to the end"
        };
        parts.push(word[across]);
    }
    if (it.textColor) parts.push(lang === "ja" ? `文字色 ${it.textColor}` : lang === "zh" ? `文字颜色 ${it.textColor}` : lang === "ko" ? `텍스트 색상 ${it.textColor}` : `text in ${it.textColor}`);
    if (!parts.length) return "";
    return lang === "en" ? ` (${parts.join(", ")})` : lang === "ko" ? ` (${parts.join(", ")})` : `（${parts.join("、")}）`;
}
/** a card's background and corners when the author changed them, as one parenthetical */ function cardLook(it, lang) {
    const parts = [];
    if (it.fill) parts.push(lang === "ja" ? `背景 ${it.fill}` : lang === "zh" ? `背景 ${it.fill}` : lang === "ko" ? `배경 ${it.fill}` : `on ${it.fill}`);
    if (it.corners) parts.push(boxCorners(it, lang));
    else if (it.radiusTop !== undefined) parts.push(lang === "ja" ? `角丸 ${it.radiusTop}dp` : lang === "zh" ? `圆角 ${it.radiusTop}dp` : lang === "ko" ? `모서리 ${it.radiusTop}dp` : `${it.radiusTop}dp corners`);
    if (!parts.length) return "";
    return lang === "en" ? ` ${parts.join(", ")}` : lang === "ko" ? `(${parts.join(", ")})` : `（${parts.join("、")}）`;
}
/** an image's web address, when it was given as one rather than picked from a file */ const imageSrc = (it)=>it.src && /^https?:\/\//.test(it.src) ? it.src : null;
/** the placeholder's box as "w×h": the author's height, else the kind's aspect ratio */ const viewSize = (it, ratio)=>{
    const w = it.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTENT_W"];
    return `${w}×${it.size2 ?? Math.round(w * ratio)}dp`;
};
/** a picture's box: square until it was given a height of its own */ const imageDims = (it)=>{
    const w = it.size ?? 200;
    return `${w}×${it.size2 ?? w}dp`;
};
/** which destination of a bar, rail or tab row is selected, in words */ function selectedText(it, lang) {
    const tabs = it.tabs ?? [];
    const i = Math.min(it.selected ?? 0, Math.max(0, tabs.length - 1));
    const label = tabs[i]?.label?.trim();
    if (lang === "ja") return i === 0 || !label ? "最初の項目が選択状態" : `「${label}」が選択状態`;
    if (lang === "zh") return i === 0 || !label ? "第一项为选中状态" : `“${label}”为选中状态`;
    if (lang === "ko") return i === 0 || !label ? "첫 항목 선택됨" : `"${label}" 선택됨`;
    return i === 0 || !label ? "the first one is selected" : `"${label}" is selected`;
}
const qj = (s)=>`「${s.trim()}」`;
const qe = (s)=>`"${s.trim()}"`;
const qz = (s)=>`“${s.trim()}”`;
const quote = (lang)=>lang === "ja" ? qj : lang === "zh" ? qz : qe;
const trimEnd = (s)=>s.trim().replace(/[。.\s]+$/, "");
/** Rails without either expressive setting preserve their original export. */ function railStateText(it, lang) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWideRail"])(it)) return "";
    const component = it.railModal ? "ModalWideNavigationRail" : "WideNavigationRail";
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railWidth"])(it);
    if (lang === "ja") return `。${component}、${it.railExpanded ? "展開状態" : "折りたたみ状態"}、幅 ${width}dp。${it.railModal ? "モーダル型：展開時はスクリム付きで本文に重ね、レイアウトの占有幅は 96dp のまま" : "非モーダル型：現在の幅だけレイアウトを占有"}。上部のメニューボタンで展開・折りたたみを切り替える`;
    if (lang === "zh") return `。${component}，${it.railExpanded ? "展开状态" : "折叠状态"}，宽 ${width}dp。${it.railModal ? "模态覆盖：展开时带遮罩覆盖内容，布局占位保持 96dp" : "非模态布局：按当前宽度占据布局空间"}。顶部菜单按钮切换展开与折叠`;
    if (lang === "ko") return `. ${component}, ${it.railExpanded ? "펼친 상태" : "접힌 상태"}, 너비 ${width}dp. ${it.railModal ? "모달 오버레이: 펼치면 스크림과 함께 콘텐츠를 덮고 레이아웃 점유 너비는 96dp로 유지" : "비모달 레이아웃: 현재 너비만큼 레이아웃 공간을 차지"}. 상단 메뉴 버튼으로 펼치기와 접기를 전환한다`;
    return `; ${component}, ${it.railExpanded ? "expanded" : "collapsed"}, ${width}dp wide; ${it.railModal ? "modal overlay: when expanded, cover the content with a scrim while keeping the layout footprint at 96dp" : "non-modal layout: reserve the current width in the layout"}; toggle expansion with the top menu button`;
}
/* ================= single parts ================= */ /** how big a button is: the width the author set, and the height whenever it leaves M3's medium
 *  one, named by the M3 size it lands on so the code can reach for that size directly */ function buttonSize(it, lang) {
    const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonHeightOf"])(it);
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonSizeKeyOf"])(h);
    const named = key ? ` / M3 ${key.toUpperCase()}` : "";
    const parts = [];
    if (it.size) parts.push(lang === "ja" ? `幅 ${it.size}dp` : lang === "zh" ? `宽 ${it.size}dp` : lang === "ko" ? `너비 ${it.size}dp` : `${it.size}dp wide`);
    if (h !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"]) parts.push((lang === "ja" ? `高さ ${h}dp` : lang === "zh" ? `高 ${h}dp` : lang === "ko" ? `높이 ${h}dp` : `${h}dp tall`) + named);
    if (!parts.length) return "";
    const body = parts.join(lang === "ja" || lang === "zh" ? "、" : ", ");
    return lang === "en" || lang === "ko" ? ` (${body})` : `（${body}）`;
}
/** how big an icon button is: its one measure, named by the M3 size it lands on. The medium
 *  56dp one is what the notes already describe, so it goes unsaid. */ function iconButtonSize(it, lang) {
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonHeightOf"])(it);
    if (d === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"]) return "";
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonSizeKeyOf"])(d);
    const named = key ? ` / M3 ${key.toUpperCase()}` : "";
    if (lang === "ja") return `（${d}dp${named}）`;
    if (lang === "zh") return `（${d}dp${named}）`;
    if (lang === "ko") return `(${d}dp${named})`;
    return ` (${d}dp${named})`;
}
/** a top app bar taller than the small one names the M3 size it is: medium or large, with the title on its own line */ function topBarSizeText(it, lang) {
    const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topBarHeightOf"])(it);
    const size = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOP_BAR_SIZES"]
    ].reverse().find((b)=>h >= b.h) ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOP_BAR_SIZES"][0];
    if (size.key === "s") return "";
    const name = size.key === "m" ? lang === "ja" ? "ミディアム" : lang === "zh" ? "中号" : lang === "ko" ? "중간" : "medium" : lang === "ja" ? "ラージ" : lang === "zh" ? "大号" : lang === "ko" ? "대형" : "large";
    if (lang === "ja") return `（${name}サイズ、高さ ${h}dp、タイトルはアイコン列の下の行）`;
    if (lang === "zh") return `（${name}，高 ${h}dp，标题位于图标行下方）`;
    if (lang === "ko") return `(${name} 크기, 높이 ${h}dp, 제목은 아이콘 줄 아래)`;
    return ` (${name} size, ${h}dp tall, title on its own line under the icons)`;
}
/** what a carousel's cards say, in order, for the cards that say anything */ function carouselCardsText(it, lang) {
    const q = quote(lang);
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselCardsOf"])(it).map((c, i)=>({
            i,
            label: c.label.trim()
        })).filter((c)=>c.label);
    if (!words.length) return "";
    const list = words.map((c)=>`${c.i + 1}: ${q(c.label)}`).join(lang === "ja" || lang === "zh" ? "、" : ", ");
    if (lang === "ja") return `、カードの見出し ${list}`;
    if (lang === "zh") return `，卡片标题 ${list}`;
    if (lang === "ko") return `, 카드 제목 ${list}`;
    return `, card titles ${list}`;
}
/** a run of chips drawn at one height other than M3's 32dp says so; a run that does not share
 *  one is left to its parts */ function chipRunHeightText(items, lang) {
    const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chipHeightOf"])(items[0]);
    return items.every((it)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chipHeightOf"])(it) === h) ? chipHeightText(items[0], lang) : "";
}
/** the words each language uses for a carousel's layout and a picker's shape */ const CAROUSEL_TEXT = {
    ja: {
        multiBrowse: "マルチブラウズ",
        uncontained: "アンコンテインド",
        hero: "ヒーロー",
        fullScreen: "全画面"
    },
    en: {
        multiBrowse: "multi-browse",
        uncontained: "uncontained",
        hero: "hero",
        fullScreen: "full-screen"
    },
    zh: {
        multiBrowse: "多浏览",
        uncontained: "等宽滚动",
        hero: "主图",
        fullScreen: "全屏"
    },
    ko: {
        multiBrowse: "멀티 브라우즈",
        uncontained: "언컨테인드",
        hero: "히어로",
        fullScreen: "전체 화면"
    }
};
const DATE_TEXT = {
    ja: {
        modal: "モーダルのダイアログ",
        docked: "入力欄に付くドッキング",
        input: "入力欄のみ"
    },
    en: {
        modal: "modal dialog",
        docked: "docked under a field",
        input: "text input only"
    },
    zh: {
        modal: "模态对话框",
        docked: "停靠在输入框下",
        input: "仅输入框"
    },
    ko: {
        modal: "모달 대화상자",
        docked: "입력란에 붙는 도킹",
        input: "입력란만"
    }
};
const TIME_TEXT = {
    ja: {
        dial: "時計盤",
        input: "入力欄"
    },
    en: {
        dial: "dial",
        input: "text input"
    },
    zh: {
        dial: "表盘",
        input: "输入框"
    },
    ko: {
        dial: "시계판",
        input: "입력란"
    }
};
/** a chip drawn at anything but the 32dp M3 asks for says so */ function chipHeightText(it, lang) {
    const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chipHeightOf"])(it);
    if (h === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHIP_H_MIN"]) return "";
    if (lang === "ja") return `（高さ ${h}dp）`;
    if (lang === "zh") return `（高 ${h}dp）`;
    if (lang === "ko") return `(높이 ${h}dp)`;
    return ` (${h}dp tall)`;
}
/** the menu a FAB opens, if it has one: the entries it offers, in the order they rise */ function fabMenuText(it, lang) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasMenu"])(it)) return "";
    const q = quote(lang);
    const items = (it.tabs ?? []).map((t)=>`${q(t.label || "-")}(${t.icon || "-"})`).join(lang === "en" ? ", " : "、");
    const n = it.tabs?.length ?? 0;
    if (lang === "ja") return `。タップすると ${n} 項目のメニュー（${items}）がボタンの上にせり上がり、アイコンは close に変わる（M3 Expressive の FloatingActionButtonMenu）`;
    if (lang === "zh") return `。点击后在按钮上方展开 ${n} 个菜单项（${items}），图标变为 close（M3 Expressive 的 FloatingActionButtonMenu）`;
    if (lang === "ko") return `. 탭하면 버튼 위로 ${n}개 항목 메뉴(${items})가 올라오고 아이콘은 close로 바뀐다(M3 Expressive FloatingActionButtonMenu)`;
    return `; tapping it raises a menu of ${n} items (${items}) above the button and turns its icon into close (the M3 Expressive FloatingActionButtonMenu)`;
}
/** what a split button's arrow opens, and which way it goes */ function splitMenuText(it, lang) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitOpens"])(it)) return "";
    const q = quote(lang);
    const items = (it.tabs ?? []).map((t)=>`${q(t.label || "-")}(${t.icon || "-"})`).join(lang === "en" ? ", " : "、");
    const n = it.tabs?.length ?? 0;
    if (lang === "ja") return `。矢印をタップすると ${n} 項目のメニュー（${items}）が開き、ボタンの下に収まらないときは上に開く`;
    if (lang === "zh") return `。点击箭头展开 ${n} 个菜单项（${items}）；按钮下方放不下时改为向上展开`;
    if (lang === "ko") return `. 화살표를 탭하면 ${n}개 항목 메뉴(${items})가 열리고, 버튼 아래에 공간이 없으면 위로 열린다`;
    return `; tapping the arrow opens a menu of ${n} items (${items}) below the button, and above it where there is no room below`;
}
function itemJa(it) {
    const q = qj;
    const v = VARIANT_TEXT.ja[it.variant];
    const noun = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"].ja[it.kind]?.noun ?? it.kind;
    switch(it.kind){
        case "button":
            return `${hasText(it.label) ? q(it.label) : "ラベルなし"}の${v}ボタン${it.icon ? `（${it.icon} アイコン付き）` : ""}${buttonSize(it, "ja")}`;
        case "carousel":
            return `${CAROUSEL_TEXT.ja[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselLayoutOf"])(it)]}レイアウトのカルーセル（カード ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselCountOf"])(it)} 枚、高さ ${it.size2 ?? 180}dp、各カードは角丸 16dp、横スクロール${carouselCardsText(it, "ja")}）`;
        case "datePicker":
            return `${DATE_TEXT.ja[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateLayoutOf"])(it)]}の日付ピッカー（今日の日付を選択中${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateLayoutOf"])(it) === "input" ? "" : "、月のグリッドとキャンセル／OK"}）`;
        case "timePicker":
            return `${TIME_TEXT.ja[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLayoutOf"])(it)]}の時刻ピッカー（現在時刻を選択中、AM/PM 切り替えとキャンセル／OK）`;
        case "iconButton":
            return `${it.icon ?? "空"} アイコンの${v}アイコンボタン${iconButtonSize(it, "ja")}`;
        case "fab":
            return `${it.icon ?? "空"} アイコンの${v} FAB${it.size && it.size >= 96 ? "（大サイズ）" : it.size && it.size <= 40 ? "（小サイズ）" : ""}${fabMenuText(it, "ja")}`;
        case "extendedFab":
            return `${q(it.label)}${it.icon ? `と ${it.icon} アイコン` : ""}の拡張 FAB（${v}${it.size2 && it.size2 !== 56 ? `、高さ ${it.size2}dp` : ""}）${fabMenuText(it, "ja")}`;
        case "chip":
            return `${q(it.label)}のチップ${it.checked ? "（選択状態）" : ""}${it.icon && !it.checked ? `（${it.icon} アイコン付き）` : ""}${chipHeightText(it, "ja")}`;
        case "topAppBar":
            return `タイトル${q(it.label)}のトップアプリバー${topBarSizeText(it, "ja")}${it.icon ? `。左に ${it.icon}` : ""}${it.icon2 ? `、右に ${it.icon2}` : ""}${it.icon || it.icon2 ? " のアイコンボタン" : ""}`;
        case "bottomNav":
            {
                const tabs = (it.tabs ?? []).map((t)=>`${q(t.label || "ラベルなし")}(${t.icon || "アイコンなし"})`);
                return `${tabs.length}項目のナビゲーションバー（${tabs.join("、")}。${selectedText(it, "ja")}）`;
            }
        case "navRail":
            {
                const tabs = (it.tabs ?? []).map((t)=>`${q(t.label || "ラベルなし")}(${t.icon || "アイコンなし"})`);
                return `${tabs.length}項目のナビゲーションレール（${tabs.join("、")}。${selectedText(it, "ja")}）${railStateText(it, "ja")}`;
            }
        case "searchBar":
            return `プレースホルダー${q(it.label)}の${it.variant === "outlined" ? "枠線スタイルの" : ""}検索バー${it.icon2 ? `（右端に ${it.icon2} アイコン）` : ""}`;
        case "card":
            {
                const style = it.variant === "elevated" ? "エレベーテッド" : it.variant === "outlined" ? "アウトライン" : "塗りつぶし";
                return `${style}カード${it.size2 ? `（高さ ${it.size2}dp）` : ""}${cardLook(it, "ja")}。${cardImage(it, "ja")}見出し${q(it.label)}${hasText(it.supporting) ? `、本文${q(it.supporting)}` : ""}${cardText(it, "ja")}`;
            }
        case "listItem":
            return `${q(it.label)}${hasText(it.supporting) ? `（サブテキスト${q(it.supporting)}）` : ""}${it.icon ? `、先頭に ${it.icon} アイコン${it.iconFill === "none" ? "（背景なし）" : it.iconFill ? `（背景 ${it.iconFill}）` : ""}` : ""}${it.switch ? `、末尾にスイッチ（初期状態${it.checked ? "オン" : "オフ"}）` : it.icon2 ? `、末尾に ${it.icon2}` : ""}${it.fill && it.fill !== "surfaceContainerLow" ? `、背景は ${it.fill}` : ""}`;
        case "dialog":
            return `見出し${q(it.label)}${hasText(it.supporting) ? `、本文${q(it.supporting)}` : ""}${it.icon ? `、${it.icon} アイコン付き` : ""}のダイアログ（キャンセル／OK のテキストボタン）`;
        case "snackbar":
            return `${q(it.label)}のスナックバー${hasText(it.supporting) ? `（${q(it.supporting)}のアクション付き）` : ""}`;
        case "textField":
            return `ラベル${q(it.label)}の${it.variant === "filled" ? "塗りつぶし" : "アウトライン"}テキスト入力${it.icon ? `（先頭に ${it.icon} アイコン）` : ""}${hasText(it.supporting) ? `。補助テキストは${q(it.supporting)}` : ""}`;
        case "select":
            {
                const opts = (it.tabs ?? []).map((t)=>q(t.label || "ラベルなし"));
                const initial = it.selected !== undefined && it.tabs?.[it.selected] ? `、初期値は${q(it.tabs[it.selected].label)}` : "、初期値は未選択";
                return `ラベル${q(it.label)}の${it.variant === "filled" ? "塗りつぶし" : "アウトライン"}ドロップダウン（タップでメニューを開いて 1 つ選ぶ。選択肢は${opts.join("、")}${initial}）${it.icon ? `（先頭に ${it.icon} アイコン）` : ""}${hasText(it.supporting) ? `。補助テキストは${q(it.supporting)}` : ""}`;
            }
        case "switch":
            return `${q(it.label)}のスイッチ（初期状態は${it.checked ? "オン" : "オフ"}）`;
        case "checkbox":
            return `${q(it.label)}のチェックボックス（初期状態は${it.checked ? "チェック済み" : "未チェック"}）`;
        case "slider":
            return `スライダー（初期値 ${it.value ?? 40}%）`;
        case "text":
            return `${it.bold ? "太字の" : ""}テキスト${q(it.label)}（${it.size ?? 28}sp）`;
        case "image":
            return `${imageDims(it)} の画像${imageSrc(it) ? `（${imageSrc(it)} の画像を表示）` : it.src ? "（指定の画像を表示）" : "プレースホルダー"}`;
        case "camera":
            return `${viewSize(it, 4 / 3)} のカメラプレビュー`;
        case "map":
            return `${viewSize(it, 3 / 4)} の地図`;
        case "divider":
            return "区切り線";
        case "box":
            return `${it.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"]}×${it.size2 ?? 220}dp のボックス（背景 ${it.fill ?? "surfaceContainerLow"}、${boxCorners(it, "ja")}）`;
        case "bottomSheet":
            return `${it.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"]}×${it.size2 ?? 320}dp のボトムシート（上部にドラッグハンドル。背景 ${it.fill ?? "surfaceContainerLow"}、上の角丸 ${it.radiusTop ?? 28}dp）`;
        case "loadingIndicator":
            return `M3 Expressive の形が変化するローディングインジケータ${it.contained ? "（コンテナ付き）" : ""}`;
        case "linearProgress":
            return `${it.wavy ? "波形の" : ""}リニアプログレス（${it.value === undefined ? "不確定" : `${it.value}%`}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it) !== 4 ? `、トラックの太さ ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it)}dp` : ""}）`;
        case "circularProgress":
            return `${it.wavy ? "波形の" : ""}サーキュラープログレス（${it.value === undefined ? "不確定" : `${it.value}%`}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it) !== 4 ? `、トラックの太さ ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it)}dp` : ""}）`;
        case "splitButton":
            return `${q(it.label)}${it.icon ? `（${it.icon} アイコン付き）` : ""}の${v}スプリットボタン（右側にメニューを開く矢印のセグメント）${buttonSize(it, "ja")}${splitMenuText(it, "ja")}`;
        case "fabMenu":
            {
                const items = (it.tabs ?? []).map((t)=>`${q(t.label || "ラベルなし")}(${t.icon || "アイコンなし"})`);
                return `${v} FAB から開く FAB メニュー（開いた状態で描き、上に ${items.join("、")} の ${items.length} 項目が縦に並ぶ）`;
            }
        case "toolbar":
            {
                const icons = (it.tabs ?? []).map((t)=>t.icon || "空").join("・");
                return `${it.variant === "filled" ? "ビブラント（primaryContainer）" : "スタンダード"}のフローティングツールバー（${icons} のアイコンボタン）`;
            }
        case "tabs":
            {
                const labels = (it.tabs ?? []).map((t)=>q(t.label || "ラベルなし"));
                return `${labels.join("、")}の ${labels.length} つのタブ（${selectedText(it, "ja")}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollableTabs"])(it) ? "、横にスクロールするタブ" : ""}）`;
            }
        case "radio":
            return `${q(it.label)}のラジオボタン（初期状態は${it.checked ? "選択" : "未選択"}）`;
        default:
            return noun;
    }
}
function itemEn(it) {
    const q = qe;
    const v = VARIANT_TEXT.en[it.variant];
    const noun = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"].en[it.kind]?.noun ?? it.kind;
    switch(it.kind){
        case "button":
            return `a ${v} button ${hasText(it.label) ? q(it.label) : "with no label"}${it.icon ? ` with a ${it.icon} icon` : ""}${buttonSize(it, "en")}`;
        case "carousel":
            return `a ${CAROUSEL_TEXT.en[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselLayoutOf"])(it)]} carousel of ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselCountOf"])(it)} cards (${it.size2 ?? 180}dp tall, each card with 16dp corners, scrolling sideways${carouselCardsText(it, "en")})`;
        case "datePicker":
            return `a date picker as a ${DATE_TEXT.en[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateLayoutOf"])(it)]} (today's date selected${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateLayoutOf"])(it) === "input" ? "" : ", with the month grid and Cancel / OK"})`;
        case "timePicker":
            return `a time picker on a ${TIME_TEXT.en[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLayoutOf"])(it)]} set to the current time, with the AM/PM toggle and Cancel / OK`;
        case "iconButton":
            return `a ${v} icon button with the ${it.icon ?? "empty"} icon${iconButtonSize(it, "en")}`;
        case "fab":
            return `a ${it.size && it.size >= 96 ? "large " : it.size && it.size <= 40 ? "small " : ""}${v} FAB with the ${it.icon ?? "empty"} icon${fabMenuText(it, "en")}`;
        case "extendedFab":
            return `a ${v} extended FAB ${q(it.label)}${it.icon ? ` with a ${it.icon} icon` : ""}${it.size2 && it.size2 !== 56 ? ` (${it.size2}dp tall)` : ""}${fabMenuText(it, "en")}`;
        case "chip":
            return `a chip ${q(it.label)}${it.checked ? " (selected)" : ""}${it.icon && !it.checked ? ` with a ${it.icon} icon` : ""}${chipHeightText(it, "en")}`;
        case "topAppBar":
            return `a top app bar titled ${q(it.label)}${topBarSizeText(it, "en")}${it.icon ? ` with a ${it.icon} icon button on the left` : ""}${it.icon2 ? `${it.icon ? " and" : " with"} ${it.icon2} on the right` : ""}`;
        case "bottomNav":
            {
                const tabs = (it.tabs ?? []).map((t)=>`${q(t.label || "unlabeled")} (${t.icon || "no icon"})`);
                return `a navigation bar with ${tabs.length} destinations: ${tabs.join(", ")}; ${selectedText(it, "en")}`;
            }
        case "navRail":
            {
                const tabs = (it.tabs ?? []).map((t)=>`${q(t.label || "unlabeled")} (${t.icon || "no icon"})`);
                return `a navigation rail with ${tabs.length} destinations: ${tabs.join(", ")}; ${selectedText(it, "en")}${railStateText(it, "en")}`;
            }
        case "searchBar":
            return `${it.variant === "outlined" ? "an outlined" : "a"} search bar with the placeholder ${q(it.label)}${it.icon2 ? ` and a ${it.icon2} icon at the end` : ""}`;
        case "card":
            {
                const style = it.variant === "elevated" ? "an elevated" : it.variant === "outlined" ? "an outlined" : "a filled";
                return `${style} card${it.size2 ? ` (${it.size2}dp tall)` : ""}${cardLook(it, "en")} ${cardImage(it, "en") || "with "}the headline ${q(it.label)}${hasText(it.supporting) ? ` and the body ${q(it.supporting)}` : ""}${cardText(it, "en")}`;
            }
        case "listItem":
            return `${q(it.label)}${hasText(it.supporting) ? ` with supporting text ${q(it.supporting)}` : ""}${it.icon ? `, a leading ${it.icon} icon${it.iconFill === "none" ? " (no background circle)" : it.iconFill ? ` (on a ${it.iconFill} circle)` : ""}` : ""}${it.switch ? `, a trailing switch (initially ${it.checked ? "on" : "off"})` : it.icon2 ? `, a trailing ${it.icon2} icon` : ""}${it.fill && it.fill !== "surfaceContainerLow" ? `, on a ${it.fill} background` : ""}`;
        case "dialog":
            return `a dialog headed ${q(it.label)}${hasText(it.supporting) ? ` with the body ${q(it.supporting)}` : ""}${it.icon ? ` and a ${it.icon} icon` : ""}, with Cancel and OK text buttons`;
        case "snackbar":
            return `a snackbar ${q(it.label)}${hasText(it.supporting) ? ` with a ${q(it.supporting)} action` : ""}`;
        case "textField":
            return `${it.variant === "filled" ? "a filled" : "an outlined"} text field labeled ${q(it.label)}${it.icon ? ` with a leading ${it.icon} icon` : ""}${hasText(it.supporting) ? `; supporting text ${q(it.supporting)}` : ""}`;
        case "select":
            {
                const opts = (it.tabs ?? []).map((t)=>q(t.label || "unlabeled"));
                const initial = it.selected !== undefined && it.tabs?.[it.selected] ? `, initially ${q(it.tabs[it.selected].label)}` : ", initially none";
                return `${it.variant === "filled" ? "a filled" : "an outlined"} dropdown labeled ${q(it.label)} that opens a menu to pick one option (options ${opts.join(", ")}${initial})${it.icon ? `, with a leading ${it.icon} icon` : ""}${hasText(it.supporting) ? `; supporting text ${q(it.supporting)}` : ""}`;
            }
        case "switch":
            return `a switch ${q(it.label)} (initially ${it.checked ? "on" : "off"})`;
        case "checkbox":
            return `a checkbox ${q(it.label)} (initially ${it.checked ? "checked" : "unchecked"})`;
        case "slider":
            return `a slider (initial value ${it.value ?? 40}%)`;
        case "text":
            return `${it.bold ? "bold " : ""}text ${q(it.label)} at ${it.size ?? 28}sp`;
        case "image":
            return `a ${imageDims(it)} image${imageSrc(it) ? ` (load it from ${imageSrc(it)})` : it.src ? " (use the provided image)" : " placeholder"}`;
        case "camera":
            return `a ${viewSize(it, 4 / 3)} camera preview`;
        case "map":
            return `a ${viewSize(it, 3 / 4)} map`;
        case "divider":
            return "a divider";
        case "box":
            return `a ${it.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"]}×${it.size2 ?? 220}dp box (background ${it.fill ?? "surfaceContainerLow"}, ${boxCorners(it, "en")})`;
        case "bottomSheet":
            return `a ${it.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"]}×${it.size2 ?? 320}dp bottom sheet with a drag handle at the top (background ${it.fill ?? "surfaceContainerLow"}, ${it.radiusTop ?? 28}dp top corners)`;
        case "loadingIndicator":
            return `the M3 Expressive shape-morphing loading indicator${it.contained ? " (contained)" : ""}`;
        case "linearProgress":
            return `a ${it.wavy ? "wavy " : ""}linear progress indicator (${it.value === undefined ? "indeterminate" : `${it.value}%`}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it) !== 4 ? `, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it)}dp track thickness` : ""})`;
        case "circularProgress":
            return `a ${it.wavy ? "wavy " : ""}circular progress indicator (${it.value === undefined ? "indeterminate" : `${it.value}%`}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it) !== 4 ? `, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it)}dp track thickness` : ""})`;
        case "splitButton":
            return `a ${v} split button ${q(it.label)}${it.icon ? ` with a ${it.icon} icon` : ""} and a trailing menu segment with a down arrow${buttonSize(it, "en")}${splitMenuText(it, "en")}`;
        case "fabMenu":
            {
                const items = (it.tabs ?? []).map((t)=>`${q(t.label || "unlabeled")} (${t.icon || "no icon"})`);
                return `a FAB menu opening from a ${v} FAB, drawn open with ${items.length} items stacked above it: ${items.join(", ")}`;
            }
        case "toolbar":
            {
                const icons = (it.tabs ?? []).map((t)=>t.icon || "empty").join(", ");
                return `a ${it.variant === "filled" ? "vibrant (primaryContainer)" : "standard"} floating toolbar with the icon buttons ${icons}`;
            }
        case "tabs":
            {
                const labels = (it.tabs ?? []).map((t)=>q(t.label || "unlabeled"));
                return `a ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollableTabs"])(it) ? "horizontally scrolling " : ""}tab row with ${labels.length} tabs: ${labels.join(", ")}; ${selectedText(it, "en")}`;
            }
        case "radio":
            return `a radio button ${q(it.label)} (initially ${it.checked ? "selected" : "unselected"})`;
        default:
            return noun;
    }
}
function itemZh(it) {
    const q = qz;
    const v = VARIANT_TEXT.zh[it.variant];
    const noun = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"].zh[it.kind]?.noun ?? it.kind;
    switch(it.kind){
        case "button":
            return `${hasText(it.label) ? q(it.label) : "无标签"}的${v}按钮${it.icon ? `（带 ${it.icon} 图标）` : ""}${buttonSize(it, "zh")}`;
        case "carousel":
            return `${CAROUSEL_TEXT.zh[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselLayoutOf"])(it)]}布局的轮播（${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselCountOf"])(it)} 张卡片，高 ${it.size2 ?? 180}dp，每张卡片圆角 16dp，横向滚动${carouselCardsText(it, "zh")}）`;
        case "datePicker":
            return `${DATE_TEXT.zh[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateLayoutOf"])(it)]}形式的日期选择器（已选中今天的日期${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateLayoutOf"])(it) === "input" ? "" : "，含月份网格与取消／确定"}）`;
        case "timePicker":
            return `${TIME_TEXT.zh[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLayoutOf"])(it)]}形式的时间选择器（已选中当前时间，含 AM/PM 切换与取消／确定）`;
        case "iconButton":
            return `${it.icon ?? "空"} 图标的${v}图标按钮${iconButtonSize(it, "zh")}`;
        case "fab":
            return `${it.icon ?? "空"} 图标的${v} FAB${it.size && it.size >= 96 ? "（大尺寸）" : it.size && it.size <= 40 ? "（小尺寸）" : ""}${fabMenuText(it, "zh")}`;
        case "extendedFab":
            return `${q(it.label)}${it.icon ? `和 ${it.icon} 图标` : ""}的扩展 FAB（${v}${it.size2 && it.size2 !== 56 ? `，高 ${it.size2}dp` : ""}）${fabMenuText(it, "zh")}`;
        case "chip":
            return `${q(it.label)}标签片${it.checked ? "（选中状态）" : ""}${it.icon && !it.checked ? `（带 ${it.icon} 图标）` : ""}${chipHeightText(it, "zh")}`;
        case "topAppBar":
            return `标题为${q(it.label)}的顶部应用栏${topBarSizeText(it, "zh")}${it.icon ? `，左侧是 ${it.icon}` : ""}${it.icon2 ? `，右侧是 ${it.icon2}` : ""}${it.icon || it.icon2 ? " 图标按钮" : ""}`;
        case "bottomNav":
            {
                const tabs = (it.tabs ?? []).map((t)=>`${q(t.label || "无标签")}(${t.icon || "无图标"})`);
                return `${tabs.length}个项目的导航栏（${tabs.join("、")}，${selectedText(it, "zh")}）`;
            }
        case "navRail":
            {
                const tabs = (it.tabs ?? []).map((t)=>`${q(t.label || "无标签")}(${t.icon || "无图标"})`);
                return `${tabs.length}个项目的侧边导航栏（${tabs.join("、")}，${selectedText(it, "zh")}）${railStateText(it, "zh")}`;
            }
        case "searchBar":
            return `占位文字为${q(it.label)}的${it.variant === "outlined" ? "描边" : ""}搜索栏${it.icon2 ? `（右端有 ${it.icon2} 图标）` : ""}`;
        case "card":
            {
                const style = it.variant === "elevated" ? "浮起" : it.variant === "outlined" ? "描边" : "填充";
                return `${style}卡片${it.size2 ? `（高 ${it.size2}dp）` : ""}${cardLook(it, "zh")}。${cardImage(it, "zh")}标题${q(it.label)}${hasText(it.supporting) ? `，正文${q(it.supporting)}` : ""}${cardText(it, "zh")}`;
            }
        case "listItem":
            return `${q(it.label)}${hasText(it.supporting) ? `（辅助文本${q(it.supporting)}）` : ""}${it.icon ? `，左侧显示 ${it.icon} 图标${it.iconFill === "none" ? "（无背景）" : it.iconFill ? `（背景 ${it.iconFill}）` : ""}` : ""}${it.switch ? `，显示列表项开关（初始${it.checked ? "开启" : "关闭"}）` : it.icon2 ? `，右侧显示 ${it.icon2} 图标` : ""}${it.fill && it.fill !== "surfaceContainerLow" ? `，背景为 ${it.fill}` : ""}`;
        case "dialog":
            return `标题${q(it.label)}${hasText(it.supporting) ? `、正文${q(it.supporting)}` : ""}${it.icon ? `、带 ${it.icon} 图标` : ""}的对话框（取消／确定文字按钮）`;
        case "snackbar":
            return `${q(it.label)}消息条${hasText(it.supporting) ? `（带${q(it.supporting)}操作）` : ""}`;
        case "textField":
            return `标签为${q(it.label)}的${it.variant === "filled" ? "填充" : "描边"}文本输入框${it.icon ? `（左侧显示 ${it.icon} 图标）` : ""}${hasText(it.supporting) ? `，辅助文本为${q(it.supporting)}` : ""}`;
        case "select":
            {
                const opts = (it.tabs ?? []).map((t)=>q(t.label || "无标签"));
                const initial = it.selected !== undefined && it.tabs?.[it.selected] ? `，初始值为${q(it.tabs[it.selected].label)}` : "，初始未选择";
                return `标签为${q(it.label)}的${it.variant === "filled" ? "填充" : "描边"}下拉菜单（点击展开菜单选择一项，选项为${opts.join("、")}${initial}）${it.icon ? `（左侧显示 ${it.icon} 图标）` : ""}${hasText(it.supporting) ? `，辅助文本为${q(it.supporting)}` : ""}`;
            }
        case "switch":
            return `${q(it.label)}开关（初始状态为${it.checked ? "开" : "关"}）`;
        case "checkbox":
            return `${q(it.label)}复选框（初始状态为${it.checked ? "已勾选" : "未勾选"}）`;
        case "slider":
            return `滑块（初始值 ${it.value ?? 40}%）`;
        case "text":
            return `${it.bold ? "粗体" : ""}文本${q(it.label)}（${it.size ?? 28}sp）`;
        case "image":
            return `${imageDims(it)} 的图片${imageSrc(it) ? `（显示 ${imageSrc(it)} 的图片）` : it.src ? "（显示指定的图片）" : "占位符"}`;
        case "camera":
            return `${viewSize(it, 4 / 3)} 的相机预览`;
        case "map":
            return `${viewSize(it, 3 / 4)} 的地图`;
        case "divider":
            return "分割线";
        case "box":
            return `${it.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"]}×${it.size2 ?? 220}dp 的容器框（背景 ${it.fill ?? "surfaceContainerLow"}，${boxCorners(it, "zh")}）`;
        case "bottomSheet":
            return `${it.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"]}×${it.size2 ?? 320}dp 的底部面板（顶部带拖动条，背景 ${it.fill ?? "surfaceContainerLow"}，上方圆角 ${it.radiusTop ?? 28}dp）`;
        case "loadingIndicator":
            return `M3 Expressive 形状变化的加载指示器${it.contained ? "（带容器）" : ""}`;
        case "linearProgress":
            return `${it.wavy ? "波浪形" : ""}线性进度条（${it.value === undefined ? "不确定进度" : `${it.value}%`}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it) !== 4 ? `，轨道粗细 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it)}dp` : ""}）`;
        case "circularProgress":
            return `${it.wavy ? "波浪形" : ""}圆形进度条（${it.value === undefined ? "不确定进度" : `${it.value}%`}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it) !== 4 ? `，轨道粗细 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it)}dp` : ""}）`;
        case "splitButton":
            return `${q(it.label)}${it.icon ? `（带 ${it.icon} 图标）` : ""}的${v}拆分按钮（右侧为带向下箭头的菜单段）${buttonSize(it, "zh")}${splitMenuText(it, "zh")}`;
        case "fabMenu":
            {
                const items = (it.tabs ?? []).map((t)=>`${q(t.label || "无标签")}(${t.icon || "无图标"})`);
                return `从${v} FAB 展开的 FAB 菜单（按展开状态绘制，上方纵向排列 ${items.length} 项：${items.join("、")}）`;
            }
        case "toolbar":
            {
                const icons = (it.tabs ?? []).map((t)=>t.icon || "空").join("、");
                return `${it.variant === "filled" ? "鲜明（primaryContainer）" : "标准"}样式的悬浮工具栏（图标按钮：${icons}）`;
            }
        case "tabs":
            {
                const labels = (it.tabs ?? []).map((t)=>q(t.label || "无标签"));
                return `${labels.join("、")}这 ${labels.length} 个标签页（${selectedText(it, "zh")}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollableTabs"])(it) ? "，可横向滚动" : ""}）`;
            }
        case "radio":
            return `${q(it.label)}单选按钮（初始状态为${it.checked ? "选中" : "未选中"}）`;
        default:
            return noun;
    }
}
function itemKo(it) {
    const q = qe;
    const v = VARIANT_TEXT.ko[it.variant];
    const noun = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"].ko[it.kind]?.noun ?? it.kind;
    switch(it.kind){
        case "button":
            return `${hasText(it.label) ? q(it.label) : "레이블 없는"} ${v} 버튼${it.icon ? `(${it.icon} 아이콘 포함)` : ""}${buttonSize(it, "ko")}`;
        case "carousel":
            return `${CAROUSEL_TEXT.ko[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselLayoutOf"])(it)]} 레이아웃 캐러셀(카드 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carouselCountOf"])(it)}장, 높이 ${it.size2 ?? 180}dp, 카드마다 모서리 16dp, 가로 스크롤${carouselCardsText(it, "ko")})`;
        case "datePicker":
            return `${DATE_TEXT.ko[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateLayoutOf"])(it)]} 형태의 날짜 선택기(오늘 날짜 선택됨${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateLayoutOf"])(it) === "input" ? "" : ", 월 그리드와 취소 / 확인"})`;
        case "timePicker":
            return `${TIME_TEXT.ko[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLayoutOf"])(it)]} 형태의 시간 선택기(현재 시각 선택됨, AM/PM 전환과 취소 / 확인)`;
        case "iconButton":
            return `${it.icon ?? "빈"} 아이콘의 ${v} 아이콘 버튼${iconButtonSize(it, "ko")}`;
        case "fab":
            return `${it.icon ?? "빈"} 아이콘의 ${v} FAB${it.size && it.size >= 96 ? "(대형)" : it.size && it.size <= 40 ? "(소형)" : ""}${fabMenuText(it, "ko")}`;
        case "extendedFab":
            return `${q(it.label)}${it.icon ? ` 및 ${it.icon} 아이콘` : ""} 확장 FAB(${v}${it.size2 && it.size2 !== 56 ? `, 높이 ${it.size2}dp` : ""})${fabMenuText(it, "ko")}`;
        case "chip":
            return `${q(it.label)} 칩${it.checked ? "(선택됨)" : ""}${it.icon && !it.checked ? `(${it.icon} 아이콘 포함)` : ""}${chipHeightText(it, "ko")}`;
        case "topAppBar":
            return `제목이 ${q(it.label)}인 상단 앱 바${topBarSizeText(it, "ko")}${it.icon ? `, 왼쪽 ${it.icon}` : ""}${it.icon2 ? `, 오른쪽 ${it.icon2}` : ""}${it.icon || it.icon2 ? " 아이콘 버튼" : ""}`;
        case "bottomNav":
            {
                const tabs = (it.tabs ?? []).map((t)=>`${q(t.label || "레이블 없음")}(${t.icon || "아이콘 없음"})`);
                return `${tabs.length}개 항목의 내비게이션 바(${tabs.join(", ")}, ${selectedText(it, "ko")})`;
            }
        case "navRail":
            {
                const tabs = (it.tabs ?? []).map((t)=>`${q(t.label || "레이블 없음")}(${t.icon || "아이콘 없음"})`);
                return `${tabs.length}개 항목의 내비게이션 레일(${tabs.join(", ")}, ${selectedText(it, "ko")})${railStateText(it, "ko")}`;
            }
        case "searchBar":
            return `자리표시자가 ${q(it.label)}인 ${it.variant === "outlined" ? "윤곽선 " : ""}검색창${it.icon2 ? `(오른쪽 끝에 ${it.icon2} 아이콘)` : ""}`;
        case "card":
            {
                const style = it.variant === "elevated" ? "돌출" : it.variant === "outlined" ? "윤곽선" : "채움";
                return `${style} 카드${it.size2 ? `(높이 ${it.size2}dp)` : ""}${cardLook(it, "ko")}. ${cardImage(it, "ko")}제목 ${q(it.label)}${hasText(it.supporting) ? `, 본문 ${q(it.supporting)}` : ""}${cardText(it, "ko")}`;
            }
        case "listItem":
            return `${q(it.label)}${hasText(it.supporting) ? `(보조 텍스트 ${q(it.supporting)})` : ""}${it.icon ? `, 앞쪽 ${it.icon} 아이콘${it.iconFill === "none" ? "(배경 없음)" : it.iconFill ? `(배경 ${it.iconFill})` : ""}` : ""}${it.switch ? `, 끝에 스위치(초기 상태 ${it.checked ? "켜짐" : "꺼짐"})` : it.icon2 ? `, 뒤쪽 ${it.icon2}` : ""}${it.fill && it.fill !== "surfaceContainerLow" ? `, 배경 ${it.fill}` : ""}`;
        case "dialog":
            return `제목 ${q(it.label)}${hasText(it.supporting) ? `, 본문 ${q(it.supporting)}` : ""}${it.icon ? `, ${it.icon} 아이콘 포함` : ""} 대화상자(취소/확인 텍스트 버튼)`;
        case "snackbar":
            return `${q(it.label)} 스낵바${hasText(it.supporting) ? `(${q(it.supporting)} 동작 포함)` : ""}`;
        case "textField":
            return `레이블이 ${q(it.label)}인 ${it.variant === "filled" ? "채움" : "윤곽선"} 텍스트 입력란${it.icon ? `(앞쪽 ${it.icon} 아이콘)` : ""}${hasText(it.supporting) ? `. 보조 텍스트는 ${q(it.supporting)}` : ""}`;
        case "select":
            {
                const opts = (it.tabs ?? []).map((t)=>q(t.label || "레이블 없음"));
                const initial = it.selected !== undefined && it.tabs?.[it.selected] ? `, 초깃값은 ${q(it.tabs[it.selected].label)}` : ", 초깃값은 없음";
                return `레이블이 ${q(it.label)}인 ${it.variant === "filled" ? "채움" : "윤곽선"} 드롭다운(탭하면 메뉴가 열려 하나를 고른다. 선택지는 ${opts.join(", ")}${initial})${it.icon ? `(앞쪽 ${it.icon} 아이콘)` : ""}${hasText(it.supporting) ? `. 보조 텍스트는 ${q(it.supporting)}` : ""}`;
            }
        case "switch":
            return `${q(it.label)} 스위치(초기 상태 ${it.checked ? "켜짐" : "꺼짐"})`;
        case "checkbox":
            return `${q(it.label)} 체크박스(초기 상태 ${it.checked ? "선택됨" : "선택 안 됨"})`;
        case "slider":
            return `슬라이더(초깃값 ${it.value ?? 40}%)`;
        case "text":
            return `${it.bold ? "굵은 " : ""}텍스트 ${q(it.label)}(${it.size ?? 28}sp)`;
        case "image":
            return `${imageDims(it)} 이미지${imageSrc(it) ? `(${imageSrc(it)}의 이미지 표시)` : it.src ? "(지정한 이미지 표시)" : " 자리표시자"}`;
        case "camera":
            return `${viewSize(it, 4 / 3)} 카메라 미리보기`;
        case "map":
            return `${viewSize(it, 3 / 4)} 지도`;
        case "divider":
            return "구분선";
        case "box":
            return `${it.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"]}×${it.size2 ?? 220}dp 상자(배경 ${it.fill ?? "surfaceContainerLow"}, ${boxCorners(it, "ko")})`;
        case "bottomSheet":
            return `${it.size ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_W"]}×${it.size2 ?? 320}dp 하단 시트(위쪽 드래그 핸들 포함, 배경 ${it.fill ?? "surfaceContainerLow"}, 위 모서리 ${it.radiusTop ?? 28}dp)`;
        case "loadingIndicator":
            return `M3 Expressive 형태 변환 로딩 표시기${it.contained ? "(컨테이너 포함)" : ""}`;
        case "linearProgress":
            return `${it.wavy ? "물결 모양 " : ""}선형 진행 표시기(${it.value === undefined ? "불확정" : `${it.value}%`}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it) !== 4 ? `, 트랙 두께 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it)}dp` : ""})`;
        case "circularProgress":
            return `${it.wavy ? "물결 모양 " : ""}원형 진행 표시기(${it.value === undefined ? "불확정" : `${it.value}%`}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it) !== 4 ? `, 트랙 두께 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressThickness"])(it)}dp` : ""})`;
        case "splitButton":
            return `${q(it.label)}${it.icon ? `(${it.icon} 아이콘 포함)` : ""} ${v} 분할 버튼(오른쪽에 아래쪽 화살표가 있는 메뉴 영역)${buttonSize(it, "ko")}${splitMenuText(it, "ko")}`;
        case "fabMenu":
            {
                const items = (it.tabs ?? []).map((t)=>`${q(t.label || "레이블 없음")}(${t.icon || "아이콘 없음"})`);
                return `${v} FAB에서 열리는 FAB 메뉴(열린 상태로 표시, 위쪽에 ${items.join(", ")} 항목 ${items.length}개를 세로 배치)`;
            }
        case "toolbar":
            {
                const icons = (it.tabs ?? []).map((t)=>t.icon || "빈 아이콘").join(", ");
                return `${it.variant === "filled" ? "비브런트(primaryContainer)" : "표준"} 플로팅 도구 모음(${icons} 아이콘 버튼)`;
            }
        case "tabs":
            {
                const labels = (it.tabs ?? []).map((t)=>q(t.label || "레이블 없음"));
                return `${labels.join(", ")}의 탭 ${labels.length}개(${selectedText(it, "ko")}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollableTabs"])(it) ? ", 가로로 스크롤되는 탭" : ""})`;
            }
        case "radio":
            return `${q(it.label)} 라디오 버튼(초기 상태 ${it.checked ? "선택됨" : "선택 안 됨"})`;
        default:
            return noun;
    }
}
/** a box's corners in words: the top / bottom pairs, or each corner when they differ */ function boxCorners(it, lang) {
    const c = it.corners;
    const each = c && !(c.tl === c.tr && c.bl === c.br);
    if (each) {
        if (lang === "ja") return `角丸は左上 ${c.tl}dp・右上 ${c.tr}dp・左下 ${c.bl}dp・右下 ${c.br}dp`;
        if (lang === "zh") return `圆角左上 ${c.tl}dp、右上 ${c.tr}dp、左下 ${c.bl}dp、右下 ${c.br}dp`;
        if (lang === "ko") return `모서리 왼쪽 위 ${c.tl}dp / 오른쪽 위 ${c.tr}dp / 왼쪽 아래 ${c.bl}dp / 오른쪽 아래 ${c.br}dp`;
        return `corner radius ${c.tl}dp top-left / ${c.tr}dp top-right / ${c.bl}dp bottom-left / ${c.br}dp bottom-right`;
    }
    const t = c ? c.tl : it.radiusTop ?? 28;
    const b = c ? c.bl : it.radiusBottom ?? 28;
    if (t === b) {
        if (lang === "ja") return `角丸 ${t}dp`;
        if (lang === "zh") return `圆角 ${t}dp`;
        if (lang === "ko") return `모서리 ${t}dp`;
        return `${t}dp corners`;
    }
    if (lang === "ja") return `角丸は上 ${t}dp・下 ${b}dp`;
    if (lang === "zh") return `圆角上 ${t}dp、下 ${b}dp`;
    if (lang === "ko") return `위쪽 모서리 ${t}dp / 아래쪽 ${b}dp`;
    return `corner radius ${t}dp top / ${b}dp bottom`;
}
const itemText = (it, lang)=>lang === "ja" ? itemJa(it) : lang === "zh" ? itemZh(it) : lang === "ko" ? itemKo(it) : itemEn(it);
/* ================= connected runs ================= */ function groupText(g, lang) {
    if (g.items.length === 1) return itemText(g.items[0], lang);
    const q = quote(lang);
    const kind = g.items[0].kind;
    const vt = VARIANT_TEXT[lang];
    const same = g.items.every((it)=>it.variant === g.items[0].variant);
    if (lang === "ja") {
        if (kind === "listItem") return `${g.items.length}項目のリスト。上から ${g.items.map(itemJa).join("、")}`;
        if (kind === "chip") return `${g.items.map((it)=>q(it.label) + (it.checked ? "(選択中)" : "")).join("")}のチップが横に並ぶチップグループ${chipRunHeightText(g.items, "ja")}`;
        if (kind === "iconButton") return `${g.items.map((it)=>it.icon ?? "空").join("・")} のアイコンボタンが連結したボタングループ`;
        const names = same ? g.items.map((it)=>q(it.label || "ラベルなし")).join("") : g.items.map((it)=>`${q(it.label || "ラベルなし")}(${vt[it.variant]})`).join("");
        return `${names}の${g.items.length}つのボタンが横に連結したボタングループ${same ? `（${vt[g.items[0].variant]}）` : ""}`;
    }
    if (lang === "zh") {
        if (kind === "listItem") return `${g.items.length}项的列表，从上到下依次为 ${g.items.map(itemZh).join("、")}`;
        if (kind === "chip") return `由${g.items.map((it)=>q(it.label) + (it.checked ? "(选中)" : "")).join("")}横向排列组成的标签片组${chipRunHeightText(g.items, "zh")}`;
        if (kind === "iconButton") return `由 ${g.items.map((it)=>it.icon ?? "空").join("、")} 图标按钮相连组成的按钮组`;
        const names = same ? g.items.map((it)=>q(it.label || "无标签")).join("") : g.items.map((it)=>`${q(it.label || "无标签")}(${vt[it.variant]})`).join("");
        return `由${names}这 ${g.items.length} 个按钮横向相连组成的按钮组${same ? `（${vt[g.items[0].variant]}）` : ""}`;
    }
    if (lang === "ko") {
        if (kind === "listItem") return `${g.items.length}개 항목의 목록. 위에서부터 ${g.items.map(itemKo).join(", ")}`;
        if (kind === "chip") return `${g.items.map((it)=>q(it.label) + (it.checked ? "(선택됨)" : "")).join(", ")} 칩을 가로로 배치한 칩 그룹${chipRunHeightText(g.items, "ko")}`;
        if (kind === "iconButton") return `${g.items.map((it)=>it.icon ?? "빈 아이콘").join(", ")} 아이콘 버튼을 연결한 버튼 그룹`;
        const names = same ? g.items.map((it)=>q(it.label || "레이블 없음")).join(", ") : g.items.map((it)=>`${q(it.label || "레이블 없음")}(${vt[it.variant]})`).join(", ");
        return `${names} 버튼 ${g.items.length}개를 가로로 연결한 버튼 그룹${same ? `(${vt[g.items[0].variant]})` : ""}`;
    }
    if (kind === "listItem") return `a list of ${g.items.length} items, top to bottom: ${g.items.map(itemEn).join("; ")}`;
    if (kind === "chip") return `a chip group: ${g.items.map((it)=>q(it.label) + (it.checked ? " (selected)" : "")).join(", ")}${chipRunHeightText(g.items, "en")}`;
    if (kind === "iconButton") return `a connected group of icon buttons: ${g.items.map((it)=>it.icon ?? "empty").join(", ")}`;
    const names = same ? g.items.map((it)=>q(it.label || "unlabeled")).join(", ") : g.items.map((it)=>`${q(it.label || "unlabeled")} (${vt[it.variant]})`).join(", ");
    return `a connected button group of ${g.items.length}${same ? ` ${vt[g.items[0].variant]}` : ""} buttons: ${names}`;
}
/** short name for a run when it is referred to again (as a container or a neighbour) */ function groupName(g, lang) {
    const it = g.items[0];
    const noun = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"][lang][it.kind]?.noun ?? it.kind;
    const q = quote(lang);
    if (g.items.length > 1) return lang === "en" ? `the ${noun} group` : lang === "zh" ? `${noun}组` : lang === "ko" ? `${noun} 그룹` : `${noun}のグループ`;
    if (it.kind === "box") return lang === "en" ? "the box" : lang === "zh" ? "容器框" : lang === "ko" ? "상자" : "ボックス";
    if (it.kind === "bottomSheet") return lang === "en" ? "the bottom sheet" : lang === "zh" ? "底部面板" : lang === "ko" ? "하단 시트" : "ボトムシート";
    if (hasText(it.label) && it.kind !== "text") return lang === "en" ? `the ${q(it.label)} ${noun}` : `${q(it.label)}${lang === "ko" ? " " : ""}${noun}`;
    return lang === "en" ? `the ${noun}` : noun;
}
/* ================= behavior notes ================= */ function actionText(a, frames, lang) {
    const q = quote(lang);
    /* the menu a FAB opens is described with the FAB itself */ if (a.to === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MENU_TARGET"]) return null;
    if (a.to === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINK_TARGET"]) {
        const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkUrlOf"])(a);
        if (!href) return null;
        if (lang === "ja") return `${href} をブラウザの別タブで開く`;
        if (lang === "zh") return `在浏览器的新标签页中打开 ${href}`;
        if (lang === "ko") return `${href}를 브라우저 새 탭에서 연다`;
        return `opens ${href} in a new browser tab`;
    }
    if (a.to === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACK_TARGET"]) {
        return lang === "ja" ? "前の画面に戻る（入ったときの遷移を逆再生する）" : lang === "zh" ? "返回上一个屏幕（反向播放进入时的过渡动画）" : lang === "ko" ? "이전 화면으로 돌아간다(진입 전환을 반대로 재생)" : "goes back to the previous screen (playing the entry transition in reverse)";
    }
    const target = frames.find((f)=>f.id === a.to);
    if (!target) return null;
    const tr = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSITION_TEXT"][lang][a.transition];
    const name = q(target.name || (lang === "en" ? "screen" : lang === "zh" ? "屏幕" : lang === "ko" ? "화면" : "画面"));
    if (lang === "ja") return `${name}画面へ${a.transition !== "none" ? `${tr}で` : ""}遷移する`;
    if (lang === "zh") return `${a.transition !== "none" ? `以${tr}的方式` : ""}跳转到${name}屏幕`;
    if (lang === "ko") return `${name} 화면으로${a.transition !== "none" ? ` ${tr} 전환하여` : ""} 이동한다`;
    return `opens the ${name} screen${a.transition !== "none" ? ` with ${tr}` : ""}`;
}
function slotName(it, slot, lang) {
    if (slot.startsWith("tab:")) {
        const i = Number(slot.slice(4));
        const tab = it.tabs?.[i];
        const q = quote(lang);
        const label = tab?.label ? q(tab.label) : `#${i + 1}`;
        /* an entry of a menu is picked from it; a destination on a bar is somewhere to go */ const menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opensMenu"])(it) || it.kind === "fabMenu";
        if (lang === "ja") return `${label}の${menu ? "メニュー項目" : "項目"}`;
        if (lang === "zh") return `${label}${menu ? "菜单项" : "项"}`;
        if (lang === "ko") return `${label} ${menu ? "메뉴 항목" : "항목"}`;
        return `the ${label} ${menu ? "menu item" : "destination"}`;
    }
    const icon = slot === "icon2" ? it.icon2 : it.icon;
    if (lang === "ja") return `${slot === "icon2" ? "右" : "左"}の ${icon ?? ""} アイコンボタン`;
    if (lang === "zh") return `${slot === "icon2" ? "右侧" : "左侧"}的 ${icon ?? ""} 图标按钮`;
    if (lang === "ko") return `${slot === "icon2" ? "오른쪽" : "왼쪽"} ${icon ?? ""} 아이콘 버튼`;
    return `the ${icon ?? ""} icon button on the ${slot === "icon2" ? "right" : "left"}`;
}
function notes(g, frames, lang) {
    const out = [];
    const q = quote(lang);
    for (const it of g.items){
        const noun = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"][lang][it.kind]?.noun ?? it.kind;
        const name = hasText(it.label) && it.kind !== "text" ? lang === "en" ? `The ${q(it.label)} ${noun}` : `${q(it.label)}${lang === "ko" ? " " : ""}${noun}` : lang === "en" ? `The ${noun}` : hasText(it.label) ? lang === "ja" ? `テキスト${q(it.label)}` : lang === "zh" ? `文本${q(it.label)}` : `텍스트 ${q(it.label)}` : noun;
        const parts = [];
        if (it.action) {
            const a = actionText(it.action, frames, lang);
            if (a) parts.push(lang === "ja" ? `タップすると${a}` : lang === "zh" ? `点击后${a}` : lang === "ko" ? `탭하면 ${a}` : `${a} when tapped`);
        }
        for (const [slot, action] of Object.entries(it.actions ?? {})){
            if (!action) continue;
            const a = actionText(action, frames, lang);
            if (!a) continue;
            const s = slotName(it, slot, lang);
            if (lang === "en") out.push(`Tapping ${s} of ${name.replace(/^The /, "the ")} ${a}.`);
            else parts.push(lang === "ja" ? `${s}をタップすると${a}` : lang === "zh" ? `点击${s}后${a}` : `${s}을 탭하면 ${a}`);
        }
        if (it.toggle) {
            const vt = VARIANT_TEXT[lang];
            const icon = it.toggle.icon; // undefined = same as off, null = no icon
            const variant = it.toggle.variant;
            const changes = [];
            const label = it.toggle.label !== undefined && it.toggle.label !== it.label ? it.toggle.label : undefined;
            if (lang === "ja") {
                if (label !== undefined) changes.push(`ラベルが${qj(label)}に変わる`);
                if (icon) changes.push(`アイコンが ${icon} に変わる`);
                else if (icon === null) changes.push("アイコンが消える");
                if (variant) changes.push(`スタイルが${vt[variant]}に変わる`);
                parts.push(`タップするたびにオン／オフが切り替わるトグルボタンにする${changes.length ? `（オンのときは${changes.join("、")}）` : ""}`);
            } else if (lang === "zh") {
                if (label !== undefined) changes.push(`文字变为${qz(label)}`);
                if (icon) changes.push(`图标变为 ${icon}`);
                else if (icon === null) changes.push("图标消失");
                if (variant) changes.push(`样式变为${vt[variant]}`);
                parts.push(`做成每次点击都切换开/关状态的切换按钮${changes.length ? `（开启时${changes.join("、")}）` : ""}`);
            } else if (lang === "ko") {
                if (label !== undefined) changes.push(`변경할 레이블: ${qe(label)}`);
                if (icon) changes.push(`변경할 아이콘: ${icon}`);
                else if (icon === null) changes.push("아이콘이 사라진다");
                if (variant) changes.push(`변경할 스타일: ${vt[variant]}`);
                parts.push(`탭할 때마다 켜짐/꺼짐이 전환되는 토글 버튼으로 만든다${changes.length ? `(켜졌을 때 ${changes.join(", ")})` : ""}`);
            } else {
                if (label !== undefined) changes.push(`the label becomes ${qe(label)}`);
                if (icon) changes.push(`the icon becomes ${icon}`);
                else if (icon === null) changes.push("the icon disappears");
                if (variant) changes.push(`the style becomes ${vt[variant]}`);
                parts.push(`is a toggle button that flips on / off with every tap${changes.length ? ` (when on, ${changes.join(" and ")})` : ""}`);
            }
        }
        if (hasText(it.note)) parts.push(trimEnd(it.note));
        if (!parts.length) continue;
        if (lang === "ja") out.push(`${name}は、${parts.join("。また、")}。`);
        else if (lang === "zh") out.push(`${name}：${parts.join("；")}。`);
        else if (lang === "ko") out.push(`${name}: ${parts.join(". 또한 ")}.`);
        else out.push(`${name} ${parts.join(". It also ")}.`);
    }
    return out;
}
function swipeNotes(f, frames, lang) {
    const out = [];
    const q = quote(lang);
    const screen = lang === "en" ? "screen" : lang === "zh" ? "屏幕" : lang === "ko" ? "화면" : "画面";
    for (const d of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SWIPE_DIRS"]){
        const to = f.swipe?.[d.key];
        if (!to) continue;
        const a = actionText({
            to,
            transition: d.transition
        }, frames, lang);
        if (!a) continue;
        const sw = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SWIPE_TEXT"][lang][d.key];
        const name = q(f.name || screen);
        if (lang === "ja") out.push(`${name}画面は、${sw}すると指の動きに追従して${a}。`);
        else if (lang === "zh") out.push(`${name}屏幕：${sw}时跟随手指移动并${a}。`);
        else if (lang === "ko") out.push(`${name} 화면은 ${sw}하면 손가락을 따라 움직이며 ${a}.`);
        else out.push(`The ${name} screen ${a} when ${sw}; the screen follows the finger while dragging.`);
    }
    return out;
}
const area = (r)=>Math.max(0, r.r - r.l) * Math.max(0, r.b - r.t);
const contains = (o, i, tol = 2)=>i.l >= o.l - tol && i.t >= o.t - tol && i.r <= o.r + tol && i.b <= o.b + tol;
const overlapArea = (a, b)=>Math.max(0, Math.min(a.r, b.r) - Math.max(a.l, b.l)) * Math.max(0, Math.min(a.b, b.b) - Math.max(a.t, b.t));
/** Groups keep their canvas order (later = drawn on top). A run that sits fully inside an
 *  earlier, larger one is nested in it, so a box with parts on it reads as one container. */ function layoutTree(groups, widths) {
    const nodes = groups.map((g)=>({
            g,
            bb: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths),
            children: []
        }));
    const roots = [];
    nodes.forEach((n, i)=>{
        let parent = null;
        for(let j = 0; j < i; j++){
            const c = nodes[j];
            if (c.g.items[0].kind === "topAppBar" || c.g.items[0].kind === "bottomNav") continue;
            if (contains(c.bb, n.bb) && area(c.bb) > area(n.bb) && (!parent || area(c.bb) < area(parent.bb))) parent = c;
        }
        (parent ? parent.children : roots).push(n);
    });
    return roots;
}
/** Siblings whose vertical extents overlap and that sit side by side form one row. */ function rowsOf(nodes) {
    const sorted = [
        ...nodes
    ].sort((a, b)=>a.bb.t - b.bb.t || a.bb.l - b.bb.l);
    const out = [];
    for (const n of sorted){
        const row = out[out.length - 1];
        if (row) {
            const rt = Math.min(...row.map((r)=>r.bb.t));
            const rb = Math.max(...row.map((r)=>r.bb.b));
            const cy = (n.bb.t + n.bb.b) / 2;
            const rcy = (rt + rb) / 2;
            const beside = row.every((r)=>r.bb.r <= n.bb.l + 2 || r.bb.l >= n.bb.r - 2);
            if (beside && (cy >= rt && cy <= rb || rcy >= n.bb.t && rcy <= n.bb.b)) {
                row.push(n);
                continue;
            }
        }
        out.push([
            n
        ]);
    }
    for (const r of out)r.sort((a, b)=>a.bb.l - b.bb.l);
    return out;
}
/** where a rect sits inside a container, in words */ function zone(bb, within, lang, phone) {
    const w = within.r - within.l;
    const h = within.b - within.t;
    const cy = (bb.t + bb.b) / 2 - within.t;
    const cx = (bb.l + bb.r) / 2 - within.l;
    const bw = bb.r - bb.l;
    const vert = cy < h * (phone ? 0.22 : 0.3) ? 0 : cy > h * (phone ? 0.8 : 0.7) ? 2 : 1;
    const horiz = bw >= w * 0.85 ? -1 : cx < w * 0.36 ? 0 : cx > w * 0.64 ? 2 : 1;
    if (lang === "ja") {
        const v = [
            "上部",
            "中央付近",
            "下部"
        ][vert];
        if (horiz === 1) return `${v}の中央に`;
        const hh = horiz < 0 ? "" : [
            "左寄せで",
            "",
            "右寄せで"
        ][horiz];
        return `${v}に${hh}`;
    }
    if (lang === "zh") {
        const v = [
            "上部",
            "中部",
            "下部"
        ][vert];
        if (horiz === 1) return `${v}居中`;
        const hh = horiz < 0 ? "" : [
            "靠左",
            "",
            "靠右"
        ][horiz];
        return `${v}${hh}`;
    }
    if (lang === "ko") {
        const v = [
            "위쪽",
            "가운데",
            "아래쪽"
        ][vert];
        if (horiz === 1) return `${v} 중앙에`;
        const hh = horiz < 0 ? "" : [
            " 왼쪽 정렬로",
            "",
            " 오른쪽 정렬로"
        ][horiz];
        return `${v}${hh}`;
    }
    const v = [
        "Near the top",
        "In the middle",
        "Near the bottom"
    ][vert];
    const hh = horiz < 0 ? "" : [
        ", aligned left",
        ", centered",
        ", aligned right"
    ][horiz];
    return `${v}${hh}`;
}
/** the row phrase: a single part, or several parts side by side that must stay on one line */ function rowText(row, where, lang, within) {
    if (row.length === 1) {
        const d = groupText(row[0].g, lang);
        return lang === "ja" ? `${where}${d}を置きます。` : lang === "zh" ? `${where}放置${d}。` : lang === "ko" ? `${where} 다음 항목을 배치합니다: ${d}.` : `${where}: ${d}.`;
    }
    const last = row[row.length - 1];
    const fillsRight = last.bb.r >= within.r - 24;
    const descs = row.map((n)=>groupText(n.g, lang));
    if (lang === "ja") {
        const stretch = fillsRight ? `。最後の${groupName(last.g, "ja")}は右端まで残りの幅いっぱいに伸ばします` : "";
        return `${where}、左から ${descs.join("、")} を横一列に並べます（同じ行に収めて縦方向は中央揃え。縦に積んだり折り返したりしません${stretch}）。`;
    }
    if (lang === "zh") {
        const stretch = fillsRight ? `，最后的${groupName(last.g, "zh")}向右拉伸占满剩余宽度` : "";
        return `${where}，从左到右横向排成一行：${descs.join("、")}（放在同一行并垂直居中，不要竖着堆叠或换行${stretch}）。`;
    }
    if (lang === "ko") {
        const stretch = fillsRight ? `, 마지막 항목(${groupName(last.g, "ko")})은 오른쪽 끝까지 남은 너비를 채웁니다` : "";
        return `${where}, 왼쪽부터 한 행에 다음 항목을 배치합니다: ${descs.join(", ")}(같은 줄에 세로 중앙 정렬하고 쌓거나 줄 바꿈하지 않음${stretch}).`;
    }
    const stretch = fillsRight ? `; ${groupName(last.g, "en")} stretches to fill the remaining width to the right edge` : "";
    return `${where}, in one row from left to right: ${descs.join(", ")} (keep them on the same line, vertically centered; never stack or wrap them${stretch}).`;
}
/** kinds whose side-by-side rows can read as one grid */ const GRID_KINDS = [
    "card",
    "image"
];
/** the farthest two column edges or cell widths may be apart and still count as one grid */ const GRID_SNAP = 6;
/** Rows starting at `from` that line up as a grid: single cards (or single images) of one
 *  kind, at least two rows of at least two cells, every row with the same column count
 *  except a shorter last one, columns sharing their left edges and all cells one width.
 *  Anything with parts on top of it is left to the row-by-row description. */ function gridAt(rows, from) {
    const first = rows[from];
    if (first.length < 2) return null;
    const kind = first[0].g.items[0].kind;
    if (!GRID_KINDS.includes(kind)) return null;
    const cell = (n)=>n.g.items.length === 1 && n.g.items[0].kind === kind && !n.children.length;
    const width = first[0].bb.r - first[0].bb.l;
    const fits = (row)=>row.length <= first.length && row.every((n, j)=>cell(n) && Math.abs(n.bb.l - first[j].bb.l) <= GRID_SNAP && Math.abs(n.bb.r - n.bb.l - width) <= GRID_SNAP);
    if (!fits(first)) return null;
    const out = [
        first
    ];
    for(let i = from + 1; i < rows.length; i++){
        if (!fits(rows[i])) break;
        out.push(rows[i]);
        if (rows[i].length < first.length) break; // a short row closes the grid
    }
    if (out.length < 2) return null;
    const bottom = (row)=>Math.max(...row.map((n)=>n.bb.b));
    const top = (row)=>Math.min(...row.map((n)=>n.bb.t));
    return {
        rows: out,
        cols: first.length,
        colGap: Math.max(0, Math.round(first[1].bb.l - first[0].bb.r)),
        rowGap: Math.max(0, Math.round(top(out[1]) - bottom(out[0])))
    };
}
/** the grid phrase: how many columns, the gaps, then every cell in reading order */ function gridText(grid, where, lang) {
    const cells = grid.rows.flat();
    const kind = cells[0].g.items[0].kind;
    const noun = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"][lang][kind]?.noun ?? kind;
    const n = cells.length;
    const c = grid.cols;
    const list = cells.map((x, i)=>`(${i + 1}) ${groupText(x.g, lang)}`).join(lang === "en" || lang === "ko" ? "; " : "；");
    if (lang === "ja") return `${where}、${noun}${n}個を${c}列のグリッドに並べます（列の間隔 ${grid.colGap}dp、行の間隔 ${grid.rowGap}dp。セルはすべて同じ幅で、左から右へ、上の行から順に埋める。1行に並べたり縦1列に積んだりせず${c}列を保つ）: ${list}。`;
    if (lang === "zh") return `${where}，将 ${n} 个${noun}排成 ${c} 列网格（列间距 ${grid.colGap}dp，行间距 ${grid.rowGap}dp；所有单元格等宽，从左到右、从上一行开始依次填充；保持 ${c} 列，不要排成一行或竖着堆叠）：${list}。`;
    if (lang === "ko") return `${where}, ${noun} ${n}개를 ${c}열 그리드로 배치합니다(열 간격 ${grid.colGap}dp, 행 간격 ${grid.rowGap}dp. 모든 칸은 같은 너비이며 왼쪽에서 오른쪽으로, 위 행부터 채운다. 한 줄로 늘어놓거나 세로로 쌓지 않고 ${c}열을 유지): ${list}.`;
    return `${where}, a grid of ${n} ${noun}s in ${c} columns (${grid.colGap}dp between columns, ${grid.rowGap}dp between rows; every cell the same width, filled left to right, row by row; keep ${c} columns rather than one long row or a single stack): ${list}.`;
}
function describeNodes(lines, nodes, within, widths, lang, depth, phone) {
    const rows = rowsOf(nodes);
    const pad = "  ".repeat(depth);
    const box = within ?? {
        l: Math.min(...nodes.map((n)=>n.bb.l)),
        t: Math.min(...nodes.map((n)=>n.bb.t)),
        r: Math.max(...nodes.map((n)=>n.bb.r)),
        b: Math.max(...nodes.map((n)=>n.bb.b))
    };
    for(let i = 0; i < rows.length; i++){
        /* rows that line up as a grid are written once, as the grid, in place of each row */ const grid = gridAt(rows, i);
        const row = grid ? grid.rows.flat() : rows[i];
        const first = row[0];
        const rowRect = {
            l: Math.min(...row.map((n)=>n.bb.l)),
            t: Math.min(...row.map((n)=>n.bb.t)),
            r: Math.max(...row.map((n)=>n.bb.r)),
            b: Math.max(...row.map((n)=>n.bb.b))
        };
        let where;
        if (within) where = zone(rowRect, box, lang, phone);
        else where = lang === "ja" ? i === 0 ? "まず" : "その下に" : lang === "zh" ? i === 0 ? "首先" : "其下方" : lang === "ko" ? i === 0 ? "먼저" : "그 아래에" : i === 0 ? "First" : "Below that";
        if (grid) {
            lines.push(`${pad}- ${gridText(grid, where, lang)}`);
            i += grid.rows.length - 1;
            continue;
        }
        /* a part that partly covers an earlier sibling is drawn on top of it */ const overlaps = [];
        if (row.length === 1) {
            for (const other of nodes){
                if (other === first || nodes.indexOf(other) > nodes.indexOf(first)) continue;
                const ov = overlapArea(other.bb, first.bb);
                if (ov > 0 && ov >= area(first.bb) * 0.25 && !contains(other.bb, first.bb)) overlaps.push(groupName(other.g, lang));
            }
        }
        let line = rowText(row, where, lang, box);
        if (overlaps.length) {
            const o = overlaps.join(lang === "en" ? " and " : lang === "ko" ? ", " : "、");
            line = lang === "ja" ? `${line.replace(/。$/, "")}（${o}の上に一部重ねて前面に描画）。` : lang === "zh" ? `${line.replace(/。$/, "")}（部分覆盖在${o}之上，绘制在前面）。` : lang === "ko" ? `${line.replace(/\.$/, "")}(${o} 위에 일부 겹쳐 앞쪽에 그림).` : `${line.replace(/\.$/, "")} (partly overlapping ${o}, drawn on top).`;
        }
        lines.push(`${pad}- ${line}`);
        for (const n of row){
            if (!n.children.length) continue;
            const name = groupName(n.g, lang);
            lines.push(`${pad}  - ${lang === "ja" ? `${name}の中には次を重ねて配置します（ボックス側を背景にし、以下はその前面に載せる。位置はボックス内での相対位置）:` : lang === "zh" ? `${name}内部叠放以下内容（以容器为背景，下列组件绘制在其前面，位置为容器内的相对位置）：` : lang === "ko" ? `${name} 안에 다음 항목을 겹쳐 배치합니다(컨테이너를 배경으로 하고 다음 부품은 그 앞에 배치하며, 위치는 컨테이너 내부 기준):` : `Inside ${name}, layered on top of it (the container is the background; positions are relative to it):`}`);
            describeNodes(lines, n.children, n.bb, widths, lang, depth + 2, false);
        }
    }
}
const RAIL_LEAD = {
    ja: "左端に",
    en: "Along the left edge: ",
    zh: "左缘：",
    ko: "왼쪽 가장자리에 "
};
const WIDE_RAIL_STYLE = {
    ja: "M3 Expressive ナビゲーションレール: 折りたたみ時は幅 96dp、アイコンの下にラベル。展開時は幅 220dp、高さ 56dp の項目内でアイコンとラベルを横並びにし、間隔は 8dp。既存のトップアプリバーに合わせ、両モードの開閉状態すべてで背景は surfaceContainer。選択項目は secondaryContainer のピル型インジケータ、アイコンは onSecondaryContainer、ラベルは secondary を優先し、実際の背景（折りたたみ時は surfaceContainer、展開時は secondaryContainer）とのコントラストが 4.5:1 未満なら、それぞれ onSurface / onSecondaryContainer を使う。上部のメニューボタンで開閉する。非モーダル型は本文の横に配置し、モーダル型は展開時にスクリムとともに本文に重ね、背景操作を遮断する。スクリムのタップまたは Escape で閉じる。",
    en: "M3 Expressive navigation rail: 96dp wide when collapsed, with labels below icons. Expanded width is 220dp, with 56dp-high destinations and horizontal icon/label rows separated by 8dp. Match the existing top app bar with a surfaceContainer background in both modes, whether collapsed or expanded. The selected destination uses a secondaryContainer pill, onSecondaryContainer icon, and a label that prefers secondary. If its contrast against the actual background (surfaceContainer when collapsed, secondaryContainer when expanded) is below 4.5:1, use onSurface / onSecondaryContainer respectively. A top menu button toggles expansion. The non-modal variant sits beside the content; the modal variant overlays it with a scrim when expanded and blocks background interaction. Dismiss with a scrim tap or Escape.",
    zh: "M3 Expressive 侧边导航栏：折叠宽 96dp，标签位于图标下方。展开宽 220dp，项目高 56dp，图标与标签横向排列，间距 8dp。沿用现有顶部应用栏配色，两种模式在折叠与展开时均使用 surfaceContainer 背景。选中项用 secondaryContainer 胶囊指示器，图标为 onSecondaryContainer，文字优先使用 secondary；若与实际背景（折叠为 surfaceContainer，展开为 secondaryContainer）的对比度低于 4.5:1，则分别使用 onSurface / onSecondaryContainer。顶部菜单按钮切换展开与折叠。非模态型位于内容旁；模态型展开时带遮罩覆盖内容并阻止背景交互，点击遮罩或按 Escape 关闭。",
    ko: "M3 Expressive 내비게이션 레일: 접으면 너비 96dp, 아이콘 아래에 레이블을 배치한다. 펼치면 너비 220dp, 항목 높이 56dp, 아이콘과 레이블을 8dp 간격으로 가로 배치한다. 기존 상단 앱 바와 맞추어 두 모드의 접힌 상태와 펼친 상태 모두 surfaceContainer 배경을 사용한다. 선택 항목은 secondaryContainer 알약 표시기, onSecondaryContainer 아이콘, 레이블은 secondary를 우선 사용한다. 실제 배경(접힘: surfaceContainer, 펼침: secondaryContainer)과의 대비가 4.5:1 미만이면 각각 onSurface / onSecondaryContainer를 사용한다. 상단 메뉴 버튼으로 펼치기와 접기를 전환한다. 비모달은 콘텐츠 옆에 배치하고 모달은 펼칠 때 스크림과 함께 콘텐츠를 덮어 배경 조작을 차단한다. 스크림을 탭하거나 Escape를 누르면 닫힌다."
};
function describeScreen(lines, groups, frameRect, widths, lang) {
    if (!groups.length) return;
    /* a navigation rail runs the full height, so it is written first, on its own; the
   * rest of the screen is then read beside it in rows as usual */ const rails = groups.filter((g)=>g.items.length === 1 && g.items[0].kind === "navRail");
    for (const g of rails)lines.push(`- ${RAIL_LEAD[lang]}${itemText(g.items[0], lang)}${lang === "ja" || lang === "zh" ? "。" : "."}`);
    const rest = rails.length ? groups.filter((g)=>!rails.includes(g)) : groups;
    if (!rest.length) return;
    const roots = layoutTree(rest, widths);
    describeNodes(lines, roots, frameRect, widths, lang, 0, true);
}
/* ---------- color palette ---------- */ function paletteLines(p) {
    const row = (pairs)=>`- ${pairs.map(([k, v])=>`${k} ${v}`).join(" / ")}`;
    return [
        row([
            [
                "primary",
                p.primary
            ],
            [
                "onPrimary",
                p.onPrimary
            ],
            [
                "primaryContainer",
                p.primaryContainer
            ],
            [
                "onPrimaryContainer",
                p.onPrimaryContainer
            ]
        ]),
        row([
            [
                "secondary",
                p.secondary
            ],
            [
                "secondaryContainer",
                p.secondaryContainer
            ],
            [
                "onSecondaryContainer",
                p.onSecondaryContainer
            ],
            [
                "tertiaryContainer",
                p.tertiaryContainer
            ],
            [
                "onTertiaryContainer",
                p.onTertiaryContainer
            ]
        ]),
        row([
            [
                "surface",
                p.surface
            ],
            [
                "surfaceContainerLow",
                p.surfaceContainerLow
            ],
            [
                "surfaceContainer",
                p.surfaceContainer
            ],
            [
                "surfaceContainerHigh",
                p.surfaceContainerHigh
            ],
            [
                "surfaceContainerHighest",
                p.surfaceContainerHighest
            ]
        ]),
        row([
            [
                "onSurface",
                p.onSurface
            ],
            [
                "onSurfaceVariant",
                p.onSurfaceVariant
            ],
            [
                "outline",
                p.outline
            ],
            [
                "outlineVariant",
                p.outlineVariant
            ]
        ]),
        row([
            [
                "inverseSurface",
                p.inverseSurface
            ],
            [
                "inverseOnSurface",
                p.inverseOnSurface
            ],
            [
                "inversePrimary",
                p.inversePrimary
            ]
        ]),
        row([
            [
                "error",
                p.error
            ],
            [
                "onError",
                p.onError
            ],
            [
                "errorContainer",
                p.errorContainer
            ],
            [
                "onErrorContainer",
                p.onErrorContainer
            ]
        ])
    ];
}
/* ---------- per-component style notes ---------- */ /** How each kind should look; only the kinds on the canvas are written out.
 */ const STYLE_NOTES = {
    ja: {
        button: "ボタン: 高さ 56dp のミディアムサイズで、角は完全な丸（ピル型）。塗りつぶしは primary、トーナルは secondaryContainer、アウトラインは outline の 1dp 枠。横に連結したボタングループは 3dp の隙間で並べ、隣り合う内側の角だけ 8dp に小さくし、外側の角は丸のままにする（M3 Expressive の Connected button group）。高さを指定されたボタンは M3 のサイズ（XS 32dp / S 40dp / M 56dp / L 96dp / XL 136dp）に従い、左右の余白・文字・アイコンをそのサイズのものにし、角丸は高さの半分にする。",
        iconButton: "アイコンボタン: 既定は 56dp の円形（M3 の M サイズ）。大きさを指定されたものは M3 のサイズ（XS 32dp / S 40dp / M 56dp / L 96dp / XL 136dp）に従い、アイコンもそのサイズのものにする。塗りつぶし・トーナル・アウトライン・スタンダードを指定通りに使い分ける。連結したアイコンボタン群は Connected button group として実装する。",
        carousel: "カルーセル: M3 の Carousel（Compose は HorizontalMultiBrowseCarousel / HorizontalUncontainedCarousel、Web は横スクロールのカード列）。カードは角丸 16dp のコンテナで、マルチブラウズとヒーローでは先頭のカードが大きく後ろほど小さく、均等では全カードが同じ幅、全画面では 1 枚が行を占める。画面の左右端まで使い、先頭の余白は 16dp、カード間は 8dp。カードの見出しはカードの下端に載せる。",
        datePicker: "日付ピッカー: M3 の DatePicker。モーダルは見出し・月の切り替え・曜日の行・日付のグリッド・キャンセル／OK を持つ角丸 28dp のダイアログ、ドッキングは入力欄の下に付く同じカレンダー、入力欄のみは末尾にカレンダーのアイコンが付いたアウトラインのテキストフィールド。選択日は primary の円で示す。",
        timePicker: "時刻ピッカー: M3 の TimePicker。時と分を 2 つの大きな数字プレート（選択中は primaryContainer、他は surfaceContainerHighest）と AM/PM の縦の切り替えで示す。時計盤は surfaceContainerHighest の円に primary の針、入力欄は数字を直接打ち込む。下部にキャンセル／OK と、時計盤／キーボードを切り替えるアイコン。",
        fab: "FAB: 通常は 56dp・角丸 16dp、大サイズは 96dp・角丸 28dp、小サイズは 40dp・角丸 12dp。トーナルは primaryContainer、塗りつぶしは primary。画面端から 16dp 離して浮かせ、影は Level 3。",
        extendedFab: "拡張 FAB: 高さ 56dp（M3 の 3 サイズは 56 / 80 / 96dp、角丸と文字もそれに合わせる）、角丸 16dp、左にアイコン・右にラベル。",
        chip: "チップ: 既定は高さ 32dp、角丸 8dp。高さを指定されたチップは M3 のサイズ（XS 32dp / S 40dp / M 56dp）に従い、左右の余白・文字・アイコンをそのサイズのものにする。選択状態は secondaryContainer で塗り、先頭にチェックアイコンを出す。横に連結したチップグループは 3dp の隙間で並べ、隣り合う内側の角だけ 4dp に小さくし、外側の角は丸のままにして、1 つの高さを共有する。はみ出す場合は横スクロール。",
        topAppBar: "トップアプリバー: 高さ 64dp、背景は surface。背景はステータスバーの後ろまで伸ばし、その分（システムインセット）だけ上に余白を取る。タイトルは titleLarge、左右のアイコンボタンは 48dp。スクロール時に surfaceContainer へ色が変わる標準の挙動でよい。ミディアム／ラージと指定されたバーは M3 の flexible top app bar で、高さ 112dp／152dp、アイコンは上 64dp の列に、タイトルは下段に独立した行（headlineSmall／headlineMedium）で置き、スクロールで小さいバーに縮む。",
        bottomNav: "ナビゲーションバー: 高さ 80dp、背景は surfaceContainer。背景は画面下端のジェスチャーナビゲーション領域まで伸ばし、その分（システムインセット）だけ下に余白を取る。選択中の項目は secondaryContainer のピル型インジケータ（幅 64dp・高さ 32dp）で示し、アイコンは塗りつぶし、ラベルは labelMedium。",
        navRail: "ナビゲーションレール: 幅 80dp、画面の左端に上から下まで、背景は surfaceContainer。項目は上から縦に並べ、選択中の項目は secondaryContainer のピル型インジケータ（幅 56dp・高さ 32dp）で示し、アイコンは塗りつぶし、その下に labelMedium のラベル。本文はレールの右に置く。",
        searchBar: "検索バー: 高さ 56dp、角は完全な丸、背景は surfaceContainerHigh（枠線スタイルは surface に outline の枠）。先頭に検索アイコン、末尾に指定のアイコン。",
        card: "カード: 角丸 20dp。画像領域は各カードの記述に従い、上部・下部・先頭側・末尾側・背景全面のいずれかに置く（背景の場合はテキストの側からスクリムをかける。明るい文字なら黒、暗い文字なら白のフェード）。画像はアスペクト比を保って中央でクロップし、領域いっぱいに表示する。塗りつぶしは surfaceContainerHighest、エレベーテッドは surfaceContainerLow に Level 1 の影、アウトラインは outlineVariant の 1dp 枠。見出しは titleMedium、本文は bodyMedium。内側余白は 20dp、見出しと本文の間は 4dp、画像とテキストの間は 12dp。",
        listItem: "リスト項目: 高さ 72dp、先頭アイコンは 24dp（指定がなければ primaryContainer の 40dp の円の上）、主テキストは bodyLarge、サブテキストは bodyMedium の onSurfaceVariant。背景は指定のロール（指定がなければ surfaceContainerLow）。上下に連結したリストは 3dp の隙間で並べ、外側の角を 28dp、隣り合う内側の角を 8dp にする（M3 Expressive のリスト表現）。",
        dialog: "ダイアログ: 幅 312dp、角丸 28dp、背景は surfaceContainerHigh。見出しは headlineSmall、本文は bodyMedium、下部右寄せにテキストボタン。",
        snackbar: "スナックバー: 高さ 48dp、角丸 8dp、背景は inverseSurface、文字は inverseOnSurface。アクションは inversePrimary のテキストボタン。画面下部から 16dp 上に表示し、数秒で消える。",
        textField: "テキスト入力: 高さ 56dp。アウトラインは角丸 16dp・枠 outline、塗りつぶしは surfaceContainerHighest に下線。フォーカス時はラベルが上に浮き、枠が primary の 2dp になる。補助テキストは bodySmall で下に出す。",
        select: "ドロップダウン: テキスト入力と同じ外観（高さ 56dp、アウトラインまたは塗りつぶし）で、末尾に arrow_drop_down アイコン。Exposed dropdown menu として実装し、タップで下にメニュー（surfaceContainer、角丸 4dp、項目の高さ 48dp）を開き、選んだ値を欄に表示する。",
        switch: "スイッチ: M3 標準サイズ（トラック 52×32dp）。オンは primary、オフは surfaceContainerHighest に outline の枠。ラベルは左、スイッチは右端。",
        checkbox: "チェックボックス: 18dp の四角、角丸 2dp、チェック時は primary。ラベルは右に bodyLarge。",
        slider: "スライダー: M3 Expressive の太いトラック（高さ 16dp）と縦長のハンドル（幅 4dp・高さ 44dp）。ハンドルの左は primary、右は secondaryContainer。ドラッグで値を変えられる。",
        text: "テキスト: 指定の sp サイズ。見出しは onSurface、説明文は onSurfaceVariant、行間はサイズの 1.3〜1.5 倍。タップしてもリップルなどの反応は付けない。",
        image: "画像: 角丸 20dp、指定がなければ surfaceContainerHighest のプレースホルダー。アスペクト比を保って中央でクロップ。",
        camera: "カメラプレビュー: 角丸 20dp。端末のカメラ映像をこの領域に表示し、権限が無い間は inverseSurface の暗い面にカメラアイコンを置く。",
        map: "地図: 角丸 20dp。地図 SDK のビューをこの領域に置き、読み込み中は surfaceContainerHighest に地図アイコンを置く。",
        divider: "区切り線: 1dp の outlineVariant、左右に 16dp の余白。",
        box: "ボックス: 指定した背景色と角丸を持つ単なるコンテナ。中に重ねる部品の背景として使い、独自の挙動は付けない。",
        bottomSheet: "ボトムシート: ModalBottomSheet として下から出す。上部中央にドラッグハンドルを置き、指定した背景色と上の角丸を使い、下の角は直角のまま。",
        loadingIndicator: "ローディング表示: M3 Expressive の形が変化する LoadingIndicator（回転しながら多角形の間を変形するもの）を使う。コンテナ付きは secondaryContainer の円の中に置く。",
        linearProgress: "リニアプログレス: 指定された太さ（指定がなければ 4dp）で、端を丸くする。波形指定のときは M3 Expressive の wavy スタイルにする。トラックは secondaryContainer、進捗は primary。",
        circularProgress: "サーキュラープログレス: 指定された太さ（指定がなければ 4dp）で、端を丸くする。波形指定のときは M3 Expressive の wavy スタイルにする。",
        splitButton: "スプリットボタン: M3 Expressive の SplitButton。左のセグメントが主アクション、右の矢印セグメントがメニューを開く。2 つのセグメントは 2dp の隙間で並べ、外側の角は完全な丸、隣り合う内側の角は 8dp。高さはボタンと同じ XS 32 / S 40 / M 56 / L 96 / XL 136dp のスケールに従い、余白とアイコンもその高さに合わせる。メニューを開くと矢印が回転し、セグメントの角が丸くなる。",
        fabMenu: "FAB メニュー: M3 Expressive の FloatingActionButtonMenu。閉じているときは通常の FAB、タップすると項目が上に向かって順に現れ、FAB のアイコンが close に変わる。各項目は高さ 56dp、角は完全な丸、アイコンとラベル付きで右揃え。",
        toolbar: "フローティングツールバー: M3 Expressive の HorizontalFloatingToolbar。高さ 64dp、角は完全な丸、画面下端から 16dp 上に浮かせ、内容の上に重ねる。スタンダードは surfaceContainer、ビブラントは primaryContainer。中のアイコンボタンは 48dp。",
        tabs: "タブ: M3 のプライマリタブ。高さ 48dp、ラベルは titleSmall、選択中のタブは primary の文字とラベル幅の 3dp インジケータ（上の角丸）、下に outlineVariant の区切り線。タブをタップすると内容が切り替わる。",
        radio: "ラジオボタン: 20dp の円。選択時は primary の枠と中央の点、未選択は onSurfaceVariant の枠。同じグループ内では 1 つだけ選べる。ラベルは右に bodyLarge。"
    },
    en: {
        button: "Buttons: medium size, 56dp tall, fully rounded (pill). Filled uses primary, tonal uses secondaryContainer, outlined has a 1dp outline border. A connected button group is a row with 3dp gaps where only the inner adjoining corners shrink to 8dp and the outer corners stay round (the M3 Expressive connected button group). A button given a height follows the M3 size scale (XS 32dp, S 40dp, M 56dp, L 96dp, XL 136dp): take the side padding, the label size and the icon size of that size, and keep the corner radius at half the height.",
        iconButton: "Icon buttons: 56dp circles by default (M3's medium size); one given a size follows the M3 size scale (XS 32dp, S 40dp, M 56dp, L 96dp, XL 136dp), with the icon of that size. Filled / tonal / outlined / standard as specified. A connected run of icon buttons is a connected button group.",
        carousel: "Carousel: the M3 Carousel (HorizontalMultiBrowseCarousel / HorizontalUncontainedCarousel in Compose; a sideways-scrolling row of cards on the web). Cards are containers with 16dp corners; multi-browse and hero show the first card large and the rest smaller, uncontained shows every card at one width, full-screen gives one card the row. It runs edge to edge with a 16dp start margin and 8dp between cards. A card's title sits along its bottom edge.",
        datePicker: "Date picker: the M3 DatePicker. The modal is a 28dp-cornered dialog with a headline, the month switcher, the weekday row, the day grid and Cancel / OK; docked is the same calendar hanging under a text field; input only is an outlined text field with a calendar icon at its end. The selected day is a primary circle.",
        timePicker: "Time picker: the M3 TimePicker. The hour and minute are two large number plates (the selected one primaryContainer, the other surfaceContainerHighest) beside a vertical AM/PM toggle. The dial is a surfaceContainerHighest circle with a primary hand; the input layout types the numbers directly. Cancel / OK sit at the bottom with an icon that switches between dial and keyboard.",
        fab: "FAB: 56dp with 16dp corners; large is 96dp with 28dp corners; small is 40dp with 12dp corners. Tonal uses primaryContainer, filled uses primary. Float it 16dp from the screen edge with a level 3 shadow.",
        extendedFab: "Extended FAB: 56dp tall (M3's three sizes are 56 / 80 / 96dp, with the corners and the label growing to match), 16dp corners, icon on the left and label on the right.",
        chip: "Chips: 32dp tall by default, with 8dp corners. A chip given a height follows the M3 size scale (XS 32dp, S 40dp, M 56dp): take the side padding, the label size and the icon size of that size. The selected state fills with secondaryContainer and shows a leading check icon. A connected chip group is a row with 3dp gaps where only the inner adjoining corners shrink to 4dp, the outer corners stay round, and every chip shares one height; it scrolls horizontally when it overflows.",
        topAppBar: "Top app bar: 64dp tall on surface, with its background extended behind the status bar (pad the top by the system inset). Title in titleLarge, 48dp icon buttons on each side. A bar named medium or large is M3's flexible top app bar: 112dp or 152dp tall, the icons in the top 64dp row and the title on its own line at the foot (headlineSmall / headlineMedium), collapsing to the small bar on scroll. The standard tint to surfaceContainer on scroll is fine.",
        bottomNav: "Navigation bar: 80dp tall on surfaceContainer, with its background extended down through the gesture navigation area (pad the bottom by the system inset). The active destination shows a secondaryContainer pill indicator (64×32dp), a filled icon and a labelMedium label.",
        navRail: "Navigation rail: 80dp wide on surfaceContainer, running the full height of the left edge. Destinations stack from the top; the active one shows a secondaryContainer pill indicator (56×32dp) with a filled icon and a labelMedium label below it. The content sits to the right of the rail.",
        searchBar: "Search bar: 56dp tall, fully rounded, on surfaceContainerHigh (an outlined one sits on surface with an outline border), with a leading search icon and the specified trailing icon.",
        card: "Cards: 20dp corners. Place each card's image area where its line says — on top, along the bottom, filling the leading or trailing side, or as a full-bleed background (a scrim fades in from the text's side: dark under light text, light under dark text). Images keep their aspect ratio and are center-cropped to fill their area. Filled uses surfaceContainerHighest, elevated uses surfaceContainerLow with a level 1 shadow, outlined has a 1dp outlineVariant border. Headline in titleMedium, body in bodyMedium. 20dp padding, 4dp between headline and body, 12dp between the image and the text.",
        listItem: "List items: 72dp tall, 24dp leading icon (on a 40dp primaryContainer circle unless stated), headline in bodyLarge, supporting text in bodyMedium on onSurfaceVariant, on the specified background role (surfaceContainerLow unless stated). A stacked list is a vertical run with 3dp gaps, 28dp outer corners and 8dp inner corners (the M3 Expressive list treatment).",
        dialog: "Dialogs: 312dp wide, 28dp corners, on surfaceContainerHigh. Headline in headlineSmall, body in bodyMedium, text buttons aligned right at the bottom.",
        snackbar: "Snackbar: 48dp tall, 8dp corners, inverseSurface background with inverseOnSurface text; the action is an inversePrimary text button. Show it 16dp above the bottom edge and dismiss after a few seconds.",
        textField: "Text fields: 56dp tall. Outlined has 16dp corners and an outline border; filled sits on surfaceContainerHighest with an underline. On focus the label floats up and the border becomes 2dp primary. Supporting text goes underneath in bodySmall.",
        select: "Dropdowns: look like a text field (56dp tall, outlined or filled) with a trailing arrow_drop_down icon. Implement as an exposed dropdown menu: tapping opens a menu below (surfaceContainer, 4dp corners, 48dp items) and the chosen value shows in the field.",
        switch: "Switches: standard M3 size (52×32dp track). On is primary; off is surfaceContainerHighest with an outline border. Label on the left, switch at the trailing edge.",
        checkbox: "Checkboxes: 18dp square with 2dp corners, primary when checked, label on the right in bodyLarge.",
        slider: "Sliders: the M3 Expressive thick track (16dp) with a tall handle (4×44dp). Primary on the left of the handle, secondaryContainer on the right. Dragging changes the value.",
        text: "Text: the specified sp size; headings on onSurface, descriptions on onSurfaceVariant, line height 1.3–1.5× the size. No ripple or press feedback on tap.",
        image: "Images: 20dp corners; a surfaceContainerHighest placeholder when none is provided. Keep the aspect ratio and center-crop.",
        camera: "Camera preview: 20dp corners. Show the device camera feed in this area; while permission is missing, show a camera icon on a dark inverseSurface pane.",
        map: "Map: 20dp corners. Place the map SDK view in this area; while it loads, show a map icon on surfaceContainerHighest.",
        divider: "Dividers: 1dp outlineVariant with 16dp horizontal insets.",
        box: "Boxes: plain containers with the specified background token and corner radii. They are the background for whatever is layered on them and have no behavior of their own.",
        bottomSheet: "Bottom sheets: modal bottom sheets that slide up from the bottom edge, with a drag handle centered at the top, the specified background token and top corner radius; the bottom corners stay square.",
        loadingIndicator: "Loading: use the M3 Expressive shape-morphing LoadingIndicator (the rotating polygon that morphs between shapes). The contained variant sits inside a secondaryContainer circle.",
        linearProgress: "Linear progress: use the stated track thickness (4dp unless stated) with round caps, and the M3 Expressive wavy style when specified. Track is secondaryContainer, progress is primary.",
        circularProgress: "Circular progress: use the stated track thickness (4dp unless stated) with round caps, and the M3 Expressive wavy style when specified.",
        splitButton: "Split button: the M3 Expressive SplitButton. The leading segment is the main action and the trailing arrow segment opens a menu. The two segments sit 2dp apart with fully rounded outer corners and 8dp inner corners. The height follows the same XS 32 / S 40 / M 56 / L 96 / XL 136dp scale a button does, with the padding and icon that height asks for. Opening the menu rotates the arrow and rounds the segment.",
        fabMenu: "FAB menu: the M3 Expressive FloatingActionButtonMenu. Closed, it is a normal FAB; tapping it reveals the items upward one after another and the FAB icon becomes close. Each item is 56dp tall, fully rounded, right-aligned with an icon and a label.",
        toolbar: "Floating toolbar: the M3 Expressive HorizontalFloatingToolbar. 64dp tall, fully rounded, floating 16dp above the bottom edge over the content. Standard uses surfaceContainer, vibrant uses primaryContainer. The icon buttons inside are 48dp.",
        tabs: "Tabs: M3 primary tabs. 48dp tall, labels in titleSmall; the selected tab has primary text and a 3dp label-width indicator with rounded top corners, with an outlineVariant divider underneath. Tapping a tab switches the content.",
        radio: "Radio buttons: 20dp circles. Selected shows a primary ring with a center dot, unselected an onSurfaceVariant ring. Only one in a group can be selected. Label on the right in bodyLarge."
    },
    zh: {
        button: "按钮：中号，高 56dp，完全圆角（胶囊形）。填充用 primary，色调用 secondaryContainer，描边用 1dp 的 outline 边框。横向相连的按钮组以 3dp 间距排列，只把相邻的内侧圆角缩小到 8dp，外侧保持圆角（M3 Expressive 的 Connected button group）。指定了高度的按钮遵循 M3 尺寸（XS 32dp / S 40dp / M 56dp / L 96dp / XL 136dp）：左右内边距、文字和图标取该尺寸的值，圆角为高度的一半。",
        iconButton: "图标按钮：默认 56dp 圆形（M3 的 M 尺寸）；指定了尺寸的按 M3 尺寸（XS 32dp / S 40dp / M 56dp / L 96dp / XL 136dp）实现，图标也取该尺寸。按指定使用填充／色调／描边／标准样式。相连的图标按钮组实现为 Connected button group。",
        carousel: "轮播：M3 的 Carousel（Compose 为 HorizontalMultiBrowseCarousel / HorizontalUncontainedCarousel，Web 为横向滚动的卡片行）。卡片为圆角 16dp 的容器；多浏览与主图布局中首张卡片最大、越靠后越小，等宽滚动中每张卡片同宽，全屏布局中一张卡片占满整行。贴近屏幕左右边缘，起始留白 16dp，卡片间距 8dp。卡片标题放在卡片底部。",
        datePicker: "日期选择器：M3 的 DatePicker。模态形式是圆角 28dp 的对话框，含标题、月份切换、星期行、日期网格与取消／确定；停靠形式是挂在输入框下方的同一日历；仅输入框形式是末尾带日历图标的描边文本框。选中日期用 primary 圆形标出。",
        timePicker: "时间选择器：M3 的 TimePicker。小时与分钟是两块大数字面板（选中的用 primaryContainer，另一块用 surfaceContainerHighest），旁边是竖向的 AM/PM 切换。表盘是 surfaceContainerHighest 的圆形加 primary 指针；输入框形式直接输入数字。底部有取消／确定以及切换表盘／键盘的图标。",
        fab: "FAB：常规 56dp、圆角 16dp；大尺寸 96dp、圆角 28dp；小尺寸 40dp、圆角 12dp。色调用 primaryContainer，填充用 primary。距屏幕边缘 16dp 悬浮，阴影为 Level 3。",
        extendedFab: "扩展 FAB：高 56dp（M3 的三种尺寸为 56 / 80 / 96dp，圆角与文字随之变化），圆角 16dp，左侧图标、右侧标签。",
        chip: "标签片：默认高 32dp，圆角 8dp。指定了高度的标签片遵循 M3 尺寸（XS 32dp / S 40dp / M 56dp）：左右内边距、文字和图标取该尺寸的值。选中状态用 secondaryContainer 填充并在前面显示勾选图标。横向相连的标签片组以 3dp 间距排列，只把相邻的内侧圆角缩小到 4dp，外侧保持圆角，并共享同一高度；溢出时横向滚动。",
        topAppBar: "顶部应用栏：高 64dp，背景为 surface。背景延伸到状态栏后面，并按系统内边距在顶部留出空间。标题用 titleLarge，左右图标按钮 48dp。滚动时变为 surfaceContainer 的标准行为即可。指定为中号／大号的应用栏是 M3 的 flexible top app bar：高 112dp／152dp，图标位于顶部 64dp 一行，标题单独占底部一行（headlineSmall／headlineMedium），滚动时收缩为小号应用栏。",
        bottomNav: "导航栏：高 80dp，背景为 surfaceContainer。背景延伸到屏幕底部的手势导航区域，并按系统内边距在底部留出空间。选中项用 secondaryContainer 的胶囊指示器（宽 64dp、高 32dp）表示，图标为填充样式，标签用 labelMedium。",
        navRail: "侧边导航栏：宽 80dp，贴着屏幕左缘通高，背景为 surfaceContainer。项目从上往下排列，选中项用 secondaryContainer 的胶囊指示器（宽 56dp、高 32dp）表示，图标为填充样式，下方为 labelMedium 标签。内容放在导航栏右侧。",
        searchBar: "搜索栏：高 56dp，完全圆角，背景为 surfaceContainerHigh（描边样式为 surface 背景加 outline 边框）。左侧显示搜索图标，右侧显示指定图标。",
        card: "卡片：圆角 20dp。图片区域按每张卡片的描述放在顶部、底部、左侧、右侧或作为整卡背景（背景时从文字一侧加渐变遮罩：浅色文字用黑色，深色文字用白色）。图片保持宽高比并居中裁剪以填满区域。填充用 surfaceContainerHighest，浮起用 surfaceContainerLow 加 Level 1 阴影，描边用 1dp 的 outlineVariant 边框。标题用 titleMedium，正文用 bodyMedium。内边距 20dp，标题与正文间距 4dp，图片与文字间距 12dp。",
        listItem: "列表项：高 72dp，左侧图标 24dp（未指定时放在 40dp 的 primaryContainer 圆形上），主文本用 bodyLarge，辅助文本用 bodyMedium 的 onSurfaceVariant，背景为指定的颜色角色（未指定则为 surfaceContainerLow）。上下相连的列表以 3dp 间距排列，外侧圆角 28dp，相邻内侧圆角 8dp（M3 Expressive 的列表样式）。",
        dialog: "对话框：宽 312dp，圆角 28dp，背景为 surfaceContainerHigh。标题用 headlineSmall，正文用 bodyMedium，底部右对齐放文字按钮。",
        snackbar: "消息条：高 48dp，圆角 8dp，背景为 inverseSurface，文字为 inverseOnSurface。操作为 inversePrimary 的文字按钮。显示在距屏幕底部 16dp 处，数秒后消失。",
        textField: "文本输入框：高 56dp。描边样式圆角 16dp、边框为 outline；填充样式背景为 surfaceContainerHighest 并带下划线。聚焦时标签上浮，边框变为 2dp 的 primary。辅助文本用 bodySmall 显示在下方。",
        select: "下拉菜单：外观与文本输入框相同（高 56dp，描边或填充），末尾带 arrow_drop_down 图标。按 exposed dropdown menu 实现：点击后在下方展开菜单（surfaceContainer，圆角 4dp，项高 48dp），所选值显示在输入框中。",
        switch: "开关：M3 标准尺寸（轨道 52×32dp）。开为 primary，关为 surfaceContainerHighest 加 outline 边框。标签在左，开关靠右。",
        checkbox: "复选框：18dp 方形，圆角 2dp，勾选时为 primary。标签在右侧，用 bodyLarge。",
        slider: "滑块：M3 Expressive 的粗轨道（高 16dp）和竖长手柄（宽 4dp、高 44dp）。手柄左侧为 primary，右侧为 secondaryContainer。可拖动改变数值。",
        text: "文本：指定的 sp 字号。标题用 onSurface，说明文字用 onSurfaceVariant，行高为字号的 1.3〜1.5 倍。点击时不加涟漪等反馈。",
        image: "图片：圆角 20dp，未指定时使用 surfaceContainerHighest 的占位符。保持宽高比并居中裁剪。",
        camera: "相机预览：圆角 20dp。在此区域显示设备相机画面；未获得权限时，在 inverseSurface 的深色面板上显示相机图标。",
        map: "地图：圆角 20dp。在此区域放置地图 SDK 视图；加载期间在 surfaceContainerHighest 上显示地图图标。",
        divider: "分割线：1dp 的 outlineVariant，左右留 16dp 边距。",
        box: "容器框：只是带指定背景色和圆角的容器，作为叠放在其上的组件的背景，本身没有任何行为。",
        bottomSheet: "底部面板：做成从底部滑出的模态底部面板（ModalBottomSheet），顶部居中放拖动条，使用指定的背景色和上方圆角，下方保持直角。",
        loadingIndicator: "加载指示：使用 M3 Expressive 形状变化的 LoadingIndicator（旋转并在多边形之间变形）。带容器的放在 secondaryContainer 的圆形中。",
        linearProgress: "线性进度条：使用指定的轨道粗细（未指定则为 4dp）和圆形端帽。指定波浪形时使用 M3 Expressive 的 wavy 样式。轨道为 secondaryContainer，进度为 primary。",
        circularProgress: "圆形进度条：使用指定的轨道粗细（未指定则为 4dp）和圆形端帽。指定波浪形时使用 M3 Expressive 的 wavy 样式。",
        splitButton: "拆分按钮：M3 Expressive 的 SplitButton。左段为主操作，右侧箭头段打开菜单。两段间距 2dp，外侧完全圆角，相邻内侧圆角 8dp。高度沿用按钮的 XS 32 / S 40 / M 56 / L 96 / XL 136dp 尺寸，内边距与图标随高度而定。打开菜单时箭头旋转、段变为圆形。",
        fabMenu: "FAB 菜单：M3 Expressive 的 FloatingActionButtonMenu。关闭时是普通 FAB，点击后各项依次向上展开，FAB 图标变为 close。每项高 56dp，完全圆角，带图标和标签并右对齐。",
        toolbar: "悬浮工具栏：M3 Expressive 的 HorizontalFloatingToolbar。高 64dp，完全圆角，悬浮在距屏幕底部 16dp 处并覆盖在内容之上。标准样式用 surfaceContainer，鲜明样式用 primaryContainer。内部图标按钮 48dp。",
        tabs: "标签页：M3 的主标签页。高 48dp，标签用 titleSmall，选中项文字为 primary 并带与标签同宽的 3dp 指示条（上方圆角），下方为 outlineVariant 分割线。点击标签切换内容。",
        radio: "单选按钮：20dp 圆形。选中时为 primary 的圆环加中心圆点，未选中为 onSurfaceVariant 圆环。同一组内只能选一个。标签在右侧，用 bodyLarge。"
    },
    ko: {
        button: "버튼: 높이 56dp의 중간 크기, 완전 둥근 알약 모양. 채움은 primary, 토널은 secondaryContainer, 윤곽선은 1dp outline 테두리를 사용한다. 연결 버튼 그룹은 간격 3dp, 맞닿는 안쪽 모서리 8dp, 바깥쪽 모서리는 둥글게 유지한다. 높이가 지정된 버튼은 M3 크기(XS 32dp / S 40dp / M 56dp / L 96dp / XL 136dp)를 따라 좌우 여백, 글자 크기, 아이콘 크기를 그 크기의 값으로 하고 모서리는 높이의 절반으로 한다.",
        navRail: "내비게이션 레일: 너비 80dp, 배경 surfaceContainer, 왼쪽 가장자리의 전체 높이를 채운다. 항목은 위에서부터 세로로 배치한다. 선택 항목은 secondaryContainer 알약 표시기(56×32dp), 채운 아이콘과 아래쪽 labelMedium 레이블로 표시한다. 콘텐츠는 레일 오른쪽에 배치한다.",
        iconButton: "아이콘 버튼: 기본 56dp 원형(M3 M 크기). 크기가 지정된 것은 M3 크기(XS 32dp / S 40dp / M 56dp / L 96dp / XL 136dp)를 따르고 아이콘도 그 크기로 한다. 지정된 채움, 토널, 윤곽선, 표준 스타일을 사용하며 연결된 아이콘 버튼은 Connected button group으로 구현한다.",
        carousel: "캐러셀: M3 Carousel(Compose는 HorizontalMultiBrowseCarousel / HorizontalUncontainedCarousel, 웹은 가로로 스크롤하는 카드 행). 카드는 모서리 16dp 컨테이너이며, 멀티 브라우즈와 히어로는 첫 카드가 크고 뒤로 갈수록 작아지고, 언컨테인드는 모든 카드가 같은 너비, 전체 화면은 카드 한 장이 행을 차지한다. 화면 좌우 끝까지 쓰고 시작 여백 16dp, 카드 간격 8dp. 카드 제목은 카드 아래쪽에 놓는다.",
        datePicker: "날짜 선택기: M3 DatePicker. 모달은 제목, 월 전환, 요일 행, 날짜 그리드, 취소 / 확인을 갖춘 모서리 28dp 대화상자이고, 도킹은 입력란 아래에 붙는 같은 달력, 입력란만은 끝에 달력 아이콘이 있는 윤곽선 텍스트 필드다. 선택한 날은 primary 원으로 표시한다.",
        timePicker: "시간 선택기: M3 TimePicker. 시와 분은 큰 숫자 판 두 개(선택된 쪽은 primaryContainer, 다른 쪽은 surfaceContainerHighest)와 세로 AM/PM 전환으로 보여 준다. 시계판은 surfaceContainerHighest 원에 primary 바늘, 입력란은 숫자를 직접 입력한다. 아래에 취소 / 확인과 시계판 / 키보드를 전환하는 아이콘을 둔다.",
        fab: "FAB: 기본 56dp/모서리 16dp, 대형 96dp/28dp, 소형 40dp/12dp. 토널은 primaryContainer, 채움은 primary를 사용하고 화면 가장자리에서 16dp 띄워 Level 3 그림자를 적용한다.",
        extendedFab: "확장 FAB: 높이 56dp(M3의 세 크기는 56 / 80 / 96dp이며 모서리와 글자도 이에 맞춘다), 모서리 16dp, 왼쪽에 아이콘, 오른쪽에 레이블을 둔다.",
        chip: "칩: 기본 높이 32dp, 모서리 8dp. 높이가 지정된 칩은 M3 크기(XS 32dp / S 40dp / M 56dp)를 따라 좌우 여백, 글자 크기, 아이콘 크기를 그 크기의 값으로 한다. 선택 상태는 secondaryContainer로 채우고 앞쪽에 체크 아이콘을 표시한다. 연결 칩 그룹은 간격 3dp, 맞닿는 안쪽 모서리 4dp, 바깥쪽 모서리는 둥글게 유지하며 하나의 높이를 공유하고, 넘치면 가로 스크롤한다.",
        topAppBar: "상단 앱 바: 높이 64dp, 배경 surface. 상태 표시줄 뒤까지 배경을 늘리고 시스템 인셋만큼 위쪽 여백을 둔다. 제목은 titleLarge, 양쪽 아이콘 버튼은 48dp를 사용한다. 중간/대형으로 지정된 바는 M3 flexible top app bar로 높이 112dp/152dp, 아이콘은 위 64dp 줄에, 제목은 아래 별도 줄(headlineSmall/headlineMedium)에 두고 스크롤하면 작은 바로 줄어든다.",
        bottomNav: "내비게이션 바: 높이 80dp, 배경 surfaceContainer. 제스처 내비게이션 영역까지 배경을 늘리고 시스템 인셋만큼 아래쪽 여백을 둔다. 선택 항목은 64×32dp secondaryContainer 알약 표시기, 채운 아이콘, labelMedium 레이블로 표시한다.",
        searchBar: "검색창: 높이 56dp, 완전 둥근 모서리, 배경 surfaceContainerHigh(윤곽선 스타일은 surface 배경에 outline 테두리). 앞쪽 검색 아이콘과 지정된 뒤쪽 아이콘을 둔다.",
        card: "카드: 모서리 20dp. 이미지 영역은 각 카드의 설명에 따라 위쪽·아래쪽·앞쪽·뒤쪽·배경 전체 중 한 곳에 배치한다(배경일 때는 텍스트 쪽에서 스크림을 넣는다. 밝은 텍스트에는 검정, 어두운 텍스트에는 흰색 페이드). 이미지는 비율을 유지한 채 가운데를 기준으로 잘라 영역을 채운다. 채움은 surfaceContainerHighest, 돌출은 surfaceContainerLow와 Level 1 그림자, 윤곽선은 1dp outlineVariant 테두리를 사용한다. 제목 titleMedium, 본문 bodyMedium. 안쪽 여백 20dp, 제목과 본문 사이 4dp, 이미지와 텍스트 사이 12dp.",
        listItem: "목록 항목: 높이 72dp, 앞쪽 아이콘 24dp(별도 지정이 없으면 40dp primaryContainer 원 위), 주 텍스트 bodyLarge, 보조 텍스트 bodyMedium/onSurfaceVariant. 연결 목록은 간격 3dp, 바깥 모서리 28dp, 안쪽 모서리 8dp.",
        dialog: "대화상자: 너비 312dp, 모서리 28dp, 배경 surfaceContainerHigh. 제목 headlineSmall, 본문 bodyMedium, 텍스트 버튼은 아래쪽 오른쪽 정렬.",
        snackbar: "스낵바: 높이 48dp, 모서리 8dp, inverseSurface 배경과 inverseOnSurface 텍스트. 동작은 inversePrimary 텍스트 버튼으로 하고 아래쪽에서 16dp 띄워 몇 초 뒤 닫는다.",
        textField: "텍스트 입력란: 높이 56dp. 윤곽선형은 모서리 16dp와 outline 테두리, 채움형은 surfaceContainerHighest 배경과 밑줄을 사용한다. 포커스 시 레이블을 올리고 테두리를 2dp primary로 바꾼다.",
        select: "드롭다운: 텍스트 입력란과 같은 외관(높이 56dp, 윤곽선 또는 채움)에 끝에 arrow_drop_down 아이콘. Exposed dropdown menu로 구현하고, 탭하면 아래에 메뉴(surfaceContainer, 모서리 4dp, 항목 높이 48dp)를 열어 고른 값을 입력란에 표시한다.",
        switch: "스위치: M3 표준 크기(트랙 52×32dp). 켜짐은 primary, 꺼짐은 surfaceContainerHighest와 outline 테두리. 레이블은 왼쪽, 스위치는 오른쪽에 둔다.",
        checkbox: "체크박스: 18dp 사각형, 모서리 2dp, 선택 시 primary. 레이블은 오른쪽에 bodyLarge로 표시한다.",
        slider: "슬라이더: M3 Expressive의 두꺼운 16dp 트랙과 4×44dp 세로 핸들. 핸들 왼쪽은 primary, 오른쪽은 secondaryContainer이며 드래그로 값을 바꾼다.",
        text: "텍스트: 지정된 sp 크기. 제목은 onSurface, 설명은 onSurfaceVariant, 줄 높이는 글자 크기의 1.3~1.5배. 탭 반응은 넣지 않는다.",
        image: "이미지: 모서리 20dp. 이미지가 없으면 surfaceContainerHighest 자리표시자를 사용하고 비율을 유지해 가운데에서 자른다.",
        camera: "카메라 미리보기: 모서리 20dp. 이 영역에 기기 카메라 화면을 표시하고, 권한이 없는 동안은 inverseSurface의 어두운 면 위에 카메라 아이콘을 둔다.",
        map: "지도: 모서리 20dp. 이 영역에 지도 SDK 뷰를 두고, 불러오는 동안은 surfaceContainerHighest 위에 지도 아이콘을 둔다.",
        divider: "구분선: 1dp outlineVariant, 좌우 여백 16dp.",
        box: "상자: 지정된 배경 토큰과 모서리를 가진 단순 컨테이너. 겹쳐 놓은 부품의 배경으로 사용하며 자체 동작은 넣지 않는다.",
        bottomSheet: "하단 시트: 아래에서 올라오는 ModalBottomSheet로 만든다. 위쪽 가운데에 드래그 핸들을 두고 지정된 배경과 위 모서리를 쓰며 아래 모서리는 직각으로 둔다.",
        loadingIndicator: "로딩: 다각형이 회전하며 형태가 바뀌는 M3 Expressive LoadingIndicator를 사용한다. 컨테이너형은 secondaryContainer 원 안에 둔다.",
        linearProgress: "선형 진행 표시기: 지정된 트랙 두께(지정이 없으면 4dp)와 둥근 끝을 사용한다. 지정된 경우 M3 Expressive 물결 스타일을 사용하며 트랙은 secondaryContainer, 진행은 primary로 표시한다.",
        circularProgress: "원형 진행 표시기: 지정된 트랙 두께(지정이 없으면 4dp)와 둥근 끝을 사용한다. 지정된 경우 M3 Expressive 물결 스타일을 사용한다.",
        splitButton: "분할 버튼: M3 Expressive SplitButton. 왼쪽은 주 동작, 오른쪽 화살표 영역은 메뉴를 연다. 두 영역 간격 2dp, 바깥 모서리는 완전 둥글게, 안쪽은 8dp로 한다. 높이는 버튼과 같은 XS 32 / S 40 / M 56 / L 96 / XL 136dp 스케일을 따르고, 여백과 아이콘도 그 높이에 맞춘다.",
        fabMenu: "FAB 메뉴: M3 Expressive FloatingActionButtonMenu. 닫혔을 때는 일반 FAB이고 탭하면 항목이 위로 차례로 나타나며 아이콘은 close로 바뀐다. 각 항목은 높이 56dp, 완전 둥근 모서리, 아이콘과 레이블을 포함한다.",
        toolbar: "플로팅 도구 모음: M3 Expressive HorizontalFloatingToolbar. 높이 64dp, 완전 둥근 모서리로 화면 아래쪽에서 16dp 띄운다. 표준은 surfaceContainer, 비브런트는 primaryContainer, 내부 아이콘 버튼은 48dp.",
        tabs: "탭: M3 기본 탭. 높이 48dp, 레이블 titleSmall. 선택 탭은 primary 텍스트와 레이블 너비의 3dp 표시기를 사용하고 아래에 outlineVariant 구분선을 둔다.",
        radio: "라디오 버튼: 20dp 원형. 선택 시 primary 테두리와 가운데 점, 미선택 시 onSurfaceVariant 테두리. 그룹에서 하나만 선택되며 레이블은 오른쪽 bodyLarge."
    }
};
/* ---------- theme: shape, type, motion ---------- */ const FONT_NOTE = {
    ja: (n)=>`書体は ${n} を使う。`,
    en: (n)=>`Use ${n} as the typeface.`,
    zh: (n)=>`字体使用 ${n}。`,
    ko: (n)=>`사용할 글꼴: ${n}.`
};
const THEME_NOTES = {
    ja: {
        shape: {
            square: "角丸は控えめにする: M3 の shape スケールを全体に小さく取り（ボタン・チップは 8〜12dp、カードや画像は 8dp、ダイアログは 12dp 程度）、ピル型は使わない。",
            rounded: "角丸は M3 Expressive の標準値のまま（ボタンはピル型、カードは 20dp、ダイアログは 28dp）。",
            full: "角丸は最大限に取る: ボタン・チップ・入力欄はピル型、カードや画像は 32dp、ダイアログやシートは 40dp 程度にする。"
        },
        emphasized: "見出し・ボタンラベル・タブは M3 Expressive の emphasized タイポグラフィ（headlineMediumEmphasized などの太めのウェイト）を使う。",
        plainType: "タイポグラフィは M3 の標準ウェイト。",
        motion: {
            standard: "モーションは MotionScheme.standard()。画面遷移や状態変化は弾まない滑らかな動きにする。",
            expressive: "モーションは MotionScheme.expressive()。画面遷移や状態変化には軽く弾むスプリングを使う。"
        }
    },
    en: {
        shape: {
            square: "Keep corners modest: shrink the M3 shape scale throughout (buttons and chips 8–12dp, cards and images 8dp, dialogs about 12dp) and avoid pill shapes.",
            rounded: "Corners follow the M3 Expressive defaults (pill buttons, 20dp cards, 28dp dialogs).",
            full: "Push corners to the maximum: pill-shaped buttons, chips and text fields, 32dp cards and images, about 40dp dialogs and sheets."
        },
        emphasized: "Headlines, button labels and tabs use the M3 Expressive emphasized typography (the heavier headlineMediumEmphasized and similar styles).",
        plainType: "Typography uses the standard M3 weights.",
        motion: {
            standard: "Motion uses MotionScheme.standard(): smooth transitions and state changes with no bounce.",
            expressive: "Motion uses MotionScheme.expressive(): a light spring bounce on transitions and state changes."
        }
    },
    zh: {
        shape: {
            square: "圆角保持克制：整体缩小 M3 的形状比例（按钮和标签片 8〜12dp，卡片和图片 8dp，对话框约 12dp），不使用胶囊形。",
            rounded: "圆角沿用 M3 Expressive 的默认值（按钮为胶囊形，卡片 20dp，对话框 28dp）。",
            full: "圆角尽量放大：按钮、标签片和输入框为胶囊形，卡片和图片 32dp，对话框和面板约 40dp。"
        },
        emphasized: "标题、按钮文字和标签页使用 M3 Expressive 的 emphasized 字体样式（headlineMediumEmphasized 等更粗的字重）。",
        plainType: "排版使用 M3 的标准字重。",
        motion: {
            standard: "动效使用 MotionScheme.standard()：屏幕过渡和状态变化平滑、不回弹。",
            expressive: "动效使用 MotionScheme.expressive()：屏幕过渡和状态变化带轻微回弹的弹簧效果。"
        }
    },
    ko: {
        shape: {
            square: "모서리는 절제한다. 전체 M3 모양 배율을 줄이고(버튼과 칩 8~12dp, 카드와 이미지 8dp, 대화상자 약 12dp) 알약 모양은 사용하지 않는다.",
            rounded: "M3 Expressive 기본 모서리를 사용한다(버튼은 알약 모양, 카드 20dp, 대화상자 28dp).",
            full: "모서리를 최대한 둥글게 한다. 버튼, 칩, 입력란은 알약 모양, 카드와 이미지 32dp, 대화상자와 시트는 약 40dp로 한다."
        },
        emphasized: "제목, 버튼 레이블, 탭은 더 굵은 headlineMediumEmphasized 등 M3 Expressive 강조 글꼴 스타일을 사용한다.",
        plainType: "M3 표준 글자 굵기를 사용한다.",
        motion: {
            standard: "모션은 MotionScheme.standard()를 사용한다. 화면 전환과 상태 변화는 튀지 않고 부드럽게 처리한다.",
            expressive: "모션은 MotionScheme.expressive()를 사용한다. 화면 전환과 상태 변화에 가볍게 튀는 스프링 효과를 적용한다."
        }
    }
};
function themeLines(th, lang) {
    const n = THEME_NOTES[lang];
    const font = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONTS"].find((f)=>f.key === th.font);
    const fontName = font?.key === "system" ? lang === "ja" ? "端末のシステムフォント" : lang === "zh" ? "设备的系统字体" : lang === "ko" ? "기기의 시스템 글꼴" : "the device's system font" : font?.label ?? "Roboto";
    const sp = lang === "en" || lang === "ko" ? " " : "";
    return [
        `- ${n.shape[th.shape]}`,
        `- ${FONT_NOTE[lang](fontName)}${sp}${th.emphasized ? n.emphasized : n.plainType}`,
        `- ${n.motion[th.motion]}`
    ];
}
/** the closing guidance; the lines that depend on the target are written for the chosen platform */ const GENERAL = {
    ja: [
        "まず画面の目的から「これは何のアプリか」を判断し、そのカテゴリのアプリとして一般に期待される機能（作成・一覧・詳細・編集・削除・検索・設定など、該当するもの）を、スケッチに描かれていなくても一通り実装する。",
        (pl)=>`データは本物として扱う。ユーザーが作成したデータは${pl === "web" ? "ブラウザに（IndexedDB など）" : "端末に（Room や DataStore など）"}永続化し、${pl === "web" ? "再読み込み" : "再起動"}後も残す。ダミーやサンプルのデータは入れず、何もない状態には空の案内を表示する。入力は検証し、失敗や削除は適切に確認・通知する。`,
        "スケッチに書かれていない振る舞いは、画面の目的と部品のラベルから補う。動作の指定がないボタンや項目は、そのラベルにふさわしい処理（保存、送信、詳細画面を開く、など）を実装し、何も起きないままにしない。",
        "配置は意図（順序・まとまり・上下左右の位置関係）を守れば十分で、寸法や余白は内容に合わせて調整してよい。実機で崩れるなら、スケッチより動くことを優先する。",
        (pl)=>`コンポーネントは ${pl === "web" ? "Material Web" : "Jetpack Compose の material3（Expressive API を含む最新版）"} の標準部品を使い、ライブラリにある部品を独自描画しない。`,
        "色は必ず上のカラースキームのロール名（primary、surfaceContainer など）で参照し、ハードコードした色を使わない。",
        "余白は画面端 16dp、部品同士は 8〜16dp を基本にし、タイポグラフィは M3 の型（titleLarge、bodyMedium など）を使う。",
        "「横一列に並べる」と書いた部品は必ず 1 つの Row（横並びコンテナ）に入れて同じ行に置き、縦に積んだり次の行に折り返したりしない。行の高さは一番高い部品に合わせ、他は縦中央に揃える。",
        "「〜の中に重ねて配置」と書いた部品は、その容器（ボックスやカード）を背景にした Box の上に重ねて描く。重なりは意図したものなので、レイアウトの都合で分離したり順序を変えたりしない。前後関係は記述の順（後に書いたものが前面）に従う。",
        "タップできる部品にはリップルと軽い縮小のフィードバックを付ける。「戻る」は入ったときの遷移を逆再生し、システムの戻る操作（戻るジェスチャー・戻るボタン）でも同じ動きにする。",
        "アイコンは Material Symbols Rounded を使う。"
    ],
    en: [
        "Work out what kind of app this is from the purpose of the screens, and implement the features such an app is normally expected to have (create, list, detail, edit, delete, search, settings, whichever apply) even where the sketch does not show them.",
        (pl)=>`Treat the data as real. Persist what the user creates ${pl === "web" ? "in the browser (IndexedDB or similar) so it survives reloads" : "on the device (Room, DataStore or similar) so it survives restarts"}. Do not ship dummy or sample data; show an empty state when there is nothing yet. Validate input, and confirm or report failures and deletions appropriately.`,
        "Fill in behavior the sketch leaves out from the purpose of the screen and the labels of the parts. A button or item with no behavior specified should do what its label implies (save, send, open a detail screen, and so on), never nothing.",
        "The layout only needs to keep the intent (order, grouping, relative placement); sizes and spacing may be adjusted to fit the content. If something would break on a device, prefer working over matching the sketch.",
        (pl)=>`Use the standard components from ${pl === "web" ? "Material Web" : "Jetpack Compose material3 (latest, including the Expressive APIs)"}; do not custom-draw parts the library provides.`,
        "Always reference colors through the scheme roles above (primary, surfaceContainer, …) instead of hard-coded values.",
        "Keep 16dp screen margins and 8–16dp between parts, and use the M3 type styles (titleLarge, bodyMedium, …).",
        "Parts described as \"in one row\" must share a single Row (horizontal container) on the same line; never stack them vertically or wrap them. The row is as tall as its tallest part and the others are vertically centered in it.",
        "Parts described as \"layered inside\" a container are drawn on top of that container (a Box with the container as its background). The overlap is intentional: do not separate or reorder them for layout reasons. Later items in the description are drawn in front of earlier ones.",
        "Give every tappable part ripple plus a slight press-scale. \"Back\" plays the entry transition in reverse, and the system back gesture / button must do the same.",
        "Use Material Symbols Rounded for icons."
    ],
    zh: [
        "先根据屏幕目的判断这是什么类型的应用，并实现该类应用通常应有的功能（新建、列表、详情、编辑、删除、搜索、设置等，视情况而定），即使草图中没有画出。",
        (pl)=>`把数据当作真实数据处理：用户创建的数据要持久化到${pl === "web" ? "浏览器（IndexedDB 等），重新加载" : "设备（Room、DataStore 等），重启"}后仍保留。不要放入虚拟或示例数据，没有数据时显示空状态提示。校验输入，删除和失败要有适当的确认或提示。`,
        "草图没有写明的行为，根据屏幕目的和组件标签补全。未指定行为的按钮或项目要实现与其标签相符的操作（保存、发送、打开详情页等），不要什么都不做。",
        "布局只需保持意图（顺序、分组、相对位置），尺寸和间距可根据内容调整。若在真机上会出问题，宁可能用也不要死守草图。",
        (pl)=>`组件使用 ${pl === "web" ? "Material Web" : "Jetpack Compose material3（包含 Expressive API 的最新版）"} 的标准组件，库里已有的组件不要自行绘制。`,
        "颜色必须通过上面配色方案的角色名（primary、surfaceContainer 等）引用，不要写死颜色值。",
        "屏幕边缘留 16dp，组件之间 8〜16dp，排版使用 M3 的字体样式（titleLarge、bodyMedium 等）。",
        "写明“横向排成一行”的组件必须放进同一个 Row（横向容器）并在同一行显示，不要竖着堆叠或换行。行高以最高的组件为准，其余组件垂直居中。",
        "写明“内部叠放”的组件要绘制在该容器（容器框或卡片）之上（以容器为背景的 Box）。这种叠放是有意为之，不要因布局原因拆开或调整顺序。前后关系按描述顺序，后写的在前面。",
        "可点击的组件加涟漪和轻微缩放反馈。“返回”反向播放进入时的过渡动画，系统返回手势／返回键也要做同样的效果。",
        "图标使用 Material Symbols Rounded。"
    ],
    ko: [
        "화면의 목적에서 앱의 종류를 판단하고, 스케치에 없더라도 그 종류의 앱에 일반적으로 필요한 기능(만들기, 목록, 상세, 편집, 삭제, 검색, 설정 등)을 구현한다.",
        (pl)=>`데이터를 실제 데이터로 취급한다. 사용자가 만든 데이터는 ${pl === "web" ? "브라우저(IndexedDB 등)에 저장해 새로고침" : "기기(Room, DataStore 등)에 저장해 재시작"} 후에도 유지한다. 더미나 샘플 데이터는 넣지 않고 데이터가 없으면 빈 상태를 표시한다. 입력을 검증하고 실패와 삭제는 적절히 확인하거나 알린다.`,
        "스케치에 없는 동작은 화면 목적과 부품 레이블을 바탕으로 보완한다. 동작이 지정되지 않은 버튼이나 항목도 레이블에 맞는 동작(저장, 보내기, 상세 화면 열기 등)을 수행해야 한다.",
        "레이아웃은 의도한 순서, 그룹, 상대 위치를 유지하되 크기와 간격은 내용에 맞게 조정할 수 있다. 실제 기기에서 깨진다면 스케치 일치보다 정상 동작을 우선한다.",
        (pl)=>`${pl === "web" ? "Material Web" : "최신 Expressive API를 포함한 Jetpack Compose material3"}의 표준 컴포넌트를 사용하고 라이브러리에 있는 부품을 직접 그리지 않는다.`,
        "색상은 하드코딩하지 말고 위 색상 구성의 역할 이름(primary, surfaceContainer 등)으로 참조한다.",
        "화면 가장자리는 16dp, 부품 사이는 8~16dp를 기본으로 하고 M3 글꼴 스타일(titleLarge, bodyMedium 등)을 사용한다.",
        "'한 행에 배치'한 부품은 하나의 Row(가로 컨테이너)에서 같은 줄에 두고 세로로 쌓거나 줄 바꿈하지 않는다. 행 높이는 가장 높은 부품에 맞추고 나머지는 세로 중앙 정렬한다.",
        "'내부에 겹쳐 배치'한 부품은 해당 컨테이너(상자 또는 카드)를 배경으로 하는 Box 위에 그린다. 이 겹침은 의도된 것이므로 분리하거나 순서를 바꾸지 않으며 나중에 설명된 항목을 앞에 그린다.",
        "탭 가능한 부품에는 리플과 약한 축소 피드백을 준다. '뒤로'는 진입 전환을 반대로 재생하고 시스템 뒤로 제스처나 버튼도 같은 동작을 수행한다.",
        "아이콘은 Material Symbols Rounded를 사용한다."
    ]
};
/** notes that differ on the web, where a browser has no status bar or gesture area to inset for */ const STYLE_NOTES_WEB = {
    ko: {
        topAppBar: "상단 앱 바: 높이 64dp, 배경 surface. 제목은 titleLarge, 양쪽 아이콘 버튼은 48dp를 사용한다. 스크롤 시 surfaceContainer로 색상이 바뀌는 표준 동작을 사용한다.",
        bottomNav: "내비게이션 바: 높이 80dp, 배경 surfaceContainer. 선택 항목은 secondaryContainer 알약 표시기(64×32dp), 채운 아이콘과 labelMedium 레이블로 표시한다."
    },
    ja: {
        topAppBar: "トップアプリバー: 高さ 64dp、背景は surface。タイトルは titleLarge、左右のアイコンボタンは 48dp。スクロール時に surfaceContainer へ色が変わる標準の挙動でよい。",
        bottomNav: "ナビゲーションバー: 高さ 80dp、背景は surfaceContainer。選択中の項目は secondaryContainer のピル型インジケータ（幅 64dp・高さ 32dp）で示し、アイコンは塗りつぶし、ラベルは labelMedium。"
    },
    en: {
        topAppBar: "Top app bar: 64dp tall on surface. Title in titleLarge, 48dp icon buttons on each side. The standard tint to surfaceContainer on scroll is fine.",
        bottomNav: "Navigation bar: 80dp tall on surfaceContainer. The active destination shows a secondaryContainer pill indicator (64×32dp), a filled icon and a labelMedium label."
    },
    zh: {
        topAppBar: "顶部应用栏：高 64dp，背景为 surface。标题用 titleLarge，左右图标按钮 48dp。滚动时变为 surfaceContainer 的标准行为即可。",
        bottomNav: "导航栏：高 80dp，背景为 surfaceContainer。选中项用 secondaryContainer 的胶囊指示器（宽 64dp、高 32dp）表示，图标为填充样式，标签用 labelMedium。"
    }
};
const viewportOf = (frames, phone)=>{
    if (!phone || frames.length === 0) return "free";
    const phones = frames.filter(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPhoneFrame"]).length;
    return phones === frames.length ? "phone" : phones === 0 ? "desktop" : "mixed";
};
/** a screen's size, written only when the document mixes sizes */ const sizeLabel = (f, vp, lang)=>{
    if (vp !== "mixed") return undefined;
    const { w, h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(f);
    const kind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPhoneFrame"])(f) ? {
        ja: "スマホ",
        en: "phone",
        zh: "手机",
        ko: "휴대전화"
    } : {
        ja: "デスクトップ",
        en: "desktop",
        zh: "桌面",
        ko: "데스크톱"
    };
    return `${kind[lang]} ${w}×${h}`;
};
const PH = {
    ja: {
        screen: "画面",
        intro: (title, brief)=>`${title}を Material 3 Expressive のデザインで実装してください。${brief ? trimEnd(brief) + "。" : ""}`,
        titleOnly: (name)=>`${name}画面`,
        titleAll: (n)=>n > 1 ? "このアプリ" : "この画面",
        target: (vp, pl, dark, both)=>`${vp === "phone" ? "想定はスマホの縦画面（412×892dp）で、" : vp === "desktop" ? pl === "web" ? "想定はデスクトップのブラウザ画面（基準 1280×800）で、" : "想定は横向きのタブレット画面（基準 1280×800dp）で、" : vp === "mixed" ? `スマホの縦画面（412×892）と${pl === "web" ? "デスクトップのブラウザ画面" : "横向きのタブレット画面"}（1280×800）の両方を想定し、同じ名前の画面は 1 つの画面の 2 つの幅として、レスポンシブに実装します。` : "レイアウトは自由配置で、"}${both ? "ライトモードとダークモードの両方に対応し、端末のシステム設定に従って切り替えます。" : dark ? "ダークモード固定です。" : "ライトモード固定です。"}`,
        platform: (pl)=>pl === "web" ? "実装先は Web（ブラウザで動くアプリ）です。" : "実装先は Android（ネイティブアプリ）です。",
        schemeHead: (dark)=>dark ? "ダークスキーム:" : "ライトスキーム:",
        sketch: "下の画面構成は、意図を伝えるためのラフスケッチです。完成図の仕様ではないので、静止画のように再現するのではなく、この種のアプリとして普通に期待される機能を一通り備えた、実際に使える完成品として仕上げてください。",
        hColor: "## カラー",
        dynamic: (pl)=>pl === "web" ? "ダイナミックカラーを使います。ブラウザや OS がユーザーのアクセントカラーを公開している場合はそれを種にして Material 3 のスキームを生成し、取得できない環境では下の色をフォールバックにしてください。" : "ダイナミックカラーを使います。Android 12 以降ではユーザーの壁紙から生成されるカラースキーム（dynamicLightColorScheme / dynamicDarkColorScheme）を適用し、それが使えない端末では下の色をフォールバックにしてください。",
        colorIntro: (label, fallback, th)=>{
            const scheme = `Material 3 の${th.bothModes ? "ライトとダークの" : th.dark ? "ダーク" : "ライト"}カラースキーム${th.contrast === "high" ? "（高コントラスト）" : th.contrast === "medium" ? "（中コントラスト）" : ""}`;
            return `${fallback ? "フォールバック用のテーマ" : "テーマ"}は ${label} 系です。${scheme}に次の色を設定し、UI の色はすべてこのロール経由で参照してください。`;
        },
        hTheme: "## 形・文字・動き",
        hLayout: "## 画面構成",
        empty: "画面にはまだ部品が置かれていません。",
        screens: (names)=>`画面は ${names.length} つあり、${names.join("、")}です。`,
        placement: (place)=>place === "center" ? "本文の部品は画面の縦中央にまとめて配置します。" : place === "bottom" ? "本文の部品は画面の下側（ナビゲーションバーの上）に寄せて配置します。" : "本文の部品は画面の高さいっぱいに均等な間隔で配置します（1 行だけなら縦中央）。",
        scrolls: (length, view)=>`画面の長さは ${length}dp で、端末に映る ${view}dp より長いため、本文は縦にスクロールします。バーと、コンテンツの上に浮かぶ部品（FAB、スナックバーなど）はスクロールしても固定のままです。`,
        screenHead: (name, bg, has, size)=>`${name}画面${size || bg ? `（${[
                size,
                bg ? `背景は ${bg}` : ""
            ].filter(Boolean).join("、")}）` : ""}${has ? "は上から順に次の通りです。重なっている部品はその旨を書いています。" : "はまだ空です。"}`,
        loose: "画面の外に置かれている部品（共通パーツや参考）:",
        freeform: "画面を上から順に説明します。",
        hBehavior: "## 振る舞いと画面遷移",
        hStyle: "## 各部品のスタイル",
        styleIntro: "使っている部品ごとの目安です。数値は M3 Expressive の標準値なので、標準コンポーネントで実現できるものは標準に任せ、内容に合わせて調整して構いません。",
        hGeneral: "## 全体の指針"
    },
    en: {
        screen: "screen",
        intro: (title, brief)=>`Please implement ${title} in the Material 3 Expressive design language.${brief ? ` ${trimEnd(brief)}.` : ""}`,
        titleOnly: (name)=>`the ${name} screen`,
        titleAll: (n)=>n > 1 ? "this app" : "this screen",
        target: (vp, pl, dark, both)=>`${vp === "phone" ? "Target a portrait phone screen (412×892dp)" : vp === "desktop" ? pl === "web" ? "Target a desktop browser viewport (1280×800 reference)" : "Target a landscape tablet screen (1280×800dp reference)" : vp === "mixed" ? `Target both a portrait phone (412×892) and a ${pl === "web" ? "desktop browser viewport" : "landscape tablet"} (1280×800); screens that share a name are one screen at two widths, so build them responsively` : "The layout is free-form"}, ${both ? "supporting both light and dark mode and following the device's system setting" : `${dark ? "dark" : "light"} mode only`}.`,
        platform: (pl)=>pl === "web" ? "Build it for the web, as an app that runs in the browser." : "Build it for Android, as a native app.",
        schemeHead: (dark)=>dark ? "Dark scheme:" : "Light scheme:",
        sketch: "The layout below is a rough sketch that conveys intent, not a finished spec. Do not reproduce it as a static picture; build the complete, usable app that this kind of product is normally expected to be.",
        hColor: "## Colors",
        dynamic: (pl)=>pl === "web" ? "Use dynamic color: where the browser or OS exposes the user's accent color, generate the Material 3 scheme from it as the seed, and fall back to the colors below where it is unavailable." : "Use dynamic color: on Android 12+ apply the scheme generated from the user's wallpaper (dynamicLightColorScheme / dynamicDarkColorScheme), and fall back to the colors below where it is unavailable.",
        colorIntro: (label, fallback, th)=>{
            const scheme = `Material 3 ${th.bothModes ? "light and dark color schemes" : `${th.dark ? "dark" : "light"} color scheme`}${th.contrast === "high" ? " (high contrast)" : th.contrast === "medium" ? " (medium contrast)" : ""}`;
            return `The ${fallback ? "fallback theme" : "theme"} is ${label}. Set these on the ${scheme} and reference every UI color through its role.`;
        },
        hTheme: "## Shape, type and motion",
        hLayout: "## Layout",
        empty: "Nothing has been placed on the screen yet.",
        screens: (names)=>`There are ${names.length} screens: ${names.join(", ")}.`,
        placement: (place)=>place === "center" ? "The body parts sit together in the vertical center of the screen." : place === "bottom" ? "The body parts sit toward the bottom of the screen, above the navigation bar." : "The body parts are spread over the screen height with equal gaps (a single row sits in the vertical center).",
        scrolls: (length, view)=>`The screen runs ${length}dp, longer than the ${view}dp the device shows, so its body scrolls vertically; the bars and anything floating over the content (a FAB, a snackbar) stay fixed while it scrolls.`,
        screenHead: (name, bg, has, size)=>`The ${name} screen${size || bg ? ` (${[
                size,
                bg ? `background ${bg}` : ""
            ].filter(Boolean).join(", ")})` : ""}${has ? ", from top to bottom (overlapping parts are called out as such):" : " is still empty."}`,
        loose: "Parts placed outside the screens (shared parts or references):",
        freeform: "The screen, from top to bottom:",
        hBehavior: "## Behavior and navigation",
        hStyle: "## Component styles",
        styleIntro: "Per-component guidance for the parts in use. The numbers are the M3 Expressive defaults: let the standard components handle whatever they already do, and adjust where the content calls for it.",
        hGeneral: "## General guidance"
    },
    zh: {
        screen: "屏幕",
        intro: (title, brief)=>`请用 Material 3 Expressive 的设计实现${title}。${brief ? trimEnd(brief) + "。" : ""}`,
        titleOnly: (name)=>`${name}屏幕`,
        titleAll: (n)=>n > 1 ? "这个应用" : "这个屏幕",
        target: (vp, pl, dark, both)=>`${vp === "phone" ? "目标为竖屏手机（412×892dp）" : vp === "desktop" ? pl === "web" ? "目标为桌面浏览器视口（以 1280×800 为基准）" : "目标为横屏平板（以 1280×800dp 为基准）" : vp === "mixed" ? `同时面向竖屏手机（412×892）和${pl === "web" ? "桌面浏览器视口" : "横屏平板"}（1280×800）；同名的屏幕是同一个屏幕的两种宽度，请做成响应式` : "布局为自由排布"}，${both ? "同时支持浅色和深色模式，并跟随设备的系统设置切换" : `只做${dark ? "深色" : "浅色"}模式`}。`,
        platform: (pl)=>pl === "web" ? "实现目标是 Web（在浏览器中运行的应用）。" : "实现目标是 Android（原生应用）。",
        schemeHead: (dark)=>dark ? "深色配色：" : "浅色配色：",
        sketch: "下面的屏幕结构是传达意图的草图，不是最终规格。不要把它当静态图片照搬，而要做成这类应用通常应具备的功能齐全、真正可用的成品。",
        hColor: "## 配色",
        dynamic: (pl)=>pl === "web" ? "使用动态配色：浏览器或系统提供用户强调色时，以它为种子生成 Material 3 配色方案；无法获取时使用下面的颜色作为备用。" : "使用动态配色：在 Android 12 及以上应用由用户壁纸生成的配色方案（dynamicLightColorScheme / dynamicDarkColorScheme），不支持的设备则使用下面的颜色作为备用。",
        colorIntro: (label, fallback, th)=>{
            const scheme = `Material 3 的${th.bothModes ? "浅色和深色" : th.dark ? "深色" : "浅色"}配色方案${th.contrast === "high" ? "（高对比度）" : th.contrast === "medium" ? "（中对比度）" : ""}`;
            return `${fallback ? "备用主题" : "主题"}为 ${label} 系。请在${scheme}中设置以下颜色，UI 的所有颜色都通过这些角色引用。`;
        },
        hTheme: "## 形状、字体与动效",
        hLayout: "## 屏幕结构",
        empty: "屏幕上还没有放置任何组件。",
        screens: (names)=>`共有 ${names.length} 个屏幕：${names.join("、")}。`,
        placement: (place)=>place === "center" ? "内容作为整体，在屏幕内容区域内纵向居中排列。" : place === "bottom" ? "内容区域中的组件靠屏幕底部（导航栏上方）放置。" : "各行内容在屏幕内容区域内纵向均匀分布（只有一行时纵向居中）。",
        scrolls: (length, view)=>`屏幕总长 ${length}dp，超过设备可显示的 ${view}dp，因此内容区域可纵向滚动；栏以及浮在内容之上的组件（FAB、Snackbar 等）在滚动时保持固定。`,
        screenHead: (name, bg, has, size)=>`${name}屏幕${size || bg ? `（${[
                size,
                bg ? `背景为 ${bg}` : ""
            ].filter(Boolean).join("，")}）` : ""}${has ? "从上到下依次如下（重叠的组件会特别说明）：" : "目前为空。"}`,
        loose: "放在屏幕之外的组件（公共部件或参考）：",
        freeform: "从上到下说明屏幕内容：",
        hBehavior: "## 行为与屏幕跳转",
        hStyle: "## 各组件的样式",
        styleIntro: "以下是所用组件的参考。数值均为 M3 Expressive 的标准值，能用标准组件实现的就交给标准组件，并可根据内容适当调整。",
        hGeneral: "## 整体原则"
    },
    ko: {
        screen: "화면",
        intro: (title, brief)=>`Material 3 Expressive 디자인으로 구현해 주세요: ${title}.${brief ? ` ${trimEnd(brief)}.` : ""}`,
        titleOnly: (name)=>`${name} 화면`,
        titleAll: (n)=>n > 1 ? "이 앱" : "이 화면",
        target: (vp, pl, dark, both)=>`${vp === "phone" ? "세로형 휴대전화 화면(412×892dp)을 대상으로 하며" : vp === "desktop" ? `${pl === "web" ? "데스크톱 브라우저" : "가로형 태블릿"} 화면(1280×800 기준)을 대상으로 하며` : vp === "mixed" ? `세로형 휴대전화(412×892)와 ${pl === "web" ? "데스크톱 브라우저" : "가로형 태블릿"}(1280×800)을 모두 지원하며, 이름이 같은 화면은 서로 다른 너비의 동일한 화면이므로 반응형으로 구현하고` : "레이아웃은 자유 배치이며"}, ${both ? "라이트 모드와 다크 모드를 모두 지원하고 기기의 시스템 설정을 따른다" : `${dark ? "다크" : "라이트"} 모드만 지원한다`}.`,
        platform: (pl)=>pl === "web" ? "브라우저에서 실행되는 웹 앱으로 구현한다." : "Android 네이티브 앱으로 구현한다.",
        schemeHead: (dark)=>dark ? "다크 색상 구성:" : "라이트 색상 구성:",
        sketch: "아래 화면 구성은 의도를 전달하는 대략적인 스케치이며 완성 사양이 아니다. 정적인 그림처럼 복제하지 말고 이 종류의 제품에 일반적으로 필요한 기능을 갖춘 실제 사용 가능한 앱으로 완성한다.",
        hColor: "## 색상",
        dynamic: (pl)=>pl === "web" ? "동적 색상을 사용한다. 브라우저나 운영체제에서 사용자의 강조 색상을 제공하면 이를 기준으로 Material 3 색상 구성을 생성하고, 사용할 수 없으면 아래 색상으로 대체한다." : "동적 색상을 사용한다. Android 12 이상에서는 사용자 배경화면에서 생성된 색상 구성(dynamicLightColorScheme / dynamicDarkColorScheme)을 적용하고 사용할 수 없는 기기에서는 아래 색상을 대체 값으로 사용한다.",
        colorIntro: (label, fallback, th)=>{
            const scheme = `Material 3 ${th.bothModes ? "라이트 및 다크" : th.dark ? "다크" : "라이트"} 색상 구성${th.contrast === "high" ? "(고대비)" : th.contrast === "medium" ? "(중간 대비)" : ""}`;
            return `${fallback ? "대체 테마" : "테마"}는 ${label} 계열이다. ${scheme}에 다음 색상을 설정하고 모든 UI 색상을 해당 역할로 참조한다.`;
        },
        hTheme: "## 모양, 글꼴 및 모션",
        hLayout: "## 화면 구성",
        empty: "화면에 아직 부품이 없습니다.",
        screens: (names)=>`화면은 ${names.length}개이며 ${names.join(", ")}입니다.`,
        placement: (place)=>place === "center" ? "본문 부품은 화면 세로 가운데에 모아 배치한다." : place === "bottom" ? "본문 부품은 화면 아래쪽(내비게이션 바 위)에 붙여 배치한다." : "본문 부품은 화면 높이에 걸쳐 같은 간격으로 배치한다(한 줄뿐이면 세로 가운데).",
        scrolls: (length, view)=>`화면 길이는 ${length}dp로 기기에 보이는 ${view}dp보다 길어서 본문이 세로로 스크롤된다. 바와 콘텐츠 위에 떠 있는 부품(FAB, 스낵바 등)은 스크롤해도 고정된다.`,
        screenHead: (name, bg, has, size)=>`${name} 화면${size || bg ? `(${[
                size,
                bg ? `배경 ${bg}` : ""
            ].filter(Boolean).join(", ")})` : ""}. ${has ? "위에서부터 다음과 같습니다. 겹친 부품은 별도로 표시합니다." : "아직 비어 있습니다."}`,
        loose: "화면 밖에 놓인 부품(공통 부품 또는 참고):",
        freeform: "화면을 위에서부터 설명합니다.",
        hBehavior: "## 동작 및 화면 전환",
        hStyle: "## 부품별 스타일",
        styleIntro: "사용된 부품별 지침입니다. 수치는 M3 Expressive 기본값이며 표준 컴포넌트가 제공하는 동작은 그대로 사용하고 내용에 맞게 조정할 수 있습니다.",
        hGeneral: "## 전체 지침"
    }
};
const PROMPT_OPTIONS = [
    "deliverable",
    "tests",
    "darkMode",
    "languages",
    "offline"
];
const DEFAULT_PROMPT_OPTIONS = [
    "deliverable"
];
const isPromptOption = (v)=>PROMPT_OPTIONS.includes(v);
const promptOptionsOf = (doc)=>doc.promptOptions ? doc.promptOptions.filter(isPromptOption) : DEFAULT_PROMPT_OPTIONS;
const PROMPT_OPTION_TEXT = {
    ja: {
        deliverable: {
            label: "検証不要・成果物のみ",
            icon: "package_2",
            line: (pl)=>`${pl === "web" ? "ブラウザでの" : "エミュレータや実機での"}動作検証は不要。実装が終わったら${pl === "web" ? "production build を実行し、その出力" : "署名済みの release APK "}を成果物として提供する。`
        },
        tests: {
            label: "テストを書く",
            icon: "science",
            line: "主要なロジックにユニットテストを書き、すべて通る状態で提出する。"
        },
        darkMode: {
            label: "ダークモード対応",
            icon: "dark_mode",
            line: "ライトとダークの両方のカラースキームに対応し、システム設定に追従する。"
        },
        languages: {
            label: "日本語と英語",
            icon: "translate",
            line: "UI の文言は日本語と英語の両方を用意し、端末の言語設定に追従する。"
        },
        offline: {
            label: "オフライン対応",
            icon: "cloud_off",
            line: "ネットワークがなくても主要な機能が使えるようにし、必要なら再接続時に同期する。"
        }
    },
    en: {
        deliverable: {
            label: "No verification, deliverable only",
            icon: "package_2",
            line: (pl)=>`Do not verify ${pl === "web" ? "in a browser" : "on an emulator or a device"}. When the implementation is done, ${pl === "web" ? "run the production build and provide its output" : "produce a signed release APK"} as the deliverable.`
        },
        tests: {
            label: "Write tests",
            icon: "science",
            line: "Write unit tests for the main logic and hand it over with all of them passing."
        },
        darkMode: {
            label: "Dark mode",
            icon: "dark_mode",
            line: "Support both the light and the dark color scheme, following the system setting."
        },
        languages: {
            label: "Japanese and English",
            icon: "translate",
            line: "Provide the UI text in both Japanese and English, following the device language."
        },
        offline: {
            label: "Works offline",
            icon: "cloud_off",
            line: "Keep the main features usable without a network, syncing when it returns if needed."
        }
    },
    zh: {
        deliverable: {
            label: "无需验证，仅交付成果",
            icon: "package_2",
            line: (pl)=>`不需要在${pl === "web" ? "浏览器" : "模拟器或真机"}上验证。实现完成后${pl === "web" ? "运行 production build 并提供其输出" : "生成已签名的 release APK "}作为交付物。`
        },
        tests: {
            label: "编写测试",
            icon: "science",
            line: "为主要逻辑编写单元测试，并在全部通过的状态下交付。"
        },
        darkMode: {
            label: "支持深色模式",
            icon: "dark_mode",
            line: "同时支持浅色与深色配色方案，并跟随系统设置。"
        },
        languages: {
            label: "日语和英语",
            icon: "translate",
            line: "UI 文案同时提供日语和英语，并跟随设备语言设置。"
        },
        offline: {
            label: "支持离线",
            icon: "cloud_off",
            line: "在没有网络时也能使用主要功能，必要时在重新连接后同步。"
        }
    },
    ko: {
        deliverable: {
            label: "검증 없이 결과물만",
            icon: "package_2",
            line: (pl)=>`${pl === "web" ? "브라우저" : "에뮬레이터나 실제 기기"} 동작 검증은 필요 없다. 구현 후 ${pl === "web" ? "production build를 실행하고 그 출력" : "서명된 release APK"}을 결과물로 제공한다.`
        },
        tests: {
            label: "테스트 작성",
            icon: "science",
            line: "주요 로직에 단위 테스트를 작성하고 모두 통과하는 상태로 제출한다."
        },
        darkMode: {
            label: "다크 모드 지원",
            icon: "dark_mode",
            line: "라이트와 다크 색상 스킴을 모두 지원하고 시스템 설정을 따른다."
        },
        languages: {
            label: "일본어와 영어",
            icon: "translate",
            line: "UI 문구를 일본어와 영어로 모두 준비하고 기기 언어 설정을 따른다."
        },
        offline: {
            label: "오프라인 지원",
            icon: "cloud_off",
            line: "네트워크가 없어도 주요 기능을 쓸 수 있게 하고, 필요하면 재연결 시 동기화한다."
        }
    }
};
function promptMarks(text, frames, lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLang"])()) {
    const ph = PH[lang];
    const q = quote(lang);
    const out = [];
    /* the screens are written in document order, so the next screen line is the next unmatched
   * frame: two screens with one name, or two unnamed ones, each get their own mark */ const left = [
        ...frames
    ];
    const word = lang === "ja" ? "画面" : lang === "zh" ? "屏幕" : lang === "ko" ? " 화면" : null;
    text.split("\n").forEach((l, i)=>{
        if (l.startsWith("## ")) {
            out.push({
                kind: "section",
                label: l.slice(3).trim(),
                line: i
            });
            return;
        }
        const at = left.findIndex((f)=>{
            const name = q(f.name || ph.screen);
            return word ? l.startsWith(name + word) : l.startsWith(`The ${name} screen`);
        });
        if (at < 0) return;
        const f = left.splice(at, 1)[0];
        out.push({
            kind: "screen",
            label: f.name || ph.screen,
            line: i,
            frameId: f.id
        });
    });
    return out;
}
function buildPrompt(doc, widths, onlyFrameId, lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLang"])()) {
    doc = {
        ...doc,
        groups: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constrainModalRails"])(doc.groups)
    };
    const th = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeTheme"])(doc.theme);
    const pal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paletteOf"])(doc.paletteKey, doc.customPalette, th);
    const phone = doc.frame === "phone";
    const platform = doc.platform ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPlatformOf"])(doc.frames, doc.frame);
    const allFrames = phone ? doc.frames : [];
    const only = onlyFrameId ? allFrames.find((f)=>f.id === onlyFrameId) : undefined;
    const frames = only ? [
        only
    ] : allFrames;
    const viewport = viewportOf(frames, phone);
    /* canvas order is the layer order; rows are worked out per screen. A hand-made
   * group is written part by part, since it exists only to move things together. */ const groups = doc.groups.filter((g)=>!only || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(g, allFrames, widths)?.id === only.id).flatMap((g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explodeGroup"])(g, widths));
    const lines = [];
    const q = quote(lang);
    const ph = PH[lang];
    const byFrame = new Map();
    const loose = [];
    for (const g of groups){
        const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(g, allFrames, widths);
        if (f && frames.some((x)=>x.id === f.id)) byFrame.set(f.id, [
            ...byFrame.get(f.id) ?? [],
            g
        ]);
        else if (!f) loose.push(g);
    }
    const kindsUsed = [];
    let wideRail = false;
    let legacyRail = false;
    for (const g of groups)for (const it of g.items){
        if (!kindsUsed.includes(it.kind)) kindsUsed.push(it.kind);
        if (it.kind === "navRail") {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWideRail"])(it)) wideRail = true;
            else legacyRail = true;
        }
    }
    const styleNotes = kindsUsed.map((k)=>k === "navRail" && wideRail ? `${legacyRail ? `${STYLE_NOTES[lang].navRail} ` : ""}${WIDE_RAIL_STYLE[lang]}` : platform === "web" && STYLE_NOTES_WEB[lang][k] || STYLE_NOTES[lang][k]).filter((s)=>!!s);
    const title = only ? ph.titleOnly(q(only.name || ph.screen)) : doc.title.trim() || ph.titleAll(frames.length);
    lines.push(ph.intro(title, doc.brief.trim()));
    lines.push(ph.target(viewport, platform, th.dark, th.bothModes));
    lines.push(ph.platform(platform));
    lines.push(ph.sketch);
    lines.push("");
    lines.push(ph.hColor);
    if (doc.dynamicColor) lines.push(ph.dynamic(platform));
    lines.push(ph.colorIntro(pal.label, !!doc.dynamicColor, th));
    if (th.bothModes) {
        const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paletteOf"])(doc.paletteKey, doc.customPalette, {
            ...th,
            dark: false
        });
        const dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paletteOf"])(doc.paletteKey, doc.customPalette, {
            ...th,
            dark: true
        });
        lines.push(ph.schemeHead(false));
        lines.push(...paletteLines(light));
        lines.push(ph.schemeHead(true));
        lines.push(...paletteLines(dark));
    } else {
        lines.push(...paletteLines(pal));
    }
    lines.push("");
    lines.push(ph.hTheme);
    lines.push(...themeLines(th, lang));
    lines.push("");
    lines.push(ph.hLayout);
    if (groups.length === 0) {
        lines.push(ph.empty);
    } else if (frames.length > 0) {
        if (frames.length > 1) lines.push(ph.screens(frames.map((f)=>q(f.name || ph.screen))));
        frames.forEach((f, i)=>{
            const gs = byFrame.get(f.id) ?? [];
            if (i > 0 || frames.length > 1) lines.push("");
            if (hasText(f.note)) lines.push(lang === "ja" || lang === "zh" ? `${trimEnd(f.note)}。` : `${trimEnd(f.note)}.`);
            lines.push(ph.screenHead(q(f.name || ph.screen), f.bg && f.bg !== "surface" ? f.bg : undefined, gs.length > 0, sizeLabel(f, viewport, lang)));
            if (gs.length > 0 && f.place && f.place !== "top") lines.push(ph.placement(f.place));
            if (gs.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollsOf"])(f)) lines.push(ph.scrolls((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(f), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(f).h));
            describeScreen(lines, gs, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameRect"])(f), widths, lang);
        });
        if (loose.length && !only) {
            lines.push("");
            lines.push(ph.loose);
            describeScreen(lines, loose, null, widths, lang);
        }
    } else {
        lines.push(ph.freeform);
        describeScreen(lines, groups, null, widths, lang);
    }
    const behavior = [
        ...groups.flatMap((g)=>notes(g, allFrames, lang)),
        ...frames.flatMap((f)=>swipeNotes(f, allFrames, lang))
    ];
    if (behavior.length) {
        lines.push("");
        lines.push(ph.hBehavior);
        for (const n of behavior)lines.push(`- ${n}`);
    }
    if (styleNotes.length) {
        lines.push("");
        lines.push(ph.hStyle);
        lines.push(ph.styleIntro);
        for (const s of styleNotes)lines.push(`- ${s}`);
    }
    lines.push("");
    lines.push(ph.hGeneral);
    for (const s of GENERAL[lang])lines.push(`- ${typeof s === "function" ? s(platform) : s}`);
    /* the author's own choices come last, in the order they are offered */ const chosen = promptOptionsOf(doc);
    for (const key of PROMPT_OPTIONS){
        if (!chosen.includes(key)) continue;
        const line = PROMPT_OPTION_TEXT[lang][key].line;
        lines.push(`- ${typeof line === "function" ? line(platform) : line}`);
    }
    return lines.join("\n");
}
const effectivePrompt = (doc, widths, lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLang"])())=>doc.promptEdit !== undefined ? doc.promptEdit : buildPrompt(doc, widths, undefined, lang);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/rail.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constrainModalRails",
    ()=>constrainModalRails,
    "modalRailOf",
    ()=>modalRailOf,
    "updateRail",
    ()=>updateRail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tidy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tidy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
;
;
function constrainModalRails(groups) {
    let changed = false;
    const next = groups.map((group)=>{
        if (group.items.length === 1 || !group.items.some((it)=>it.kind === "navRail" && it.railModal)) return group;
        changed = true;
        return {
            ...group,
            items: group.items.map((it)=>{
                if (it.kind !== "navRail" || !it.railModal) return it;
                const { [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railExpansionSide"]]: _side, ...item } = it;
                return {
                    ...item,
                    railModal: false,
                    railExpanded: false
                };
            })
        };
    });
    return changed ? next : groups;
}
const modalRailOf = (group)=>group.items.length === 1 && group.items[0].kind === "navRail" && group.items[0].railModal && group.items[0].railExpanded ? group.items[0] : undefined;
function updateRail(groups, frames, widths, id, patch) {
    const target = groups.find((g)=>g.items.some((it)=>it.id === id && it.kind === "navRail"));
    if (!target) return groups;
    const item = target.items.find((it)=>it.id === id);
    const updated = {
        ...item,
        ...patch
    };
    if (target.items.length > 1 && updated.railModal) return constrainModalRails(groups);
    if (Object.entries(patch).every(([key, value])=>item[key] === value)) return groups;
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(target, frames, widths);
    const standalone = target.items.length === 1;
    const right = standalone && frame && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tidy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railSide"])(target, frame, widths) === "right";
    const x = right ? target.x + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railWidth"])(item) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railWidth"])(updated) : target.x;
    if (standalone && frame && !item.railExpanded && updated.railExpanded) {
        updated[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railExpansionSide"]] = right ? "right" : "left";
    } else if (!updated.railExpanded) {
        delete updated[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railExpansionSide"]];
    }
    const next = groups.map((g)=>g === target ? {
            ...g,
            x,
            items: g.items.map((it)=>it.id === id ? updated : it)
        } : g);
    if (!standalone || !frame) return next;
    const before = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tidy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["barSlotOf"])(groups, frame, frames, widths);
    /* Resizing can move the rail's centre across the frame midpoint. Keep the side
   * chosen before the edit when computing its effect on the body's layout slot. */ const delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railLayoutWidth"])(updated) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railLayoutWidth"])(item);
    const after = {
        x: before.x + (right ? 0 : delta),
        w: before.w - delta
    };
    if (before.x === after.x && before.w === after.w) return next;
    const { h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame);
    const owners = new Set(groups.filter((g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(g, frames, widths)?.id === frame.id).map((g)=>g.id));
    return next.map((g)=>{
        if (!owners.has(g.id) || g.locked || g.items.some((it)=>it.kind === "navRail")) return g;
        return {
            ...g,
            x: g.x + after.x - before.x,
            /* Hand-made groups keep their internal geometry; only the whole group follows the body. */ items: g.free ? g.items : g.items.map((it)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carryItemSize"])(it, {
                    w: before.w,
                    h
                }, {
                    w: after.w,
                    h
                }))
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/railView.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "railMotionTargets",
    ()=>railMotionTargets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
;
function railMotionTargets(before, after, widths, railId) {
    const groups = new Set();
    const items = new Set([
        railId
    ]);
    const previous = new Map(before.map((group)=>[
            group.id,
            group
        ]));
    for (const group of after){
        const old = previous.get(group.id);
        if (!old) continue;
        if (old.x !== group.x || old.y !== group.y) groups.add(group.id);
        const placed = new Map((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutOf"])(old, widths).map((part)=>[
                part.item.id,
                part
            ]));
        for (const part of (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutOf"])(group, widths)){
            const was = placed.get(part.item.id);
            if (!was) continue;
            if (was.w !== part.w || was.h !== part.h) items.add(part.item.id);
        }
    }
    return {
        groups,
        items
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/shapes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Material 3 Expressive loading-indicator shapes.
 *
 * SVG path data comes from the official Material Design shape assets and the
 * morph/rotation model mirrors material-components-android's
 * LoadingIndicatorAnimatorDelegate (Apache-2.0, see NOTICE).
 * Sequence: SOFT_BURST → COOKIE_9 → PENTAGON → PILL → SUNNY → COOKIE_4 → OVAL
 */ __turbopack_context__.s([
    "DURATION_PER_SHAPE_MS",
    ()=>DURATION_PER_SHAPE_MS,
    "LoadingAnimator",
    ()=>LoadingAnimator,
    "SHAPE_COUNT",
    ()=>SHAPE_COUNT,
    "Spring",
    ()=>Spring,
    "getShapes",
    ()=>getShapes,
    "morphedShape",
    ()=>morphedShape
]);
const SHAPE_COUNT = 7;
const SAMPLES_PER_CURVE = 14;
const POINTS_PER_SHAPE = 180;
const SVG_DEFS = [
    {
        viewBox: 144,
        d: "M65.3162 3.5567C68.3922 -1.18556 75.6078 -1.18557 78.6837 3.55669L86.0569 14.9241C88.0791 18.0418 92.1588 19.3094 95.7112 17.9237L108.664 12.8715C114.067 10.7638 119.905 14.8195 119.478 20.3849L118.456 33.7255C118.175 37.3845 120.697 40.7029 124.422 41.5786L138.007 44.7714C143.674 46.1033 145.903 52.6655 142.137 56.9283L133.11 67.1465C130.634 69.9491 130.634 74.0509 133.11 76.8535L142.137 87.0716C145.903 91.3345 143.674 97.8967 138.007 99.2286L124.422 102.421C120.697 103.297 118.175 106.616 118.456 110.274L119.478 123.615C119.905 129.181 114.067 133.236 108.664 131.129L95.7112 126.076C92.1588 124.691 88.0791 125.958 86.0569 129.076L78.6838 140.443C75.6078 145.186 68.3922 145.186 65.3162 140.443L57.9431 129.076C55.9208 125.958 51.8412 124.691 48.2888 126.076L35.3365 131.129C29.933 133.236 24.0954 129.181 24.5219 123.615L25.5442 110.274C25.8246 106.616 23.3033 103.297 19.5775 102.421L5.99339 99.2286C0.326335 97.8967 -1.90342 91.3345 1.86259 87.0717L10.8899 76.8535C13.3658 74.0509 13.3658 69.9491 10.8899 67.1465L1.8626 56.9283C-1.90341 52.6655 0.326326 46.1033 5.99338 44.7714L19.5775 41.5786C23.3033 40.7029 25.8246 37.3845 25.5442 33.7255L24.5219 20.3849C24.0954 14.8195 29.933 10.7638 35.3364 12.8715L48.2888 17.9237C51.8412 19.3094 55.9208 18.0418 57.9431 14.9241L65.3162 3.5567Z"
    },
    {
        viewBox: 144,
        d: "M56.3679 6.02002C57.1442 5.3783 57.5324 5.05744 57.8867 4.78656C66.2354 -1.59552 77.7646 -1.59552 86.1133 4.78656C86.4676 5.05744 86.8558 5.3783 87.6321 6.02002C87.9786 6.30648 88.1519 6.44971 88.3233 6.58606C92.2522 9.71203 97.0693 11.4835 102.068 11.6405C102.286 11.6473 102.51 11.6501 102.957 11.6558C103.96 11.6684 104.462 11.6747 104.906 11.6973C115.361 12.2303 124.193 19.7179 126.528 30.0289C126.627 30.4666 126.721 30.9644 126.907 31.9602C126.99 32.4047 127.032 32.627 127.076 32.8427C128.097 37.789 130.661 42.2744 134.39 45.6409C134.552 45.7878 134.722 45.9353 135.062 46.2304C135.822 46.8914 136.202 47.2219 136.528 47.5275C144.198 54.7262 146.2 66.1979 141.429 75.6132C141.227 76.0128 140.981 76.4547 140.49 77.3386C140.271 77.7332 140.162 77.9304 140.059 78.1246C137.694 82.5768 136.804 87.6775 137.519 92.6782C137.55 92.8964 137.586 93.1196 137.658 93.5661C137.82 94.5662 137.901 95.0663 137.956 95.5117C139.252 106.008 133.488 116.096 123.843 120.21C123.434 120.385 122.965 120.564 122.026 120.922C121.608 121.082 121.398 121.162 121.196 121.244C116.552 123.119 112.625 126.448 109.991 130.743C109.876 130.93 109.762 131.125 109.533 131.514C109.021 132.385 108.765 132.821 108.523 133.198C102.839 142.08 92.0048 146.064 81.9992 142.952C81.5745 142.82 81.1011 142.652 80.1544 142.318C79.7318 142.168 79.5205 142.094 79.3133 142.025C74.5631 140.445 69.4369 140.445 64.6867 142.025C64.4795 142.094 64.2682 142.168 63.8456 142.318C62.8989 142.652 62.4255 142.82 62.0008 142.952C51.9952 146.064 41.1613 142.08 35.4766 133.198C35.2353 132.821 34.9791 132.385 34.4669 131.514C34.2382 131.125 34.1239 130.93 34.009 130.743C31.3752 126.448 27.4482 123.119 22.8044 121.244C22.6018 121.162 22.3924 121.082 21.9736 120.922C21.0354 120.564 20.5663 120.385 20.1569 120.21C10.5122 116.096 4.74763 106.008 6.04367 95.5117C6.09868 95.0663 6.17963 94.5662 6.34151 93.5661C6.41377 93.1196 6.4499 92.8964 6.48109 92.6783C7.19603 87.6775 6.30587 82.5768 3.94121 78.1246C3.83807 77.9304 3.72855 77.7332 3.50951 77.3386C3.01883 76.4547 2.77349 76.0128 2.57099 75.6132C-2.19995 66.1979 -0.197931 54.7262 7.47248 47.5275C7.79804 47.2219 8.17819 46.8914 8.93848 46.2304C9.27787 45.9353 9.44757 45.7878 9.61023 45.6409C13.3394 42.2744 15.9025 37.789 16.9235 32.8427C16.9681 32.627 17.0097 32.4047 17.0929 31.9602C17.2793 30.9644 17.3725 30.4666 17.4717 30.0289C19.8069 19.7179 28.6387 12.2303 39.0944 11.6973C39.5382 11.6747 40.0397 11.6684 41.0426 11.6558C41.4903 11.6501 41.7142 11.6473 41.9322 11.6405C46.9307 11.4835 51.7478 9.71203 55.6767 6.58606C55.8481 6.44971 56.0214 6.30648 56.3679 6.02002Z"
    },
    {
        viewBox: 144,
        d: "M49.3332 10.9681C56.3577 5.53061 59.8699 2.81189 63.6224 1.46315C69.0501 -0.487717 74.9499 -0.487717 80.3776 1.46315C84.1301 2.81189 87.6423 5.53062 94.6668 10.9681L110.03 22.8606L125.386 34.0038C132.67 39.2902 136.313 41.9334 138.747 45.2576C142.27 50.0661 144.119 55.9761 143.994 62.0207C143.907 66.1996 142.46 70.5678 139.564 79.3044L133.535 97.4958L127.969 116.136C125.358 124.884 124.052 129.258 121.769 132.66C118.466 137.581 113.667 141.201 108.144 142.936C104.327 144.135 99.9259 144.065 91.1241 143.926L72 143.623L52.8759 143.926C44.0741 144.065 39.6732 144.135 35.8555 142.936C30.3334 141.201 25.5338 137.581 22.2314 132.66C19.9483 129.258 18.6425 124.884 16.0307 116.136L10.4655 97.4958L4.43609 79.3044C1.54044 70.5678 0.0926215 66.1996 0.00597479 62.0207C-0.119358 55.9761 1.73035 50.0661 5.2525 45.2576C7.68747 41.9334 11.3298 39.2902 18.6143 34.0038L33.9696 22.8606L49.3332 10.9681Z"
    },
    {
        viewBox: 144,
        d: "M40.4355 21.4968C63.0979 -1.16559 99.8408 -1.16559 122.503 21.4968C145.166 44.1592 145.166 80.9021 122.503 103.565L103.565 122.503C80.9021 145.166 44.1592 145.166 21.4968 122.503C-1.16559 99.8408 -1.1656 63.0979 21.4968 40.4355L40.4355 21.4968Z"
    },
    {
        viewBox: 153,
        d: "M117.835 18.5569C122.594 18.8803 124.973 19.0419 126.896 19.883C129.679 21.0999 131.9 23.3213 133.117 26.1039C133.958 28.027 134.12 30.4062 134.443 35.1647L135.181 46.0237C135.312 47.9482 135.377 48.9105 135.586 49.8297C135.889 51.1579 136.414 52.4254 137.139 53.5784C137.641 54.3763 138.275 55.1029 139.544 56.5563L146.7 64.7565C149.837 68.3499 151.405 70.1466 152.17 72.1011C153.277 74.9292 153.277 78.0708 152.17 80.8989C151.405 82.8534 149.837 84.6501 146.7 88.2435L139.544 96.4437C138.275 97.8971 137.641 98.6237 137.139 99.4217C136.414 100.575 135.889 101.842 135.586 103.17C135.377 104.09 135.312 105.052 135.181 106.976L134.443 117.835C134.12 122.594 133.958 124.973 133.117 126.896C131.9 129.679 129.679 131.9 126.896 133.117C124.973 133.958 122.594 134.12 117.835 134.443L106.976 135.181C105.052 135.312 104.09 135.377 103.17 135.586C101.842 135.889 100.575 136.414 99.4217 137.139C98.6237 137.641 97.8971 138.275 96.4437 139.544L88.2435 146.7C84.6501 149.837 82.8534 151.405 80.8989 152.17C78.0708 153.277 74.9292 153.277 72.1011 152.17C70.1466 151.405 68.3499 149.837 64.7565 146.7L56.5563 139.544C55.1029 138.275 54.3763 137.641 53.5784 137.139C52.4254 136.414 51.1579 135.889 49.8297 135.586C48.9105 135.377 47.9482 135.312 46.0237 135.181L35.1647 134.443C30.4062 134.12 28.027 133.958 26.1039 133.117C23.3213 131.9 21.0999 129.679 19.883 126.896C19.0419 124.973 18.8803 122.594 18.5569 117.835L17.819 106.976C17.6882 105.052 17.6228 104.09 17.4136 103.17C17.1113 101.842 16.5863 100.575 15.8608 99.4217C15.3588 98.6237 14.7246 97.8971 13.4562 96.4437L6.29956 88.2435C3.16348 84.6501 1.59544 82.8534 0.830322 80.8989C-0.276774 78.0708 -0.276774 74.9292 0.830323 72.1011C1.59544 70.1466 3.16348 68.3499 6.29956 64.7565L13.4562 56.5563C14.7246 55.1029 15.3588 54.3763 15.8608 53.5784C16.5863 52.4254 17.1113 51.1579 17.4136 49.8297C17.6228 48.9105 17.6882 47.9482 17.819 46.0237L18.5569 35.1647C18.8803 30.4062 19.0419 28.027 19.883 26.1039C21.0999 23.3213 23.3213 21.0999 26.1039 19.883C28.027 19.0419 30.4062 18.8803 35.1647 18.5569L46.0237 17.819C47.9482 17.6882 48.9105 17.6228 49.8297 17.4136C51.1579 17.1113 52.4254 16.5863 53.5784 15.8608C54.3763 15.3588 55.1029 14.7246 56.5563 13.4562L64.7565 6.29957C68.3499 3.16348 70.1466 1.59544 72.1011 0.830323C74.9292 -0.276774 78.0708 -0.276774 80.8989 0.830323C82.8534 1.59544 84.6501 3.16348 88.2435 6.29957L96.4437 13.4562C97.8971 14.7246 98.6237 15.3588 99.4216 15.8608C100.575 16.5863 101.842 17.1113 103.17 17.4136C104.09 17.6228 105.052 17.6882 106.976 17.819L117.835 18.5569Z"
    },
    {
        viewBox: 144,
        d: "M89.4282 11.7931C116.492 0.0387955 143.961 27.5077 132.207 54.5718L130.263 59.0465C126.675 67.3094 126.675 76.6907 130.263 84.9535L132.207 89.4282C143.961 116.492 116.492 143.961 89.4282 132.207L84.9535 130.263C76.6907 126.675 67.3093 126.675 59.0465 130.263L54.5718 132.207C27.5077 143.961 0.0387983 116.492 11.7931 89.4282L13.7366 84.9535C17.3253 76.6907 17.3252 67.3093 13.7366 59.0465L11.7931 54.5718C0.0387955 27.5077 27.5077 0.0387993 54.5718 11.7931L59.0465 13.7366C67.3094 17.3252 76.6907 17.3252 84.9535 13.7366L89.4282 11.7931Z"
    },
    null
];
function parseSVGPath(d) {
    const cmds = [];
    const re = /([MCLZmclz])([^MCLZmclz]*)/g;
    let m;
    while((m = re.exec(d)) !== null){
        const nums = m[2].trim().match(/-?\d+\.?\d*(?:e[+-]?\d+)?/g);
        cmds.push({
            cmd: m[1],
            args: nums ? nums.map(Number) : []
        });
    }
    return cmds;
}
function sampleCubic(p0, p1, p2, p3, steps) {
    const out = [];
    for(let i = 1; i <= steps; i++){
        const t = i / steps;
        const u = 1 - t;
        out.push([
            u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
            u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]
        ]);
    }
    return out;
}
function svgPathToPoints(d) {
    const pts = [];
    let cx = 0;
    let cy = 0;
    for (const { cmd, args } of parseSVGPath(d)){
        if (cmd === "M") {
            cx = args[0];
            cy = args[1];
            pts.push([
                cx,
                cy
            ]);
        } else if (cmd === "L") {
            for(let i = 0; i < args.length; i += 2){
                cx = args[i];
                cy = args[i + 1];
                pts.push([
                    cx,
                    cy
                ]);
            }
        } else if (cmd === "C") {
            for(let i = 0; i < args.length; i += 6){
                const p3 = [
                    args[i + 4],
                    args[i + 5]
                ];
                pts.push(...sampleCubic([
                    cx,
                    cy
                ], [
                    args[i],
                    args[i + 1]
                ], [
                    args[i + 2],
                    args[i + 3]
                ], p3, SAMPLES_PER_CURVE));
                cx = p3[0];
                cy = p3[1];
            }
        }
    }
    return pts;
}
function normalize(pts, viewBox) {
    const h = viewBox / 2;
    const c = pts.map(([x, y])=>[
            (x - h) / h,
            (y - h) / h
        ]);
    let x0 = Infinity;
    let x1 = -Infinity;
    let y0 = Infinity;
    let y1 = -Infinity;
    for (const [x, y] of c){
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
    }
    const s = Math.min(2 / (x1 - x0), 2 / (y1 - y0));
    const ox = (x0 + x1) / 2;
    const oy = (y0 + y1) / 2;
    return c.map(([x, y])=>[
            (x - ox) * s,
            (y - oy) * s
        ]);
}
function resample(pts, n) {
    const all = [
        ...pts,
        pts[0]
    ];
    const arc = [
        0
    ];
    for(let i = 1; i < all.length; i++){
        const dx = all[i][0] - all[i - 1][0];
        const dy = all[i][1] - all[i - 1][1];
        arc.push(arc[i - 1] + Math.hypot(dx, dy));
    }
    const total = arc[arc.length - 1];
    const out = [];
    for(let i = 0; i < n; i++){
        const target = i / n * total;
        let j = 1;
        while(j < arc.length - 1 && arc[j] < target)j++;
        const t = arc[j] > arc[j - 1] ? (target - arc[j - 1]) / (arc[j] - arc[j - 1]) : 0;
        out.push([
            all[j - 1][0] + t * (all[j][0] - all[j - 1][0]),
            all[j - 1][1] + t * (all[j][1] - all[j - 1][1])
        ]);
    }
    return out;
}
function generateOval(n) {
    const pts = [];
    for(let i = 0; i < n; i++){
        const t = i / n * 2 * Math.PI;
        pts.push([
            Math.cos(t),
            0.74 * Math.sin(t)
        ]);
    }
    return pts;
}
let cache = null;
function getShapes() {
    if (cache) return cache;
    cache = SVG_DEFS.map((def)=>def === null ? generateOval(POINTS_PER_SHAPE) : resample(normalize(svgPathToPoints(def.d), def.viewBox), POINTS_PER_SHAPE));
    return cache;
}
function morphedShape(fraction) {
    const shapes = getShapes();
    const idx = Math.floor(fraction);
    const from = (idx % SHAPE_COUNT + SHAPE_COUNT) % SHAPE_COUNT;
    const to = (from + 1) % SHAPE_COUNT;
    const t = Math.max(0, Math.min(1, fraction - idx));
    const a = shapes[from];
    const b = shapes[to];
    const out = new Array(a.length);
    for(let i = 0; i < a.length; i++){
        out[i] = [
            a[i][0] + (b[i][0] - a[i][0]) * t,
            a[i][1] + (b[i][1] - a[i][1]) * t
        ];
    }
    return out;
}
class Spring {
    k;
    c;
    pos = 0;
    vel = 0;
    target = 0;
    constructor(stiffness, dampingRatio){
        this.k = stiffness;
        this.c = dampingRatio * 2 * Math.sqrt(stiffness);
    }
    step(dt) {
        const sub = dt / 12;
        for(let i = 0; i < 12; i++){
            const accel = -this.k * (this.pos - this.target) - this.c * this.vel;
            this.vel += accel * sub;
            this.pos += this.vel * sub;
        }
    }
}
const DURATION_PER_SHAPE_MS = 650;
const CONSTANT_ROTATION_DEG = 50;
const EXTRA_ROTATION_DEG = 90;
class LoadingAnimator {
    spring = new Spring(200, 0.6);
    morphTarget = 1;
    elapsed = 0;
    lastTs = 0;
    prevCycle = 0;
    rotation = 0;
    morph = 0;
    constructor(){
        this.spring.target = 1;
    }
    update(ts) {
        if (this.lastTs === 0) this.lastTs = ts;
        const dt = Math.min((ts - this.lastTs) / 1000, 0.1);
        this.lastTs = ts;
        if (dt <= 0) return;
        this.elapsed += dt * 1000;
        const cycle = Math.floor(this.elapsed / DURATION_PER_SHAPE_MS);
        if (cycle > this.prevCycle) {
            this.morphTarget += cycle - this.prevCycle;
            this.spring.target = this.morphTarget;
            this.prevCycle = cycle;
        }
        const fraction = this.elapsed % DURATION_PER_SHAPE_MS / DURATION_PER_SHAPE_MS;
        this.spring.step(dt);
        const base = this.morphTarget - 1;
        const perShape = this.spring.pos - base;
        this.rotation = ((CONSTANT_ROTATION_DEG + EXTRA_ROTATION_DEG) * base + CONSTANT_ROTATION_DEG * fraction + EXTRA_ROTATION_DEG * perShape) % 360;
        this.morph = this.spring.pos;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/share.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOCZ_PARAM",
    ()=>DOCZ_PARAM,
    "DOC_PARAM",
    ()=>DOC_PARAM,
    "hasShareHash",
    ()=>hasShareHash,
    "readShareHash",
    ()=>readShareHash,
    "shareLink",
    ()=>shareLink,
    "shareable",
    ()=>shareable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/project.ts [app-client] (ecmascript)");
;
const DOC_PARAM = "doc";
const DOCZ_PARAM = "docz";
function shareable(doc) {
    return {
        ...doc,
        frames: doc.frames.map(({ noteHistory: _h, ...f })=>f),
        groups: doc.groups.map((g)=>({
                ...g,
                items: g.items.map(({ src, noteHistory: _h, ...it })=>src && /^https?:\/\//.test(src) ? {
                        ...it,
                        src
                    } : it)
            }))
    };
}
const toBase64Url = (bytes)=>{
    let bin = "";
    for (const b of bytes)bin += String.fromCharCode(b);
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
const fromBase64Url = (s)=>{
    const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - s.length % 4) % 4);
    const bin = atob(b64);
    const out = new Uint8Array(bin.length);
    for(let i = 0; i < bin.length; i++)out[i] = bin.charCodeAt(i);
    return out;
};
async function pipe(bytes, stream) {
    const writer = stream.writable.getWriter();
    /* the writer's own promises reject too on bad input; the read below reports the failure */ writer.write(bytes).catch(()=>{});
    writer.close().catch(()=>{});
    return new Uint8Array(await new Response(stream.readable).arrayBuffer());
}
async function shareLink(doc, base) {
    const json = JSON.stringify(shareable(doc));
    if (typeof CompressionStream !== "undefined") {
        const packed = await pipe(new TextEncoder().encode(json), new CompressionStream("deflate-raw"));
        return `${base}#${DOCZ_PARAM}=${toBase64Url(packed)}`;
    }
    return `${base}#${DOC_PARAM}=${encodeURIComponent(json)}`;
}
async function readShareHash(hash) {
    const params = new URLSearchParams(hash.replace(/^#/, ""));
    try {
        let json = null;
        const packed = params.get(DOCZ_PARAM);
        if (packed) {
            const bytes = await pipe(fromBase64Url(packed), new DecompressionStream("deflate-raw"));
            json = new TextDecoder().decode(bytes);
        } else {
            json = params.get(DOC_PARAM);
        }
        if (!json) return null;
        const value = JSON.parse(json);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProject"])(value) ? value : null;
    } catch  {
        return null;
    }
}
const hasShareHash = (hash)=>{
    const params = new URLSearchParams(hash.replace(/^#/, ""));
    return params.has(DOCZ_PARAM) || params.has(DOC_PARAM);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>ThemeContext,
    "ensureFontLoaded",
    ()=>ensureFontLoaded,
    "ensureLangFontLoaded",
    ()=>ensureLangFontLoaded,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_THEME"]);
_c = ThemeContext;
const useTheme = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
};
_s(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const loaded = new Set();
function ensureFontLoaded(key, onReady) {
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONTS"].find((x)=>x.key === key);
    if (typeof document === "undefined") return;
    const ready = ()=>document.fonts?.ready.then(()=>onReady?.());
    if (!f?.google || loaded.has(key)) {
        ready();
        return;
    }
    loaded.add(key);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${f.google}&display=swap`;
    link.onload = ()=>{
        /* the stylesheet is in, but the face itself downloads on first use: load it explicitly */ const face = f.family.split(",")[0].trim().replace(/^'|'$/g, "");
        Promise.all([
            400,
            500,
            600,
            700
        ].map((w)=>document.fonts.load(`${w} 16px "${face}"`))).then(ready, ready);
    };
    document.head.appendChild(link);
}
const loadedLangs = new Set();
function ensureLangFontLoaded(lang, onReady) {
    const f = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANG_FONT"][lang];
    if (typeof document === "undefined") return;
    const ready = ()=>document.fonts?.ready.then(()=>onReady?.());
    if (!f || loadedLangs.has(lang)) {
        ready();
        return;
    }
    loadedLangs.add(lang);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${f.google}&display=swap`;
    link.onload = ()=>{
        const face = f.family.replace(/^'|'$/g, "");
        Promise.all([
            400,
            500,
            600,
            700
        ].map((w)=>document.fonts.load(`${w} 16px "${face}"`))).then(ready, ready);
    };
    document.head.appendChild(link);
}
var _c;
__turbopack_context__.k.register(_c, "ThemeContext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/tidy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "barSlotOf",
    ()=>barSlotOf,
    "bodyRect",
    ()=>bodyRect,
    "carryFrame",
    ()=>carryFrame,
    "holdsEdgeBar",
    ()=>holdsEdgeBar,
    "holdsFixedPart",
    ()=>holdsFixedPart,
    "maxFrameLength",
    ()=>maxFrameLength,
    "minFrameLength",
    ()=>minFrameLength,
    "pinOf",
    ()=>pinOf,
    "pullInto",
    ()=>pullInto,
    "railSide",
    ()=>railSide,
    "spansScreen",
    ()=>spansScreen,
    "stretchFrame",
    ()=>stretchFrame,
    "tidyFrame",
    ()=>tidyFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tokens.ts [app-client] (ecmascript)");
;
/* Rule-based layout for one screen. Nothing here is guessed by a model.
 *
 * 1. Parts of one connectable family that sit next to each other, or on top of
 *    each other, fuse into a connected run, the same way the magnetic drop does:
 *    list items stacked in a column, buttons or icon buttons side by side in a row.
 * 2. Bars stick to the edges they belong to (app bar and tabs at the top, the
 *    navigation bar at the bottom, toolbars and snackbars hovering above it,
 *    a bottom sheet on the bottom edge), a FAB takes the bottom-right corner,
 *    a dialog is centered.
 * 3. Everything else is stacked between the bars on the 16dp layout margins, from
 *    the top unless the screen asks for the body centered, at the bottom or spread. Rows,
 *    hand-made groups and intentional overlaps (a badge on an icon, parts on a
 *    box) are kept as one unit, and a part keeps the side it was on. A run
 *    nearly as wide as the content sits on the margin; a text with a switch,
 *    checkbox or radio beside it spans the row, the control on the right.
 *
 * 4. Inside one unit (parts on a box, a hand-made group) edges that are almost
 *    aligned snap to the common line; across the screen, boxes whose corners are
 *    almost the same radius become the same, and likewise cards. Both only act on
 *    differences a hand would call a slip, never on a gap someone clearly meant.
 *
 * Only positions change and runs are joined; sizes, order and contents stay,
 * apart from a corner radius evened out by rule 4. */ /** the farthest two edges may be apart and still count as meant to line up */ const SNAP = 6;
/** the farthest two corner radii may be apart and still count as meant to match */ const RADIUS_SNAP = 4;
/** vertical distance between stacked rows */ const ROW_GAP = 16;
/** a tighter gap after a heading and between list-like rows of one kind */ const TIGHT_GAP = 8;
/** horizontal distance between parts packed into one row */ const ROW_ITEM_GAP = 8;
/** the farthest two parts of one family may be apart and still be joined: side by side, and stacked */ const JOIN_GAP_X = 24;
const JOIN_GAP_Y = 48;
/** parts of one family the author kept apart stay clearly apart, beyond the joining distance */ const APART_GAP_X = JOIN_GAP_X + 8;
const APART_GAP_Y = JOIN_GAP_Y + 8;
const LIST_KINDS = new Set([
    "listItem",
    "textField",
    "select",
    "checkbox",
    "radio",
    "switch",
    "chip",
    "divider",
    "card"
]);
const overlap = (a, b)=>Math.min(a.r, b.r) > Math.max(a.l, b.l) && Math.min(a.b, b.b) > Math.max(a.t, b.t);
const union = (a, b)=>({
        l: Math.min(a.l, b.l),
        t: Math.min(a.t, b.t),
        r: Math.max(a.r, b.r),
        b: Math.max(a.b, b.b)
    });
/** how much of the smaller extent two spans share, 0..1 */ const share = (a0, a1, b0, b1)=>Math.max(0, Math.min(a1, b1) - Math.max(a0, b0)) / Math.max(1, Math.min(a1 - a0, b1 - b0));
/* ---------- 1. join runs ---------- */ /** whether the whole run is one connectable family, so a neighbour can join it */ const runFamily = (g)=>{
    if (g.free) return null;
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectSpecOf"])(g.items[0]);
    if (!spec) return null;
    if (!g.items.every((it)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canJoin"])(g.items[0], it))) return null;
    return {
        axis: spec.axis,
        probe: g.items[0]
    };
};
/** Neighbouring runs of one family fuse into a single run, in reading order. */ function joinRuns(groups, widths) {
    const out = [
        ...groups
    ];
    for(;;){
        let joined = false;
        const bounds = new Map(out.map((g)=>[
                g.id,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths)
            ]));
        outer: for(let i = 0; i < out.length; i++){
            const a = out[i];
            const fa = runFamily(a);
            if (!fa) continue;
            for(let j = 0; j < out.length; j++){
                if (i === j) continue;
                const b = out[j];
                const fb = runFamily(b);
                if (!fb || fa.axis !== fb.axis || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canJoin"])(fa.probe, fb.probe)) continue;
                const ra = bounds.get(a.id);
                const rb = bounds.get(b.id);
                /* b must come right after a along the axis, and line up across it; parts dropped onto
         * each other count as neighbours too, read from the one that starts first */ const gap = fa.axis === "x" ? rb.l - ra.r : rb.t - ra.b;
                if (gap > (fa.axis === "x" ? JOIN_GAP_X : JOIN_GAP_Y)) continue;
                const ahead = fa.axis === "x" ? ra.l < rb.l || ra.l === rb.l && i < j : ra.t < rb.t || ra.t === rb.t && i < j;
                if (gap < -2 && !ahead) continue;
                const lined = fa.axis === "x" ? share(ra.t, ra.b, rb.t, rb.b) : share(ra.l, ra.r, rb.l, rb.r);
                if (lined < 0.5) continue;
                /* nothing else may sit between them */ const between = fa.axis === "x" ? {
                    l: ra.r,
                    t: Math.min(ra.t, rb.t),
                    r: rb.l,
                    b: Math.max(ra.b, rb.b)
                } : {
                    l: Math.min(ra.l, rb.l),
                    t: ra.b,
                    r: Math.max(ra.r, rb.r),
                    b: rb.t
                };
                if (out.some((o)=>o !== a && o !== b && overlap(bounds.get(o.id), between))) continue;
                const merged = {
                    ...a,
                    axis: fa.axis,
                    items: [
                        ...a.items,
                        ...b.items
                    ]
                };
                /* the run keeps the later layer so the joined parts still draw above whatever they were over */ const at = Math.max(i, j);
                out.splice(at, 1, merged);
                out.splice(Math.min(i, j), 1);
                joined = true;
                break outer;
            }
        }
        if (!joined) return out;
    }
}
/* ---------- 2 and 3. place ---------- */ const area = (r)=>Math.max(0, r.r - r.l) * Math.max(0, r.b - r.t);
/** Groups that touch each other stay together, so a badge on an icon or parts on a box move as one.
 *  Bars, FABs and dialogs never join a cluster: they have their own place and are often drawn over content. */ function clusters(groups, widths) {
    const units = groups.map((g)=>({
            ids: [
                g.id
            ],
            bb: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths),
            kind: g.items[0].kind,
            checked: g.items[0].checked,
            probe: g.items[0]
        }));
    for(;;){
        let merged = false;
        outer: for(let i = 0; i < units.length; i++){
            if (isAnchored(units[i])) continue;
            for(let j = i + 1; j < units.length; j++){
                if (isAnchored(units[j]) || !overlap(units[i].bb, units[j].bb)) continue;
                /* the larger member names the cluster: it is the container, the rest sits on it */ const big = area(units[i].bb) >= area(units[j].bb) ? units[i] : units[j];
                units[i] = {
                    ...big,
                    ids: [
                        ...units[i].ids,
                        ...units[j].ids
                    ],
                    bb: union(units[i].bb, units[j].bb)
                };
                units.splice(j, 1);
                merged = true;
                break outer;
            }
        }
        if (!merged) return units;
    }
}
/** Units whose vertical extents overlap and that sit side by side form one row. */ function rowsOf(units) {
    const sorted = [
        ...units
    ].sort((a, b)=>a.bb.t - b.bb.t || a.bb.l - b.bb.l);
    const out = [];
    for (const u of sorted){
        const row = out[out.length - 1];
        if (row) {
            const rt = Math.min(...row.map((r)=>r.bb.t));
            const rb = Math.max(...row.map((r)=>r.bb.b));
            const cy = (u.bb.t + u.bb.b) / 2;
            const rcy = (rt + rb) / 2;
            const beside = row.every((r)=>r.bb.r <= u.bb.l + 2 || r.bb.l >= u.bb.r - 2);
            if (beside && (cy >= rt && cy <= rb || rcy >= u.bb.t && rcy <= u.bb.b)) {
                row.push(u);
                continue;
            }
        }
        out.push([
            u
        ]);
    }
    for (const r of out)r.sort((a, b)=>a.bb.l - b.bb.l);
    return out;
}
const isRail = (u)=>u.kind === "navRail";
const isTop = (u)=>u.kind === "topAppBar" || u.kind === "tabs";
const isBottomBar = (u)=>u.kind === "bottomNav" || u.kind === "bottomSheet";
const holdsEdgeBar = (g)=>g.items.some((it)=>isTop(it) || isBottomBar(it) || isRail(it));
const isFloatingBottom = (u)=>u.kind === "toolbar" || u.kind === "snackbar";
const isFab = (u)=>u.kind === "fab" || u.kind === "extendedFab" || u.kind === "fabMenu";
const isOverlay = (u)=>u.kind === "dialog";
/** a line of text, and the small controls that pair with one across a row */ const isLabel = (u)=>u.kind === "text";
const isControl = (u)=>u.kind === "switch" || u.kind === "checkbox" || u.kind === "radio" || u.kind === "iconButton";
const isAnchored = (u)=>isRail(u) || isTop(u) || isBottomBar(u) || isFloatingBottom(u) || isFab(u) || isOverlay(u);
const holdsFixedPart = (g)=>isAnchored(g.items[0]);
/** where a unit sits horizontally, so tidying keeps a right-aligned part on the right.
 *  Judged from the edges, so a part already on the margin reads the same way after tidying. */ function align(bb, fr) {
    const w = bb.r - bb.l;
    if (w >= fr.r - fr.l - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] * 2 - 8) return "fill";
    const near = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] + 12;
    const left = bb.l - fr.l <= near;
    const right = fr.r - bb.r <= near;
    if (left && !right) return "left";
    if (right && !left) return "right";
    return "center";
}
/** the gap above a row, from what came before it */ function gapBefore(prev, row) {
    if (!prev) return 0;
    /* two stacked runs of one family were left separate on purpose: keep them beyond the joining distance */ if (prev.length === 1 && row.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canJoin"])(prev[0].probe, row[0].probe) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectSpecOf"])(prev[0].probe)?.axis === "y") return APART_GAP_Y;
    const pk = prev.length === 1 ? prev[0].kind : null;
    const k = row.length === 1 ? row[0].kind : null;
    if (pk === "text") return TIGHT_GAP;
    if (pk === "divider" || k === "divider") return TIGHT_GAP;
    if (pk && k && pk === k && LIST_KINDS.has(k)) return TIGHT_GAP;
    return ROW_GAP;
}
function pullInto(g, frame, widths) {
    const fr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameRect"])(frame);
    const bb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths);
    let dx = bb.r > fr.r ? Math.max(fr.l - bb.l, fr.r - bb.r) : bb.l < fr.l ? fr.l - bb.l : 0;
    const dy = bb.b > fr.b ? Math.max(fr.t - bb.t, fr.b - bb.b) : bb.t < fr.t ? fr.t - bb.t : 0;
    /* a bar as wide as the screen sits on its left edge; a narrower one keeps its place */ if (g.items.length === 1 && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FULL_WIDTH"].includes(g.items[0].kind) && bb.r - bb.l >= fr.r - fr.l) dx = fr.l - bb.l;
    return dx || dy ? {
        ...g,
        x: g.x + Math.round(dx),
        y: g.y + Math.round(dy)
    } : g;
}
function carryFrame(groups, frame, to, frames, widths) {
    const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame);
    const after = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(to);
    /* the rail runs the whole length of the screen, which may be longer than the device */ const fromLength = {
        w: from.w,
        h: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(frame)
    };
    const toLength = {
        w: after.w,
        h: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(to)
    };
    const owner = new Map(groups.map((g)=>[
            g.id,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(g, frames, widths)?.id
        ]));
    /* screens whose left edge is past the old right edge keep their distance from it */ const shift = after.w - from.w;
    const moved = new Map(frames.filter((f)=>f.id !== frame.id && f.x >= frame.x + from.w).map((f)=>[
            f.id,
            shift
        ]));
    const nextFrames = frames.map((f)=>f.id === to.id ? to : moved.has(f.id) ? {
            ...f,
            x: f.x + shift
        } : f);
    /* The navigation bar of a compact screen is the rail of an expanded one, and back: M3 has
   * no rail below 840dp and no bar above it, so a rail placed on a phone becomes a bar too.
   * Only a bar or rail standing on its own is swapped, and only the first of them: one
   * inside a hand-made group is part of that group's drawing. Other standalone rails keep their kind. */ const expanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpanded"])(after.w);
    const mine = groups.filter((g)=>owner.get(g.id) === frame.id);
    const standsAlone = (g, kind)=>g.items.length === 1 && g.items[0].kind === kind;
    const navGroup = mine.find((g)=>standsAlone(g, "bottomNav") || standsAlone(g, "navRail"));
    const swapNav = (g, it)=>{
        if (g !== navGroup) return it;
        if (expanded && it.kind === "bottomNav") return {
            ...it,
            kind: "navRail",
            railExpanded: false,
            size: undefined,
            size2: toLength.h,
            radiusTop: it.radiusBottom,
            radiusBottom: it.radiusTop
        };
        if (!expanded && it.kind === "navRail") {
            const { railExpanded: _expanded, railModal: _modal, [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railExpansionSide"]]: _side, ...bar } = it;
            return {
                ...bar,
                kind: "bottomNav",
                size: after.w,
                size2: undefined,
                radiusTop: it.radiusBottom,
                radiusBottom: it.radiusTop
            };
        }
        return it;
    };
    /* a rail keeps the side it stood on; one that grows out of a bar starts on the left */ const side = navGroup && standsAlone(navGroup, "navRail") ? railSide(navGroup, frame, widths) : "left";
    const railSlots = (swap)=>mine.reduce((slot, g)=>{
            if (g.items.length !== 1) return slot;
            const item = swap ? swapNav(g, g.items[0]) : g.items[0];
            if (item.kind !== "navRail") return slot;
            const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railLayoutWidth"])(item);
            const right = g.items[0].kind === "navRail" && railSide(g, frame, widths) === "right";
            return {
                total: slot.total + w,
                left: slot.left + (right ? 0 : w)
            };
        }, {
            total: 0,
            left: 0
        });
    const beforeSlots = railSlots(false);
    const afterSlots = railSlots(true);
    /* parts live in the body beside the rail: their widths follow the body, and their
   * positions are measured from its left edge, on both ends of the change */ const fromBody = {
        w: from.w - beforeSlots.total,
        h: from.h
    };
    const toBody = {
        w: after.w - afterSlots.total,
        h: after.h
    };
    /* a rail that ran the length of the screen keeps running it; one as tall as the device takes the new device */ const carryRail = (it)=>{
        const byLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carryItemSize"])(it, fromLength, toLength);
        return byLength.size2 !== it.size2 ? byLength : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carryItemSize"])(it, from, after);
    };
    const resized = groups.map((g)=>{
        const o = owner.get(g.id);
        if (o === frame.id) {
            const isRail = g === navGroup && expanded;
            const items = g.items.map((it)=>swapNav(g, spansScreen(g, frame, widths) ? carryRail(it) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carryItemSize"])(it, isRail ? from : fromBody, isRail ? after : toBody)));
            const x = isRail ? side === "right" ? to.x + after.w - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railWidth"])(items[0]) : to.x : g.x + afterSlots.left - beforeSlots.left;
            return pullInto({
                ...g,
                x,
                items
            }, to, widths);
        }
        const dx = o ? moved.get(o) : undefined;
        return dx ? {
            ...g,
            x: g.x + dx
        } : g;
    });
    return {
        frames: nextFrames,
        groups: tidyFrame(resized, to, nextFrames, widths) ?? resized
    };
}
/** a rail standing on its own from the head of the screen */ const railAtHead = (g, frame, widths)=>g.items.length === 1 && g.items[0].kind === "navRail" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths).t <= frame.y + 1;
const spansScreen = (g, frame, widths)=>{
    if (!railAtHead(g, frame, widths)) return false;
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths).b - frame.y;
    return Math.abs(b - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).h) <= 1 || Math.abs(b - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(frame)) <= 1;
};
/** a part that stays put and stands nearer the foot of the screen than its head: it goes with the foot */ const atFoot = (g, bb, fr)=>holdsFixedPart(g) && fr.b - bb.b < bb.t - fr.t;
function pinOf(g, frame, widths) {
    if (!holdsFixedPart(g)) return null;
    if (railAtHead(g, frame, widths)) return "head";
    const fr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameRect"])(frame);
    const bb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths);
    const viewH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).h;
    if (atFoot(g, bb, fr)) return bb.t >= fr.b - viewH ? "foot" : null;
    return bb.b <= fr.t + viewH ? "head" : null;
}
function stretchFrame(groups, frame, length, frames, widths) {
    const fr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameRect"])(frame);
    const to = {
        ...frame,
        length: length > (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).h ? length : undefined
    };
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(to) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(frame);
    const across = (r)=>r.l < fr.r && r.r > fr.l;
    const below = new Set(frames.filter((f)=>f.id !== frame.id && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameRect"])(f).t >= fr.b && across((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameRect"])(f))).map((f)=>f.id));
    return {
        frames: frames.map((f)=>below.has(f.id) ? {
                ...f,
                y: f.y + d
            } : f.id === frame.id ? to : f),
        groups: groups.map((g)=>{
            const owner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(g, frames, widths)?.id;
            const bb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths);
            if (owner === frame.id && spansScreen(g, frame, widths)) return {
                ...g,
                items: [
                    {
                        ...g.items[0],
                        size2: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(to) - (bb.t - fr.t)
                    }
                ]
            };
            /* a loose part is judged by its middle, the way a screen takes parts in */ const moves = owner ? below.has(owner) || owner === frame.id && atFoot(g, bb, fr) : (bb.t + bb.b) / 2 >= fr.b && across(bb);
            return moves ? {
                ...g,
                y: g.y + d
            } : g;
        })
    };
}
function minFrameLength(groups, frame, frames, widths) {
    const fr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameRect"])(frame);
    let body = 0;
    let foot = 0;
    for (const g of groups){
        /* a rail running the length follows it, so it never holds the screen long */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(g, frames, widths)?.id !== frame.id || spansScreen(g, frame, widths)) continue;
        const bb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths);
        if (atFoot(g, bb, fr)) foot = Math.max(foot, fr.b - bb.t);
        else body = Math.max(body, bb.b - fr.t);
    }
    return Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).h, Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(frame), Math.ceil((body + foot) / 4) * 4));
}
const maxFrameLength = (frame)=>Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameLengthOf"])(frame), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).h * 4);
function railSide(g, frame, widths) {
    const item = g.items[0];
    const fr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameRect"])(frame);
    const placed = g.items.length === 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutOf"])(g, widths)[0] : undefined;
    const bb = placed ? {
        l: placed.x,
        r: placed.x + placed.w
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths);
    const side = item[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railExpansionSide"]];
    if (g.items.length === 1 && item.railExpanded && side) {
        const middle = side === "right" ? bb.r - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_COLLAPSED_W"] / 2 : bb.l + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_COLLAPSED_W"] / 2;
        return middle > (fr.l + fr.r) / 2 ? "right" : "left";
    }
    return (bb.l + bb.r) / 2 > (fr.l + fr.r) / 2 ? "right" : "left";
}
function barSlotOf(groups, frame, frames, widths) {
    const { w } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame);
    const rails = groups.filter((g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(g, frames, widths)?.id === frame.id && g.items.length === 1 && g.items[0].kind === "navRail");
    const left = rails.filter((g)=>railSide(g, frame, widths) === "left").reduce((sum, g)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railLayoutWidth"])(g.items[0]), 0);
    return {
        x: frame.x + left,
        w: w - rails.reduce((sum, g)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railLayoutWidth"])(g.items[0]), 0)
    };
}
/** The value most of a set share, within `tol`: the biggest cluster wins; `prefer` breaks a tie, else the first seen. */ function commonValue(values, tol, prefer) {
    let best = null;
    for (const v of values){
        const n = values.filter((w)=>Math.abs(w - v) <= tol).length;
        if (!best || n > best.n || n === best.n && v === prefer && best.v !== prefer) best = {
            v,
            n
        };
    }
    return best && best.n >= 2 ? best.v : null;
}
/** Runs inside one unit whose left, right or top edges nearly agree move to the shared line.
 *  A run is only ever nudged by up to SNAP, so the picture stays what the author drew. */ function snapEdges(unit, groups, widths) {
    if (unit.ids.length < 2) return false;
    const runs = unit.ids.map((id)=>groups.get(id));
    const rects = new Map(runs.map((g)=>[
            g.id,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths)
        ]));
    /* the container (the biggest run) sets the line; the parts on it follow */ const container = runs.reduce((a, b)=>area(rects.get(a.id)) >= area(rects.get(b.id)) ? a : b);
    const others = runs.filter((g)=>g !== container);
    if (!others.length) return false;
    let moved = false;
    const nudge = (g, dx, dy)=>{
        if (!dx && !dy) return;
        groups.set(g.id, {
            ...groups.get(g.id),
            x: groups.get(g.id).x + dx,
            y: groups.get(g.id).y + dy
        });
        moved = true;
    };
    const lefts = commonValue(others.map((g)=>rects.get(g.id).l), SNAP);
    const rights = commonValue(others.map((g)=>rects.get(g.id).r), SNAP);
    for (const g of others){
        const r = rects.get(g.id);
        /* a run already on one shared line is left alone, so a left snap never turns into a right snap later */ if (r.l === lefts || r.r === rights) continue;
        const dl = lefts === null ? Infinity : Math.abs(r.l - lefts);
        const dr = rights === null ? Infinity : Math.abs(r.r - rights);
        if (dl <= SNAP && dl <= dr) nudge(g, Math.round(lefts - r.l), 0);
        else if (dr <= SNAP) nudge(g, Math.round(rights - r.r), 0);
    }
    /* parts side by side that nearly share a top edge: the neighbours set the line, not the part itself */ for (const g of others){
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(groups.get(g.id), widths);
        const beside = others.filter((o)=>o !== g && share(r.t, r.b, rects.get(o.id).t, rects.get(o.id).b) > 0.5).map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(groups.get(o.id), widths).t);
        const tops = beside.length === 1 ? beside[0] : commonValue(beside, SNAP);
        if (tops !== null && r.t !== tops && Math.abs(r.t - tops) <= SNAP) nudge(g, 0, Math.round(tops - r.t));
    }
    return moved;
}
/** Boxes on the screen whose corner radii almost agree take the common radius, and so do
 *  cards, each kind among its own. A card still on the shape scale is not touched: writing a
 *  radius into it would cut it loose from the Shape control. */ function evenCorners(groups) {
    const boxes = [];
    const cards = [];
    for (const g of groups.values())for (const it of g.items){
        if (it.kind === "card" && !it.corners && it.radiusTop !== undefined) cards.push({
            g,
            it,
            r: it.radiusTop
        });
        else if (it.kind === "box" && !it.corners && (it.radiusTop ?? 0) === (it.radiusBottom ?? 0)) boxes.push({
            g,
            it,
            r: it.radiusTop ?? 0
        });
    }
    let changed = false;
    const even = (list, prefer)=>{
        const common = commonValue(list.map((b)=>b.r), RADIUS_SNAP, prefer);
        if (common === null) return;
        for (const { g, it, r } of list){
            if (r === common || Math.abs(r - common) > RADIUS_SNAP) continue;
            const cur = groups.get(g.id);
            groups.set(g.id, {
                ...cur,
                items: cur.items.map((x)=>x.id === it.id ? x.kind === "card" ? {
                        ...x,
                        radiusTop: common
                    } : {
                        ...x,
                        radiusTop: common,
                        radiusBottom: common
                    } : x)
            });
            changed = true;
        }
    };
    even(boxes, 28);
    even(cards, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleR"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_SPEC"].card.radius));
    return changed;
}
function bodyRect(groups, frame, frames, widths, except = new Set()) {
    const screen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameRect"])(frame);
    /* `except` names groups being moved: a bar that is itself being aligned must not shape the body */ const mine = groups.filter((g)=>!except.has(g.id) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(g, frames, widths)?.id === frame.id);
    const units = clusters(mine, widths);
    const onRight = (u)=>railSide(mine.find((g)=>g.id === u.ids[0]), frame, widths) === "right";
    const rails = units.filter(isRail);
    const leftRails = rails.filter((u)=>!onRight(u)).reduce((sum, u)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railLayoutWidth"])(u.probe), 0);
    const rightRails = rails.filter(onRight).reduce((sum, u)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railLayoutWidth"])(u.probe), 0);
    let top = screen.t;
    for (const u of units.filter(isTop))top += u.bb.b - u.bb.t;
    let bottom = screen.b;
    for (const u of units.filter(isBottomBar))bottom -= u.bb.b - u.bb.t;
    for (const u of units.filter(isFloatingBottom))bottom -= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] + (u.bb.b - u.bb.t);
    /* a crowded short screen must not turn the box inside out */ const l = screen.l + leftRails + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"];
    const t = top + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"];
    return {
        l,
        t,
        r: Math.max(l, screen.r - rightRails - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"]),
        b: Math.max(t, bottom - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"])
    };
}
function tidyFrame(groups, frame, frames, widths) {
    const screen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameRect"])(frame);
    const mineIds = new Set(groups.filter((g)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameOfGroup"])(g, frames, widths)?.id === frame.id).map((g)=>g.id));
    if (!mineIds.size) return null;
    /* joining rewrites the list; the other screens' groups keep their slots.
   * Locked groups are finished sections: they never join, cluster or move, but they
   * keep the room they stand in, so the rest is laid out around them. */ const before = groups.filter((g)=>mineIds.has(g.id) && !g.locked);
    const fixed = clusters(groups.filter((g)=>mineIds.has(g.id) && !!g.locked), widths);
    const fixedRails = fixed.filter(isRail);
    const fixedTops = fixed.filter(isTop);
    const fixedBottoms = fixed.filter((u)=>isBottomBar(u) || isFloatingBottom(u));
    const fixedFabs = fixed.filter(isFab);
    /* the bands of body height a locked section takes, which the rows flow around */ const bands = fixed.filter((u)=>!isAnchored(u)).map((u)=>u.bb).sort((a, b)=>a.t - b.t);
    /* a labelled switch standing on its own on a phone screen reads as a settings row: it takes
   * the content width, label left, switch right. One on a box, in a group or on a desktop
   * screen keeps its size. */ let widened = false;
    const alone = (g)=>{
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(g, widths);
        /* nothing on it, and nothing beside it on the same row, which would have to share the width */ return ![
            ...before,
            ...groups.filter((o)=>mineIds.has(o.id) && o.locked)
        ].some((o)=>{
            if (o === g) return false;
            const ob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupBounds"])(o, widths);
            return overlap(ob, r) || share(r.t, r.b, ob.t, ob.b) > 0.5;
        });
    };
    const spanned = before.map((g)=>{
        const it = g.items[0];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPhoneFrame"])(frame) || g.items.length !== 1 || it.kind !== "switch" || !it.label.trim() || it.size || !alone(g)) return g;
        widened = true;
        return {
            ...g,
            items: [
                {
                    ...it,
                    size: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTENT_W"]
                }
            ]
        };
    });
    const mine = joinRuns(spanned, widths);
    const joined = mine.length !== before.length || widened;
    const units = clusters(mine, widths);
    const target = new Map();
    /* a navigation rail stands on the edge it is nearer to, left or right (a second one beside it);
   * the rest of the screen is the body between them */ const onRight = (u)=>railSide(groups.find((g)=>g.id === u.ids[0]) ?? mine.find((g)=>g.id === u.ids[0]), frame, widths) === "right";
    const slotLeft = (u)=>onRight(u) ? u.bb.r - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railLayoutWidth"])(u.probe) : u.bb.l;
    const rails = units.filter(isRail).sort((a, b)=>slotLeft(a) - slotLeft(b) || a.bb.t - b.bb.t);
    const leftRails = rails.filter((u)=>!onRight(u));
    const rightRails = rails.filter(onRight).reverse();
    /* locked rails keep their place; the others line up outside them */ let leftWidth = Math.max(0, ...fixedRails.filter((u)=>!onRight(u)).map((u)=>u.bb.r - screen.l));
    let rightWidth = Math.max(0, ...fixedRails.filter(onRight).map((u)=>screen.r - u.bb.l));
    /* Only the modal rail overhangs its reserved slot; neighbours keep their layout positions. */ leftRails.forEach((u)=>{
        target.set(u, {
            l: screen.l + leftWidth,
            t: screen.t
        });
        leftWidth += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railLayoutWidth"])(u.probe);
    });
    rightRails.forEach((u)=>{
        /* A modal rail overlays the body, but its visible outer edge stays on the screen. */ target.set(u, {
            l: screen.r - rightWidth - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railWidth"])(u.probe),
            t: screen.t
        });
        rightWidth += (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["railLayoutWidth"])(u.probe);
    });
    const fr = {
        ...screen,
        l: screen.l + leftWidth,
        r: screen.r - rightWidth
    };
    const frameW = fr.r - fr.l;
    /* locked bars keep their place too; the others stack beyond them */ let top = Math.max(fr.t, ...fixedTops.map((u)=>u.bb.b));
    for (const u of units.filter(isTop).sort((a, b)=>a.bb.t - b.bb.t)){
        target.set(u, {
            l: fr.l,
            t: top
        });
        top += u.bb.b - u.bb.t;
    }
    let bottom = Math.min(fr.b, ...fixedBottoms.map((u)=>u.bb.t));
    for (const u of units.filter(isBottomBar).sort((a, b)=>b.bb.t - a.bb.t)){
        bottom -= u.bb.b - u.bb.t;
        target.set(u, {
            l: fr.l + Math.max(0, Math.round((frameW - (u.bb.r - u.bb.l)) / 2)),
            t: bottom
        });
    }
    for (const u of units.filter(isFloatingBottom).sort((a, b)=>b.bb.t - a.bb.t)){
        const h = u.bb.b - u.bb.t;
        const w = u.bb.r - u.bb.l;
        bottom -= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] + h;
        target.set(u, {
            l: fr.l + Math.round((frameW - w) / 2),
            t: bottom
        });
    }
    let fabBottom = Math.min(bottom, ...fixedFabs.map((u)=>u.bb.t));
    for (const u of units.filter(isFab).sort((a, b)=>b.bb.t - a.bb.t)){
        const h = u.bb.b - u.bb.t;
        const w = u.bb.r - u.bb.l;
        fabBottom -= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] + h;
        target.set(u, {
            l: fr.r - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] - w,
            t: fabBottom
        });
    }
    /* a dialog is centered on the device: on a screen that runs further, that is its first screenful */ const viewH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSizeOf"])(frame).h;
    for (const u of units.filter(isOverlay)){
        target.set(u, {
            l: fr.l + Math.round((frameW - (u.bb.r - u.bb.l)) / 2),
            t: fr.t + Math.round((viewH - (u.bb.b - u.bb.t)) / 2)
        });
    }
    /* everything else flows in rows between the top and bottom bars, on the layout margins;
   * rows that would not fit are left where they are rather than pushed off the screen.
   * The rows are measured first, then the whole block is placed the way the screen asks:
   * from the top, centered, against the bottom, or spread out with equal gaps. */ const rows = rowsOf(units.filter((u)=>!target.has(u)));
    const limit = bottom - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"];
    const start = top + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"];
    const laid = [];
    let y = start;
    let prev = null;
    for (const row of rows){
        y += gapBefore(prev, row);
        const rowH = Math.max(...row.map((u)=>u.bb.b - u.bb.t));
        /* a row that would land on a locked section goes below it instead */ for (const band of bands)if (y < band.b + ROW_GAP && y + rowH > band.t - ROW_GAP) y = band.b + ROW_GAP;
        if (y + rowH > limit) break;
        laid.push({
            row,
            y,
            rowH
        });
        y += rowH;
        prev = row;
    }
    const used = laid.length ? y - start : 0;
    const spare = Math.max(0, limit - start - used);
    const place = frame.place ?? "top";
    /* spreading shares all the free height equally above, between and below the rows,
   * in place of the rows' own gaps; a lone row spreads to the middle, like centering */ const heights = laid.map((r)=>r.rowH);
    /* when some rows did not fit they stay where they were, below the block, so the block
   * stays at the top rather than moving down onto them */ const fits = laid.length === rows.length;
    /* rows flowed around a locked section stay where the flow put them: shifting the block
   * to the center or the bottom would put them back onto it */ const spreading = fits && !bands.length && place === "spread" && laid.length > 1;
    const even = spreading ? (spare + used - heights.reduce((a, h)=>a + h, 0)) / (laid.length + 1) : 0;
    const offset = !fits || bands.length ? 0 : place === "center" || place === "spread" && laid.length <= 1 ? Math.round(spare / 2) : place === "bottom" ? spare : 0;
    let stacked = 0;
    laid.forEach(({ row, y: rowY, rowH }, index)=>{
        const yy = spreading ? start + Math.round(even * (index + 1)) + stacked : rowY + offset;
        stacked += rowH;
        const inner = frameW - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] * 2;
        /* a part that spans the screen -- a carousel, a bar laid in the flow -- is edge to edge, and
     * the margin is not its to keep, whatever else shares its line */ const isFull = (u)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FULL_WIDTH"].includes(u.kind) && u.bb.r - u.bb.l >= frameW - 1;
        for (const u of row)if (isFull(u)) target.set(u, {
            l: fr.l,
            t: yy
        });
        row = row.filter((u)=>!isFull(u));
        if (row.length === 0) return;
        if (row.length === 1) {
            const u = row[0];
            const w = u.bb.r - u.bb.l;
            const a = align(u.bb, fr);
            /* a run nearly as wide as the content (a button row, a chip row) sits on the left margin,
       * so its edge lines up with the cards and lists above and below it */ const wide = w >= inner * 0.7;
            const l = wide || a === "left" ? fr.l + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] : a === "right" ? fr.r - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] - w : fr.l + Math.round((frameW - w) / 2);
            target.set(u, {
                l,
                t: yy
            });
        } else if (row.length === 2 && row.some(isLabel) && row.some(isControl)) {
            /* a label with its control: the label on the left margin, the control on the right, like a settings row */ const label = row.find(isLabel);
            const control = row.find(isControl);
            const cw = control.bb.r - control.bb.l;
            target.set(label, {
                l: fr.l + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"],
                t: yy + Math.round((rowH - (label.bb.b - label.bb.t)) / 2)
            });
            target.set(control, {
                l: fr.r - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] - cw,
                t: yy + Math.round((rowH - (control.bb.b - control.bb.t)) / 2)
            });
        } else {
            const ws = row.map((u)=>u.bb.r - u.bb.l);
            const total = ws.reduce((s, w)=>s + w, 0);
            /* neighbours of one family that were not joined were kept apart on purpose */ const gaps = row.slice(1).map((u, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canJoin"])(row[i].probe, u.probe) ? APART_GAP_X : ROW_ITEM_GAP);
            const minPacked = total + gaps.reduce((s, g)=>s + g, 0);
            const span = row[row.length - 1].bb.r - row[0].bb.l;
            const spread = span >= inner * 0.7 && minPacked <= inner;
            const packed = spread ? inner : minPacked;
            const extra = spread ? (inner - minPacked) / gaps.length : 0;
            const a = spread ? "left" : align({
                l: row[0].bb.l,
                t: 0,
                r: row[row.length - 1].bb.r,
                b: 0
            }, fr);
            let x = a === "right" ? fr.r - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"] - packed : a === "center" ? fr.l + (frameW - packed) / 2 : fr.l + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHONE_MARGIN"];
            row.forEach((u, i)=>{
                const h = u.bb.b - u.bb.t;
                target.set(u, {
                    l: Math.round(x),
                    t: yy + Math.round((rowH - h) / 2)
                });
                x += ws[i] + (gaps[i] ?? 0) + extra;
            });
        }
    });
    /* apply each unit's shift to every group it holds */ const shift = new Map();
    for (const [u, to] of target){
        const dx = Math.round(to.l - u.bb.l);
        const dy = Math.round(to.t - u.bb.t);
        for (const id of u.ids)shift.set(id, {
            dx,
            dy
        });
    }
    let moved = joined;
    const placed = new Map(mine.map((g)=>{
        const s = shift.get(g.id);
        if (!s || s.dx === 0 && s.dy === 0) return [
            g.id,
            g
        ];
        moved = true;
        const x = g.x + s.dx;
        return [
            g.id,
            {
                ...g,
                x,
                y: g.y + s.dy
            }
        ];
    }));
    for (const u of units)if (snapEdges(u, placed, widths)) moved = true;
    if (evenCorners(placed)) moved = true;
    if (!moved) return null;
    /* keep canvas order: a joined run takes the slot of its last original member */ const survivorOf = new Map();
    for (const m of mine)for (const it of m.items)survivorOf.set(it.id, m);
    const lastSlot = new Map();
    groups.forEach((g, i)=>{
        if (mineIds.has(g.id) && !g.locked) lastSlot.set(survivorOf.get(g.items[0].id).id, i);
    });
    const out = [];
    groups.forEach((g, i)=>{
        if (!mineIds.has(g.id)) {
            out.push(g);
            return;
        }
        /* a locked group keeps its position and its slot untouched */ if (g.locked) {
            out.push(g);
            return;
        }
        const m = survivorOf.get(g.items[0].id);
        if (lastSlot.get(m.id) === i) out.push(placed.get(m.id));
    });
    return out;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/tokens.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BACK_TARGET",
    ()=>BACK_TARGET,
    "BEZEL",
    ()=>BEZEL,
    "BUTTON_H_MAX",
    ()=>BUTTON_H_MAX,
    "BUTTON_H_MIN",
    ()=>BUTTON_H_MIN,
    "BUTTON_SIZES",
    ()=>BUTTON_SIZES,
    "CARD_GAP",
    ()=>CARD_GAP,
    "CARD_IMAGE_MIN",
    ()=>CARD_IMAGE_MIN,
    "CARD_MEDIA_GAP",
    ()=>CARD_MEDIA_GAP,
    "CARD_PADDING",
    ()=>CARD_PADDING,
    "CARD_SIDE_IMAGE_W",
    ()=>CARD_SIDE_IMAGE_W,
    "CARD_TEXT_GAP",
    ()=>CARD_TEXT_GAP,
    "CAROUSEL_HEIGHTS",
    ()=>CAROUSEL_HEIGHTS,
    "CAROUSEL_LAYOUTS",
    ()=>CAROUSEL_LAYOUTS,
    "CATEGORIES",
    ()=>CATEGORIES,
    "CHIP_H_MAX",
    ()=>CHIP_H_MAX,
    "CHIP_H_MIN",
    ()=>CHIP_H_MIN,
    "CHIP_SIZES",
    ()=>CHIP_SIZES,
    "CHOICE_KINDS",
    ()=>CHOICE_KINDS,
    "COLOR_TOKENS",
    ()=>COLOR_TOKENS,
    "CONTENT_W",
    ()=>CONTENT_W,
    "CONTRASTS",
    ()=>CONTRASTS,
    "DATE_LAYOUTS",
    ()=>DATE_LAYOUTS,
    "DEFAULT_PLATFORM",
    ()=>DEFAULT_PLATFORM,
    "DEFAULT_THEME",
    ()=>DEFAULT_THEME,
    "DESKTOP_H",
    ()=>DESKTOP_H,
    "DESKTOP_R",
    ()=>DESKTOP_R,
    "DESKTOP_W",
    ()=>DESKTOP_W,
    "ENTRY_BOUNDS",
    ()=>ENTRY_BOUNDS,
    "EXPANDED_W",
    ()=>EXPANDED_W,
    "FAB_H_MAX",
    ()=>FAB_H_MAX,
    "FAB_H_MIN",
    ()=>FAB_H_MIN,
    "FAB_KINDS",
    ()=>FAB_KINDS,
    "FAB_MENU_CLOSE",
    ()=>FAB_MENU_CLOSE,
    "FAB_MENU_GAP",
    ()=>FAB_MENU_GAP,
    "FAB_MENU_ITEM_H",
    ()=>FAB_MENU_ITEM_H,
    "FAB_SIZES",
    ()=>FAB_SIZES,
    "FIELD_KINDS",
    ()=>FIELD_KINDS,
    "FIXED_TABS_MAX",
    ()=>FIXED_TABS_MAX,
    "FONTS",
    ()=>FONTS,
    "FRAME_GAP",
    ()=>FRAME_GAP,
    "FRAME_LABEL_H",
    ()=>FRAME_LABEL_H,
    "FULL_WIDTH",
    ()=>FULL_WIDTH,
    "GAP",
    ()=>GAP,
    "H",
    ()=>H,
    "HALF_W",
    ()=>HALF_W,
    "HEIGHT_PRESETS",
    ()=>HEIGHT_PRESETS,
    "KIND_ORDER",
    ()=>KIND_ORDER,
    "KIND_SPEC",
    ()=>KIND_SPEC,
    "LANG_FONT",
    ()=>LANG_FONT,
    "LINK_TARGET",
    ()=>LINK_TARGET,
    "LIST_STYLES",
    ()=>LIST_STYLES,
    "LOADING_SIZES",
    ()=>LOADING_SIZES,
    "MEASURED",
    ()=>MEASURED,
    "MENU_TARGET",
    ()=>MENU_TARGET,
    "NAV_BAR_H",
    ()=>NAV_BAR_H,
    "PALETTES",
    ()=>PALETTES,
    "PALETTE_HIDDEN",
    ()=>PALETTE_HIDDEN,
    "PHONE_H",
    ()=>PHONE_H,
    "PHONE_MARGIN",
    ()=>PHONE_MARGIN,
    "PHONE_R",
    ()=>PHONE_R,
    "PHONE_W",
    ()=>PHONE_W,
    "PICTURE_KINDS",
    ()=>PICTURE_KINDS,
    "PLACES",
    ()=>PLACES,
    "PROGRESS_DEFAULT_VALUE",
    ()=>PROGRESS_DEFAULT_VALUE,
    "PROGRESS_KINDS",
    ()=>PROGRESS_KINDS,
    "PULL_EXP",
    ()=>PULL_EXP,
    "RAIL_COLLAPSED_W",
    ()=>RAIL_COLLAPSED_W,
    "RAIL_EXPANDED_W",
    ()=>RAIL_EXPANDED_W,
    "RAIL_GAP",
    ()=>RAIL_GAP,
    "RAIL_ITEM_H",
    ()=>RAIL_ITEM_H,
    "RAIL_TOP",
    ()=>RAIL_TOP,
    "RAIL_W",
    ()=>RAIL_W,
    "RING_SIZES",
    ()=>RING_SIZES,
    "RIPPLE_KINDS",
    ()=>RIPPLE_KINDS,
    "R_FULL",
    ()=>R_FULL,
    "R_INNER",
    ()=>R_INNER,
    "SCROLL_TAB_W",
    ()=>SCROLL_TAB_W,
    "SETTLE_CSS_VARS",
    ()=>SETTLE_CSS_VARS,
    "SETTLE_MS",
    ()=>SETTLE_MS,
    "SHAPES",
    ()=>SHAPES,
    "SIZE_HANDLE_Z",
    ()=>SIZE_HANDLE_Z,
    "SLIDER_DEFAULT_VALUE",
    ()=>SLIDER_DEFAULT_VALUE,
    "SLIDE_SPEC",
    ()=>SLIDE_SPEC,
    "SNAP_CROSS",
    ()=>SNAP_CROSS,
    "SNAP_MAIN",
    ()=>SNAP_MAIN,
    "SPLIT_GAP",
    ()=>SPLIT_GAP,
    "SPLIT_MAIN_SLOT",
    ()=>SPLIT_MAIN_SLOT,
    "SPLIT_MENU_ITEM_H",
    ()=>SPLIT_MENU_ITEM_H,
    "SPLIT_MENU_PAD",
    ()=>SPLIT_MENU_PAD,
    "SPLIT_MENU_SHEET_GAP",
    ()=>SPLIT_MENU_SHEET_GAP,
    "SPLIT_MENU_SLOT",
    ()=>SPLIT_MENU_SLOT,
    "STATUS_BAR_H",
    ()=>STATUS_BAR_H,
    "SWIPE_DIRS",
    ()=>SWIPE_DIRS,
    "TAPPABLE",
    ()=>TAPPABLE,
    "TEXT_SIZES",
    ()=>TEXT_SIZES,
    "TEXT_TOKENS",
    ()=>TEXT_TOKENS,
    "TIME_LAYOUTS",
    ()=>TIME_LAYOUTS,
    "TOGGLEABLE",
    ()=>TOGGLEABLE,
    "TOP_BAR_SIZES",
    ()=>TOP_BAR_SIZES,
    "TRACK_DEFAULT",
    ()=>TRACK_DEFAULT,
    "TRACK_MAX",
    ()=>TRACK_MAX,
    "TRACK_MIN",
    ()=>TRACK_MIN,
    "TRANSITIONS",
    ()=>TRANSITIONS,
    "VARIANTS",
    ()=>VARIANTS,
    "WIDTH_PRESETS",
    ()=>WIDTH_PRESETS,
    "actionSlotsOf",
    ()=>actionSlotsOf,
    "actionsOf",
    ()=>actionsOf,
    "barWidths",
    ()=>barWidths,
    "baseRadii",
    ()=>baseRadii,
    "buttonHeightOf",
    ()=>buttonHeightOf,
    "buttonMetrics",
    ()=>buttonMetrics,
    "buttonSizeKeyOf",
    ()=>buttonSizeKeyOf,
    "canJoin",
    ()=>canJoin,
    "cardBodyColorOf",
    ()=>cardBodyColorOf,
    "cardContentAlignOf",
    ()=>cardContentAlignOf,
    "cardDefaultFillOf",
    ()=>cardDefaultFillOf,
    "cardFillOf",
    ()=>cardFillOf,
    "cardImageMaxOf",
    ()=>cardImageMaxOf,
    "cardImagePosOf",
    ()=>cardImagePosOf,
    "cardImageSizeOf",
    ()=>cardImageSizeOf,
    "cardScrimOf",
    ()=>cardScrimOf,
    "cardTextAlignOf",
    ()=>cardTextAlignOf,
    "cardTextColorOf",
    ()=>cardTextColorOf,
    "cardWidths",
    ()=>cardWidths,
    "carouselCardPatch",
    ()=>carouselCardPatch,
    "carouselCardsOf",
    ()=>carouselCardsOf,
    "carouselCountOf",
    ()=>carouselCountOf,
    "carouselInset",
    ()=>carouselInset,
    "carouselLayoutOf",
    ()=>carouselLayoutOf,
    "carouselRowWidth",
    ()=>carouselRowWidth,
    "carouselScrollMax",
    ()=>carouselScrollMax,
    "carouselShapes",
    ()=>carouselShapes,
    "carouselStops",
    ()=>carouselStops,
    "carouselTrack",
    ()=>carouselTrack,
    "carryItemSize",
    ()=>carryItemSize,
    "chipHeightOf",
    ()=>chipHeightOf,
    "chipMetrics",
    ()=>chipMetrics,
    "clamp",
    ()=>clamp,
    "collapseFree",
    ()=>collapseFree,
    "connectSpecOf",
    ()=>connectSpecOf,
    "connectable",
    ()=>connectable,
    "contentWidth",
    ()=>contentWidth,
    "dateLayoutOf",
    ()=>dateLayoutOf,
    "defaultPlatformOf",
    ()=>defaultPlatformOf,
    "defaultTabs",
    ()=>defaultTabs,
    "defaultTabsFor",
    ()=>defaultTabsFor,
    "draftGradient",
    ()=>draftGradient,
    "explodeGroup",
    ()=>explodeGroup,
    "extendedFabHeight",
    ()=>extendedFabHeight,
    "extendedFabMetrics",
    ()=>extendedFabMetrics,
    "fabOpen",
    ()=>fabOpen,
    "fabTypePatch",
    ()=>fabTypePatch,
    "fitHeight",
    ()=>fitHeight,
    "fontFamilyOf",
    ()=>fontFamilyOf,
    "frameLengthOf",
    ()=>frameLengthOf,
    "frameOfGroup",
    ()=>frameOfGroup,
    "framePresetOf",
    ()=>framePresetOf,
    "framePresetPatch",
    ()=>framePresetPatch,
    "frameRadius",
    ()=>frameRadius,
    "frameRect",
    ()=>frameRect,
    "frameSizeOf",
    ()=>frameSizeOf,
    "freeRadii",
    ()=>freeRadii,
    "getShape",
    ()=>getShape,
    "groupBounds",
    ()=>groupBounds,
    "groupsInFrame",
    ()=>groupsInFrame,
    "halfWidth",
    ()=>halfWidth,
    "hasMenu",
    ()=>hasMenu,
    "hasPickerFields",
    ()=>hasPickerFields,
    "iconSlotsOf",
    ()=>iconSlotsOf,
    "isCardAlign",
    ()=>isCardAlign,
    "isCardImageBand",
    ()=>isCardImageBand,
    "isCardImagePos",
    ()=>isCardImagePos,
    "isChoice",
    ()=>isChoice,
    "isExpanded",
    ()=>isExpanded,
    "isFab",
    ()=>isFab,
    "isField",
    ()=>isField,
    "isMeasured",
    ()=>isMeasured,
    "isPhoneFrame",
    ()=>isPhoneFrame,
    "isPicture",
    ()=>isPicture,
    "isPlace",
    ()=>isPlace,
    "isPlatform",
    ()=>isPlatform,
    "isProgress",
    ()=>isProgress,
    "isScrollableCarousel",
    ()=>isScrollableCarousel,
    "isScrollableTabs",
    ()=>isScrollableTabs,
    "isSheetBox",
    ()=>isSheetBox,
    "isTextToken",
    ()=>isTextToken,
    "isTrackThickness",
    ()=>isTrackThickness,
    "isWideRail",
    ()=>isWideRail,
    "layoutOf",
    ()=>layoutOf,
    "lerp",
    ()=>lerp,
    "linkHostOf",
    ()=>linkHostOf,
    "linkUrlOf",
    ()=>linkUrlOf,
    "listStyleOf",
    ()=>listStyleOf,
    "listStylePatch",
    ()=>listStylePatch,
    "makeItem",
    ()=>makeItem,
    "matchRunSize",
    ()=>matchRunSize,
    "maxRingThickness",
    ()=>maxRingThickness,
    "menuHeight",
    ()=>menuHeight,
    "menuOpen",
    ()=>menuOpen,
    "menuPatch",
    ()=>menuPatch,
    "menuRises",
    ()=>menuRises,
    "menuUp",
    ()=>menuUp,
    "migrateCarousel",
    ()=>migrateCarousel,
    "migrateFabMenu",
    ()=>migrateFabMenu,
    "migratePicker",
    ()=>migratePicker,
    "migrateSheetBox",
    ()=>migrateSheetBox,
    "normalizeTheme",
    ()=>normalizeTheme,
    "onToken",
    ()=>onToken,
    "opensMenu",
    ()=>opensMenu,
    "paletteOf",
    ()=>paletteOf,
    "progressThickness",
    ()=>progressThickness,
    "progressTypePatch",
    ()=>progressTypePatch,
    "radiiOfRuns",
    ()=>radiiOfRuns,
    "railExpansionSide",
    ()=>railExpansionSide,
    "railLayoutWidth",
    ()=>railLayoutWidth,
    "railMetrics",
    ()=>railMetrics,
    "railWidth",
    ()=>railWidth,
    "removeTabPatch",
    ()=>removeTabPatch,
    "reorderTabsPatch",
    ()=>reorderTabsPatch,
    "runCorners",
    ()=>runCorners,
    "runSizePatch",
    ()=>runSizePatch,
    "scaleR",
    ()=>scaleR,
    "scrollsOf",
    ()=>scrollsOf,
    "setGlobalShape",
    ()=>setGlobalShape,
    "setIconSlot",
    ()=>setIconSlot,
    "sizeOf",
    ()=>sizeOf,
    "splitMenuHeight",
    ()=>splitMenuHeight,
    "splitMenuRisesAt",
    ()=>splitMenuRisesAt,
    "splitMetrics",
    ()=>splitMetrics,
    "splitOpens",
    ()=>splitOpens,
    "tabCountPatch",
    ()=>tabCountPatch,
    "tabScrollOffset",
    ()=>tabScrollOffset,
    "timeLayoutOf",
    ()=>timeLayoutOf,
    "toggleIcon",
    ()=>toggleIcon,
    "toolbarWidth",
    ()=>toolbarWidth,
    "topBarFontOf",
    ()=>topBarFontOf,
    "topBarHeightOf",
    ()=>topBarHeightOf,
    "uiFontFamily",
    ()=>uiFontFamily,
    "uid",
    ()=>uid,
    "uniformRadii",
    ()=>uniformRadii,
    "variantShadow",
    ()=>variantShadow,
    "variantStyle",
    ()=>variantStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/color.ts [app-client] (ecmascript)");
;
;
const H = 56; // M3 medium button height (dp)
const BUTTON_SIZES = [
    {
        key: "xs",
        h: 32,
        padX: 12,
        gap: 8,
        icon: 20,
        font: 14
    },
    {
        key: "s",
        h: 40,
        padX: 16,
        gap: 8,
        icon: 20,
        font: 14
    },
    {
        key: "m",
        h: 56,
        padX: 24,
        gap: 8,
        icon: 24,
        font: 16
    },
    {
        key: "l",
        h: 96,
        padX: 48,
        gap: 12,
        icon: 32,
        font: 24
    },
    {
        key: "xl",
        h: 136,
        padX: 64,
        gap: 16,
        icon: 40,
        font: 32
    }
];
const BUTTON_H_MIN = BUTTON_SIZES[0].h;
const BUTTON_H_MAX = BUTTON_SIZES[BUTTON_SIZES.length - 1].h;
/** the two named sizes a height falls between, and a way to read any measure off them mixed in
 *  proportion, so a scale stays M3-shaped the whole way rather than only on its own stops */ function onScale(steps, height) {
    const h = clamp(Math.round(height), steps[0].h, steps[steps.length - 1].h);
    let lo = steps[0];
    let hi = steps[steps.length - 1];
    for(let i = 0; i < steps.length - 1; i++){
        if (h >= steps[i].h && h <= steps[i + 1].h) {
            lo = steps[i];
            hi = steps[i + 1];
            break;
        }
    }
    const f = hi.h === lo.h ? 0 : (h - lo.h) / (hi.h - lo.h);
    return {
        h,
        of: (read)=>Math.round(lerp(read(lo), read(hi), f))
    };
}
function buttonMetrics(height) {
    const s = onScale(BUTTON_SIZES, height);
    return {
        h: s.h,
        padX: s.of((b)=>b.padX),
        gap: s.of((b)=>b.gap),
        icon: s.of((b)=>b.icon),
        font: s.of((b)=>b.font)
    };
}
const CHIP_SIZES = [
    {
        key: "xs",
        h: 32,
        padX: 16,
        lead: 8,
        gap: 8,
        icon: 18,
        font: 14
    },
    {
        key: "s",
        h: 40,
        padX: 20,
        lead: 12,
        gap: 8,
        icon: 20,
        font: 14
    },
    {
        key: "m",
        h: 56,
        padX: 24,
        lead: 16,
        gap: 8,
        icon: 24,
        font: 16
    }
];
const CHIP_H_MIN = CHIP_SIZES[0].h;
const CHIP_H_MAX = CHIP_SIZES[CHIP_SIZES.length - 1].h;
function chipMetrics(height) {
    const s = onScale(CHIP_SIZES, height);
    return {
        h: s.h,
        padX: s.of((c)=>c.padX),
        lead: s.of((c)=>c.lead),
        gap: s.of((c)=>c.gap),
        icon: s.of((c)=>c.icon),
        font: s.of((c)=>c.font)
    };
}
const SPLIT_GAP = 2;
function splitMetrics(height) {
    const m = buttonMetrics(height);
    const trailPadX = Math.round(m.padX * 0.6);
    return {
        ...m,
        trailPadX,
        trailW: m.icon + trailPadX * 2
    };
}
const SPLIT_MENU_ITEM_H = 48;
const SPLIT_MENU_PAD = 8;
const SPLIT_MENU_SHEET_GAP = 4;
const FAB_SIZES = [
    {
        key: "s",
        d: 40,
        h: 56
    },
    {
        key: "m",
        d: 56,
        h: 80
    },
    {
        key: "l",
        d: 96,
        h: 96
    }
];
const FAB_H_MIN = 40;
const FAB_H_MAX = 96;
const RING_SIZES = [
    {
        key: "s",
        value: 24
    },
    {
        key: "m",
        value: 48
    },
    {
        key: "l",
        value: 64
    }
];
const LOADING_SIZES = [
    {
        key: "s",
        value: 32
    },
    {
        key: "m",
        value: 48
    },
    {
        key: "l",
        value: 64
    },
    {
        key: "xl",
        value: 96
    }
];
const barWidths = (frameW)=>[
        {
            key: "s",
            value: halfWidth(frameW)
        },
        {
            key: "m",
            value: contentWidth(frameW)
        },
        {
            key: "l",
            value: frameW
        }
    ];
const buttonSizeKeyOf = (height)=>BUTTON_SIZES.find((s)=>s.h === height)?.key ?? null;
const GAP = 3; // connected group spacing
const R_FULL = 28; // outer corner of a connected run
const R_INNER = 8; // inner corner when connected (M3 small)
const SNAP_MAIN = 44;
const SNAP_CROSS = 24;
const PULL_EXP = 2.2;
const SETTLE_MS = 340;
const SETTLE_CSS_VARS = {
    "--m3-settle": `${SETTLE_MS}ms`,
    "--m3-ease": "cubic-bezier(0.2, 0, 0, 1)"
};
const SIZE_HANDLE_Z = 55;
const PHONE_W = 412;
const PHONE_H = 892;
const PHONE_R = 40;
const DESKTOP_W = 1280;
const DESKTOP_H = 800;
const DESKTOP_R = 28;
const EXPANDED_W = 840;
const isExpanded = (w)=>w >= EXPANDED_W;
const RAIL_W = 80;
const RAIL_TOP = 44;
const RAIL_ITEM_H = 52;
const RAIL_GAP = 12;
const RAIL_COLLAPSED_W = 96;
const RAIL_EXPANDED_W = 220;
const isWideRail = (it)=>it.railExpanded !== undefined || it.railModal === true;
const railWidth = (it)=>it.railExpanded ? RAIL_EXPANDED_W : isWideRail(it) ? RAIL_COLLAPSED_W : RAIL_W;
const railLayoutWidth = (it)=>it.railModal ? RAIL_COLLAPSED_W : railWidth(it);
const railExpansionSide = Symbol("railExpansionSide");
function railMetrics(it) {
    const wide = isWideRail(it);
    return {
        width: railWidth(it),
        headerLeft: it.railExpanded ? 16 : (railWidth(it) - 48) / 2,
        inset: wide ? 12 : 6,
        top: RAIL_TOP + (wide ? 56 : 0),
        itemHeight: wide ? 56 : RAIL_ITEM_H,
        gap: wide ? it.railExpanded ? 0 : 4 : RAIL_GAP
    };
}
const STATUS_BAR_H = 24;
const TOP_BAR_SIZES = [
    {
        key: "s",
        h: 64,
        font: 22
    },
    {
        key: "m",
        h: 112,
        font: 24
    },
    {
        key: "l",
        h: 152,
        font: 28
    }
];
const topBarHeightOf = (it)=>clamp(Math.round(it.size2 ?? TOP_BAR_SIZES[0].h), TOP_BAR_SIZES[0].h, TOP_BAR_SIZES[TOP_BAR_SIZES.length - 1].h);
const topBarFontOf = (it)=>{
    const h = topBarHeightOf(it);
    let font = TOP_BAR_SIZES[0].font;
    for (const b of TOP_BAR_SIZES)if (h >= b.h) font = b.font;
    return font;
};
const NAV_BAR_H = 24;
const PHONE_MARGIN = 16;
const contentWidth = (width)=>width - PHONE_MARGIN * 2;
const halfWidth = (width)=>(contentWidth(width) - PHONE_MARGIN) / 2;
const CONTENT_W = contentWidth(PHONE_W);
_c = CONTENT_W;
const HALF_W = halfWidth(PHONE_W);
_c1 = HALF_W;
const WIDTH_PRESETS = [
    HALF_W,
    CONTENT_W,
    PHONE_W
];
const HEIGHT_PRESETS = [
    PHONE_H / 2,
    PHONE_H
];
const BEZEL = 10;
const FRAME_LABEL_H = 44;
const FRAME_GAP = 120;
const lerp = (a, b, t)=>a + (b - a) * t;
const clamp = (v, lo, hi)=>Math.min(hi, Math.max(lo, v));
const uid = ()=>Math.random().toString(36).slice(2, 10);
const uniformRadii = (r)=>({
        tl: r,
        tr: r,
        bl: r,
        br: r
    });
const ERROR = {
    error: "#B3261E",
    onError: "#FFFFFF",
    errorContainer: "#F9DEDC",
    onErrorContainer: "#410E0B"
};
/* presets are authored without secondary; it is derived from the seed below */ const PRESETS = [
    {
        key: "purple",
        label: "Purple",
        primary: "#6750A4",
        onPrimary: "#FFFFFF",
        primaryContainer: "#EADDFF",
        onPrimaryContainer: "#21005D",
        inversePrimary: "#D0BCFF",
        secondaryContainer: "#E8DEF8",
        onSecondaryContainer: "#1D192B",
        tertiaryContainer: "#FFD8E4",
        onTertiaryContainer: "#31111D",
        surface: "#FEF7FF",
        surfaceContainerLow: "#F7F2FA",
        surfaceContainer: "#F3EDF7",
        surfaceContainerHigh: "#ECE6F0",
        surfaceContainerHighest: "#E6E0E9",
        onSurface: "#1D1B20",
        onSurfaceVariant: "#49454F",
        outline: "#79747E",
        outlineVariant: "#CAC4D0",
        inverseSurface: "#322F35",
        inverseOnSurface: "#F5EFF7",
        ...ERROR
    },
    {
        key: "blue",
        label: "Blue",
        primary: "#0B57D0",
        onPrimary: "#FFFFFF",
        primaryContainer: "#D3E3FD",
        onPrimaryContainer: "#041E49",
        inversePrimary: "#A8C7FA",
        secondaryContainer: "#DCE2F9",
        onSecondaryContainer: "#131C2B",
        tertiaryContainer: "#FFD8EE",
        onTertiaryContainer: "#2E1125",
        surface: "#FAF9FD",
        surfaceContainerLow: "#F3F3FA",
        surfaceContainer: "#EEEDF3",
        surfaceContainerHigh: "#E9E8EF",
        surfaceContainerHighest: "#E3E2E6",
        onSurface: "#1B1B1F",
        onSurfaceVariant: "#44474E",
        outline: "#74777F",
        outlineVariant: "#C4C6D0",
        inverseSurface: "#303034",
        inverseOnSurface: "#F2F0F4",
        ...ERROR
    },
    {
        key: "green",
        label: "Green",
        primary: "#2E6A45",
        onPrimary: "#FFFFFF",
        primaryContainer: "#B0F1C2",
        onPrimaryContainer: "#00210F",
        inversePrimary: "#95D5A7",
        secondaryContainer: "#D3E8D8",
        onSecondaryContainer: "#102016",
        tertiaryContainer: "#C2E8FF",
        onTertiaryContainer: "#001E2C",
        surface: "#F6FBF4",
        surfaceContainerLow: "#F0F5EE",
        surfaceContainer: "#EAF0E8",
        surfaceContainerHigh: "#E4EAE2",
        surfaceContainerHighest: "#DEE4DC",
        onSurface: "#181D18",
        onSurfaceVariant: "#414941",
        outline: "#707972",
        outlineVariant: "#BFC9C0",
        inverseSurface: "#2D322D",
        inverseOnSurface: "#EEF2EB",
        ...ERROR
    },
    {
        key: "coral",
        label: "Coral",
        primary: "#984061",
        onPrimary: "#FFFFFF",
        primaryContainer: "#FFD9E2",
        onPrimaryContainer: "#3E001D",
        inversePrimary: "#FFB0C8",
        secondaryContainer: "#F6DDE4",
        onSecondaryContainer: "#31101D",
        tertiaryContainer: "#FFDBCA",
        onTertiaryContainer: "#2C1600",
        surface: "#FFF8F8",
        surfaceContainerLow: "#FCF0F2",
        surfaceContainer: "#F6EBED",
        surfaceContainerHigh: "#F3E5E9",
        surfaceContainerHighest: "#EEE0E3",
        onSurface: "#201A1B",
        onSurfaceVariant: "#524346",
        outline: "#847377",
        outlineVariant: "#D5C2C6",
        inverseSurface: "#352F30",
        inverseOnSurface: "#FAEEEF",
        ...ERROR
    },
    {
        key: "amber",
        label: "Amber",
        primary: "#8B5000",
        onPrimary: "#FFFFFF",
        primaryContainer: "#FFDCC2",
        onPrimaryContainer: "#2C1600",
        inversePrimary: "#FFB77C",
        secondaryContainer: "#F6DFC8",
        onSecondaryContainer: "#271905",
        tertiaryContainer: "#D5EDC0",
        onTertiaryContainer: "#0E2004",
        surface: "#FFF8F5",
        surfaceContainerLow: "#FCF1EA",
        surfaceContainer: "#F7ECE4",
        surfaceContainerHigh: "#F3E6DE",
        surfaceContainerHighest: "#EDE0D8",
        onSurface: "#211A14",
        onSurfaceVariant: "#51443B",
        outline: "#83746A",
        outlineVariant: "#D6C3B6",
        inverseSurface: "#362F28",
        inverseOnSurface: "#FBEEE5",
        ...ERROR
    },
    {
        key: "teal",
        label: "Teal",
        primary: "#00696E",
        onPrimary: "#FFFFFF",
        primaryContainer: "#9CF1F6",
        onPrimaryContainer: "#002022",
        inversePrimary: "#80D5DA",
        secondaryContainer: "#CCE8E9",
        onSecondaryContainer: "#051F20",
        tertiaryContainer: "#D2E4FF",
        onTertiaryContainer: "#001C3B",
        surface: "#F4FBFB",
        surfaceContainerLow: "#EEF5F5",
        surfaceContainer: "#E8EFEF",
        surfaceContainerHigh: "#E2EAEA",
        surfaceContainerHighest: "#DDE4E4",
        onSurface: "#161D1D",
        onSurfaceVariant: "#3F4948",
        outline: "#6F7979",
        outlineVariant: "#BEC8C8",
        inverseSurface: "#2B3232",
        inverseOnSurface: "#ECF2F2",
        ...ERROR
    },
    {
        key: "mono",
        label: "Mono",
        primary: "#4A4459",
        onPrimary: "#FFFFFF",
        primaryContainer: "#E6E0F0",
        onPrimaryContainer: "#1A1626",
        inversePrimary: "#CFC3E0",
        secondaryContainer: "#E6E1E6",
        onSecondaryContainer: "#1B1B1F",
        tertiaryContainer: "#E9E0EA",
        onTertiaryContainer: "#1E1A22",
        surface: "#FCF8FD",
        surfaceContainerLow: "#F5F1F6",
        surfaceContainer: "#EFEBF0",
        surfaceContainerHigh: "#E9E5EA",
        surfaceContainerHighest: "#E4E0E5",
        onSurface: "#1C1B1F",
        onSurfaceVariant: "#48454E",
        outline: "#79747E",
        outlineVariant: "#CAC4D0",
        inverseSurface: "#313033",
        inverseOnSurface: "#F4EFF4",
        ...ERROR
    }
];
const PALETTES = PRESETS.map(_c2 = (p)=>({
        ...p,
        secondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemeFromSeed"])(p.primary, p.label, {
            keepChroma: true
        }).secondary
    }));
_c3 = PALETTES;
const DEFAULT_THEME = {
    dark: false,
    bothModes: false,
    contrast: "standard",
    shape: "rounded",
    font: "roboto",
    emphasized: false,
    motion: "standard"
};
function normalizeTheme(t) {
    const d = DEFAULT_THEME;
    if (!t) return d;
    return {
        dark: typeof t.dark === "boolean" ? t.dark : d.dark,
        bothModes: typeof t.bothModes === "boolean" ? t.bothModes : d.bothModes,
        contrast: CONTRASTS.some((c)=>c.key === t.contrast) ? t.contrast : d.contrast,
        shape: SHAPES.some((c)=>c.key === t.shape) ? t.shape : d.shape,
        font: FONTS.some((c)=>c.key === t.font) ? t.font : d.font,
        emphasized: typeof t.emphasized === "boolean" ? t.emphasized : d.emphasized,
        motion: t.motion === "expressive" || t.motion === "standard" ? t.motion : d.motion
    };
}
const SHAPES = [
    {
        key: "square",
        label: "Square",
        icon: "crop_square"
    },
    {
        key: "rounded",
        label: "Rounded",
        icon: "rounded_corner"
    },
    {
        key: "full",
        label: "Full",
        icon: "circle"
    }
];
const FONTS = [
    {
        key: "roboto",
        label: "Roboto",
        family: "Roboto, system-ui, sans-serif"
    },
    {
        key: "robotoFlex",
        label: "Roboto Flex",
        family: "'Roboto Flex', Roboto, system-ui, sans-serif",
        google: "Roboto+Flex:wght@400;500;600;700"
    },
    {
        key: "robotoSerif",
        label: "Roboto Serif",
        family: "'Roboto Serif', Georgia, serif",
        google: "Roboto+Serif:wght@400;500;600;700"
    },
    {
        key: "system",
        label: "System",
        family: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    }
];
const LANG_FONT = {
    ja: {
        family: "'Noto Sans JP'",
        google: "Noto+Sans+JP:wght@400;500;600;700"
    },
    zh: {
        family: "'Noto Sans SC'",
        google: "Noto+Sans+SC:wght@400;500;600;700"
    },
    ko: {
        family: "'Noto Sans KR'",
        google: "Noto+Sans+KR:wght@400;500;600;700"
    },
    en: null
};
/** a family list with the language's Noto face placed before the generic fallbacks */ const withLangFont = (family, lang)=>{
    const extra = lang ? LANG_FONT[lang]?.family : undefined;
    if (!extra) return family;
    const parts = family.split(",").map((s)=>s.trim());
    const at = parts.findIndex((s)=>/^(system-ui|-apple-system|Georgia|serif|sans-serif)$/.test(s));
    parts.splice(at < 0 ? parts.length : at, 0, extra);
    return parts.join(", ");
};
const fontFamilyOf = (f, lang)=>{
    const family = FONTS.find((x)=>x.key === f)?.family ?? FONTS[0].family;
    return f === "system" ? family : withLangFont(family, lang);
};
const uiFontFamily = (lang)=>withLangFont("Roboto, system-ui, sans-serif", lang);
const CONTRASTS = [
    {
        key: "standard",
        label: "Standard"
    },
    {
        key: "medium",
        label: "Medium"
    },
    {
        key: "high",
        label: "High"
    }
];
/** the shape scale that rendering helpers read outside React; the page sets it once per render */ let curShape = "rounded";
const setGlobalShape = (s)=>{
    curShape = s;
};
const getShape = ()=>curShape;
const draftGradient = (p)=>`linear-gradient(120deg, ${p.primaryContainer}, ${p.tertiaryContainer}, ${p.primary}, ${p.secondaryContainer}, ${p.primaryContainer})`;
function scaleR(r) {
    if (curShape === "square") return Math.round(r * 0.35);
    if (curShape === "full") return Math.round(r * 1.6);
    return r;
}
function paletteOf(key, custom, theme) {
    const base = key === "custom" && custom || PALETTES.find((p)=>p.key === key) || PALETTES[0];
    if (!theme || !theme.dark && theme.contrast === "standard") {
        /* Saved custom schemes may predate the secondary role. */ return base.secondary ? base : {
            ...base,
            secondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemeFromSeed"])(base.seed ?? base.primary).secondary
        };
    }
    const seed = base.seed ?? base.primary;
    /* a preset's hue and chroma are deliberate (Mono is nearly grey), so they are kept as they are */ return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemeFromSeed"])(seed, base.label, {
            dark: theme.dark,
            contrast: theme.contrast,
            keepChroma: base.key !== "custom"
        }),
        key: base.key
    };
}
const VARIANTS = [
    {
        key: "filled",
        label: "Filled"
    },
    {
        key: "tonal",
        label: "Tonal"
    },
    {
        key: "elevated",
        label: "Elevated"
    },
    {
        key: "outlined",
        label: "Outlined"
    },
    {
        key: "text",
        label: "Text"
    }
];
function variantStyle(v, p) {
    switch(v){
        case "filled":
            return {
                background: p.primary,
                color: p.onPrimary,
                border: "none"
            };
        case "tonal":
            return {
                background: p.secondaryContainer,
                color: p.onSecondaryContainer,
                border: "none"
            };
        case "elevated":
            return {
                background: p.surfaceContainerLow,
                color: p.primary,
                border: "none"
            };
        case "outlined":
            return {
                background: "transparent",
                color: p.primary,
                border: `1px solid ${p.outline}`
            };
        case "text":
            return {
                background: "transparent",
                color: p.primary,
                border: "none"
            };
    }
}
function variantShadow(v) {
    if (v === "elevated") return "0 1px 3px rgba(0,0,0,0.20), 0 4px 8px rgba(0,0,0,0.10)";
    return "none";
}
const CAROUSEL_LAYOUTS = [
    {
        key: "multiBrowse",
        icon: "view_carousel",
        text: "carouselMultiBrowse"
    },
    {
        key: "uncontained",
        icon: "view_week",
        text: "carouselUncontained"
    },
    {
        key: "hero",
        icon: "view_sidebar",
        text: "carouselHero"
    },
    {
        key: "fullScreen",
        icon: "crop_din",
        text: "carouselFullScreen"
    }
];
const DATE_LAYOUTS = [
    {
        key: "modal",
        icon: "calendar_month",
        text: "dateModal"
    },
    {
        key: "docked",
        icon: "event",
        text: "dateDocked"
    },
    {
        key: "input",
        icon: "keyboard",
        text: "dateInput"
    }
];
const TIME_LAYOUTS = [
    {
        key: "dial",
        icon: "schedule",
        text: "timeDial"
    },
    {
        key: "input",
        icon: "keyboard",
        text: "dateInput"
    }
];
const carouselLayoutOf = (it)=>CAROUSEL_LAYOUTS.some((l)=>l.key === it.layout) ? it.layout : "multiBrowse";
const dateLayoutOf = (it)=>DATE_LAYOUTS.some((l)=>l.key === it.layout) ? it.layout : "modal";
const timeLayoutOf = (it)=>it.layout === "input" ? "input" : "dial";
const PROGRESS_DEFAULT_VALUE = 60;
const SLIDER_DEFAULT_VALUE = 40;
const carouselCountOf = (it)=>clamp(Math.round(it.count ?? 4), 2, 8);
const carouselCardsOf = (it)=>Array.from({
        length: carouselCountOf(it)
    }, (_, i)=>it.tabs?.[i] ?? {
            icon: "",
            label: ""
        });
function carouselCardPatch(it, index, patch) {
    return {
        tabs: carouselCardsOf(it).map((c, i)=>i === index ? {
                ...c,
                ...patch
            } : c)
    };
}
function migrateCarousel(it) {
    if (it.kind !== "carousel" || !it.label && !it.action) return it;
    const next = {
        ...it,
        label: ""
    };
    if (it.label) next.tabs = carouselCardsOf(it).map((c, i)=>i === 0 && !c.label ? {
            ...c,
            label: it.label
        } : c);
    if (it.action) {
        next.actions = {
            "tab:0": it.action,
            ...it.actions ?? {}
        };
        next.action = undefined;
    }
    return next;
}
const hasPickerFields = (it)=>{
    const old = it;
    return old.day !== undefined || old.hour !== undefined || old.minute !== undefined;
};
const isSheetBox = (it)=>it.kind === "box" && !!it.checked;
function migrateSheetBox(it) {
    if (!isSheetBox(it)) return it;
    const { checked: _checked, radiusBottom: _bottom, corners: _corners, ...rest } = it;
    return {
        ...rest,
        kind: "bottomSheet",
        radiusTop: it.corners?.tl ?? it.radiusTop ?? 28
    };
}
function migratePicker(it) {
    if (!hasPickerFields(it)) return it;
    const rest = {
        ...it
    };
    delete rest.day;
    delete rest.hour;
    delete rest.minute;
    return rest;
}
const CARD_GAP = 8;
function cardWidths(layout, width, count) {
    /* The arrangement is read off the screen it is on, so a carousel fills the row it is given
   * whatever that screen is: the same picture on a phone and on a desktop, at that screen's size. */ const small = Math.max(24, Math.round(width * 0.14));
    const large = Math.round(width * 0.56);
    const medium = Math.round(width * 0.3);
    if (layout === "fullScreen") {
        /* one card fills the row and the next one only peeks in */ return Array(count).fill(Math.round(width * 0.86));
    }
    if (layout === "hero") {
        /* one card is the hero; the rest are the small ones beside it */ return [
            Math.round(width * 0.72),
            ...Array(Math.max(0, count - 1)).fill(small)
        ];
    }
    if (layout === "uncontained") {
        /* every card is the same width, and the row runs past the edge */ return Array(count).fill(Math.max(40, Math.round(width / 2.4)));
    }
    /* multi-browse: a large card, a medium one, then small ones -- the large one leaves room for
   * a sliver of the third, so the row says at a glance that it carries on */ return [
        large,
        medium,
        ...Array(Math.max(0, count - 2)).fill(small)
    ];
}
const carouselInset = (width)=>width >= PHONE_W ? PHONE_MARGIN : 0;
function carouselRowWidth(it, width) {
    const inset = carouselInset(width);
    const ws = cardWidths(carouselLayoutOf(it), width - inset, carouselCountOf(it));
    return inset + ws.reduce((a, b)=>a + b, 0) + CARD_GAP * Math.max(0, ws.length - 1);
}
function carouselScrollMax(it, width) {
    const inset = carouselInset(width);
    const count = carouselCountOf(it);
    const ws = cardWidths(carouselLayoutOf(it), width - inset, count);
    /* a row that fits the screen it is on has nowhere to go */ if (carouselRowWidth(it, width) <= width) return 0;
    return clamp(count - carouselFill(ws, width - inset) + 1, 0, count - 1);
}
const isScrollableCarousel = (it, width)=>carouselScrollMax(it, width) > 0;
function carouselStops(it, width) {
    const inset = carouselInset(width);
    const ws = cardWidths(carouselLayoutOf(it), width - inset, carouselCountOf(it));
    const stride = ws[0] + CARD_GAP;
    const stops = [
        0
    ];
    for(let i = 0; i < carouselScrollMax(it, width); i++)stops.push(stops[i] + stride + (i ? 0 : inset));
    return stops;
}
function carouselTrack(it, width) {
    const stops = carouselStops(it, width);
    return width + stops[stops.length - 1];
}
/** how many cards the head of the row takes to fill the box: the rest are what there is to scroll */ function carouselFill(ws, width) {
    let acc = 0;
    for(let i = 0; i < ws.length; i++){
        acc += ws[i] + (i ? CARD_GAP : 0);
        if (acc >= width - 1) return i + 1;
    }
    return ws.length;
}
/** the width a card takes at a given place in the arrangement: on a stop it is that stop's own
 *  width, and between two it is read off both, so a card grows into the next size as it travels */ function slotWidth(ws, at) {
    if (at <= -1) return 0;
    /* The card at the head is on its way out. It draws in towards the small size and slides past
   * the near edge, where the row cuts it off -- the same way the cards at the far end are cut
   * off -- rather than thinning away to nothing while it stands there. */ if (at < 0) return lerp(ws[ws.length - 1], ws[0], at + 1);
    const k = Math.floor(at);
    const a = ws[Math.min(k, ws.length - 1)];
    const b = ws[Math.min(k + 1, ws.length - 1)];
    return lerp(a, b, at - k);
}
function carouselShapes(it, width, scroll = 0) {
    const inset = carouselInset(width);
    const count = carouselCountOf(it);
    const ws = cardWidths(carouselLayoutOf(it), width - inset, count);
    const stops = carouselStops(it, width);
    /* how many cards the scroll has carried past, counted in cards rather than pixels */ let passed = stops.length - 1;
    for(let i = 0; i < stops.length - 1; i++){
        if (scroll < stops[i + 1]) {
            passed = i + (scroll - stops[i]) / (stops[i + 1] - stops[i]);
            break;
        }
    }
    if (!(scroll > 0)) passed = 0;
    /* The last cards keep the row full between them: from there on the arrangement turns around.
   * The sizes are read into their new ones on a curve that sets off and settles, so the row is
   * not seen starting or stopping on the turn. */ const fill = carouselFill(ws, width - inset);
    const turning = clamp(passed - (count - fill), 0, 1);
    const turn = turning * turning * (3 - 2 * turning);
    /* The row also gives way to the last card as it comes to rest against the far edge. Where that
   * is a pull against the travel it is taken early, while the row is still moving fast enough to
   * swallow it, and is all but over by the time the travel dies away: spread evenly it outlives
   * the travel and the row is seen backing up at the very end. A pull that goes with the travel
   * has nothing to fight, and is spread evenly so the row does not bolt on it. */ const settle = 1 - (1 - turning) * (1 - turning) * (1 - turning);
    const out = [];
    /* The margin is the list's, not the edge's: the first card stands off the near edge, and past
   * it the row simply runs to the edge and is cut there, so nothing is held in a margin on its
   * way out. The card leaving carries the row's start with it as it goes. */ const leaving = passed - Math.floor(passed);
    const start = inset * clamp(1 - passed, 0, 1);
    /* The card at the head goes out at a steady rate: it travels the width it is left with when it
   * finally goes, and draws the rest of the way in instead of moving. Travelling its own width
   * while that width is shrinking would carry it past where it ends up and bring it back, which
   * the whole row would be seen doing. */ let x = start - leaving * (ws[ws.length - 1] + CARD_GAP);
    for(let i = 0; i < count; i++){
        const running = slotWidth(ws, i - passed);
        /* turned around, a card takes its size from the end of the row rather than the head of it */ const ended = i < count - fill ? 0 : ws[Math.min(count - 1 - i, ws.length - 1)];
        const w = turn > 0 ? lerp(running, ended, turn) : running;
        /* how far this card has grown into the large keyline: the one standing in it is the main
     * card, and the only one that says anything */ const lead = ws.length > 1 ? clamp((w - ws[1]) / Math.max(1, ws[0] - ws[1]), 0, 1) : 1;
        out.push({
            x,
            w,
            lead
        });
        /* the gap goes with the card: it closes as the card it follows shrinks away */ x += w + CARD_GAP * Math.min(1, w / 8);
    }
    /* Turned around, the row is measured from its far edge instead of its near one: the last card
   * stands whole against the same margin the first one started from, and what runs over does so
   * at the head, where the cards are leaving anyway. */ if (turn > 0) {
        const right = x - CARD_GAP * Math.min(1, out[count - 1].w / 8);
        const span = width - inset - right;
        const want = lerp(0, span, span > 0 ? settle : turn);
        for (const c of out)c.x += want;
    }
    return out;
}
const CAROUSEL_HEIGHTS = [
    {
        key: "s",
        value: 140
    },
    {
        key: "m",
        value: 180
    },
    {
        key: "l",
        value: 260
    }
];
const CATEGORIES = [
    {
        key: "actions",
        label: "Actions",
        icon: "touch_app"
    },
    {
        key: "navigation",
        label: "Navigation",
        icon: "explore"
    },
    {
        key: "containment",
        label: "Containment",
        icon: "web_asset"
    },
    {
        key: "inputs",
        label: "Inputs",
        icon: "toggle_on"
    },
    {
        key: "content",
        label: "Content",
        icon: "notes"
    },
    {
        key: "progress",
        label: "Progress",
        icon: "progress_activity"
    }
];
const KIND_SPEC = {
    box: {
        label: "Box",
        noun: "ボックス",
        category: "containment",
        paletteIcon: "check_box_outline_blank",
        w: PHONE_W,
        h: 220,
        radius: 28,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        hasFill: true,
        size: {
            min: 40,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        size2: {
            min: 24,
            max: PHONE_H,
            step: 4,
            icon: "height",
            presets: HEIGHT_PRESETS
        },
        defLabel: "",
        defIcon: null,
        defSize: PHONE_W
    },
    /* a modal sheet that slides up from the bottom edge: a drag handle at its top, its top corners
   * rounded and its bottom ones flush with the screen */ bottomSheet: {
        label: "Bottom sheet",
        noun: "ボトムシート",
        category: "containment",
        paletteIcon: "bottom_sheets",
        w: PHONE_W,
        h: 320,
        radius: 28,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        hasFill: true,
        size: {
            min: 40,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        size2: {
            min: 24,
            max: PHONE_H,
            step: 4,
            icon: "height",
            presets: HEIGHT_PRESETS
        },
        defLabel: "",
        defIcon: null,
        defSize: PHONE_W
    },
    button: {
        label: "Button",
        noun: "ボタン",
        category: "actions",
        paletteIcon: "buttons_alt",
        w: 128,
        h: H,
        radius: R_FULL,
        hasVariant: true,
        hasLabel: true,
        hasSupporting: false,
        hasIcon: true,
        connect: {
            axis: "x",
            outer: R_FULL,
            inner: R_INNER,
            family: "button"
        },
        /* 56 is the height: an icon-only button is a circle at its narrowest */ size: {
            min: 56,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: [
                HALF_W,
                CONTENT_W
            ]
        },
        defLabel: "ボタン",
        defIcon: "add"
    },
    iconButton: {
        label: "Icon Button",
        noun: "アイコンボタン",
        category: "actions",
        paletteIcon: "radio_button_checked",
        w: 48,
        h: 48,
        radius: 24,
        hasVariant: true,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: true,
        connect: {
            axis: "x",
            outer: 24,
            inner: R_INNER,
            family: "button"
        },
        /* the same five sizes a button has: an icon button is the one that is all icon */ size: {
            min: BUTTON_H_MIN,
            max: BUTTON_H_MAX,
            step: 4,
            icon: "open_in_full",
            presets: BUTTON_SIZES.map((b)=>b.h)
        },
        defLabel: "",
        defIcon: "favorite",
        defSize: H,
        defVariant: "tonal"
    },
    fab: {
        label: "FAB",
        noun: "FAB（フローティングボタン）",
        category: "actions",
        paletteIcon: "add_circle",
        w: 56,
        h: 56,
        radius: 16,
        hasVariant: true,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: true,
        size: {
            min: FAB_H_MIN,
            max: FAB_H_MAX,
            step: 4,
            icon: "open_in_full",
            presets: FAB_SIZES.map((f)=>f.d)
        },
        defLabel: "",
        defIcon: "edit",
        defSize: 56,
        defVariant: "tonal"
    },
    extendedFab: {
        label: "Extended FAB",
        noun: "拡張 FAB",
        category: "actions",
        paletteIcon: "add_box",
        w: 0,
        h: 56,
        radius: 16,
        hasVariant: true,
        hasLabel: true,
        hasSupporting: false,
        hasIcon: true,
        size2: {
            min: 56,
            max: 96,
            step: 4,
            icon: "height",
            presets: [
                56,
                80,
                96
            ]
        },
        defLabel: "作成",
        defIcon: "edit",
        defVariant: "tonal"
    },
    chip: {
        label: "Chip",
        noun: "チップ",
        category: "actions",
        paletteIcon: "label",
        w: 0,
        h: 32,
        radius: 8,
        hasVariant: true,
        hasLabel: true,
        hasSupporting: false,
        hasIcon: true,
        hasChecked: true,
        connect: {
            axis: "x",
            outer: CHIP_H_MIN / 2,
            inner: 4,
            family: "chip"
        },
        /* as wide as its label makes it: the height is the one measure the author sets */ size2: {
            min: CHIP_H_MIN,
            max: CHIP_H_MAX,
            step: 4,
            icon: "height",
            presets: CHIP_SIZES.map((c)=>c.h)
        },
        defLabel: "チップ",
        defIcon: null,
        defVariant: "outlined"
    },
    topAppBar: {
        label: "Top App Bar",
        noun: "トップアプリバー",
        category: "navigation",
        paletteIcon: "toolbar",
        w: PHONE_W,
        h: 64 + STATUS_BAR_H,
        radius: 0,
        hasVariant: false,
        hasLabel: true,
        hasSupporting: false,
        hasIcon: true,
        size: {
            min: 200,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        /* M3's small, medium and large bars: the title moves under the icons as the bar grows */ size2: {
            min: TOP_BAR_SIZES[0].h,
            max: TOP_BAR_SIZES[TOP_BAR_SIZES.length - 1].h,
            step: 4,
            icon: "height",
            presets: TOP_BAR_SIZES.map((b)=>b.h)
        },
        defLabel: "タイトル",
        defIcon: "menu",
        defIcon2: "more_vert",
        defSize: PHONE_W
    },
    bottomNav: {
        label: "Navigation Bar",
        noun: "ナビゲーションバー",
        category: "navigation",
        paletteIcon: "bottom_navigation",
        w: PHONE_W,
        h: 80 + NAV_BAR_H,
        radius: 0,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        hasTabs: true,
        size: {
            min: 200,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        defLabel: "",
        defIcon: null,
        defSize: PHONE_W
    },
    navRail: {
        label: "Navigation Rail",
        noun: "ナビゲーションレール",
        category: "navigation",
        paletteIcon: "side_navigation",
        w: RAIL_W,
        h: PHONE_H,
        radius: 0,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        hasTabs: true,
        size2: {
            min: 200,
            max: PHONE_H,
            step: 4,
            icon: "height",
            presets: HEIGHT_PRESETS
        },
        defLabel: "",
        defIcon: null
    },
    searchBar: {
        label: "Search Bar",
        noun: "検索バー",
        category: "navigation",
        paletteIcon: "search",
        w: CONTENT_W,
        h: 56,
        radius: 28,
        hasVariant: true,
        hasLabel: true,
        hasSupporting: false,
        hasIcon: true,
        size: {
            min: 200,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        defLabel: "検索",
        defIcon: "search",
        defIcon2: "mic",
        defSize: CONTENT_W,
        defVariant: "filled"
    },
    card: {
        label: "Card",
        noun: "カード",
        category: "containment",
        paletteIcon: "web_asset",
        w: CONTENT_W,
        h: 223,
        radius: 20,
        hasVariant: true,
        hasLabel: true,
        hasSupporting: true,
        hasIcon: true,
        size: {
            min: 160,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        size2: {
            min: 96,
            max: PHONE_H,
            step: 4,
            icon: "height",
            presets: [
                120,
                188,
                280
            ]
        },
        hasFill: true,
        defLabel: "カードの見出し",
        defIcon: "image",
        defSupporting: "補足テキストがここに入ります。",
        defSize: CONTENT_W,
        defVariant: "tonal"
    },
    listItem: {
        label: "List Item",
        noun: "リスト項目",
        category: "containment",
        paletteIcon: "list",
        w: CONTENT_W,
        h: 72,
        radius: R_FULL,
        hasVariant: false,
        hasLabel: true,
        hasSupporting: true,
        hasIcon: true,
        hasFill: true,
        connect: {
            axis: "y",
            outer: R_FULL,
            inner: R_INNER,
            family: "list"
        },
        size: {
            min: 200,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        defLabel: "リスト項目",
        defIcon: "person",
        defSupporting: "サブテキスト",
        defIcon2: "chevron_right",
        defSize: CONTENT_W
    },
    dialog: {
        label: "Dialog",
        noun: "ダイアログ",
        category: "containment",
        paletteIcon: "chat_bubble",
        w: 312,
        h: 220,
        radius: 28,
        hasVariant: false,
        hasLabel: true,
        hasSupporting: true,
        hasIcon: true,
        defLabel: "確認",
        defIcon: "info",
        defSupporting: "この操作を実行しますか？"
    },
    snackbar: {
        label: "Snackbar",
        noun: "スナックバー",
        category: "containment",
        paletteIcon: "call_to_action",
        w: 344,
        h: 48,
        radius: 8,
        hasVariant: false,
        hasLabel: true,
        hasSupporting: true,
        hasIcon: false,
        defLabel: "保存しました",
        defIcon: null,
        defSupporting: "元に戻す"
    },
    textField: {
        label: "Text Field",
        noun: "テキスト入力",
        category: "inputs",
        paletteIcon: "text_fields",
        w: CONTENT_W,
        h: 56,
        radius: 16,
        hasVariant: true,
        hasLabel: true,
        hasSupporting: true,
        hasIcon: true,
        size: {
            min: 160,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        defLabel: "ラベル",
        defIcon: "search",
        defSupporting: "",
        defSize: CONTENT_W,
        defVariant: "outlined"
    },
    select: {
        label: "Dropdown",
        noun: "ドロップダウン",
        category: "inputs",
        paletteIcon: "arrow_drop_down_circle",
        w: CONTENT_W,
        h: 56,
        radius: 16,
        hasVariant: true,
        hasLabel: true,
        hasSupporting: true,
        hasIcon: true,
        hasTabs: true,
        size: {
            min: 160,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        defLabel: "ラベル",
        defIcon: null,
        defSupporting: "",
        defSize: CONTENT_W,
        defVariant: "outlined"
    },
    switch: {
        label: "Switch",
        noun: "スイッチ",
        category: "inputs",
        paletteIcon: "toggle_on",
        w: 160,
        h: 48,
        radius: 16,
        hasVariant: false,
        hasLabel: true,
        hasSupporting: false,
        hasIcon: false,
        hasChecked: true,
        size: {
            min: 120,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        defLabel: "通知",
        defIcon: null
    },
    checkbox: {
        label: "Checkbox",
        noun: "チェックボックス",
        category: "inputs",
        paletteIcon: "check_box",
        w: 0,
        h: 40,
        radius: 4,
        hasVariant: false,
        hasLabel: true,
        hasSupporting: false,
        hasIcon: false,
        hasChecked: true,
        defLabel: "同意する",
        defIcon: null
    },
    slider: {
        label: "Slider",
        noun: "スライダー",
        category: "inputs",
        paletteIcon: "sliders",
        w: CONTENT_W,
        h: 44,
        radius: 22,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        hasValue: true,
        size: {
            min: 120,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        defLabel: "",
        defIcon: null,
        defSize: CONTENT_W
    },
    text: {
        label: "Text",
        noun: "テキスト",
        category: "content",
        paletteIcon: "title",
        w: 0,
        h: 40,
        radius: 0,
        hasVariant: false,
        hasLabel: true,
        hasSupporting: false,
        hasIcon: false,
        size: {
            min: 12,
            max: 57,
            step: 1,
            icon: "format_size",
            presets: [
                14,
                16,
                22,
                28,
                32,
                45,
                57
            ]
        },
        defLabel: "見出し",
        defIcon: null,
        defSize: 28
    },
    image: {
        label: "Image",
        noun: "画像",
        category: "content",
        paletteIcon: "image",
        w: 200,
        h: 200,
        radius: 20,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: true,
        size: {
            min: 48,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: [
                96,
                HALF_W,
                CONTENT_W,
                PHONE_W
            ]
        },
        size2: {
            min: 48,
            max: PHONE_H,
            step: 4,
            icon: "height",
            presets: [
                96,
                200,
                280
            ]
        },
        defLabel: "",
        defIcon: "image",
        defSize: 200
    },
    camera: {
        label: "Camera",
        noun: "カメラ",
        category: "content",
        paletteIcon: "photo_camera",
        w: CONTENT_W,
        h: Math.round(CONTENT_W * 4 / 3),
        radius: 20,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: true,
        size: {
            min: 96,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: [
                HALF_W,
                CONTENT_W,
                PHONE_W
            ]
        },
        size2: {
            min: 96,
            max: PHONE_H,
            step: 4,
            icon: "height",
            presets: [
                280,
                507,
                PHONE_H
            ]
        },
        defLabel: "",
        defIcon: "photo_camera",
        defSize: CONTENT_W
    },
    map: {
        label: "Map",
        noun: "地図",
        category: "content",
        paletteIcon: "map",
        w: CONTENT_W,
        h: Math.round(CONTENT_W * 3 / 4),
        radius: 20,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: true,
        size: {
            min: 96,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: [
                HALF_W,
                CONTENT_W,
                PHONE_W
            ]
        },
        size2: {
            min: 96,
            max: PHONE_H,
            step: 4,
            icon: "height",
            presets: [
                200,
                285,
                PHONE_H
            ]
        },
        defLabel: "",
        defIcon: "map",
        defSize: CONTENT_W
    },
    divider: {
        label: "Divider",
        noun: "区切り線",
        category: "content",
        paletteIcon: "horizontal_rule",
        w: CONTENT_W,
        h: 16,
        radius: 0,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        size: {
            min: 40,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        defLabel: "",
        defIcon: null,
        defSize: CONTENT_W
    },
    loadingIndicator: {
        label: "Loading",
        noun: "ローディング",
        category: "progress",
        paletteIcon: "motion_blur",
        w: 48,
        h: 48,
        radius: 24,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        hasContained: true,
        size: {
            min: 32,
            max: 128,
            step: 4,
            icon: "open_in_full",
            presets: LOADING_SIZES.map((s)=>s.value)
        },
        defLabel: "",
        defIcon: null,
        defSize: 48
    },
    linearProgress: {
        label: "Progress",
        noun: "プログレス",
        category: "progress",
        paletteIcon: "linear_scale",
        w: CONTENT_W,
        h: 24,
        radius: 12,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        hasValue: true,
        hasWavy: true,
        size: {
            min: 120,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        defLabel: "",
        defIcon: null,
        defSize: CONTENT_W
    },
    circularProgress: {
        label: "Progress",
        noun: "プログレス",
        category: "progress",
        paletteIcon: "progress_activity",
        w: 48,
        h: 48,
        radius: 24,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        hasValue: true,
        hasWavy: true,
        size: {
            min: 24,
            max: 120,
            step: 4,
            icon: "open_in_full",
            presets: RING_SIZES.map((s)=>s.value)
        },
        defLabel: "",
        defIcon: null,
        defSize: 48
    },
    carousel: {
        label: "Carousel",
        noun: "カルーセル",
        category: "content",
        paletteIcon: "view_carousel",
        w: PHONE_W,
        h: 180,
        radius: 16,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        size: {
            min: 200,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: [
                CONTENT_W,
                PHONE_W
            ]
        },
        size2: {
            min: 100,
            max: 400,
            step: 4,
            icon: "height",
            presets: [
                140,
                180,
                260
            ]
        },
        defLabel: "",
        defIcon: null,
        defSize: PHONE_W
    },
    datePicker: {
        label: "Date Picker",
        noun: "日付ピッカー",
        category: "inputs",
        paletteIcon: "calendar_month",
        w: 328,
        h: 484,
        radius: 28,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        size: {
            min: 280,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: [
                328,
                CONTENT_W,
                PHONE_W
            ]
        },
        defLabel: "",
        defIcon: null,
        defSize: 328
    },
    timePicker: {
        label: "Time Picker",
        noun: "時刻ピッカー",
        category: "inputs",
        paletteIcon: "schedule",
        w: 328,
        h: 420,
        radius: 28,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        size: {
            min: 280,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: [
                328,
                CONTENT_W
            ]
        },
        defLabel: "",
        defIcon: null,
        defSize: 328
    },
    splitButton: {
        label: "Split Button",
        noun: "スプリットボタン",
        category: "actions",
        paletteIcon: "splitscreen_right",
        w: 0,
        h: H,
        radius: R_FULL,
        hasVariant: true,
        hasLabel: true,
        hasSupporting: false,
        hasIcon: true,
        /* as wide as its label makes it, so the height is the one measure it is given */ size2: {
            min: BUTTON_H_MIN,
            max: BUTTON_H_MAX,
            step: 4,
            icon: "height",
            presets: BUTTON_SIZES.map((b)=>b.h)
        },
        defLabel: "送信",
        defIcon: "send",
        defVariant: "filled"
    },
    fabMenu: {
        label: "FAB Menu",
        noun: "FAB メニュー",
        category: "actions",
        paletteIcon: "add_circle",
        w: 220,
        h: 56,
        radius: 16,
        hasVariant: true,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: true,
        hasTabs: true,
        size: {
            min: 160,
            max: CONTENT_W,
            step: 4,
            icon: "width",
            presets: [
                220,
                HALF_W,
                CONTENT_W
            ]
        },
        defLabel: "",
        defIcon: "close",
        defSize: 220,
        defVariant: "filled"
    },
    toolbar: {
        label: "Toolbar",
        noun: "ツールバー",
        category: "navigation",
        paletteIcon: "toolbar",
        w: 0,
        h: 64,
        radius: 32,
        hasVariant: true,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        hasTabs: true,
        defLabel: "",
        defIcon: null,
        defVariant: "tonal"
    },
    tabs: {
        label: "Tabs",
        noun: "タブ",
        category: "navigation",
        paletteIcon: "tab",
        w: PHONE_W,
        h: 48,
        radius: 0,
        hasVariant: false,
        hasLabel: false,
        hasSupporting: false,
        hasIcon: false,
        hasTabs: true,
        size: {
            min: 200,
            max: PHONE_W,
            step: 4,
            icon: "width",
            presets: WIDTH_PRESETS
        },
        defLabel: "",
        defIcon: null,
        defSize: PHONE_W
    },
    radio: {
        label: "Radio Button",
        noun: "ラジオボタン",
        category: "inputs",
        paletteIcon: "radio_button_checked",
        w: 0,
        h: 40,
        radius: 20,
        hasVariant: false,
        hasLabel: true,
        hasSupporting: false,
        hasIcon: false,
        hasChecked: true,
        defLabel: "選択肢",
        defIcon: null
    }
};
const KIND_ORDER = [
    "button",
    "iconButton",
    "fab",
    "extendedFab",
    "splitButton",
    "fabMenu",
    "chip",
    "topAppBar",
    "bottomNav",
    "navRail",
    "toolbar",
    "tabs",
    "searchBar",
    "card",
    "listItem",
    "box",
    "bottomSheet",
    "dialog",
    "snackbar",
    "textField",
    "select",
    "switch",
    "checkbox",
    "radio",
    "slider",
    "datePicker",
    "timePicker",
    "text",
    "image",
    "carousel",
    "camera",
    "map",
    "divider",
    "loadingIndicator",
    "linearProgress",
    "circularProgress"
];
const TOGGLEABLE = [
    "button",
    "iconButton",
    "fab",
    "extendedFab"
];
const BACK_TARGET = "back";
const LINK_TARGET = "link";
function linkUrlOf(a) {
    const raw = a?.url?.trim();
    if (!raw) return null;
    try {
        const u = new URL(/^[a-z][a-z0-9+.-]*:/i.test(raw) ? raw : `https://${raw}`);
        return u.protocol === "http:" || u.protocol === "https:" ? u.href : null;
    } catch  {
        return null;
    }
}
function linkHostOf(a) {
    const href = linkUrlOf(a);
    if (!href) return null;
    try {
        return new URL(href).host;
    } catch  {
        return null;
    }
}
const SWIPE_DIRS = [
    {
        key: "left",
        icon: "swipe_left",
        transition: "slide"
    },
    {
        key: "right",
        icon: "swipe_right",
        transition: "slideLeft"
    },
    {
        key: "up",
        icon: "swipe_up",
        transition: "slideUp"
    },
    {
        key: "down",
        icon: "swipe_down",
        transition: "slideDown"
    }
];
const SLIDE_SPEC = {
    slide: {
        axis: "x",
        enter: 1,
        exit: -0.3
    },
    slideLeft: {
        axis: "x",
        enter: -1,
        exit: 0.3
    },
    slideUp: {
        axis: "y",
        enter: 1,
        exit: -0.3
    },
    slideDown: {
        axis: "y",
        enter: -1,
        exit: 0.3
    }
};
const buttonHeightOf = (it)=>clamp(Math.round(it.kind === "iconButton" ? it.size ?? H : it.size2 ?? H), BUTTON_H_MIN, BUTTON_H_MAX);
const chipHeightOf = (it)=>clamp(Math.round(it.size2 ?? CHIP_H_MIN), CHIP_H_MIN, CHIP_H_MAX);
const FAB_KINDS = [
    "fab",
    "extendedFab"
];
const isFab = (k)=>FAB_KINDS.includes(k);
const PALETTE_HIDDEN = [
    "extendedFab",
    "fabMenu",
    "circularProgress"
];
const extendedFabHeight = (it)=>clamp(Math.round(it.size2 ?? 56), 56, FAB_H_MAX);
function extendedFabMetrics(h) {
    /* the label and the icon grow with the container, the way the three named sizes do */ const k = (h - 56) / (FAB_H_MAX - 56);
    return {
        h,
        padX: Math.round(lerp(20, 28, k)),
        gap: Math.round(lerp(12, 16, k)),
        icon: Math.round(lerp(24, 32, k)),
        font: Math.round(lerp(14, 20, k)),
        radius: Math.round(lerp(16, 28, k))
    };
}
function fabTypePatch(it, to) {
    if (it.kind === to) return {};
    const base = {
        kind: to
    };
    if (to === "fab") return {
        ...base,
        size: it.size2 ?? 56,
        size2: undefined
    };
    return {
        ...base,
        size: undefined,
        size2: Math.max(56, it.size ?? 56),
        label: it.label || KIND_SPEC.extendedFab.defLabel
    };
}
const PROGRESS_KINDS = [
    "linearProgress",
    "circularProgress"
];
const isProgress = (k)=>PROGRESS_KINDS.includes(k);
function progressTypePatch(it, to) {
    if (it.kind === to) return {};
    return {
        kind: to,
        size: to === "linearProgress" ? CONTENT_W : 48
    };
}
const CHOICE_KINDS = [
    "switch",
    "checkbox",
    "radio"
];
const isChoice = (k)=>CHOICE_KINDS.includes(k);
const PICTURE_KINDS = [
    "image",
    "camera",
    "map"
];
const isPicture = (k)=>PICTURE_KINDS.includes(k);
const FIELD_KINDS = [
    "textField",
    "select"
];
const isField = (k)=>FIELD_KINDS.includes(k);
const TEXT_SIZES = [
    {
        key: "body",
        value: 16
    },
    {
        key: "title",
        value: 22
    },
    {
        key: "headline",
        value: 28
    },
    {
        key: "display",
        value: 45
    }
];
const ENTRY_BOUNDS = {
    bottomNav: {
        min: 3,
        max: 5
    },
    navRail: {
        min: 3,
        max: 7
    },
    toolbar: {
        min: 2,
        max: 6
    }
};
const MENU_TARGET = "menu";
const SPLIT_MAIN_SLOT = "main";
const SPLIT_MENU_SLOT = "menu";
const hasMenu = (it)=>isFab(it.kind) && it.action?.to === MENU_TARGET;
const splitOpens = (it)=>it.kind === "splitButton" && (it.tabs?.length ?? 0) > 0;
const opensMenu = (it)=>hasMenu(it) || splitOpens(it);
const fabOpen = Symbol("fabOpen");
const menuUp = Symbol("menuUp");
const menuOpen = (it)=>opensMenu(it) && it[fabOpen] === true;
const splitMenuHeight = (it)=>(it.tabs?.length ?? 0) * SPLIT_MENU_ITEM_H + SPLIT_MENU_PAD * 2;
const menuRises = (it)=>it[menuUp] === true;
function splitMenuRisesAt(it, top, frame) {
    if (!frame || !splitOpens(it)) return false;
    const y = top - frame.y;
    const below = frameSizeOf(frame).h - (y + buttonHeightOf(it));
    return SPLIT_MENU_SHEET_GAP + splitMenuHeight(it) > below && y > below;
}
function menuPatch(it, on) {
    if (!on) return {
        action: undefined,
        [fabOpen]: undefined
    };
    return {
        action: {
            to: MENU_TARGET,
            transition: "none"
        },
        tabs: it.tabs ?? defaultTabsFor("fabMenu")
    };
}
const menuHeight = (it, fabH)=>fabH + (it.tabs?.length ?? 0) * (FAB_MENU_ITEM_H + FAB_MENU_GAP);
function migrateFabMenu(it) {
    if (it.kind !== "fabMenu") return it;
    const { size: _drop, ...rest } = it;
    return {
        ...rest,
        kind: "fab",
        size: 56,
        icon: KIND_SPEC.fab.defIcon,
        action: {
            to: MENU_TARGET,
            transition: "none"
        }
    };
}
function matchRunSize(item, host) {
    const family = KIND_SPEC[item.kind].connect?.family;
    if (!family || family !== KIND_SPEC[host.kind].connect?.family) return item;
    if (family === "chip") {
        const h = chipHeightOf(host);
        return chipHeightOf(item) === h ? item : {
            ...item,
            size2: h
        };
    }
    /* list items stack, so the measure they share is their width */ if (family === "list") {
        const w = host.size ?? KIND_SPEC[host.kind].defSize ?? KIND_SPEC[host.kind].w;
        return (item.size ?? KIND_SPEC[item.kind].defSize ?? KIND_SPEC[item.kind].w) === w ? item : {
            ...item,
            size: w
        };
    }
    if (family !== "button") return item;
    const h = buttonHeightOf(host);
    if (buttonHeightOf(item) === h) return item;
    if (item.kind === "iconButton") return {
        ...item,
        size: h
    };
    return {
        ...item,
        size2: h,
        ...item.size && item.size < h ? {
            size: h
        } : {}
    };
}
function runSizePatch(items, id, patch) {
    const at = items.findIndex((it)=>it.id === id);
    if (at < 0) return items;
    const next = {
        ...items[at],
        ...patch
    };
    const stacked = KIND_SPEC[items[at].kind].connect?.family === "list";
    const carries = items.length > 1 && ("size2" in patch || (items[at].kind === "iconButton" || stacked) && "size" in patch);
    if (!carries) return items.map((it, i)=>i === at ? next : it);
    return items.map((it, i)=>i === at ? next : matchRunSize(it, next));
}
const TRANSITIONS = [
    {
        key: "slide",
        label: "Slide from right",
        icon: "arrow_back"
    },
    {
        key: "slideLeft",
        label: "Slide from left",
        icon: "arrow_forward"
    },
    {
        key: "slideUp",
        label: "Slide from bottom",
        icon: "arrow_upward"
    },
    {
        key: "slideDown",
        label: "Slide from top",
        icon: "arrow_downward"
    },
    {
        key: "fade",
        label: "Fade",
        icon: "blur_on"
    },
    {
        key: "expand",
        label: "Expand",
        icon: "open_in_full"
    },
    {
        key: "none",
        label: "None",
        icon: "block"
    }
];
function actionSlotsOf(it) {
    if (it.kind === "topAppBar" || it.kind === "searchBar" || it.kind === "bottomNav" || it.kind === "navRail" || it.kind === "toolbar") return iconSlotsOf(it).filter((s)=>!!s.value);
    /* the entries of a menu, whichever FAB opens it */ if (it.kind === "fabMenu" || opensMenu(it)) return (it.tabs ?? []).map((t, i)=>({
            key: `tab:${i}`,
            label: t.label || `${i + 1}`,
            value: t.icon || null
        }));
    if (it.kind === "tabs") return (it.tabs ?? []).map((t, i)=>({
            key: `tab:${i}`,
            label: t.label || `${i + 1}`,
            value: null
        }));
    /* every card of a carousel is a place of its own to be sent from */ if (it.kind === "carousel") return carouselCardsOf(it).map((_, i)=>({
            key: `tab:${i}`,
            label: `${i + 1}`,
            value: null
        }));
    return [];
}
const toggleIcon = (it)=>it.toggle && it.toggle.icon !== undefined ? it.toggle.icon : it.icon;
function collapseFree(g, widths) {
    if (!g.free || g.items.length !== 1) return g;
    const pl = layoutOf(g, widths)[0];
    return {
        id: g.id,
        x: pl.x,
        y: pl.y,
        axis: connectSpecOf(g.items[0])?.axis ?? "x",
        items: g.items
    };
}
function actionsOf(it) {
    const out = [];
    if (it.action) out.push({
        slot: "",
        action: it.action
    });
    for (const [slot, action] of Object.entries(it.actions ?? {}))if (action) out.push({
        slot,
        action
    });
    return out;
}
const RIPPLE_KINDS = [
    "button",
    "iconButton",
    "chip",
    "fab",
    "extendedFab",
    "splitButton"
];
const TAPPABLE = [
    "button",
    "iconButton",
    "fab",
    "extendedFab",
    "chip",
    "listItem",
    "card",
    "image",
    "text",
    "splitButton",
    "radio",
    "datePicker",
    "timePicker"
];
const COLOR_TOKENS = [
    {
        key: "surface",
        label: "Surface"
    },
    {
        key: "surfaceContainerLow",
        label: "Container low"
    },
    {
        key: "surfaceContainer",
        label: "Container"
    },
    {
        key: "surfaceContainerHigh",
        label: "Container high"
    },
    {
        key: "surfaceContainerHighest",
        label: "Container highest"
    },
    {
        key: "primaryContainer",
        label: "Primary container"
    },
    {
        key: "secondaryContainer",
        label: "Secondary container"
    },
    {
        key: "tertiaryContainer",
        label: "Tertiary container"
    },
    {
        key: "primary",
        label: "Primary"
    },
    {
        key: "inverseSurface",
        label: "Inverse surface"
    }
];
const cardDefaultFillOf = (variant)=>variant === "outlined" ? "surface" : variant === "elevated" ? "surfaceContainerLow" : "surfaceContainerHighest";
const cardFillOf = (it)=>it.fill ?? cardDefaultFillOf(it.variant);
const isCardImagePos = (v)=>v === "top" || v === "bottom" || v === "leading" || v === "trailing" || v === "background";
const isCardImageBand = (pos)=>pos === "top" || pos === "bottom";
const cardImagePosOf = (it)=>it.imagePos ?? "top";
const isCardAlign = (v)=>v === "start" || v === "center" || v === "end";
const cardTextAlignOf = (it)=>it.textAlign ?? "start";
const cardContentAlignOf = (it)=>it.contentAlign ?? (!it.noImage && cardImagePosOf(it) === "background" ? "end" : "start");
const TEXT_TOKENS = [
    {
        key: "onSurface",
        label: "On surface"
    },
    {
        key: "onSurfaceVariant",
        label: "On surface variant"
    },
    {
        key: "primary",
        label: "Primary"
    },
    {
        key: "secondary",
        label: "Secondary"
    },
    {
        key: "onPrimaryContainer",
        label: "On primary container"
    },
    {
        key: "onSecondaryContainer",
        label: "On secondary container"
    },
    {
        key: "onTertiaryContainer",
        label: "On tertiary container"
    },
    {
        key: "inverseOnSurface",
        label: "Inverse on surface"
    }
];
const isTextToken = (v)=>TEXT_TOKENS.some((t)=>t.key === v);
function cardTextColorOf(it, p) {
    if (it.textColor) return p[it.textColor];
    if (!it.noImage && cardImagePosOf(it) === "background") return it.src ? "#ffffff" : p.onPrimaryContainer;
    return it.fill ? onToken(it.fill, p) : p.onSurface;
}
function cardBodyColorOf(it, p) {
    const plain = !it.textColor && !it.fill && (it.noImage || cardImagePosOf(it) !== "background");
    return plain ? {
        color: p.onSurfaceVariant,
        opacity: 1
    } : {
        color: cardTextColorOf(it, p),
        opacity: 0.8
    };
}
function cardScrimOf(ink, align) {
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLightColor"])(ink) ? "0,0,0" : "255,255,255";
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLightColor"])(ink) ? 0.65 : 0.72;
    if (align === "start") return `linear-gradient(rgba(${c},${a}), rgba(${c},0) 60%)`;
    if (align === "center") return `rgba(${c},${a * 0.65})`;
    return `linear-gradient(rgba(${c},0) 40%, rgba(${c},${a}))`;
}
const CARD_PADDING = 20;
const CARD_TEXT_GAP = 4;
const CARD_MEDIA_GAP = 12;
const CARD_SIDE_IMAGE_W = 80;
/** the least room an image must leave the text: one headline and one body line tall, or a readable column wide */ const CARD_MIN_TEXT_H = 48;
const CARD_MIN_TEXT_W = 96;
const CARD_IMAGE_MIN = 40;
function cardImageMaxOf(it) {
    const { w, h } = sizeOf(it, {});
    const room = isCardImageBand(cardImagePosOf(it)) ? h - CARD_MIN_TEXT_H : w - CARD_MIN_TEXT_W;
    return Math.max(CARD_IMAGE_MIN, room - CARD_PADDING * 2 - CARD_MEDIA_GAP);
}
function cardImageSizeOf(it) {
    const top = isCardImageBand(cardImagePosOf(it));
    const size = it.imageSize ?? (top ? Math.round((it.size ?? KIND_SPEC.card.defSize ?? KIND_SPEC.card.w) * 0.28) : CARD_SIDE_IMAGE_W);
    return Math.min(size, cardImageMaxOf(it));
}
function onToken(t, p) {
    switch(t){
        case "primary":
            return p.onPrimary;
        case "primaryContainer":
            return p.onPrimaryContainer;
        case "secondaryContainer":
            return p.onSecondaryContainer;
        case "tertiaryContainer":
            return p.onTertiaryContainer;
        case "inverseSurface":
            return p.inverseOnSurface;
        default:
            return p.onSurface;
    }
}
const LIST_STYLES = [
    {
        key: "surface",
        fill: "surfaceContainerLow",
        iconFill: "primaryContainer",
        text: "styleSurface"
    },
    {
        key: "primary",
        fill: "primaryContainer",
        iconFill: "primary",
        text: "stylePrimary"
    },
    {
        key: "secondary",
        fill: "secondaryContainer",
        iconFill: "surface",
        text: "styleSecondary"
    }
];
const listStyleOf = (it)=>{
    const fill = it.fill ?? "surfaceContainerLow";
    const icon = it.iconFill ?? "primaryContainer";
    return LIST_STYLES.find((s)=>s.fill === fill && s.iconFill === icon)?.key ?? null;
};
const listStylePatch = (style)=>{
    const s = LIST_STYLES.find((l)=>l.key === style) ?? LIST_STYLES[0];
    return style === "surface" ? {
        fill: undefined,
        iconFill: undefined
    } : {
        fill: s.fill,
        iconFill: s.iconFill
    };
};
const PLACES = [
    {
        key: "top",
        icon: "vertical_align_top"
    },
    {
        key: "center",
        icon: "vertical_align_center"
    },
    {
        key: "bottom",
        icon: "vertical_align_bottom"
    },
    {
        key: "spread",
        icon: "expand"
    }
];
const isPlace = (v)=>v === "top" || v === "center" || v === "bottom" || v === "spread";
const frameSizeOf = (f)=>({
        w: f.w ?? PHONE_W,
        h: f.h ?? PHONE_H
    });
const isPhoneFrame = (f)=>{
    const { w, h } = frameSizeOf(f);
    return w === PHONE_W && h === PHONE_H;
};
const framePresetOf = (f)=>isPhoneFrame(f) ? "phone" : "desktop";
const framePresetPatch = (preset)=>preset === "desktop" ? {
        w: DESKTOP_W,
        h: DESKTOP_H
    } : {
        w: undefined,
        h: undefined
    };
const frameLengthOf = (f)=>Math.max(f.length ?? 0, frameSizeOf(f).h);
const scrollsOf = (f)=>frameLengthOf(f) > frameSizeOf(f).h;
const frameRect = (f)=>{
    const { w } = frameSizeOf(f);
    return {
        l: f.x,
        t: f.y,
        r: f.x + w,
        b: f.y + frameLengthOf(f)
    };
};
const frameRadius = (f)=>isPhoneFrame(f) ? PHONE_R : DESKTOP_R;
const FULL_WIDTH = [
    "topAppBar",
    "bottomNav",
    "tabs",
    "carousel"
];
function fitHeight(it, screenH) {
    const spec = KIND_SPEC[it.kind];
    if (!spec.size2 && it.kind !== "navRail") return it;
    const h = it.size2 ?? spec.h;
    return h > screenH ? {
        ...it,
        size2: screenH
    } : it;
}
function carryItemSize(it, from, to) {
    const spec = KIND_SPEC[it.kind];
    const patch = {};
    const keepsShape = it.kind === "card" || it.kind === "image" || it.kind === "camera" || it.kind === "map";
    if (spec.size && (spec.size.icon === "width" || keepsShape)) {
        /* only a size that is a width; a text size or an icon button's square are left alone */ const cur = it.size ?? spec.defSize ?? spec.w;
        if (FULL_WIDTH.includes(it.kind)) {
            /* a bar the author narrowed on purpose stays narrow; one that spanned the screen still does */ if (cur === from.w || cur > to.w) patch.size = to.w;
        } else if (keepsShape) {
            if (cur > contentWidth(to.w)) patch.size = contentWidth(to.w);
        } else if (cur === from.w) patch.size = to.w;
        else if (cur === contentWidth(from.w)) patch.size = contentWidth(to.w);
        else if (cur === halfWidth(from.w)) patch.size = halfWidth(to.w);
        else if (cur > to.w) patch.size = to.w;
        else if (cur > contentWidth(to.w) && it.kind !== "box" && it.kind !== "bottomSheet") patch.size = contentWidth(to.w);
    }
    if ((it.kind === "box" || it.kind === "bottomSheet" || it.kind === "navRail") && (it.size2 ?? spec.h) === from.h) patch.size2 = to.h;
    /* a camera or map the author gave a height keeps its aspect ratio when its width changes */ if ((it.kind === "camera" || it.kind === "map") && it.size2 !== undefined && patch.size !== undefined) {
        const cur = it.size ?? spec.defSize ?? spec.w;
        patch.size2 = Math.round(it.size2 * patch.size / cur);
    }
    return Object.keys(patch).length ? {
        ...it,
        ...patch
    } : it;
}
function layoutOf(g, widths) {
    const out = [];
    let off = 0;
    g.items.forEach((it, index)=>{
        const sz = sizeOf(it, widths);
        if (g.free) {
            const o = g.pos?.[it.id] ?? {
                x: 0,
                y: 0
            };
            out.push({
                item: it,
                index,
                x: g.x + o.x,
                y: g.y + o.y,
                w: sz.w,
                h: sz.h
            });
            return;
        }
        out.push({
            item: it,
            index,
            x: g.axis === "x" ? g.x + off : g.x,
            y: g.axis === "x" ? g.y : g.y + off,
            w: sz.w,
            h: sz.h
        });
        off += (g.axis === "x" ? sz.w : sz.h) + GAP;
    });
    return out;
}
function groupBounds(g, widths) {
    let l = g.x;
    let t = g.y;
    let r = g.x;
    let b = g.y;
    for (const pl of layoutOf(g, widths)){
        l = Math.min(l, pl.x);
        t = Math.min(t, pl.y);
        r = Math.max(r, pl.x + pl.w);
        b = Math.max(b, pl.y + pl.h);
    }
    return {
        l,
        t,
        r,
        b
    };
}
function explodeGroup(g, widths) {
    if (!g.free) return [
        g
    ];
    const placed = [
        ...layoutOf(g, widths)
    ].sort((a, b)=>a.y - b.y || a.x - b.x);
    const rank = new Map(g.items.map((it, i)=>[
            it.id,
            i
        ]));
    const used = new Set();
    const out = [];
    const near = (a, b)=>Math.abs(a - b) <= 3;
    for (const start of placed){
        if (used.has(start.item.id)) continue;
        used.add(start.item.id);
        const run = [
            start
        ];
        const axis = connectSpecOf(start.item)?.axis ?? "x";
        let last = start;
        for(;;){
            const next = placed.find((q)=>!used.has(q.item.id) && canJoin(last.item, q.item) && (axis === "x" ? near(q.y, last.y) && near(q.x, last.x + last.w + GAP) : near(q.x, last.x) && near(q.y, last.y + last.h + GAP)));
            if (!next) break;
            used.add(next.item.id);
            run.push(next);
            last = next;
        }
        /* named after the member the group lists first, so the name survives a reorder */ const anchor = run.reduce((a, b)=>(rank.get(a.item.id) ?? 0) <= (rank.get(b.item.id) ?? 0) ? a : b);
        out.push({
            id: `${g.id}:${anchor.item.id}`,
            x: start.x,
            y: start.y,
            axis,
            items: run.map((r)=>r.item)
        });
    }
    const first = (r)=>Math.min(...r.items.map((it)=>rank.get(it.id) ?? 0));
    return out.sort((a, b)=>first(a) - first(b));
}
function runCorners(axis, first, last, outer, inner) {
    const a = first ? outer : inner;
    const b = last ? outer : inner;
    return axis === "x" ? {
        tl: a,
        bl: a,
        tr: b,
        br: b
    } : {
        tl: a,
        tr: a,
        bl: b,
        br: b
    };
}
function radiiOfRuns(runs) {
    const out = new Map();
    for (const run of runs){
        const n = run.items.length;
        run.items.forEach((it, i)=>{
            const c = connectSpecOf(it);
            out.set(it.id, c ? runCorners(run.axis, i === 0, i === n - 1, c.outer, c.inner) : baseRadii(it));
        });
    }
    return out;
}
function freeRadii(g, widths) {
    return radiiOfRuns(explodeGroup(g, widths));
}
function frameOfGroup(g, frames, widths) {
    const bb = groupBounds(g, widths);
    const cx = (bb.l + bb.r) / 2;
    const cy = (bb.t + bb.b) / 2;
    return frames.find((f)=>{
        const fr = frameRect(f);
        return cx >= fr.l && cx <= fr.r && cy >= fr.t && cy <= fr.b;
    });
}
const groupsInFrame = (groups, f, frames, widths)=>groups.filter((g)=>frameOfGroup(g, frames, widths)?.id === f.id);
const DEFAULT_PLATFORM = "android";
const isPlatform = (v)=>v === "android" || v === "web";
const defaultPlatformOf = (frames, mode)=>mode === "phone" && frames.some((f)=>!isPhoneFrame(f)) ? "web" : DEFAULT_PLATFORM;
const defaultTabs = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_TABS"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLang"])()].map((t)=>({
            ...t
        }));
const TOOLBAR_ICONS = [
    "format_bold",
    "format_italic",
    "format_underlined",
    "attach_file",
    "format_color_text",
    "more_vert"
];
function defaultTabsFor(kind) {
    switch(kind){
        case "tabs":
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAB_LABELS"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLang"])()].map((label)=>({
                    icon: "",
                    label
                }));
        case "select":
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECT_OPTIONS"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLang"])()].map((label)=>({
                    icon: "",
                    label
                }));
        case "fabMenu":
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAB_MENU_TABS"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLang"])()].map((t)=>({
                    ...t
                }));
        case "splitButton":
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPLIT_MENU_TABS"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLang"])()].map((t)=>({
                    ...t
                }));
        case "toolbar":
            return TOOLBAR_ICONS.map((icon)=>({
                    icon,
                    label: ""
                }));
        default:
            return defaultTabs();
    }
}
function makeItem(kind) {
    const s = KIND_SPEC[kind];
    const text = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_TEXT"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLang"])()][kind];
    const it = {
        id: uid(),
        kind,
        label: text?.label ?? s.defLabel,
        icon: s.defIcon,
        variant: s.defVariant ?? "filled"
    };
    if (s.defSupporting !== undefined) it.supporting = text?.supporting ?? s.defSupporting;
    if (s.defIcon2 !== undefined) it.icon2 = s.defIcon2;
    if (s.defSize !== undefined) it.size = s.defSize;
    if (s.hasChecked) it.checked = kind !== "chip";
    if (kind === "box") {
        it.size2 = 220;
        it.radiusTop = 28;
        it.radiusBottom = 28;
        it.fill = "surfaceContainerHigh";
    }
    if (kind === "bottomSheet") {
        it.size2 = 320;
        it.radiusTop = 28;
        it.fill = "surfaceContainerLow";
    }
    if (kind === "slider") it.value = 40;
    if (kind === "carousel") {
        it.layout = "multiBrowse";
        it.count = 4;
        it.size2 = 180;
    }
    if (kind === "datePicker") it.layout = "modal";
    if (kind === "timePicker") it.layout = "dial";
    if (kind === "bottomNav") {
        it.tabs = defaultTabs();
        it.radiusTop = 0;
        it.radiusBottom = 0;
    }
    if (kind === "navRail") {
        it.tabs = defaultTabs();
        it.railExpanded = false;
    }
    if (kind === "tabs" || kind === "fabMenu" || kind === "select" || kind === "splitButton") it.tabs = defaultTabsFor(kind);
    if (kind === "toolbar") it.tabs = defaultTabsFor(kind).slice(0, 4);
    return it;
}
const MEASURED = [
    "button",
    "extendedFab",
    "chip",
    "switch",
    "checkbox",
    "text",
    "splitButton",
    "radio",
    "fabMenu"
];
const isMeasured = (it)=>MEASURED.includes(it.kind) && !((it.kind === "switch" || it.kind === "button") && it.size) || menuOpen(it);
const TRACK_MIN = 2;
const TRACK_MAX = 16;
const TRACK_DEFAULT = 4;
const maxRingThickness = (size)=>Math.max(TRACK_DEFAULT, Math.min(TRACK_MAX, Math.floor(size / 6)));
const isTrackThickness = (v)=>typeof v === "number" && Number.isInteger(v) && v >= TRACK_MIN && v <= TRACK_MAX;
const progressThickness = (it)=>{
    const v = isTrackThickness(it.trackThickness) ? it.trackThickness : TRACK_DEFAULT;
    return it.kind === "circularProgress" ? Math.min(v, maxRingThickness(it.size ?? KIND_SPEC.circularProgress.w)) : v;
};
function sizeOf(it, widths) {
    const s = KIND_SPEC[it.kind];
    const n = it.size ?? s.defSize ?? s.w;
    switch(it.kind){
        case "switch":
            return {
                w: it.size ?? widths[it.id] ?? s.w,
                h: s.h
            };
        case "button":
            return {
                w: it.size ?? widths[it.id] ?? s.w,
                h: buttonHeightOf(it)
            };
        case "extendedFab":
            return menuOpen(it) ? {
                w: widths[it.id] ?? 220,
                h: menuHeight(it, extendedFabHeight(it))
            } : {
                w: widths[it.id] ?? 128,
                h: extendedFabHeight(it)
            };
        case "chip":
            return {
                w: widths[it.id] ?? 128,
                h: chipHeightOf(it)
            };
        case "splitButton":
            return {
                w: widths[it.id] ?? 128,
                h: buttonHeightOf(it) + (menuOpen(it) ? SPLIT_MENU_SHEET_GAP + splitMenuHeight(it) : 0)
            };
        case "checkbox":
        case "radio":
            return {
                w: widths[it.id] ?? 128,
                h: s.h
            };
        case "fabMenu":
            /* the menu is as wide as its widest entry: nothing to set, so nothing to get wrong */ return {
                w: widths[it.id] ?? n,
                h: 56 + (it.tabs?.length ?? 0) * (FAB_MENU_ITEM_H + FAB_MENU_GAP)
            };
        case "toolbar":
            return {
                w: toolbarWidth(it),
                h: s.h
            };
        case "tabs":
            return {
                w: n,
                h: s.h
            };
        case "text":
            return {
                w: widths[it.id] ?? 120,
                h: Math.round(n * 1.3)
            };
        case "fab":
            return menuOpen(it) ? {
                w: widths[it.id] ?? 220,
                h: menuHeight(it, FAB_MENU_CLOSE)
            } : {
                w: n,
                h: n
            };
        case "iconButton":
        case "circularProgress":
        case "loadingIndicator":
            return {
                w: n,
                h: n
            };
        /* a picture is as tall as it was made; square until it is given a height of its own */ case "image":
            return {
                w: n,
                h: it.size2 ?? n
            };
        case "camera":
            return {
                w: n,
                h: it.size2 ?? Math.round(n * 4 / 3)
            };
        case "map":
            return {
                w: n,
                h: it.size2 ?? Math.round(n * 3 / 4)
            };
        case "topAppBar":
            /* the status-bar inset belongs to a phone: a bar wider than one has no status bar above it.
       * (An Android tablet does; the canvas leaves that to the prompt.) */ return {
                w: n,
                h: topBarHeightOf(it) + (n > PHONE_W ? 0 : STATUS_BAR_H)
            };
        case "searchBar":
        case "bottomNav":
        case "listItem":
        case "textField":
        case "select":
        case "slider":
        case "linearProgress":
        case "divider":
            return {
                w: n,
                h: s.h
            };
        case "carousel":
            return {
                w: n,
                h: it.size2 ?? s.h
            };
        case "datePicker":
            {
                const l = dateLayoutOf(it);
                /* the calendar's rows follow its width, so a wider dialog is a taller one */ const cell = Math.round((n - 24 * 2) / 7);
                /* the headline, the month row, seven rows of days and the two text buttons */ return {
                    w: n,
                    h: l === "input" ? 96 : l === "docked" ? 120 + cell * 7 : 164 + cell * 7
                };
            }
        case "timePicker":
            {
                const dial = Math.min(256, n - 48);
                /* the heading, the two plates, the dial and the two text buttons */ return {
                    w: n,
                    h: timeLayoutOf(it) === "input" ? 204 : 196 + dial
                };
            }
        case "card":
            return {
                w: n,
                h: it.size2 ?? Math.round(n * 0.5875)
            };
        case "box":
        case "bottomSheet":
            return {
                w: n,
                h: it.size2 ?? s.h
            };
        case "navRail":
            return {
                w: railWidth(it),
                h: it.size2 ?? s.h
            };
        default:
            return {
                w: s.w,
                h: s.h
            };
    }
}
function baseRadii(it) {
    const s = KIND_SPEC[it.kind];
    switch(it.kind){
        /* a button stays fully round whatever height it is given */ case "button":
            return uniformRadii(scaleR(buttonHeightOf(it) / 2));
        /* a sheet rounds only the edge it rises with; its bottom stays flush with the screen */ case "bottomSheet":
            {
                const t = it.radiusTop ?? s.radius;
                return {
                    tl: t,
                    tr: t,
                    bl: 0,
                    br: 0
                };
            }
        case "box":
            if (it.corners) return {
                ...it.corners
            };
        // falls through
        case "bottomNav":
        case "topAppBar":
        case "tabs":
            {
                const t = it.radiusTop ?? 0;
                const b = it.radiusBottom ?? 0;
                return {
                    tl: t,
                    tr: t,
                    bl: b,
                    br: b
                };
            }
        case "navRail":
            {
                /* a rail's corners are its left and right sides: radiusTop is the left pair, radiusBottom the right */ const modalRadius = it.railExpanded && it.railModal ? 16 : 0;
                const l = it.radiusTop ?? modalRadius;
                const r = it.radiusBottom ?? modalRadius;
                return {
                    tl: l,
                    bl: l,
                    tr: r,
                    br: r
                };
            }
        case "fab":
            return uniformRadii(scaleR(Math.round((it.size ?? 56) * 0.28)));
        case "extendedFab":
            return uniformRadii(scaleR(extendedFabMetrics(extendedFabHeight(it)).radius));
        case "fabMenu":
            return uniformRadii(0);
        case "iconButton":
            return uniformRadii(scaleR((it.size ?? 48) / 2));
        case "circularProgress":
        case "loadingIndicator":
            return uniformRadii((it.size ?? 48) / 2);
        case "card":
        case "image":
            if (it.corners) return {
                ...it.corners
            };
        // falls through
        case "camera":
        case "map":
            return uniformRadii(it.radiusTop ?? scaleR(s.radius));
        case "carousel":
            return uniformRadii(it.radiusTop ?? 0);
        /* the two segments keep their own corners, so what the box is asked for is the outer one */ case "splitButton":
            return uniformRadii(scaleR(buttonHeightOf(it) / 2));
        case "radio":
            return uniformRadii(s.radius);
        default:
            return uniformRadii(scaleR(s.radius));
    }
}
const FAB_MENU_ITEM_H = 56;
const FAB_MENU_CLOSE = 56;
const FIXED_TABS_MAX = 5;
const SCROLL_TAB_W = 96;
const isScrollableTabs = (it)=>{
    const n = it.tabs?.length ?? 0;
    return it.kind === "tabs" && n > FIXED_TABS_MAX && n * SCROLL_TAB_W > sizeOf(it, {}).w;
};
/** per-tab tap targets renumbered after the tab list changed; `to(j)` gives the old index j its new one, or nothing */ function remapTabActions(actions, to) {
    if (!actions) return undefined;
    const next = {};
    for (const [key, a] of Object.entries(actions)){
        const m = /^tab:(\d+)$/.exec(key);
        if (!m) {
            next[key] = a;
            continue;
        }
        const j = to(Number(m[1]));
        if (j !== undefined) next[`tab:${j}`] = a;
    }
    return Object.keys(next).length ? next : undefined;
}
function reorderTabsPatch(it, order) {
    const cur = it.tabs ?? [];
    const tabs = order.map((j)=>({
            ...cur[j]
        }));
    const to = new Map(order.map((from, at)=>[
            from,
            at
        ]));
    return {
        tabs,
        selected: it.selected === undefined ? undefined : to.get(it.selected) ?? it.selected,
        actions: remapTabActions(it.actions, (j)=>to.get(j))
    };
}
function removeTabPatch(it, i) {
    const tabs = (it.tabs ?? []).filter((_, j)=>j !== i);
    const sel = it.selected;
    const last = Math.max(0, tabs.length - 1);
    const selected = sel === undefined ? undefined : sel > i ? sel - 1 : sel < i ? sel : it.kind === "select" ? undefined : Math.min(i, last);
    return {
        tabs,
        selected,
        actions: remapTabActions(it.actions, (j)=>j === i ? undefined : j > i ? j - 1 : j)
    };
}
function tabCountPatch(it, n, defaults) {
    const cur = it.tabs ?? [];
    const tabs = [];
    for(let i = 0; i < n; i++)tabs.push(cur[i] ? {
        ...cur[i]
    } : {
        ...defaults[i % defaults.length]
    });
    return {
        tabs,
        selected: it.selected !== undefined && it.selected >= n ? undefined : it.selected,
        actions: remapTabActions(it.actions, (j)=>j < n ? j : undefined)
    };
}
function tabScrollOffset(it, width) {
    if (!isScrollableTabs(it)) return 0;
    const n = it.tabs?.length ?? 0;
    const sel = Math.min(it.selected ?? 0, Math.max(0, n - 1));
    const max = Math.max(0, n * SCROLL_TAB_W - width);
    return Math.max(0, Math.min(max, (sel + 1.5) * SCROLL_TAB_W - width));
}
const FAB_MENU_GAP = 8;
const toolbarWidth = (it)=>{
    const n = Math.max(1, it.tabs?.length ?? 0);
    return 16 + n * 48 + (n - 1) * 4;
};
const connectSpecOf = (it)=>{
    const c = KIND_SPEC[it.kind].connect;
    /* the ends of a run are as round as the part is tall, so a taller button keeps its full corners */ const outer = it.kind === "button" || it.kind === "iconButton" ? buttonHeightOf(it) / 2 : it.kind === "chip" ? chipHeightOf(it) / 2 : c?.outer ?? 0;
    return c && {
        ...c,
        outer: scaleR(outer),
        inner: scaleR(c.inner)
    };
};
const connectable = (it)=>!!KIND_SPEC[it.kind].connect;
const canJoin = (a, b)=>{
    const sa = connectSpecOf(a);
    const sb = connectSpecOf(b);
    return !!sa && !!sb && sa.axis === sb.axis && sa.family === sb.family;
};
function iconSlotsOf(it) {
    switch(it.kind){
        case "listItem":
        case "topAppBar":
        case "searchBar":
            return [
                {
                    key: "icon",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("leading"),
                    value: it.icon
                },
                {
                    key: "icon2",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("trailing"),
                    value: it.icon2 ?? null
                }
            ];
        case "bottomNav":
        case "navRail":
        case "toolbar":
            return (it.tabs ?? []).map((t, i)=>({
                    key: `tab:${i}`,
                    label: `${i + 1}`,
                    value: t.icon || null
                }));
        case "fabMenu":
            return [
                {
                    key: "icon",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("icon"),
                    value: it.icon
                },
                ...(it.tabs ?? []).map((t, i)=>({
                        key: `tab:${i}`,
                        label: `${i + 1}`,
                        value: t.icon || null
                    }))
            ];
        default:
            return KIND_SPEC[it.kind].hasIcon ? [
                {
                    key: "icon",
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])("icon"),
                    value: it.icon
                }
            ] : [];
    }
}
function setIconSlot(it, key, v) {
    if (key === "icon") return {
        icon: v
    };
    if (key === "icon2") return {
        icon2: v
    };
    if (key === "toggle") return {
        toggle: {
            ...it.toggle ?? {},
            icon: v
        }
    };
    if (key.startsWith("tab:")) {
        const i = Number(key.slice(4));
        const tabs = (it.tabs ?? []).map((t, j)=>j === i ? {
                ...t,
                icon: v ?? ""
            } : t);
        return {
            tabs
        };
    }
    return {};
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CONTENT_W");
__turbopack_context__.k.register(_c1, "HALF_W");
__turbopack_context__.k.register(_c2, "PALETTES$PRESETS.map");
__turbopack_context__.k.register(_c3, "PALETTES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=lib_1q9p0ff._.js.map