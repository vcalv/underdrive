function delete_elements(selector: string) {
  for (const delEllem of document.querySelectorAll(selector)) {
    console.debug(`Removing ${delEllem}`);
    delEllem.remove();
  }
}

function filter() {
  // Try to delete bogus libby elements
  delete_elements("div.loan-button-audiobook");
  delete_elements(".Libby-Loans-CTA");

  for (let listenBtn of document.querySelectorAll(
    'a[data-format-id="audiobook-overdrive"]',
  )) {
    console.debug(`found button node ${listenBtn}`);
    let dlBtn = listenBtn.cloneNode() as HTMLAnchorElement;
    dlBtn.setAttribute(
      "class",
      "loan-button-nonkindle button radius primary downloadButton",
    );
    dlBtn.setAttribute(
      "href",
      dlBtn.href.replace("/audiobook-overdrive/", "/audiobook-mp3/"),
    );
    dlBtn.innerHTML =
      '<b>Download</b><br/><span class="dl-text">ODM file (mp3)</span>';
    dlBtn.target = "";

    let parentNode = listenBtn.parentNode;

    if (parentNode) {
      parentNode.appendChild(dlBtn);
    } else {
      console.error(
        `Button ${listenBtn} has no parent. Can't add odm download button`,
      );
    }
  }
}

window.onload = filter;
