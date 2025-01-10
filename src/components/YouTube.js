import React, { useState } from 'react';
import { Container } from "react-bootstrap";

const SafetyVideos = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [videos, setVideos] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'weldingtipsandtricks', label: 'Weldingtipsandtricks.com', searchTerm: "Weldingtipsandtricks.com"},
    { id: 'weld.com', label: 'Weld.com', searchTerm: "Weld.com" },
    { id: 'miller', label: 'Arc Academy', searchTerm: 'Arc Academy Welding Videos' },
    { id: 'aws', label: "AWS", searchTerm: "American Welding Society" },
  ];


  const fetchVideos = async (searchTerm) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Fetching videos for term:', searchTerm);
      console.log('API Key exists:', !!process.env.REACT_APP_YOUTUBE_API_KEY);

      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&order=viewCount`
      );
      
      const searchData = await searchResponse.json();
      console.log('Search response:', searchData);

      if (searchData.error) {
        throw new Error(searchData.error.message);
      }

      if (!searchData.items) {
        throw new Error('No items in search response');
      }
      
      const videoIds = searchData.items.map(item => item.id.videoId).join(',');
      console.log('Video IDs:', videoIds);
      
      const statsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const statsData = await statsResponse.json();
      console.log('Stats response:', statsData);

      if (!statsData.items) {
        throw new Error('No items in stats response');
      }
      
      setVideos(statsData.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError(error.message);
      setVideos([]); // Reset videos on error
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      fetchVideos(category.searchTerm);
    }
  };

  return (
    <Container>
      <div className="mb-4">
        <h3 className="text-center mb-3">Educational Videos</h3>
        
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`btn ${
                selectedCategory === category.id ? 'btn-primary' : 'btn-outline-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading && videos && videos.length > 0 && (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {videos.map(video => (
            <div key={video.id} className="col">
              <div className="card h-100">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.snippet.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{video.snippet.title}</h5>
                  <p className="card-text text-muted">
                    {parseInt(video.statistics.viewCount).toLocaleString()} views
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && (!videos || videos.length === 0) && (
        <p className="text-center text-muted">No videos found</p>
      )}
    </Container>
  );
};

export default SafetyVideos;