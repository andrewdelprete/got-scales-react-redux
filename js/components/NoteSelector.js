import React from 'react'

import { connect } from 'react-redux'

import classNames from 'classnames'

/**
 * NoteSelector - Presentational Component (Doesn't know about Redux)
 */
export class NoteSelector extends React.Component {
    _renderNotes () {
        const { notesArray, noteSelected, noteType, actions } = this.props

        // Loop through notesArray and build an array render objects
        return notesArray.map(note => {
            let active = false

            if (note === noteSelected) {
                active = true
            }

            return (
                <Note note={ note } key={ note } active={ active } noteType={ noteType } onClick={ () => actions.setNoteSelected(note) }  />
            )
        })
    }

    render () {
        return (
            <div>
                <div className="sub-title tac">Pick a note</div>
                <div className="NoteSelector">
                    { this._renderNotes() }
                </div>
            </div>
        )
    }
}

NoteSelector.propTypes = {
    actions: React.PropTypes.object.isRequired,
    noteType: React.PropTypes.string.isRequired,
    notesArray: React.PropTypes.array.isRequired,
    noteSelected: React.PropTypes.string.isRequired,
};

/**
 * Note - Presentational Component (Doesn't know about Redux)
 */
export const Note = ({ note, noteType, active, onClick }) => {
    let activeClass = 'NoteSelector__note--active';

    let classes = classNames({
        'NoteSelector__note': true,
        'NoteSelector__note--natural': noteType == 'SHOW_NATURALS',
        'NoteSelector__note--sharpsAndFlats': noteType == 'SHOW_SHARPS_AND_FLATS'
    })

    // Add active class if this is the selected note
    if (active) {
        classes = `${ classes } ${ activeClass }`
    }

    return (
        <a href="#" key={ note } onClick={ () => onClick(note) } className={ classes }>
            <span>{ note }</span>
        </a>
    )
}

Note.propTypes = {
    active: React.PropTypes.bool.isRequired,
    note: React.PropTypes.string.isRequired,
    noteType: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};
