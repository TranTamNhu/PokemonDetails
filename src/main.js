import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Đảm bảo đường dẫn đúng

const app = createApp(App);
app.use(router);
app.mount("#app");
