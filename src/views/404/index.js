import React, { useEffect } from 'react'

export default function NotFound() {

  useEffect(() => {
    document.title = "404 - CHRIS FOLLEN"
 }, []);

  return (
    <h1>404</h1>
  );
}