import { useEffect, useState } from "react";
import "./index.css"

export default function ImageLoader({ imageUrl, imageName }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    const image = new Image();

    image.onload = () => {
      setIsLoading(false);
    };

    image.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };

    image.src = imageUrl;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [imageUrl]);

  return (
    <div className="background-wrapper">
        <div className="imageName">{imageName}</div>
      {isLoading && (
        <div className="background-loader">
          <div className="spinner" />
        </div>
      )}

      {hasError && (
        <div className="background-error">
          Background image could not be loaded.
        </div>
      )}

      <div
        className={`background-image ${
          isLoading || hasError ? "background-hidden" : "background-loaded"
        }`}
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      />
    </div>
  );
}