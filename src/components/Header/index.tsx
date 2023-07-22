import { FunctionComponent } from 'react';

export const Header: FunctionComponent = () => {
    return (
        <section className="section-header">
            <h1 className="heading-primary">IRT</h1>
            <p className="heading-secondary">
                <strong className="heading-secondary-strong">Know</strong> the words you don't know
            </p>
        </section>
    );
};

export default Header;
