import { Footer } from '@components/Footer/Footer';
import './globals.css';
import { Header } from '@components/Header/Header';

export const metadata = {
	title: 'Pindie — инди-игры рядом',
	description: 'Портал инди-игр от студентов Яндекс Практикума',
	openGraph: {
		title: 'Лучшие инди-игры в одном месте',
		description: 'Инди-игры от студентов Яндекса для каждго онлайн без регистрации и СМС',
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
