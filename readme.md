# Test project to get Storybook, Vite, PNPM & React working

## Installation

1. `pnpm i`
2. `pnmp storybook`
3. 
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

## TODO

1. Work out how to run packages independently in Storybook e.g. run the `Button` package using Storybooks dev server and develop using that workflow as opposed to needing a separate instance of a Vite dev server.
2. Implement component testing in the same fashion as above.