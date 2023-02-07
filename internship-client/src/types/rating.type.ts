export const RATING ={
    NONE: 'NONE',
    BAD: 'BAD',
    PRRETTYBAD: 'PRRETTYBAD',
    MEDIUM: 'MEDIUM',
    GOOD: 'GOOD',
    PERTTYGOOD: 'PERTTYGOOD'
  };
  
  export type RATINGType = (typeof RATING)[keyof typeof RATING]

  export const RATINGS = [
    {

      id : 'NONE',
      name :'Không có đánh giá',
      value : 'NONE'
    },
    {

      id : 'BAD',
      name :'Công ty tệ',
      value : 'BAD'
    },
    {

      id : 'PRRETTYBAD',
      name :'Công ty quá tệ',
      value : 'PRRETTYBAD'
    },
    {

      id : 'MEDIUM',
      name :'Công ty ở mức bình thường',
      value : 'MEDIUM'
    },
    {

      id : 'GOOD',
      name :'Công ty ở tốt',
      value : 'GOOD'
    },
    {

      id : 'PERTTYGOOD',
      name :'Công ty rất tốt',
      value : 'PERTTYGOOD'
    },
  ]