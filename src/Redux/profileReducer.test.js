import profileReducer, {addPostCreator, deletePost} from "./profileReducer";
let state={
    posts: [
        {id: '1', post: 'My name is Gevorg', likesCount: '45'}
    ]
};
test('added message', () => {
    let action=addPostCreator('this is testing post')
    let newState=profileReducer(state,action);
    expect(newState.posts.length).toBe(2);
});
test('the length of posts after deleting',()=>{
    let action=deletePost('1')
    let newState=profileReducer(state,action);
    expect(newState.posts.length).toBe(0)
})