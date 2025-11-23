// ============================================================================
// TIME & DATE TYPES
// ============================================================================

declare type TRelativeRange = '1h' | '24h' | '7d' | '30d' | '90d' | '1y'

declare type TTimeRange = 'realtime' | '1h' | '24h' | '7d' | '30d' | '90d' | 'custom'

declare type TDateRangePreset = 'today' | 'yesterday' | 'last7days' | 'last30days' | 'last90days' | 'thisMonth' | 'lastMonth' | 'custom' | 'start' | 'end'

declare type TPeriodOfDay = 'morning' | 'midday' | 'evening' | 'night'