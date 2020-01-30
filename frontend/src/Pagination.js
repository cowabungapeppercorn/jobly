import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const activePage = (page, currentPage) => {
    if (page === currentPage) {
      return "active-link page-item page-link"
    } else {
      return "page-item page-link"
    }
  }

  return (
    <Row className="d-flex justify-content-center mt-3">
      <Col lg={8} className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className={activePage(number, currentPage)}
                onClick={() => paginate(number)}>
                {number}
              </li>
            ))}
          </ul>
        </nav>
      </Col>
    </Row>
  )
}
