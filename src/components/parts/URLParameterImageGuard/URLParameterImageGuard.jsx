import React, { useState, useEffect } from 'react';

function URLParameterImageGuard({
  children,
  parameterName,
  shouldDisplayImageIfNoValidParameter = false,
  acceptedValues,
}) {
  const [shouldRenderImage, setShouldRenderImage] = useState(false);
  useEffect(() => {
    let url = new URL(window.location.href);
    let params = url.searchParams;
    let kvParam;
    kvParam = params.get('kv');

    if (!kvParam || !acceptedValues.includes(kvParam)) {
      setShouldRenderImage(shouldDisplayImageIfNoValidParameter);
      return;
    }

    const shouldDisplayImage = kvParam === parameterName;

    if (shouldDisplayImage) {
      setShouldRenderImage(true);
    }
  }, []);
  if (shouldRenderImage) {
    console.log('rendering image');
    return children;
  }
  return null;
}

export default URLParameterImageGuard;
