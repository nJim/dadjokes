import {PageHeading} from '../components/01-atoms/Headings';
import EditJokeForm from '../components/03-organisms/EditJokeForm';

function EditPage({query}: any) {
  return (
    <div>
      <PageHeading>Edit a Joke</PageHeading>
      <EditJokeForm id={query.id} />
    </div>
  );
}

export default EditPage;
