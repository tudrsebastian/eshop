import { MantineProvider, Center } from '@mantine/core';

export default function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Center maw={400} h={100} mx="auto">
				<div>Welcome to Mantine!</div>
			</Center>
		</MantineProvider>
	);
}
