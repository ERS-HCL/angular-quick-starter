# Angular Quick Starter 

> An Angular quick starter kit featuring all the goodies from the base project [Angular Webpack Starter] (https://github.com/AngularClass/angular-starter) 

[Angular 4](https://angular.io), [Ahead of Time Compile](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html), [Router](https://angular.io/docs/ts/latest/guide/router.html), [Forms](https://angular.io/docs/ts/latest/guide/forms.html),
[Http](https://angular.io/docs/ts/latest/guide/server-communication.html),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter),
[Tests](https://angular.io/docs/ts/latest/guide/testing.html), [E2E](https://angular.github.io/protractor/#/faq#what-s-the-difference-between-karma-and-protractor-when-do-i-use-which-)), [Karma](https://karma-runner.github.io/), [Protractor](https://angular.github.io/protractor/), [Jasmine](https://github.com/jasmine/jasmine), [Istanbul](https://github.com/gotwarlost/istanbul), [TypeScript](http://www.typescriptlang.org/), [@types](https://www.npmjs.com/~types), [TsLint](http://palantir.github.io/tslint/), [Codelyzer](https://github.com/mgechev/codelyzer), [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html), and [Webpack 2](http://webpack.github.io/) by [AngularClass](https://angularclass.com).

> This has been enhanced with the learning and experiences implementing Angular based solutions

* Added NGRX and NGRX LocalStorageSync and setup the infrastructure for the same
* Added NGRX store utilities
* Get the current snapshot of the store
* intl polyfill for i18n Angular 2/4 APIs / pipes
* profile based environment parameters infrastructure - dev, test, prod
* Json-server infrastructure
* Utilities added - Jquery, lodash
* Added an end-to-end reference implementation with product view , selection ,cart view and registration form (with validation) , lazy loading, page guards, mock API access , Reactive templates and forms using Observables, Modules creation , Smart and Dump Component separation, routing, conditional templates, Data Model, Redux Reducers , Effects etc.
* This will help the developers have a reference of the "right way of implementing " - First time right
* UI CSS/Styling
* Bootstrap 3/JQuery support
* A reference implementation for
* Session Timeout (Set a timer based on an expiry date/time and get a warning/alert on completion)
* CMS integration (headless) with build time template updates with CMS content
* End to End shopping experience workflow Products/Pricing/Cart/Registration Form/Invoice based on the redux pattern , using highly performant Observables 

### Reference Usecase

* An online subscription plan which the user can view the features and the pricing details , select one or more plans and add it to the cart , view and modify the cart contents and then proceed to register his details before checkout.
* Catalog - An online product plan with a set of features and related pricing 
* Product , Features , Plans
* User
1) Views the plans , features and then selects one or more plans and adds them to the cart
2) The cart can be viewed and modified
3) Once the cart has items added the user can proceed to register himself and adding address details
4) On completion an invoice is generated
* Patterns : Modules, LazyLoading, Web Components, Smart Components, Redux Store , Reducers, Page Routing Guards, Reactive Forms, API Access, Event Emitters, Observables, Conditional Templates, i18n Pipes, Validators

### Quick start
**Make sure you have Node version >= 6.0 and NPM >= 3**

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/ng2-dev/angular-quick-starter.git

# change directory to our repo
cd angular-quick-starter

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

### Angular Material 2
Check out the dev-material branch for the angular material 2 sample

## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-webpack-starter/
 +--config/                        * our configuration
 |   +--helpers.js                 * helper functions for our configuration files
 |   +--spec-bundle.js             * ignore this magic that sets up our Angular testing environment
 |   +--karma.conf.js              * karma config for our unit tests
 |   +--protractor.conf.js         * protractor config for our end-to-end tests
 �   +--webpack.dev.js             * our development webpack config
 �   +--webpack.prod.js            * our production webpack config
 �   +--webpack.test.js            * our testing webpack config
 �
 +--src/                           * our source files that will be compiled to javascript
 |   +--main.browser.ts            * our entry file for our browser environment
 �   �
 |   +--index.html                 * Index.html: where we generate our index page
 �   �
 |   +--polyfills.ts               * our polyfills file
 �   �
 �   +--app/                       * WebApp: folder
 �   �   +--app.component.spec.ts  * a simple test of components in app.component.ts
 �   �   +--app.e2e.ts             * a simple end-to-end test for /
 �   �   +--app.component.ts       * a simple version of our App component components
 �   �
 �   +--assets/                    * static assets are served here
 �       +--icon/                  * our list of icons from www.favicon-generator.org
 �       +--service-worker.js      * ignore this. Web App service worker that's not complete yet
 �       +--robots.txt             * for search engines to crawl your website
 �       +--humans.txt             * for humans to know who the developers are
 �
 �
 +--tslint.json                    * typescript lint config
 +--typedoc.json                   * typescript documentation generator
 +--tsconfig.json                  * typescript config used outside webpack
 +--tsconfig.webpack.json          * config that webpack uses for typescript
 +--package.json                   * what npm uses to manage it's dependencies
 +--webpack.config.js              * webpack main configuration file

```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v6.x.x`+ (or `v7.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies or `yarn`
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production (jit)
npm run build:prod
# AoT
npm run build:aot
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run unit tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# update Webdriver (optional, done automatically by postinstall script)
npm run webdriver:update
# this will start a test server and launch Protractor
npm run e2e
```

### continuous integration (run unit tests and e2e tests together)
```bash
# this will test both your JIT and AoT builds
npm run ci
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run e2e:live
```

### build Docker
```bash
npm run build:docker
```

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application

# AoT Don'ts
The following are some things that will make AoT compile fail.

- Don�t use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time.
- Don�t use default exports.
- Don�t use `form.controls.controlName`, use `form.get(�controlName�)`
- Don�t use `control.errors?.someError`, use `control.hasError(�someError�)`
- Don�t use functions in your providers, routes or declarations, export a function and then reference that function name
- @Inputs, @Outputs, View or Content Child(ren), Hostbindings, and any field you use from the template or annotate for Angular should be public


# License
 [MIT](/LICENSE)
