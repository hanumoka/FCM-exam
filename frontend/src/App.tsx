import React, {useEffect, useState} from 'react';
import Layout from "./lib/components/layout";

function App() {

    const [message, setMessage] = useState([]);

    // useEffect(() => {
    //     fetch("/hello")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then(function (data) {
    //             setMessage(data);
    //         });
    // }, []);


    return (
        <div className="App">
            <Layout>
                본문내용
            </Layout>
        </div>
    );
}

export default App;
