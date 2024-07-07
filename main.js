console.log(`
  1. Студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages:  +10 баллов.
  2. Верстка при проверке валидности имеет "Warning: This document appears to be Lorem ipsum text but the html start tag has lang="en". Consider using lang="zxx" (or variant) instead." Поэтому за валидность +5 баллов.
  3. Верстка, частично, семантичная. Суммарно +10 баллов.
      * header, main, footer +5
      * элемент nav +5
      * только один заголовок h1 +5 
      * заголовки h2 +5
  4.  В footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +5
  5. Для оформления СV используются css-стили +10
  6. При уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону, выполнено только в основном содержании, у aside текст разъезжается и прижимается к бокам или растягивается,  +10 баллов
  7. На странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10 баллов
  8. Навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a
  Также допускается использование нумерованого списка ol > li или ol > li > a. Этого нет поэтому + 0 баллов.
  9. CV содержит:
        * краткую информацию о себе +5
        * контакты для связи +5
        * перечень навыков +5
        * пример кода. Код добавляется при помощи символов и тегов, а не картинкой + 5
        * перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения + 5
        *  информацию об образовании и уровне английского +5
  Суммарно  + 20 баллов.
  10. CV выполнено на английском языке +10

  Итого: 130 баллов
  `)


const exampleBtn = document.querySelectorAll('.code-item ');
const tabs = document.querySelectorAll('.code-none');


exampleBtn.forEach(item => {
  item.addEventListener('click', () => {
    let tab = item.getAttribute('data-tab');
    let tabClass = document.querySelector(tab);
    console.log(tabClass)
    
    exampleBtn.forEach(item => {
      item.classList.remove('code-item-active')
    });
    tabs.forEach(item => {
      item.classList.remove('code-example-active')
    });

    item.classList.add('code-item-active');
    tabClass.classList.add('code-example-active');
  });
});