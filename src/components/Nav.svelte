<script>
  export let segment;
</script>

<nav>
  This is nav
  <ul>
    <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
  </ul>
</nav>
