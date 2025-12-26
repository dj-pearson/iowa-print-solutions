import React from 'react';

/**
 * ErrorBoundary component that handles both render errors and chunk loading failures.
 *
 * Best practices for error boundaries with lazy loading:
 * 1. Detect chunk loading failures (common with React.lazy)
 * 2. Provide retry functionality for network-related failures
 * 3. Clear error state when retrying
 * 4. Log errors for debugging and monitoring
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      isChunkError: false,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    // Check if this is a chunk loading error (dynamic import failure)
    const isChunkError = error?.name === 'ChunkLoadError' ||
      error?.message?.includes('Loading chunk') ||
      error?.message?.includes('Failed to fetch dynamically imported module') ||
      error?.message?.includes('Importing a module script failed');

    return {
      hasError: true,
      isChunkError
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    console.error('Error name:', error?.name);
    console.error('Error message:', error?.message);
    console.error('Error stack:', error?.stack);
    console.error('Component stack:', errorInfo?.componentStack || 'No component stack available');

    this.setState({
      error: error,
      errorInfo: errorInfo || { componentStack: 'No stack trace available' }
    });
  }

  handleRetry = () => {
    // Clear the error state and trigger a re-render
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      isChunkError: false,
      retryCount: prevState.retryCount + 1
    }));
  }

  handleFullReload = () => {
    // Force a full page reload to get fresh chunks
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // Different UI for chunk loading errors vs other errors
      if (this.state.isChunkError) {
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900 mb-2">
                Connection Issue
              </h1>
              <p className="text-gray-600 mb-6">
                We had trouble loading part of the page. This usually happens due to a slow or unstable connection.
              </p>
              <div className="space-y-3">
                {this.state.retryCount < 3 ? (
                  <button
                    onClick={this.handleRetry}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  >
                    Try Again
                  </button>
                ) : (
                  <button
                    onClick={this.handleFullReload}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  >
                    Reload Page
                  </button>
                )}
                <button
                  onClick={() => window.history.back()}
                  className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors"
                >
                  Go Back
                </button>
              </div>
              {this.state.retryCount >= 3 && (
                <p className="mt-4 text-sm text-gray-500">
                  Still having issues? Try checking your internet connection or refreshing the page.
                </p>
              )}
            </div>
          </div>
        );
      }

      // General error fallback UI
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
              <div className="bg-gray-100 p-3 rounded text-xs font-mono overflow-auto max-h-48">
                <strong>Error:</strong> {this.state.error && this.state.error.toString()}
                <br />
                <strong>Stack:</strong> {this.state.error && this.state.error.stack}
                <br />
                <strong>Component Stack:</strong> {this.state.errorInfo?.componentStack || 'No stack available'}
              </div>
            </details>
            <div className="space-y-3">
              <button
                onClick={this.handleFullReload}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
