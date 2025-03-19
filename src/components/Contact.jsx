import React from 'react'
import { toast } from 'react-toastify';
import {motion} from 'framer-motion'

const Contact = () => {

  // Web3 Provider Code
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "44b5a8c2-bc2e-452d-a1c8-1569529dc116");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };


  return (
    // Framar Motion website
    <motion.div 
    initial={{opacity: 0, x:-200}}
    transition ={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className=' text-2xl sm:text-4xl text-center font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Togther</p>


      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>

          {/* Name Input */}
          <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input type="text" placeholder='Your Name' name='Name' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none' required />
          </div>
          {/* Email Input */}
          <div className='w-full md:w-1/2 md:pl-4 text-left '>Your Email
            <input type="email" placeholder='Your Email' name='Email' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none' required />
          </div>

        </div>

        {/* Message TextArea */}
        <div className=' my-6 text-left'>
          Message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-none' name="Message" placeholder='Message' required></textarea>
        </div>

        {/* Submit Button */}
        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result:"Send Message"}</button>
      </form>
    </motion.div>
  )
}

export default Contact