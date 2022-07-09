import React, { useEffect, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const axios = require('axios').default;

function LinkResult({inputValue}) {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try{
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result.full_short_link);
        } catch(err){
            setError(err);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        if(inputValue.length) {
            fetchData();
        }
    }, [inputValue])

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        },500);

        return () => clearTimeout(timer);
    }, [copied])
    
    if(loading) {
        return (
            <>
            <div className='ring'></div>
            <p>loading...</p>
            </>
        )
    }

    if(error) {
        return <p class="error">Something went wrong</p>
    }

  return (
    <>
    {shortenLink && (
        <div className='shortLink'>
        <span><p>{shortenLink}</p></span>
        <CopyToClipboard 
            text={shortenLink}
            onCopy={() => setCopied(true)}
        >
            <button className={copied ? 'button copied' : 'button'}>Copy</button> 
        </CopyToClipboard>   
        </div>
    )}
    </>
  )
}

export default LinkResult

