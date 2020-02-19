// Variables/ Created dynamic elements

var body = document.querySelector('body');
var title = document.createElement('h1');
var question = document.createElement('p');
var qa1 = document.createElement('button');
var qa2 = document.createElement('button');
var qa3 = document.createElement('button');
var qa4 = document.createElement('button');
var insthead = document.createElement('h3');
var inst = document.createElement('p');

// Text content assigned to variables
title.textContent = 'Javascript Quiz';
insthead.textContent = 'Instructions';
inst.textContent = 'I will put the instructions here later.';

// Append content to HTML page

body.appendChild(title);
