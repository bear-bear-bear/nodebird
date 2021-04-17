const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'bear',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        { src: 'https://picsum.photos/400/600' },
        { src: 'https://picsum.photos/400/600' },
        { src: 'https://picsum.photos/400/600' },
      ],
      Comments: [
        {
          User: {
            nickname: 'people1',
          },
          content: '안녕하세요~',
        },
        {
          User: {
            nickname: 'people2',
          },
          content: '행복한 하루 되세요~',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: 'me',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;