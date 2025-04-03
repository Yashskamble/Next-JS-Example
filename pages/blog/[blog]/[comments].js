import {useRouter} from 'next/router'

export default function Comments() {
    const router = useRouter();
    const {blog} = router.query;
    
        
    return (
        <div className="container">
            <div>
                    <h2> You are now reading the comments from the {blog} </h2>
                    <div className="comments">
                        <h3>Comments</h3>
                        <hr />
                        <h5>Example</h5>
                        <p>Absolutely spot on! Thanks for sharing, Yash!</p>
                        <hr />
                        <h5>Example</h5>
                        <p>Absolutely spot on! Thanks for sharing, Yash!</p>
                        <hr />
                        <h5>Example</h5>
                        <p>Absolutely spot on! Thanks for sharing, Yash!</p>
                        <hr />
                        <h5>Example</h5>
                        <p>Absolutely spot on! Thanks for sharing, Yash!</p>
                        <hr />
                        <h5>Example</h5>
                        <p>Absolutely spot on! Thanks for sharing, Yash!</p>
                        <hr />
                        <h5>Example</h5>
                        <p>Absolutely spot on! Thanks for sharing, Yash!</p>
                        
                   
                    </div>
            </div>
        </div>
    )
}