<script context="module">
  import { getDatabase, ref, child, get } from "firebase/database";
  import { initializeApp } from "Firebase/app";
  initializeApp({
    apiKey: "AIzaSyAmXYl8867i7nkXHo31bwdIMoeWb35v4I4",
    authDomain: "codeconnect-93fef.firebaseapp.com",
    databaseURL:
      "https://codeconnect-93fef-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "codeconnect-93fef",
    storageBucket: "codeconnect-93fef.appspot.com",
    messagingSenderId: "747780271550",
    appId: "1:747780271550:web:f6680e4af9f41f4d4cddef",
  });

  let paths = [];

  async function loadData() {
    const dbRef = ref(getDatabase());
    const dbData = await get(child(dbRef, `cc/pages`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          paths = Object.keys(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return paths;
  }
</script>

<script>
  import "../../styles.css";
  export let data;
</script>

<h1>You're on {data.post}</h1>
{#await loadData() then dataPages}
  {#if dataPages.includes(data.post)}
    <h1>Exists in da DB</h1>
  {:else}
    <h1>Doesn't exist in da DB</h1>
  {/if}
  {#each dataPages as page}
    <p>{page}</p>
  {/each}
  <p>{dataPages}</p>
  <p>{data.post}</p>
{/await}

<!-- <script context="module">
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

  import { getDatabase, ref, child, get } from "firebase/database";
  import { initializeApp } from "Firebase/app";
  initializeApp({
    apiKey: "AIzaSyAmXYl8867i7nkXHo31bwdIMoeWb35v4I4",
    authDomain: "codeconnect-93fef.firebaseapp.com",
    databaseURL:
      "https://codeconnect-93fef-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "codeconnect-93fef",
    storageBucket: "codeconnect-93fef.appspot.com",
    messagingSenderId: "747780271550",
    appId: "1:747780271550:web:f6680e4af9f41f4d4cddef",
  });

  let pages = [];

  async function loadData() {
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, `cc/pages`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
            pages.push(snapshot.val()[Object.keys(snapshot.val())[i]]);
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return pages;
  }
</script>

<main class="non-header-main">
  <h2>Posts</h2>
  <div class="posts-wrp">
    {#await loadData() then dataPages}
      {#each dataPages as page}
        <div class="post">
          <h3 class="post-heading">{page.name}</h3>
          <div class="post-top-info">
            <div class="post-pfp-wrp">
              <img
                src="gandalf-macbook.jpg"
                alt="User's pfp"
                class="post-user-pfp"
              />
            </div>
            <p class="post-date">{page.date}</p>
          </div>
          <p class="post-text">
            {#if page.text.length <= 500}
              {page.text}
            {:else}
              {@html `${page.text.slice(
                0,
                496,
              )} <span class="post-mtc">...</span>`}
            {/if}
          </p>
          <div class="post-interactions">
            <div class="post-ints-left">
              <div class="reactions">
                <button
                  id={`p${pages.indexOf(page)}`}
                  on:click={() => {
                    if (
                      document
                        .getElementById(`p${pages.indexOf(page)}`)
                        .classList.contains("liked-reaction-btn")
                    ) {
                      document
                        .getElementById(`p${pages.indexOf(page)}`)
                        .classList.remove("liked-reaction-btn");
                      document.getElementById(
                        `p${pages.indexOf(page)}t`,
                      ).innerText =
                        parseInt(
                          document.getElementById(`p${pages.indexOf(page)}t`)
                            .innerText,
                        ) - 1;
                    } else {
                      document
                        .getElementById(`p${pages.indexOf(page)}`)
                        .classList.add("liked-reaction-btn");
                      document.getElementById(
                        `p${pages.indexOf(page)}t`,
                      ).innerText =
                        parseInt(
                          document.getElementById(`p${pages.indexOf(page)}t`)
                            .innerText,
                        ) + 1;
                    }
                  }}
                  class="reaction-btn"
                >
                  <img
                    src="heart-icon.svg"
                    class="reaction-icon no-user-drag"
                    alt="Heart icon"
                  />
                  <p id={`p${pages.indexOf(page)}t`} class="reaction-counter">
                    {page.likes}
                  </p>
                </button>
              </div>
              <p class="post-views">
                Seen {page.views}
              </p>
            </div>
            <div class="post-ints-right">
              <a href="#something" class="view-post-link">View post →</a>
            </div>
          </div>
        </div>
      {:else}
        <h4>No data available</h4>
      {/each}
    {/await}
  </div>
</main> -->
