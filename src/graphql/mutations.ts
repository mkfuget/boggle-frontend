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
