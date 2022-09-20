import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = WrappedComponent => props => {
  const params = useParams();
  let location = useLocation();
  let navigate = useNavigate();

  return (
    <WrappedComponent
      {...props}
      router={{ location, navigate, params }}
    />
  );
};

export default withRouter;