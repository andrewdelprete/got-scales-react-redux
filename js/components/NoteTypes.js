import React from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions/actions';

/**
 * NoteType - Presentational Component (Doesn't know about Redux)
 */
export class NoteTypes extends React.Component {
    render() {
        const { actions } = this.props

        return (
            <div className="NoteType">
                <NoteTypeToggle filter="SHOW_NATURALS">
                    ♮ Naturals
                </NoteTypeToggle>

                &nbsp; • &nbsp;

                <NoteTypeToggle filter="SHOW_SHARPS_AND_FLATS">
                    ♯ SHARPS ♭ FLATS
                </NoteTypeToggle>
            </div>
        )
    }
}

/**
 * NoteType - Presentational Component (Doesn't know about Redux)
 */
export const NoteType = ({ active, onClick, children }) => {
    if (active) {
        return (
            <span className="NoteType__toggle NoteType__toggle--active">
                { children }
            </span>
        )
    }

    return (
        <a href="#" onClick={ onClick }>
            { children }
        </a>
    )
}

NoteType.propTypes = {
    active: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
    children: React.PropTypes.string.isRequired
};


/**
 * NoteTypeToggle - Container Component (Knows about Redux)
 *
 * Redux consumes our NoteType component API by fulfilling
 * the prop requirements with the store and dispatch
 */
 const mapStateToProps = (state, ownProps) => {
     return {
         active: ownProps.filter === state.noteType
     }
 }

 const mapDispatchToProps = (dispatch, ownProps) => {
     return {
         onClick: () => {
             dispatch(actions.setNoteType(ownProps.filter))
         }
     }
 }

export const NoteTypeToggle = connect(mapStateToProps, mapDispatchToProps)(NoteType);

NoteTypeToggle.propTypes = {
   filter: React.PropTypes.oneOf([
       'SHOW_NATURALS',
       'SHOW_SHARPS_AND_FLATS'
   ]).isRequired
}
