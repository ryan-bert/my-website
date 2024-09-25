# My Personal Portfolio Website

## Features

- **Dynamic Layout:** Responsive design that adapts to various screen sizes.
- **Interactive Components:** Animated elements like the vortex background and project cards.
- **Project Showcase:** Detailed descriptions and images of my projects.
- **About Me:** Insight into my background, education, and interests.
- **Contact Form:** Functional form connected to Firebase Firestore for message storage.
- **Social Links:** Quick access to my GitHub, IMDb, Goodreads, and LinkedIn profiles.

## Demo

You can view the live website [here](https://ryanbertschinger.com).

## Installation & Usage

To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/ryan-bert/my-website.git
cd my-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase configuration:
- Create a .env.local file in the root directory.
- Add your Firebase configuration variables:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Start the developement server:
```bash
npm start
```
The website will be available at `http://localhost:3000`.

## Technologies Used

- **React: Front**-end library for building user interfaces.
- **TypeScript: Adds** static typing to JavaScript, improving developer experience.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Firebase: Backend**-as-a-service for handling the contact form submissions.
- **Animated Components:** Imported from Aceternity, including the vortex background and wavy animations.

© 2024 My Portfolio | Built with ❤️ by Ryan