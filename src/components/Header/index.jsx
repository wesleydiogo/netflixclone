import './Header.css';
import logo from './netflix-logo.png';
import iconProfile from './Netflix-avatar.png'

export default ({black}) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src={iconProfile} alt="" />
                </a>
            </div>
        </header>
    )
}