import { combineReducers } from 'redux';

import {
    NoteTypes,
    getNotes,
    getScales,
    getChords,
    SET_NOTE_TYPE,
    SET_NOTE_SELECTED,
    SET_NOTES_ARRAY,
    SET_SCALES_ARRAY,
    SET_CHORDS_ARRAY
} from '../actions/actions';

export default combineReducers({
    noteType: (state = NoteTypes.SHOW_NATURALS, action) => {
        switch (action.type) {
            case SET_NOTE_TYPE:
                return action.filter
            default:
                return state
        }
    },
    notesArray: (state = getNotes(NoteTypes.SHOW_NATURALS), action) => {
        switch (action.type) {
            case SET_NOTES_ARRAY:
                return action.notesArray
            default:
                return state
        }
    },
    noteSelected: (state = 'C', action) => {
        switch (action.type) {
            case SET_NOTE_SELECTED:
                return action.note
            default:
                return state
        }
    },
    scalesArray: (state = getScales('C'), action) => {
        switch (action.type) {
            case SET_SCALES_ARRAY:
                return action.scalesArray
            default:
                return state
        }
    },
    chordsArray: (state = getChords('C'), action) => {
        switch (action.type) {
            case SET_CHORDS_ARRAY:
                return action.chordsArray
            default:
                return state
        }
    },
});
