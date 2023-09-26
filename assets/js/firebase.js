
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js"
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBXBXjeIls11pXtX1XD2IWtSF0zCw2h3gI",
    authDomain: "it-light-landing.firebaseapp.com",
    projectId: "it-light-landing",
    storageBucket: "it-light-landing.appspot.com",
    messagingSenderId: "1070047017704",
    appId: "1:1070047017704:web:76dcf906ae4659f64b675d",
    measurementId: "G-VHMT633T4H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  console.log(app)

class NewsLetter {        
    dbRef = collection(db, "newsletter");  // Use collection() to access a collection
    
    async subscribeToNewsletter(email) {
        const data = { email: email };
        try {
            const docRef = await addDoc(this.dbRef, data);  // Use addDoc() to add a document
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
        return data;
    }
}
// ...
document.getElementById('subscribeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    var email = document.getElementById('emailInput').value;
    const alreadySubscribed = localStorage.getItem('subscribed');
    
    if (!alreadySubscribed) {
        const newsletter = new NewsLetter(); // Create an instance of NewsLetter class
        const success = await newsletter.subscribeToNewsletter(email); // Call the method on the instance

        if (success) {
            localStorage.setItem('subscribed', 'true');
            alert("Udało się zapisać"); // Show success message
        } else {
            alert("Wystąpił błąd. Spróbuj ponownie później."); // Show error message
        }
    } else {
        alert("Już zapisano adres email."); // Show message if already subscribed
    }
});
// ...
// Check if the target date is in localStorage
let targetDate = localStorage.getItem('targetDate4');

// If not, set the target date to November 13, 2023
if (!targetDate) {
    targetDate = new Date(2023, 10, 13, 0, 0, 0); // November is 10 (zero-based index)
    localStorage.setItem('targetDate4', targetDate);
} else {
    targetDate = new Date(targetDate);
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Countdown Complete';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `;
    }
}

// Check if the target date for countdown2 is in localStorage
let targetDate2 = localStorage.getItem('targetDate3');

// If not, set the target date to January 2, 2024
if (!targetDate2) {
    targetDate2 = new Date(2024, 0, 2, 0, 0, 0); // January is 0 (zero-based index)
    localStorage.setItem('targetDate3', targetDate2);
} else {
    targetDate2 = new Date(targetDate2);
}

// Update the countdown2 every second
const countdownInterval2 = setInterval(updateCountdown2, 1000);

function updateCountdown2() {
    const now = new Date();
    const timeDifference = targetDate2 - now;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval2);
        document.getElementById('countdown2').innerHTML = 'Countdown Complete';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown2').innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `;
    }
}
