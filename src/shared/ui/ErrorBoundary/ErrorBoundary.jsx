import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-600">
            Что-то пошло не так 😢
          </h1>
          <p className="text-gray-600 mb-4">
            Произошла ошибка при загрузке компонента.
          </p>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <pre className="bg-gray-100 p-4 rounded text-left text-sm text-red-700 overflow-auto max-w-lg">
              {this.state.error.toString()}
              <br />
              {this.state.errorInfo?.componentStack}
            </pre>
          )}
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Перезагрузить страницу
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
