import { createApp } from 'vue'
import './style.css'
import Paginate from "vuejs-paginate-next";
import App from './App.vue'
import router from "./router/router.js"
import fusePlugin from "./plugins/fuse-plugin.js";
import store from "./store"
import 'vue3-toastify/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css'
const searchableContent = [
    { id: 1, title: 'Главная страница', content: 'Содержимое главной страницы', path: '/' },
    { id: 2, title: 'Инвестиции в недвижимость в Дубае', content: 'дубаи дубай инвистиция Вложите в будущее: Недвижимость в Дубае', path: '/investing-in-dubai' },
    { id: 3, title: ' Новостройки в Ташкенте', content: 'нововстройки ташкент квартира цены на квартиры каталог новостроек Рынок новостроек в Ташкенте', path: '/buildings' },
    { id: 4, title: 'Пример новостроек', content: 'Infinity Клубный дом  Дом имеет свой приватный закрытый двор с несколькими зонами отдыха для взрослых и детей отдельно предусмотрено помещение для консьержа и охраны Фотогалерея и видеотуры', path: '/buildings-page' },
    { id: 5, title: 'Фотогалерея и видеотуры', content: 'фото видео туры Фотогалерея видеотуры', path: '/gallery' },
]
const app = createApp(App)
app.use(router)
app.use(store)
app.use(fusePlugin, {
    searchableContent: searchableContent,
    fuseOptions: {
        keys: ['title', 'content'],
        threshold: 0.3
    }
})
app.component("Paginate", Paginate);
app.mount('#app')
