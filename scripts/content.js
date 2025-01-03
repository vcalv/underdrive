function delete_elements(selector) {
  for (const delEllem of document.querySelectorAll(selector)) {
    console.debug(`Removing ${delEllem}`);
    delEllem.remove();
  }
}

function filter() {
  // Try to delete bogus libby elements
  delete_elements("div.loan-button-audiobook");
  delete_elements(".Libby-Loans-CTA");

  for (const listenBtn of document.querySelectorAll(
    'a[data-format-id="audiobook-overdrive"]',
  )) {
    console.debug(`found button node ${listenBtn}`);
    var dlBtn = listenBtn.cloneNode();
    dlBtn.setAttribute(
      "class",
      "loan-button-nonkindle button radius primary downloadButton",
    );
    dlBtn.setAttribute(
      "href",
      dlBtn
        .getAttribute("href")
        .replace("/audiobook-overdrive/", "/audiobook-mp3/"),
    );
    dlBtn.innerHTML =
      '<b>Download</b><br/><span class="dl-text">MP3 audiobook (odm)</span>';
    dlBtn.setAttribute("target", "");
    listenBtn.parentNode.appendChild(dlBtn);
  }
}

window.onload = filter;
