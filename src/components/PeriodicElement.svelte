<script>
  import { getGroup } from "../utils";
  export let element;
</script>

<style>
  .element {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
  }

  .element-symbol {
    font-weight: 700;
    text-align: center;
    height: 70%;
  }

  .element-number {
    text-align: center;
    display: block;
    font-size: 13px;
    color: #fefefe;
  }
</style>

<div
  class="element {getGroup(element.GroupBlock)}"
  style="grid-row: {element.Row}; grid-column: {element.Column}">
  <span class="element-symbol">{element.Symbol}</span>
  <span class="element-number {getGroup(element.GroupBlock)}-accent">
    {element.AtomicNumber}
  </span>

</div>
