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
            link: "/reference/developer/languages/go",
          },
          {
            text: "Rust",
            link: "/reference/developer/languages/rust",
          },
          {
            text: "Troubleshooting",
            collapsed: true,
            items: [
              {
                text: "mahiwa",
                link: "/reference/developer/troubleshooting/",
              },
              {
                text: "Go",
                link: "/reference/developer/troubleshooting/go",
              },
              {
                text: "Rust",
                link: "/reference/developer/troubleshooting/rust",
              },
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
            link: "/reference/maintainer/backend/",
            collapsed: true,
            items: [
              {
                text: "Add MCU",
                link: "/reference/maintainer/backend/add-mcu",
              },
              {
                text: "Add API",
                link: "/reference/maintainer/backend/add-api",
              },
            ],
          },
          {
            text: "Frontend",
            link: "/reference/maintainer/frontend/",
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
          {
            text: "Benchmark",
            link: "/research/benchmark/",
            collapsed: true,
            items: [
              { text: "Environment", link: "/research/benchmark/environment" },
              {
                text: "Time measurement accuracy",
                link: "/research/benchmark/time-measurement-accuracy",
              },
              { text: "Coremark", link: "/research/benchmark/coremark" },
              { text: "Tasks", link: "/research/benchmark/task/" },
            ],
          },
          { text: "Q&A", link: "/research/qa/" },
          {
            text: "Other Method",
            collapsed: true,
            items: [
              { text: "TinyGo", link: "/research/other-method/tinygo" },
              { text: "C/C++", link: "/research/other-method/c-cpp" },
              { text: "Rust", link: "/research/other-method/rust" },
              { text: "mruby", link: "/research/other-method/mruby" },
              {
                text: "MicroPython",
                link: "/research/other-method/micropython",
              },
              { text: "WARDuino", link: "/research/other-method/warduino" },
            ],
          },
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
