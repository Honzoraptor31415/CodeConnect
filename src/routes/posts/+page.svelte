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
    <a href="/posts/postOne" class="post-link">
      <div class="post">
        <h3 class="post-heading">Post name</h3>
        <p class="post-date">10.12. 2023</p>
        <p class="post-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          velit nam maiores, numquam pussy, enim quia suscipit sus unde
          voluptates amogus omnis sapiente quam totam quaerat poopin' in
          repellendus officiis?????? Lul
        </p>
        <div class="post-interactions">
          <div class="reactions">
            <button class="reaction-btn"> </button>
            <div class="reactions-line"></div>
            <button class="reaction-btn"> </button>
          </div>
          <p class="post-views">Post was seen 69 times.</p>
        </div>
      </div>
    </a>
    <a href="/posts/postOne" class="post-link">
      <div class="post">
        <h3 class="post-heading">Post name</h3>
        <p class="post-date">10.12. 2023</p>
        <p class="post-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          velit nam maiores, numquam pussy, enim quia suscipit sus unde
          voluptates amogus omnis sapiente quam totam quaerat poopin' in
          repellendus officiis?????? Lul
        </p>
        <div class="post-interactions">
          <div class="reactions">
            <button class="reaction-btn"> </button>
            <div class="reactions-line"></div>
            <button class="reaction-btn"> </button>
          </div>
          <p class="post-views">Post was seen 69 times.</p>
        </div>
      </div>
    </a>
    <a href="/posts/postOne" class="post-link">
      <div class="post">
        <h3 class="post-heading">Post name</h3>
        <p class="post-date">10.12. 2023</p>
        <p class="post-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          velit nam maiores, numquam pussy, enim quia suscipit sus unde
          voluptates amogus omnis sapiente quam totam quaerat poopin' in
          repellendus officiis?????? Lul
        </p>
        <div class="post-interactions">
          <div class="reactions">
            <button class="reaction-btn"></button>
            <div class="reactions-line"></div>
            <button class="reaction-btn"> </button>
          </div>
          <p class="post-views">Post was seen 69 times.</p>
        </div>
      </div>
    </a>
    <a href="/posts/postOne" class="post-link">
      <div class="post">
        <h3 class="post-heading">Post name</h3>
        <p class="post-date">10.12. 2023</p>
        <p class="post-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          velit nam maiores, numquam pussy, enim quia suscipit sus unde
          voluptates amogus omnis sapiente quam totam quaerat poopin' in
          repellendus officiis?????? Lul
        </p>
        <div class="post-interactions">
          <div class="reactions">
            <button class="reaction-btn"> </button>
            <div class="reactions-line"></div>
            <button class="reaction-btn"> </button>
          </div>
          <p class="post-views">Post was seen 69 times.</p>
        </div>
      </div>
    </a>
  </div>
</main>
<Footer />
