import {PageHeading} from '../components/01-atoms/Headings';
import AddJokeForm from '../components/03-organisms/AddJokeForm';

function SubmitPage() {
  return (
    <div>
      <PageHeading>Submit a Joke</PageHeading>
      <AddJokeForm />
    </div>
  );
}

export default SubmitPage;
