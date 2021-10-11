import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux'

export type RoutesNames = 'Signup' | 'Main' | 'WaterShop';

export const DEFAULT_AUTH_ROUTE: RoutesNames = 'WaterShop';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <Component router={router} {...pageProps}></Component>
      </Provider>
    </>
  );
}
export default MyApp;
