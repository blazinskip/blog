<style>

</style>

<script>
  import { posts } from '../posts';
</script>

<svelte:head>
  <title>Patryk Blazinski</title>
</svelte:head>

<div class="container">
  {#each posts as post}
    <div class="post">
      <!-- link article to /posts/$permalink -->
      <a href="{`/posts/${post.permalink}`}">
        <span>{post.date}</span>
        <h2>{post.title}</h2>
        <span>{post.readInformation.humanized}</span>
        <p>{post.summary}</p>
      </a>
    </div>
  {/each}
</div>
