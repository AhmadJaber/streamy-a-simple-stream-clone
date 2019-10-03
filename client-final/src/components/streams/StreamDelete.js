import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  // eslint-disable-next-line class-methods-use-this
  renderActions() {
    const { id } = this.props.match.params;
    return (
      <>
        <div
          onClick={() => this.props.deleteStream(id)}
          className="ui red basic cancel inverted button"
        >
          <i className="trash icon" />
          Delete
        </div>

        <Link to="/" className="ui inverted secondary basic button">
          <i className="remove icon" />
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return <div />;
    }

    return `Are U Sure You Want to Delete Stream with title: ${this.props.stream.title} ?`;
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
