export function smoothScroll(top: number, left: number, element: HTMLElement, step: number = 10) {
    const initialScrollLeft = element.scrollLeft;
    const initialScrollTop = element.scrollTop;
    let distanceLeft = left - initialScrollLeft;
    let distanceTop = top - initialScrollTop;
    if(getComputedStyle(element).scrollBehavior === 'smooth'){
      element.scrollBy({
        top: distanceTop,
        left: distanceLeft,
        behavior: 'smooth'
      });
      return;
    }
  
    function doScroll() {
      let leftPart = 0;
      let topPart = 0;
      if (distanceLeft > 0) {
        leftPart = Math.min(step, distanceLeft);
      }
      if (distanceLeft < 0) {
        leftPart = Math.max(-step, distanceLeft);
      }
  
  
      if (distanceTop > 0) {
        topPart = Math.min(step, distanceTop);
      }
      if (distanceTop < 0) {
        topPart = Math.max(-step, distanceTop);
      }
  
      distanceLeft -= leftPart;
      distanceTop -= topPart;
      if (topPart === 0 && leftPart === 0) {
        return;
      }
      element.scrollBy({
        top: topPart,
        left: leftPart,
        behavior: 'smooth'
      });
      requestAnimationFrame(doScroll);
    }
    doScroll();
  }