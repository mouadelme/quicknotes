# QuickNotes

QuickNotes is a full-stack, cloud-native note-taking application built with React + Vite on the frontend and Express + Firestore on the backend. It supports real-time CRUD operations and is deployed to Google Cloud Platform (GCP) using Cloud Run and Cloud Build.

## Tech Stack

* Frontend: React (TypeScript) + Vite
* Backend: Express.js (Node.js)
* Database: Google Firestore (NoSQL)
* Deployment: Cloud Run + Docker + Cloud Build

## Features

* Create and delete notes
* Backend API with REST endpoints (/notes, /notes/:id)
* Notes persisted in Firestore with timestamps
* Dockerized frontend and backend for production
* Integrated with Google Cloud Build for CI/CD

## Development Setup

* Install dependencies: npm install
* Run local development server: npm run dev
* Build for production: npm run build
* Preview production build locally: npm run preview

## Live Demo

Deployed Firebase Hosting URL: https://quicknotes-frontend-1035498823137.us-central1.run.app/

