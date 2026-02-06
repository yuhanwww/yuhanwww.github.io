import React, { useState, useEffect } from 'react';
import Papa from "papaparse";
import './publication.css';
import pubCSV from '../../assets/files/publication.csv';

const PubList = () => {
    const [data, setData] = useState([]);
    const [selectedTag, setSelectedTag] = useState("All");

    useEffect(() => {
        Papa.parse(pubCSV, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                // Transform CSV data to match your Data format
                const transformedData = results.data.map((row) => ({
                    id: parseInt(row.id),
                    year: row.year,         
                    authors: row.authors, 
                    paper: row.paper,
                    venue: row.venue,        
                    title: row.paper,
                    category: row.year ? row.year.split(',').map(t => t.trim()) : [],
                    link: row.link
                }));
                
            setData(transformedData);
            console.log(transformedData);
        },
        error: (error) => {
            console.error('Error parsing CSV:', error);
        }
        });
    }, []);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    const filteredData = selectedTag === "All"
        ? data
        : data.filter((pub) => pub.category.includes(selectedTag));

    const allTags = ["All", ...new Set(data.flatMap((pub) => pub.category))];

    return (
            <div className="pub-list">
                <div className='filter-container'>
                    <div className="filter-list">
                        {allTags.map((tag) => (
                            <span
                                key={tag}
                                className={`filter-tag ${selectedTag === tag ? 'selected' : ''}`}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                        </span>
                        ))}
                    </div>
                </div>

            <div className="container">
            {filteredData.map((pub) => (
                <div key={pub.id} className="pub-list_content">
                    <p>
                        {pub.authors} {pub.year}. {pub.paper}. In <i>{pub.venue}</i>.&nbsp;
                        {pub.link && (
                        <><a href={pub.link} target="_blank" rel="noopener noreferrer">
                            {pub.link}
                        </a></>
                        )}
                    </p>
                </div>
            ))}
        </div>
      </div>
  );
}

export default PubList;