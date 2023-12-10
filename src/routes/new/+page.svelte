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
    document.title = "Create an account";
  }
</script>

<header class="form-header">
  <Nav />
  <div class="login-form">
    <h3>Create new post</h3>
    <label for="create-post-name">Post name</label>
    <input type="text" id="create-post-name" placeholder="Name" />
    <button class="login-btn" id="login-submit">Post</button>
  </div>
</header>
<Footer />
