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
  <div class="posts-wrp">
    <div class="post">
      <h3 class="post-heading">Post name</h3>
      <p class="post-date">10.12. 2023</p>
      <p class="post-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        velit nam maiores, numquam pussy, enim quia suscipit sus unde voluptates
        amogus omnis sapiente quam totam quaerat poopin' in repellendus
        officiis?????? Lul
      </p>
      <div class="post-interactions">
        <div class="reactions">
          <button class="reaction-btn">
            <img src="heart-icon.svg" class="reaction-icon" alt="Heart icon" />
            <p class="reaction-counter">{Math.floor(Math.random() * 1000)}</p>
          </button>
        </div>
        <p class="post-views">
          Seen {Math.floor(Math.random() * 10000)} times.
        </p>
      </div>
    </div>
    <div class="post">
      <h3 class="post-heading">Post name</h3>
      <p class="post-date">10.12. 2023</p>
      <p class="post-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        velit nam maiores, numquam pussy, enim quia suscipit sus unde voluptates
        amogus omnis sapiente quam totam quaerat poopin' in repellendus
        officiis?????? Lul
      </p>
      <div class="post-interactions">
        <div class="reactions">
          <button class="reaction-btn">
            <img src="heart-icon.svg" class="reaction-icon" alt="Heart icon" />
            <p class="reaction-counter">{Math.floor(Math.random() * 1000)}</p>
          </button>
        </div>
        <p class="post-views">
          Seen {Math.floor(Math.random() * 10000)} times.
        </p>
      </div>
    </div>
  </div>
</main>
<Footer />
