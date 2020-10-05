import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa';
import { GiCancel } from "react-icons/gi";
function Search(props){
    const [searchterm,setsearchterm]=useState('')
    const handleChange=(e)=>{
        setsearchterm(e.target.value)
        props.handleChange(e.target.value)
    }

    const handleCancel=(e)=>{
        e.preventDefault()
        setsearchterm('')
    }
    return(
        <div>
            <form>
                <div className='input-search'>
                    <div>
                        <input type='text' value={searchterm} onChange={handleChange} placeholder='text to search' className='search-style'/>
                        <span className='search-icon'><FaSearch/></span>
                        <button className='cancel-btn' onClick={handleCancel}><GiCancel/></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search