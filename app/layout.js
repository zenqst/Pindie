import './globals.css';
import { App } from "@/app/App";

export const metadata = {
	title: 'Pindie — инди-игры рядом',
	description: 'Портал инди-игр от студентов Яндекс Практикума',
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body>
				<App>
					{children}
				</App>
			</body>
		</html>
	);
}
