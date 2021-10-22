import { GraphQLResult } from '@aws-amplify/api'
import { graphqlOperation, API, Storage} from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { ListQuizzesQuery } from '../API'
import {  listQuizzes } from '../graphql/queries'
import "./quizzes.css"
interface QuizzesEntryProps {
    title: string
    link: string
    description: string
    difficulty: string
    numQuestions: number

}

const QuizEntry = ({title, link, description, difficulty, numQuestions}:QuizzesEntryProps) => {
    return (
        <a className = "quizentry card" href = {`/quizzes/${link}`}>
            <h2 className = "title">{title}</h2>
            <p className = "description">{description}</p>
            <div className = "description">Difficulty: {difficulty}</div>
            <div className = "questionscount">Questions: {numQuestions}</div>


        </a>
    )
}

export const QuizzesList = () => {

    const [quizzes, setQuizzes] = useState<ListQuizzesQuery | undefined>(undefined); 
    useEffect(() => {
        fetchLessons();
    }, [])

    const fetchLessons = async () => {
        try {
            const QuizzesData = await API.graphql({
                query: listQuizzes,
                authMode: 'AWS_IAM'
            }) as { data: ListQuizzesQuery};
            setQuizzes(QuizzesData.data);
            
        } catch (error) {
            console.log(error);
        }
    } 
    if(quizzes?.listQuizzes?.items)
    {
        return (
            <div className = "Quiz list">
                <h2 className = "pagetile">Test Coding Knowledge</h2>
                {quizzes?.listQuizzes?.items.map((element, index) => 
                    {
                        if(element)
                        {
                            return (
                                <QuizEntry
                                    key = {element.id}
                                    title = {element.title}
                                    description = {element.description}
                                    numQuestions = {element.questions.length}
                                    difficulty = {element.difficulty}
                                    link = {element.id}
                                />
                            )
                        }
                        else
                        {
                            return <div></div>
                        }
                    })
                }
                
            </div>
            
        )
    }
    return (<div></div>)

}

