<script>
  export let element;
  let color = group =>
    group
      .toLowerCase()
      .split(" ")
      .join("-");
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

  .noble-gas {
    background: #ffd54f;
  }

  .noble-gas-accent {
    background: #ffa000;
  }

  .halogen {
    background: #ffd180;
  }

  .halogen-accent {
    background: #ff9800;
  }

  .transition-metal {
    background: #81d4fa;
  }

  .transition-metal-accent {
    background: #0277bd;
  }

  .lanthanide {
    background: #4dd0e1;
  }

  .lanthanide-accent {
    background: #00838f;
  }

  .actinide {
    background: #9ccc65;
  }

  .actinide-accent {
    background: #2e7d32;
  }

  .alkali-metal {
    background: #ba68c8;
  }

  .alkali-metal-accent {
    background: #8e24aa;
  }

  .alkaline-earth-metal {
    background: #f06292;
  }

  .alkaline-earth-metal-accent {
    background: #e91e63;
  }

  .boron {
    background: #dce775;
  }

  .boron-accent {
    background: #afb42b;
  }

  .carbon {
    background: #9575cd;
  }

  .carbon-accent {
    background: #512da8;
  }

  .pnictogen {
    background: #78909c;
  }

  .pnictogen-accent {
    background: #455a64;
  }

  .chalcogens {
    background: #ff8a65;
  }

  .chalcogens-accent {
    background: #d84315;
  }

  .hydrogen {
    background: #a3c7d2;
  }

  .hydrogen-accent {
    background: #3d697c;
  }
</style>

<div
  class="element {color(element.GroupBlock)}"
  style=" grid-row: {element.Row}; grid-column: {element.Column}">
  <span class="element-symbol">{element.Symbol}</span>
  <span class="element-number {color(element.GroupBlock)}-accent">
    {element.AtomicNumber}
  </span>

</div>
