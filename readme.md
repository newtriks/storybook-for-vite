# Test project to get Storybook, Vite, PNPM & React working

Example project that uses a monorepo architecture with PNPM, Vite, React and Storybook. The overall goals are related to testing these specific tools and libraries compatibility with Storybook. 

Aims include:

1. Ability to run stories from root level of the monorepo.
2. Ability to run stories on a package per package basis so that development of package content e.g. React Components can be done simply using Storybook as opposed to running a separate Vite dev server. This approach encourages documentation to be completed (for obvious reasons as your developing within Storybook) and component testing without the need for other libraries such as Cypress.
3. Ability to run component tests on a package per package basis.

## Installation

1. `pnpm i`
2. `pnmp storybook`

## Run storybook

1. Root stories: `pnpm storybook`
2. Package stories: `pnpm --filter @newtriks/button storybook`

## Gotcha fixes

* If odd errors are thrown, run `rm -rf node_modules/.cache` to delete Storybook cache that seems to cause issues at times.
* Initial running of the project throws a *ton* of dependency warnings (this issue is already reported on Github) so they need manually adding to the `package.json`. PNPM offers a nice way to separate these out using `.pnpmfile.cjs` where I've moved all the Storybook dependencies to better track them. 
* `Uncaught SyntaxError: The requested module '/node_modules/.vite-storybook/deps/@mdx-js_react.js?v=6b955f31' does not provide an export named 'mdx' (at VM480 Introduction.stories.mdx:7:10)` error is shown specifically when using React **v17**. Fix is to downgrade `'@mdx-js/react` version to **v1**.

## Issues

* Webpack still required as it's a `peerDependency` for `@storybook/addon-docs` (even with the latest 7.0.0-alpha.35 version):
  * ```
    ├─┬ @storybook/addon-docs 7.0.0-alpha.35
    │ ├─┬ @storybook/core-common 7.0.0-alpha.35
    │ │ └── ✕ missing peer typescript@"*"
    │ └─┬ babel-loader 8.2.5
    │   └── ✕ missing peer webpack@>=2
    ```
* Oddly, this warning displays in the terminal `WARN unable to find package.json for @vitejs/plugin-react`.
* **Introduction** page loads > click **Button** nav link to navigate url > click **Introduction** nav link. This results in an error: `Error: Docs-only story` due to the url now using `—page` instead of `—docs`.
* Another _oddly_ is that since moving this to a monorepo structure, I have to manually refresh the browser after it loads to get the stories to render (sometimes)?
* URL uses cached path query parameter (/?path=/docs/example-header--docs) on starting storybook. If you navigate to a story, then delete it, then restart storybook it navigates to that specific path and obviously then cannot find a matching story. This sounds trivial I know, however, configuration in this repo includes starting storybook in different packages and ideally, needs them to simply load the root url e.g. http://localhost:5001 on start each time.
