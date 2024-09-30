// import React, { useState } from "react";
// //import { Form, Button, Container } from "react-bootstrap";
// import EducationTrainingDetailsForm from "../forms/EducationDetailsForm";
// import JoiningDetailsForm from "../forms/JoiningDetailsForm";

// const RegisterScreen = () => {

//     // State to manage which form is currently being shown
//     const [currentForm, setCurrentForm] = useState(1);

//     // State to hold the joining details data
//   const [joiningDetails, setJoiningDetails] = useState({
//     dateOfJoining: '',
//     officeName: '',
//     initialDesignation: '',
//     modeOfRecruitment: '',
//     dateOfAppointment:'',
//     employeeType:''
//   });

//   // State to hold the education and training details data
//   const [educationDetails, setEducationDetails] = useState({});
//   const [trainingDetails, setTrainingDetails] = useState({});

//   // Function to validate joining form fields before navigating to the next form
//   const validateJoiningDetails = () => {
//     const { dateOfJoining, dateOfAppointment, officeName, initialDesignation, modeOfRecruitment, employeeType } = joiningDetails;
//     return dateOfJoining && dateOfAppointment && officeName && initialDesignation && modeOfRecruitment && employeeType;
//   };

//   // Function to go to the next form (Education/Training Details)
//   const goToNextForm = () => {
//     if (validateJoiningDetails()) {
//       setCurrentForm(2);  // Go to the next form (Education & Training)
//     } else {
//       alert('Please fill out all Joining Details before proceeding.');
//     }
//   };

//   // Function to go back to the previous form (Joining Details)
//   const goToPreviousForm = () => {
//     setCurrentForm(1);  // Go back to the Joining Details form
//   };


//   return(
//     <div className="register-screen">
//        {currentForm===1 && (<JoiningDetailsForm
//         joiningDetails={joiningDetails}
//         setJoiningDetails={setJoiningDetails}
//         goToNextForm={goToNextForm}
//         /> )}

//         {currentForm===2 && <EducationTrainingDetailsForm
//         educationDetails={educationDetails}
//         setEducationDetails={setEducationDetails}
//         trainingDetails={trainingDetails}
//         setTrainingDetails={setTrainingDetails}
//         goToPreviousForm={goToPreviousForm}
//          />}
        
//     </div>
//   )
// };

// export default RegisterScreen;


import React, { useState } from "react";
import EducationTrainingDetailsForm from "../forms/EducationDetailsForm";
import JoiningDetailsForm from "../forms/JoiningDetailsForm";

const RegisterScreen = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const [joiningDetails, setJoiningDetails] = useState({
    dateOfJoining: '',
    officeName: '',
    initialDesignation: '',
    modeOfRecruitment: '',
    dateOfAppointment: '',
    employeeType: ''
  });

  const [educationDetails, setEducationDetails] = useState({});
  const [trainingDetails, setTrainingDetails] = useState({});

  const goToNextForm = () => {
    setCurrentForm(2);
  };

  const goToPreviousForm = () => {
    setCurrentForm(1);
  };

  return (
    <div className="register-screen">
      {currentForm === 1 && (
        <JoiningDetailsForm
          joiningDetails={joiningDetails}
          setJoiningDetails={setJoiningDetails}
          goToNextForm={goToNextForm}
        />
      )}

      {currentForm === 2 && (
        <EducationTrainingDetailsForm
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
          trainingDetails={trainingDetails}
          setTrainingDetails={setTrainingDetails}
          goToPreviousForm={goToPreviousForm}
        />
      )}
    </div>
  );
};

export default RegisterScreen;
