function filter() {
  for (const listenBtn of document.querySelectorAll(
    'a[data-format-id="audiobook-overdrive"]',
  )) {
    console.debug(`found button node ${listenBtn}`);
    var dlBtn = listenBtn.cloneNode();
    dlBtn.setAttribute(
      "class",
      "loan-button-nonkindle button radius primary downloadButton script-added",
    );
    dlBtn.setAttribute(
      "href",
      dlBtn
        .getAttribute("href")
        .replace("/audiobook-overdrive/", "/audiobook-mp3/"),
    );
    dlBtn.innerHTML =
      '<b>Download</b><br/><span class="dl-text">MP3 audiobook</span>';
    dlBtn.setAttribute("target", "");
    listenBtn.parentNode.appendChild(dlBtn);
  }
}

window.onload = filter;