<script>
  export let segment;
</script>


<header role="banner">
  💻 Patric Blazinski

  <nav>
    <ul>
      <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
      <li><a aria-current="{segment === undefined ? 'page' : undefined}" href="/about">About</a></li>
      <li><a aria-current="{segment === undefined ? 'page' : undefined}" href="/contact">contact</a></li>
    </ul>
  </nav>
</header>

