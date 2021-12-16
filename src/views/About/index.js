import React, { useEffect } from 'react'

export default function About() {

  useEffect(() => {
    document.title = "About - CHRIS FOLLEN"
 }, []);

  return (
    <h1>ABOUT</h1>
  );
}