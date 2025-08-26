import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    console.error('Error stack:', error.stack);
    console.error('Component stack:', errorInfo.componentStack);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // You can also log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-xl font-bold text-red-600 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We encountered an error while loading the page. Please try refreshing or contact support if the problem persists.
            </p>
            <details className="mb-4">
              <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                Error Details (for developers)
              </summary>
              <div className="bg-gray-100 p-3 rounded text-xs font-mono">
                <strong>Error:</strong> {this.state.error && this.state.error.toString()}
                <br />
                <strong>Stack:</strong> {this.state.error && this.state.error.stack}
                <br />
                <strong>Component Stack:</strong> {this.state.errorInfo.componentStack}
              </div>
            </details>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;