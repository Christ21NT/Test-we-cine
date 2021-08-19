import './Header.css';

const Header = ({ onChangeMovieSearch }) => (
    <div className="header">
        <div className="title-site">A propos de We Movies</div>
        <div className="recherche-box">
            <input className="recherche-container" type="text" onChange={onChangeMovieSearch} />
            <span><i className="fa fa-search" /></span>
        </div>
    </div>
);

export default Header;