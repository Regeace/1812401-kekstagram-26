const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const formElement = document.querySelector('.img-upload__form');
const scaleValueElement = formElement.querySelector('.scale__control--value');
const scaleDownButtonElement = formElement.querySelector('.scale__control--smaller');
const scaleUpButtonElement = formElement.querySelector('.scale__control--bigger');
const previewImage = formElement.querySelector('.img-upload__preview').querySelector('img');

const scaleValue = () => parseInt(scaleValueElement.value, 10);

const changeScale = () => {
  scaleDownButtonElement.addEventListener('click', scaleDown);
  scaleUpButtonElement.addEventListener('click', scaleUp);
};

function scaleDown () {
  scaleUpButtonElement.disabled = false;
  if (scaleValue() <= Scale.MIN) {
    scaleDownButtonElement.disabled = true;
  } else {
    const transformScaleValue = (scaleValue() - Scale.STEP)/100;
    scaleDownButtonElement.disabled = false;
    scaleValueElement.value = `${scaleValue() - Scale.STEP}%`;
    previewImage.style = `transform: scale(${transformScaleValue})`;
  }
}

function scaleUp () {
  scaleDownButtonElement.disabled = false;
  if (scaleValue() >= Scale.MAX) {
    scaleUpButtonElement.disabled = true;
  } else {
    const transformScaleValue = (scaleValue() + Scale.STEP)/100;
    scaleUpButtonElement.disabled = false;
    scaleValueElement.value = `${scaleValue() + Scale.STEP}%`;
    previewImage.style = `transform: scale(${transformScaleValue})`;
  }
}

const resetScale = () => {
  scaleDownButtonElement.removeEventListener('click', scaleDown);
  scaleUpButtonElement.removeEventListener('click', scaleUp);
  previewImage.removeAttribute('style');
};

export {changeScale, resetScale};
