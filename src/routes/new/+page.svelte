<script>
  import "../styles.css";
</script>

<svelte:head>
  <title>Create a new post</title>
</svelte:head>

<header class="form-header">
  <div class="posts-form">
    <h3>Create new post</h3>
    <label for="create-post-name">Post name</label>
    <input type="text" id="create-post-name" placeholder="Post name" />
    <label for="create-post-text">Post text</label>
    <textarea id="create-post-text" placeholder="Your app's description"
    ></textarea>
    <div class="form-btn-right-wrp">
      <button class="login-btn" id="login-submit">Create post</button>
    </div>
  </div>
</header>
