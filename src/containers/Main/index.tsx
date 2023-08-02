import { ChangeEvent, FunctionComponent, useCallback, useMemo, useState } from 'react';
import InitialLandingPage from '../InitialLandingPage';
import TranslatedResultPage from '../TranslatedResultPage';

const Main: FunctionComponent = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [textToTranslate, setTextToTranslate] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [translatedText, setTranslatedText] = useState<string>('');

    const handleTextAreaChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextToTranslate(event.target.value);
    }, []);

    const handleSubmit = useCallback(() => {
        setIsLoading(true);
        setIsSubmitted(!isSubmitted);
        if (textToTranslate !== '') {
            setTranslatedText(textToTranslate);
        }
        setIsLoading(false);
    }, [isSubmitted, textToTranslate]);

    const showPage = useMemo(() => {
        if (isLoading) {
            return <p>Loading...</p>;
        }
        return isSubmitted ? (
            <TranslatedResultPage translatedText={translatedText} />
        ) : (
            <InitialLandingPage
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
                textToTranslate={textToTranslate}
                textAreaChangeHandler={handleTextAreaChange}
                submitHandler={handleSubmit}
            />
        );
    }, [handleSubmit, handleTextAreaChange, isLoading, isSubmitted, textToTranslate, translatedText]);
    return <section className="main">{showPage}</section>;
};

export default Main;
