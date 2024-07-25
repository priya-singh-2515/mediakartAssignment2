import "./App.css";
import ReactImageMagnify from 'react-image-magnify';

function App() {
  const microimg = '../images/micro.jpg';
  return (
      <>
         <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div>
                   <div id="imageMagnifyer">
                     <ReactImageMagnify
                        {...{
                         smallImage: {
                         alt: "Wristwatch by Ted Baker London",
                         isFluidWidth: true,
                         src: microimg,
                        },
                        largeImage: {
                        src: microimg ,
                        width: 1200,
                        height: 1800,
                       },
                      }}
                     />
                 </div>
                 <div>
                  <p className="text">
                  A microprocessor is a computer processor for which the data processing logic and control is included on a single integrated circuit (IC), or a small number of ICs. The microprocessor contains the arithmetic, logic, and control circuitry required to perform the functions of a computer's central processing unit (CPU). The IC is capable of interpreting and executing program instructions and performing arithmetic operations.[1] The microprocessor is a multipurpose, clock-driven, register-based, digital integrated circuit that accepts binary data as input, processes it according to instructions stored in its memory, and provides results (also in binary form) as output. Microprocessors contain both combinational logic and sequential digital logic, and operate on numbers and symbols represented in the binary number system.
                  </p>
                 </div>
                </div>
            </div>
          </div>
         </div>
  



</>
   
    
      
  );
}

export default App;
