<script>
  import Nav from "$lib/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
  import "../styles.css";
  import { browser } from "$app/environment";
  if (browser) {
    document.addEventListener(
      "contextmenu",
      function (ev) {
        ev.preventDefault();
      },
      false,
    );
  }
</script>

<Nav />
<main>
  <h2 id="about">About</h2>
  <p class="about-text">
    Here on CodeConnect, you can get your dream apps to become true. If you're
    not already, <a href="/login">log in</a> and <a href="/new">make a post</a>,
    where you will describe what your <span class="colored-text">dream</span>
    app should do and how it should look like. Any of the developers can then view
    your post, text you via <span class="email">Email</span>,
    <span class="messenger">Messenger</span>,
    <span class="instagram">Instagram</span> or other platforms and make your dream
    app come true!
  </p>
  <p class="about-text">
    Are you a developer? <a href="/posts">View the posts</a> from others and start
    coding!
  </p>
</main>
<Footer />
