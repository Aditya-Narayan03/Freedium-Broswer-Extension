chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "freediumHelper",
    title: "Open with Freedium",
    contexts: ["all"],
    documentUrlPatterns: ["*://medium.com/*"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "freediumHelper") {
    if (tab.url && tab.url.includes("medium.com")) {
      const freediumUrl = `https://freedium.cfd/${tab.url}`;
      chrome.tabs.create({ url: freediumUrl });
    } else {
      alert("This extension works only on Medium pages.");
    }
  }
});
