const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // сброс стандартного поведения ссылок
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body' // Атрибут href у ссылки, если его нет то перейти к body
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}