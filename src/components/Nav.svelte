<script>
  export let segment;
</script>

<style>
  .header {
    align-items: center;
    justify-content: space-between;
    display: flex;
    height: 4rem;
  }

  .header__title.title {
    margin-bottom: 0;
    height: 98%;
  }

  .title__link {
    display: flex;
    height: 98%;
    padding: 0 1rem;
    text-decoration: none;
    align-items: center;
  }

  .header__links.links {
    flex-direction: row;
    display: flex;
    padding-left: 0;
    list-style: none;
  }
</style>


<header class="header" role="banner">
  <h1 class="header__title title">
    <a class="title__link" aria-current="{segment === undefined ? 'page' : undefined}" href=".">💻 Patryk Blazinski</a>
  </h1>


  <nav>
    <ul class="header__links links">
      <li><a aria-current="{segment === undefined ? 'page' : undefined}" href="/about">About</a></li>
      <li><a aria-current="{segment === undefined ? 'page' : undefined}" href="/contact">contact</a></li>
    </ul>
  </nav>
</header>

