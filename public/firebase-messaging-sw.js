
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');


firebase.initializeApp({
    apiKey: "AIzaSyBitV6MCQj4INcj_yfW4ljILifa-7ziRik",
    authDomain: "pwa-push-notification-8649b.firebaseapp.com",
    projectId: "pwa-push-notification-8649b",
    storageBucket: "pwa-push-notification-8649b.firebasestorage.app",
    messagingSenderId: "504230264197",
    appId: "1:504230264197:web:6723b541451cb8fd2498ec",
    measurementId: "G-HL2TYM3QF6"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        image: payload.notification.image,
      
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});