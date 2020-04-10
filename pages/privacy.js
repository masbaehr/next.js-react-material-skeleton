import HeadTemplate from '../components/HeadTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = props => (
   
    <React.Fragment>
            <HeadTemplate></HeadTemplate>
            <Header></Header>
            <main>
                <h1>Privacy policy!</h1>
                <h2>Lorem ipsum...</h2>
            </main>
            <Footer></Footer>
        </React.Fragment>
    );

    Privacy.getInitialProps = async function (ctx) {
  
      return {
          json: {},
          userData: {}
      };
  };

  export default Privacy;


  