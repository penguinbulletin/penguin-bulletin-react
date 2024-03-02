import './LoadingScreen.css';

function IsHomePage() {
    return window.location.pathname == "/";
}

function LoadingScreen() {
    return (
        <>
            {/* <div className="warning">
                WARNING
                The contents of this website may contain explicit material.
                <button>Over 18</button>
                <button>Cancel</button>
            </div> */}
            {IsHomePage() ?
                <>
                    <div className="loading">
                    </div>
                    <div className="loading-text">
                        The bulletin board of art and projects
                        <br></br>
                        Welcome to the Penguin Bulletin
                    </div>
                </>
                :
                <></>
            }
        </>
    );
}

export default LoadingScreen;
