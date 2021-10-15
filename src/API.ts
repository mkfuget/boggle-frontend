/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateModuleInput = {
  id?: string | null,
  title: string,
  description: string,
  link: string,
  pictureLocation: string,
  tags: Array< string >,
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
  pictureLocation: string,
  tags: Array< string >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateModuleInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  link?: string | null,
  pictureLocation?: string | null,
  tags?: Array< string > | null,
};

export type DeleteModuleInput = {
  id: string,
};

export type CreateLessonInput = {
  id?: string | null,
  title: string,
  content: Array< DivEntryInput >,
  code: Array< string >,
  description: string,
};

export type DivEntryInput = {
  type: DivType,
  content: string,
};

export enum DivType {
  paragraph = "paragraph",
  image = "image",
  gif = "gif",
  figure = "figure",
}


export type ModelLessonConditionInput = {
  title?: ModelStringInput | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelLessonConditionInput | null > | null,
  or?: Array< ModelLessonConditionInput | null > | null,
  not?: ModelLessonConditionInput | null,
};

export type Lesson = {
  __typename: "Lesson",
  id: string,
  title: string,
  content:  Array<DivEntry >,
  code: Array< string >,
  description: string,
  createdAt: string,
  updatedAt: string,
};

export type DivEntry = {
  __typename: "DivEntry",
  type: DivType,
  content: string,
};

export type UpdateLessonInput = {
  title?: string | null,
  content?: Array< DivEntryInput > | null,
  code?: Array< string > | null,
  description?: string | null,
};

export type DeleteLessonInput = {
  id: string,
};

export type CreateQuizInput = {
  id?: string | null,
  title: string,
  questions: Array< QuizQuestionInput >,
};

export type QuizQuestionInput = {
  question: string,
  options: Array< QuizOptionInput >,
};

export type QuizOptionInput = {
  description: string,
  isAnswer: boolean,
};

export type ModelQuizConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelQuizConditionInput | null > | null,
  or?: Array< ModelQuizConditionInput | null > | null,
  not?: ModelQuizConditionInput | null,
};

export type Quiz = {
  __typename: "Quiz",
  id: string,
  title: string,
  questions:  Array<quizQuestion >,
  createdAt: string,
  updatedAt: string,
};

export type quizQuestion = {
  __typename: "quizQuestion",
  question: string,
  options:  Array<quizOption >,
};

export type quizOption = {
  __typename: "quizOption",
  description: string,
  isAnswer: boolean,
};

export type UpdateQuizInput = {
  title?: string | null,
  questions?: Array< QuizQuestionInput > | null,
};

export type DeleteQuizInput = {
  id: string,
};

export type CreateSudokuPuzzleInput = {
  id?: string | null,
  entries: Array< number >,
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
  entries: Array< number >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSudokuPuzzleInput = {
  id: string,
  entries?: Array< number > | null,
};

export type DeleteSudokuPuzzleInput = {
  id: string,
};

export type CreatePathFinderPuzzleInput = {
  id?: string | null,
  entries: Array< string | null >,
};

export type ModelPathFinderPuzzleConditionInput = {
  entries?: ModelStringInput | null,
  and?: Array< ModelPathFinderPuzzleConditionInput | null > | null,
  or?: Array< ModelPathFinderPuzzleConditionInput | null > | null,
  not?: ModelPathFinderPuzzleConditionInput | null,
};

export type PathFinderPuzzle = {
  __typename: "PathFinderPuzzle",
  id: string,
  entries: Array< string | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePathFinderPuzzleInput = {
  id: string,
  entries?: Array< string | null > | null,
};

export type DeletePathFinderPuzzleInput = {
  id: string,
};

export type CreateConceptsDataInput = {
  id?: string | null,
  pages: Array< ModulePageInput >,
};

export type ModulePageInput = {
  title: string,
  content: Array< DivEntryInput >,
};

export type ModelConceptsDataConditionInput = {
  and?: Array< ModelConceptsDataConditionInput | null > | null,
  or?: Array< ModelConceptsDataConditionInput | null > | null,
  not?: ModelConceptsDataConditionInput | null,
};

export type ConceptsData = {
  __typename: "ConceptsData",
  id: string,
  pages:  Array<ModulePage >,
  createdAt: string,
  updatedAt: string,
};

export type ModulePage = {
  __typename: "ModulePage",
  title: string,
  content:  Array<DivEntry >,
};

export type UpdateConceptsDataInput = {
  id: string,
  pages?: Array< ModulePageInput > | null,
};

export type DeleteConceptsDataInput = {
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

export type ModelLessonFilterInput = {
  title?: ModelStringInput | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelLessonFilterInput | null > | null,
  or?: Array< ModelLessonFilterInput | null > | null,
  not?: ModelLessonFilterInput | null,
};

export type ModelLessonConnection = {
  __typename: "ModelLessonConnection",
  items?:  Array<Lesson | null > | null,
  nextToken?: string | null,
};

export type ModelQuizFilterInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelQuizFilterInput | null > | null,
  or?: Array< ModelQuizFilterInput | null > | null,
  not?: ModelQuizFilterInput | null,
};

export type ModelQuizConnection = {
  __typename: "ModelQuizConnection",
  items?:  Array<Quiz | null > | null,
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
  entries?: ModelStringInput | null,
  and?: Array< ModelPathFinderPuzzleFilterInput | null > | null,
  or?: Array< ModelPathFinderPuzzleFilterInput | null > | null,
  not?: ModelPathFinderPuzzleFilterInput | null,
};

export type ModelPathFinderPuzzleConnection = {
  __typename: "ModelPathFinderPuzzleConnection",
  items?:  Array<PathFinderPuzzle | null > | null,
  nextToken?: string | null,
};

export type ModelConceptsDataFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelConceptsDataFilterInput | null > | null,
  or?: Array< ModelConceptsDataFilterInput | null > | null,
  not?: ModelConceptsDataFilterInput | null,
};

export type ModelConceptsDataConnection = {
  __typename: "ModelConceptsDataConnection",
  items?:  Array<ConceptsData | null > | null,
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
    pictureLocation: string,
    tags: Array< string >,
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
    pictureLocation: string,
    tags: Array< string >,
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
    pictureLocation: string,
    tags: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLessonMutationVariables = {
  input: CreateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type CreateLessonMutation = {
  createLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content:  Array< {
      __typename: "DivEntry",
      type: DivType,
      content: string,
    } >,
    code: Array< string >,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLessonMutationVariables = {
  input: UpdateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type UpdateLessonMutation = {
  updateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content:  Array< {
      __typename: "DivEntry",
      type: DivType,
      content: string,
    } >,
    code: Array< string >,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLessonMutationVariables = {
  input: DeleteLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type DeleteLessonMutation = {
  deleteLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content:  Array< {
      __typename: "DivEntry",
      type: DivType,
      content: string,
    } >,
    code: Array< string >,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuizMutationVariables = {
  input: CreateQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type CreateQuizMutation = {
  createQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  Array< {
      __typename: "quizQuestion",
      question: string,
      options:  Array< {
        __typename: "quizOption",
        description: string,
        isAnswer: boolean,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuizMutationVariables = {
  input: UpdateQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type UpdateQuizMutation = {
  updateQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  Array< {
      __typename: "quizQuestion",
      question: string,
      options:  Array< {
        __typename: "quizOption",
        description: string,
        isAnswer: boolean,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuizMutationVariables = {
  input: DeleteQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type DeleteQuizMutation = {
  deleteQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  Array< {
      __typename: "quizQuestion",
      question: string,
      options:  Array< {
        __typename: "quizOption",
        description: string,
        isAnswer: boolean,
      } >,
    } >,
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
    entries: Array< number >,
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
    entries: Array< number >,
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
    entries: Array< number >,
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
    entries: Array< string | null >,
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
    entries: Array< string | null >,
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
    entries: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConceptsDataMutationVariables = {
  input: CreateConceptsDataInput,
  condition?: ModelConceptsDataConditionInput | null,
};

export type CreateConceptsDataMutation = {
  createConceptsData?:  {
    __typename: "ConceptsData",
    id: string,
    pages:  Array< {
      __typename: "ModulePage",
      title: string,
      content:  Array< {
        __typename: "DivEntry",
        type: DivType,
        content: string,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConceptsDataMutationVariables = {
  input: UpdateConceptsDataInput,
  condition?: ModelConceptsDataConditionInput | null,
};

export type UpdateConceptsDataMutation = {
  updateConceptsData?:  {
    __typename: "ConceptsData",
    id: string,
    pages:  Array< {
      __typename: "ModulePage",
      title: string,
      content:  Array< {
        __typename: "DivEntry",
        type: DivType,
        content: string,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConceptsDataMutationVariables = {
  input: DeleteConceptsDataInput,
  condition?: ModelConceptsDataConditionInput | null,
};

export type DeleteConceptsDataMutation = {
  deleteConceptsData?:  {
    __typename: "ConceptsData",
    id: string,
    pages:  Array< {
      __typename: "ModulePage",
      title: string,
      content:  Array< {
        __typename: "DivEntry",
        type: DivType,
        content: string,
      } >,
    } >,
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
    pictureLocation: string,
    tags: Array< string >,
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
      pictureLocation: string,
      tags: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLessonQueryVariables = {
  id: string,
};

export type GetLessonQuery = {
  getLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content:  Array< {
      __typename: "DivEntry",
      type: DivType,
      content: string,
    } >,
    code: Array< string >,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLessonsQueryVariables = {
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLessonsQuery = {
  listLessons?:  {
    __typename: "ModelLessonConnection",
    items?:  Array< {
      __typename: "Lesson",
      id: string,
      title: string,
      content:  Array< {
        __typename: "DivEntry",
        type: DivType,
        content: string,
      } >,
      code: Array< string >,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetQuizQueryVariables = {
  id: string,
};

export type GetQuizQuery = {
  getQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  Array< {
      __typename: "quizQuestion",
      question: string,
      options:  Array< {
        __typename: "quizOption",
        description: string,
        isAnswer: boolean,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuizzesQueryVariables = {
  filter?: ModelQuizFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuizzesQuery = {
  listQuizzes?:  {
    __typename: "ModelQuizConnection",
    items?:  Array< {
      __typename: "Quiz",
      id: string,
      title: string,
      questions:  Array< {
        __typename: "quizQuestion",
        question: string,
        options:  Array< {
          __typename: "quizOption",
          description: string,
          isAnswer: boolean,
        } >,
      } >,
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
    entries: Array< number >,
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
      entries: Array< number >,
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
    entries: Array< string | null >,
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
      entries: Array< string | null >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetConceptsDataQueryVariables = {
  id: string,
};

export type GetConceptsDataQuery = {
  getConceptsData?:  {
    __typename: "ConceptsData",
    id: string,
    pages:  Array< {
      __typename: "ModulePage",
      title: string,
      content:  Array< {
        __typename: "DivEntry",
        type: DivType,
        content: string,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConceptsDataQueryVariables = {
  filter?: ModelConceptsDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConceptsDataQuery = {
  listConceptsData?:  {
    __typename: "ModelConceptsDataConnection",
    items?:  Array< {
      __typename: "ConceptsData",
      id: string,
      pages:  Array< {
        __typename: "ModulePage",
        title: string,
        content:  Array< {
          __typename: "DivEntry",
          type: DivType,
          content: string,
        } >,
      } >,
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
    pictureLocation: string,
    tags: Array< string >,
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
    pictureLocation: string,
    tags: Array< string >,
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
    pictureLocation: string,
    tags: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLessonSubscription = {
  onCreateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content:  Array< {
      __typename: "DivEntry",
      type: DivType,
      content: string,
    } >,
    code: Array< string >,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLessonSubscription = {
  onUpdateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content:  Array< {
      __typename: "DivEntry",
      type: DivType,
      content: string,
    } >,
    code: Array< string >,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLessonSubscription = {
  onDeleteLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    content:  Array< {
      __typename: "DivEntry",
      type: DivType,
      content: string,
    } >,
    code: Array< string >,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuizSubscription = {
  onCreateQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  Array< {
      __typename: "quizQuestion",
      question: string,
      options:  Array< {
        __typename: "quizOption",
        description: string,
        isAnswer: boolean,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuizSubscription = {
  onUpdateQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  Array< {
      __typename: "quizQuestion",
      question: string,
      options:  Array< {
        __typename: "quizOption",
        description: string,
        isAnswer: boolean,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuizSubscription = {
  onDeleteQuiz?:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  Array< {
      __typename: "quizQuestion",
      question: string,
      options:  Array< {
        __typename: "quizOption",
        description: string,
        isAnswer: boolean,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSudokuPuzzleSubscription = {
  onCreateSudokuPuzzle?:  {
    __typename: "SudokuPuzzle",
    id: string,
    entries: Array< number >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSudokuPuzzleSubscription = {
  onUpdateSudokuPuzzle?:  {
    __typename: "SudokuPuzzle",
    id: string,
    entries: Array< number >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSudokuPuzzleSubscription = {
  onDeleteSudokuPuzzle?:  {
    __typename: "SudokuPuzzle",
    id: string,
    entries: Array< number >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePathFinderPuzzleSubscription = {
  onCreatePathFinderPuzzle?:  {
    __typename: "PathFinderPuzzle",
    id: string,
    entries: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePathFinderPuzzleSubscription = {
  onUpdatePathFinderPuzzle?:  {
    __typename: "PathFinderPuzzle",
    id: string,
    entries: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePathFinderPuzzleSubscription = {
  onDeletePathFinderPuzzle?:  {
    __typename: "PathFinderPuzzle",
    id: string,
    entries: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConceptsDataSubscription = {
  onCreateConceptsData?:  {
    __typename: "ConceptsData",
    id: string,
    pages:  Array< {
      __typename: "ModulePage",
      title: string,
      content:  Array< {
        __typename: "DivEntry",
        type: DivType,
        content: string,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConceptsDataSubscription = {
  onUpdateConceptsData?:  {
    __typename: "ConceptsData",
    id: string,
    pages:  Array< {
      __typename: "ModulePage",
      title: string,
      content:  Array< {
        __typename: "DivEntry",
        type: DivType,
        content: string,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConceptsDataSubscription = {
  onDeleteConceptsData?:  {
    __typename: "ConceptsData",
    id: string,
    pages:  Array< {
      __typename: "ModulePage",
      title: string,
      content:  Array< {
        __typename: "DivEntry",
        type: DivType,
        content: string,
      } >,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};
