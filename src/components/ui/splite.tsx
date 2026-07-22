'use client'

import React, { Suspense, lazy, Component, useEffect, useRef } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface ErrorBoundaryProps {
  fallback: React.ReactNode
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("SplineScene ErrorBoundary caught an error", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

interface SplineSceneProps {
  scene: string
  className?: string
  fallback?: React.ReactNode
}

export function SplineScene({ scene, className, fallback }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const removeWatermark = () => {
      if (containerRef.current) {
        const links = containerRef.current.querySelectorAll('a[href*="spline"], a[target="_blank"]');
        links.forEach((link) => {
          const el = link as HTMLElement;
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.style.opacity = '0';
          if (el.parentElement) {
            el.parentElement.style.display = 'none';
            el.parentElement.style.visibility = 'hidden';
            el.parentElement.style.opacity = '0';
          }
        });
      }
    };

    const interval = setInterval(removeWatermark, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <ErrorBoundary fallback={fallback || null}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <div ref={containerRef} className={`w-full h-full overflow-hidden relative ${className || ''}`}>
          <Spline
            scene={scene}
            className="absolute inset-0 w-full h-full scale-[1.08] origin-bottom-right translate-x-[4%] translate-y-[4%]"
          />
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
