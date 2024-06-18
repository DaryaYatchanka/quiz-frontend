import React from 'react'

const AddQuestion = () =>{
    cosnt[AddQuestion, setQuestion] = useState("")
    const[questionType, setQuestionType] = usestate("single")
    const[choices, setChoices] = useState([""])
    const[correctAnswer, setCorrectAnswers] = useState([""])
    const[subject, setSubject] = useState("")
    const[newSubject, setNewSubject] = useState("")
    const[subjectOptions, setSubjectOptions]= useState([""])

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

const handleCorrectAnswer = () =>{
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
        <div>

        </div>
    )
}

export default AddQuestion