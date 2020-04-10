import Head from 'next/head';

const HeadTemplate = props => {
  
    return (
        <Head>
            <title>Hello World from HeadTemplate!</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <meta name="description" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam"/>
            
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
            <link rel="manifest" href="/site.webmanifest"></link>
          />
        </Head>
    );
  }
  
  export default HeadTemplate;