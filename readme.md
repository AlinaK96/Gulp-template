#Сборка Gulp 

**Быстро настроить сборку проекта на Gulp для:**  

* HTML, PUG
* CSS, SCSS, SASS, LESS
* Java Script, Type Script

**Функционал сборки**


* минификация HTML (gulp-htmlmin)
* компиляция препроцессоров LESS, SASS (gulp-less)
* минификация CSS (gulp-clean-css)
* автоматическое добавление префиксов CSS (gulp-autoprefixer)
* транспиляция языков Type Script
* преобразования кода ECMAScript 2015 + в обратно совместимую версию JavaScript с помощью Babel (gulp-babel)
* минификация JavaScript (gulp-uglify)
* объединение нескольких файлов JavaScript в один (gulp-concat )
* сжатие изображений (gulp-imagemin - 7.1.0)
* отслеживание новых изображений, которые еще не были сжаты (gulp-newer)
* генерация sourcemaps (gulp-sourcemaps)
* локальный сервер с автоматическим обновлением страницы при изменении файлов (Browser Sync - live reload  )
* Удаление каталогов и файлов ( del - 6.1.1)   

----------------
отображение размеров файлов в терминале (gulp-size)


**Инструкция:**  
* Скачать все файлы в любую директорию   
* Ввести в терминале команду: npm i (должен быть установлен node.js)   
* Выполнить команду: gulp (запуск таска default)   
* В терминале должно появиться сообщение: Browser Sync started at http://localhost:3000/

**Сборка проекта**

1. html (src/ - .html)  => dist/
2. Styles (src/styles/ - .css, .sass, .scss, .less) => dist/css/style.min.css	
3. Scripts (src/scripts/ - .js, .ts, .coffee) => dist/js/main.min.js	
4. Images (src/img/ - .jpg, .png, .gif) => dist/img/