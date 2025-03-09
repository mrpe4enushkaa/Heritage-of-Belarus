# Interactive Map of Belarusian Landmarks

## Description
This project is an interactive map of Belarusian landmarks. It is built using **Node.js**, **Express.js**, **EJS**, **GSAP**, and **JSON** for data storage. The map allows users to explore various locations, view information about landmarks, and experience animated effects.

## Project Structure
```
├── node_modules
├── views
│   ├── blocks
│   │   ├── footer.ejs
│   │   ├── header.ejs
│   ├── files
│   │   ├── css (project styles)
│   │   │   ├── about.css
│   │   │   ├── fonts.css
│   │   │   ├── footer.css
│   │   │   ├── header.css
│   │   │   ├── index.css
│   │   │   ├── locations.css
│   │   │   ├── map.css
│   │   ├── img (images)
│   │   ├── js (scripts)
│   │   │   ├── ScrollTrigger.min.js (GSAP library)
│   │   │   ├── about.js (logic for the "About" page)
│   │   │   ├── gsap.min.js (GSAP library)
│   │   │   ├── index.js (main script)
│   │   │   ├── locations.js (logic for handling locations)
│   │   │   ├── map.js (map-related scripts)
│   │   │   ├── staticAnimation.js (animations)
│   │   ├── json (data storage)
│   │   │   ├── data.json (main location data)
│   │   │   ├── index_data.json (homepage data)
│   ├── about.ejs ("About" page)
│   ├── index.ejs (homepage)
│   ├── locations.ejs (locations page)
│   ├── map.ejs (map page)
├── .gitattributes
├── README.md (documentation)
├── package-lock.json
├── package.json (project dependencies)
├── server.js (server file)
```

## Installation and Setup
### 1. Clone the repository
```sh
git clone <REPO_URL>
cd <project_folder>
```
### 2. Install dependencies
```sh
npm install
```
### 3. Start the server
```sh
node server.js
```
The server will be available at `http://localhost:3000` (default port).

## Technologies Used
- **Node.js** – backend
- **Express.js** – routing and request handling
- **EJS** – templating engine for dynamic pages
- **GSAP** – animations
- **JSON** – data storage for locations

## Contact
If you have any questions or suggestions, feel free to create an **issue** or a **pull request**. I hope you find this project useful!

---

⭐ If you like this project, don't forget to star it on GitHub! ⭐

