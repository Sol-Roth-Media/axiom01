// Load and display release information from release-info.json
async function loadReleaseInfo() {
  try {
    const response = await fetch('/release-info.json');
    const releaseInfo = await response.json();
    
    // Update version display
    const versionElement = document.getElementById('release-version');
    if (versionElement) {
      versionElement.textContent = releaseInfo.version;
    }
    
    // Update release date
    const releaseDateElement = document.getElementById('release-date');
    if (releaseDateElement) {
      releaseDateElement.textContent = releaseInfo.releaseDateFormatted;
    }
    
    // Update bundle sizes
    const cssSize = document.getElementById('bundle-size-css');
    if (cssSize) {
      cssSize.textContent = releaseInfo.bundle.css.sizeGzipped;
    }
    
    const jsSize = document.getElementById('bundle-size-js');
    if (jsSize) {
      jsSize.textContent = releaseInfo.bundle.js.sizeGzipped;
    }
    
    // Update feature counts
    const componentCount = document.getElementById('component-count');
    if (componentCount) {
      componentCount.textContent = releaseInfo.features.components;
    }
    
    const tokenCount = document.getElementById('token-count');
    if (tokenCount) {
      tokenCount.textContent = releaseInfo.features.designTokens;
    }
    
    // Update npm install command
    const npmCommand = document.getElementById('npm-install-command');
    if (npmCommand) {
      npmCommand.textContent = releaseInfo.npmCommand;
    }
    
    // Update CDN link
    const cdnLink = document.getElementById('cdn-link');
    if (cdnLink) {
      cdnLink.textContent = releaseInfo.cdnLinks.css;
      cdnLink.href = releaseInfo.cdnLinks.css;
    }
    
  } catch (error) {
    console.warn('Could not load release-info.json:', error);
  }
}

// Load on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadReleaseInfo);
} else {
  loadReleaseInfo();
}
