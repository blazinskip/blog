<style>
  .header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;

    align-items: center;
    justify-content: space-between;
    display: flex;
    height: 4rem;

    background: #fff;
  }

  .header__title.title {
    margin-bottom: 0;
    height: 98%;
  }

  .title__link {
    display: flex;
    height: 98%;
    text-decoration: none;
    align-items: center;
  }

  .header__links-wrapper {
    height: 98%;
  }

  .header__links.links {
    flex-direction: row;
    display: flex;
    margin: 0;
    padding-left: 0;
    height: 100%;

    list-style: none;
  }

  .links__link-item {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
  }

  .links__link {
    align-items: center;
    display: flex;

    border-bottom: 2px solid transparent;
    padding: 0 1rem;
    height: 100%;

    transition: opacity 0.3s, border-bottom-color 0.3s;
    opacity: 0.8;

    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;

    text-decoration: none;
  }

  .links__link:first-of-type {
    margin-right: 1rem;
  }

  .links__link.links__link--active,
  .links__link:hover {
    border-bottom-color: currentColor;
    opacity: 1;
  }
</style>

<script>
  export let segment;
</script>

<header class="header" role="banner">
  <h1 class="header__title title">
    <a class="title__link" aria-current="{segment === undefined ? 'page' : undefined}" href=".">💻 Patryk Blazinski</a>
  </h1>

  <nav class="header__links-wrapper">
    <ul class="header__links links">
      <li class="links__link-item">
        <a
          class="{segment === 'about' ? 'links__link links__link--active' : 'links__link'}"
          aria-current="{segment === 'about' ? 'page' : undefined}"
          href="/about"
        >
          About
        </a>
      </li>

      <li class="links__link-item">
        <a
          class="{segment === 'contact' ? 'links__link links__link--active' : 'links__link'}"
          aria-current="{segment === 'contact' ? 'page' : undefined}"
          href="/contact"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
</header>
