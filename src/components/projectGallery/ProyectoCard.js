//import { Col } from "react-bootstrap";
import "../../color/projectGallery/ProjectCard.css"

export const ProjectCardBackend = ({
  title,
  imgUrl
}) => {
  return (
    <div className="proj-backend-imgbx">
      <div className="backend-gif-container">
        <img src={imgUrl} alt={title} className="backend-gif-image" />
      </div>
    </div>
  );
};


export const ProjectCard = ({
  title,
  description,
  imgUrl,
  showOverlay = true
}) => {

  const projectText = {
    featuresTitle: "Características",
  };

  return (
    <div className="proj-imgbx">
      <div className="gif-container">
        <img src={imgUrl} alt={title} className="gif-image" />
        {showOverlay && (
          <div className="proj-txtx">
            <h4>{projectText.featuresTitle}</h4>
            {Array.isArray(description) ? (
              <ul>
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <span>{description}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};