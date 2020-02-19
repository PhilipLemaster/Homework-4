// Variables/ Created dynamic elements

var start = document.createElement('button');
var body = document.querySelector('body');
var title = document.createElement('h1');
var qcontainer = document.createElement('div');
var qhead = document.createElement('p');
var choices = document.createElement('div');
var qa1 = document.createElement('button');
var qa2 = document.createElement('button');
var qa3 = document.createElement('button');
var qa4 = document.createElement('button');
var insthead = document.createElement('h3');
var inst = document.createElement('p');
var brk = document.createElement('br');

// Text content assigned to variables
title.textContent = 'Javascript Quiz';
insthead.textContent = 'Instructions';
inst.textContent = 'I will put the instructions here later.';

// Append content to HTML page

body.appendChild(title);
body.appendChild(qcontainer);
qcontainer.appendChild(qhead);
qcontainer.appendChild(choices);
choices.appendChild(qa1);
choices.appendChild(qa2);
choices.appendChild(qa3);
choices.appendChild(qa4);

// Stylize content to look presentable

qhead.style.height = '50px';

qcontainer.style.backgroundColor = 'lightgreen';
qcontainer.style.height = '375px';
qcontainer.style.width = '650px';
qcontainer.style.margin = 'auto';
qcontainer.style.border = '5px solid black';
qcontainer.style.boxShadow = '10px black';

title.style.textAlign = 'center';
title.style.fontFamily = 'sans-serif';

qa1.style.backgroundColor = 'lightblue';
qa1.style.width = '250px';
qa1.style.border = '4px solid black';
qa1.style.margin = '40px';
qa1.style.fontSize = '20px';

qa2.style.backgroundColor = 'lightblue';
qa2.style.width = '250px';
qa2.style.border = '4px solid black';
qa2.style.margin = '30px';
qa2.style.fontSize = '20px';

qa3.style.backgroundColor = 'lightblue';
qa3.style.width = '250px';
qa3.style.border = '4px solid black';
qa3.style.margin = '40px';
qa3.style.fontSize = '20px';

qa4.style.backgroundColor = 'lightblue';
qa4.style.width = '250px';
qa4.style.border = '4px solid black';
qa4.style.margin = '30px';
qa4.style.fontSize = '20px';




