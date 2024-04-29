<script setup lang="ts">
import { ref } from 'vue'
import VaIconVueMyRecipe from './../components/icons/VaIconVueMyRecipe.vue'

const showSidebar = ref(false)
const page = ref(1)
</script>

<template>
  <VaLayout>
    <template #top>
      <VaNavbar color="primary" class="py-2">
        <template #left>
          <VaButton :icon="showSidebar ? 'menu_open' : 'menu'" @click="showSidebar = !showSidebar" />
        </template>
        <template #center>
          <VaNavbarItem class="font-bold text-lg">
            <VaIcon :component="VaIconVueMyRecipe" size="2.2rem" color="#fff" />
          </VaNavbarItem>
        </template>
      </VaNavbar>
    </template>

    <template #left>
      <VaSidebar v-model="showSidebar" class="py-4">
        <VaSidebarItem :active="page === 1" @click="page = 1" :to="{ name: 'dashboard' }">
          <VaSidebarItemContent>
            <VaIcon name="dashboard" />
            <VaSidebarItemTitle>
              Dashboard
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem :active="page === 2" @click="page = 2" :to="{ name: 'recipes' }">
          <VaSidebarItemContent>
            <VaIcon name="restaurant_menu" />
            <VaSidebarItemTitle>
              Recipes
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem :active="page === 3" @click="page = 3" :to="{ name: 'fridge' }">
          <VaSidebarItemContent>
            <VaIcon name="kitchen" />
            <VaSidebarItemTitle>
              Fridge
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem :active="page === 4" @click="page = 4" :to="{ name: 'plan' }">
          <VaSidebarItemContent>
            <VaIcon name="calendar_view_week" />
            <VaSidebarItemTitle>
              Meal Plan
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem :active="page === 5" @click="page = 5" :to="{ name: 'list' }">
          <VaSidebarItemContent>
            <VaIcon name="list" />
            <VaSidebarItemTitle>
              Shopping List
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
      </VaSidebar>
    </template>

    <template #content>
      <RouterView />
    </template>
  </VaLayout>
</template>
