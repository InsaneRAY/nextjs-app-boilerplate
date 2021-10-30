> Put all the constants and utilities into `constants.js` and `utils.js` regardless of it's for server side or client side.

We don't split them into dedicated files is because

1. When you start the server, every single line of the files under `lib` will be loaded, even some of them are just for the client side, but since the code will on a server, the volume won't be an issue.
2. When Webpack bundles the files in `production`, `tree-shaking` feature should eliminate unused code.
3. It has better maintainability and DX. If you type `utils` in the search bar of your IDE, there'll only be 1 file, no need to distinguish by path.
