<script setup lang="ts">
import { ref } from 'vue'
import ShoppingList from './../components/list/ShoppingList.vue'

const addToList = () => {
  ShoppingList[0].quantity++;
}

</script>

<template>

    <div class="app">
        <main>
            <VaCard>
                <VaCardTitle>
                    Shopping List
                </VaCardTitle>
                <VaCardContent>
                    <ShoppingList></ShoppingList>
                </VaCardContent>
                <VaCardActions align="right">
                            <VaButton icon="add" size="small" @click="addToList">Add</VaButton>
                </VaCardActions>
            </VaCard>
        </main>
    </div>
</template>


<style>
.app {
    min-height: 100vh;
    background: linear-gradient(180deg, var(--va-bg-top), var(--va-bg-bottom));
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: stretch;
    color: #000000;
    padding: 2rem;
}

.va-card {
    display: flex;
    flex-direction: column;
    min-width: 0;
    max-width: 800px;
}

.va-card__content {
    flex-grow: 1;
}

</style>