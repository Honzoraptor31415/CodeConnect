<script>
  export let data;
  let pages;
</script>

<!-- <body>
  Loading
  {#await pages}
    <main>
      {#if pages && pages.includes(data.post)}
        <h1>You are currentely in {data.post}</h1>
      {:else}
        <h1>This page doesn't exist</h1>
      {/if}
    </main>
  {/await}
</body> -->

<body>
  <main>
    <h1>You are currentely in {data.post}</h1>
  </main>
</body>

<!-- <h1>You are currentely in {data.post}</h1> -->

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
  h1 {
    font-weight: 100;
  }
  main {
    text-align: center;
  }
</style>
