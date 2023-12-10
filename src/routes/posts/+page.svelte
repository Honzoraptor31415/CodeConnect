<script>
  import Nav from "$lib/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
  import "../styles.css";
  import { browser } from "$app/environment";
  if (browser) {
    document.addEventListener(
      "contextmenu",
      function (ev) {
        ev.preventDefault();
      },
      false,
    );
  }
</script>

<Nav />
<main class="non-header-main">
  <h2 id="about">Posts</h2>
  <p class="about-text">
    Here I will later add posts, everything is currentely in progress. Lorem
    ipsum dolor <span class="colored-text">sit</span> amet consectetur
    adipisicing elit. Cupiditate, qui voluptatem. Neque quo officiis fuga
    repudiandae assumenda dignissimos vel. Soluta totam maxime nemo, esse dicta
    neque molestias aspernatur nihil beatae. Lorem ipsum dolor sit amet
    <span class="colored-text">consectetur</span>, adipisicing elit. Nostrum
    sint doloribus modi recusandae asperiores nemo dolor? Facilis accusantium
    ullam exercitationem asperiores. Cum nihil ullam aliquid nostrum. Magni
    veniam quae dicta. Unde quas <span class="colored-text">nostrum</span> harum
    pariatur molestias fuga quia porro accusantium aliquam voluptates cum veniam
    voluptas neque adipisci impedit minus quisquam saepe quam suscipit deleniti debitis
    in, commodi necessitatibus magni. Magnam?
  </p>
</main>
<Footer />
