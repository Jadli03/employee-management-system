import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import {Col,Row} from 'react-bootstrap/esm';

const CreateEmployee = () => {
  return (
    <Container> 
      <LinkContainer to="/">
       <Button variant="primary" className="mb-3" >
          Back
        </Button>
        </LinkContainer>
        <Form>
        <Row>
          <Col sm={12} md={6} lg={6}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
           <Form.Control type="text" 
             placeholder="Enter Name" 
              name="ename"
              value=""
               />
         </Form.Group>
          </Col>

          <Col sm={12} md={6} lg={6}>
          <Form.Group className="mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" 
      placeholder="Enter email" 
      name="email"
      value=""
      />
     </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6} lg={6}>
          <Form.Group className="mb-3">
    <Form.Label>Active </Form.Label><br/>
    <Form.Check
            inline
            label="Yes"
            name="group1"
            type="radio"
            id="inline-radio-1"

          />
          <Form.Check
            inline
            label="No"
            name="group1"
            type="radio"
            id="inline-radio-2"
          />
    </Form.Group>
          </Col>

          <Col sm={12} md={6} lg={6}>
          <Form.Group className="mb-3">
      <Form.Label>Role</Form.Label>
      <Form.Control type="text" 
      placeholder="Enter Role" 
      name="role"
      value=""
      />
    </Form.Group> 
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6} lg={6}>
    <Form.Group className="mb-3">
      <Form.Label>Bank Account No.</Form.Label>
      <Form.Control type="text" 
      placeholder="Enter Bank Account No." 
      name="accnumber"
      value=""
      />
    </Form.Group> 
          </Col>

          <Col sm={12} md={6} lg={6}>
          <Form.Group className="mb-3">
      <Form.Label>Client Name</Form.Label>
      <Form.Control type="text" 
      placeholder="Enter Client Name" 
      name="cname"
      value=""
      />
    </Form.Group> 
          </Col>
        </Row>

        <Row> 
          <Col sm={12} md={6} lg={6}> 
          <Form.Group className="mb-3">
      <Form.Label>Bank Name</Form.Label>
      <Form.Control type="text" 
      placeholder="Enter Bank Name" 
      name="bank"
      value=""
      />
    </Form.Group>  
          </Col>
        </Row>

        <Row> 
        <Button style={{width: '100px'}} variant="primary" type="submit"> 
      Register
    </Button>
        </Row>

        </Form>
    </Container>
  )
}

export default CreateEmployee;