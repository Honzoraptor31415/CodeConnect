<script context="module">
  import { initializeApp } from "Firebase/app";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { getDatabase, ref, set } from "firebase/database";
  import { browser } from "$app/environment";
  import { writable } from "svelte/store";
  import "../styles.css";
  if (browser) {
    document.title = "Create an account";
    addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        document.getElementById("submit").click();
      }
    });
  }

  const firebaseConfig = {
    apiKey: "AIzaSyAmXYl8867i7nkXHo31bwdIMoeWb35v4I4",
    authDomain: "codeconnect-93fef.firebaseapp.com",
    databaseURL:
      "https://codeconnect-93fef-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "codeconnect-93fef",
    storageBucket: "codeconnect-93fef.appspot.com",
    messagingSenderId: "747780271550",
    appId: "1:747780271550:web:f6680e4af9f41f4d4cddef",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase();

  let form = writable({
    logged: false,
    usernameMSG: "Displayed username",
    emailMSG: "Email ",
    pwdMSG: "Password",
  });
  let rf2d;
  let rf2 = form.subscribe((val) => {
    rf2d = val;
  });

  if (browser) {
    document.getElementById("submit").addEventListener("click", () => {
      if (
        document.getElementById("username").value !== "" &&
        document.getElementById("email").value !== "" &&
        document.getElementById("password").value !== ""
      ) {
        createUserWithEmailAndPassword(
          auth,
          document.getElementById("email").value,
          document.getElementById("password").value,
        )
          .then((userCredential) => {
            const user = userCredential.user;
            form.set({
              logged: true,
              emailMSG: rf2d.emailMSG,
              pwdMSG: rf2d.pwdMSG,
              usernameMSG: "User created succesfully!",
            });
            setTimeout(() => {
              location = "/posts";
            }, 400);
            const db = getDatabase();
            set(ref(db, `cc/users/${user.uid}`), {
              username: document.getElementById("username").value,
              role: document.getElementById("role").value,
            });
          })
          .catch((error) => {
            console.log(error, error.code, error.message);
            switch (error.code) {
              case "auth/weak-password":
                form.set({
                  logged: false,
                  emailMSG: rf2d.emailMSG,
                  pwdMSG: "Weak password",
                  usernameMSG: rf2d.usernameMSG,
                });
                break;
              case "auth/email-already-in-use":
                form.set({
                  logged: false,
                  emailMSG: "Email is already used",
                  pwdMSG: rf2d.pwdMSG,
                  usernameMSG: rf2d.usernameMSG,
                });

              case "auth/id-token-expired":
                form.set({
                  logged: false,
                  emailMSG: rf2d.emailMSG,
                  pwdMSG: rf2d.pwdMSG,
                  usernameMSG: "Your ID is expired",
                });

              case "auth/internal-error":
                form.set({
                  logged: false,
                  emailMSG: rf2d.emailMSG,
                  pwdMSG: rf2d.pwdMSG,
                  usernameMSG: "Internal error",
                });

              case "auth/invalid-argument":
                form.set({
                  logged: false,
                  emailMSG: rf2d.emailMSG,
                  pwdMSG: rf2d.pwdMSG,
                  usernameMSG: "Invalid arguments were passed",
                });

              case "auth/invalid-email":
                form.set({
                  logged: false,
                  emailMSG: "Invalid email",
                  pwdMSG: rf2d.pwdMSG,
                  usernameMSG: rf2d.usernameMSG,
                });

              case "auth/maximum-user-count-exceeded":
                form.set({
                  logged: false,
                  emailMSG: rf2d.emailMSG,
                  pwdMSG: rf2d.pwdMSG,
                  usernameMSG: "Too many users",
                });

              case "auth/session-cookie-expired":
                form.set({
                  logged: false,
                  emailMSG: rf2d.emailMSG,
                  pwdMSG: rf2d.pwdMSG,
                  usernameMSG: "The session cookie expired",
                });

              case "auth/too-many-requests":
                form.set({
                  logged: false,
                  emailMSG: rf2d.emailMSG,
                  pwdMSG: rf2d.pwdMSG,
                  usernameMSG: "Too many requests",
                });

              default:
                console.log("Error handling default");
                break;
            }
          });
      }
    });
  }
</script>

<script>
  let formInfo = {
    logged: false,
    usernameMSG: "Displayed username",
    emailMSG: "Email ",
    pwdMSG: "Password",
  };

  let formAccess = form.subscribe((val) => {
    formInfo = val;
  });
</script>

<header class="form-header">
  <div class="login-form">
    {#if formInfo.logged === true}
      <h3 class="success">Signed up succesfully!</h3>
    {:else}
      <h3>Sign up</h3>
    {/if}
    {#if formInfo.usernameMSG === "Displayed username"}
      <label for="username">{formInfo.usernameMSG}</label>
    {:else}
      <label for="username" class="form-error">{formInfo.usernameMSG}</label>
    {/if}
    <input maxlength="40" type="text" id="username" placeholder="Name" />
    {#if formInfo.emailMSG === "Email "}
      <label for="email"
        >{formInfo.emailMSG}<span class="form-info">(not publicly shown)</span
        ></label
      >
    {:else}
      <label for="email" class="form-error"
        >{formInfo.emailMSG}<span class="form-info">(not publicly shown)</span
        ></label
      >
    {/if}
    <input maxlength="40" type="email" id="email" placeholder="Email" />
    <label for="role">Role</label>
    <select id="role">
      <option value="dev">Developer</option>
      <option value="user">User</option>
    </select>
    {#if formInfo.pwdMSG === "Password"}
      <label for="password">{formInfo.pwdMSG}</label>
    {:else}
      <label for="password" class="form-error">{formInfo.pwdMSG}</label>
    {/if}
    <input type="password" id="password" placeholder="Password" />
    <button class="login-btn" id="submit">Sign up</button>
  </div>
</header>
