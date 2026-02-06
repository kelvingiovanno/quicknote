
import { useQuery } from '@tanstack/react-query';
import { loadNoteContent } from '../load';
import { useSearchParams } from 'react-router';
import NoteContent from '../components/NoteContent';

const Newnote = () => {

  const [searchParams] = useSearchParams();
  
  const note_id = searchParams.get("id");

  const {data, isLoading} = useQuery({
    queryKey: ["note", note_id],
    queryFn: loadNoteContent,
  });
  
  return (
    <>
      { isLoading ? 
        <p>loading....</p> 
        : 
        data ? 
          <NoteContent data={data}/> 
          : 
          <p>Note not found</p> 
      }
    </>
  );

}

export default Newnote;