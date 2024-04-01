import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import "./layout.css";

function ShopLayout() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <div className="image-container">
              <Image src="main.jpg" fluid />
              <h1 className="text-overlay">Empowering Your Fashion Choices!</h1>
              <Stack gap={3}>
                <Link
                  to="/womens-wear"
                  className="p-2 text-overlay overlayList1"
                >
                  Women's Wear
                </Link>
                <Link to="/mens-wear" className="p-2 text-overlay overlayList2">
                  Men's Wear
                </Link>
                <Link
                  to="/electronics"
                  className="p-2 text-overlay overlayList3"
                >
                  Electronics
                </Link>
              </Stack>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShopLayout;
