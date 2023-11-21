import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Mahiwa Document",
  description:
    "MAHIWA can be written in Any High-level language and run on MicroController, which Integrates the latest functionality with WebAssembly.",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/logo/mahiwa-logo-v1.svg" },
    ],
    [
      "link",
      { rel: "icon", type: "image/png", href: "/logo/mahiwa-logo-v1.png" },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo/mahiwa-logo-v1.svg",
    editLink: {
      pattern: "https://github.com/project-mahiwa/document/edit/main/:path",
      text: "Edit this page on GitHub",
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/guide/getting-started" },
      {
        text: "Developer Reference",
        link: "/reference/developer/",
        activeMatch: "/reference/developer/*",
      },
      {
        text: "Maintainer Reference",
        link: "/reference/maintainer/",
        activeMatch: "/reference/maintainer/*",
      },
    ],

    sidebar: [
      {
        text: "Usage",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          {
            text: "Support Languages",
            link: "/reference/developer/languages/",
          },
          { text: "Support MCUs", link: "/reference/developer/boards/" },
        ],
      },
      {
        text: "Developer Reference",
        collapsed: true,
        items: [
          {
            text: "Go",
            link: "/reference/developer/languages/go/",
            collapsed: true,
            items: [
              { text: "Time", link: "/reference/developer/go/time" },
              { text: "Serial", link: "/reference/edward/go/serial" },
            ],
          },
        ],
      },
      {
        text: "Maintainer Reference",
        collapsed: true,
        items: [
          {
            text: "Backend",
            collapsed: true,
            items: [
              {
                text: "Add MCU",
                link: "/reference/maintainer/backend/add-mcu",
              },
            ],
          },
          {
            text: "Frontend",
            collapsed: true,
            items: [
              {
                text: "Go",
                collapsed: true,
                items: [
                  {
                    text: "Add function",
                    link: "/reference/maintainer/frontend/go/add-function",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Ecosystem",
        collapsed: true,
        link: "/ecosystem/",
        items: [
          { text: "PlatformIO", link: "/ecosystem/software/platformio" },
          { text: "WebAssembly", link: "/ecosystem/software/webassembly" },
          { text: "Wasm3", link: "/ecosystem/software/wasm3" },
          { text: "Arduino", link: "/ecosystem/software/arduino" },
        ],
      },
      {
        text: "Research",
        collapsed: true,
        items: [
          { text: "Benchmark", link: "/research/benchmark/" },
          {
            text: "ipsj",
            link: "/research/publication/ipsj86",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/project-mahiwa" },
    ],
  },
});
