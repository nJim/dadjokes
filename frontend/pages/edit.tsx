import EditJokeForm from '../components/03-organisms/EditJokeForm';

function EditPage({query}: any) {
  return (
    <div>
      This is the update page.
      <EditJokeForm id={query.id} />
    </div>
  );
}

export default EditPage;
