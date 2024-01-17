/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const forecastButton = document.querySelector('.forecast-btn')
const forecastContainer = document.querySelector('.current-forecast');
const forecastTitle = forecastContainer.querySelector('h1');
const forecastParagraph = forecastContainer.querySelector('p');
const forecastItem = document.querySelector('#forecast-item');


/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */
function getForecast(title, value) {
    const newForecast = forecastItem.content.cloneNode(true);
    newForecast.querySelector('h3').textContent = title;
    newForecast.querySelector('p').textContent = value;
    return newForecast;
}

forecastButton.addEventListener('click', function() {
    const newPrediction = getRandomInt(1, 5);
    let predictionText = "";

    if (newPrediction === 1) {
        predictionText = 'Сегодня тебя ждет приятный сюрприз!';
    } else if (newPrediction === 2) {
        predictionText = 'У тебя все получится!';
    } else if (newPrediction === 3) {
        predictionText = 'Ты выучишь JavaScript';
    } else if (newPrediction === 4) {
        predictionText = 'Ты отправишься в незабываемое путешествие';
    }

    const value = Math.floor(Math.random() * 100) + 1 + '%';
    forecastParagraph.textContent = 'Вероятность:' + value;
    forecastTitle.textContent = predictionText;
    const newWish = getForecast(predictionText, 'Вероятность:' + value);
    forecastContainer.prepend(newWish);
});


/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */




/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */