import './App.css';
import Navbar  from './components/Navbar';
function App() {
  return (
    <div className="App">
      <div className='home-container'>
        < Navbar />
        <div className="img-main" style = {{display : "flex" , justifyContent: "center"}}>
          <div className='home-title'>
         <p className='home-title-text'>High End Workshop on AI for Addressing Problems in Precision Oncology</p>
         </div>
         <img src='/poster2.jpeg' alt='poster.jpg'/>
        </div>
       
        <hr />
        <div className='main-content'>
          <div className='left-content'>


            <div className='left-content-data'>
              <p className='left-content-head'>
                Karyashala Objectives:
              </p>
              <p className='left-content-metadata'>
                'KARYASHALA' is a noble endeavor of Government of India by Science and E
                ngineering Board (SERB) under Accelerate Vigyan Scheme to improve research productivity of promising PG and PhD 
                students from universities and colleges through high-end workshops on specific themes. 
                This program aims to provide opportunities to acquire specialized research skills. 
                These workshops will primarily be facilitated at organizations / institutions / laboratories of national importance.
                National Institute of Technology Jamshedpur also play vitil role and decided to be a part of this unique initiative and share our Institutional resources with the society towards higher goals of national importance. Thus, the current workshop has come into being. This event is sponsored by SERB.
              </p>
            </div>



            <div className='left-content-data'>
              <p className='left-content-head'>
                About the Workshop:
              </p>
              <p className='left-content-metadata'>
                'KARYASHALA' is aimed to provide hands-on experience to the students primarily from universities, colleges, private academic institutions,
                  and newly established institutes in handling/troubleshooting of high-end scientific instruments and such skill development on themes 
                  required for research work. The program is meant to support motivated PG and Ph.D. level students.All over the world cancer is one of the Major causes of death. The diagnosis of Cancer is
becoming more effective with the help of Artificial Intelligence technology. Medical
Professionals can quickly and accurately sort through different medical images like CTs, MRIs,
PETs, X-rays etc. with the help of Artificial Intelligence (AI). AI will help in early detection of all
types of Cancer present in any patient and it will reduce the mortality rate. The present
workshop focused on the Challenges facing by Medical Professional in detection and
classification of Medical Images. The workshop provides a platform to researcher, medical
professional and scientists of AI to address the challenges of diagnosis through AI so that the
technology becomes cheap. The workshop also addresses the gap in prevention and control
of the cancer. There is a need to develop expertise and exposure to design and development
of AI based algorithms and application of machine Learning in Oncology among PG/PhD
scholars and young faculty members. With this view this 6 days’ program is designed to
acclimatise them both on front of experimental and computational aspects of Artificial
Intelligence and its applications through high end lectures and hands on practice on latest
facilities. It would be interesting to introduce AI and its use in field of diagnosis of Cancer to
young minds.
              </p>
            </div>

            <div className='left-content-data'>
              <p className='left-content-head'>
                Learning Objectives:
              </p>
              <p className='left-content-metadata'>
                <ol start="1" type="1">
                  <li>To explore the Computational Issues in Oncology. </li>
                  <li>To develop analytical and experimental skills on AI </li>
                  <li> To address new artificial intelligence (AI) and machine learning methods to diagnose
and predict therapy responses for a variety of cancers.</li>
                  <li>To address gap in the field of cancer prevention and control.</li>
                  <li>Awareness about cancer prevention and control. </li>
                  <li>To enhance the computational diagnosis and research in radiology. </li>
                </ol>
            </p>
          </div>

          <div className='left-content-data'>
            <p className='left-content-head'>
            Who Can Attend:
            </p>
            <p className='left-content-metadata'>
            Karyashala is open to postgraduate and PhD students from Institutes, Colleges, and Universities in India. Applicants pursuing PG/PhD programs in any discipline of Electrical Engineering, Computer Engineering, Bioinformatics, Biology, and Biochemistry are eligible. Students who have recently completed their PG programs are also eligible. Preference will be given to the students having interest in Machine Learning, Signal Processing, Mathematical Biology, Computer Science & Engineering, Computational Biology, and Bioinformatics. Candidates who have completed PhD will not be considered. Total numbers of seats are limited to 25. There is no registration fees.
            </p>
          </div>

          <div className='left-content-data'>
            <p className='left-content-head'>
            Boarding, Lodging & TA:
            </p>
            <p className='left-content-metadata'>
            Boarding and lodging to the selected candidates will be borne by the organizing institute. TA will be admissible as per GoI norms.
            </p>
          </div>


          <div className='left-content-data'>
            <p className='left-content-head'>
            About NIT Jamshedpur:
            </p>
            <p className='left-content-metadata'>
            NIT Jamshedpur is an Institute of National Importance, established by Government of India in 2005 with a focus on education and research in IT enabled Design and Manufacturing. Since its inception, PDPM NITM Jamshedpur has been playing a vital role in producing quality human resources for contribution in India’s mission of inclusive and sustainable growth. The Institute offers undergraduate, post graduate and PhD programmes in Computer Science and Engineering, Electronics and Communication Engineering, Mechanical Engineering, Design and PhD programmes in Natural Sciences (Mathematics and Physics). Under IIIT act, the Institute has been declared as an Institute of National Importance in January 2015. The Institute campus is being developed on 250 acres of land close to Dumna Airport, Jamshedpur. The Institute is locsted at a distance of 10 kms from the Jamshedpur railway station and 5.5 kms from Dumna Airport, Jamshedpur.
            </p>
          </div>



        </div>




        <div className='right-content'>

          <div className='right-content-data'>
            <p className='right-content-head'>
              How To Apply:
            </p>
            <p className='right-content-metadata'>
              Register through google form link: google form
              or by scanning the QR code
            </p>
            <img src='https://www.iiitdmj.ac.in/others/workshops/karyashala-CGP/images/qr.png' alt='qr-code.jpg'>
            </img>
          </div>

          <div className='right-content-data'>
            <p className='right-content-head'>
            Important Dates:
            </p>
            <h4>Registration opens: 23 June 2022</h4>
            <h4>Last date for registration: 10 July 2022</h4>
            <h4>Display of shortlisted candidates: 12 July 2022</h4>
            <h4>Workshop dates: 24-30 July 2022</h4>
            
          </div>


          <div className='right-content-data'>
            <p className='right-content-head'>
              Chief Patron
            </p>
            <p >
            Prof. K.K. Shukla,
            </p>
            <p >
            Director
            </p>
            <p >
            NIT Jamshedpur
            </p>
            
          </div>

          <div className='right-content-data'>
            <p className='right-content-head'>
              Organizing Committee
            </p>
            <p >
            Prof. R.V. Sharma, Dy.Director
            </p>
            <p >
            Prof.Sanjay, Dean, R&C
            </p>
            <p >
             Dr.Sanjay Kumar, HOD, C.S.E
            </p>
            
          </div>
          <div className='right-content-data'>
            <p className='right-content-head'>
              Event Organizer
            </p>
            <p >
            Dr. Koushlendra Kumar Singh, Assistant Professor, NIT Jamshedpur
            </p>
          </div>


         

        </div>
      </div>
      <div className='footer'> Copyright © 2022 nitjsr.ac.in Web Support: Web Team</div>
    </div>
    
    </div>
  );
}

export default App;
