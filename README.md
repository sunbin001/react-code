npx eslint --init

pnpm i husky -D -w

npx husky install

pnpm i commitlint @commitlint/cli @commitlint/config-conventional

npx husky add .husky/pre-commit "pnpm lint"

npx husky add .husky/commit-msg "npx -no-install commitlint -e $HUSKY_GIT_PARAMS"


pnpm i -D -w rollup