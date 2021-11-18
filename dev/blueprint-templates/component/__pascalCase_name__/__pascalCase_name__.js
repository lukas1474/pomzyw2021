import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './{{pascalCase name}}.module.scss';

const Component = ({ className, children }) => {
  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col>
            <h2>{{pascalCase name}}</h2>
          </Col>
        </Row>
        <main>{children}</main>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as {{pascalCase name}}, Component as {{pascalCase name}}Component };
