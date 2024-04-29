import { createVuesticEssential, VaButton, VaIcon, VaCard, VaCardTitle, VaCardContent, VaCardActions, VaNavbarItem, VaNavbar, VaSidebarItemTitle, VaSidebarItemContent, VaSidebarItem, VaSidebar, VaLayout  } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.use(createVuesticEssential({ components: { VaButton, VaIcon, VaCard, VaCardTitle, VaCardContent, VaCardActions, VaNavbarItem, VaNavbar, VaSidebarItemTitle, VaSidebarItemContent, VaSidebarItem, VaSidebar, VaLayout },
    config: {
        colors: {
            variables: {
                primary: "#1FAD83",
                secondary: "#002c85",
                success: "#40e583",
                info: "#2c82e0",
                danger: "#e34b4a",
                warning: "#ffc200",
                gray: "#babfc2",
                dark: "#34495e",

                bgTop: "#ffffff",
                bgBottom: "#d6dee3",
            },
        }
    },
}));
app.mount('#app')
