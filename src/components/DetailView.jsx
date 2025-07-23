import React from 'react';
        import { useParams, Link } from 'react-router-dom';

const DetailView = ({ spaceData }) => {
  const { id } = useParams();
  
  const spaceItem = spaceData.find(item => item.date === id);
  
  if (!spaceItem) {
    return (
      <div className="detailView">
        <div className="notFound">
          <h2>Space Item Not Found</h2>
          <p>We couldn't find the space item you're looking for.</p>
          <Link to="/" className="backButton">Back to Dashboard</Link>
        </div>
      </div>
              );
        }
  
    return (
    <div className="detailView">
      <Link to="/" className="backButton">← Back to Dashboard</Link>
      
      <div className="detailContent">
        <h2>{spaceItem.title}</h2>
        
        <div className="detailMedia">
          {spaceItem.media_type === 'image' ? (
            <img src={spaceItem.url} alt={spaceItem.title} className="detailImage" />
          ) : (
            <div className="videoContainer">
              <iframe
                src={spaceItem.url}
                title={spaceItem.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        
        <div className="detailInfo">
          <div className="infoSection">
            <h3>Date</h3>
            <p>{new Date(spaceItem.date).toLocaleDateString()}</p>
          </div>
          
          <div className="infoSection">
            <h3>Category</h3>
            <p>{spaceItem.category}</p>
          </div>
          
          {spaceItem.copyright && (
            <div className="infoSection">
              <h3>Copyright</h3>
              <p>{spaceItem.copyright}</p>
            </div>
          )}
          
          <div className="infoSection">
            <h3>Full Description</h3>
            <p>{spaceItem.explanation}</p>
          </div>
          
          {spaceItem.hdurl && (
            <div className="infoSection">
              <h3>HD Image</h3>
              <a href={spaceItem.hdurl} target="_blank" rel="noopener noreferrer" className="hdLink">
                View High Definition Image
              </a>
            </div>
          )}
        </div></div> </div>
  );
};

export default DetailView;
