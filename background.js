chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url.includes("https://mail.google.com/mail/u/0/#inbox?compose=new")) {
    const queryParameters = tab.url.split("?")[7];
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      inboxId: urlParameters.get("v"),
    });
  }
});
