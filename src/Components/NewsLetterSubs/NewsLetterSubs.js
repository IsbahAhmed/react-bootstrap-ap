import React from 'react'
import { Table } from 'react-bootstrap'
import NewsLetterListItem from '../NewsLetterListItem/NewsLetterListItem'
import { connect } from 'react-redux'
import { fetchNewsletterSubs } from '../../Redux/newsletter/newsletterActions'
import { useEffect } from 'react'
const NewsLetterSubs = ({fetchNewsletterSubs,newsletterSubs}) => {
    useEffect(()=>{
        if(!newsletterSubs.length){
            fetchNewsletterSubs()
        }
    },[])
    var count = 0;
    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Email Adrress</th>
      
    </tr>
  </thead>
  <tbody>
  {
      newsletterSubs.map((sub)=>  <NewsLetterListItem key={sub.subId} sub={sub} count={++count}/>)
  }
  </tbody>
</Table>
        </div>
    )
}
var mapState = (state)=>({
    newsletterSubs: state.newsletterSubs
})
var actions = {
fetchNewsletterSubs
}
export default connect(mapState,actions)(NewsLetterSubs)
