  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyARDxDlTMVvpm_deaut9qwy2qrtWG9rZBQ",
    authDomain: "asterisk-search.firebaseapp.com",
    projectId: "asterisk-search",
    storageBucket: "asterisk-search.firebasestorage.app",
    messagingSenderId: "416571459462",
    appId: "1:416571459462:web:7b75ee6fbea358c13c8e07",
    measurementId: "G-NQYXW6TM7"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);