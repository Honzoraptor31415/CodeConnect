<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Error</title>
</svelte:head>

<body>
  <main>
    <h1>Error: {$page.error.message}</h1>
    <h2>{$page.status}</h2>
  </main>
</body>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: rgb(40, 40, 40);
    margin: 0;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
    color: rgba(255, 255, 255, 0.736);
  }
  h1,
  h2 {
    font-weight: 100;
  }
  h2 {
    color: rgba(255, 255, 255, 0.411);
  }
  main {
    text-align: center;
  }
</style>
