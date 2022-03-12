
import useCheckOut from '../../hooks/use-checkout';

import classes from './Checkout.module.css'

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {

    // const {
    //     value : enteredName,
    //     Isvalid : enteredNameIsValid,
    //     errorCheck : enteredNameError,
    //     InputChangeHandler

    // } = useCheckOut(isEmpty)

    // const {
    //     value : enteredStreet,
    //     Isvalid : enteredNameIsValid,
    //     errorCheck : enteredNameError,
    //     InputChangeHandler

    // } = useCheckOut(isEmpty)

    // const {
    //     value : enteredStreet,
    //     Isvalid : enteredNameIsValid,
    //     errorCheck : enteredNameError,
    //     InputChangeHandler

    // } = useCheckOut(isEmpty)

    // const {
    //     value : enteredStreet,
    //     Isvalid : enteredNameIsValid,
    //     errorCheck : enteredNameError,
    //     InputChangeHandler

    // } = useCheckOut(isFiveChars)

  



    const confirmHandler = event => {
        event.preventDefault();


        
 

    

        setFormInputsValidity({
            name : enteredNameIsValid,
            street: enteredStreetValid,
            city: enteredCityValid,
            postalCode : enteredPostalCodeIsValid,
        })

        const formIsValid = 
        enteredNameIsValid && 
        enteredStreetValid &&
        enteredCityValid &&
        enteredPostalCodeIsValid;



        if(!formIsValid) {
            return
        }

        props.onConfirm({
            name : enteredName,
            street : enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode
        });
    }

    const nameControllClasses =`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const streetControllClasses =`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
    const cityControllClasses =`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;
    const postalControllClasses =`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`;

    return <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControllClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' 
                     id='name' 
                     value={nameValue}
                     onChange={nameChangeHandler}
                     onBlur={validateName}/>
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControllClasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' 
                     id='street' 
               onChange={streetChangeHandler}
                onBlur={validateStreet}/>
            {!formInputsValidity.street && <p>Please enter a valid Street!</p>}
        </div>
        <div className={postalControllClasses}>
            <label htmlFor='postal'>Postal Street</label>
            <input type='text' 
                     id='postal' 
               onChange={postalChangeHandler}
                 onBlur={validatePostal}/>
            {!formInputsValidity.postalCode && <p>Please enter a valid Postal!</p>}
        </div>
        <div className={cityControllClasses}>
            <label htmlFor='city'>City Street</label>
            <input type='text' 
                     id='city' 
                  value={cityValue}
                  onChange={cityChangeHandler}
                onBlur={validateCity}/>
            {!formInputsValidity.city && <p>Please enter a valid City!</p>}
        </div>
        <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancle</button>
        <button className={classes.submit}>Confirm</button>
        </div>
      
        
    </form>
}

export default Checkout