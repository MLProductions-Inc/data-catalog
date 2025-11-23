// ============================================================================
// LOADING & STATE TYPES
// ============================================================================


declare type TLoadingState = 'idle' | 'loading' | 'success' | 'error' | 'ready' | 'disabled' | 'refreshing'

declare type TLoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

declare type TLoadingVariant = 'spinner' | 'progress' | 'dots' | 'pulse' | 'skeleton' | 'chart'

declare type TFetchState = 'idle' | 'loading' | 'success' | 'error'