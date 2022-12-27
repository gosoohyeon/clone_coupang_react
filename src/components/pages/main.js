import 'assets/scss/page/main.scss';
import { useEffect, useState } from 'react';



function Main() {
  const [selectImg, setSelectImg] = useState(1);
  useEffect(()=>{
    let currentBnr = selectImg;
    function timer(){
      currentBnr = currentBnr >= 4 ? 1 : currentBnr + 1;
      setSelectImg(currentBnr);
    }
    let tick = setTimeout( timer, 1000);
    return ()=>clearInterval(tick);
  }, [selectImg])
    return (
      <div>
          {/* S: 메인배너 */}
          <article className="mainBnr">
            <div className="mainBnr__item">
              <div className={`mainBnr__image ${selectImg === 1 ? 'mainBnr__image--isActive' : ''}`}>1</div>
              <div className={`mainBnr__image ${selectImg === 2 ? 'mainBnr__image--isActive' : ''}`}>2</div>
              <div className={`mainBnr__image ${selectImg === 3 ? 'mainBnr__image--isActive' : ''}`}>3</div>
              <div className={`mainBnr__image ${selectImg === 4 ? 'mainBnr__image--isActive' : ''}`}>4</div>
            </div>
            <div className='mainBnr__buttons'>
              <button type="button" className={`mainBnr__btn ${selectImg === 1 ? 'mainBnr__btn--isActive' : ''}`} onMouseOver={()=>{setSelectImg(1)}}>1</button>
              <button type="button" className={`mainBnr__btn ${selectImg === 2 ? 'mainBnr__btn--isActive' : ''}`} onMouseOver={()=>{setSelectImg(2)}}>2</button>
              <button type="button" className={`mainBnr__btn ${selectImg === 3 ? 'mainBnr__btn--isActive' : ''}`} onMouseOver={()=>{setSelectImg(3)}}>3</button>
              <button type="button" className={`mainBnr__btn ${selectImg === 4 ? 'mainBnr__btn--isActive' : ''}`} onMouseOver={()=>{setSelectImg(4)}}>4</button>
            </div>
          </article>
          {/* E: 메인배너 */}
      </div>
    );
  }
  
  export default Main;
  