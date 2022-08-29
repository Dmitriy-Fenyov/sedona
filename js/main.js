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
      for (let likesNumber of likesNumbers) {
        likesNumber.textContent--;
      }
        
    }
    else {
      likesNumbers.textContent++;
        likes.classList.add('liked');
        for (let likesNumber of likesNumbers) {
          likesNumber.textContent++;
        }
    }
  })
});
// Открытие/закрытие попапа и создание текста внутри попапа в зависимости от отзыва
  

const popup = document.querySelector(".popup");
const popupButton = document.querySelector(".form-button");
const popupClose = document.querySelector(".popup_close"); 

popupButton.addEventListener("click", function() {
  if (document.getElementById("good").checked) {
    document.querySelector(".popup_text").innerHTML = 'Безумно рады что Вам понравилось, приезжайте к нам еще!';
  }
  else if (document.getElementById("bad").checked) {
    document.querySelector(".popup_text").innerHTML = 'Нам очень жаль, что у Вас сложилось такое впечатление. Мы обязательно учтём все пожелания, чтобы в следующий раз Вам у нас понравилось.';    
    }
  else {
    document.querySelector(".popup_text").innerHTML = 'В следующий раз мы обязательно придумаем как Вас порадовать, приезжайте к нам еще!'
  }
  popup.classList.add("popup-open");

  document.addEventListener("keydown", function (evt) {
    if (evt.key === ("Escape"||"Esc")) {
      popup.classList.remove("popup-open")    
    }
  }); 
  document.addEventListener("mousedown", function (e) {
    if(e.target.closest(".popup_content")=== null) {
      popup.classList.remove("popup-open")
    }
  });

  popupClose.addEventListener("click", function() {
    popup.classList.remove("popup-open")  
  });
});

// Проверка на валидацию формы

const userNameInput = document.querySelector('.js-input-name');
const userSecondNameInput = document.querySelector('.js-input-secondname');
const userNumInput = document.querySelector('.js-input-num');
const userMailInput = document.querySelector('.js-input-mail');

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;
  const minLength = 2;
  const maxLength = 25;

  if (valueLength < minLength) {
    userNameInput.setCustomValidity('Ещё минимум ' + (minLength - valueLength) + ' симв.');
  } else if (valueLength > maxLength) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - maxLength) + ' симв.');
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
    userSecondNameInput.setCustomValidity('Ещё минимум ' + (minLength - valueLength) + ' симв.');
  } else if (valueLength > maxLength) {
    userSecondNameInput.setCustomValidity('Удалите лишние ' + (valueLength - maxLength) + ' симв.');
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
    userNumInput.setCustomValidity('Ещё минимум ' + (minLength - valueLength) + ' симв.');
  } else if (valueLength > maxLength) {
    userNumInput.setCustomValidity('Удалите лишние ' + (valueLength - maxLength) + ' симв.');
  } else {
    userNumInput.setCustomValidity('');
  }

  userNumInput.reportValidity();
});

userMailInput.addEventListener('input', () => {
  const valueLength = userMailInput.value.length;
  const minLength = 6;
  
  if (valueLength < minLength) {
    userMailInput.setCustomValidity('Ещё минимум ' + (minLength - valueLength) + ' симв.');
  } else {
    userMailInput.setCustomValidity('');
  }

  userMailInput.reportValidity();
});




