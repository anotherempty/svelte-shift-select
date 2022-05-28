# Svelte Shift Select

A <a href="https://svelte.dev">Svelte</a> action to mutli-select checkboxes with shift-click

[See the Demo](https://anotherempty.github.io/svelte-shift-select/)

## Installation

```sh
npm install svelte-shift-select
```

## Usage

### Default usage example

```svelte
<script>
  import shiftSelect from "svelte-shift-select";
  let someValues = [];
</script>

<label>
  <input type="checkbox" bind:group={someValues} name="checkboxes" use:shiftSelect value={1}>
  Checkbox 1
</label>
<label>
  <input type="checkbox" bind:group={someValues} name="checkboxes" use:shiftSelect value={2}>
  Checkbox 2
</label>
<label>
  <input type="checkbox" bind:group={someValues} name="checkboxes" use:shiftSelect value={3}>
  Checkbox 3
</label>
<label>
  <input type="checkbox" bind:group={someValues} name="checkboxes" use:shiftSelect value={4}>
  Checkbox 4
</label>
```
***Note***: <br>
The checkbox input must have a **name** attribute. The action will automatically look for all the chekboxes with the same **name** attribute. <br>
A shift click triggers a _change_ event, but can be deactivated by setting the **change** parameter to *false*.
```svelte
<input type="checkbox" name="checkboxes" use:shiftSelect={{ change: false }}>
```

### Example using array

```svelte
<script>
  import shiftSelect from "svelte-shift-select";

  let items = new Array(30).fill(0).map((x, i) => ({
    id: i,
    checked: false,
  }));
</script>

{#each items as item, index}
  <label>
    <input
      type="checkbox"
      name="checkboxes"
      use:shiftSelect={{ checkboxes: items, index }}
    />
    {item.id}
  </label>
{/each}
```
***Note***: <br>
If an array is provided for the **checkboxes** parameter, the action will use it instead of the checkbox-input nodes to set the *checked* value. So the provided array must be an array of object containing a **checked** property.

### Can work with [svelte-tiny-virtual-list](https://github.com/Skayo/svelte-tiny-virtual-list)
```svelte
<script>
  import VirtualList from 'svelte-tiny-virtual-list';
  import shiftSelect from "svelte-shift-select";

  let items = new Array(30).fill(0).map((x, i) => ({
    id: i,
    checked: false,
  }));
</script>

<VirtualList width="100%" height={300} itemCount={items.length} itemSize={22}>
  <label slot="item" let:index let:style {style}>
    <input
      type="checkbox"
      name="checkboxes"
      bind:checked={items[index].checked}
      use:shiftSelect={{ checkboxes: items, index }}
    />
    {item.id}
  </label>
</VirtualList>
```
***Note***: <br>
An array must be provided to the **checkboxes** parameter, an integer to the **index** parameter and each input must be binded to the provided array.

## Props

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bind` | `boolean` | **Optional** but **Required** if the checked attribute of the input is binded and the action isn't using an array of object. Defaults to *`false`*. |
| `change` | `boolean` | **Optional**. Is used to set whether to trigger a *change* when changing the checked attribute of each checkboxes after a Shift-Click. Defaults to *`true`*. |
| `checkboxes` | `array` | **Optional** but **Required** if used with [svelte-tiny-virtual-list](https://github.com/Skayo/svelte-tiny-virtual-list). Default value is *`undefined`*. |
| `index` | `integer` | **Optional** but **Required** if the **checkboxes** parameter is set. Defaults to *`undefined`*. |

## License

Distributed under the MIT License. 