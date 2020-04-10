import Head from 'next/head';

const HeadTemplate = props => {
  
    return (
        <Head>
            <title>Hello World from HeadTemplate!</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <meta name="description" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam"/>
            <link rel="shortcut icon" href="favicon.ico"></link>
          />
        </Head>
    );
  }
  
  export default HeadTemplate;