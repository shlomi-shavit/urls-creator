import { useState } from 'react';

const Logic = () => {

    const dropDownList = [
        { value: 'EQUALS', label: 'URL is' },
        { value: 'EQUALS', label: 'URL iss' },
        { value: 'NOT_EQUALS', label: 'URL is not' },
        { value: 'CONTAINS', label: 'URL contains' },
        { value: 'NOT_CONTAINS', label: 'URL not contains' },
        { value: 'PREFIX', label: 'URL starts with' },
        { value: 'SUFFIX', label: 'URL ends with' },
    ]

    /* up to 6
     urlsBlocks = [
         {URL is: urlsList} // urlsList
         {URL is: ['/asd', '/fsdf']} // urlsList
     ]
     */

    const [dropDown, setDropDown] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [urlsBlocks, setUrlsBlocks] = useState([]);
    const [urlsList, setUrlsList] = useState([]);
    const [urlValidation, setUrlValidation] = useState(false);

    const dropDownHandler = () => {
        setDropDown(!dropDown)
    }

    const selectedUrlHandler = (value) => {
        setSelectedUrl(value)
    }

    const addUrlHandler = () => {

        //filter -> value ===

        setUrlsBlocks(oldArray => [...oldArray, {
            selectedUrl: selectedUrl,
            urlInput: urlInput, // urlsList => ['/asd', '/asdaf']
            value: value
        }]);
    }

    const addLabel = () => { }

    const removeLabel = () => { }

    const urlInputHandler = (value) => {
        setUrlInput(value.target.value)
    }

    const removeUrlLabel = () => {

    }

    const validation = (urlInput) => {
        let urlString = urlInput;
        if (urlString.substring(0, 1) === '/') {
            setUrlValidation(!urlValidation)
        }
    }

    return {
        dropDownList,
        dropDown,
        selectedUrl,
        urlInput,
        urlsBlocks,
        dropDownHandler,
        selectedUrlHandler,
        urlInputHandler,
        addUrlHandler
    }
}

export default Logic;