#!/bin/bash

# Ask for a commit message
echo "Enter your commit message:"
read commit_message

# 1. Commit to master
git checkout master
git add .
git commit -m "$commit_message"
git push origin master

# 2. Merge to staging (main)
git checkout main
git merge master
git push origin main

# 3. Deploy to gh-pages (no merge — let the deploy handle that)
git checkout master
npm run deploy
