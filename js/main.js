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
const firstPhoto = document.getElementById('firstPhoto');
const secondPhoto = document.getElementById('secondPhoto');
const thirdPhoto = document.getElementById('thirdPhoto');
const fourthPhoto = document.getElementById('fourthPhoto');
const buttonFirstPhoto = document.querySelector(".js-firstPhoto");
const buttonSecondPhoto = document.querySelector(".js-secondPhoto");
const buttonThirdPhoto = document.querySelector(".js-thirdPhoto");
const buttonfourthPhoto = document.querySelector(".js-fourthPhoto");




likes.forEach (likes => {
  likes.addEventListener('click', function() {
    
    if(likes.classList.contains('liked')) {
      likes.classList.remove('liked');
    }
    else {
        likes.classList.add('liked');
    }
  })
});

buttonFirstPhoto.addEventListener("click", function() {
  if (buttonFirstPhoto.classList.contains('liked')) {
  firstPhoto.textContent = ++firstPhoto.textContent
  }
  else {
    firstPhoto.textContent = --firstPhoto.textContent
}
});

buttonSecondPhoto.addEventListener("click", function() {
  if (buttonSecondPhoto.classList.contains('liked')) {
    secondPhoto.textContent = ++secondPhoto.textContent
  }
  else {
    secondPhoto.textContent = --secondPhoto.textContent
}
});

buttonThirdPhoto.addEventListener("click", function() {
  if (buttonThirdPhoto.classList.contains('liked')) {
    thirdPhoto.textContent = ++thirdPhoto.textContent
  }
  else {
    thirdPhoto.textContent = --thirdPhoto.textContent
}
});

buttonfourthPhoto.addEventListener("click", function() {
  if (buttonfourthPhoto.classList.contains('liked')) {
    fourthPhoto.textContent = ++fourthPhoto.textContent
  }
  else {
    fourthPhoto.textContent = --fourthPhoto.textContent
}
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
const userThirdNameInput = document.querySelector('.js-input-thirdname');
const userNumInput = document.querySelector('.js-input-num');
const userMailInput = document.querySelector('.js-input-mail');
const userEmotionInput = document.querySelector('.form-emotion__input');


popupButtonEl.addEventListener("click", function(evt) {

  evt.preventDefault()

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
    userNameInput.value = "",
    userSecondNameInput.value = "",
    userThirdNameInput.value = "",
    userNumInput.value = "",
    userMailInput.value = "",
    userEmotionInput.value = ""
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




