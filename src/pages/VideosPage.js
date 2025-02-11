import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "react-bootstrap";
// import Videos from "../components/Videos";
import "../components-css/videosPage.css";

const REACT_APP_YOUTUBE_API_KEY = 'AIzaSyDfprX9qzw1swtMgNWYpJt5-Zjx4QV0jxI';

const VideosPage = () => {
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
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&type=video&key=${REACT_APP_YOUTUBE_API_KEY}&order=viewCount`
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

  useEffect(() => {
    fetchVideos("welding instruction")
  }, []);

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
          <h3 className="text-dark text-center border-bottom p-3">Videos</h3>
        </Col>
      </Row>
      <Row className="py-4">
          {categories.map((category) => (
        <Col className="d-flex flex-wrap gap-2 justify-content-center">
            <Button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`btn ${
                selectedCategory === category.id
                  ? "btn-primary"
                  : "btn-outline-primary btn-light"
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
        <Row className="row row-cols-1 row-cols-md-3 g-3">
          {videos.map((video) => (
            <Col key={video.id}>
              <Card className="card h-100">
                <CardBody className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.snippet.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </CardBody>
                <CardBody>
                  <CardTitle>{video.snippet.title}</CardTitle>
                  <CardText className="text-muted">
                    {parseInt(video.statistics.viewCount).toLocaleString()}{" "}
                    views
                  </CardText>
                </CardBody>
              </Card>
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

export default VideosPage;