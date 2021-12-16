import React, { useEffect } from 'react'

export default function Dev() {

  useEffect(() => {
    document.title = "Dev - CHRIS FOLLEN"
 }, []);

  return (
    <h1>DEV</h1>
  );
}