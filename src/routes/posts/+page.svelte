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
          <button
            on:click={() => {
              if (
                document
                  .getElementById("p1")
                  .classList.contains("liked-reaction-btn")
              ) {
                document
                  .getElementById("p1")
                  .classList.remove("liked-reaction-btn");
                document.getElementById("p1t").innerText =
                  parseInt(document.getElementById("p1t").innerText) - 1;
              } else {
                document
                  .getElementById("p1")
                  .classList.add("liked-reaction-btn");
                document.getElementById("p1t").innerText =
                  parseInt(document.getElementById("p1t").innerText) + 1;
              }
            }}
            id="p1"
            class="reaction-btn"
          >
            <img
              src="heart-icon.svg"
              class="reaction-icon no-user-drag"
              alt="Heart icon"
            />
            <p id="p1t" class="reaction-counter">
              {Math.floor(Math.random() * 1000)}
            </p>
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
          <button
            on:click={() => {
              if (
                document
                  .getElementById("p2")
                  .classList.contains("liked-reaction-btn")
              ) {
                document
                  .getElementById("p2")
                  .classList.remove("liked-reaction-btn");
                document.getElementById("p2t").innerText =
                  parseInt(document.getElementById("p2t").innerText) - 1;
              } else {
                document
                  .getElementById("p2")
                  .classList.add("liked-reaction-btn");
                document.getElementById("p2t").innerText =
                  parseInt(document.getElementById("p2t").innerText) + 1;
              }
            }}
            id="p2"
            class="reaction-btn"
          >
            <img
              src="heart-icon.svg"
              class="reaction-icon no-user-drag"
              alt="Heart icon"
            />
            <p id="p2t" class="reaction-counter">
              {Math.floor(Math.random() * 1000)}
            </p>
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
