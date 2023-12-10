<script>
  import Nav from "$lib/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
  import BigDivLogo from "../../lib/BigDivLogo.svelte";
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
    document.title = "Login";
  }
</script>

<header class="form-header">
  <Nav />
  <div class="login-form">
    <h3>Login</h3>
    <label for="email-input">Email</label>
    <input type="text" id="email-input" placeholder="Email" />
    <label for="password-input">Password</label>
    <input type="password" id="password-input" placeholder="Password" />
    <button class="login-btn" id="login-submit">Login</button>
  </div>
</header>
<Footer />
