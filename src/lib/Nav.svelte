<script context="module">
  import { initializeApp } from "Firebase/app";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { getDatabase, ref, child, get } from "firebase/database";
  import { browser } from "$app/environment";
  import Logo from "$lib/images/code-connect-icon.svg";
  import GandalfLogo from "$lib/images/gandalf-macbook.jpg";

  if (browser) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        document
          .getElementById("desktop-nav")
          ?.classList.add("desktop-nav-off");
      } else {
        document
          .getElementById("desktop-nav")
          ?.classList.remove("desktop-nav-off");
      }
    });
  }

  const app = initializeApp({
    apiKey: "AIzaSyAmXYl8867i7nkXHo31bwdIMoeWb35v4I4",
    authDomain: "codeconnect-93fef.firebaseapp.com",
    databaseURL:
      "https://codeconnect-93fef-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "codeconnect-93fef",
    storageBucket: "codeconnect-93fef.appspot.com",
    messagingSenderId: "747780271550",
    appId: "1:747780271550:web:f6680e4af9f41f4d4cddef",
  });

  const auth = getAuth(app);
  let uid;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      const dbRef = ref(getDatabase());
      const data = get(child(dbRef, `cc/users/${user.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(
              `User is signed in as ${snapshot.val().username},\nEmail: ${
                user.email
              }\nAnd their role is ${snapshot.val().role}`,
            );
          } else {
            console.log("No data");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("User is signed out");
    }
  });

  const uidPromise = new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(uid);
    });
  });

  async function testLoad() {
    const newUid = await uidPromise;
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `cc/users/${newUid}`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
  }
</script>

<div id="scroll-detect" class="desktop-nav-wrp">
  <nav id="desktop-nav">
    <div class="nav-content">
      {#await testLoad() then user}
        {#if user && user.role === "dev"}
          <a href="/" class="logo-link">
            <img src={Logo} alt="CodeConnect logo" class="nav-logo" />
          </a>
          <div class="menu">
            <a class="pfp-link" href="/">
              <img
                src={GandalfLogo}
                class="profile-img"
                alt="User placeholder icon"
              />
            </a>
            <div class="menu-links">
              <a rel="external" href="/posts" class="menu-link">Posts</a>
              <button
                on:click={() => {
                  signOut(auth);
                  location = "/";
                }}
                href="/"
                id="sign-out-user"
                class="menu-btn">Sign out</button
              >
            </div>
          </div>
        {:else if user && user.role === "user"}
          <a href="/" class="logo-link">
            <img src={Logo} alt="CodeConnect logo" class="nav-logo" />
          </a>
          <div class="menu">
            <div class="menu-links">
              <a rel="external" href="/posts" class="menu-link">Posts</a>
              <a rel="external" href="/new" class="menu-btn">New post</a>
              <button
                on:click={() => {
                  signOut(auth);
                  location = "/";
                }}
                href="/"
                id="sign-out-user"
                class="menu-btn">Sign out</button
              >
            </div>
            <a class="pfp-link" href="/">
              <img
                src={GandalfLogo}
                class="profile-img"
                alt="User placeholder icon"
              />
            </a>
          </div>
        {:else}
          <a href="/" rel="external" class="logo-link">
            <img src={Logo} alt="CodeConnect logo" class="nav-logo" />
          </a>
          <div class="menu">
            <a href="/posts" rel="external" class="menu-link">Posts</a>
            <a href="/#about" class="menu-link">About</a>
            <a href="/login" rel="external" class="menu-link">Login</a>
            <a href="/signup" rel="external" class="menu-btn">Get started</a>
          </div>
        {/if}
      {/await}
    </div>
  </nav>
</div>
