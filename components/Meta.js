import Head from 'next/head'

const Meta = () => (
  <div>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Passion+One" rel="stylesheet" />

    </Head>
    <style jsx global>{`
        * {
            margin: 0;
            padding: 0;
            font-family: "Roboto";
            color: #333;
        }

        body { 
            background: #ededed;
        }
        
        a {
            text-decoration: none;
            color: #722f37;
        }

        a:hover {
            color: #a5434f;
        }
        
        .head {
            font-family: 'Passion One';
            font-size: 2em;
        }

        .price {
            font-family: 'Passion One';
            font-size: 2em;
        }

        .placeholder {
            width: 86px;
            height: 86px;
        }

        .outline {
            //outline: 1px solid red;
        }
        
        button {
            font-weight: 500;
            text-transform: uppercase;
            padding: 0.6em 0.8em;
            border: 0;
            background: none;
            opacity: 0.8;
        }

        button:hover {
            cursor: pointer;
            opacity: 1;
        }

        button.delete {
            color: #ef5858;
            margin-left: 1em;
        }

        input[type=text] {
            padding: 0.5em;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }
    `}</style>
  </div>
)

export default Meta 