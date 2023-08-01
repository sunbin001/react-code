npx eslint --init  

pnpm i husky -D -w
npx husky install


npx husky add .husky/pre-commit "pnpm lint"
npx husky add .husky/commit-msg "npx -no-install commitlint -e $HUSKY_GIT_PARAMS" 