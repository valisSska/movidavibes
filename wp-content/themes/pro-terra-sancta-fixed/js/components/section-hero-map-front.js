import React from 'react';
import GoogleMap from 'google-map-react';

const buildCategoryMarker = (category) => {
  switch (Number.parseInt(category, 10)) {
    case 9830:
    case 9749:
    case 9442:
    case 9832:
    case 9836:
      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-blu.png';
    case 9750:
    case 9443:
    case 9829:
    case 9835:
    case 9833:
      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-orange.png';
    case 9741:
    case 9441:
    case 9831:
    case 9837:
    case 9834:
      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-red.png';
    default:
      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-blu.png';
  }
};

const ProjectMarker = ({ areaId }) => (
  <div className="marker-container position-relative">
    <div>
      <div className="project-marker">
        <img className="icon-marker" src={buildCategoryMarker(areaId)} alt="project-marker" />
      </div>
    </div>
  </div>
);

const SectionMap = ({ title, textContent, textColor, lat, lng, areaId }) => (
  <div className="row">
    <div className="col-12">
      <div className="section-title" style={{ color: textColor }}>
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
    <div className="col-12 col-md-6 text-uppercase pb-3">
      <GoogleMap
        apiKey={'AIzaSyAzShHNzNBSmSFnek_bSrHQTczX9xmzjv4'}
        center={[Number.parseFloat(lat), Number.parseFloat(lng)]}
        zoom={9}
      >
        <ProjectMarker lat={Number.parseFloat(lat)} lng={Number.parseFloat(lng)} areaId={areaId} />
      </GoogleMap>
    </div>
    <div className="col-12 col-md-6 section-left-block">
      <div>
        <div className="section-text" style={{ color: textColor }} dangerouslySetInnerHTML={{ __html: textContent }} />
      </div>
    </div>
  </div>
);

export default SectionMap;
