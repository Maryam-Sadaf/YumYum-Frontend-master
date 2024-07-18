import React, { useState ,useEffect} from 'react';
import Child from './Child';

const UseMemo = () => {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(0);
    function handleAdd() {
        setAdd(add + 1);
    }
    function handleSubtract() {
        setMinus(minus - 1);
    }

    // function Learning() {
    //     // console.log("*******");
    //     // return add * 10;
    // }
    const Learning = useEffect( () => {

    },[minus]); 

    return (
        <>
            <div className="bgh">
                <h2>learn usememo</h2>
                {/* Learning={Learning} */}
                <Child Learning={Learning}/>
                {/* {multiply()}<br/> */}
                <button onClick={handleAdd}>Additional</button>
                <span>{add}</span><br/>
                <button onClick={handleSubtract}></button>
                <span>{add}</span><br/>
                
            </div>
        </>
    );
};

export default UseMemo;
