// ============================================================================
// HTTP & API RELATED TYPES
// ============================================================================

declare type TConnection = 'websocket' | 'sse' | 'polling'

declare type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

declare type TAuth = 'none' | 'basic' | 'bearer' | 'apikey' | 'oauth2'