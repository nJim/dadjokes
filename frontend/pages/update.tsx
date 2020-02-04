import UpdateJokeForm from '../components/03-organisms/UpdateJokeForm';

function UpdatePage({query}: any) {
  return (
    <div>
      This is the update page.``
      <UpdateJokeForm id={query.id} />
    </div>
  );
}

export default UpdatePage;
