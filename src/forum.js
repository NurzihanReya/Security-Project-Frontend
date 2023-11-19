import React from 'react';
import Container from 'react-bootstrap/Container';
import AppHeader from './components/navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ForumAccordion from './components/accordion';
import ProfileImageDemo from './components/images/ques3.png'

export default function DiscussionForum() {
  return (
    <>
    <AppHeader></AppHeader>
    <Container>
        <div className='row'>
        <ForumAccordion
            title="Welcome to Discussion Forum"
            description="This is a peer to peer forum. No Spam / Advertising / Self-promote in the forums is not allowed. Do not
            post copyright-infringing material. Do not post “offensive” posts, links or images. Do not cross post
            questions. Remain respectful of other members at all times."
        />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='my-4'>
          <h2>Start a Discussion</h2>
    </div>
    <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Problem Title</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">
        Keep your title as short as possible
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Desctiption</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">
        Elaborate Your Concern
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='my-4'>
          <h2>Browse Question</h2>
    </div>

    <div className="container mb-5" id="ques">
        <div className="media my-3">
            <img
            style={{ borderRadius: '50%', height: '54px', width: '54px', padding: '5px' }}
            src={ProfileImageDemo}
            alt="Profile"
            />
            <div className="media-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h5 className="mt-0"><a className="text-dark" href="#postlink">How to determine candidate key?</a></h5>
                <div className="font-weight-bold my-0">Asked by: .. at time</div>
            </div>
            <p>
            Given the Relation R with attributes ABCDE. You are given the following dependencies: A - B, BC - E, and ED - A. I already have the answer which is CDE, ACD, and BCD. I just need to know how to do it. Thanks. 
            </p>
        </div>
    </div>
    </div>
    




    </div>
    </Container>       
    </>
  );
}