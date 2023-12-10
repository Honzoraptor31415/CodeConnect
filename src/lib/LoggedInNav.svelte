<script>
  import { browser } from "$app/environment";

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
      <a href="/" class="logo-link">
        <img
          src="code-connect-icon.svg"
          alt="CodeConnect logo"
          class="nav-logo"
        />
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
    </div>
  </nav>
</div>
