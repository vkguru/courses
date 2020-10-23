import React from 'react';

export default function DownloadLink(props) {
  return (
    <>
      <a href={props.src} download>{props.downloadName}</a>
    </>
  )
}
