const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外の気温は 華氏94　度 だったので、 私は遊びに行った。:inserty:に着くと、:insertz:。 体重300ポンドの:insertx:は驚いたが、私はまったく驚かなかった。 なぜなら :inserty: ではよくあることだからだ。';
let insertX = ['サンタクロース','ハロー・キティー','エルモ'];
let insertY = ['海辺','USJ','富士急ハイランド'];
let insertZ = ['人であふれていた','夕立が降ってきた','風が強くなってきた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('私',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(300*0.454) + ' kg';
    const temperature =  '摂氏' + Math.round((94-32) * 5 / 9);
    newStory = newStory.replace('華氏94',temperature);
    newStory = newStory.replace('300ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
