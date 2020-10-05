import React,{useState} from 'react'
import {connect} from 'react-redux'
import Form from './Form'
import parse from 'html-react-parser'
import Search from './Search'

function Posts(props){
        const [status,setstatus]=useState(false)
        const [poststatus,setpoststatus]=useState(false)
        const [searchterm,setsearchterm]=useState('')
        const handleForm=()=>{
           setstatus(!status)
        }
        const handlePosts=()=>{
            setpoststatus(!poststatus)
         }
        const handleChange=(value)=>{
            setsearchterm(value)
        }
    return(
        <div style={{padding:'30px'}}>
            <Search handleChange={handleChange}/>
            <div className='group-buttons'>
                <span className='blogbtn-style'><button  onClick={handleForm} className='btn-style'>NEW POST</button></span>
                <span className='blogbtn-style'><button onClick={handlePosts} className='btn-style'>PUBLISHED</button></span>
            </div>
            <div style={{display:'flex',width:'100%',flexDirection:'row'}}>
            <div className='align-blog'>{status && <Form/>}</div>
                <div className='align-blog'>
                {
                    poststatus&&
                    props.posts.filter(ele=>ele.title.includes(searchterm)||ele.body.includes(searchterm)).map((ele,i)=>{
                        return(
                            <div key={i} className='card-posts'>
                                <h1 style={{wordBreak:'break-word',color:'forestgreen'}}>{ele.title}</h1>
                                <div style={{wordBreak:'break-word',color:'brown',lineHeight:'20px'}}>{parse(ele.body)}</div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Posts)