// script.js

function rotateClockHands() {
    const currentDate = new Date();
  
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
  
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
  
    const hourRotation = (hours * 30) + (minutes / 2); // Each hour represents 30 degrees (360 degrees / 12 hours = 30 degrees)
    const minuteRotation = (minutes * 6) + (seconds / 10); // Each minute represents 6 degrees (360 degrees / 60 minutes = 6 degrees)
    const secondRotation = seconds * 6; // Each second represents 6 degrees (360 degrees / 60 seconds = 6 degrees)
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  // Update the clock every second
  setInterval(rotateClockHands, 1000);
  