import { sendEmail } from '@/lib/util/sendEmail';

async function SubmitEmail(data:any) {
  try {
    const emailConfig = {
      user: 'hanselmega@gmail.com',
      pass: 'sharingan13',
    };
    console.log(data)
    await sendEmail(data, emailConfig);
    
  } catch (error) {
    
  }
  
}

export default SubmitEmail
