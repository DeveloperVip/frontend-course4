// Function to remove query parameter from URL
export const removeQueryParameter = (param) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(param);
    window.history.replaceState({}, '', url);
  };
  
