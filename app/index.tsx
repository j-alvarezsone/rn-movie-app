import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Redirect } from 'expo-router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Redirect href='/' />
    </QueryClientProvider>
  );
};
export default App;
