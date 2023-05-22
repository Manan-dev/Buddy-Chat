// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDXP6hNNE7d0sprNlfr_Jh1bl6VjAceeg8',
	authDomain: 'fir-chat-app-83be4.firebaseapp.com',
	projectId: 'fir-chat-app-83be4',
	storageBucket: 'fir-chat-app-83be4.appspot.com',
	messagingSenderId: '260461188592',
	appId: '1:260461188592:web:94c5d658531dbc8e41f935',
	measurementId: 'G-4JMZK9WNJ7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
