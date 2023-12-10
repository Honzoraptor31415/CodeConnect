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
    <input type="text" id="create-name" placeholder="Name" />
    <label for="create-email-input"
      >Email <span class="form-info">(not publicly shown)</span></label
    >
    <input type="text" id="create-email-input" placeholder="Email" />
    <label for="create-password-input">Password</label>
    <input type="password" id="create-password-input" placeholder="Password" />
    <button class="login-btn" id="login-submit">Sign up</button>
  </div>
</header>
<Footer />
