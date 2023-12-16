<script>
  import "../styles.css";
  import { browser } from "$app/environment";
  if (browser) {
    document.title = "Login";
  }
</script>

<header class="form-header">
  <div class="login-form">
    <h3>Login</h3>
    <label for="email-input">Email</label>
    <input type="text" id="email-input" placeholder="Email" />
    <label for="password-input">Password</label>
    <input type="password" id="password-input" placeholder="Password" />
    <button class="login-btn" id="login-submit">Login</button>
  </div>
</header>
