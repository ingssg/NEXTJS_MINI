import { atom, selector } from 'recoil';

interface PostContent {
  title: string;
  content: string;
}

export const postContentState = atom<PostContent>({
  key: 'postContentState',
  default: { title: '', content: ''},
});

export const isAutoSaveState = atom<boolean>({
  key: 'isAutoSaveState',
  default: false,
});

export const autoSavePostContentState = selector<PostContent>({
  key: 'autoSavePostContentState',
  get: ({ get }) => {
    const isAutoSave = get(isAutoSaveState);
    const postContent = get(postContentState);

    return isAutoSave ? postContent : {title: '', content: ''};
  },
});
