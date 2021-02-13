import React from 'react';
import { Row } from 'reactstrap';
import { Colxx } from '../common/CustomBootstrap';

const Footer: React.FC = () => (
  <footer className="page-footer">
    <div className="footer-content">
      <div className="container-fluid">
        <Row>
          <Colxx xxs="12" sm="6">
            <p className="mb-0 text-muted"> </p>
          </Colxx>
          <Colxx className="col-sm-6 d-none d-sm-block">
            <ul className="breadcrumb pt-0 pr-0 float-right">
              <li className="breadcrumb-item mb-0">
                <a href="https://www.htw-berlin.de/impressum/">Impressum</a>
              </li>
              <li className="breadcrumb-item mb-0">
                <a href="https://www.htw-berlin.de/datenschutz/">Datenschutz</a>
              </li>
            </ul>
          </Colxx>
        </Row>
      </div>
    </div>
  </footer>
);

export default Footer;
