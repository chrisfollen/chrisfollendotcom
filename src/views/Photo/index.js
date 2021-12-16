import React, { useEffect } from 'react'

export default function Photo() {

  useEffect(() => {
    document.title = "Photo - CHRIS FOLLEN"
 }, []);

  return (
    <h1>PHOTO</h1>
  );
}