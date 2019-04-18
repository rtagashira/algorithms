// Diatonic scales are a fundamental music concept. Almost anyone who's taken a music lesson before is likely to have 
// studied major and minor diatonic scales. The main thing that distinguishes them is ultimately how the notes are spaced out - 
// each adjacent pair of notes is separated by either a semitone or a tone (which is two semitones)

// Using T to represent a full tone and S to represent a semitone, the two types of scales have the following intervals between notes:

// Major: T, T, S, T, T, T, S
// Minor: T, S, T, T, S, T, T
// Given a diatonic scale, in the form of an array of note names (in scientific pitch notation), your task is to determine whether 
// the scale is major or minor! Return your answer as a string ("major" or "minor").

// Note: For the sake of simplicity, we're avoiding the use of flats, and instead only using the equivalent sharps. In other words, 
// we're using the following set of notes:
// C, C#, D, D#, E, F, F#, G, G#, A, A#, B


function majorOrMinor(arr) {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  const major = 'ttsttts'
  const minor = 'tsttstt'
  let scale = ''

  while(arr.length>1){
    const firstNote = arr[0].slice(0,-1)
    const secondNote = arr[1].slice(0,-1)
    const firstIndex = notes.indexOf(firstNote)
    let secondIndex = notes.indexOf(secondNote)
    if(secondIndex - firstIndex != 1 && secondIndex - firstIndex != 2){
      secondIndex += 12 
    }
    const distance = secondIndex - firstIndex

    if(distance === 2){
      scale += 't'
    }else if(distance ===1){
      scale += 's'
    }
    arr.shift()
  }

  if(scale === major){
    return 'major'
  }
  if(scale === minor){
    return 'minor'
  }
}

console.log(majorOrMinor(["C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2"]))//"major"
console.log(majorOrMinor(["G2", "A2", "A#2", "C3", "D3", "D#3", "F3", "G3"]))//"minor"
console.log(majorOrMinor(["G#1", "A#1", "C2", "C#2", "D#2", "F2", "G2", "G#2"]))//"major"
