import React from 'react'

import { Link } from "react-router-dom"
import { createQuestion, getSubjects } from "../../utils/QuizService"

const AddQuestion = () =>{
    cosnt[AddQuestion, setQuestion] = useState("")
    const[questionType, setQuestionType] = usestate("single")
    const[choices, setChoices] = useState([""])
    const[correctAnswer, setCorrectAnswers] = useState([""])
    const[subject, setSubject] = useState("")
    const[newSubject, setNewSubject] = useState("")
    const[subjectOptions, setSubjectOptions]= useState([""])

    useEffect(() => {
        fetchSubjects()
    }, [])

const fetchSubjects = async() =>{
    try {
        const subjectData = await getSubjects()
        setSubjectOptions(subjectData)  
    } catch (error) {
        console.error(error)
        
    }
}

const handleAddChoice = async()=>{
    const lastChoice = choices[choices.lenght -1]
    const lastChoiceLetter = lastChoice ? lastChoice.charAt(0):"A"
    const newChoiceLetter = String.fromCharCode(lastChoiceLetter.charAt(0)+1) 
    const newChoice = `${newChoiceLetter}`
    setChoices([...choices, newChoice])

}

const handleRemoveChoice = (index) =>{
    setChoices(choices.filter((choice, i) => i !==index))
}

const handleChoiceChange = (index, value) => {
    setChoices(choices.map((choice, i)=> (i === index ? value:choice)))
}

const handleCorrectAnswerChange = (index, value) =>{
    setCorrectAnswers(correctAnswers.map((answer, i)=> (i === index? value:answer)))

}

    const handleAddCorrectAnswer = () => {
    setCorrectAnswers([...correctAnswers, ""])
}

const handleRemoveCorrectAnswer = (index) =>{
    setCorrectAnswers(correctAnswers.filter((answer, i) => i !== index))
}

const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
        const result = {question, 
            questionType,
             choices,
             correctAnswers: correctAnswers.map((answer)=> {
                const choiceLetter = answercharAt(0).toUpperCase()
                const choiceIndex = choiceLetter.charCodeAt(0)-65
                return choiceIndex >= 0 && choiceIndex <choice.lenght ? choiceLetter :null

        }),
        subject
    }
       await createQuestion (result)
       setQuestion("")
       setQuestionType("single")
       setChoices([""])
       setCorrectAnswers([""])
       setSubject("")

    } catch (error) {
        console.error(error)
        
    }
}

const handleAddSubject = () =>{
    if(newSubject.trim() !==""){
        setSubject(newSubject.trim())
        setSubjectOptions([...subjectOptions, newSubject.trim()])
        setNewSubject("")
    }

}

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div classname="col-md-6 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Add New Question</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="p-2">
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label text-info">
                                    Select a subject
                                    </label>
                                    <select
                                        id="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="from-control">
                                        <option value="">Select a Subject</option>
                                        <option value={"New"}>Add New <Subject></Subject></option>
                                        {subjectOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {subject === "New" && (
                                    <div className="mb-3">
                                        <label htmlFor="new-subject" className="for-label text-info">
                                            Add a New Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="new-subject"
                                            value={newSubject}
                                            onChange={(event) => setNewSubject(e.target.value)}
                                            className="form-control"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary btn-sm mt-2"
                                            onClick={handleAddSubject}
                                        >Add Subject
                                        </button>
                                    </div>
                                )}
                                <div className="mb-3">
                                    <label htmlFor="question-text" classname="form-label text-info">
                                        Question
                                    </label>
                                    <textarea
                                        classname="form-control"
                                        rows={4}
                                        value={question}
                                        onChange={(e) => setQuestionText(e.target.value)}
                                    >
                                    </textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="question-type" classname="form-label text-info">
                                        Question Type
                                    </label>
                                    <select 
                                        id="question-type"
                                        value={questionType}
                                        onChange={(event) => setQuestionType(event.target.value)} 
                                        className="form-control">
                                        <option value={"single"}>Single Answer</option>
                                        <option value={"multiple"}>Multiple Answers</option>
                                    </select>
                                </div>
                                <div className= "mb-3">
                                <label htmlFor="choices" classname="form-label text-primary">
                                    Choices
                                </label>
                                {choices.map((choice, index) => (
                                    <div key={index} className="input-group mb-3">
                                        <input
                                            type="text"
                                            value={choice}
                                            onChange={(e) => handleChoiceChange(index, e.target.value)}
                                            className="form-control"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveChoice(index)}
                                            className="btn btn-outline-danger btn-sm"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddChoice}
                                    className="btn btn-outline-danger btn-sm"
                                >
                                    Add Choice
                                </button>
                                </div>
                                {questionType === "single" && (
                                    <div className="mb-3">
                                        <label htmlFor="answer" className="form-label text-info">
                                            Correct Answer
                                        </label>
                                        <input
                                            type="text"
                                            id="answer"
                                            value={correctAnswers[0]}
                                            onChange={(e) => handleCorrectAnswerChange(0, e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                )}
                                {questionType === "multiple" && (
                                    <div className="mb-3">
                                        <label htmlFor="answer" className="form-label text-info">
                                            Correct Answer(s)
                                        </label>
                                        {correctAnswers.map((answer, index) => (
                                        <div key={index} className="d-flex mb-2">
                                            <input
                                                type="text"
                                                value={answer}
                                                onChange={(e) => handleCorrectAnswerChange(index, e.target.value)}
                                                className="form-control"

                                            />
                                            {index > 0 && (
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btm-sm"
                                                    onClick={() => handleRemoveCorrectAnswer(index)}>
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                        <button
                                            type="button"
                                            className= "btn btn-outline-info"
                                            onClick={handleAddCorrectAnswer}>
                                            Add Correct Answer
                                        </button>
                                    </div>
                                )}
                                {!correctAnswer.length && <p>Please select at least one correct answer.</p>}
                                <div className="btn-group">
                                    <button type="submit" className="btn btn-outline-success mr-2">
                                        Save Question
                                    </button>
                                    { <Link to={"/all-quizzes"} className="btn btn-outline-success mr-2">
                                    Existing Questions
                                </Link> }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddQuestion