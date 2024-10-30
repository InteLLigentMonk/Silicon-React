import { NavLink, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="container">
      <section className="breadcrumbs">
        <ul className="breadcrumb-list">
          <li>
            <i class="fa-solid fa-house fa-xs"></i>
            <NavLink to="/">Home</NavLink>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            return (
              <>
                <span key={name}>&#8811;</span>
                <li>
                  <NavLink to={routeTo}>{name.replace(/-/g, ' ')}</NavLink>
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
export default Breadcrumb;
