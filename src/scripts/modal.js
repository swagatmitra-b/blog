export function initModal(data) {
  const input = document.querySelector("input");
  const searchBox = document.querySelector(".searchbox");
  const modal = document.querySelector(".modal");
  let matches = [];
  let searchString = "";

  function disolve() {
    searchString = "";
    input.value = "";
    modal.classList.remove("block", "grow-forward");
    modal.classList.add("grow-back");
  }

  function populate(matches) {
    searchBox.innerHTML = "";
    const htmlArray = matches.map(
      (post) => `<div class="my-1">
        <a href="/blog/${post.slug}" class="hover:text-white">${post.title}</a>
      </div>`
    );
    for (let div of htmlArray) {
      searchBox.innerHTML += div;
    }
  }

  function runSearch() {
    return data.filter(
      (post) =>
        post.slug.includes(searchString.toLowerCase()) ||
        post.tags.includes(searchString.replace(/-/g, " ").toLowerCase())
    );
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && modal.classList.contains("block")) {
      window.location.replace(`/blog/${matches[0]?.slug}/`);
    }
    if (e.key === "Escape") disolve();
    if (e.key.length === 1) {
      modal.classList.remove("hidden", "grow-back");
      modal.classList.add("block", "grow-forward");
      input.focus();
    }
  });

  input.addEventListener("input", (e) => {
    searchString = e.target.value.replace(/\s+/g, "-");
    matches = runSearch();
    populate(matches);
  });

  document.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) disolve();
  });
}
