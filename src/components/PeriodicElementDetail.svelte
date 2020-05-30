<script>
  import { getElement } from "../fetchData";
  import { getGroup } from "../utils";

  export let atomicNumber;
  $: element = getElement(atomicNumber) || {};
</script>

<style>
  .periodic-element-detail {
    grid-column: 3 / 13;
    grid-row: 1 / 4;
    background: white;
  }

  .periodic-element-header {
    display: flex;
    height: 50px;
    align-items: center;
  }

  .periodic-element-header p {
    margin: 0;
    padding: 0 5px;
    color: white;
    font-size: 36px;
  }

  .periodic-element-body {
    display: flex;
    margin-top: 5px;
    height: 105px;
  }

  .periodic-element-thumbnail {
    display: flex;
    flex-direction: column;
    width: 20%;
    padding-top: 10px;
    box-sizing: border-box;
  }

  .periodic-element-thumbnail .symbol {
    font-size: 32px;
    font-weight: 600;
    line-height: 24px;
  }

  .periodic-element-thumbnail .name {
    font-size: 16px;
    font-weight: 600;
  }

  .periodic-element-thumbnail .symbol,
  .periodic-element-thumbnail .name {
    text-align: center;
  }

  .periodic-element-thumbnail .number {
    text-align: center;
    display: block;
    font-size: 13px;
    color: #fefefe;
    padding: 4px 12px;
  }

  .periodic-element-thumbnail .mass {
    text-align: center;
    display: block;
    font-size: 14px;
    padding: 4px 8px;
    font-weight: 600;
  }

  .periodic-element-thumbnail .footer {
    display: flex;
    margin-top: auto;
    justify-content: space-between;
  }

  .periodic-element-details {
    display: flex;
    flex-wrap: wrap;
    margin-left: 5px;
    width: 80%;
  }

  .periodic-element-info {
    display: flex;
    width: 100%;
  }

  .periodic-element-details table {
    font-size: 14px;
    border-collapse: collapse;
    width: 100%;
    height: 100%;
  }

  sup {
    display: inline-block;
    vertical-align: super;
    font-size: 12px;
    margin-left: -5px;
  }
</style>

<!-- {
    AtomicNumber: '1',
    Symbol: 'H',
    Name: 'Hydrogen',
    AtomicMass: '1.0080',
    CPKHexColor: 'FFFFFF',
    ElectronConfiguration: '1s1',
    Electronegativity: '2.2',
    AtomicRadius: '120',
    IonizationEnergy: '13.598',
    ElectronAffinity: '0.754',
    OxidationStates: '+1, -1',
    StandardState: 'Gas',
    MeltingPoint: '13.81',
    BoilingPoint: '20.28',
    Density: '0.00008988',
    GroupBlock: 'Hydrogen',
    YearDiscovered: '1766',
    Row: 1,
    Column: 1,
  } -->
<div class="periodic-element-detail">
  <div class="periodic-element-header {getGroup(element.GroupBlock)}-accent">
    <p>{element.Name}</p>
  </div>
  <div class="periodic-element-body">
    <div class="periodic-element-thumbnail {getGroup(element.GroupBlock)}">
      <span class="symbol">{element.Symbol}</span>
      <span class="name">{element.Name}</span>
      <div class="footer">
        <span class="number {getGroup(element.GroupBlock)}-accent">
          {element.AtomicNumber}
        </span>
        <span class="mass">{element.AtomicMass}</span>
      </div>
    </div>
    <div class="periodic-element-details">
      <table>
        <tbody>
          <tr>
            <td>Electronegativity</td>
            <td>{element.Electronegativity}</td>
          </tr>
          <tr>
            <td>Electron configuraction</td>
            <td>{element.ElectronConfiguration}</td>
          </tr>
          <tr>
            <td>
              <span>
                1
                <sup>st</sup>
              </span>
              <span>ionisation energy</span>
            </td>
            <td>{element.IonizationEnergy}</td>
          </tr>
          <tr>
            <td>
              Density (g cm
              <sup>-3</sup>
              )
            </td>
            <td>{element.Density}</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>

</div>
