<script context="module">
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { writable } from "svelte/store";
  import "../styles.css";
  import { browser } from "$app/environment";

  let form = writable({
    emailMSG: "Email",
    pwdMSG: "Password",
    logged: false,
  });

  let fmrd;
  let fmr = form.subscribe((val) => {
    fmrd = val;
  });

  if (browser) {
    document.getElementById("login-submit").addEventListener("click", () => {
      signInWithEmailAndPassword(
        auth,
        document.getElementById("email-login").value,
        document.getElementById("password-login").value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          alert(`Logged in as ${user.email}`);
        })
        .catch((error) => {
          switch (error) {
            case "auth/invalid-email":
              form.set({
                emailMSG: "Invalid email",
                pwdMSG: fmrd.pwdMSG,
                logged: false,
              });
              break;

            default:
              break;
          }
        });
    });
  }
</script>

<script>
  let formInfo = {
    emailMSG: "Email",
    pwdMSG: "Password",
    logged: false,
  };
  let formAccess = form.subscribe((val) => {
    formInfo = val;
  });
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<header class="form-header">
  <div class="login-form">
    <h3>Login</h3>
    <label for="email-login">{formInfo.emailMSG}</label>
    <input
      autocomplete="email"
      type="email"
      id="email-login"
      placeholder="Email"
    />
    <label for="password-login">{formInfo.pwdMSG}</label>
    <input
      autocomplete="current-password"
      type="password"
      id="password-login"
      placeholder="Password"
    />
    <button class="login-btn" id="login-submit">Login</button>
  </div>
</header>
