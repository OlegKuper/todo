import React from 'react';

import './search-panel.css';

class SearchPanel extends React.Component{
    // state= {
    //   label: ''
    // }


  render() {

    const {onSearch, label} = this.props
    return (
        <input type="text"
               onChange={onSearch}
               value={label}
               className="form-control search-input"
               placeholder="type to search" />
    );
  }
};

export default SearchPanel;
