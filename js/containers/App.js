import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { NoteTypes } from '../components/NoteTypes';
import { NoteSelector } from '../components/NoteSelector';
import { ScaleList } from '../components/ScaleList';

import * as actions from '../actions/actions';

class App extends React.Component {
    render() {
        const { scalesArray, chordsArray } = this.props
        return (
            <div>
                <NoteTypes { ...this.props } />
                <NoteSelector { ...this.props } />
                <ScaleList data={ scalesArray } title="Scales" />
                <ScaleList data={ chordsArray } title="Chords" />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        noteType: state.noteType,
        noteSelected: state.noteSelected,
        notesArray: state.notesArray,
        scalesArray: state.scalesArray,
        chordsArray: state.chordsArray
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
