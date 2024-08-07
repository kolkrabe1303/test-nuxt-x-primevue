import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["@primevue/nuxt-module"],

    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    primevue: {
        options: {
            unstyled: true,
        },
        importPT: { from: path.resolve(__dirname, "./presets/lara/") },
    },
});
