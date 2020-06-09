<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<script>
  import { posts } from '../posts';
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>My weblog</h1>

{#each posts as post}
  <article>
    <!-- link article to /posts/$permalink -->
    <a href="{`/posts/${post.permalink}`}">
      <h2>{post.title}</h2>
      <span>{post.readInformation.humanized}</span>
      <p>{post.summary}</p>
    </a>
  </article>
{/each}
