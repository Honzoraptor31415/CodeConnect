<script>
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
    document.title = "Create a new post";
  }
</script>
