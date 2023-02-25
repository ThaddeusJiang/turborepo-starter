import "../src/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const client = new QueryClient();
export const decorators = [
  (Story) => (
    <QueryClientProvider client={client}>
      <Story />
    </QueryClientProvider>
  ),
];
