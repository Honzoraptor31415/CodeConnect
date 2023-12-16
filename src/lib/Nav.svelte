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
        <a href="/" class="logo-link">
          <img src={Logo} alt="CodeConnect logo" class="nav-logo" />
        </a>
        <div class="menu">
          <a href="/posts" class="menu-link">Posts</a>
          <a href="/#about" class="menu-link">About</a>
          <a href="/login" class="menu-link">Login</a>
          <a href="/signup" class="menu-btn">Get started</a>
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
