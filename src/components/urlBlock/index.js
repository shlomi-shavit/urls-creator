import React from 'react';
import classes from './index.module.scss';
import Logic from './index.logic';

const UrlCreator = () => {

    const { dropDownList,
        dropDown,
        selectedUrl,
        urlInput,
        urlsBlocks,
        dropDownHandler,
        selectedUrlHandler,
        urlInputHandler,
        addUrlHandler } = Logic();

    return (
        <div className={classes.url_creator__container}>

            <div className={classes.url_creator__dashboard}>

                <div className={classes.url_creator__label}>Block URL's</div>

                <div className={classes.url_creator__dropDown} onClick={dropDownHandler}>

                    <div className={classes.url_creator__selectedUrl}> {selectedUrl ? selectedUrl : ''}</div>

                    {dropDown ?
                        <ul>
                            {dropDownList.map(url => {
                                return (
                                    <li key={url.label} onClick={() => selectedUrlHandler(url.label)}>{url.label}</li>
                                )
                            })}
                        </ul>
                        : null
                    }

                </div>

                <div className={classes.url_creator__urlInput}>
                    <input
                        type='text'
                        value={urlInput}
                        onChange={value => urlInputHandler(value)}
                        placeholder='e.g./index.php'
                    />
                </div>

                <button className={classes.url_creator__addButton} onClick={addUrlHandler}>Add</button>
            </div>




            <div className={classes.url_creator__urlContainer}>

                {urlsBlocks.length ?
                    <div className={classes.url_creator__urlContainer}>
                        {urlsBlocks.map(urlBlock => {
                            return (
                                <div key={urlBlock.selectedUrl + urlBlock.urlInput}>
                                    <div>{urlBlock.selectedUrl}</div>
                                    <div>{urlBlock.urlInput}</div>
                                </div>
                            )
                        })}
                    </div>
                    : null
                }
            </div>

        </div>
    )

}

export default UrlCreator;