(()=>{var e={703:(e,r,i)=>{"use strict";var t=i(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,r,i,a,o,n){if(n!==t){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function r(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:a};return i.PropTypes=i,i}},697:(e,r,i)=>{e.exports=i(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function i(t){var a=r[t];if(void 0!==a)return a.exports;var o=r[t]={exports:{}};return e[t](o,o.exports,i),o.exports}i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};(()=>{"use strict";i.r(t),i.d(t,{default:()=>s});const e=require("react");var r=i.n(e),a=i(697),o=i.n(a),n=(0,e.forwardRef)((function(i,t){var a,o=null!==(a=i.options.opacity)&&void 0!==a?a:.9,n=i.options.fireImage,s=i.options.fireImageSize;(0,e.useImperativeHandle)(t,(function(){return{trunOnFireIncidents:function(e,r){e?(i.getLoader(!0),c(r),u(r),r.on("idle",(function(){i.getLoader(!1)}))):(r.getSource("fire-inci-usa-weather-fire")&&(r.getLayer("fire-inci-usa-weather-fire")&&r.removeLayer("fire-inci-usa-weather-fire"),r.removeSource("fire-inci-usa-weather-fire")),r.getSource("fire-inci-usa-weather-fire-poly")&&(r.getLayer("fire-inci-usa-weather-fire-poly")&&r.removeLayer("fire-inci-usa-weather-fire-poly"),r.removeSource("fire-inci-usa-weather-fire-poly")),r.off("sourcedata",(function(){})))}}}));var c=function(e){e.loadImage(n,(function(r,i){if(r)throw r;e.hasImage("fire-image")||(e.addImage("fire-image",i),f(e))}))},f=function(e){e.addSource("fire-inci-usa-weather-fire",{type:"geojson",data:"https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Current_WildlandFire_Locations/FeatureServer/0/query?outFields=*&where=1%3D1&f=geoJSON"}),e.addLayer({id:"fire-inci-usa-weather-fire",type:"symbol",source:"fire-inci-usa-weather-fire",layout:{"icon-image":"fire-image","icon-size":s},paint:{"icon-opacity":o}})},u=function(e){e.addSource("fire-inci-usa-weather-fire-poly",{type:"geojson",data:"https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Current_WildlandFire_Perimeters/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geoJSON",buffer:0,maxzoom:16}),e.addLayer({id:"fire-inci-usa-weather-fire-poly",type:"fill",source:"fire-inci-usa-weather-fire-poly",paint:{"fill-color":"#BE4A31","fill-opacity":o}})};return r().createElement(r().Fragment,null,i.childern)}));n.propTypes={options:o().array.isRequired,childern:o().any,fireImage:o().string,getLoader:o().func},n.displayName="FireIncidents";const s=n})(),module.exports=t})();