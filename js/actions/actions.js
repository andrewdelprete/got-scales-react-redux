/*
 * Action Types
 */
import gotScales from 'got-scales';

export const SET_NOTE_TYPE = 'SET_NOTE_TYPE'
export const SET_NOTE_SELECTED = 'SET_NOTE_SELECTED'
export const SET_NOTES_ARRAY = 'SET_NOTES_ARRAY'
export const SET_SCALES_ARRAY = 'SET_SCALES_ARRAY'
export const SET_CHORDS_ARRAY = 'SET_CHORDS_ARRAY'

export const NoteTypes = {
    SHOW_NATURALS: 'SHOW_NATURALS',
    SHOW_SHARPS_AND_FLATS: 'SHOW_SHARPS_AND_FLATS'
}

/*
 * Action Creators
 */

/**
 * Set's the note type and notes array based upon filter
 * @param { string } filter - The action note type
 */
export function setNoteType(filter) {
    return (dispatch, getState) => {
        dispatch({ type: SET_NOTE_TYPE, filter })
        dispatch({
            type: SET_NOTES_ARRAY,
            notesArray: getNotes(filter)
        })
    }
}

/**
 * Set's the selected note
 * @param { string } note
 */
export function setNoteSelected(note) {
    return (dispatch, getState) => {
        // Only dispatch if the note isn't already selected
        if (getState().noteSelected !== note) {
            dispatch({ type: SET_NOTE_SELECTED, note }),
            dispatch({ type: SET_SCALES_ARRAY, scalesArray: getScales(note) })
            dispatch({ type: SET_CHORDS_ARRAY, chordsArray: getChords(note) })
        }
    }
}

/*
 * Helper Functions
 */

/**
 * Retrieves the notes (naturals or sharps and flats) from the `Got Scales?`library based upon our filter
 * @param  { string } filter - The action note type
 * @return { array } - An array of notes
 */
export function getNotes(filter) {
    if (filter == 'SHOW_SHARPS_AND_FLATS') {
        return gotScales.notesArray.filter(note => _.contains(note, 'b' || '#'))
    } else {
        return gotScales.notesArray.filter(note => !_.contains(note, 'b' || '#'))
    }
}

/**
 * Get an array on scales from the `Got Scales?`library based upon base note
 * @param  { string } filter - The action note type
 * @return { array } - An array of notes
 */
export function getScales(note) {
    return gotScales.scaleFormulas.map(scale => {
        return {
            name: scale.name,
            notes: gotScales.note(note).scale(scale.name).getNotes()
        }
    });
}

/**
 * Get an array on chords from the `Got Scales?`library based upon base note
 * @param  { string } filter - The action note type
 * @return { array } - An array of notes
 */
export function getChords(note) {
    return gotScales.chordFormulas.map(chord => {
        return {
            name: chord.name,
            notes: gotScales.note(note).scale(chord.pattern, true).getNotes()
        }
    });
}
