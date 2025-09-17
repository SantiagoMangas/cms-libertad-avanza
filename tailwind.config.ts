import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
        typography: ({ theme }) => ({
            purple: {
            css: {
                "--tw-prose-headings": theme("colors.purple[700]"),
                "--tw-prose-links": theme("colors.purple[600]"),
                "--tw-prose-bold": theme("colors.purple[800]"),
                "--tw-prose-quotes": theme("colors.purple[600]"),
            },
            },
        }),
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
};
export default config;
