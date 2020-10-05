import React from 'react'
import {connect} from 'react-redux'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

import {startAddPost} from '../actions/postAction'
import Alert from './Alert'


class Form extends React.Component{
    constructor(){
        super()
        this.state={
          title:'',
          body:'',
          errbodystatus:false,
          errtitlestatus:false,
          success:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleBodyChange=(event,editor)=>{
        const body=editor.getData()
        this.setState({
           body
        })
    }

   

    
      handleSubmit=(e)=>{
          e.preventDefault()
        this.state.title.length==0 ?  this.setState({errtitlestatus:true}):this.setState({errtitlestatus:false})
        this.state.body.length==0 ?  this.setState({errbodystatus:true}):this.setState({errbodystatus:false})
        if(this.state.title.length>0&&this.state.body.length>0){
           this.setState({
               success:'your details submitted successfully'
           })
            const {title,body}=this.state
            const formData={title,body}
            console.log(formData)
            this.props.dispatch(startAddPost(formData))
            this.setState({title:'',body:''})
            
        }
            
      }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <input type='text' style={{border:this.state.errtitlestatus&&'2px solid red',paddingLeft:'10px',margin:0}} value={this.state.title} name='title' onChange={this.handleChange} placeholder='enter the title' className='search-style' contentEditable />
                    {this.state.errtitlestatus ? <Alert/>:''}
                    
                    <CKEditor
                        editor={ClassicEditor}
                        data={this.state.body}
                        onChange={this.handleBodyChange}
                        
                    />
                    {this.state.errbodystatus ? <Alert/>:''}
                    <span><button type='submit' className='publish-submit'>publish</button></span>
                </form>
        {this.state.success&&<p className='animation-style'>{this.state.success}</p>}
            </div>
        )
    }
}

export default connect()(Form)