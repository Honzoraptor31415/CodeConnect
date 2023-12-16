<script context="module">
  import GandalfLogo from "$lib/images/gandalf-macbook.jpg";
  import "../styles.css";

  import { browser } from "$app/environment";
  if (browser) {
    document.title = "Posts";
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

  async function loadData() {
    let pages = [];
    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, `cc/pages`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
            pages.push(snapshot.val()[Object.keys(snapshot.val())[i]]);
          }
          pages.reverse();
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
  <div id="post-wrp" class="posts-wrp">
    {#await loadData() then dataPages}
      {#each dataPages as page}
        <div class="post">
          <h3 class="post-heading">{page.name}</h3>
          <div class="post-top-info">
            <div class="post-pfp-wrp">
              <img src={GandalfLogo} alt="User's pfp" class="post-user-pfp" />
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
                  id={`p${page.path}`}
                  on:click={() => {
                    if (
                      document
                        .getElementById(`p${page.path}`)
                        .classList.contains("liked-reaction-btn")
                    ) {
                      document
                        .getElementById(`p${page.path}`)
                        .classList.remove("liked-reaction-btn");
                      document.getElementById(`p${page.path}t`).innerText =
                        parseInt(
                          document.getElementById(`p${page.path}t`).innerText,
                        ) - 1;
                    } else {
                      document
                        .getElementById(`p${page.path}`)
                        .classList.add("liked-reaction-btn");
                      document.getElementById(`p${page.path}t`).innerText =
                        parseInt(
                          document.getElementById(`p${page.path}t`).innerText,
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
                  <p id={`p${page.path}t`} class="reaction-counter">
                    {page.likes}
                  </p>
                </button>
              </div>
              <p class="post-views">
                Seen {page.views}x
              </p>
            </div>
            <div class="post-ints-right">
              <a href={`posts/${page.path}`} class="view-post-link"
                >View post →</a
              >
            </div>
          </div>
        </div>
      {:else}
        <h4>No data available</h4>
      {/each}
    {/await}
  </div>
</main>
