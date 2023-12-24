<script>
  import BigDivLogo from "../lib/BigDivLogo.svelte";
  import "./styles.css";
  import { browser } from "$app/environment";
  if (browser) {
    document.title = "CodeConnect - The place, where your dreams come true!";
  }
</script>

<header>
  <div class="header-left">
    <h1 class="colored-text">CodeConnect</h1>
    <div class="header-text-wrp">
      <p class="header-text">
        A place, where your dream apps come true! <a
          href="/login"
          rel="external">Log in</a
        >
        or
        <a rel="external" href="/signup">create an account</a> for
        <span class="colored-text">free.</span>
      </p>
    </div>
  </div>
  <div class="header-right">
    <BigDivLogo />
  </div>
</header>
<main>
  <h2 id="about">About</h2>
  <p class="about-text">
    Here on CodeConnect, you can get your dream apps to become true. If you're
    not already, <a rel="external" href="/login">log in</a> and
    <a rel="external" href="/new">make a post</a>, where you will describe what
    your <span class="colored-text">dream</span>
    app should do and how it should look like. Any of the developers can then view
    your post, text you via <span class="email">Email</span>,
    <span class="messenger">Messenger</span>,
    <span class="instagram">Instagram</span> or other platforms and make your dream
    app come true!
  </p>
  <p class="about-text">
    Are you a developer? <a rel="external" href="/posts">View the posts</a> from
    others and start coding!
  </p>
</main>
