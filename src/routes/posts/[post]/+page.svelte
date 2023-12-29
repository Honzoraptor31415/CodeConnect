<script context="module">
  import { getDatabase, ref, child, get } from "firebase/database";
  import { initializeApp } from "Firebase/app";

  async function loadData() {
    let paths = [];
    let postsArr = [];
    const dbRef = ref(getDatabase());
    const dbData = await get(child(dbRef, `cc/pages`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          paths = Object.keys(snapshot.val());
          for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
            postsArr.push(snapshot.val()[Object.keys(snapshot.val())[i]]);
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return [paths, postsArr];
  }
</script>

<script>
  import "../../styles.css";
  import GandalfLogo from "$lib/images/gandalf-macbook.jpg";
  export let data;
</script>

<svelte:head>
  <title>One post</title>
</svelte:head>

<div class="pp-wrp">
  {#await loadData() then dataPages}
    {#if dataPages[0].includes(data.post)}
      <div class="pp-post">
        <h3 class="post-heading">
          {dataPages[1][dataPages[0].indexOf(data.post)].name}
        </h3>
        <div class="post-top-info">
          <div class="post-pfp-wrp">
            <img src={GandalfLogo} alt="User's pfp" class="post-user-pfp" />
          </div>
          <p class="post-date">
            {dataPages[1][dataPages[0].indexOf(data.post)].date}
          </p>
        </div>
        <p class="post-text">
          {dataPages[1][dataPages[0].indexOf(data.post)].text}
        </p>
        <div class="post-interactions">
          <div class="post-ints-left">
            <div class="reactions">
              <button
                id="reaction-btn"
                on:click={() => {
                  if (
                    document
                      .getElementById(`reaction-btn`)
                      .classList.contains("liked-reaction-btn")
                  ) {
                    document
                      .getElementById(`reaction-btn`)
                      .classList.remove("liked-reaction-btn");
                    document.getElementById(`reaction-counter`).innerText =
                      parseInt(
                        document.getElementById(`reaction-counter`).innerText,
                      ) - 1;
                  } else {
                    document
                      .getElementById(`reaction-btn`)
                      .classList.add("liked-reaction-btn");
                    document.getElementById(`reaction-counter`).innerText =
                      parseInt(
                        document.getElementById(`reaction-counter`).innerText,
                      ) + 1;
                  }
                }}
                class="reaction-btn"
              >
                <img
                  src="../heart-icon.svg"
                  class="reaction-icon no-user-drag"
                  alt="Heart icon"
                />
                <p id="reaction-counter" class="reaction-counter">
                  {dataPages[1][dataPages[0].indexOf(data.post)].likes}
                </p>
              </button>
            </div>
            <p class="post-views">
              Seen {dataPages[1][dataPages[0].indexOf(data.post)].views}x
            </p>
          </div>
        </div>
      </div>
    {:else}
      <body>
        <main>
          <h1>This post doesn't exist.</h1>
          <a href="/posts">Back to posts</a>
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
        h1 {
          font-weight: 100;
          border: none;
        }
        main {
          text-align: center;
        }
      </style>
    {/if}
  {/await}
</div>
