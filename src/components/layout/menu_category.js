import 'assets/scss/layout/menu_category.scss'

function Category() {
  return (
    <div className='category'>
      <ul className="category__1dep">
        <li>
          <h2 className="category__1dep-title"><button>패션의류/잡화</button></h2>
          <ul className="category__2dep">
            <li>
              <h3 className="category__2dep-title"><button>여성패션</button></h3>
              <ul className="category__3dep">
                <li>
                  <h4 className="category__2dep-title"><button>의류</button></h4>
                  <h4 className="category__2dep-title"><button>신발</button></h4>
                  <h4 className="category__2dep-title"><button>속옷/잠옷</button></h4>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="category__2dep-title"><button>남성패션</button></h3>
              <ul className="category__3dep">
                <li>
                  <h4 className="category__2dep-title"><button>의류</button></h4>
                  <h4 className="category__2dep-title"><button>신발</button></h4>
                  <h4 className="category__2dep-title"><button>속옷/잠옷</button></h4>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Category;
