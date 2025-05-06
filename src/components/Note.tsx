type NoteProps = {
    content: string;
    onDelete?: () => void;
  };
  
  function Note({ content, onDelete }: NoteProps) {
    return (
      <div
        style={{
          background: '#f9f9f9',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgb(227, 221, 221)',
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ color: '#000' }}>{content}</span>
        {onDelete && (
          <button
            onClick={onDelete}
            style={{
              backgroundColor: '#ff4d4f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '0.4rem 0.7rem',
              cursor: 'pointer',
            }}
          >
            Delete
          </button>
        )}
      </div>
    );
  }
  
  export default Note;
  