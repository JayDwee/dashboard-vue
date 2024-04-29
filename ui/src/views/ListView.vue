<script setup lang="ts">
import { ref } from 'vue'
import ShoppingList from './../components/list/ShoppingList.vue'
</script>

<template>

    <div class="app">


        <main>
            <h5 class="app-title">
                Shopping List
            </h5>
            <div class="shopping-table">
                <ShoppingList></ShoppingList>
            </div>
        </main>
    </div>
</template>


<style>
.app {
    min-height: 100vh;
    background: linear-gradient(180deg, var(--va-bg-top), var(--va-bg-bottom));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000000;
    padding: 2rem;
}

.app-title {
    font-size: 2rem;
    margin: 1.75rem;
    text-align: center;
}

.shopping-table {
    background-color: var(--va-bg-top);
}
</style>