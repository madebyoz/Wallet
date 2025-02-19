module.exports = {
  "*.{js,ts,tsx}": ["pnpm run eslint:cmd --fix"],
  "*.{md,json,yml}": ["pnpm run prettier:cmd --write"],
  "package.json": ["pnpm run prettier:cmd --write"],
};
