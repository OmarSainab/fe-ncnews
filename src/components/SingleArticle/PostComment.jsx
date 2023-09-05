import { useContext, useState } from 'react'
import { postCommentById } from '../../utils/api';
import { UserContext } from '../../contexts/Users'

// 4 & 5 import useContext hook & UserContext
//6 invoke the hook

const PostComment = ({ article_id, setAllComments }) => {
   const { user } = useContext(UserContext)
   const [newComment, setNewComment] = useState('')

   const handleSubmit = (event) => {
      event.preventDefault();
   
     const commentToAdd = {
         author: user,
         body: newComment,
         votes: 0,
         comment_id: Date.now(),
      }
      setAllComments((currComments) => [...currComments, commentToAdd]) 
      
      const commentObj = { username: user, body: newComment}

      postCommentById(article_id, commentObj)
      .then(()=>{
         console.log(response)
         setNewComment('')
      }
      )
   }
   return (
      <form className="postComment" onSubmit={handleSubmit}>
         <label htmlFor='newComment'>Comment</label>
         <input
         id='newComment'
         value={newComment}
         onChange={(event)=> setNewComment(event.target.value)}
         type="text">
            
         </input>
         <button type='submit'>Add Comment</button>
      </form>
   )
}


  
export default PostComment;


