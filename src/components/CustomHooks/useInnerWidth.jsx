import React, { useEffect, useState } from 'react'

const useInnerWidth = () => {

  const [innerWidth, setinnerWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => {
      setinnerWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  return innerWidth;
}

export default useInnerWidth
