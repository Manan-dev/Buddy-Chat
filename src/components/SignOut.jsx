import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';

const style = {
	button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

const SignOut = () => {
	const signOutUser = () => {
		signOut(auth);
	};
	return (
		<button onClick={() => signOutUser()} className={style.button}>
			Sign Out
		</button>
	);
};

export default SignOut;
