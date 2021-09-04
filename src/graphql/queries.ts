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
