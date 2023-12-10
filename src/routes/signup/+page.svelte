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

<header class="form-header">
  <Nav />
  <div class="login-form">
    <h3>Create an account</h3>
    <input type="text" id="create-name" placeholder="Name" />
    <input type="text" id="create-email-input" placeholder="Email" />
    <input type="password" id="create-password-input" placeholder="Password" />
    <button class="login-btn" id="login-submit">Sign up</button>
  </div>
</header>
<Footer />
