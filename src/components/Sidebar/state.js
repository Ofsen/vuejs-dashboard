import { ref, computed } from "vue";

// Création d'une référence boolean pour le sidebar collapsed ou non
export const collapsed = ref(false);
// Fonction de toggle
export const toggleSidebar = () => (collapsed.value = !collapsed.value);

// Constantes tailles de la sidebar
export const SIDEBAR_WIDTH = 200;
export const SIDEBAR_WIDTH_COLLAPSED = 50;
export const sidebarWidth = computed(() => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`);
