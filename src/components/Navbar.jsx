import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import SignIn from './SignIn';
import SignOut from './SignOut';

const style = {
	nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
	heading: `text-white text-3xl`,
};

const Navbar = () => {
	const [user] = useAuthState(auth);
	console.log(user);

	return (
		<div className={style.nav}>
			<h1 className={style.heading}>Firebase Chat App</h1>
			{user ? <SignOut /> : <SignIn />}
		</div>
	);
};

export default Navbar;
