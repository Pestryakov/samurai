import { useState } from "react";

const tracks = [
  {
    id: 1,
    title: 'Musicfun Soundtrack',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
  },
  {
    id: 2,
    isSelected: true,
    title: 'Musicfun Soundtrack Instrumental',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
  },
];  

export function App() {
  const stateManagment = useState(null)
   
  const selectedTrackId = stateManagment[0]; 
  const setSelectedTrackId = stateManagment[1]

  if(tracks === null) {
    return <div>
      <h1>Musicfun player IT-Inc</h1>
      <span>Loading</span>
    </div>
  }
  if(tracks.length === 0) {
    return <div>
      <h1>Musicfun player IT-Inc</h1>
      <span>No tracks</span>
    </div>
  }
  
  return (
    <div>
      <h1>Musicfun player IT-Inc</h1>
      <ul>
        { 
        tracks.map((track) => {
          return (
            <li key={track.id} style={
              {
                border: track.id === selectedTrackId ? "1px solid orange" : "none",
              } 
            }>
              <div onClick={()=>{ 
                setSelectedTrackId(track.id)
              }}>
                {track.title}
              </div> 
              <audio src={track.url} controls></audio> 
            </li>
          )
        })
        }
      </ul>
    </div>
  )
}

export default App
