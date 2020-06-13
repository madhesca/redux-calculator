import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/alert/alertActions";

function Alert({ type, text, addItem }) {
  return <div className={`alert alert-${type}`}>{text}</div>;
}

const mapStateToProps = state => ({
  type: state.alerts.type,
  text: state.alerts.text
});

const mapDispatchToProps = dispatch => ({
  addItem: () => dispatch(addItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
