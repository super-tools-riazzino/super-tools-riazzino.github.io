async function inject(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error("Include failed:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inject("#site-header", "/partials/header.html");
  inject("#site-footer", "/partials/footer.html");
});
