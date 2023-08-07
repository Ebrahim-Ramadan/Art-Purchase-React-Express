import React from 'react';

const MIN = 6; // MINimum value
const MAX = 50; // MAXimum value

const MainPage = () => {
  const generateRandomPosition = (width, height) => {
    return {
      top: Math.random() * (window.innerHeight - height),
      left: Math.random() * (window.innerWidth /1.8- width),
    };
  };

  const generateRandomSize = (min, max) => {
    return Math.random() * (max - min) + min*1.5;
  };

  const [imgs, setImgs] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;
    const offset = Math.floor(Math.random() * (MAX - MIN) + MIN);

    const fetchImages = async () => {
      const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=10`);
      const data = await response.json();

      if (isMounted) {
        setImgs(data.photos);
      }
    };

    fetchImages();

    return () => {
      // Cleanup: Cancel any ongoing fetch and update the mounted status
      isMounted = false;
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mounts

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '50%', height: '100%' }}>
      {imgs && imgs.length > 0 ? (
        <div className="homepage">
          {imgs.map((img, id) => {
            const width = generateRandomSize(200, 200);
            const height = generateRandomSize(200, 200);
            const { top, left } = generateRandomPosition(width, height);
            return (
              <div key={id}>
                <img
                  alt={id + 1}
                  src={img.url}
                  style={{
                    borderRadius:'7px',
                    transition: '0.5s ease-in',
                    cursor: 'zoom-in',
                    position: 'absolute',
                    top: `${top}px`,
                    left: `${left}px`,
                    width: `${width}px`,
                    height: `${height}px`,
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
};

export default MainPage;
