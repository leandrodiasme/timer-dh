import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
                    rel="stylesheet"/>
                </Head>
                <body>
                  <Main/>
                  <NextScript/>
                </body>
            </Html>
        );  
    }
}