import React from 'react';
import img_eng from '../../img/eng_96.png';
import img_ru from '../../img/ru_96.png';
class LangsContent  extends React.Component {
    render() {
        return (
            <div className={'langs_content'}>
                <h1>Please select a language</h1>
                <div className={'langs'}>
                    <div className={'lang'} data-value="en" onClick={this.props.changeLang}><img src={img_eng} width='96px' height='96px' alt=""/>English</div>
                    <div className={'lang'} data-value="ru" onClick={this.props.changeLang}><img src={img_ru} width='96px' height='96px' alt=""/>Русский</div>
                </div>
            </div>
        );
    }
}

export default LangsContent;