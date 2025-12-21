import './App.css'

export function App() {
  return (
    <div className='music-player'>
      <h4>1. Classes</h4>
      <h1 className='player-title'>My music player
      </h1>
      <hr />
      <h4>2. maxlength</h4>
      <hr />
      <input 
        className='form-control'
        type={'search'}
        id='search'
        placeholder='Search the music'
        maxLength={50}/>
      <hr />
      <h4>3. rows, cols, maxLength, readonly</h4>
      <textarea
        className='form-control'
        placeholder='Write the comments'
        maxLength={200}
        rows={3}
        cols={40}
        readOnly
      />
      <hr />
      <h4>4. tabindex</h4>
      <button tabIndex={0}>Click</button>
      <hr />
      <h4>5. colspan, rowspan</h4>
      <table border={1}>
        <tbody>
          <tr>
            <td colSpan={2}>1</td>
            <td colSpan={3}>2</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <h4>6. for</h4>
      <input
        className='form-control'
        type='radio'
        id='repeat-off'
        name='repeat' /> 
      <label htmlFor="repeat-off">Without repeat</label>
    </div>
  )
}