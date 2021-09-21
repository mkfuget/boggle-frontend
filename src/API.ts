/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateModuleInput = {
  id?: string | null,
  title: string,
  description: string,
  link: string,
  pictureLocation?: string | null,
  tags?: Array< string | null > | null,
};

export type ModelModuleConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  pictureLocation?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelModuleConditionInput | null > | null,
  or?: Array< ModelModuleConditionInput | null > | null,
  not?: ModelModuleConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Module = {
  __typename: "Module",
  id: string,
  title: string,
  description: string,
  link: string,
  pictureLocation?: string | null,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateModuleInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  link?: string | null,
  pictureLocation?: string | null,
  tags?: Array< string | null > | null,
};

export type DeleteModuleInput = {
  id: string,
};

export type CreateSudokuPuzzleInput = {
  id?: string | null,
  entries: Array< number | null >,
};

export type ModelSudokuPuzzleConditionInput = {
  entries?: ModelIntInput | null,
  and?: Array< ModelSudokuPuzzleConditionInput | null > | null,
  or?: Array< ModelSudokuPuzzleConditionInput | null > | null,
  not?: ModelSudokuPuzzleConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type SudokuPuzzle = {
  __typename: "SudokuPuzzle",
  id: string,
  entries: Array< number | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSudokuPuzzleInput = {
  id: string,
  entries?: Array< number | null > | null,
};

export type DeleteSudokuPuzzleInput = {
  id: string,
};

export type CreatePathFinderPuzzleInput = {
  id?: string | null,
  entries: Array< number | null >,
};

export type ModelPathFinderPuzzleConditionInput = {
  entries?: ModelIntInput | null,
  and?: Array< ModelPathFinderPuzzleConditionInput | null > | null,
  or?: Array< ModelPathFinderPuzzleConditionInput | null > | null,
  not?: ModelPathFinderPuzzleConditionInput | null,
};

export type PathFinderPuzzle = {
  __typename: "PathFinderPuzzle",
  id: string,
  entries: Array< number | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePathFinderPuzzleInput = {
  id: string,
  entries?: Array< number | null > | null,
};

export type DeletePathFinderPuzzleInput = {
  id: string,
};

export type ModelModuleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  pictureLocation?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelModuleFilterInput | null > | null,
  or?: Array< ModelModuleFilterInput | null > | null,
  not?: ModelModuleFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelModuleConnection = {
  __typename: "ModelModuleConnection",
  items?:  Array<Module | null > | null,
  nextToken?: string | null,
};

export type ModelSudokuPuzzleFilterInput = {
  id?: ModelIDInput | null,
  entries?: ModelIntInput | null,
  and?: Array< ModelSudokuPuzzleFilterInput | null > | null,
  or?: Array< ModelSudokuPuzzleFilterInput | null > | null,
  not?: ModelSudokuPuzzleFilterInput | null,
};

export type ModelSudokuPuzzleConnection = {
  __typename: "ModelSudokuPuzzleConnection",
  items?:  Array<SudokuPuzzle | null > | null,
  nextToken?: string | null,
};

export type ModelPathFinderPuzzleFilterInput = {
  id?: ModelIDInput | null,
  entries?: ModelIntInput | null,
  and?: Array< ModelPathFinderPuzzleFilterInput | null > | null,
  or?: Array< ModelPathFinderPuzzleFilterInput | null > | null,
  not?: ModelPathFinderPuzzleFilterInput | null,
};

export type ModelPathFinderPuzzleConnection = {
  __typename: "ModelPathFinderPuzzleConnection",
  items?:  Array<PathFinderPuzzle | null > | null,
  nextToken?: string | null,
};

export type CreateModuleMutationVariables = {
  input: CreateModuleInput,
  condition?: ModelModuleConditionInput | null,
};

export type CreateModuleMutation = {
  createModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description: string,
    link: string,
    pictureLocation?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateModuleMutationVariables = {
  input: UpdateModuleInput,
  condition?: ModelModuleConditionInput | null,
};

export type UpdateModuleMutation = {
  updateModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description: string,
    link: string,
    pictureLocation?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteModuleMutationVariables = {
  input: DeleteModuleInput,
  condition?: ModelModuleConditionInput | null,
};

export type DeleteModuleMutation = {
  deleteModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description: string,
    link: string,
    pictureLocation?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSudokuPuzzleMutationVariables = {
  input: CreateSudokuPuzzleInput,
  condition?: ModelSudokuPuzzleConditionInput | null,
};

export type CreateSudokuPuzzleMutation = {
  createSudokuPuzzle?:  {
    __typename: "SudokuPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSudokuPuzzleMutationVariables = {
  input: UpdateSudokuPuzzleInput,
  condition?: ModelSudokuPuzzleConditionInput | null,
};

export type UpdateSudokuPuzzleMutation = {
  updateSudokuPuzzle?:  {
    __typename: "SudokuPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSudokuPuzzleMutationVariables = {
  input: DeleteSudokuPuzzleInput,
  condition?: ModelSudokuPuzzleConditionInput | null,
};

export type DeleteSudokuPuzzleMutation = {
  deleteSudokuPuzzle?:  {
    __typename: "SudokuPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePathFinderPuzzleMutationVariables = {
  input: CreatePathFinderPuzzleInput,
  condition?: ModelPathFinderPuzzleConditionInput | null,
};

export type CreatePathFinderPuzzleMutation = {
  createPathFinderPuzzle?:  {
    __typename: "PathFinderPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePathFinderPuzzleMutationVariables = {
  input: UpdatePathFinderPuzzleInput,
  condition?: ModelPathFinderPuzzleConditionInput | null,
};

export type UpdatePathFinderPuzzleMutation = {
  updatePathFinderPuzzle?:  {
    __typename: "PathFinderPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePathFinderPuzzleMutationVariables = {
  input: DeletePathFinderPuzzleInput,
  condition?: ModelPathFinderPuzzleConditionInput | null,
};

export type DeletePathFinderPuzzleMutation = {
  deletePathFinderPuzzle?:  {
    __typename: "PathFinderPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetModuleQueryVariables = {
  id: string,
};

export type GetModuleQuery = {
  getModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description: string,
    link: string,
    pictureLocation?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListModulesQueryVariables = {
  filter?: ModelModuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListModulesQuery = {
  listModules?:  {
    __typename: "ModelModuleConnection",
    items?:  Array< {
      __typename: "Module",
      id: string,
      title: string,
      description: string,
      link: string,
      pictureLocation?: string | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSudokuPuzzleQueryVariables = {
  id: string,
};

export type GetSudokuPuzzleQuery = {
  getSudokuPuzzle?:  {
    __typename: "SudokuPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSudokuPuzzlesQueryVariables = {
  filter?: ModelSudokuPuzzleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSudokuPuzzlesQuery = {
  listSudokuPuzzles?:  {
    __typename: "ModelSudokuPuzzleConnection",
    items?:  Array< {
      __typename: "SudokuPuzzle",
      id: string,
      entries: Array< number | null >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPathFinderPuzzleQueryVariables = {
  id: string,
};

export type GetPathFinderPuzzleQuery = {
  getPathFinderPuzzle?:  {
    __typename: "PathFinderPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPathFinderPuzzlesQueryVariables = {
  filter?: ModelPathFinderPuzzleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPathFinderPuzzlesQuery = {
  listPathFinderPuzzles?:  {
    __typename: "ModelPathFinderPuzzleConnection",
    items?:  Array< {
      __typename: "PathFinderPuzzle",
      id: string,
      entries: Array< number | null >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateModuleSubscription = {
  onCreateModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description: string,
    link: string,
    pictureLocation?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateModuleSubscription = {
  onUpdateModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description: string,
    link: string,
    pictureLocation?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteModuleSubscription = {
  onDeleteModule?:  {
    __typename: "Module",
    id: string,
    title: string,
    description: string,
    link: string,
    pictureLocation?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSudokuPuzzleSubscription = {
  onCreateSudokuPuzzle?:  {
    __typename: "SudokuPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSudokuPuzzleSubscription = {
  onUpdateSudokuPuzzle?:  {
    __typename: "SudokuPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSudokuPuzzleSubscription = {
  onDeleteSudokuPuzzle?:  {
    __typename: "SudokuPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePathFinderPuzzleSubscription = {
  onCreatePathFinderPuzzle?:  {
    __typename: "PathFinderPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePathFinderPuzzleSubscription = {
  onUpdatePathFinderPuzzle?:  {
    __typename: "PathFinderPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePathFinderPuzzleSubscription = {
  onDeletePathFinderPuzzle?:  {
    __typename: "PathFinderPuzzle",
    id: string,
    entries: Array< number | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};
