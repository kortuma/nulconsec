async function getOuterIframeClient(webviewId) {
  // Assuming 'webviewId' is the ID of the iframe element
  const iframe = document.getElementById(webviewId);
  if (!iframe) {
    throw new Error('Iframe not found');
  }

  // Post a message to the iframe and wait for a response
  const message = { type: 'getClient' };
  const response = await new Promise((resolve, reject) => {
    const messageHandler = (event) => {
      if (event.origin !== 'expected origin') {
        // Security check: Ensure the message is from the expected origin
        return;
      }
      if (event.data.type === 'client') {
        resolve(event.data.client);
      }
    };

    window.addEventListener('message', messageHandler);

    // Remove the event listener when the promise is settled
    const cleanup = () => {
      window.removeEventListener('message', messageHandler);
    };

    iframe.contentWindow.postMessage(message, '*'); // You should specify the target origin instead of '*'

    // Set a timeout for the response
    const timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error('Response timed out'));
    }, 5000); // 5 seconds timeout

    // Cleanup on resolution or rejection
    promise.then(cleanup).catch(cleanup);
  });

  return response;
}
