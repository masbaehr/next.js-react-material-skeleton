import HeadTemplate from '../components/HeadTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import { showNotification } from '../components/GlobalUtils';


function Index (props){

  React.useEffect(() => {
     console.log("useEffect");
  }, []);

  return(
    <React.Fragment>
        <HeadTemplate></HeadTemplate>
        <Header></Header>
        <main>
            <h1>Welcome!</h1>
            <h2>User...</h2>

            <Button variant="contained" color="secondary" startIcon={<QuestionAnswer />} onClick={event => {
                showNotification('Well done...', "success");
            }}>
                Click me!
            </Button>

        </main>
        <Footer></Footer>
    </React.Fragment>
    )
}

 

Index.getInitialProps = async function (ctx) {

    return {
        footer: "company",
        userData: {}
    };
};

export default Index;

