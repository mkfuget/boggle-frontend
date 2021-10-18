/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createModule = /* GraphQL */ `
  mutation CreateModule(
    $input: CreateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    createModule(input: $input, condition: $condition) {
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
export const updateModule = /* GraphQL */ `
  mutation UpdateModule(
    $input: UpdateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    updateModule(input: $input, condition: $condition) {
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
export const deleteModule = /* GraphQL */ `
  mutation DeleteModule(
    $input: DeleteModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    deleteModule(input: $input, condition: $condition) {
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
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
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
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
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
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
      id
      title
      description
      difficulty
      questions {
        question {
          type
          content
        }
        options {
          description
          isAnswer
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
      id
      title
      description
      difficulty
      questions {
        question {
          type
          content
        }
        options {
          description
          isAnswer
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
      id
      title
      description
      difficulty
      questions {
        question {
          type
          content
        }
        options {
          description
          isAnswer
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSudokuPuzzle = /* GraphQL */ `
  mutation CreateSudokuPuzzle(
    $input: CreateSudokuPuzzleInput!
    $condition: ModelSudokuPuzzleConditionInput
  ) {
    createSudokuPuzzle(input: $input, condition: $condition) {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const updateSudokuPuzzle = /* GraphQL */ `
  mutation UpdateSudokuPuzzle(
    $input: UpdateSudokuPuzzleInput!
    $condition: ModelSudokuPuzzleConditionInput
  ) {
    updateSudokuPuzzle(input: $input, condition: $condition) {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const deleteSudokuPuzzle = /* GraphQL */ `
  mutation DeleteSudokuPuzzle(
    $input: DeleteSudokuPuzzleInput!
    $condition: ModelSudokuPuzzleConditionInput
  ) {
    deleteSudokuPuzzle(input: $input, condition: $condition) {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const createPathFinderPuzzle = /* GraphQL */ `
  mutation CreatePathFinderPuzzle(
    $input: CreatePathFinderPuzzleInput!
    $condition: ModelPathFinderPuzzleConditionInput
  ) {
    createPathFinderPuzzle(input: $input, condition: $condition) {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const updatePathFinderPuzzle = /* GraphQL */ `
  mutation UpdatePathFinderPuzzle(
    $input: UpdatePathFinderPuzzleInput!
    $condition: ModelPathFinderPuzzleConditionInput
  ) {
    updatePathFinderPuzzle(input: $input, condition: $condition) {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const deletePathFinderPuzzle = /* GraphQL */ `
  mutation DeletePathFinderPuzzle(
    $input: DeletePathFinderPuzzleInput!
    $condition: ModelPathFinderPuzzleConditionInput
  ) {
    deletePathFinderPuzzle(input: $input, condition: $condition) {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const createConceptsData = /* GraphQL */ `
  mutation CreateConceptsData(
    $input: CreateConceptsDataInput!
    $condition: ModelConceptsDataConditionInput
  ) {
    createConceptsData(input: $input, condition: $condition) {
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
export const updateConceptsData = /* GraphQL */ `
  mutation UpdateConceptsData(
    $input: UpdateConceptsDataInput!
    $condition: ModelConceptsDataConditionInput
  ) {
    updateConceptsData(input: $input, condition: $condition) {
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
export const deleteConceptsData = /* GraphQL */ `
  mutation DeleteConceptsData(
    $input: DeleteConceptsDataInput!
    $condition: ModelConceptsDataConditionInput
  ) {
    deleteConceptsData(input: $input, condition: $condition) {
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
