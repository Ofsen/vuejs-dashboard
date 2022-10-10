import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Importation de fontawesome pour les icones
import "@fortawesome/fontawesome-free/js/all";

createApp(App).use(router).mount("#app");
