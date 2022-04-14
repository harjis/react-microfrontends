<script lang="ts">
  import Counter from './lib/Counter.svelte'
</script>

<style>
  div {
    height: 100%;
    width: 100%;
    background-color: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>

<div>
  <p>I'm Svelte content!</p>
  <Counter />
</div>

