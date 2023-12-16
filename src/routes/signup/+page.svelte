<script>
  import "../styles.css";
  import { browser } from "$app/environment";
  if (browser) {
    document.title = "Create an account";
  }
</script>

<header class="form-header">
  <div class="login-form">
    <h3>Create an account</h3>
    <label for="create-name">Displayed username</label>
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
