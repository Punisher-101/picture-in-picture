"use strict";

// DOM Elements
const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

// ASYNC Function
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Whoops Error Here:", error);
  }
}

// Adding Event Handler Function to the Button
button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // getting the VIdeo
  await videoElement.requestPictureInPicture();
  // Reset the Button
  button.disabled = false;
});

selectMediaStream();
