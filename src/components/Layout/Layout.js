import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.scss';

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawe, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
