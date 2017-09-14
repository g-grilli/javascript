var inputElement = document.querySelector('input');
var button = document.querySelector('button');
var messageArea = document.querySelector('.message-area');

var robotAnswers = [
  'Welcome!',
  'How are you today?',
  'That is nice to hear.',
  'Do you like cats?',
  'Wonderful! Me too!',
  'Always a pleasure',
];

var currentAnswer = 0;

var addMessage = (text, className) => {
  // create a paragraph element
  let message = document.createElement('p');
  
  // set its text to the text argument
  message.textContent = text;
  
  // add custom className
  message.setAttribute('class', className);
  
  // add it to the message area
  messageArea.appendChild(message);
};

var robotResponse = () => {
  var message = robotAnswers[currentAnswer];
  addMessage(message, 'robo-text');
  currentAnswer = currentAnswer + 1;
  if (currentAnswer == robotAnswers.length) {
    // start over!
    currentAnswer = 0;
  }
}

button.addEventListener('click', () => {
  // get text from input
  var messageText = inputElement.value;
  
  // add it to the screen
  addMessage(messageText);
  
  inputElement.value = '';
  setTimeout(robotResponse, 1100);
});