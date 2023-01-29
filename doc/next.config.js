// const withAntdLess = require('next-plugin-antd-less');
const nextra = require("nextra");
const path = require("path");

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  experimental: {
    appDir: false,
  },
  // compiler: {
  //     // ssr and displayName are configured by default
  //     // styledComponents: true,
  //     reactRemoveProperties: { properties: ["^data-cy$"] },
  //
  // },
});
