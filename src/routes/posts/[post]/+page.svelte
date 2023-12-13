<script context="module" preload>
  let pages;

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
  const dbRef = ref(getDatabase());

  get(child(dbRef, `cc/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val().pages);
        pages = snapshot.val().pages;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  console.log(pages);
</script>

<script>
  export let data;
</script>

<body>
  <h1>You're currentely in {data.post}</h1>

  <h2>{pages}</h2>
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
  }
</style>
