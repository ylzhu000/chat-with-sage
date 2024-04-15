import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type Props = {
  data: any;
};

export default function ChatEdit({ data }: Props) {
  return <ReactQuill theme="snow" value={data} />;
}
