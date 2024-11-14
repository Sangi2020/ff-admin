importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCsx0wJujfPER8xzxA4-ol6021hCf84knE",
  authDomain: "frostyfoods-fc646.firebaseapp.com",
  projectId: "frostyfoods-fc646",
  storageBucket: "frostyfoods-fc646.appspot.com",
  messagingSenderId: "252681830236",
  appId: "1:252681830236:web:89b7acc32a0e2dead28b99",
  measurementId: "G-5Y031M1E8R"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});