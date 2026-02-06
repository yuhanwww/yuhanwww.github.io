import React from 'react';
import PubList from './pub_list';

const Publication = () => {
  return (
    <section className="pub section" id='publication'>
        <h2 className="section_title">Publication</h2>
        <div className="container">
            <PubList/>      
        </div>
    </section>
  )
}

export default Publication;