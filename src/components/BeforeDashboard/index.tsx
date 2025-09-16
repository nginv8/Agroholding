/* eslint-disable tailwindcss/no-custom-classname */
import { Banner } from '@payloadcms/ui/elements/Banner';

import React from 'react';

import './index.scss';

const baseClass = 'before-dashboard';

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner type="success">
        <h4>Payload CMS User Guide</h4>
      </Banner>

      <div className={`${baseClass}__content`}>
        <div>
          <section>
            <h5>What are Collections?</h5>
            <p>
              Collections are the main data type in Payload. They contain documents with fields that
              you define. For example: Posts, Products, Users, Pages etc.
            </p>
            <ul>
              <li>
                <strong>Posts</strong> - for blog posts
              </li>
              <li>
                <strong>Products</strong> - for products
              </li>
              <li>
                <strong>Pages</strong> - for static pages
              </li>
              <li>
                <strong>Media</strong> - for files and images
              </li>
            </ul>
          </section>
        </div>

        <div>
          <section>
            <h5>What are Globals?</h5>
            <p>
              Globals are single documents for general site settings that are used throughout the
              project.
            </p>
            <ul>
              <li>
                <strong>Header</strong> - header settings
              </li>
              <li>
                <strong>Footer</strong> - footer settings
              </li>
              <li>
                <strong>Contact Info</strong> - contact information
              </li>
              <li>
                <strong>Product Page Settings</strong> - product page settings
              </li>
              <li>
                <strong>Post Page Settings</strong> - post page settings
              </li>
            </ul>
          </section>
        </div>
      </div>

      <section>
        <h5>Useful links:</h5>
        <ul>
          <li>
            <a href="https://payloadcms.com/docs" target="_blank" rel="noopener noreferrer">
              Official Payload Documentation
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              View Site
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default BeforeDashboard;
