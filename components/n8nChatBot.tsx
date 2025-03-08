import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const App = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'https://n8n.authenlink.com/webhook/24deff8e-6d6b-48eb-b0ec-5c66ff27b7e4/chat'
		});
	}, []);

	return (<div></div>);
};