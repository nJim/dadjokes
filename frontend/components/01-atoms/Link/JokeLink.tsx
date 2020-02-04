import Link from 'next/link';

interface Props {
  id: string
};

const JokeLink: React.FC<Props> = ({children, id}) => (
  <Link href={{pathname: '/joke', query: {id: id}}}>
    <a>{children}</a>
  </Link>
);

export default JokeLink;
