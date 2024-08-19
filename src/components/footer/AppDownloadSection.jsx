export const AppDownloadSection = () => {
    return (
      <div className="flex space-x-4">
        <a href="https://play.google.com/store/apps/details?id=com.quizizz_mobile" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-google-play-badge.png" alt="Google Play" className="w-32 h-auto" />
        </a>
        <a href="https://apps.apple.com/us/app/quizizz/id1160249042" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-app-store-badge.png" alt="App Store" className="w-32 h-auto" />
        </a>
      </div>
    );
  };
  