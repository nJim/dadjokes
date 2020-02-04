import Link from 'next/link';
import {SettingsIcon} from '../../01-atoms/Icons';

type Props = {
  id: string
}

const UpdateAction = ({id}: Props) => (
  <Link href={{pathname: '/update', query: {id: id}}}>
    <a><SettingsIcon /></a>
  </Link>
);

export default UpdateAction;
