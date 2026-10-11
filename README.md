# Personal website

Source for [ryanbertschinger.com](https://ryanbertschinger.com): a single-page portfolio with a project showcase, an about section and a contact form. It is a Create React App project written in TypeScript and styled with Tailwind CSS. Contact form submissions are stored in Firebase Firestore, and the animated backgrounds are adapted from [Aceternity](https://www.aceternity.com).

## Requirements

- Node.js and npm
- A Firebase project with Firestore enabled, for the contact form

## Running locally

```bash
git clone https://github.com/ryan-bert/my-website.git
cd my-website
npm install
```

Create `.env.local` in the repository root with your Firebase web app configuration:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Then start the development server, which serves the site at `http://localhost:3000`:

```bash
npm start
```

## Building and deploying

`npm run build` writes a production build to `build/`. `npm run deploy` builds the site and publishes `build/` to the `gh-pages` branch, which GitHub Pages serves at the custom domain in `public/CNAME`.

## Licence

MIT, see [LICENSE](LICENSE).
