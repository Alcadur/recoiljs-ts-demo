import { Post, postsState, updatePost } from './store';
import styles from "./post-details.module.css"
import { Dispatch, SetStateAction, useState } from 'react';
import { useRecoilState } from 'recoil';

export const PostDetails = ({ post }: { post: Post }) => {

    const [isOpened, setIsOpened] = useState(false);
    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)
    const [posts, setPosts] = useRecoilState(postsState);

    const toggleHandler = () => setIsOpened(isOpened => !isOpened);

    const saveHandler = (event: any) => {
        event.preventDefault();
        const form = event.target;

        updatePost({ id: post.id, title: form.title.value, body: form.body.value }, posts, setPosts)
    }

    const onChange = (setter: Dispatch<SetStateAction<string>>) => {
        return (event: any) => setter(event.target.value);
    }

    const titleClassName = styles.postTitle + (isOpened ? ' ' + styles.opened : '');

    return (
        <>
            <dt key={post.id + '-title'} onClick={toggleHandler} className={titleClassName}>{post.title}</dt>
            <dd key={post.id + '-body'} className={styles.postBody}>
                <form onSubmit={saveHandler}>
                    <input name="title" value={title} onChange={onChange(setTitle)}/>
                    <p className={styles.preview}>({post.title})</p>
                    <textarea name="body" value={body} onChange={onChange(setBody)}></textarea>
                    <p className={styles.preview}>({post.body})</p>

                    <button type="submit">Save</button>
                </form>
            </dd>
        </>
    )
}
