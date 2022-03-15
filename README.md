# nickertdotdev

## GitHub Pages Release
### Step 1
```
git checkout master && git pull && git branch -D gh-pages && git checkout -b "gh-pages" && npm run build && touch dist/CNAME && echo "cameron.nickert.dev" > dist/CNAME && git add dist -f && git commit -m "release" && git push origin --delete gh-pages && git subtree push --prefix dist origin gh-pages && git checkout master
```
### Step 2
Go to repository settings and makes sure the "Enforce HTTPS" option is checked.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
