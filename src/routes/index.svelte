<style lang="scss">
  .post {
    .post__date {
      margin-bottom: var(--space-xs);
    }

    .post__link {
      margin: calc(-1 * var(--space-xs));
      padding: var(--space-xs);
      display: block;

      transition: background 0.1s ease;

      &:hover {
        background: rgba(#849eff, 0.15);
      }
    }

    .post__title {
      margin: 0 0 var(--space-xs);
    }

    .post__summary {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .separator {
    border: 1px solid rgba(#333, 0.15);
    border-bottom: none;
    margin: var(--space-lg) 0;
  }
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
      <a class="post__link" href="{`/posts/${post.permalink}`}">
        <div class="post__date">{post.date}</div>

        <h2 class="post__title">{post.title}</h2>
        <p class="post__summary">{post.summary}</p>
      </a>
    </div>

    <hr class="separator" />
  {/each}
</div>
