import React from 'react';
import './CVPage.scss';
import cvPdf from './cv_magnus_gustafsson_sans_refs.pdf';

class CVPage extends React.Component {
    render() {
        return (<div className="cv-content">
            <iframe src={cvPdf} />
        </div>);
    }
}

export default CVPage;