#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "New Deploy"
git push -f git@github.com:ghlusiak/Portifolio.git main:gh-pages

cd -