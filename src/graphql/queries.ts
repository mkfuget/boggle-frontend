/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getModule = /* GraphQL */ `
  query GetModule($id: ID!) {
    getModule(id: $id) {
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
export const listModules = /* GraphQL */ `
  query ListModules(
    $filter: ModelModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        link
        pictureLocation
        tags
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
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
export const listQuizzes = /* GraphQL */ `
  query ListQuizzes(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSudokuPuzzle = /* GraphQL */ `
  query GetSudokuPuzzle($id: ID!) {
    getSudokuPuzzle(id: $id) {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const listSudokuPuzzles = /* GraphQL */ `
  query ListSudokuPuzzles(
    $filter: ModelSudokuPuzzleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSudokuPuzzles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        entries
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPathFinderPuzzle = /* GraphQL */ `
  query GetPathFinderPuzzle($id: ID!) {
    getPathFinderPuzzle(id: $id) {
      id
      entries
      createdAt
      updatedAt
    }
  }
`;
export const listPathFinderPuzzles = /* GraphQL */ `
  query ListPathFinderPuzzles(
    $filter: ModelPathFinderPuzzleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPathFinderPuzzles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        entries
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConceptsData = /* GraphQL */ `
  query GetConceptsData($id: ID!) {
    getConceptsData(id: $id) {
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
export const listConceptsData = /* GraphQL */ `
  query ListConceptsData(
    $filter: ModelConceptsDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConceptsData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
