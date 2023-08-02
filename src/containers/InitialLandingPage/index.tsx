import { ChangeEvent, FunctionComponent } from 'react';
import Header from '../../components/Header';
import TextAreaInput from '../../components/TextAreaInput';
import TranslationSelection from '../../components/TranslationSelection';

type InitialLandingPageProps = {
    isSubmitted: boolean;
    setIsSubmitted: (newValue: boolean) => void;
    textToTranslate: string;
    textAreaChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    submitHandler: () => void;
};

const InitialLandingPage: FunctionComponent<InitialLandingPageProps> = ({
    isSubmitted,
    setIsSubmitted,
    textToTranslate,
    textAreaChangeHandler,
    submitHandler,
}) => {
    return (
        <>
            <Header />
            <TranslationSelection />
            <TextAreaInput
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
                textToTranslate={textToTranslate}
                textAreaChangeHandler={textAreaChangeHandler}
                submitHandler={submitHandler}
            />
        </>
    );
};

export default InitialLandingPage;
