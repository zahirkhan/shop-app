# Z Shop — React + Node.js Shopping App

Z Shop is a demo e-commerce front-end built with React (Vite) and a Node.js-based build/runtime. It showcases product browsing, categories, a shopping cart, checkout flow, admin pages, and theme support.

**Tech stack:**
- **Frontend:** React + Vite, React Router, React-Bootstrap
- **Styling:** CSS variables (light/dark themes), Bootstrap
- **Icons:** react-icons
- **Runtime / Build:** Node.js (used for building and serving the static site)

## Features
- **Store:** Product grid, search, filters, categories
- **Cart:** Sidebar cart + full cart page, quantity controls
- **Pages:** About, Contact, Terms, Privacy Policy, Admin, Checkout
- **Theme:** Light / Dark theme with persistent preference
- **Docker:** Multi-stage Dockerfile + docker-compose for production

## Quick start (development)
- **Install:**
	- npm install
- **Run dev server:**
	- npm run dev
- **Build production bundle:**
	- npm run build
- **Preview production build locally:**
	- npm run preview

## NPM scripts
- **dev:** Start Vite dev server (`npm run dev`)
- **build:** Build production assets (`npm run build`)
- **preview:** Serve build locally (`npm run preview`)
- **lint:** Run ESLint across the project (`npm run lint`)

## Docker
- **Build image:** `docker build -t zshop:latest .`
- **Run container:** `docker run -p 3000:3000 zshop:latest`
- **Compose:** `docker-compose up -d`

The repository includes a multi-stage `Dockerfile`, `.dockerignore`, `docker-compose.yml`, and `DOCKER_README.md` with more details.

## Configuration
- No special environment variables are required for the demo. If you add real APIs, provide `.env` files and avoid committing secrets.

## Contributing
- Feel free to open issues or create PRs for features, bug fixes, or style improvements.

## License
- This project is provided as-is for demo/learning purposes.
