import './LoadingScreen.css';

function LoadingScreen() {
    return (
        <>
            <div className="warning">
                WARNING
                The contents of this website may contain explicit material.
                <button>Over 18</button>
                <button>Cancel</button>
            </div>
            <div className="loading">
            </div>
        </>
    );
}

export default LoadingScreen;
