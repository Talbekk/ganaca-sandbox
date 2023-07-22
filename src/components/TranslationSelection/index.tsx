import { FunctionComponent } from 'react';

const TranslationSelection: FunctionComponent = () => {
    return (
        <section className="section-translation-selection">
            <select name="translate-from" id="translate-from" className="translation-select">
                <option value="english" selected>
                    English
                </option>
                <option value="korean">Korean</option>
            </select>
            <span className="arrow-image">&gt;</span>
            <select name="translate-to" id="translate-to" className="translation-select">
                <option value="english">English</option>
                <option value="korean" selected>
                    Korean
                </option>
            </select>
        </section>
    );
};

export default TranslationSelection;
