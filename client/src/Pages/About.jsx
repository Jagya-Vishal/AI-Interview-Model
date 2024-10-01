import React from 'react'

function About() {
  return (
    <div >
      <h1 style={{  fontWeight: 'bold' }}>About Page</h1>
      <br></br>
      <div style={{ textAlign: 'justify', marginBottom: '1rem', lineHeight: '1.5' }}>
     
        <p>The AI-driven Interview Model is an innovative system designed to revolutionize the traditional interview process by leveraging artificial intelligence (AI) and natural language processing (NLP) technologies. This system aims to overcome the inefficiencies and biases commonly associated with conventional interviews, providing a more objective, efficient, and scalable solution for assessing candidates. The model utilizes a client-server architecture, featuring a React JS frontend that offers a seamless user interface for candidates, while the backend, developed using Flask (Python), manages API requests, session handling, and communication with AI models via the Gemini API. </p>

        <br></br>

        <p>By addressing critical issues such as interview inefficiency, human bias, and lack of standardization, the AI-driven Interview Model offers a data-driven approach that enhances both the recruiter’s decision-making process and the candidate’s experience. The system’s automation and optimization of the interview process aim to transform recruitment practices, making them more accurate, fair, and resource-efficient
        </p>
    
    </div>
    </div>
  )
}

export default About
