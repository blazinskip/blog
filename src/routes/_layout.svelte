<style lang="scss" global>
  @import './src/style/main';

  .blog {
    position: relative;
  }

  .blog__content {
  }
</style>

<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<div class="blog">
  <Nav {segment} />

  <main class="blog__content">
    <slot />
  </main>
</div>
