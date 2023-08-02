import { FunctionComponent } from 'react';

type TranslatedTextProps = {
    translatedText: string;
};

const TranslatedText: FunctionComponent<TranslatedTextProps> = ({ translatedText }) => {
    return <section className="translated_text_section">{translatedText}</section>;
};

export default TranslatedText;
