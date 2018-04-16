importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
  apiKey: "AIzaSyDWOyJRrlZh1RH9rHTDCKzy1y4dfabhBe0",
  authDomain: "pwa-study-6f69b.firebaseapp.com",
  databaseURL: "https://pwa-study-6f69b.firebaseio.com",
  projectId: "pwa-study-6f69b",
  storageBucket: "pwa-study-6f69b.appspot.com",
  messagingSenderId: "540065615980"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const title = 'Hello World';
  const options = {
    body: payload.data.body
  };
  return self.registration.showNotification(title, options);
});