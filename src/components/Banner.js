import '../styles/Banner.css';

function Banner() {
    const title = "La maison Jungle";
    return (
        <div className="lmj-banner">
            <h1>{ title.toUpperCase() }</h1>
        </div>
    );
}

export default Banner;