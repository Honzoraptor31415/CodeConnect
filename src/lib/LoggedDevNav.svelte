<script>
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
</script>

<div id="scroll-detect" class="desktop-nav-wrp">
  <nav id="desktop-nav">
    <div class="nav-content">
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
    </div>
  </nav>
</div>
