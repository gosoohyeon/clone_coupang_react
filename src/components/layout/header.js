import Category from 'components/layout/Menu_category';
import Search from 'components/layout/Search';

import 'assets/scss/layout/header.scss'

function Header() {
  return (
    <div className='container'>
      <header className='header'>
          <details className='header__category'>
            <summary className="category__button"><h1>카테고리</h1></summary>
            <Category />
          </details>
          <h1 className='header__logo'><span hidden>coupang</span></h1>
          <div className="header__search">
            <Search />
          </div>
          <button className='header__btn header__btn--mycoupang'>마이쿠팡</button>
          <button className='header__btn header__btn--cart'>장바구니</button>
          <div className='header__aside-menu'>
            <button>로켓배송</button>
            <button>로켓프레시</button>
            <button>크리스마스</button>
            <button>쿠팡비즈</button>
            <button>로켓직구</button>
            <button>골드박스</button>
            <button>와우회원할인</button>
            <button>이벤트/쿠폰</button>
            <button>착한상점</button>
            <button>기획전</button>
            <button>여행/티켓</button>
          </div>
      </header>
    </div>
  );
}

export default Header;
