import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <div className="error-fallback">Course failed to load</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;