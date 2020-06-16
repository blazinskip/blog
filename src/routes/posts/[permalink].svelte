<script context="module">
  // import the logic for finding a post based on permalink
  import { findPost } from "../../posts";

  // sapper calls this to load our data
  export function preload(page) {
    // find the post based on the permalink param
    const post = findPost(page.params.permalink);

    // return a list of props
    return { post };
  }
</script>

<style>
  .post__landing-icon {
    width: 100%;
  }
</style>

<script>
  // this prop is filled from the result of the `preload()`
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>


<div class="post">
  <img class="post__landing-icon" src="images/{post.permalink}/landing.jpg" alt="blog landing"/>
    {@html post.html}
</div>

