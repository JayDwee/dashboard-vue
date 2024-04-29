<template>
  <div class="va-table-responsive">
    <table class="va-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in shoppingListItems"
          :key="item.id"
        >
          <td>{{ item.item }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import shoppingList from "../../data/list.json";

export default defineComponent({
  data() {
    return {
        shoppingListItems: shoppingList,
    };
  },
});
</script>

<style>
.va-table-responsive {
  overflow: auto;
}
</style>