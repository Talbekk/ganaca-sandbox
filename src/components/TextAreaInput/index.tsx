import { FunctionComponent } from 'react';

const TextAreaInput: FunctionComponent = () => {
    return (
        <section className="section-textarea-input">
            <textarea className="text-area" placeholder="Enter text to be translated here..." rows={20} cols={100} />
            <button className="btn">Submit</button>
        </section>
    );
};

export default TextAreaInput;
