import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "../redux/store";
import NextNprogress from 'nextjs-progressbar';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <NextNprogress
                color="#29D"
                startPosition={0}
                stopDelayMs={200}
                height={5}
                showOnShallow={true}
                options={{showSpinner: false}}
            />
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
