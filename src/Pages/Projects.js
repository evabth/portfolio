import React from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'
import './Page Styles/project_style.css'

function Projects(){
    return (
        <div className='Page'>
            <Navbar/>
            <div className = 'project_container'>
                <h3>Personal Website</h3>
                <div className ='Image-Text-Container project_content'>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt = "React Logo"/>
                    <p>The site you are currently on is made by me! This project is a dynamic and responsive website built using React. 
                        The website is designed to provide an engaging user experience with smooth navigation and modern UI components.
                        This site was deployed using Render. Render is a cloud platform that aides in the deployment and scaling of web applications.
                        It provides a reliable and scalable hosting solution, ensuring high availability and performance for the website. 
                        The code for this website is <a href = "https://github.com/evabth/portfolio">here</a>.</p>
                </div>
                
            </div>

            <div className = 'project_container'>
                <h3>Personal Website Backend</h3>
                <div className ='Image-Text-Container project_content'>
                    <img src = "https://i.imgur.com/8rFrhfJ.png" alt = "Express Logo"/>
                    <p>Visit the Music page on this website to discover the top artists and tracks that I frequently listen to. This engaging user experience is powered 
                        by the Spotify API, which is seamlessly integrated into an Express server. The server fetches and delivers the latest music data whenever a GET request 
                        is received from the website. To explore the server code and see how it all works, click <a href="https://github.com/evabth/Portfolio_Server">here</a>.
                    </p>
                </div>
                
            </div>

            <div className = 'project_container'>
                <h3>MNIST Image Classifier</h3>
                <div className = 'Image-Text-Container project_content'>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/496px-PyTorch_logo_icon.svg.png?20200318225611" alt ="PyTorch Logo"/>
                    <p>This project involves creating, training, and testing a neural network to accurately classify handwritten digits (0-9) using the MNIST database. 
                        The implementation was done using PyTorch, a popular deep learning library. With PyTorch, I made a neural network capable of classifying digits from 0 to 9 with high accuracy, 
                        leveraging the Modified National Institute of Standards and Technology (MNIST) dataset, which consists of 28x28 grayscale images of handwritten digits. 
                        The model was trained on thousands of unique images from the dataset. Then the model was tested using new photos that it has never encountered before. After training, 
                        the model's accuracy was 96%, demonstrating its effectiveness in digit classification.
                        If you want to check out the project files you can click <a href='https://github.com/evabth/Mnist-Machine-Learning-Using-Pytorch'>here</a>.</p>
                </div>

            </div>

            <div className = 'project_container'>
                <h3>Lexer, Parser, and Evaluator</h3>
                <div className = 'Image-Text-Container project_content'>
                    <img src = "https://i.imgur.com/UE4k8rK.png" alt = "OCaml Logo"/>
                    <p>This school project involves the development of MicroCaml, a dynamically-typed programming language inspired by OCaml but with a subset of its features. 
                        The project aims to replicate some of the core functionalities of OCaml while introducing dynamic typing. 
                        The implementation includes a lexer, parser, and evaluator to process and execute MicroCaml code. 
                        Additionally, the project features mutop (μtop or Microtop), a REPL (Read-Eval-Print Loop) environment similar to utop, specifically designed for MicroCaml. 
                        This project is written in OCaml and uses regex extensively in the lexer section of the code. 
                        You can check out the project <a href = "https://github.com/evabth/Ocaml-Lexer-Parser-and-Evaluator">here</a>.</p>
                </div>
            </div>
            
        </div>
        
    )
}

export default Projects;