import React from 'react';
import { connect } from 'react-redux';

const Root = () =>
  (
    <div>
      <p>hello world</p>
    </div>
  );

export default connect()(Root);
