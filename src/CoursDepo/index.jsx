import React, { useState } from 'react';
import { Form, Button, Row, Modal } from 'react-bootstrap';
import './index.css';
import '../bootstrap.min.css';

const CoursDepo = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => setShowSuccessModal(false);

  return (
    <div>
      <h2 className='monEspace'>Déposer un cours</h2>
      <Form onSubmit={submitHandler} className='mt-3'>
        <Form.Group controlId='intitule'>
          <Form.Label style={{ color: 'black' }}>Intitulé</Form.Label>
          <Form.Control type='text' placeholder='Entrez intitulé du cours/' />
        </Form.Group>
        <Form.Group controlId='module' className='mt-3'>
          <Form.Label style={{ color: 'black' }}>Module</Form.Label>
          <Form.Control type='text' placeholder='Entrez le module du cours' />
        </Form.Group>
        <Form.Group controlId='description' className='mt-3'>
          <Form.Label style={{ color: 'black' }}>Description</Form.Label>
          <Form.Control as='textarea' rows={3} placeholder='Entrez la description du cours' />
        </Form.Group>
        <Form.Group controlId='file' className='mt-3'>
          <Form.Label style={{ color: 'black' }}>Importer un fichier</Form.Label>
          <Form.Control type='file' />
        </Form.Group>
        <Row className='justify-content-center mt-3'>
          <Button type='submit' variant='primary' style={{ width: '150px', color: 'black' }}>
            Soumettre
          </Button>
        </Row>
      </Form>

   
      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
        <Modal.Header closeButton={false}>
          <Modal.Title style={{ color: 'green' }}>Succès!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: 'black' }}>Le cours est déposé avec succès.</Modal.Body>
        <Modal.Footer>
          <Button style={{ color: 'red' }} variant='primary' onClick={handleCloseSuccessModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CoursDepo;
