import {useRouter} from 'next/router'
import Link from 'next/link'
import Posts from '../../posts.json'

export default function Blog() {
    const router = useRouter();
    const {blog} = router.query;
    const fullPath = blog+"/comments";
        
    if (blog === "first-post") {
    return (
        <div className="post-container">
            <div>
                    <img src={Posts[0].cover} alt="post image" />    
                   <h1> {Posts[0].title}</h1>
                   <p>{Posts[0].body}</p>
                   <p>{Posts[0].body}</p>
                   <p>{Posts[0].body}</p>
                   <hr />
                   <div className="comments">
                        <h3>Comments</h3>
                        <h5>Example of comment 1    </h5>
                        <p>Absolutely spot on! Thanks for sharing, Yash!</p>
                        <Link legacyBehavior href={fullPath}><a>Read all comments for this article</a></Link>
                   
                   </div>
            </div>
        </div>
    )
    } else if (blog === "second-post") {
        return (
        <div className="post-container">
            <div>
                    <img src={Posts[1].cover} alt="post image"/> 
                    <h1> {Posts[1].title}</h1>
                   <p>{Posts[1].body}</p>
                   <p>{Posts[1].body}</p>
                   <p>{Posts[1].body}</p>
                   <hr />
                   <div className="comments">
                        <h3>Comments</h3>
                        <p>Example of comment 2</p>
                        <p>Absolutely spot on! Thanks for sharing, Yash!</p>
                        <Link legacyBehavior href={fullPath}><a>Read all comments for this article</a></Link>
                   
                   </div>
            </div>
        </div>
        )
    } else {
        return (
        <div className="post-container">
            <div>
                    <img src={Posts[2].cover} alt="post image"/> 
                    
                   <h1> {Posts[2].title}</h1>
                   <p>{Posts[2].body}</p>
                   <p>{Posts[2].body}</p>
                   <p>{Posts[2].body}</p>
                   <hr />
                   <div className="comments">
                        <h3>Comments</h3>
                        <h5>Example of comments</h5>
                        <p>Absolutely spot on! Thanks for sharing, Yash!</p>
                        <Link legacyBehavior href={fullPath}><a>Read all comments for this article</a></Link>
                   
                   </div>
            </div>
        </div>
        )}
}


{/*import Link from 'next/link'

export default function Blog( {post} ) {
    
    return (
        <div className="post-container">
            <div>
                   <img src={posts.cover} alt="post image" />    
                   <h1> {post.title}</h1>
                   <p>{post.body}</p>
                   <hr />
                   <div className="comments">
                        <h3>Comments</h3>
                        <h5>{post.commenter}</h5>
                        <p>{post.featured_comment}</p>
                        <Link href={post.fullPath}>
                          <a>Read all comments for this article</a>
                        </Link>
                   </div>
            </div>
        </div>
    )}
}

export async const getStaticProps = ({ params }) => {
  const res = await fetch(`https://your-api.com/posts/${params.title}`);
  const post = await res.json();
    return {
      props: { post },
    };
}*/}
