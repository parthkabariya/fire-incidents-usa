import React, {useRef, useEffect, useState} from 'react';

import mapboxgl from '!mapbox-gl';

import FireIncidents from 'fire-incidents-usa';
import FireImage from './icons/fire.png';

mapboxgl.accessToken = 'Mapbox Token';

/**
 *
 * @return {Fire}
 */
export default function Fire() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-100.62);
  const [lat, setLat] = useState(39);
  const [zoom, setZoom] = useState(3.6);
  const [onOffControl, setOnOffControl] = useState(true);
  const [loader, setLoader] = useState(false);
  const fireRef = useRef(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container">
        {loader && (
          <div className="loader">
            <span>Loading...</span>
          </div>
        )}
        <FireIncidents
          ref={fireRef}
          options={{
            opacity: 0.9,
            fireImage: FireImage,
            fireImageSize: 0.4,
          }}
          getLoader={(isLoader) => setLoader(isLoader)}

        ></FireIncidents>
        <div className="control-bar">
          <div className="controls">
            <div
              onClick={() => {
                fireRef.current.trunOnFireIncidents(onOffControl, map.current);
                setOnOffControl(!onOffControl);
              }}
            >
              {onOffControl ? 'Turn On' : 'Turn Off'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
