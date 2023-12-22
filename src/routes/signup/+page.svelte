<script context="module">
  import { initializeApp } from "Firebase/app";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

  if (browser) {
    document.getElementById("submit").addEventListener("click", () => {
      createUserWithEmailAndPassword(
        auth,
        document.getElementById("email").value,
        document.getElementById("password").value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          alert(`Singed up succesfully. Logged in as ${user}`);
          console.log(user.email);
        })
        .catch((error) => {
          alert(`Error while signing up: ${error}`);
        });
    });
  }
</script>

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
    <label for="email"
      >Email <span class="form-info">(not publicly shown)</span></label
    >
    <input type="email" id="email" placeholder="Email" />
    <label for="password">Password</label>
    <input type="password" id="password" placeholder="Password" />
    <button class="login-btn" id="submit">Sign up</button>
  </div>
</header>
