import React, { useState, useEffect } from 'react';
import GoogleMap from 'google-map-react';
import locale from '../locale.json';

const buildTitleText = (text) => {
  if (text.length > 52) {
    return `${text.slice(0, 52)} ...`;
  }
  return text;
};

const buildCategoryText = (el) => {
  if (el.project && el.project[0] && el.project[0].name) {
    return el.project[0].name;
  }

  return '-';
};

const buildCategoryColor = (el) => {
  let category = 0;
  if (el.project && el.project[0] && el.project[0].term_id) {
    category = el.project[0].term_id;
  }

  switch (category) {
    case 9830:
    case 9749:
    case 9442:
    case 9832:
    case 9836:
      return '#374856';
    case 9750:
    case 9443:
    case 9829:
    case 9835:
    case 9833:
      return '#E26E0E';
    case 9741:
    case 9441:
    case 9831:
    case 9837:
    case 9834:
      return '#D31418';
    default:
      return '#506679';
  }
};

const buildCategoryMarker = (el) => {
  let category = 0;
  if (el.project && el.project[0] && el.project[0].term_id) {
    category = el.project[0].term_id;
  }

  switch (category) {
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

const fetchTaxonomy = () =>
  fetch(`/wp-json/proterrasancta-api/v1/categories?lang=${window.language}`)
    .then(
      (response) => response.json(),
      (error) => {
        throw new TypeError(error);
      },
    )
    .then((elements) => elements)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`error: ${error}`);
      return [];
    });

const fetchRegions = () =>
  fetch(`/wp-json/proterrasancta-api/v1/regions?lang=${window.language}`)
    .then(
      (response) => response.json(),
      (error) => {
        throw new TypeError(error);
      },
    )
    .then((elements) => elements)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`error: ${error}`);
      return [];
    });

const fetchPosts = (cat, region, postType) => {
  // eslint-disable-next-line eqeqeq
  const category = cat && cat !== '-1' && cat != '1' ? `&project_name=${cat}` : '';
  // eslint-disable-next-line eqeqeq
  const regions = region && region !== '-1' && region != '1' ? `&regione=${region}` : '';
  const type = postType && postType !== '-1' ? `&post_type=${postType}` : '';
  return fetch(
    `/wp-json/proterrasancta-api/v1/posts?per_page=100&offset=0${type}${category}${regions}&lang=${window.language}`,
  )
    .then(
      (response) => response.json(),
      (error) => {
        throw new TypeError(error);
      },
    )
    .then((posts) => posts)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`error: ${error}`);
      return [];
    });
};

const loadMore = (cat, region, postType, posts, setPosts) => {
  fetchPosts(cat, region, postType).then((result) => {
    if (result.length > 0) {
      const updatedPosts = [...posts];
      updatedPosts.push(...result);
      setPosts(updatedPosts);
    }
  });
};

const ProjectMarker = ({ link, text, project, $hover, el }) => (
  <div className="marker-container position-relative">
    <a href={link}>
      <div className="project-marker">
        <img className="icon-marker" src={buildCategoryMarker(el)} alt="project-marker" />
      </div>
    </a>
    {$hover && (
      <div className="marker-box box arrow-bottom">
        <div className="title" dangerouslySetInnerHTML={{ __html: text }} />
        <div className="category" dangerouslySetInnerHTML={{ __html: project }} />
      </div>
    )}
  </div>
);

const ProjectMap = ({ postType }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const [label, setLabel] = useState(locale[window.language].all);
  const [labelRegion, setLabelRegion] = useState(locale[window.language].allRegion);
  const [selected, setSelected] = useState('1');
  const [selectedRegion, setSelectedRegion] = useState('1');
  const [btnvalue, setBtnvalue] = useState('0');

  const control = document.querySelector('#kt-layout-id_d00ef6-62');
  const click1 = document.querySelector('#btn-1');
  const click2 = document.querySelector('#btn-2');
  const click3 = document.querySelector('#btn-3');

  useEffect(() => {
    loadMore(selected, selectedRegion, postType, posts, setPosts);
    fetchTaxonomy().then((result) => {
      result.unshift({ id: 1, name: locale[window.language].all });
      setCategories(result);
    });
    fetchRegions().then((result) => {
      result.unshift({ id: 1, name: locale[window.language].all });
      setRegions(result);
    });
    if (control) {
      click1.addEventListener('click', function () {
        setBtnvalue('1');
        const idCat = 9442;
        setPosts([]);
        setLabel(locale[window.language].educazione);
        setSelected(9442);
        loadMore(idCat, selectedRegion, postType, [], setPosts);
      });
      click2.addEventListener('click', function () {
        setBtnvalue('2');
        const idCat = 9441;
        setPosts([]);
        setLabel(locale[window.language].Emergenza);
        setSelected(9441);
        loadMore(idCat, selectedRegion, postType, [], setPosts);
      });
      click3.addEventListener('click', function () {
        setBtnvalue('3');
        const idCat = 9443;
        setPosts([]);
        setLabel(locale[window.language].conservazione);
        setSelected(9443);
        loadMore(idCat, selectedRegion, postType, [], setPosts);
      });
    }
  }, []);

  const changeCategory = (el) => {
    const idCat = el.id === 1 ? '-1' : el.id;
    setPosts([]);
    if (el.id === 1) {
      setBtnvalue(0);
    } else if (el.id === 9442) {
      setBtnvalue(1);
    } else if (el.id === 9441) {
      setBtnvalue(2);
    } else if (el.id === 9443) {
      setBtnvalue(3);
    }
    setLabel(el.id === 1 ? locale[window.language].all : el.name);
    setSelected(el.id);
    loadMore(idCat, selectedRegion, postType, [], setPosts);
  };

  const changeRegion = (el) => {
    const idRegion = el.id === 1 ? '-1' : el.id;
    setPosts([]);
    setLabelRegion(el.id === 1 ? locale[window.language].allRegion : el.name);
    setSelectedRegion(el.id);
    loadMore(selected, idRegion, postType, [], setPosts);
  };

  return (
    <div className="row justify-content-center">
      <div className="col d-flex">
        <div className="dropdown mx-auto my-5">
          <div
            className="label-select mx-auto dropdown-toggle selezionato"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            value={btnvalue}
          >
            {label}
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {categories.map((el, index) => (
              <li key={index}>
                <div
                  className={`dropdown-item${el.id === selected ? ' selected' : ''}`}
                  onClick={() => changeCategory(el)}
                >
                  {el.id === 1 ? locale[window.language].all : el.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown mx-auto my-5">
          <div
            className="label-select mx-auto dropdown-toggle"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            {labelRegion}
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {regions.map((el, index) => (
              <li key={index}>
                <div
                  className={`dropdown-item${el.id === selected ? ' selected' : ''}`}
                  onClick={() => changeRegion(el)}
                  dangerouslySetInnerHTML={{ __html: el.id === 1 ? locale[window.language].allRegion : el.name }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="d-none d-md-block col-12 position-relative map-container mb-5">
        <GoogleMap
          apiKey={'AIzaSyAzShHNzNBSmSFnek_bSrHQTczX9xmzjv4'}
          center={[30.514845975220997, 34.90351614306644]}
          zoom={6}
        >
          {posts
            .filter((el) => el.latitude && el.longitude)
            .map((el, index) => (
              <ProjectMarker
                key={index}
                lat={el.latitude}
                lng={el.longitude}
                text={el.title}
                project={el.project[0].name}
                link={el.link}
                el={el}
              />
            ))}
        </GoogleMap>
      </div>
      {posts.map((el, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-4 news-column projects">
          <a
            href={el.link}
            className="shadow-md news-card position-relative"
            style={{ backgroundColor: buildCategoryColor(el), height: '100%', width: '100%' }}
          >
            <div>
              <div className="news-teaser-title pt-2" dangerouslySetInnerHTML={{ __html: buildTitleText(el.title) }} />
              <div className="news-teaser-heading">{buildCategoryText(el)}</div>
              <div
                className="news-teaser-excerpt"
                dangerouslySetInnerHTML={{ __html: `${el.excerpt.slice(0, 100)} (...)` }}
              />
            </div>
          </a>
          <div
            className="shadow-md news-card-hover"
            style={{ backgroundColor: buildCategoryColor(el), height: '100%', width: '100%' }}
          >
            <a href={el.link}>
              <img
                height="231"
                width="360"
                src={el['image-thumb']}
                alt={el['image-thumb']}
                loading="lazy"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
              <div className="text-white position-absolute fixed-bottom" style={{ padding: '40px' }}>
                <div
                  className="news-teaser-title pt-2"
                  dangerouslySetInnerHTML={{ __html: buildTitleText(el.title) }}
                  style={{ fontSize: '20px' }}
                />
                <div className="news-teaser-heading" style={{ fontSize: '16px' }}>
                  {buildCategoryText(el)}
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectMap;
