import { useSelector } from "react-redux";
import VideoHomePage from "../../assets/video-homepage.mp4";
import { useNavigate } from "react-router";
const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <video muted autoPlay loop>
        <source src={VideoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="title-2">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </div>
        <div className="title-3">
          {isAuthenticated === false ? (
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Get's started. It's free
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/users");
              }}
            >
              {" "}
              Doing Quiz Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
