import Link from 'next/link';
import {SettingsIcon} from '../../01-atoms/Icons';

type Props = {
  id: string
}

const EditAction = ({id}: Props) => (
  <Link href={{pathname: '/edit', query: {id: id}}}>
    <a><SettingsIcon /></a>
  </Link>
);

export default EditAction;
