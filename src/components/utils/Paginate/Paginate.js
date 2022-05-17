import React from 'react';
import styles from './Paginate.module.scss';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';

const Paginate = ( {postsPerPage, totalPosts, paginate, currentPage} ) =>{
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const previousPage = (currentPage) => {
    if(currentPage === 1) return null;
    return paginate(currentPage-1);
  };

  const nextPage = (currentPage) => {
    if(currentPage === pageNumbers.length) return null;
    return paginate(currentPage+1);
  };

  return (
    <div className={styles.root}>
      <Pagination className={styles.pagination}>
        <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1}/>
        <Pagination.Prev onClick={() => previousPage(currentPage)} disabled={currentPage === 1}/>
        {pageNumbers.map(number => (
          <Pagination.Item className={styles.pageItem} key={number} disabled={number === currentPage} onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => nextPage(currentPage)} disabled={pageNumbers.length === currentPage}/>
        <Pagination.Last onClick={() => paginate(pageNumbers.length)} disabled={pageNumbers.length === currentPage}/>
      </Pagination>
    </div>
  );
};

Paginate.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  currentPage: PropTypes.number,
  paginate: PropTypes.func,
};

export default Paginate;
