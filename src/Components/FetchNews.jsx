import React, {useEffect, useState} from 'react'
import axios from 'axios'

const FetchNews = () => {

    const [selectCountry, setSelectCountry] = useState('')
    const [countryText, setCountryText] = useState('')
    const [newsList, setNewsList] = useState([])

    const fetchNews = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${selectCountry}&apiKey=5a4603dfc46e429d85d57f45dcf5a4e5`)
            .then((response => {
                setNewsList(response.data.articles);
            }))
    }
    useEffect(
        ()=>{ },[countryText, setCountryText]
    )

    return (
        <>

            <div className="container my-4">
                <p className='text-secondary text-center'>ON REACT</p>
                <div className="row header">
                    <div className="col-4 click-btn">
                        <button className='btn btn-success m-3' onClick={fetchNews}>
                            CLICK TO GET {countryText} NEWS
                        </button>
                    </div>

                    <div className="col-4 select-btn">

                        <label htmlFor="News from country" className='font-weight-bold m-3'>Choose a country</label>
                        <select name="" id="country-select" className='btn btn-warning'
                                onChange={
                                    (e) => {
                                        let sc = e.target.value;
                                        setSelectCountry(sc)
                                        setCountryText(()=> e.target.options[e.target.selectedIndex].text);
                                    }
                                }>
                            <option>Select Country</option>
                            <option value="us">USA</option>
                            <option value="in">India</option>
                            <option value="ae">UAE</option>
                            <option value="ca">Canada</option>
                            <option value="hk">Hongkong</option>
                            <option value="ar">Argentina</option>
                            <option value="at">Austria</option>
                            <option value="au">Australia</option>
                            <option value="be">Belgium</option>
                            <option value="bg">Bulgaria</option>
                            <option value="br">Brazil</option>
                            <option value="cu">Cuba</option>
                            <option value="cz">Czechia</option>
                            <option value="de">Germany</option>
                            <option value="eg">Egypt</option>
                            <option value="fr">France</option>
                            <option value="gb">UK</option>

                        </select>
                    </div>
                </div>
            </div>

            {selectCountry ?
                <div className="container">
                    <p className='bg-light p-2'>Home<i class="bi bi-caret-right-fill"></i>{countryText}</p>
                    <div className="row">
                        { newsList.map((curElem) => {
                            const  { title, url , urlToImage} = curElem;
                            return(

                                <div className="col-4 mb-3">
                                    <div className="card h-100" style={{width: "18rem" , cursor: "pointer"}}>
                                        <img src={urlToImage} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                             <a href={url} style={{textDecoration:'none'}}> Read More </a>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
                : null
            }
        </>
    );
}

export default FetchNews