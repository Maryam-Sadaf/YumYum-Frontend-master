import {react,memo} from 'react';
const Child = ({Learning}) => {
    console.log("child components")
    return (
        <>
            <div className="header-section">
                <h2>child components </h2>
            </div>
        </>
    );
};

export default memo (Child);
//in react mn hota ha refantial equality jb b page reload hota ha function recreate hoti hn 