import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Row className="d-flex justify-content-center mt-3">
      <Col lg={8} className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className="page-item"
                onClick={() => paginate(number)} className="page-link">
                {number}
              </li>
            ))}
          </ul>
        </nav>
      </Col>
    </Row>
  )
}
