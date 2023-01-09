export const RATING ={
    NONE: 'NONE',
    BAD: 'BAD',
    PRRETTYBAD: 'PRRETTYBAD',
    MEDIUM: 'MEDIUM',
    GOOD: 'GOOD',
    PERTTYGOOD: 'PERTTYGOOD'
  };
  
  export type RATINGType = (typeof RATING)[keyof typeof RATING]