import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase';
import Message from './Message';
import SendMessage from './SendMessage';

const style = {
	main: `flex flex-col p-[10px]`,
	mainStyle: {
		height: `calc(100vh - 60px - 56px - 20px)`,
		overflowY: `scroll`,
		position: `relative`,
	},
};

const Chat = ({ user }) => {
	const [messages, setMessages] = useState([]);
	const scroll = useRef();

	useEffect(() => {
		const q = query(collection(db, 'messages'), orderBy('timestamp'));
		const unsubscribe = onSnapshot(q, querySnapshot => {
			let messages = [];
			querySnapshot.forEach(doc => {
				messages.push({ ...doc.data(), id: doc.id });
			});
			setMessages(messages);
		});
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (user != null) {
			scroll.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [messages]);

	return (
		<>
			<main className={style.main} style={style.mainStyle}>
				{messages &&
					messages.map(message => (
						<Message key={message.id} message={message} />
					))}
			</main>
			<span ref={scroll}></span>
			<SendMessage scroll={scroll} />
		</>
	);
};

export default Chat;
