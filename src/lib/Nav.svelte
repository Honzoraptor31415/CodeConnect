<script context="module">
  import { initializeApp } from "Firebase/app";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(`User is signed in as ${user.email}`);
      const uid = user.uid;
    } else {
      console.log("User is signed out");
    }
  });
</script>

<script>
  import { browser } from "$app/environment";
  import Logo from "$lib/images/code-connect-icon.svg";
  import GandalfLogo from "$lib/images/gandalf-macbook.jpg";
  export let type;

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
</script>

<div id="scroll-detect" class="desktop-nav-wrp">
  <nav id="desktop-nav">
    <div class="nav-content">
      {#if type === "default"}
        <a href="/" rel="external" class="logo-link">
          <img src={Logo} alt="CodeConnect logo" class="nav-logo" />
        </a>
        <div class="menu">
          <a href="/posts" rel="external" class="menu-link">Posts</a>
          <a href="/#about" class="menu-link">About</a>
          <a href="/login" rel="external" class="menu-link">Login</a>
          <a href="/signup" rel="external" class="menu-btn">Get started</a>
        </div>
      {:else if type === "dev"}
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
            <a href="/posts" class="menu-link">Posts</a>
            <a href="/" id="sign-out-user" class="menu-btn">Sign out</a>
          </div>
        </div>
      {:else if type === "user"}
        <a href="/" class="logo-link">
          <img src={Logo} alt="CodeConnect logo" class="nav-logo" />
        </a>
        <div class="menu">
          <div class="menu-links">
            <a href="/posts" class="menu-link">Posts</a>
            <a href="/new" class="menu-btn">New post</a>
            <a href="/" id="sign-out-user" class="menu-btn">Sign out</a>
          </div>
          <a class="pfp-link" href="/">
            <img
              src="user-icon.svg"
              class="profile-img"
              alt="User placeholder icon"
            />
          </a>
        </div>
      {/if}
    </div>
  </nav>
</div>
