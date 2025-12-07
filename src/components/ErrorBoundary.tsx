import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/button';
import { AlertCircle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ error }: { error: Error | null }) => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full glass-effect p-8 rounded-2xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold font-poppins">Oops! Something went wrong</h1>
        <p className="text-muted-foreground">
          We're sorry, but something unexpected happened. Please try again or contact us if the problem persists.
        </p>
        {error && process.env.NODE_ENV === 'development' && (
          <details className="text-left mt-4 p-4 bg-muted rounded-lg">
            <summary className="cursor-pointer text-sm font-medium mb-2">Error Details (Dev Only)</summary>
            <pre className="text-xs text-muted-foreground overflow-auto">{error.toString()}</pre>
          </details>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-primary via-pink-500 to-orange-500"
          >
            Reload Page
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;

