import 'assets/scss/layout/search.scss';

function Search() {
    return (
      <article className="search">
        <h1 hidden>검색하기</h1>
        <div className="search__category">
            <details>
                <summary className='search__category-selected'>전체</summary>
                <div className="search__category-list">
                    <button>전체</button>
                    <button>여성패션</button>
                    <button>남성패션</button>
                    <button>남녀 공용 의류</button>
                </div>
            </details>
        </div>
        <div className='search__box'>
            <input type="search" name="" id="" className='search__input' />
            <div className="search__list" hidden>
                <h2 className="search__list-title">최근 검색어</h2>
                <ul>
                    <li><button>강아지 간식</button></li>
                    <li><button>강아지 옷</button></li>
                    <li><button>강아지 장난감</button></li>
                </ul>
            </div>
        </div>
        <button className="search__btn search__btn--voice"><span hidden>음성으로 검색하기</span></button>
        <button className="search__btn search__btn--search"><span hidden>검색하기</span></button>
      </article>
    );
  }
  
  export default Search;
  