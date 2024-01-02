import styles from "./add-post-form.module.css";
import { useRecoilState } from 'recoil';
import { postsState } from './store';

export const AddPostForm = () => {

    const [posts, setPosts] = useRecoilState(postsState);

    const onSubmit = (event: any) => {
        event.preventDefault();

        setPosts([
            { id: Date.now(), title: event.target.title.value, body: event.target.body.value },
            ...posts
        ])

        event.target.reset()
    };


    return (
        <form
            className={styles.form}
            onSubmit={onSubmit}
        >
            <h4>Add new post</h4>
            <label>
                Title:
                <input name="title" id="title" />
            </label>

            <label>
                Body:
                <textarea name="body" id="body"></textarea>
            </label>

            <button type="submit">Add on top</button>
            <button type="reset">Clear</button>
        </form>
    )
}
