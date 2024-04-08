import React from 'react'
import  {ToastContainer, toast} from 'react-toastify'
import NewsItem from './components/NewsItem'
const App = () => {

    const news = [
        {
            image: 'https://sport1images.maariv.co.il/image/upload/f_auto,fl_lossy,c_thumb,g_north,w_180,h_120/1190138',
            title: 'המטרות של מכבי חיפה: לפצות את הקהל ולהחזיר את הכבוד',
            league: 'ליגת העל'
        },
        {
            image: 'https://sport1images.maariv.co.il/image/upload/f_auto,fl_lossy,c_thumb,g_north,w_180,h_120/1190068',
            title: 'צריך להיפרד מערן זהבי בצורה מכובדת – ויהיו הזדמנויות לעשות את זה',
            league: 'נבחרת ישראל'
        },
        {
            image: 'https://sport1images.maariv.co.il/image/upload/f_auto,fl_lossy,c_thumb,g_north,w_180,h_120/1190486',
            title: 'ליברפול איבדה את הפסגה, יונייטד איבדה את הכבוד: האמירה המשפילה',
            league: 'ליגה אנגלית'
        },
    ]

    const handleClick = () =>{
        toast.success('Hello from ReactJS')
    }

  return (
    <>
    <ToastContainer />


    <div className='container-fluid'>
        <div className='container'>
            <p className='flex'>
            <span className=''><a href='#'>דף הבית</a></span>
            <span className=''><a href='#'>דף הבית</a></span>
            <span className=''><a href='#'>דף הבית</a></span>
            <span className=''><a href='#'>דף הבית</a></span>
            <span className=''><a href='#'>דף הבית</a></span>
            <span className=''><a href='#'>דף הבית</a></span>
            </p>
        </div>
    </div>


    <div className='container'>
         <div className='row'>
            <div className='col-lg-8 col-12 col-md-6 box2 '>
               <div className='crop'>
                     <img className='img' src='https://sport1images.maariv.co.il/image/upload/f_auto,fl_lossy,c_thumb,g_north,w_833,h_642/1190550'/>
                     <div className='text_cont'><p>רגע לפני משחק העונה, קשר מכבי ת"א דיבר על הפער המחודש בפסגה ("הבאנו את עצמנו למצב הזה"), המאץ'-אפ עם מכבי חיפה ("רוצים להציג את הכדורגל הנכון") שיא השערים והקשר עם קין: "הדרישות שלו מביאות לידי ביטוי את החוזקות שלי"</p></div>
               </div>
            </div>

            <div className='col-lg-4 col-12 col-md-6 box1'>
                {
                    news.map((item, index, league) => (
                        <NewsItem key={index} item={item}/>
                    ))
                }
                </div>

         </div>
    </div>
    </>
  )
}

export default App

