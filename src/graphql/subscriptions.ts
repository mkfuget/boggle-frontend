/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateModule = /* GraphQL */ `
  subscription OnCreateModule {
    onCreateModule {
      id
      title
      description
      link
      pictureLocation
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModule = /* GraphQL */ `
  subscription OnUpdateModule {
    onUpdateModule {
      id
      title
      description
      link
      pictureLocation
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModule = /* GraphQL */ `
  subscription OnDeleteModule {
    onDeleteModule {
      id
      title
      description
      link
      pictureLocation
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
      id
      title
      content {
        type
        content
      }
      code
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
      id
      title
      content {
        type
        content
      }
      code
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
      id
      title
      content {
        type
        content
      }
      code
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
      id
      title
      description
      difficulty
      questions {
        question {
          type
          content
        }
        options
        answer
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
      id
      title
      description
      difficulty
      questions {
        question {
          type
          content
        }
        options
        answer
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
      id
      title
      description
      difficulty
      questions {
        question {
          type
          content
        }
        options
        answer
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSudokuPuzzle = /* GraphQL */ `
  subscription OnCreateSudokuPuzzle {
    onCreateSudokuPuzzle {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSudokuPuzzle = /* GraphQL */ `
  subscription OnUpdateSudokuPuzzle {
    onUpdateSudokuPuzzle {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSudokuPuzzle = /* GraphQL */ `
  subscription OnDeleteSudokuPuzzle {
    onDeleteSudokuPuzzle {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePathFinderPuzzle = /* GraphQL */ `
  subscription OnCreatePathFinderPuzzle {
    onCreatePathFinderPuzzle {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePathFinderPuzzle = /* GraphQL */ `
  subscription OnUpdatePathFinderPuzzle {
    onUpdatePathFinderPuzzle {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePathFinderPuzzle = /* GraphQL */ `
  subscription OnDeletePathFinderPuzzle {
    onDeletePathFinderPuzzle {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConceptsData = /* GraphQL */ `
  subscription OnCreateConceptsData {
    onCreateConceptsData {
      id
      pages {
        title
        content {
          type
          content
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConceptsData = /* GraphQL */ `
  subscription OnUpdateConceptsData {
    onUpdateConceptsData {
      id
      pages {
        title
        content {
          type
          content
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConceptsData = /* GraphQL */ `
  subscription OnDeleteConceptsData {
    onDeleteConceptsData {
      id
      pages {
        title
        content {
          type
          content
        }
      }
      createdAt
      updatedAt
    }
  }
`;
