import React, { useEffect, useState } from 'react';
import GalleryImages from './gallery_images';
import './gallery.css';

import DataCrafts from './data_crafts';
import DataCrochets from './data_crochets';
import DataDigitals from './data_digitals';
import DataFineArts from './data_fine_arts';
import DataPhotos from './data_photos';

const sections = [
  { title: 'Fine Art',           data: DataFineArts, id: 'fine-art' },
  { title: 'Digital Works',      data: DataDigitals, id: 'digital'  },
  { title: 'Crafts',             data: DataCrafts,   id: 'crafts'   },
  { title: 'Crochet Collection', data: DataCrochets, id: 'crochet'  },
  { title: 'Photos',             data: DataPhotos,   id: 'photos'   },
];

const Gallery = () => {
  const [activeId, setActiveId] = useState(sections[0].id);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveId(id);
  };

  useEffect(() => {
    const observers = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="gallery section">
      <nav className="gallery-nav">
        {sections.map(({ title, id }) => (
          <a key={id} href={"#" + id} onClick={function(e) { handleClick(e, id); }} className={"gallery-nav__link " + (activeId === id ? "active-link" : "")}>
            {title}
          </a>
        ))}
      </nav>

      <div className="gallery-content">
        {sections.map(({ data, id }) => (
          <div key={id} id={id} className="gallery-section">
            <GalleryImages images={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;