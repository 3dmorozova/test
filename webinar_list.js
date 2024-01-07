const main = document.createElement('main') //создаем тег а-ля див
main.setAttribute('id','main') //задаем атрибут для мэйн. на выходе: id="main"
document.body.appendChild(main) //суем мэйн вместе с атрибутом в боди

const h1 = document.createElement('h1') //создаем тег - хедер1
h1.innerHTML = 'Example header' //суем внутрь х1 текст. на выходе: <h1>Example header</h1>

const p = document.createElement('p') // то же для р
p.innerHTML = 'lddfgadfhadhdah'

main.appendChild(h1) //суем х1 и р внутрь мэйна
main.appendChild(p)

const form = document.createElement('form') //создаем тег с формой и тег инпут
const input = document.createElement('input')

input.setAttribute('type','text') //задаем для инпута атрибуты type="text" и тд
input.setAttribute('id','name')
input.setAttribute('name','name')
input.setAttribute('placeholder','enter smth')

const button = document.createElement('button') //создаем тег баттон и атрибуты
button.setAttribute('type','button')
button.innerText = 'send'

form.appendChild(input) //суем инпут и баттон внутрь тега форм
form.appendChild(button)

main.appendChild(form) //суем форму внутрь мэйн

const output = document.createElement('div') //создаем див 
output.className = 'output' //с классом аутпут
main.appendChild(output) //пихаем его в мэйн


  /*начало функции, которая выводит введенный в поле текст под полем*/
input.addEventListener('input', function(e)  { //для поля инпут создаем ивент-функцию "е"
//console.log('event target on input', e.target.value)
 output.innerText = e.target.value //при вводе текста в инпут этот текст выводится под полем
}
)
  /*конец функции, которая выводит введенный в поле текст под полем*/


const ul = document.createElement('ul') //создаем тег ул
main.appendChild(ul) //суем его в мэйн


  /*начало функции, которая выводит в список введенное в поле значение при клике*/
button.addEventListener('click', function(e) { //по клику на кнопку вызываем функцию "е"
// e.preventDefault() // чтобы не обновлялась страница при клике?
    const todo = input.value //присваиваем переменной туду значение, введенное в инпут
input.value = '' //стираем то, что могло остаться внутри инпута и аутпута
output.innerHTML = ''

const li = document.createElement('li') //создаем тег ли
li.textContent = todo //суем внутрь ли текст, полученный в ходе работы функции туду
ul.appendChild(li) //суем ли внутрь ул
    }
    )
  /*конец функции, которая выводит в список введенное в поле значение при клике*/