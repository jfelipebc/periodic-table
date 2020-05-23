<script>
  import PeriodicElement from "./PeriodicElement.svelte";
  import { data } from "../fetchData";
</script>

<style>
  .periodic-table {
    width: 900px;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-gap: 5px;
  }
</style>

<div class="periodic-table">
  {#each $data as element}
    <PeriodicElement {element} />
  {/each}
</div>
