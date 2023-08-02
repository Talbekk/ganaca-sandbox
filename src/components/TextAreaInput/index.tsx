import { ChangeEvent, FunctionComponent } from 'react';

type TextAreaInputProps = {
    isSubmitted: boolean;
    setIsSubmitted: (newValue: boolean) => void;
    textToTranslate: string;
    textAreaChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    submitHandler: () => void;
};

const TextAreaInput: FunctionComponent<TextAreaInputProps> = ({ isSubmitted, setIsSubmitted, textToTranslate, textAreaChangeHandler, submitHandler }) => {
    return (
        <section className="section-textarea-input">
            <textarea
                className="text-area"
                placeholder="Enter text to be translated here..."
                rows={20}
                cols={100}
                value={textToTranslate}
                onChange={textAreaChangeHandler}
            />
            <button className="btn" onClick={() => submitHandler()}>
                Translate
            </button>
        </section>
    );
};

export default TextAreaInput;
