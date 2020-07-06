<style>
  .wrapper {
    margin: 0 auto;
    width: var(--max-width);
  }

  p {
    margin: 0;
    text-align: justify;
  }

  .paragraph {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>

<script>
  const isDevelopment = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>DS Information</title>
</svelte:head>

<div class="wrapper">
  {#if isDevelopment}
    <div class="text-xxxl">Text XXXL</div>
    <div class="text-xxl">Text XXL</div>
    <div class="text-xl">Text XL</div>
    <div class="text-lg">Text LG</div>
    <div class="text-md">Text MD</div>
    <div class="text-sm">Text SM</div>
    <div class="text-xs">Text XS</div>

    <p class="paragraph">
      But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
      give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
      the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
      pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
      extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it
      is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
      To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some
      advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
      annoying consequences, or one who avoids a pain that produces no resultant pleasure?
    </p>
  {:else}
    <p>Not Development</p>
  {/if}
</div>
