import { numberOfPostsState, Post, postsState } from './store';
import styles from "./posts.module.css";
import { PostDetails } from './PostDetails';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export const PostsList = () => {
    const posts = useRecoilValue(postsState);
    /**
     * or
     * const [posts, setPosts] = useRecoilState(postsAtom);
     */
    const numberOfPosts = useRecoilValue(numberOfPostsState);

    return (
        <section>
            <h3>We have {numberOfPosts} posts in total</h3>

            <dl className={styles.itemsList}>
                {posts.map(post => <PostDetails key={post.id} post={post} />)}
            </dl>
        </section>
    );
};
