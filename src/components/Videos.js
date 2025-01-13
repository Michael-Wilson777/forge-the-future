import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'weldingtipsandtricks', buttonLabel: 'Weldingtipsandtricks.com', searchTerm: "Weldingtipsandtricks.com"},
    { id: 'weld.com', buttonLabel: 'Weld.com', searchTerm: "Weld.com" },
    { id: 'miller', buttonLabel: 'Miller', searchTerm: 'Miller Welding' },
    { id: 'lincoln', buttonLabel: 'Lincoln', searchTerm: 'Lincoln Welding' },
    { id: 'aluminum', buttonLabel: 'Welding Aluminum', searchTerm: 'Aluminum Welding' },
    { id: 'oxy/acetylene', buttonLabel: 'Oxy/Acetylene', searchTerm: 'Oxy/Acetylene Cutting/Brazing' },
    { id: 'brazing', buttonLabel: 'Brazing', searchTerm: 'Brazing' },
    { id: 'aws', buttonLabel: "AWS", searchTerm: "American Welding Society" },
    { id: 'osha', buttonLabel: 'OSHA', searchTerm: 'OSHA/OSHA10/OSHA30/OSHA regulations' },//More to follow
  ];

  const fetchVideos = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      console.log("Fetching videos for searchTearm", searchTerm);

      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&order=viewCount`
      );

      const searchData = await searchResponse.json();
      console.log("Search response:", searchData);

      if (searchData.error) {
        throw new Error(searchData.error.message);
      }

      if (!searchData.items) {
        throw new Error("No items in search response");
      }

      const videoIds = searchData.items
        .map((item) => item.id.videoId)
        .join(",");
      console.log("Video IDs:", videoIds);

      const statsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );

      const statsData = await statsResponse.json();
      console.log("Stats response:", statsData);

      if (!statsData.items) {
        throw new Error("No items in stats response");
      }

      setVideos(statsData.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError(error.message);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    const category = categories.find((cat) => cat.id === categoryId);

    if (category) {
      fetchVideos(category.searchTerm);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-dark">Educational Videos</h3>
        </Col>
      </Row>
      <Row>
          {categories.map((category) => (
        <Col className="d-flex flex-wrap gap-2 justify-content-center">
            <Button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`text-light btn ${
                selectedCategory === category.id
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
            >
              {category.buttonLabel}
            </Button>
        </Col>
          ))}
      </Row>

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
        <Row className="row row-cols-1 row-cols-md-2 g-4">
          {videos.map((video) => (
            <Col key={video.id} className="col">
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
                    {parseInt(video.statistics.viewCount).toLocaleString()}{" "}
                    views
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}

      {!loading && (!videos || videos.length === 0) && (
        <p className="text-center text-muted">No videos found</p>
      )}
    </Container>
  );
};

export default Videos;
