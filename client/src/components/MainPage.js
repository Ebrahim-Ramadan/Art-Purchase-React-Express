import React from 'react';


const MainPage = () => {
  const generateRandomPosition = (width, height) => {
    return {
      top: Math.random() * (window.innerHeight - height),
      left: Math.random() * (window.innerWidth - width),
    };
  };

  const generateRandomSize = (min, max) => {
    return Math.random() * (max - min) + min*1.5;
  };

  const [imgs, setImgs] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;

    const fetchImages = async () => {
      const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=30`);
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
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {imgs && imgs.length > 0 ? (
        <div className="homepage">
          {imgs.map((img, id) => {
            const width = generateRandomSize(100, 300);
            const height = generateRandomSize(100, 300);
            const { top, left } = generateRandomPosition(width, height);
            return (
              <div key={id}>
                <img
                  alt={id + 1}
                  src={img.url}
                  style={{
                    borderRadius:'5px',
                    transition: '0.5s',
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
