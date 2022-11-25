import StickyHeader from "./components/StickyHeader/StickyHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (
    <section className="App no-padmar">
      <StickyHeader />
      <Container fluid className="fill-height">
        <Row>
          <Col xs={2}>
          <p>
            This is a test column
          </p>
          </Col>
          <Col>
          <p>
            This is a second test column
          </p>
          </Col>
        </Row>
        
      </Container>
      <PageFooter />
      
    </section>
  );
}

export default App;
