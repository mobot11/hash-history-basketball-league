import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import slug from 'slug';

const CustomLink = ({ to, children }) => {
  return <Route path={to.pathname} />;
};

const Sidebar = ({ title, list, loading, location, map }) => {
  return loading === true ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">{list.map(item => <div>{item}</div>)}</ul>
    </div>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
};

export default Sidebar;
