import Document, {Html, Main, NextScript, Head} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="icon" href="./favicon.png"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
                <style jsx>{`
                  :global(.js-focus-visible) :focus:not(.focus-visible) {
                    outline: none;
                  `}</style>
            </Html>
        )
    }
}

export default MyDocument