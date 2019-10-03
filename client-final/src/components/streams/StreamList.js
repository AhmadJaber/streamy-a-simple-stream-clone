import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui primary button">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui red button"
            type="button"
          >
            Delete
          </Link>
        </div>
      );
    }

    return <div />;
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}

          <i className="large middle aligned video icon" />
          <div className="content">
            <div className="ui medium header">{stream.title}</div>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderStreamCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/create" className="ui orange inverted button">
            Create Stream
          </Link>
        </div>
      );
    }

    return <div />;
  }

  render() {
    return (
      <div>
        <h2>Streams:</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderStreamCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
