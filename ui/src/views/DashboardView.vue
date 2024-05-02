<script setup lang="ts">
import { ref } from 'vue'
import ShoppingList from './../components/list/ShoppingList.vue'
</script>

<template>

    <div class="app">


        <main>
            <div>
                <div class="steps-row">
                    <VaCard>
                        <VaCardTitle>Quick Actions</VaCardTitle>
                        <VaCardActions align="center">
                            <VaButton icon="add" size="large">Recipe</VaButton>
                            <VaButton icon="add" size="large">Fridge</VaButton>
                            <VaButton icon="visibility" size="large">Meals</VaButton>
                        </VaCardActions>
                    </VaCard>
                    <VaCard>
                        <VaCardTitle>Shopping List</VaCardTitle>
                        <VaCardContent>
  <VaScrollContainer
    class="max-h-52"
    vertical
  >
        <ShoppingList></ShoppingList>
  </VaScrollContainer>

                        </VaCardContent>
                    </VaCard>
                    <VaCard>
                        <VaCardTitle>Nutrition</VaCardTitle>
                    </VaCard>
                    <VaCard>
                        <VaCardTitle>Todays Meals</VaCardTitle>
                    </VaCard>
                    <VaCard>
                        <VaCardTitle>This Week</VaCardTitle>
                    </VaCard>
                    
                </div>
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
    justify-content: stretch; 
    color: #000000;
    padding: 2rem;
}


.steps-icon {
    margin-right: 0.5rem;
}

.steps-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    min-width: 0;
    max-width: 800px;
    min-height: 40rem;
}


.max-h-52{
    max-width: 50px;
}

@media (max-width: 768px) {
    .steps-row {
        padding: 1rem;
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}

.va-card {
    display: flex;
    flex-direction: column;
}

.va-card__content {
    flex-grow: 1;
}

.va-card:hover .va-card__title {
    color: var(--va-primary)
}
</style>