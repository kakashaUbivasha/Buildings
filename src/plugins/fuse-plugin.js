import Fuse from 'fuse.js'

export default {
    install: (app, options) => {
        const fuse = new Fuse(options.searchableContent, options.fuseOptions)

        // Добавляем $fuse как глобальное свойство
        app.config.globalProperties.$fuse = fuse

        // Добавляем метод для обновления содержимого поиска
        app.config.globalProperties.$updateSearchableContent = (newContent) => {
            fuse.setCollection(newContent)
        }

        // Предоставляем $fuse через inject/provide для использования в setup()
        app.provide('$fuse', fuse)
    }
}