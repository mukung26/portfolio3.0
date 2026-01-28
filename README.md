
# Jerwin Cruspero Portfolio

This portfolio is built with React and Tailwind CSS, using native ES modules.

## How to deploy to GitHub Pages

1. **Create a GitHub Repository**: Create a new repo named `your-username.github.io` (for a root site) or `portfolio` (for a sub-site).
2. **Push your files**: 
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/mukung26/OnlinePortfolio.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repo on GitHub.
   - Click **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. **Static Site**: Since this app uses `esm.sh` and browser-native modules, it does not require a build step (npm build). It can be served as a static site.

### Contact Form Setup
The contact form is configured to work with your Google Apps Script URL. Ensure the script is deployed as a "Web App" and set to "Anyone" has access.

### CV Download
The CV download uses `jsPDF` from a CDN. It generates a professional PDF directly in the browser.
