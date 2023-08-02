import { FunctionComponent } from 'react';
import Header from '../../components/Header';
import TranslatedText from '../../components/TranslatedText';
import TranslationSelection from '../../components/TranslationSelection';

type TranslatedResultPageProps = {
    translatedText: string;
};

const TranslatedResultPage: FunctionComponent<TranslatedResultPageProps> = ({ translatedText }) => {
    return (
        <>
            <Header />
            <TranslationSelection />
            <TranslatedText translatedText={translatedText} />
        </>
    );
};

export default TranslatedResultPage;
