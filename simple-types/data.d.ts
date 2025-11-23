// ============================================================================
// DATA & DATABASE TYPES
// ============================================================================

declare type TAggregation = 'count' | 'sum' | 'avg' | 'min' | 'max' | 'group' | 'group_concat' | 'distinct' | 'none'

declare type TOperator = 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'in' | 'between' | 'regex' | 'nin' | 'startsWith' | 'endsWith'

declare type TOperatorLong =
  | 'equals' | 'not_equals' | 'contains' | 'not_contains'
  | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty'
  | 'greater_than' | 'greater_than_equal' | 'less_than' | 'less_than_equal'
  | 'between' | 'not_between' | 'in' | 'not_in'
  | 'is_null' | 'is_not_null' | 'regex_match'

declare type TLogicalOperator = 'AND' | 'OR'

declare type TJoin = 'inner' | 'left' | 'right' | 'full'

declare type TDataFormat = 'number' | 'currency' | 'percentage' | 'date' | 'datetime' | 'time' | 'boolean' | 'auto' | 'text'
