<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>

    <div class="app">


        <main>
            <div>
                <div class="steps-row">
                    <VaCard>
                        <VaCardTitle>Quick Actions</VaCardTitle>
                        <VaCardActions align="center">
                            <VaButton icon="add" size="large" round>Recipe</VaButton>
                            <VaButton icon="add" size="large" round>Fridge</VaButton>
                            <VaButton icon="visibility" size="large" round>Meals</VaButton>
                        </VaCardActions>
                    </VaCard>
                    <VaCard class="sh-list">
                        <VaCardTitle>Shopping List</VaCardTitle>
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
    align-items: stretch;
    justify-content: stretch; 
    color: #000000;
    padding-top: 2rem;
    padding-left: 20rem;
    padding-right: 20rem;
}


.steps-icon {
    margin-right: 0.5rem;
}

.steps-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    gap: 1.5rem;
    min-width: 40rem;
}

.sh-list {
    grid-area: 1 / 2 / 3 / 3;
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