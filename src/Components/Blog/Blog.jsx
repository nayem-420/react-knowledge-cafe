import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover_img, author_img, author, reading_time, posted_date, hashtag} = blog;
    return (
        <div>
            <h2 className="text-4xl">{title}</h2>
            <img src={cover_img} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} mins read</span>
                </div>
            </div>
            <p>
                <a href="">{hashtag}</a>
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};


export default Blog;