import type { Address } from "viem";
import type { PostDetails } from "../types/posts/types";
import ShareablePostComponent from "./ShareablePostComponent";

const Posts = ({
	posts,
	account,
}: { posts: PostDetails[]; account: Address | undefined }) => {
	if (account === undefined)
    	return (
        	<>
            	<h3>Account is disconnected. Please connect to load posts</h3>
        	</>
    	);
	return (
    	<>
        	{Array.isArray(posts) && posts.length > 0 ? (  // Conditional check for posts being a valid array
        posts.map((post) => (
          <ShareablePostComponent post={post} key={post.id} />
        ))
      ) : (
        <p>No posts available</p>  // Fallback if posts is empty or not yet populated
      )}
    	</>
	);
};

export default Posts;