// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3IbprFSjAa5qAAnTcHdIKT2mfeVcXI1s",
  authDomain: "quickquiz-88641.firebaseapp.com",
  projectId: "quickquiz-88641",
  storageBucket: "quickquiz-88641.firebasestorage.app",
  messagingSenderId: "183369823810",
  appId: "1:183369823810:web:5160541c7c49543ab7dfdb"
};

// Emails autorisés pour l'admin
const ADMIN_EMAILS = [
  "anoirelbouzaidi2@gmail.com" 

// Initialisation
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Configuration Cloudinary
const CLOUDINARY_CLOUD_NAME = "nu5tw53t";
const CLOUDINARY_UPLOAD_PRESET = "quiz_preset"; 
