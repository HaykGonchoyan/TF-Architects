import { useEffect, useState } from "react";
import "./index.css"

export default function ImageLoader({ imageUrl, imageName }) {
  // Last two successfully loaded images; the newest sits on top and fades in over the previous one
  const [layers, setLayers] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);

    const image = new Image();

    image.onload = () => {
      setLayers(prev => [...prev.filter(url => url !== imageUrl), imageUrl].slice(-2));
    };

    image.onerror = () => {
      setHasError(true);
    };

    image.src = imageUrl;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [imageUrl]);

  const isLoading = layers.length === 0 && !hasError;

  return (
    <div className="background-wrapper">
        <div className="imageName">{imageName}</div>
      {isLoading && (
        <div className="background-loader">
          <div className="spinner" />
        </div>
      )}

      {hasError && layers.length === 0 && (
        <div className="background-error">
          Background image could not be loaded.
        </div>
      )}

      {layers.map(url => (
        <div
          key={url}
          className="background-image"
          style={{
            backgroundImage: `url("${url}")`,
          }}
        />
      ))}
    </div>
  );
}
