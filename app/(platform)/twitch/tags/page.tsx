import { TwHeader } from '../_components/tw-header';
import { TwTagList } from './_components/tw-tag-list';

const TagsPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 mx-auto'>
      <TwHeader />
      <TwTagList />
    </div>
  );
};

export default TagsPage;
