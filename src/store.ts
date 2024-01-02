import { atom, selector, SetterOrUpdater } from 'recoil';

/**
 * store types
 */
export type Post = {
    id: number,
    title: string,
    body: string
}

/**
 * Store atoms
 */
export const postsState = atom<Post[]>({
    key: 'postsState',
    default: [],
    effects: [
        ({ setSelf, trigger }) => {
            const loadPosts = async () => {
                const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
                const postJSON: Post[] = await postsResponse.json();

                setSelf(postJSON);
            };

            if (trigger === 'get') {
                loadPosts();
            }
        },
    ]
});

export const addPost = atom({
    key: 'addPost',

});

export const numberOfPostsState = selector({
    key: 'numberOfPostsState',
    get: ({ get }) => get(postsState).length
});

export const updatePost = (postToUpdate: Post, posts: Post[], postsSetter: SetterOrUpdater<Post[]>) => {
    const oldPostIndex = posts.findIndex(({ id }) => postToUpdate.id === id);
    // @ts-ignore
    const newPosts = posts.toSpliced(oldPostIndex, 1, postToUpdate);
    postsSetter(newPosts);
}
