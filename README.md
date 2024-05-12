### Important commands

```bash
# start development server
npm run dev

# build command
npm run build
```

### Create single JS file output which then can be used in any html file `script` tag

- just run the build command `npm run build` this will build the react app into a single javascript file in the dist folder
- output code will be here `/dist/particle-logo-app.js`
- then copy the `particle-logo-app.js` file and past it to your application
- after that on your html file create a new `div` element with id `particle-logo-app` like this
  ```html
  <div id="particle-logo-app"></div>
  ```
- add a script tag inside the html file and add the the javascript file location in the `src` attribute like this

  ```html
  <body>
    ...
    <div id="particle-logo-app"></div>
    ...

    <script src="/js/particle-logo-app.js"></script>
    <body></body>
  </body>
  ```

- also the `logo.jepg` file should be in the root directory of your project
- open the html file on browser and you can see the output
