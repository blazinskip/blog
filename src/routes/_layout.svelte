<style>
  .blog {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
    padding: 2.625rem 1.3125rem;
  }

  main {
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<div class="blog">
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>
