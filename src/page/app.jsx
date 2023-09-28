import React from 'react';
import ReactDOM from 'react-dom';
import GetInput from '../components/InputSection';
import Title from '../components/title';

const App = ()=> {
    return (
        <>
        {/* <Title/> */}
        <h3 class ="title">Track your expense</h3>
        <GetInput/>
        </>
    );
}
export default App;