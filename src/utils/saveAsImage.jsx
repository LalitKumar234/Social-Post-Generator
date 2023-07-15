import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const SaveDivAsImage = () => {
  const divRef = useRef(null);

  const saveAsImage = () => {
    if (divRef.current) {
      html2canvas(divRef.current)
        .then((canvas) => {
          // Convert canvas to image data URL
          const dataURL = canvas.toDataURL('image/png');

          // Create a link and trigger download
          const link = document.createElement('a');
          link.download = 'div_as_image.png';
          link.href = dataURL;
          link.click();
        })
        .catch((error) => {
          console.error('Error converting div to image:', error);
        });
    }
  };

  return (
    <div>
      <div ref={divRef} style={{ /* Your styles here */ }}>
        {/* Your content inside the div */}
        <h1>Hello, World!</h1>
        <p>This is a div container to save as an image.</p>
      </div>
      <button onClick={saveAsImage}>Save as Image</button>
    </div>
  );
};

export default SaveDivAsImage;
