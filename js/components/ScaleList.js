import React from 'react';

/**
 * ScaleList - Presentational Component (Doesn't know about Redux)
 */
export class ScaleList extends React.Component {
    _renderNotes (notes) {
        return notes.map((note, index) => {
            return (
                <a className="NoteList__note dib ph2" key={ index }>{ note }</a>
            )
        })
    }

    _renderScales () {
        const { data } = this.props;

        return data.map(scale => {
            return (
                <div className="NoteList__section tac mb6" key={ scale.name }>
                    <div className="NoteList__subheading ft4 tac mb2">{ scale.name }</div>
                    <div className="NoteList__notes">
                        { this._renderNotes(scale.notes) }
                    </div>
                </div>
            )
        })
    }

    render () {
        const { title } = this.props;

        return (
            <section className="NoteList">
                <div className="NoteList__heading sub-title tac">{ title }</div>
                { this._renderScales() }
            </section>
        )
    }
}

ScaleList.propTypes = {
    data: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
};
