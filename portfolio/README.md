# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Deploying to Vercel

To deploy this Angular project to [Vercel](https://vercel.com/):

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Build the project:**
   ```bash
   npm run build
   ```
   This will output the production build to the `dist/portfolio` directory.
3. **Configure Vercel:**
   - Ensure the `vercel.json` file exists in the project root (already included).
   - The build output directory is set to `dist/portfolio`.
   - SPA routing is handled by rewriting all routes to `index.html`.
4. **Deploy:**
   - Push your code to a Git repository (GitHub, GitLab, Bitbucket).
   - Import the repository into Vercel and follow the prompts.
   - Set the build command to `npm run build` and the output directory to `dist/portfolio` if prompted.

Your Angular app will be deployed as a static site!
