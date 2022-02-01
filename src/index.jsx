import React, {
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import PropTypes from "prop-types";

const FireIncidents = forwardRef((props, ref) => {
  const currentOpacity = props.options.opacity ?? 0.9;
  const fireImage = props.options.fireImage;
  const fireImageSize = props.options.fireImageSize ?? 0.3;
  const [layerFn1] = useState(() => (e) => {
    props.getFireDetails(e);
  });
  const [layerFn2] = useState(() => (e) => {
    e.target.getCanvas().style.cursor = 'pointer';
  });
  const [layerFn3] = useState(() => (e) => {
    e.target.getCanvas().style.cursor = '';
  });

  useImperativeHandle(ref, () => ({
    trunOnFireIncidents(isOn, map) {
      if (isOn) {
        props.getLoader(true);
        loadFireImage(map);
        loadFirePoly(map);

        map.on("idle", () => {
          props.getLoader(false);
        });
        map.on('click', 'fire-inci-usa-weather-fire', layerFn1);
        map.on('mouseenter', 'fire-inci-usa-weather-fire', layerFn2);
        map.on('mouseleave', 'fire-inci-usa-weather-fire', layerFn3);
        map.on('click', 'fire-inci-usa-weather-fire-poly', layerFn1);
        map.on('mouseenter', 'fire-inci-usa-weather-fire-poly', layerFn2);
        map.on('mouseleave', 'fire-inci-usa-weather-fire-poly', layerFn3);
      } else {
        if (map.getSource("fire-inci-usa-weather-fire")) {
          map.off('click', 'fire-inci-usa-weather-fire', layerFn1);
          map.off('mouseenter', 'fire-inci-usa-weather-fire', layerFn2);
          map.off('mouseleave', 'fire-inci-usa-weather-fire', layerFn3);
          if (map.getLayer("fire-inci-usa-weather-fire")) {
            map.removeLayer("fire-inci-usa-weather-fire");
          }
          map.removeSource("fire-inci-usa-weather-fire");
        }
        if (map.getSource("fire-inci-usa-weather-fire-poly")) {
          map.off('click', 'fire-inci-usa-weather-fire-poly', layerFn1);
          map.off('mouseenter', 'fire-inci-usa-weather-fire-poly', layerFn2);
          map.off('mouseleave', 'fire-inci-usa-weather-fire-poly', layerFn3);
          if (map.getLayer("fire-inci-usa-weather-fire-poly")) {
            map.removeLayer("fire-inci-usa-weather-fire-poly");
          }
          map.removeSource("fire-inci-usa-weather-fire-poly");
        }
      }
    },
  }));

  const loadFireImage = (map) => {
    map.loadImage(fireImage, function(error1, image) {
      if (error1) throw error1;
      if (!map.hasImage("fire-image")) {
        map.addImage("fire-image", image);
        loadFireLocations(map);
      } else {
        loadFireLocations(map);
      }
    });
  };

  const loadFireLocations = (map) => {
    map.addSource("fire-inci-usa-weather-fire", {
      type: "geojson",
      data: "https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Current_WildlandFire_Locations/FeatureServer/0/query?outFields=*&where=1%3D1&f=geoJSON",
    });
    map.addLayer({
      id: "fire-inci-usa-weather-fire",
      type: "symbol",
      source: "fire-inci-usa-weather-fire",
      layout: {
        "icon-image": "fire-image",
        "icon-size": fireImageSize,
      },
      paint: {
        "icon-opacity": currentOpacity,
      },
    });
  };

  const loadFirePoly = (map) => {
    map.addSource("fire-inci-usa-weather-fire-poly", {
      type: "geojson",
      data: "https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Current_WildlandFire_Perimeters/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geoJSON",
      // data: "https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Fire_History_Perimeters_Public/FeatureServer/0/query?outFields=poly_IncidentName&where=1%3D1&f=geoJSON",
      buffer: 0,
      maxzoom: 16,
    });

    map.addLayer({
      id: "fire-inci-usa-weather-fire-poly",
      type: "fill",
      source: "fire-inci-usa-weather-fire-poly",
      paint: {
        "fill-color": "#BE4A31",
        "fill-opacity": currentOpacity,
      },
    });
  };
  return <>{props.childern}</>;
});

FireIncidents.propTypes = {
  options: PropTypes.array.isRequired,
  childern: PropTypes.any,
  fireImage: PropTypes.string.isRequired,
  getLoader: PropTypes.func.isRequired,
  getFireDetails: PropTypes.func.isRequired,
};
FireIncidents.displayName = "FireIncidents";
export default FireIncidents;
