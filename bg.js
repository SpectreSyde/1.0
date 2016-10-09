chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'app.html',
    {
      id: 'main',
      bounds: {width: 800, height: 600}
    }
  );
});
