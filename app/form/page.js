'use client'
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'
import Gstyles from "../globals.css";

//react hookForm

export default function Form() {
    const router = useRouter()

    const FormAction = async (formData) =>{
        const rawFormData = {
          user_type: (formData.get('user type') == 'mentor') ? true : false,
        first_name: formData.get('first name'),
        family_name: formData.get('family name'),
        email: formData.get('email'),
        tel: formData.get('tel'),
        city: formData.get('city'),
        linkedin: formData.get('linkedin'),
        about: formData.get('about'),
        programming_languages: [
          formData.get('js'),
          formData.get('html'),
          formData.get('css'),
          formData.get('java'),
          formData.get('csharp'),
          formData.get('python')
        ],
        company: formData.get('company'),
        job_title: formData.get('job'),
        username: formData.get('username'),
        password: formData.get('password')
        }
        console.log( "======================="),
        console.log('rawFormData:', rawFormData)
        
        
        try{
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rawFormData),
            });
            if(response.ok){
                router.push('/homePage')
            }else{
                console.error('Failed to register:', await response.json())
            }
        }catch(error){
            console.error('Failed to register:', error)
        }
      };
      
    const userTypeCleckedHandler = (event) => {
        const userType = event.target.value
        console.log('userType:', userType)
        if (userType === 'student') {
            document.querySelector('input[name="company"]').disabled = true
            document.querySelector('input[name="job"]').disabled = true
            document.querySelector('input[name="js"]').disabled = true
            document.querySelector('input[name="html"]').disabled = true
            document.querySelector('input[name="css"]').disabled = true
            document.querySelector('input[name="python"]').disabled = true
            document.querySelector('input[name="csharp"]').disabled = true
            document.querySelector('input[name="java"]').disabled = true
            document.querySelector('input[name="avatar"]').disabled = true
        }
    }
    
  return (
    <>
    <div className={Gstyles.container}>
      
        <h1 className={styles.title}>טופס הרשמה</h1>
      
      
      <form className={styles.form} action={FormAction} autoComplete="on">
        <fieldset className="formGroup">
          <legend>מי את ?</legend>
          <div>
            <input className={styles.input} type="radio" id="mentor" name="user type" value="mentor" onClick={userTypeCleckedHandler}/>
            <label for="mentor">מנטורית</label>
            <input
              type="radio"
              id="student"
              name="user type"
              value="student"
              onClick={userTypeCleckedHandler}
              className={styles.input}
            />
            <label for="student">מנטית</label>
          </div>
        </fieldset>
        <label>
          שם פרטי:
          <input className={styles.input} type="text" name="first name"/>
        </label>
        <label>
          שם משפחה:
          <input className={styles.input} type="text" name="family name" />
        </label>
        <label>
          עיר מגורים:
          <input className={styles.input} type="text" name="city" />
        </label>
        <label>
          Email:
          <input className={styles.input} type="email" id="email" name="email" autocomplete="on"/>
        </label>
        <label>
          טלפון:
          <input className={styles.input} type="tel" id="tel" name="tel" autocomplete="off"/>
        </label>
        <label>
          קישור לפרופיל לינקדאין:
          <input className={styles.input} type="url" id="linkdin" name="linkdin" autocomplete="off"/>
        </label>
        <label>
          ספרי על עצמך:
          <textarea className={styles.input} name="about" cols="50" rows="8" autocomplete="off"></textarea>
        </label>
        <fieldset>
          <legend>מהן שפות התכנות בהן תרצי להדריך?</legend>
          <div>
            <input className={styles.input} type="checkbox" id="js" value="js" name="js"/>
            <label for="js">Java Script</label>
          </div>
          <div>
            <input className={styles.input} type="checkbox" id="html"  value="html" name="html"/>
            <label for="html">HTML</label>
          </div>
          <div>
            <input className={styles.input} type="checkbox" id="css"  value="css" name="css"/>
            <label for="css">CSS</label>
          </div>
          <div>
            <input className={styles.input} type="checkbox" id="java"  value="java" name="java"/>
            <label for="java">JAVA</label>
          </div>
          <div>
            <input className={styles.input} type="checkbox" id="csharp"  value="csharp" name="csharp"/>
            <label for="csharp">C#</label>
          </div>
          <div>
            <input className={styles.input} type="checkbox" id="python"  value="python" name="python"/>
            <label for="python">Python</label>
          </div>
        </fieldset>
        <label>
          שם החברה בה עובדת כיום:
          <input className={styles.input} type="text" name="company" autocomplete="off"/>
        </label>
        <label>
          תפקיד בחברה:
          <input className={styles.input} type="text" name="job" />
        </label>
        <div>
          <label for="avatar">תמונת פרופיל</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            className={styles.input}
          />
        </div>

        <div>
          <label for="username">שם משתמש:</label>
          <input className={styles.input} type="text" id="username" name="username" autocomplete="off" required/>
        </div>
        <div>
          <label for="pass">סיסמא (8 תווים לפחות):</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            autocomplete="off"
            required
            className={styles.input}
          />
        </div>
        <button className={styles.button} type="submit" id="submit">לחצי לסיום הרשמה</button>
      </form>
      </div>
      
    </>
  );
}
