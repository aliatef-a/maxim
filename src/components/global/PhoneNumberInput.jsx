import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const PhoneNumberInput = () => {
    const [value, setValue] = useState('');
    return (
        <div dir='ltr' >
            <PhoneInput
                international
                defaultCountry="EG"
                value={value}
                onChange={setValue}
                className='phone-number-input'
            />
        </div>
    );
};

export default PhoneNumberInput;
