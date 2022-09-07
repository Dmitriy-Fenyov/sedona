/// Открытие/закрытие навигации в мобильной версии

const button = document.querySelector(".page-header__toggle--toggle");
const opening = document.querySelectorAll(".open");  
const closing = document.querySelector(".main-nav_close-button");

button.addEventListener("click", function() {
  opening.forEach(x => x.classList.toggle("open"));  
},{passive: true});
closing.addEventListener("click", function() {
  opening.forEach(x => x.classList.toggle("open"));  
},{passive: true});


// Счетчик лайков

const likes = document.querySelectorAll('.js-like');
const likesNumbers = document.querySelectorAll('output');

likes.forEach (likes => {
  likes.addEventListener('click', function() {
    
    if(likes.classList.contains('liked')) {
      likes.classList.remove('liked');
      for (const likesNumber of likesNumbers) {
        likesNumber.textContent--;
      }
        
    }
    else {
      likesNumbers.textContent++;
        likes.classList.add('liked');
        for (const likesNumber of likesNumbers) {
          likesNumber.textContent++;
        }
    }
  })
});
// Открытие/закрытие попапа и создание текста внутри попапа в зависимости от отзыва
const POPUP_THANK_YOU = "Безумно рады что Вам понравилось, приезжайте к нам еще!"; 
const WE_ARE_SORRY = "Нам очень жаль, что у Вас сложилось такое впечатление. Мы обязательно учтём все пожелания, чтобы в следующий раз Вам у нас понравилось.";
const COME_BACK_LATER = "В следующий раз мы обязательно придумаем как Вас порадовать, приезжайте к нам еще!"; 

const popupEl = document.querySelector(".popup");
const popupButtonEl = document.querySelector(".form-button");
const popupCloseEl = document.querySelector(".popup_close"); 
const popupTextEl = document.querySelector(".popup_text"); 

const userNameInput = document.querySelector('.js-input-name');
const userSecondNameInput = document.querySelector('.js-input-secondname');
const userNumInput = document.querySelector('.js-input-num');
const userMailInput = document.querySelector('.js-input-mail');


popupButtonEl.addEventListener("click", function() {

  if (userNameInput.value.length < 2 || userSecondNameInput.value.length <2 || userNumInput.value.length < 5 || userMailInput.value.length < 6) {
    alert('Заполните пожалуйста пропущенные поля!')
  } else {
    popupButtonEl.removeAttribute('disabled')
  

  if (document.getElementById("good").checked) {
    popupTextEl.innerHTML = POPUP_THANK_YOU;
  }
  else if (document.getElementById("bad").checked) {
    popupTextEl.innerHTML = WE_ARE_SORRY;
  }
  else {
    popupTextEl.innerHTML = COME_BACK_LATER;
  }

    popupEl.classList.add("popup-open");
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === ("Escape"||"Esc")) {
    popupEl.classList.remove("popup-open")    
  }
}); 
document.addEventListener("mousedown", function (evt) {
  if(evt.target.closest(".popup_content")=== null) {
    popupEl.classList.remove("popup-open")
  }
});

popupCloseEl.addEventListener("click", function() {
  popupEl.classList.remove("popup-open")  
});

// Проверка на валидацию формы


userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;
  const minLength = 2;
  const maxLength = 25;

  if (valueLength < minLength) {
    userNameInput.setCustomValidity(`Ещё минимум ${minLength - valueLength} симв.`);
  } else if (valueLength > maxLength) {
    userNameInput.setCustomValidity(`Удалите лишние ${valueLength - maxLength} симв.`);
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
});

userSecondNameInput.addEventListener('input', () => {
  const valueLength = userSecondNameInput.value.length;
  const minLength = 2;
  const maxLength = 25;

  if (valueLength < minLength) {
    userSecondNameInput.setCustomValidity(`Ещё минимум ${minLength - valueLength} симв.`);
  } else if (valueLength > maxLength) {
    userSecondNameInput.setCustomValidity(`Удалите лишние ${valueLength - maxLength} симв.`);
  } else {
    userSecondNameInput.setCustomValidity('');
  }

  userSecondNameInput.reportValidity();
});

userNumInput.addEventListener('input', () => {
  const valueLength = userNumInput.value.length;
  const minLength = 5;
  const maxLength = 25;

  if (valueLength < minLength) {
    userNumInput.setCustomValidity(`Ещё минимум ${minLength - valueLength} симв.`);
  } else if (valueLength > maxLength) {
    userNumInput.setCustomValidity(`Удалите лишние ${valueLength - maxLength} симв.`);
  } else {
    userNumInput.setCustomValidity('');
  }

  userNumInput.reportValidity();
});

userMailInput.addEventListener('input', () => {
  const valueLength = userMailInput.value.length;
  const minLength = 6;
  
  if (valueLength < minLength) {
    userMailInput.setCustomValidity(`Ещё минимум ${minLength - valueLength} симв.`);
  } else {
    userMailInput.setCustomValidity('');
  }

  userMailInput.reportValidity();
});




