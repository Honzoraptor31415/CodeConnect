<script>
  import { browser } from "$app/environment";
  import Logo from "$lib/images/code-connect-icon.svg";

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
        <a href="/posts" class="menu-link">Posts</a>
        <a href="/#about" class="menu-link">About</a>
        <a href="/login" class="menu-link">Login</a>
        <a href="/signup" class="menu-btn">Get started</a>
      </div>
    </div>
  </nav>
</div>
