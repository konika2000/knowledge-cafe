import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
    const{title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20 border-b-2'>
             <img className='w-full rounded-xl' src={cover} alt={`cover picture of the title ${title}`}/>
             <div className='flex justify-between mb-4'>
               <div className='flex gap-2'>
                  <img className='w-14' src={author_img} alt="" />
                  <div >
                    <h4 className='font-bold text-xl'>{author}</h4>
                    <p>{posted_date}</p>
                  </div>
               </div>
               <div>
                   <span>{reading_time} minute read</span>
                   <button onClick={ ()=>handleAddToBookmark(blog)} className='ml-2'><FaRegBookmark></FaRegBookmark></button>
               </div>
             </div>
           <h2 className="text-2xl mb-4">{title}</h2> 
           <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
           </p>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
}

export default Blog;