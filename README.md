# Yummly Collection Archive Viewer

This is a web app for viewing Yummly collection archives downloaded by https://github.com/jsmartt/yummly_downloader_chrome.

It can be accessed here: https://jsmartt.github.io/yummly-viewer/

## Stack & Libraries

See the [packages.json](packages.json) file for a complete list, but here are some of the main libraries used:

- [Vue.js 3](https://vuejs.org/guide/introduction.html)
- [Quasar](https://quasar.dev/)
  - Uses [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons)
- [Vite](https://vitejs.dev/)
- [Lodash](https://lodash.com/docs/4.17.15)

Files are laid out as documented in the [Quasar directory structure doc](https://quasar.dev/quasar-cli-vite/directory-structure).

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run dev
```


### Lint (and fix) the files
```bash
npm run lint
# or to lint without fixing:
npm run lint-no-fix
```


### Build the app for production
```bash
npm run build
```

### Check for dependency vulnerabilities
```bash
npm audit

# Check only for critical vulnerabilities for production libraries:
npm audit --production --audit-level=critical
```

### Check for outdated packages
```bash
npm outdated
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
