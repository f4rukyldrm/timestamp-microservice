import { useState, useEffect } from 'react'
import Prism from "prismjs";
import "../../node_modules/prismjs/themes/prism-tomorrow.css";
import CodeSection from './CodeSection';

function Main() {

    const url = 'https://f4rukyldrm-timestamp-microservice.onrender.com';
    let code = `fetch('${url}/api/2015-12-25')
    .then(response => response.json())
    .then(json => console.log(json));`;
    const [output, setOutput] = useState(`{}`);
    const [outputMsg, setOutputMsg] = useState("");
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        Prism.highlightAll();

        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return function cleanup() { clearInterval(timer) };

    }, [output]);

    const handleClick = () => {
        setOutput(`{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`);
        setOutputMsg("Congrats you've made your first call to my Timestamp Microservice! 😃 🎉");
    }

    const refactor = (request) => {
        return `fetch('${url}/api/${request}')
        .then(response => response.json())
        .then(json => console.log(json));`;
    }


    return (
        <main className="mx-auto w-4/5 h-full mt-[100px] mb-[50px]">
            <section className='mb-[150px] scroll-mt-[100px]' id='demo'>
                <h2 className='text-4xl mb-7'>Try it</h2>
                <p className='mb-5'>Run this code here, in a console or from any site:</p>
                <pre className='rounded-lg'>
                    <code className='language-javascript block p-2'>{code}</code>
                </pre>
                <button className='bg-green-500 hover:bg-green-700 font-bold px-4 py-1.5 my-5 rounded text-white' onClick={handleClick}>Run script</button>
                <pre className='rounded-lg'>
                    <code className='language-javascript block p-2'>{output}</code>
                </pre>
                <p className='mt-6'>{outputMsg}</p>
            </section>
            <section id='guide' className='scroll-mt-[150px]'>
                <h2 className='text-4xl mb-7'>Guide</h2>
                <p className='mb-16'>Below you'll find examples using Fetch API.</p>

                <CodeSection
                    title={'Request with date'}
                    code={code}
                    output={`{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`}
                />
                <CodeSection
                    title={'Request with unix'}
                    code={refactor('1451001600000')}
                    output={`{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`}
                />
                <CodeSection
                    title={'Empy request'}
                    code={refactor('')}
                    output={`{"unix":${date.getTime()}, "utc":"${date.toUTCString()}"}`}
                />
                <CodeSection
                    title={'Invalid request'}
                    code={refactor('invalid')}
                    output={`{error:"Invalid Date"}`}
                />
            </section>
        </main>)
}

export default Main