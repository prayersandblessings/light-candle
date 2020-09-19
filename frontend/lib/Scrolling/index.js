import {useState, useEffect} from 'react'

const useAutoScrolling = () => {
    const [isScrolling, setIsScrolling] = useState(true)
    const [scrollY, setScrollY] = useState(0)
    const onWheelContainer = () => {
      setIsScrolling(false)
      if(isScrolling){
        console.log(window.scrollY);
      }
    }
    useEffect(() => {
      if(isScrolling && scrollY <= window.innerHeight+100) {
        setTimeout(()=>{
          setScrollY(scrollY+1)
          window.scrollTo({
            top: scrollY
          });
        },25)
      }
    });
    return onWheelContainer;
  }

export default useAutoScrolling;