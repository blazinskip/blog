<style lang="scss">
  .header-wrapper {
    position: -webkit-sticky;
    position: sticky;
    top: 0;

    background: #fff;
  }

  .header {
    align-items: center;
    justify-content: space-between;
    display: flex;

    margin: var(--space-lg) auto var(--space-xl) auto;
    max-width: var(--max-width);
    padding: var(--space-md) 0;

    .header__title {
      margin-bottom: 0;
      font-size: var(--text-md);
    }

    .header__links {
      flex-direction: row;
      display: flex;
      margin: 0;
      padding-left: 0;
      height: 100%;

      list-style: none;
    }

    .header__links-item {
      align-items: center;
      justify-content: center;
      display: flex;
      height: 100%;
    }

    .header__links-link {
      align-items: center;
      display: flex;

      height: 100%;
      padding: var(--space-md);

      transition: opacity 0.3s, border-bottom-color 0.3s;
      opacity: 0.8;

      font-size: var(--text-md);
      font-weight: 500;

      &:first-of-type {
        margin-right: var(--space-md);
      }

      &--active,
      &:hover {
        opacity: 1;
      }
    }
  }
</style>

<script>
  export let segment;
</script>

<div class="header-wrapper">
  <header class="header" role="banner">
    <h1 class="header__title">
      <a class="header__title-link" aria-current="{segment === undefined ? 'page' : undefined}" href=".">
        Patryk Blazinski
      </a>
    </h1>

    <nav>
      <ul class="header__links">
        <li class="header__links-item">
          <a
            class="{segment === 'about' ? 'header__links-link header__links-link--active' : 'header__links-link'}"
            aria-current="{segment === 'about' ? 'page' : undefined}"
            href="/about"
          >
            About
          </a>
        </li>

        <li class="header__links-item">
          <a
            style="margin-right: 0"
            class="{segment === 'contact' ? 'header__links-link header__links-link--active' : 'header__links-link'}"
            aria-current="{segment === 'contact' ? 'page' : undefined}"
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>

</div>
