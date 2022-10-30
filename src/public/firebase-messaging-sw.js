importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyASQrwJjpT0zHkwzu33sU7FBCA5y81b2Y4",
  authDomain: "efiriyad.firebaseapp.com",
  projectId: "efiriyad",
  storageBucket: "efiriyad.appspot.com",
  messagingSenderId: "799528008421",
  appId: "1:799528008421:web:385b7dab9e9b502f97f20c",
  measurementId: "G-8SH5VPT952",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
