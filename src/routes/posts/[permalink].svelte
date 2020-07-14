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

<style lang="scss">
  .post {
    grid-gap: 3rem;
    grid-template-columns: 3fr 1fr;
    display: grid;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .post__content {

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
  <article class="post__content">
    <h2>{post.title}</h2>
      {@html post.html}
  </article>

  <aside>
    <div>{post.date}</div>
    <div>{post.readInformation.humanized}</div>
  </aside>
</div>

