npx eslint --init  
npx husky install


npx hasky add .husky/pre-commit "pnpm lint"
npx husky add .husky/commit-msg "npx -no-install commitlint -e $HUSKY_GIT_PARAMS" 