import TranslationSelection from '../../components/TranslationSelection';
import TextAreaInput from '../../components/TextAreaInput';
import Header from '../../components/Header';
import { FunctionComponent } from 'react';

const Main: FunctionComponent = () => {
    return (
        <section className="main">
            <Header />
            <TranslationSelection />
            <TextAreaInput />
        </section>
    );
};

export default Main;
